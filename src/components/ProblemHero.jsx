'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function ProblemHero({ onViewWork, onStartProject }) {
  return (
    <section className="relative min-h-[92vh] flex items-center justify-center bg-[#0a0b0e] text-[#F4F2ED] pt-32 pb-20 select-none overflow-hidden">
      {/* Background Editorial Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(244,242,237,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(244,242,237,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
        {/* Asymmetrical Left Column: Display Typography */}
        <div className="lg:col-span-8 space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-mono-tech text-xs tracking-[0.2em] text-[#ffd400] uppercase flex items-center gap-3"
          >
            <span>01 // LEMONTAKODE STUDIO</span>
            <span className="w-12 h-[1px] bg-[#ffd400]/40" />
            <span>EST. 2026</span>
          </motion.div>

          {/* Main Headline: Multi-font contrast (Plus Jakarta Sans + Playfair Display Italic) */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-display text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-extrabold tracking-tight leading-[1.02]"
          >
            We design & engineer <br />
            digital products <br />
            <span className="font-serif-italic font-normal text-[#ffd400]">people remember.</span>
          </motion.h1>

          {/* Human Subcopy */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="font-body text-base sm:text-xl text-[#F4F2ED]/70 max-w-xl leading-relaxed font-light"
          >
            At LemontaKode, we combine creative thinking with serious engineering to construct high-performance mobile apps, web systems, and custom software.
          </motion.p>

          {/* Action Triggers */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-wrap items-center gap-6 pt-4"
          >
            <button onClick={onStartProject} className="editorial-btn">
              Start a Project
            </button>
            <button
              onClick={onViewWork}
              className="font-mono-tech text-xs uppercase tracking-widest text-[#F4F2ED]/80 hover:text-[#ffd400] transition-colors flex items-center gap-2 cursor-pointer"
            >
              <span>Explore Selected Work</span>
              <span>→</span>
            </button>
          </motion.div>
        </div>

        {/* Asymmetrical Right Column: Editorial Studio Index */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="lg:col-span-4 border-t lg:border-t-0 lg:border-l border-white/10 pt-8 lg:pt-0 lg:pl-10 space-y-6 font-mono-tech"
        >
          <div className="text-[11px] uppercase tracking-widest text-white/40 font-bold mb-4">
            Studio Telemetry
          </div>

          <div className="space-y-4 text-xs">
            <div className="flex justify-between items-baseline border-b border-white/5 pb-2">
              <span className="text-white/60">PROJECTS SHIPPED</span>
              <span className="font-bold text-[#F4F2ED] text-base">50+</span>
            </div>

            <div className="flex justify-between items-baseline border-b border-white/5 pb-2">
              <span className="text-white/60">RETENTION RATE</span>
              <span className="font-bold text-[#ffd400] text-base">100%</span>
            </div>

            <div className="flex justify-between items-baseline border-b border-white/5 pb-2">
              <span className="text-white/60">APPROVAL SPEED</span>
              <span className="font-bold text-[#507bf6] text-base">6 MIN</span>
            </div>

            <div className="flex justify-between items-baseline border-b border-white/5 pb-2">
              <span className="text-white/60">GLOBAL REACH</span>
              <span className="font-bold text-[#F4F2ED] text-base">120+ COUNTRIES</span>
            </div>
          </div>

          <div className="pt-4 text-[11px] text-white/40 leading-relaxed">
            LONDON // BANGALORE // GLOBAL DELIVERY
          </div>
        </motion.div>
      </div>
    </section>
  );
}
