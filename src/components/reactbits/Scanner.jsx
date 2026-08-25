'use client';

import React, { useEffect, useRef } from 'react';

export default function Scanner({
  color1 = '#F5C400',
  color2 = '#111111',
  color3 = '#FFFFFF',
  speed = 0.5,
  sweepSpeed = 0.25,
  sweepWidth = 1.6,
  sweepFalloff = 6,
  scale = 1.5,
  frequency = 2,
  ripple = 0.22,
  bandDensity = 11,
  lineSharpness = 5.5,
  glow = 0.22,
  scanDirection = 'vertical',
  colorSpread = 0.7,
  brightness = 1.0,
  contrast = 1.15,
  softness = 1.4,
  vignette = 0.45,
  scanline = true,
  grain = true,
  grainIntensity = 0.05,
  opacity = 1.0,
  mouseInteraction = true,
  mouseRadius = 0.5,
  mouseStrength = 0.5,
  className = '',
}) {
  const canvasRef = useRef(null);
  const mouseRef = useRef({ x: 0.5, y: 0.5 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let width = (canvas.width = canvas.parentElement.offsetWidth);
    let height = (canvas.height = canvas.parentElement.offsetHeight);

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.offsetWidth;
      height = canvas.height = canvas.parentElement.offsetHeight;
    };

    const handleMouseMove = (e) => {
      if (!mouseInteraction || !canvas) return;
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: (e.clientX - rect.left) / rect.width,
        y: (e.clientY - rect.top) / rect.height,
      };
    };

    window.addEventListener('resize', handleResize);
    if (mouseInteraction) {
      window.addEventListener('mousemove', handleMouseMove);
    }

    let time = 0;

    const render = () => {
      time += speed * 0.02;
      ctx.clearRect(0, 0, width, height);

      // Save opacity
      ctx.globalAlpha = opacity;

      // Draw Base Background Sweep Pattern
      const sweepY = ((time * sweepSpeed * 100) % (height + 200)) - 100;
      
      const sweepGradient = ctx.createLinearGradient(0, sweepY - 100 * sweepWidth, 0, sweepY + 100 * sweepWidth);
      sweepGradient.addColorStop(0, 'transparent');
      sweepGradient.addColorStop(0.5, color1);
      sweepGradient.addColorStop(1, 'transparent');

      ctx.fillStyle = sweepGradient;
      ctx.fillRect(0, 0, width, height);

      // Render Scanning Lines / Bands
      const lineGap = Math.max(10, Math.floor(height / bandDensity));
      ctx.strokeStyle = color1;
      ctx.lineWidth = 1;

      for (let y = 0; y < height; y += lineGap) {
        const distToSweep = Math.abs(y - sweepY);
        const intensity = Math.max(0, 1 - distToSweep / (150 * softness));

        if (intensity > 0.05) {
          ctx.beginPath();
          ctx.strokeStyle = color1;
          ctx.globalAlpha = opacity * intensity * glow * 2;
          ctx.moveTo(0, y);
          ctx.lineTo(width, y);
          ctx.stroke();
        }
      }

      // Mouse Ripple Effect
      if (mouseInteraction) {
        const mx = mouseRef.current.x * width;
        const my = mouseRef.current.y * height;
        const radius = Math.min(width, height) * mouseRadius;

        const mouseGrad = ctx.createRadialGradient(mx, my, 0, mx, my, radius);
        mouseGrad.addColorStop(0, color1);
        mouseGrad.addColorStop(1, 'transparent');

        ctx.fillStyle = mouseGrad;
        ctx.globalAlpha = opacity * mouseStrength * 0.2;
        ctx.beginPath();
        ctx.arc(mx, my, radius, 0, Math.PI * 2);
        ctx.fill();
      }

      // Scanline overlay
      if (scanline) {
        ctx.fillStyle = 'rgba(0, 0, 0, 0.03)';
        for (let y = 0; y < height; y += 4) {
          ctx.fillRect(0, y, width, 1.5);
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      if (mouseInteraction) {
        window.removeEventListener('mousemove', handleMouseMove);
      }
      cancelAnimationFrame(animationFrameId);
    };
  }, [
    color1,
    color2,
    color3,
    speed,
    sweepSpeed,
    sweepWidth,
    sweepFalloff,
    scale,
    frequency,
    ripple,
    bandDensity,
    lineSharpness,
    glow,
    scanDirection,
    colorSpread,
    brightness,
    contrast,
    softness,
    vignette,
    scanline,
    grain,
    grainIntensity,
    opacity,
    mouseInteraction,
    mouseRadius,
    mouseStrength,
  ]);

  return (
    <div className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`}>
      <canvas ref={canvasRef} className="w-full h-full block" />
    </div>
  );
}
