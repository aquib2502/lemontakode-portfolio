'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown, Sparkles } from 'lucide-react';
import CircuitBackground from './CircuitBackground';

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
        strokeWidth="6"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function ProblemHero({ onViewWork, onStartProject }) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0b0d14] text-white select-none pt-24 pb-16">
      {/* Dark Vignette & Background Radial Blurs */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0b0d14]/80 via-transparent to-[#0b0d14] z-1 pointer-events-none" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#6289ff]/12 rounded-full blur-[160px] pointer-events-none z-1" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-[#ffd400]/8 rounded-full blur-[140px] pointer-events-none z-1" />

      {/* Three.js Background Layer */}
      <div className="absolute inset-0 z-0 opacity-80">
        <CircuitBackground dark={true} />
      </div>

      {/* Hero Content Box */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-12 text-center flex flex-col items-center">
        {/* Top Tech Badge Tag */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#121212] border border-white/15 text-white text-xs font-medium mb-8 shadow-inner"
        >
          <Sparkles size={14} className="text-lemon-yellow" />
          <span>Next-Gen Engineering & Web Architecture</span>
          <span className="w-1.5 h-1.5 rounded-full bg-primary" />
        </motion.div>

        {/* Display Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight leading-[1.05]"
        >
          <span className="text-white">Digital </span>
          <span className="relative inline-block text-lemon-yellow">
            excellence,
            <SquiggleUnderline className="absolute left-0 -bottom-3 sm:-bottom-4 w-[95%] h-3 sm:h-4 text-lemon-yellow/80" />
          </span>
          <br />
          <span className="text-gradient-glow">engineered.</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1], delay: 0.25 }}
          className="font-body text-base sm:text-xl text-[#cbcbcb] max-w-2xl mt-8 leading-relaxed font-light"
        >
          We construct high-performance mobile apps, web platforms, custom business software, and bulletproof cybersecurity for ambitious companies.
        </motion.p>

        {/* Call to Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10 w-full sm:w-auto z-20"
        >
          <button
            onClick={onStartProject}
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-[#6289ff] hover:bg-[#4b72e6] text-white font-bold text-sm uppercase tracking-wider transition-all duration-300 active:scale-[0.98] cursor-pointer flex items-center justify-center gap-2 shadow-[0_10px_30px_rgba(98,137,255,0.3)] hover:shadow-[0_15px_35px_rgba(98,137,255,0.5)]"
          >
            Start a Project
            <ArrowRight size={16} />
          </button>
          <button
            onClick={onViewWork}
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-[#121212] hover:bg-[#181920] border border-white/15 text-white/90 font-semibold text-sm tracking-wide transition-all duration-300 cursor-pointer hover:border-white/30"
          >
            View Our Work
          </button>
        </motion.div>

        {/* Key Metrics / Highlights Strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1], delay: 0.55 }}
          className="mt-16 pt-10 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-6 text-left w-full max-w-4xl"
        >
          <div>
            <div className="text-2xl sm:text-3xl font-display font-extrabold text-white">50+</div>
            <div className="text-xs text-[#cbcbcb] font-medium">Projects Shipped</div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-display font-extrabold text-lemon-yellow">100%</div>
            <div className="text-xs text-[#cbcbcb] font-medium">Client Satisfaction</div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-display font-extrabold text-primary">6 Min</div>
            <div className="text-xs text-[#cbcbcb] font-medium">Approval Turnaround</div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-display font-extrabold text-white">120+</div>
            <div className="text-xs text-[#cbcbcb] font-medium">Countries Reached</div>
          </div>
        </motion.div>
      </div>

      {/* Down Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/30 z-10 hidden sm:block pointer-events-none"
      >
        <ChevronDown size={22} />
      </motion.div>
    </section>
  );
}
