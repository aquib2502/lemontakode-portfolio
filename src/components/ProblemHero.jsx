'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowDown } from 'lucide-react';

export default function ProblemHero({ onStartProject, onViewWork }) {
  return (
    <section id="hero" className="relative pt-28 md:pt-36 pb-16 md:pb-24 bg-[#F7F5F0] text-[#111111] overflow-hidden select-none border-b border-[#E5E2D9]">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12 relative z-10">
        
        {/* Eyebrow Label */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-6"
        >
          <span className="h-px w-6 bg-[#B89B5E]" />
          <span className="font-display text-[11px] font-semibold uppercase tracking-[0.2em] text-[#6F6C65]">
            DIGITAL PRODUCT STUDIO & CONSULTANCY
          </span>
        </motion.div>

        {/* Editorial Grid: Main Headline & Supporting Copy + CTAs */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12 lg:mb-16">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-8 font-display text-4xl sm:text-6xl lg:text-[4.25rem] font-bold tracking-tight text-[#111111] leading-[1.05]"
          >
            Digital systems built around the way your business{' '}
            <span className="font-serif-italic font-normal text-[#111111] relative inline-block">
              actually works.
              <span className="absolute bottom-1 left-0 right-0 h-[1.5px] bg-[#B89B5E]/40" />
            </span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-4 space-y-6 lg:pt-2"
          >
            <p className="font-body text-base sm:text-lg text-[#6F6C65] leading-relaxed">
              We design and engineer websites, applications and software that remove operational friction, improve customer experiences and help businesses grow.
            </p>

            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <a
                href="#contact"
                onClick={onStartProject}
                className="btn-editorial-primary"
              >
                <span>Start a conversation</span>
                <ArrowRight size={13} className="text-[#B89B5E]" />
              </a>

              <a
                href="#work"
                onClick={onViewWork}
                className="btn-editorial-secondary"
              >
                <span>View our work</span>
                <ArrowDown size={13} className="text-[#6F6C65]" />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Sophisticated Architectural Visual Frame (Editorial Photograph & Clean Product Shot) */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="w-full rounded-xl border border-[#E5E2D9] bg-[#FFFFFF] overflow-hidden p-2 shadow-sm relative group"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-2 bg-[#F7F5F0] rounded-lg p-2">
            
            {/* Real Editorial Architectural Photography */}
            <div className="lg:col-span-5 aspect-[16/10] lg:aspect-auto rounded-md overflow-hidden relative min-h-[260px]">
              <img
                src="/hero-arch.png"
                alt="Architectural structure representing precision & scale"
                className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:scale-[1.02] group-hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#111111]/70 via-transparent to-transparent flex items-end p-5">
                <div>
                  <span className="font-display text-[11px] text-[#B89B5E] font-semibold uppercase tracking-widest block mb-0.5">
                    Structure & Precision
                  </span>
                  <span className="font-display text-xs text-[#FFFFFF] font-medium opacity-90">
                    Bespoke Digital Systems Engineered for Durability
                  </span>
                </div>
              </div>
            </div>

            {/* Real Product Interface Preview */}
            <div className="lg:col-span-7 aspect-[16/10] rounded-md overflow-hidden bg-[#FFFFFF] border border-[#E5E2D9]">
              <img
                src="/lemontakode_hero_dashboard_1787310632187.png"
                alt="LemontaKode Digital Platform Interface"
                className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.015]"
              />
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}


