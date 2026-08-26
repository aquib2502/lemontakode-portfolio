'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowDown } from 'lucide-react';

export default function ProblemHero({ onStartProject, onViewWork }) {
  return (
    <section id="hero" className="relative pt-28 sm:pt-36 lg:pt-44 pb-16 sm:pb-24 lg:pb-28 bg-[#111111] text-[#FFFFFF] overflow-hidden select-none border-b border-[#2A2A2A] min-h-[80vh] flex items-center">
      {/* Pixabay Technology Machine Hero Background Video & Dark Overlay */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          poster="/hero-arch.png"
          className="w-full h-full object-cover opacity-65 filter brightness-105 contrast-110 transition-opacity duration-1000"
        >
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>
        {/* Subtle Dark Gradient Overlay for Crisp Headline & CTA Readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-[#111111]/45 to-[#111111]/60" />
      </div>

      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-12 relative z-10 w-full">
        
        {/* Eyebrow Label */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-2.5 sm:gap-3 mb-4 sm:mb-6"
        >
          <span className="h-px w-5 sm:w-6 bg-[#D9A74A]" />
          <span className="font-display text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.18em] sm:tracking-[0.2em] text-[#D9A74A]">
            DIGITAL PRODUCT STUDIO & CONSULTANCY
          </span>
        </motion.div>

        {/* Editorial Headline & Supporting Copy */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-8 font-display text-3xl sm:text-5xl lg:text-[4.25rem] font-bold tracking-tight text-[#FFFFFF] leading-[1.08] sm:leading-[1.05]"
          >
            Digital systems built around the way your business{' '}
            <span className="font-serif-italic font-normal text-[#FFFFFF] relative inline-block">
              actually works.
              <span className="absolute bottom-1 left-0 right-0 h-[2px] bg-[#D9A74A]/60" />
            </span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-4 space-y-4 sm:space-y-6 lg:pt-2"
          >
            <p className="font-body text-sm sm:text-base lg:text-lg text-[#D1D0C9] leading-relaxed">
              We design and engineer websites, applications and software that remove operational friction, improve customer experiences and help businesses grow.
            </p>

            <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3 pt-2">
              <a
                href="#contact"
                onClick={onStartProject}
                className="btn-editorial-primary justify-center bg-[#FFFFFF] text-[#111111] hover:bg-[#F7F5F0] border-[#FFFFFF] hover:border-[#D9A74A] text-center"
              >
                <span>Start a conversation</span>
                <ArrowRight size={13} className="text-[#D9A74A]" />
              </a>

              <a
                href="#work"
                onClick={onViewWork}
                className="btn-editorial-secondary justify-center bg-transparent text-[#FFFFFF] border-[#444444] hover:border-[#2563EB] hover:text-[#FFFFFF] hover:bg-white/10 text-center"
              >
                <span>View our work</span>
                <ArrowDown size={13} className="text-[#D1D0C9]" />
              </a>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}




