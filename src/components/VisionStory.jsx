'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function VisionStory() {
  return (
    <section className="theme-ivory py-28 md:py-36 border-t border-black/10 relative select-none" id="vision">
      <div className="max-w-5xl mx-auto px-6 md:px-12 text-center flex flex-col items-center">
        {/* Monospace Tag */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-mono-tech text-xs tracking-[0.2em] text-[#121316]/60 uppercase mb-8"
        >
          02 // STUDIO PHILOSOPHY
        </motion.div>

        {/* Large Editorial Poster Statement */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-display text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight leading-[1.08] text-[#121316]"
        >
          Technology should <br />
          feel less like <br />
          <span className="font-serif-italic font-normal text-[#9e8300]">technology.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-body text-base sm:text-xl text-[#121316]/75 max-w-2xl mt-8 leading-relaxed font-light"
        >
          We reject bloated frameworks, fragile software, and generic SaaS templates. At LemontaKode, every line of code is engineered for speed, security, and human clarity.
        </motion.p>

        {/* Quiet Editorial Annotations */}
        <div className="mt-16 pt-8 border-t border-[#121316]/15 flex items-center justify-between gap-8 font-mono-tech text-xs text-[#121316]/50 max-w-lg w-full">
          <span>DESIGN</span>
          <span>//</span>
          <span>ENGINEERING</span>
          <span>//</span>
          <span>CRAFTSMANSHIP</span>
        </div>
      </div>
    </section>
  );
}
