'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function AboutSection() {
  return (
    <section id="about" className="py-28 md:py-40 bg-[#F7F5F0] text-[#111111] border-b border-[#E5E2D9] select-none">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-6">
          <span className="h-px w-8 bg-[#B89B5E]" />
          <span className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-[#77736B]">
            ABOUT LEMONTAKODE
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Column: Big Statement */}
          <div className="lg:col-span-7 space-y-8">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="font-display text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#111111] leading-[1.08]"
            >
              We are a technology company built around one simple idea:{' '}
              <span className="font-serif-italic font-normal text-[#111111] relative inline-block">
                good software
                <span className="absolute bottom-1 left-0 right-0 h-[2px] bg-[#B89B5E]/30" />
              </span>{' '}
              should make complicated things feel simple.
            </motion.h2>
          </div>

          {/* Right Column: Paragraph & Credentials */}
          <div className="lg:col-span-5 space-y-8 lg:pt-4">
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-body text-base md:text-lg text-[#77736B] leading-relaxed"
            >
              LemontaKode combines product thinking, human-centered design, and robust software engineering to build practical digital systems for growing businesses and established organizations.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="font-body text-base text-[#77736B] leading-relaxed"
            >
              We partner directly with founders, directors, and operational leaders who need technical solutions tailored precisely to how their business operates.
            </motion.p>

            <div className="pt-8 border-t border-[#E5E2D9] grid grid-cols-2 gap-6">
              <div>
                <span className="font-display text-2xl font-bold text-[#111111] block mb-1">100%</span>
                <span className="font-display text-xs uppercase tracking-wider text-[#77736B]">Bespoke Solutions</span>
              </div>
              <div>
                <span className="font-display text-2xl font-bold text-[#111111] block mb-1">Direct</span>
                <span className="font-display text-xs uppercase tracking-wider text-[#77736B]">Senior Partner Engagement</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
