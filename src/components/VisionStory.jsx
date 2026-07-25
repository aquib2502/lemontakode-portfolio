'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function VisionStory() {
  return (
    <section className="theme-ivory py-24 md:py-32 border-t border-black/10 select-none" id="vision">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Column: Monospace Tag & Main Headline */}
        <div className="lg:col-span-8 space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-mono-tech text-xs tracking-[0.2em] text-[#5a5c66] uppercase"
          >
            02 // OUR CORE PHILOSOPHY
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-display text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight leading-[1.08] !text-[#121316]"
            style={{ textWrap: 'balance', maxWidth: '18ch' }}
          >
            We don't just build apps.{' '}
            We solve real business{' '}
            <span className="font-serif-italic font-normal text-[#9e8300]">hurdles.</span>
          </motion.h2>
        </div>

        {/* Right Column: Simple English Explanation */}
        <div className="lg:col-span-4 space-y-6 pt-4 lg:pt-16 border-t lg:border-t-0 lg:border-l border-black/15 lg:pl-8">
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-body text-base sm:text-lg !text-[#2a2c33] leading-relaxed font-normal"
          >
            Most agencies focus only on writing code. We start by understanding your real problem—whether it's slow manual work, lost sales, or confusing software—and build clean tools that fix it for good.
          </motion.p>

          <div className="pt-4 font-mono-tech text-xs text-[#5a5c66] flex flex-wrap gap-3">
            <span>LISTEN</span>
            <span>//</span>
            <span>SIMPLIFY</span>
            <span>//</span>
            <span>SOLVE</span>
          </div>
        </div>
      </div>
    </section>
  );
}
