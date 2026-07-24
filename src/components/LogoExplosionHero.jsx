'use client';

import React, { useRef } from 'react';
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
  interpolate,
} from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import useLogoFrameSequence from '../hooks/useLogoFrameSequence';

const TOTAL_FRAMES = 240;
const NATURAL_WIDTH = 1280;
const NATURAL_HEIGHT = 720;

function frameUrl(index) {
  return `/logo%20frames/ezgif-frame-${String(index).padStart(3, '0')}.jpg`;
}

// framer-motion's array-based `useTransform(value, input, output)` overload
// opts a chained value into an "accelerated" native scroll-timeline code path
// whenever its source (here, useScroll's scrollYProgress) carries
// `.accelerate` metadata - and that path does not evaluate multi-stop
// clamped ranges the way the plain JS interpolator does. Wrapping
// `interpolate()` in the function-based overload (`useTransform(() => ...)`)
// sidesteps that path entirely and guarantees standard clamped interpolation.
function scrollTransform(source, input, output) {
  const compute = interpolate(input, output);
  return () => compute(source.get());
}

export default function LogoExplosionHero({ onViewWork, onStartProject }) {
  const sectionRef = useRef(null);
  const prefersReducedMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end'],
  });

  const frameProgress = useTransform(
    scrollTransform(scrollYProgress, [0, 1], [1, TOTAL_FRAMES])
  );

  const { canvasRef, wrapperRef, firstFrameReady } = useLogoFrameSequence({
    totalFrames: TOTAL_FRAMES,
    frameProgress,
    frameUrl,
    naturalWidth: NATURAL_WIDTH,
    naturalHeight: NATURAL_HEIGHT,
    disabled: !!prefersReducedMotion,
  });

  // The source footage brightens from a near-black hold to its final light
  // backdrop between roughly frame 25 and frame 90 (~8%-37% scroll). The
  // section background is animated in lockstep so any letterboxing at the
  // canvas edges (aspect mismatches on tall/mobile viewports) never shows a
  // visible seam against the footage.
  const bgColor = useTransform(
    scrollTransform(
      scrollYProgress,
      [0, 0.08, 0.37, 1],
      ['#020B1E', '#020B1E', '#FAFAFA', '#FAFAFA']
    )
  );

  // Phase 1 (0-15%): hero messaging, fades/lifts away as the explosion begins.
  const phase1Opacity = useTransform(
    scrollTransform(scrollYProgress, [0, 0.1, 0.15], [1, 1, 0])
  );
  const phase1Y = useTransform(
    scrollTransform(scrollYProgress, [0, 0.15], [0, -28])
  );

  // Phase 3 (70-90%): reflective statement over the settling explosion.
  const phase3Opacity = useTransform(
    scrollTransform(scrollYProgress, [0.7, 0.76, 0.84, 0.9], [0, 1, 1, 0])
  );
  const phase3Y = useTransform(
    scrollTransform(scrollYProgress, [0.7, 0.78], [18, 0])
  );

  // Phase 4 (90-100%): resolution statement, holds through the pin's end.
  const phase4Opacity = useTransform(
    scrollTransform(scrollYProgress, [0.9, 0.96], [0, 1])
  );
  const phase4Y = useTransform(
    scrollTransform(scrollYProgress, [0.9, 0.97], [18, 0])
  );

  if (prefersReducedMotion) {
    return (
      <StaticHero onViewWork={onViewWork} onStartProject={onStartProject} />
    );
  }

  return (
    <section ref={sectionRef} className="relative h-[400vh]">
      <motion.div
        style={{ backgroundColor: bgColor }}
        className="sticky top-0 h-dvh w-full overflow-hidden"
      >
        {/* Frame sequence canvas. Confined to its own region rather than
            overlapping the text: a bottom band on mobile (text sits above,
            in normal flow within the pinned view), a right-hand column on
            desktop (text sits in the left margin). This guarantees zero
            overlap regardless of what any given frame's pixels look like,
            instead of relying on per-frame negative-space analysis. */}
        <div
          ref={wrapperRef}
          className="absolute top-[38dvh] right-0 bottom-0 left-0 md:top-0 md:right-0 md:bottom-0 md:left-[38%] flex items-center justify-center"
        >
          <canvas
            ref={canvasRef}
            className="block"
            aria-hidden="true"
            style={{
              opacity: firstFrameReady ? 1 : 0,
              transition: 'opacity 400ms ease-out',
            }}
          />
        </div>

        {/* Phase 1: hero messaging */}
        <motion.div
          style={{ opacity: phase1Opacity, y: phase1Y }}
          className="absolute inset-x-6 top-[8dvh] md:inset-x-auto md:top-1/2 md:left-[6vw] lg:left-[7vw] md:-translate-y-1/2 md:max-w-[30vw] flex flex-col items-start text-left"
        >
          <span className="text-[10px] uppercase tracking-[0.4em] font-extrabold text-primary mb-5 block">
            LemontaKode
          </span>
          <h1 className="font-display text-4xl sm:text-5xl md:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.1] text-[#FAFAFA]">
            Every idea
            <br />
            starts in pieces.
          </h1>
          <p className="font-body text-sm md:text-base text-white/70 max-w-md mt-6 leading-relaxed font-light">
            We construct high-performance platforms, enterprise interfaces,
            and hardened security systems that fuel business growth.
          </p>
          <div className="flex flex-col sm:flex-row items-start gap-4 mt-9">
            <button
              onClick={onStartProject}
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg bg-white hover:bg-white/90 text-dark-navy font-semibold text-xs uppercase tracking-wider transition-all duration-300 active:scale-[0.98] cursor-pointer shadow-sm group"
            >
              Start a Project
              <ArrowRight
                size={14}
                className="group-hover:translate-x-1 transition-transform"
              />
            </button>
            <button
              onClick={onViewWork}
              className="inline-flex items-center justify-center px-7 py-3.5 rounded-lg bg-transparent hover:bg-white/5 text-white font-semibold text-xs uppercase tracking-wider border border-white/20 hover:border-white/30 transition-all duration-300 active:scale-[0.98] cursor-pointer"
            >
              View Our Work
            </button>
          </div>
        </motion.div>

        {/* Phase 3: reflective statement, occupies the clear band beneath the
            settled explosion. Aligned to the same column as the canvas so it
            reads as one composition rather than full-width centering. */}
        <motion.div
          style={{ opacity: phase3Opacity, y: phase3Y }}
          className="absolute inset-x-6 bottom-[12dvh] md:inset-x-auto md:left-[38%] md:right-0 md:bottom-[10dvh] flex justify-center text-center pointer-events-none"
        >
          <p className="font-display text-2xl sm:text-3xl md:text-3xl lg:text-4xl font-semibold tracking-tight leading-[1.25] text-dark-navy max-w-2xl">
            Every great product
            <br />
            starts with the right pieces.
          </p>
        </motion.div>

        {/* Phase 4: resolution statement */}
        <motion.div
          style={{ opacity: phase4Opacity, y: phase4Y }}
          className="absolute inset-x-6 bottom-[10dvh] md:inset-x-auto md:left-[38%] md:right-0 md:bottom-[9dvh] flex justify-center text-center pointer-events-none"
        >
          <p className="font-display text-4xl sm:text-5xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.08] text-dark-navy">
            WE PUT THE
            <br />
            <span className="text-primary">PIECES</span> TOGETHER.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}

