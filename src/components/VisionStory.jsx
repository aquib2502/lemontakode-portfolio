'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function VisionStory() {
  return (
    <section id="philosophy" className="py-28 md:py-44 bg-[#F7F5F0] text-[#111111] border-b border-[#E5E2D9] select-none relative z-10">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12">
        
        {/* Section Header Line */}
        <div className="flex items-center gap-3 mb-12">
          <span className="h-px w-8 bg-[#B89B5E]" />
          <span className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-[#77736B]">
            PHILOSOPHY & APPROACH
          </span>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Main Statement Column */}
          <div className="lg:col-span-7 space-y-8">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="font-display text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#111111] leading-[1.08]"
            >
              Technology should make business{' '}
              <span className="font-serif-italic font-normal text-[#111111] relative inline-block">
                simpler,
                <span className="absolute bottom-1 left-0 right-0 h-[2px] bg-[#B89B5E]/40" />
              </span>{' '}
              not more complicated.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-body text-base md:text-xl text-[#77736B] leading-relaxed"
            >
              At LemontaKode, we start by understanding the core business problem before deciding what technology should be built. Software is a tool to solve operational friction, empower human teams, and create lasting value — not an exercise in unnecessary complexity.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="pt-6 border-t border-[#E5E2D9] grid grid-cols-3 gap-6 font-display text-xs font-medium uppercase tracking-wider text-[#111111]"
            >
              <div>
                <span className="block text-[#B89B5E] text-sm mb-1 font-bold">01</span>
                <span>Problem Analysis</span>
              </div>
              <div>
                <span className="block text-[#B89B5E] text-sm mb-1 font-bold">02</span>
                <span>System Architecture</span>
              </div>
              <div>
                <span className="block text-[#B89B5E] text-sm mb-1 font-bold">03</span>
                <span>Precision Engineering</span>
              </div>
            </motion.div>
          </div>

          {/* Right Image/Visual Card */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="rounded-2xl border border-[#E5E2D9] bg-[#FFFFFF] p-3 shadow-xl overflow-hidden relative group"
            >
              <div className="aspect-[4/5] rounded-xl overflow-hidden relative bg-[#F7F5F0]">
                <img
                  src="/about-studio.png"
                  alt="LemontaKode Material & Design Philosophy"
                  className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111111]/70 via-transparent to-transparent flex items-end p-8">
                  <div className="text-white">
                    <p className="font-serif-italic text-2xl text-[#FFFFFF] mb-2">
                      &ldquo;Good software should make complicated things feel simple.&rdquo;
                    </p>
                    <span className="font-display text-xs text-[#B89B5E] uppercase tracking-widest font-semibold block">
                      LEMONTAKODE MANIFESTO
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
}

