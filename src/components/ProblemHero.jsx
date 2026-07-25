'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function ProblemHero({ onViewWork, onStartProject }) {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const x = (clientX / window.innerWidth - 0.5) * 20;
      const y = (clientY / window.innerHeight - 0.5) * 20;
      setMousePos({ x, y });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="hero-viewport-safe relative flex items-center justify-center bg-[#0a0b0e] text-[#F4F2ED] select-none overflow-hidden px-6 md:px-12">
      {/* Background Subtle Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(244,242,237,0.025)_1px,transparent_1px),linear-gradient(to_bottom,rgba(244,242,237,0.025)_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-center h-full my-auto">
        {/* Left Column: Asymmetrical Display Typography & Actions */}
        <div className="lg:col-span-8 flex flex-col justify-center space-y-6">
          <div className="font-mono-tech text-xs tracking-[0.2em] text-[#ffd400] uppercase flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-[#ffd400]" />
            <span>LEMONTAKODE DIGITAL STUDIO</span>
            <span className="text-white/30">//</span>
            <span className="text-white/60">WE SOLVE REAL PROBLEMS</span>
          </div>

          {/* Headline without Orphan Words */}
          <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.06] text-[#F4F2ED] text-balance">
            We solve complex problems <br className="hidden sm:inline" />
            with simple, powerful <br className="hidden sm:inline" />
            <span className="font-serif-italic font-normal text-[#ffd400]">digital tools.</span>
          </h1>

          {/* Simple English Copy */}
          <p className="font-body text-base sm:text-lg text-[#F4F2ED]/85 max-w-2xl leading-relaxed font-light">
            We don't just write code or build shiny software. We solve real business hurdles—automating slow tasks, fixing broken workflows, and engineering custom apps that make your business run faster.
          </p>

          {/* Action Triggers */}
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
        </div>

        {/* Right Column: Subtle Graphic Brand Counterweight (No Card Box) */}
        <div className="lg:col-span-4 hidden lg:flex items-center justify-center relative pointer-events-none">
          <motion.div
            animate={{
              x: mousePos.x,
              y: mousePos.y,
              rotate: mousePos.x * 0.05,
            }}
            transition={{ type: 'spring', stiffness: 60, damping: 15 }}
            className="relative flex items-center justify-center opacity-85"
          >
            <img
              src="/logo-1st-transparent.png"
              alt="LemontaKode Official Brand Asset"
              className="w-56 h-56 xl:w-64 xl:h-64 object-contain filter drop-shadow-[0_15px_30px_rgba(255,212,0,0.15)]"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
