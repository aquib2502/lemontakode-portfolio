'use client';

import React from 'react';
import { motion } from 'framer-motion';
import CircuitBackground from './CircuitBackground';

// Hand-drawn accent underline for calling out a single keyword in the
// headline - a marker-style annotation rather than a plain <u>.
function SquiggleUnderline({ className }) {
  return (
    <svg
      viewBox="0 0 200 20"
      preserveAspectRatio="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M3 13 C 40 5, 75 18, 110 9 S 175 3, 197 11"
        fill="none"
        stroke="currentColor"
        strokeWidth="7"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function ProblemHero({ onViewWork, onStartProject }) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#020B1E] text-[#FAFAFA] select-none">
      {/* High-Contrast Vignette Overlay for Text Readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#020B1E]/95 via-[#020B1E]/50 to-[#020B1E] z-1" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_10%,#020B1E_90%)] z-1" />

      {/* Three.js Circuit Particles Background */}
      <div className="absolute inset-0 z-0">
        <CircuitBackground dark={true} />
      </div>

      {/* Subtle brand color accents behind content */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[140px] pointer-events-none z-1" />

      {/* Hero Content - minimal, centered, one clear message and one clear action */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-12 text-center flex flex-col items-center">
        {/* Headline with Brand-Gradient Typography */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.05]"
        >
          <span className="bg-gradient-to-r from-[#FAFAFA] to-white/70 bg-clip-text text-transparent">
            Digital{' '}
          </span>
          {/* Comma lives inside the same inline-block as "excellence" so the
              two travel together - a separate span here left a break
              opportunity right before the comma, wrapping it onto its own
              line. */}
          <span className="relative inline-block text-lemon-yellow">
            excellence,
            <SquiggleUnderline className="absolute left-0 -bottom-3 sm:-bottom-4 w-[90%] h-3 sm:h-4 text-lemon-yellow/80" />
          </span>
          <br />
          {/* Blue-to-yellow interpolates through a muddy gray-olive in plain
              RGB, especially over a short word - routing through white
              avoids the dead zone and reads as a clean shine instead. */}
          <span className="bg-gradient-to-r from-primary via-white to-[#FFD400] bg-clip-text text-transparent">
            engineered.
          </span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
          className="font-body text-base sm:text-lg text-white/60 max-w-xl mt-7 leading-relaxed font-light"
        >
          High-performance platforms, enterprise interfaces, and hardened security systems, built for businesses that refuse to stand still.
        </motion.p>

        {/* Single, clear call to action */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
          className="flex flex-col items-center gap-5 mt-11 z-20"
        >
          <button
            onClick={onStartProject}
            className="px-8 py-4 rounded-full bg-white hover:bg-white/90 text-dark-navy font-semibold text-sm tracking-wide transition-all duration-300 active:scale-[0.98] cursor-pointer shadow-[0_8px_30px_rgba(255,255,255,0.12)]"
          >
            Start a Project
          </button>
          <button
            onClick={onViewWork}
            className="text-xs uppercase tracking-[0.2em] font-semibold text-white/50 hover:text-white/80 transition-colors duration-300 cursor-pointer"
          >
            View Our Work
          </button>
        </motion.div>
      </div>
    </section>
  );
}
