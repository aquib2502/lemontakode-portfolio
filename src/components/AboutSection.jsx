'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function AboutSection() {
  return (
    <section id="about" className="py-16 md:py-24 bg-[#F7F5F0] text-[#111111] border-b border-[#E5E2D9] select-none">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12">
        
        {/* Eyebrow */}
        <div className="flex items-center gap-3 mb-6">
          <span className="h-px w-6 bg-[#D9A74A]" />
          <span className="font-display text-[11px] font-semibold uppercase tracking-[0.2em] text-[#6F6C65]">
            ABOUT LEMONTAKODE
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          
          {/* Left Column: Big Statement */}
          <div className="lg:col-span-7 space-y-6">
            <motion.h2
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#111111] leading-[1.1]"
            >
              We are a technology company built around one simple idea:{' '}
              <span className="font-serif-italic font-normal text-[#111111] relative inline-block">
                good software
                <span className="absolute bottom-1 left-0 right-0 h-[2px] bg-[#D9A74A]/60" />
              </span>{' '}
              should make complicated things feel simple.
            </motion.h2>
          </div>

          {/* Right Column: Paragraph & Core Values */}
          <div className="lg:col-span-5 space-y-6 lg:pt-2">
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-body text-base text-[#6F6C65] leading-relaxed"
            >
              LemontaKode combines product thinking, human-centered design, and robust software engineering to build practical digital systems for growing businesses and established organizations.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-body text-sm text-[#6F6C65] leading-relaxed"
            >
              We partner directly with founders, directors, and operational leaders who need technical solutions tailored precisely to how their business operates.
            </motion.p>

            <div className="pt-6 border-t border-[#E5E2D9] grid grid-cols-2 gap-6">
              <div>
                <span className="font-display text-base font-bold text-[#111111] block mb-0.5">Bespoke Systems</span>
                <span className="font-display text-[10px] font-semibold uppercase tracking-wider text-[#2563EB] bg-[#2563EB]/10 px-2 py-0.5 rounded border border-[#2563EB]/20 inline-block">Tailored Engineering</span>
              </div>
              <div>
                <span className="font-display text-base font-bold text-[#111111] block mb-0.5">Direct Partnering</span>
                <span className="font-display text-[10px] font-semibold uppercase tracking-wider text-[#2563EB] bg-[#2563EB]/10 px-2 py-0.5 rounded border border-[#2563EB]/20 inline-block">Senior Engagement</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}