function StaticHero({ onViewWork, onStartProject }) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#020B1E] text-[#FAFAFA] px-6 py-28">
      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center text-center">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/logo-dark-bg-transparent.png"
          alt="LemontaKode Logo"
          className="w-40 h-40 md:w-48 md:h-48 object-contain mb-10"
        />
        <span className="text-[10px] uppercase tracking-[0.4em] font-extrabold text-primary mb-5 block">
          LemontaKode
        </span>
        <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.1] max-w-3xl">
          Every idea starts in pieces.
        </h1>
        <p className="font-body text-base md:text-lg text-white/70 max-w-xl mt-6 leading-relaxed font-light">
          We construct high-performance platforms, enterprise interfaces, and
          hardened security systems that fuel business growth.
        </p>
        <div className="flex flex-col sm:flex-row items-center gap-4 mt-10">
          <button
            onClick={onStartProject}
            className="px-7 py-3.5 rounded-lg bg-white hover:bg-white/90 text-dark-navy font-semibold text-xs uppercase tracking-wider transition-all duration-300 active:scale-[0.98] cursor-pointer shadow-sm"
          >
            Start a Project
          </button>
          <button
            onClick={onViewWork}
            className="px-7 py-3.5 rounded-lg bg-transparent hover:bg-white/5 text-white font-semibold text-xs uppercase tracking-wider border border-white/20 hover:border-white/30 transition-all duration-300 active:scale-[0.98] cursor-pointer"
          >
            View Our Work
          </button>
        </div>
        <p className="font-display text-lg md:text-xl font-semibold text-white/60 mt-16">
          WE PUT THE <span className="text-primary">PIECES</span> TOGETHER.
        </p>
      </div>
    </section>
  );
}
