'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function VisionStory() {
  return (
    <section className="relative py-28 md:py-36 bg-[#0b0d14] text-white overflow-hidden" id="vision">
      {/* Background Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-primary/10 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute top-1/4 right-1/4 w-[350px] h-[350px] bg-lemon-yellow/5 rounded-full blur-[140px] pointer-events-none animate-pulse-slow" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-12 flex flex-col items-center">
        {/* Floating Logo Box */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-56 h-56 md:w-72 md:h-72 mb-14 flex items-center justify-center bg-[#121212] rounded-3xl border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.6)] group"
        >
          {/* Subtle outer glowing breathing ring */}
          <div className="absolute -inset-2 rounded-3xl border border-primary/20 group-hover:border-primary/40 transition-colors duration-500" />
          
          <img
            src="/logo-light-bg-transparent.png"
            alt="LemontaKode Official Logo"
            className="w-40 h-40 md:w-52 md:h-52 object-contain transition-transform duration-700 group-hover:scale-105"
          />
        </motion.div>

        {/* Vision Statement Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-3xl sm:text-5xl md:text-6xl font-extrabold text-center tracking-tight leading-[1.15] max-w-4xl text-gradient-blue"
        >
          We believe technology should feel <br className="hidden md:inline" />
          <span className="text-lemon-yellow">fresh</span>, <span className="text-primary">simple</span>, and <span className="text-white">human</span>.
        </motion.h2>

        {/* Statement Body */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
          className="font-body text-base sm:text-xl text-[#cbcbcb] text-center max-w-2xl mt-8 leading-relaxed font-light"
        >
          At LemontaKode, we combine creative thinking with engineering precision to build digital products that people genuinely love to use and businesses rely on.
        </motion.p>
      </div>

      {/* Side Watermark Labels */}
      <div className="absolute left-8 bottom-12 hidden xl:flex items-center gap-3 opacity-30 select-none">
        <div className="w-2 h-2 rounded-full bg-lemon-yellow" />
        <span className="text-xs uppercase tracking-widest font-semibold font-body text-white">Organic Freshness</span>
      </div>
      <div className="absolute right-8 bottom-12 hidden xl:flex items-center gap-3 opacity-30 select-none">
        <span className="text-xs uppercase tracking-widest font-semibold font-body text-white">Digital Engineering</span>
        <div className="w-2 h-2 rounded-full bg-primary" />
      </div>
    </section>
  );
}
