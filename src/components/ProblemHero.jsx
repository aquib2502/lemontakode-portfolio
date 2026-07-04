'use client';

import React from 'react';
import { motion } from 'framer-motion';
import CircuitBackground from './CircuitBackground';

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

      {/* Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-12 text-center flex flex-col items-center pt-20">
        {/* Sleek Linear-style Plain Text Tag */}
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-[10px] uppercase tracking-[0.4em] font-extrabold text-primary mb-6 block"
        >
          01 / The Digital Dilemma
        </motion.span>

        {/* Headline with Brand-Gradient Typography */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          className="font-display text-4xl sm:text-6xl md:text-7.5xl font-extrabold tracking-tight leading-[1.08] max-w-4xl"
        >
          <span className="bg-gradient-to-r from-[#FAFAFA] to-white/70 bg-clip-text text-transparent">
            The digital world moves fast.
          </span>
          <br />
          <span className="bg-gradient-to-r from-primary via-blue-400 to-[#FFD400] bg-clip-text text-transparent">
            Most businesses struggle to keep up.
          </span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1], delay: 0.25 }}
          className="font-body text-sm sm:text-base md:text-lg text-white/70 max-w-2xl mt-8 leading-relaxed font-light"
        >
          Outdated systems, disconnected experiences, and generic solutions prevent businesses from reaching their full potential.
        </motion.p>

        {/* Action Buttons - Apple/Linear inspired sleek design */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12 w-full sm:w-auto z-20"
        >
          <button
            onClick={onStartProject}
            className="w-full sm:w-auto px-7 py-3.5 rounded-lg bg-white hover:bg-white/90 text-dark-navy font-semibold text-xs uppercase tracking-wider transition-all duration-300 active:scale-[0.98] cursor-pointer shadow-sm"
          >
            Start a Project
          </button>
          <button
            onClick={onViewWork}
            className="w-full sm:w-auto px-7 py-3.5 rounded-lg bg-transparent hover:bg-white/5 text-white font-semibold text-xs uppercase tracking-wider border border-white/20 hover:border-white/30 transition-all duration-300 active:scale-[0.98] cursor-pointer"
          >
            View Our Work
          </button>
        </motion.div>
      </div>
    </section>
  );
}
