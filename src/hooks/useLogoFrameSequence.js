'use client';

import { useEffect, useRef, useState } from 'react';

/**
 * Canvas-driven, scroll-scrubbed image sequence player.
 *
 * Design constraints this hook exists to satisfy:
 * - The current frame is never put in React state (it changes on every scroll
 *   tick). It lives in a ref and is painted via requestAnimationFrame, fully
 *   decoupled from React's render cycle.
 * - Frames are decoded with createImageBitmap (off-main-thread decode in
 *   Chromium/Firefox, and off the layout/paint path in Safari) instead of
 *   relying on <img> decode-on-draw.
 * - Only a window of frames around the current position is kept decoded.
 *   ImageBitmaps outside the window are closed (freed) immediately - decoding
 *   all 240 frames at once would hold ~840MB of raster memory.
 * - Loading is priority-ordered: frame 1 first, then a sparse skeleton across
 *   the whole sequence (so a "nearest available" frame is always paintable
 *   even before dense loading finishes), then the remaining frames fill in
 *   during idle time, reprioritized toward the scroll direction as the user
 *   scrolls.
 */
export default function useLogoFrameSequence({
  totalFrames,
  frameProgress, // framer-motion MotionValue, continuous 1..totalFrames
  frameUrl, // (index: number) => string
  naturalWidth,
  naturalHeight,
  disabled = false,
}) {
  const canvasRef = useRef(null);
  const wrapperRef = useRef(null);
  const [firstFrameReady, setFirstFrameReady] = useState(false);

  // Mutable, non-reactive animation state.
  const ctxRef = useRef(null);
  const bitmapCache = useRef(new Map());
  const inFlight = useRef(new Set());
  const queue = useRef([]); // ordered array of frame indices, front = next to load
  const targetFrameRef = useRef(1);
  const directionRef = useRef(1);
  const dirtyRef = useRef(true);
  const rafId = useRef(null);
  const sizeRef = useRef({ cssW: 0, cssH: 0, dpr: 1 });
  const supportsBitmap = useRef(true);
  const isMobileRef = useRef(false);
  const activeLoads = useRef(0);
  const idleHandle = useRef(null);
  const destroyed = useRef(false);

  useEffect(() => {
    if (disabled) return undefined;
    if (typeof window === 'undefined') return undefined;

    destroyed.current = false;
    supportsBitmap.current = typeof window.createImageBitmap === 'function';
    isMobileRef.current = window.matchMedia('(max-width: 767px)').matches;

    const MAX_CONCURRENT = isMobileRef.current ? 3 : 6;
    const CACHE_WINDOW = isMobileRef.current ? 22 : 48;
    const SKELETON_STEP = isMobileRef.current ? 16 : 10;

    const canvas = canvasRef.current;
    const wrapper = wrapperRef.current;
    if (!canvas || !wrapper) return undefined;
    // alpha must stay enabled: letterboxed/empty regions need to fall through
    // to the section's animated background-color, not render as opaque black.
    const ctx = canvas.getContext('2d');
    ctxRef.current = ctx;
    // Stable references for the duration of this effect (including cleanup) -
    // the Map/Set identity never changes across renders, only its contents.
    const cache = bitmapCache.current;
    const inFlightSet = inFlight.current;

    // ---------- drawing ----------

    function paint() {
      dirtyRef.current = false;
      const { cssW, cssH } = sizeRef.current;
      if (!ctx || cssW === 0 || cssH === 0) return;

      const target = targetFrameRef.current;
      let bitmap = cache.get(target);
      if (!bitmap) {
        // Nearest-available fallback: never show nothing.
        for (let r = 1; r < totalFrames && !bitmap; r++) {
          bitmap =
            cache.get(target - r) ||
            cache.get(target + r);
        }
        requestFrame(target, true);
      }

      ctx.clearRect(0, 0, cssW, cssH);
      if (bitmap) {
        const scale = Math.min(cssW / naturalWidth, cssH / naturalHeight);
        const dw = naturalWidth * scale;
        const dh = naturalHeight * scale;
        const dx = (cssW - dw) / 2;
        const dy = (cssH - dh) / 2;
        ctx.drawImage(bitmap, dx, dy, dw, dh);
      }
    }

    function scheduleDraw() {
      if (rafId.current != null) return;
      rafId.current = requestAnimationFrame(() => {
        rafId.current = null;
        if (dirtyRef.current) paint();
      });
    }

    // ---------- loading ----------

    function decode(blob) {
      if (supportsBitmap.current) {
        return window.createImageBitmap(blob);
      }
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = () => resolve(img);
        img.onerror = reject;
        img.src = URL.createObjectURL(blob);
      });
    }

    async function fetchFrame(index, urgent) {
      if (destroyed.current) return;
      if (cache.has(index) || inFlightSet.has(index)) return;
      inFlightSet.add(index);
      activeLoads.current++;
      try {
        const res = await fetch(frameUrl(index), {
          priority: urgent ? 'high' : 'low',
        });
        const blob = await res.blob();
        const bitmap = await decode(blob);
        if (destroyed.current) {
          if (bitmap && typeof bitmap.close === 'function') bitmap.close();
          return;
        }
        cache.set(index, bitmap);
        if (index === 1) setFirstFrameReady(true);
        if (Math.abs(index - targetFrameRef.current) <= 1) {
          dirtyRef.current = true;
          scheduleDraw();
        }
      } catch {
        // Network hiccup: leave it out of cache, the priority queue or a
        // future urgent request will retry it. Scrolling must never stall.
      } finally {
        inFlightSet.delete(index);
        activeLoads.current--;
        pump();
      }
    }

    function requestFrame(index, urgent) {
      if (
        index < 1 ||
        index > totalFrames ||
        cache.has(index) ||
        inFlightSet.has(index)
      ) {
        return;
      }
      if (urgent) {
        queue.current = queue.current.filter((f) => f !== index);
        queue.current.unshift(index);
        pump();
      } else if (!queue.current.includes(index)) {
        queue.current.push(index);
      }
    }

    function pump() {
      while (activeLoads.current < MAX_CONCURRENT && queue.current.length > 0) {
        const next = queue.current.shift();
        if (!cache.has(next) && !inFlightSet.has(next)) {
          fetchFrame(next, false);
        }
      }
    }

    function pruneCache(center) {
      for (const [key, bitmap] of cache) {
        if (Math.abs(key - center) > CACHE_WINDOW) {
          if (typeof bitmap.close === 'function') bitmap.close();
          cache.delete(key);
        }
      }
    }

    function reprioritize(center, direction) {
      // Keep only still-relevant pending frames, closest-first, biased
      // toward the direction the user is scrolling.
      const ahead = [];
      const behind = [];
      for (let d = 1; d <= CACHE_WINDOW; d++) {
        const fwd = center + direction * d;
        const back = center - direction * d;
        if (fwd >= 1 && fwd <= totalFrames && !cache.has(fwd)) {
          ahead.push(fwd);
        }
        if (back >= 1 && back <= totalFrames && !cache.has(back)) {
          behind.push(back);
        }
      }
      queue.current = [...ahead, ...behind, ...queue.current].filter(
        (f, i, arr) =>
          arr.indexOf(f) === i &&
          !cache.has(f) &&
          !inFlightSet.has(f)
      );
      pump();
    }

    function scheduleIdle(cb) {
      if (typeof window.requestIdleCallback === 'function') {
        return window.requestIdleCallback(cb, { timeout: 1000 });
      }
      return window.setTimeout(cb, 200);
    }

    function cancelIdle(handle) {
      if (typeof window.cancelIdleCallback === 'function') {
        window.cancelIdleCallback(handle);
      } else {
        window.clearTimeout(handle);
      }
    }

    // ---------- sizing ----------

    function resize() {
      const rect = wrapper.getBoundingClientRect();
      const cssW = Math.round(rect.width);
      const cssH = Math.round(rect.height);
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      if (
        sizeRef.current.cssW === cssW &&
        sizeRef.current.cssH === cssH &&
        sizeRef.current.dpr === dpr
      ) {
        return;
      }
      sizeRef.current = { cssW, cssH, dpr };
      canvas.width = Math.max(1, Math.round(cssW * dpr));
      canvas.height = Math.max(1, Math.round(cssH * dpr));
      canvas.style.width = `${cssW}px`;
      canvas.style.height = `${cssH}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      dirtyRef.current = true;
      scheduleDraw();
    }

    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(wrapper);
    resize();

    // ---------- initial load plan ----------

    requestFrame(1, true);

    idleHandle.current = scheduleIdle(() => {
      // Sparse skeleton across the whole sequence so "nearest available"
      // is always close by, even before dense loading catches up.
      for (let i = 1; i <= totalFrames; i += SKELETON_STEP) {
        requestFrame(i, false);
      }
      // Fill in the rest, ascending, lowest priority.
      for (let i = 1; i <= totalFrames; i++) {
        requestFrame(i, false);
      }
      pump();
    });

    // ---------- scroll-driven target frame ----------

    const unsubscribe = frameProgress.on('change', (latest) => {
      const idx = Math.min(totalFrames, Math.max(1, Math.round(latest)));
      const prev = targetFrameRef.current;
      if (idx === prev) return;
      directionRef.current = idx > prev ? 1 : -1;
      targetFrameRef.current = idx;
      dirtyRef.current = true;
      scheduleDraw();
      reprioritize(idx, directionRef.current);
      pruneCache(idx);
    });

    return () => {
      destroyed.current = true;
      unsubscribe();
      resizeObserver.disconnect();
      if (rafId.current != null) cancelAnimationFrame(rafId.current);
      if (idleHandle.current != null) cancelIdle(idleHandle.current);
      for (const bitmap of cache.values()) {
        if (typeof bitmap.close === 'function') bitmap.close();
      }
      cache.clear();
      inFlightSet.clear();
      queue.current = [];
    };
  }, [disabled, totalFrames, frameUrl, naturalWidth, naturalHeight, frameProgress]);

  return { canvasRef, wrapperRef, firstFrameReady };
}
