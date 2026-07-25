'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function ProblemHero({ onViewWork, onStartProject }) {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const x = (clientX / window.innerWidth - 0.5) * 30;
      const y = (clientY / window.innerHeight - 0.5) * 30;
      setMousePos({ x, y });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="hero-viewport relative flex items-center justify-center bg-[#0a0b0e] text-[#F4F2ED] select-none overflow-hidden px-6 md:px-12">
      {/* Background Subtle Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(244,242,237,0.025)_1px,transparent_1px),linear-gradient(to_bottom,rgba(244,242,237,0.025)_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-center h-full max-h-[800px] my-auto">
        {/* Left Column: Asymmetrical Display Typography & Actions */}
        <div className="lg:col-span-7 flex flex-col justify-center space-y-6">
          <div className="font-mono-tech text-xs tracking-[0.2em] text-[#ffd400] uppercase flex items-center gap-3">
            <span>01 // LEMONTAKODE STUDIO</span>
            <span className="w-8 h-[1px] bg-[#ffd400]/40" />
            <span>EST. 2026</span>
          </div>

          {/* Fluid Display Headline */}
          <h1 className="font-display text-4xl sm:text-5.5xl xl:text-7xl font-extrabold tracking-tight leading-[1.05]">
            We design & engineer <br />
            digital products <br />
            <span className="font-serif-italic font-normal text-[#ffd400]">people remember.</span>
          </h1>

          {/* Direct Human Copy */}
          <p className="font-body text-sm sm:text-base text-[#F4F2ED]/75 max-w-lg leading-relaxed font-light">
            At LemontaKode, we combine creative art direction with disciplined engineering to construct high-performance mobile apps, web systems, and custom software.
          </p>

          {/* Action Triggers */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <button onClick={onStartProject} className="editorial-btn">
              Start a Project
            </button>
            <button
              onClick={onViewWork}
              className="font-mono-tech text-xs uppercase tracking-widest text-[#F4F2ED]/80 hover:text-[#ffd400] transition-colors flex items-center gap-2 cursor-pointer px-3 py-2"
            >
              <span>Selected Work</span>
              <span>↓</span>
            </button>
          </div>

          {/* Telemetry Strip */}
          <div className="pt-4 border-t border-white/10 flex items-center gap-8 font-mono-tech text-xs text-white/50">
            <div><span className="text-[#F4F2ED] font-bold">50+</span> SHIPPED</div>
            <div><span className="text-[#ffd400] font-bold">100%</span> RETENTION</div>
            <div><span className="text-[#507bf6] font-bold">6 MIN</span> RESPONSE</div>
          </div>
        </div>

        {/* Right Column: Interactive LemontaKode Visual Object */}
        <div className="lg:col-span-5 hidden lg:flex items-center justify-center relative">
          <motion.div
            animate={{
              x: mousePos.x,
              y: mousePos.y,
              rotate: mousePos.x * 0.1,
            }}
            transition={{ type: 'spring', stiffness: 75, damping: 15 }}
            className="w-72 h-72 xl:w-80 xl:h-80 bg-[#111319] border border-white/15 rounded-3xl p-6 relative flex flex-col justify-between shadow-2xl group cursor-pointer"
          >
            {/* Interactive Outer Glowing Frame */}
            <div className="absolute inset-0 rounded-3xl border border-[#ffd400]/30 opacity-60 group-hover:opacity-100 transition-opacity" />

            {/* Top Monospace Label */}
            <div className="flex justify-between items-center font-mono-tech text-[10px] text-white/40">
              <span>INTERACTIVE EMBLEM</span>
              <span className="text-[#ffd400]">SYSTEM // LIVE</span>
            </div>

            {/* Center Brand Mark Articulation */}
            <div className="my-auto flex items-center justify-center relative">
              <img
                src="/4th.png"
                alt="LemontaKode Brand Object"
                className="w-36 h-36 object-contain transition-transform duration-500 group-hover:scale-110"
              />
            </div>

            {/* Bottom Status & Coordinates */}
            <div className="font-mono-tech text-[10px] text-white/50 flex justify-between items-center">
              <span>X: {Math.round(mousePos.x)} Y: {Math.round(mousePos.y)}</span>
              <span>LEMONTAKODE.TECH</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
