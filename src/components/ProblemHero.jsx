'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function ProblemHero({ onViewWork, onStartProject }) {
  return (
    <section className="hero-viewport relative flex items-center justify-center bg-[#0a0b0e] text-[#F4F2ED] select-none overflow-hidden px-6 md:px-12">
      {/* Subtle Background Mesh Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(244,242,237,0.025)_1px,transparent_1px),linear-gradient(to_bottom,rgba(244,242,237,0.025)_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] pointer-events-none" />

      {/* FULL-WIDTH HERO LAYOUT (No right box) */}
      <div className="relative z-10 max-w-6xl mx-auto w-full flex flex-col justify-center space-y-6 my-auto text-left">
        {/* Monospace Eyebrow Tag */}
        <div className="font-mono-tech text-xs tracking-[0.2em] text-[#ffd400] uppercase flex items-center gap-3">
          <span className="w-2 h-2 rounded-full bg-[#ffd400]" />
          <span>LEMONTAKODE STUDIO</span>
          <span className="text-white/30">//</span>
          <span className="text-white/60">WE SOLVE REAL PROBLEMS</span>
        </div>

        {/* Full-Width Fluid Display Headline */}
        <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.06] text-[#F4F2ED]">
          We solve complex problems <br />
          with simple, powerful <br />
          <span className="font-serif-italic font-normal text-[#ffd400]">digital tools.</span>
        </h1>

        {/* Simple English Copy Emphasizing Problem-Solving Philosophy */}
        <p className="font-body text-base sm:text-xl text-[#F4F2ED]/85 max-w-3xl leading-relaxed font-light">
          We don't just write code or build shiny software. We solve real business hurdles—automating slow tasks, fixing broken workflows, and engineering custom apps that make your business run faster.
        </p>

        {/* Action Triggers & Value Statements */}
        <div className="flex flex-wrap items-center gap-5 pt-2">
          <button onClick={onStartProject} className="editorial-btn">
            Tell Us Your Problem →
          </button>
          <button
            onClick={onViewWork}
            className="font-mono-tech text-xs uppercase tracking-widest text-[#F4F2ED]/80 hover:text-[#ffd400] transition-colors flex items-center gap-2 cursor-pointer px-4 py-2"
          >
            <span>See Solutions We Built</span>
            <span>↓</span>
          </button>
        </div>

        {/* Simple Telemetry Strip */}
        <div className="pt-6 border-t border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-6 font-mono-tech text-xs text-white/60 max-w-4xl">
          <div>
            <div className="text-[#F4F2ED] font-bold text-base font-display">50+ Problems</div>
            <div className="text-white/40">Solved for Clients</div>
          </div>
          <div>
            <div className="text-[#ffd400] font-bold text-base font-display">100% Trust</div>
            <div className="text-white/40">Client Retention</div>
          </div>
          <div>
            <div className="text-[#507bf6] font-bold text-base font-display">Fast Delivery</div>
            <div className="text-white/40">Clean Software</div>
          </div>
          <div>
            <div className="text-white font-bold text-base font-display">12-Hour</div>
            <div className="text-white/40">Engineer Response</div>
          </div>
        </div>
      </div>
    </section>
  );
}
