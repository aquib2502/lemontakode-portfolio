'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function VisionStory() {
  return (
    <section className="py-28 md:py-36 bg-[#07080a] text-[#F4F2ED] border-t border-white/10 relative overflow-hidden" id="vision">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        {/* Left Column: Editorial Statement */}
        <div className="lg:col-span-8 space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-mono-tech text-xs tracking-[0.2em] text-[#ffd400] uppercase"
          >
            02 // STUDIO PHILOSOPHY
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-display text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight text-[#F4F2ED]"
          >
            Technology should feel <br />
            <span className="font-serif-italic font-normal text-[#ffd400]">fresh, simple,</span> and human.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-body text-base sm:text-xl text-[#F4F2ED]/70 max-w-2xl leading-relaxed font-light"
          >
            We reject code bloat, fragile dependencies, and generic SaaS templates. At LemontaKode, we combine creative thinking with disciplined engineering to build software that users genuinely love to interact with.
          </motion.p>
        </div>

        {/* Right Column: Logo Artwork Box */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="lg:col-span-4 flex items-center justify-center"
        >
          <div className="w-56 h-56 md:w-64 md:h-64 bg-[#111319] border border-white/10 rounded-2xl p-8 flex items-center justify-center relative group">
            <div className="absolute inset-0 border border-[#ffd400]/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <img
              src="/logo-light-bg-transparent.png"
              alt="LemontaKode Logo Mark"
              className="w-40 h-40 object-contain transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
