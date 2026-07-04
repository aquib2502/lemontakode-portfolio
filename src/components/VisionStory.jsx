'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function VisionStory() {
  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center py-32 bg-soft-white text-dark-navy overflow-hidden">
      {/* Background soft circular gradient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 w-[300px] h-[300px] bg-lemon-yellow/10 rounded-full blur-[100px] pointer-events-none animate-pulse-slow" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-12 flex flex-col items-center">
        {/* Floating Logo - Apple storytelling focal point */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-64 h-64 md:w-80 md:h-80 mb-16 flex items-center justify-center bg-white rounded-full shadow-[0_15px_50px_rgba(7,29,73,0.06)] border border-dark-navy/5 group"
        >
          {/* Subtle outer breathing ring */}
          <div className="absolute -inset-2 rounded-full border border-primary/10 group-hover:border-primary/20 transition-colors duration-500 animate-pulse-slow" />
          
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/4th.png"
            alt="LemontaKode Official Logo"
            className="w-48 h-48 md:w-56 md:h-56 object-contain transition-transform duration-700 group-hover:scale-105"
          />
        </motion.div>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-3xl sm:text-5xl md:text-6.5xl font-extrabold text-center tracking-tight leading-[1.15] max-w-4xl text-gradient-blue"
        >
          We believe technology should feel <br className="hidden md:inline" />
          <span className="text-primary">fresh</span>, <span className="text-primary-container">simple</span>, and <span className="text-on-surface-variant/80">human</span>.
        </motion.h2>

        {/* Statement */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
          className="font-body text-lg sm:text-xl md:text-2xl text-on-surface-variant/80 text-center max-w-3xl mt-10 leading-relaxed font-light"
        >
          At LemontaKode, we combine creative thinking with engineering excellence to build digital products that people genuinely love to use.
        </motion.p>
      </div>

      {/* Decorative Brand Identity Description (Left & Right - Subtle) */}
      <div className="absolute left-10 bottom-10 hidden xl:flex items-center gap-4 opacity-30 select-none">
        <div className="w-1.5 h-1.5 rounded-full bg-lemon-yellow" />
        <span className="text-xs uppercase tracking-widest font-semibold font-body text-dark-navy">Organic Freshness</span>
      </div>
      <div className="absolute right-10 bottom-10 hidden xl:flex items-center gap-4 opacity-30 select-none">
        <span className="text-xs uppercase tracking-widest font-semibold font-body text-dark-navy">Digital Engineering</span>
        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
      </div>
    </section>
  );
}
