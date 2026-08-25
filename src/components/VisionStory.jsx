'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function VisionStory() {
  return (
    <section id="philosophy" className="py-16 md:py-24 bg-[#F7F5F0] text-[#111111] border-b border-[#E5E2D9] select-none relative z-10">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12">
        
        {/* Eyebrow */}
        <div className="flex items-center gap-3 mb-8">
          <span className="h-px w-6 bg-[#B89B5E]" />
          <span className="font-display text-[11px] font-semibold uppercase tracking-[0.2em] text-[#6F6C65]">
            PHILOSOPHY & APPROACH
          </span>
        </div>

        {/* Editorial Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          
          {/* Main Typography Statement */}
          <div className="lg:col-span-8 space-y-6">
            <motion.h2
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="font-display text-3xl sm:text-5xl lg:text-[3.5rem] font-bold tracking-tight text-[#111111] leading-[1.08]"
            >
              Technology should make business{' '}
              <span className="font-serif-italic font-normal text-[#111111] relative inline-block">
                simpler,
                <span className="absolute bottom-1 left-0 right-0 h-[1.5px] bg-[#B89B5E]/40" />
              </span>{' '}
              not more complicated.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-body text-base sm:text-lg text-[#6F6C65] leading-relaxed max-w-2xl"
            >
              We start by understanding the core business problem before deciding what technology should be built. Software is a tool to solve operational friction, empower human teams, and create lasting value — not an exercise in unnecessary complexity.
            </motion.p>
          </div>

          {/* Right Column: Architectural Photography Detail */}
          <div className="lg:col-span-4 lg:pt-3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="aspect-[4/3] rounded-lg overflow-hidden relative border border-[#E5E2D9] group"
            >
              <img
                src="/about-studio.png"
                alt="LemontaKode Design & Architectural Philosophy"
                className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#111111]/75 via-transparent to-transparent flex items-end p-5">
                <p className="font-serif-italic text-sm text-[#FFFFFF]">
                  &ldquo;Good software should make complicated things feel simple.&rdquo;
                </p>
              </div>
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
}


