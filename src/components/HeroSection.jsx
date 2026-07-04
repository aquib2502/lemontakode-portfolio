'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-28 pb-12 overflow-hidden bg-transparent text-dark-navy">
      {/* Radial Blue-Citrus Gradients in Background (low opacity on white) */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-[400px] h-[400px] bg-secondary-container/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-12 text-center flex flex-col items-center">
        {/* Hero Title with Blue and Yellow Typography */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="font-display text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight leading-[1.1] text-dark-navy max-w-4xl"
        >
          Engineering Digital <br className="hidden sm:inline" />
          <span className="bg-gradient-to-r from-primary via-primary-container to-secondary-container bg-clip-text text-transparent">
            Citrus Excellence.
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="font-body text-lg sm:text-xl text-on-surface-variant max-w-2xl mt-8 leading-relaxed font-medium"
        >
          We construct high-performance platforms, enterprise web/mobile interfaces, and hardened cloud security systems that fuel business growth.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-5 mt-10 w-full sm:w-auto"
        >
          <a
            href="#contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-container shadow-[0_4px_14px_rgba(0,80,203,0.25)] hover:shadow-[0_6px_20px_rgba(0,80,203,0.35)] text-white px-8 py-4 rounded-full text-base font-bold transition-all active:scale-[0.98] duration-300 group"
          >
            Start Your Project
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#projects"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-slate-100 hover:bg-slate-200/80 text-dark-navy px-8 py-4 rounded-full text-base font-bold transition-all duration-300"
          >
            View Our Work
          </a>
        </motion.div>

        {/* Tech Pillars - Colored for White Background */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.7 }}
          transition={{ duration: 1, delay: 0.45 }}
          className="mt-20 w-full hidden md:block"
        >
          <div className="flex justify-center gap-24">
            <div className="flex flex-col items-center gap-3">
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-slate-500">Extreme Performance</span>
              <div className="h-10 w-px bg-gradient-to-b from-primary/40 to-transparent" />
            </div>
            <div className="flex flex-col items-center gap-3">
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-slate-500">Military Security</span>
              <div className="h-10 w-px bg-gradient-to-b from-primary/40 to-transparent" />
            </div>
            <div className="flex flex-col items-center gap-3">
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-slate-500">Infinite Scalability</span>
              <div className="h-10 w-px bg-gradient-to-b from-primary/40 to-transparent" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
