'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, MessageSquare, Terminal, CheckCircle2, ShieldCheck, Zap } from 'lucide-react';

export default function NunuHero({ onStartProject, onViewWork }) {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-[#07080a] text-[#F4F2ED] overflow-hidden select-none">
      {/* Ambient background glow (LemontaKode Yellow & Soft Blue) */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[900px] h-[400px] bg-[#ffd400]/8 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 w-[400px] h-[300px] bg-[#507bf6]/5 rounded-full blur-[120px] pointer-events-none" />

      {/* Grid background texture */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(#ffd400 1px, transparent 1px)`,
          backgroundSize: '32px 32px'
        }}
      />

      <div className="max-w-[1280px] mx-auto px-6 md:px-12 relative z-10 flex flex-col items-center text-center">
        
        {/* Centered Pill Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#ffd400]/30 bg-[#ffd400]/5 text-[#ffd400] font-mono-tech text-xs uppercase tracking-widest mb-6 backdrop-blur-md shadow-[0_0_20px_rgba(255,212,0,0.1)]"
        >
          <Zap size={14} className="text-[#ffd400] animate-pulse" />
          <span>AI-POWERED ENGINEERING & SOFTWARE STUDIO</span>
        </motion.div>

        {/* Centered Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-display text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight max-w-4xl leading-[1.08] text-[#F4F2ED] mb-6"
        >
          Solve your app QA &amp; software bottlenecks with{' '}
          <span className="text-[#ffd400] relative inline-block">
            AI agents.
            <svg className="absolute -bottom-2 left-0 w-full h-2 text-[#ffd400]/40" viewBox="0 0 100 10" preserveAspectRatio="none">
              <path d="M0 5 Q 50 10, 100 5" stroke="currentColor" strokeWidth="3" fill="none" />
            </svg>
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="font-body text-base sm:text-lg md:text-xl text-[#9ea0a8] max-w-2xl leading-relaxed mb-10"
        >
          Save hundreds of hours of manual work by using AI agents performing end-to-end engineering, automated testing, and scalable digital tools at scale.
        </motion.p>

        {/* Dual Pill Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-4 mb-16"
        >
          <button
            onClick={onStartProject}
            className="px-8 py-4 rounded-full bg-[#ffd400] text-[#07080a] font-display text-sm font-bold tracking-wide hover:bg-[#ffe033] hover:shadow-[0_0_30px_rgba(255,212,0,0.4)] transition-all duration-300 transform hover:-translate-y-0.5 flex items-center gap-2 cursor-pointer"
          >
            <span>Get started</span>
            <ArrowRight size={16} />
          </button>

          <button
            onClick={onViewWork}
            className="px-8 py-4 rounded-full bg-white/5 text-[#F4F2ED] border border-white/15 font-display text-sm font-semibold hover:bg-white/10 hover:border-white/30 transition-all duration-300 flex items-center gap-2 cursor-pointer"
          >
            <MessageSquare size={15} className="text-[#ffd400]" />
            <span>Talk to us</span>
          </button>
        </motion.div>

        {/* Framed Dashboard Mockup Window (nunu.ai Hero visual) */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="w-full max-w-5xl rounded-2xl border border-[#ffd400]/30 bg-[#0d0e12] overflow-hidden shadow-[0_0_60px_rgba(255,212,0,0.12)] relative"
        >
          {/* Browser Chrome Header */}
          <div className="h-10 px-4 bg-[#12141a] border-b border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-[#FF5F57] inline-block" />
              <span className="w-3 h-3 rounded-full bg-[#FEBC2E] inline-block" />
              <span className="w-3 h-3 rounded-full bg-[#28C840] inline-block" />
            </div>
            
            <div className="flex items-center gap-2 px-4 py-1 rounded-md bg-black/40 border border-white/10 text-xs font-mono-tech text-white/50">
              <Terminal size={12} className="text-[#ffd400]" />
              <span>lemontakode.tech / dashboard / ai-agents</span>
            </div>

            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1 text-[11px] font-mono-tech text-[#28C840] bg-[#28C840]/10 px-2 py-0.5 rounded-full">
                <CheckCircle2 size={10} /> Live
              </span>
            </div>
          </div>

          {/* Generated High-Resolution Dashboard Mockup Image */}
          <div className="relative w-full aspect-[16/9] sm:aspect-[16/10] bg-[#0a0b0e] overflow-hidden group">
            <img
              src="/lemontakode_hero_dashboard_1787310632187.png"
              alt="LemontaKode AI Dashboard Preview"
              className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.01]"
            />

            {/* Subtle Gradient Overlay at bottom */}
            <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#0d0e12] via-[#0d0e12]/40 to-transparent pointer-events-none" />
          </div>
        </motion.div>

      </div>
    </section>
  );
}
