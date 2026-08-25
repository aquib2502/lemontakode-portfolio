'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowDown } from 'lucide-react';

export default function ProblemHero({ onStartProject, onViewWork }) {
  return (
    <section id="hero" className="relative pt-36 md:pt-48 pb-20 md:pb-32 bg-[#F7F5F0] text-[#111111] overflow-hidden select-none border-b border-[#E5E2D9]">
      {/* Subtle Editorial Background Grid */}
      <div className="absolute inset-0 pointer-events-none opacity-40 bg-[radial-gradient(#B89B5E_0.75px,transparent_0.75px)] [background-size:32px_32px]" />

      <div className="max-w-[1280px] mx-auto px-6 md:px-12 relative z-10">
        
        {/* Eyebrow Label */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 mb-8"
        >
          <span className="h-px w-8 bg-[#B89B5E]" />
          <span className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-[#77736B]">
            DIGITAL PRODUCT STUDIO & CONSULTANCY
          </span>
        </motion.div>

        {/* Editorial Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[#111111] max-w-5xl leading-[1.06] mb-8"
        >
          Digital systems built around the way your business{' '}
          <span className="font-serif-italic font-normal text-[#111111] relative inline-block">
            actually works.
            <span className="absolute bottom-1 left-0 right-0 h-[2px] bg-[#B89B5E]/30" />
          </span>
        </motion.h1>

        {/* Supporting Copy */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-14">
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-7 font-body text-lg sm:text-xl text-[#77736B] leading-relaxed"
          >
            We design and engineer websites, applications and software that remove operational friction, improve customer experiences and help businesses grow.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:col-span-5 flex flex-wrap items-center gap-4 lg:justify-end"
          >
            <a
              href="#contact"
              onClick={onStartProject}
              className="btn-editorial-primary"
            >
              <span>Start a conversation</span>
              <ArrowRight size={14} className="text-[#B89B5E]" />
            </a>

            <a
              href="#work"
              onClick={onViewWork}
              className="btn-editorial-secondary"
            >
              <span>View our work</span>
              <ArrowDown size={14} className="text-[#77736B]" />
            </a>
          </motion.div>
        </div>

        {/* Architectural Showcase Visual Frame */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="w-full rounded-2xl border border-[#E5E2D9] bg-[#FFFFFF] overflow-hidden shadow-2xl relative group p-2 md:p-3"
        >
          {/* Subtle Window Header Bar */}
          <div className="h-10 px-4 bg-[#F7F5F0] rounded-xl flex items-center justify-between mb-2 border border-[#E5E2D9]">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#111111]/20" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#111111]/20" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#111111]/20" />
            </div>

            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#B89B5E]" />
              <span className="font-display text-[11px] uppercase tracking-widest text-[#77736B] font-semibold">
                LEMONTAKODE STUDIO ARCHITECTURE
              </span>
            </div>

            <div className="font-display text-[11px] text-[#B89B5E] font-semibold">
              EST. 2026
            </div>
          </div>

          {/* Combined Architectural visual and product showcase frame */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-2 bg-[#F7F5F0] rounded-xl p-2">
            <div className="lg:col-span-5 aspect-[16/11] lg:aspect-auto rounded-lg overflow-hidden relative">
              <img
                src="/hero-arch.png"
                alt="Architectural structure visual"
                className="w-full h-full object-cover grayscale opacity-90 transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#111111]/60 via-transparent to-transparent flex items-end p-6">
                <div>
                  <span className="font-display text-xs text-[#B89B5E] font-semibold uppercase tracking-widest block mb-1">PRECISION ENGINEERING</span>
                  <span className="font-display text-sm text-[#FFFFFF] font-medium">Digital Infrastructure for Enterprise Scale</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 aspect-[16/10] rounded-lg overflow-hidden bg-[#FFFFFF] border border-[#E5E2D9]">
              <img
                src="/lemontakode_hero_dashboard_1787310632187.png"
                alt="LemontaKode Digital Product Interface"
                className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.02]"
              />
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

