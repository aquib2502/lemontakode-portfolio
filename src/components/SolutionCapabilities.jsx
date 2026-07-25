'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';

const capabilities = [
  {
    num: '01',
    title: 'CUSTOM WEB APPLICATIONS',
    category: 'WEB PLATFORMS',
    desc: 'We build custom web systems that run fast, automate daily tasks, and replace slow legacy software.',
    tech: 'REACT · NEXT.JS · NODE.JS · POSTGRES',
  },
  {
    num: '02',
    title: 'MOBILE APPLICATIONS',
    category: 'IOS & ANDROID',
    desc: 'High-speed mobile apps for iPhone & Android designed to work smoothly even with poor internet connection.',
    tech: 'FLUTTER · REACT NATIVE · FIREBASE',
  },
  {
    num: '03',
    title: 'PRODUCT & UX DESIGN',
    category: 'INTERFACE DESIGN',
    desc: 'Clean, simple interface designs that eliminate user confusion and help customers buy faster.',
    tech: 'USER TESTING · WIREFRAMES · PROTOTYPES',
  },
  {
    num: '04',
    title: 'BUSINESS AUTOMATION',
    category: 'WORKFLOW SOFTWARE',
    desc: 'Custom internal software that replaces manual spreadsheets, saving your team hours every single day.',
    tech: 'API INTEGRATIONS · BOT WORKFLOWS · DATABASES',
  },
  {
    num: '05',
    title: 'CLOUD & HOSTING',
    category: 'SYSTEM INFRASTRUCTURE',
    desc: 'Reliable cloud setups on Amazon AWS that stay online 24/7 without crashing during high traffic.',
    tech: 'AWS CLOUD · DOCKER · AUTOMATED BACKUPS',
  },
  {
    num: '06',
    title: 'CYBER SECURITY AUDITS',
    category: 'DATA PROTECTION',
    desc: 'Thorough security testing to fix vulnerabilities, protect customer data, and prevent hacker attacks.',
    tech: 'SECURITY SCANS · OWASP AUDITS · ENCRYPTION',
  },
];

export default function SolutionCapabilities() {
  const [activeIdx, setActiveIdx] = useState(null);

  return (
    <section className="theme-charcoal py-24 md:py-32 border-t border-white/10 select-none" id="services">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
          <div>
            <div className="font-mono-tech text-xs tracking-[0.2em] text-[#ffd400] uppercase mb-3">
              03 // WHAT WE SOLVE
            </div>
            <h2 className="font-display text-4xl sm:text-6xl font-extrabold tracking-tight text-[#F4F2ED]">
              How we <span className="font-serif-italic font-normal text-[#ffd400]">help you.</span>
            </h2>
          </div>
          <div className="font-mono-tech text-xs text-white/50">
            HOVER OR TAP ANY SERVICE TO EXPLORE →
          </div>
        </div>

        {/* Interactive Capability Rows with Directional LEFT -> RIGHT Sweep */}
        <div className="space-y-0 border-t border-white/10">
          {capabilities.map((cap, index) => (
            <div
              key={cap.num}
              onMouseEnter={() => setActiveIdx(index)}
              onMouseLeave={() => setActiveIdx(null)}
              onClick={() => setActiveIdx(index)}
              className={`capability-row-sweep relative py-8 px-6 cursor-pointer flex flex-col lg:flex-row lg:items-center justify-between gap-6 transition-all duration-300 ${
                activeIdx === index ? 'bg-white/[0.04]' : ''
              }`}
            >
              {/* Row Left: Number & Title with Right-Shift Motion */}
              <div className="relative z-10 flex items-center gap-6 lg:w-5/12 transition-transform duration-300 transform group-hover:translate-x-3">
                <span className={`font-mono-tech text-sm font-bold transition-colors ${
                  activeIdx === index ? 'text-[#ffd400]' : 'text-white/40'
                }`}>
                  {cap.num}
                </span>
                <div>
                  <h3 className="font-display text-xl sm:text-2.5xl font-extrabold tracking-tight text-[#F4F2ED]">
                    {cap.title}
                  </h3>
                  <span className="font-mono-tech text-[10px] text-white/50 tracking-widest uppercase block mt-1">
                    {cap.category}
                  </span>
                </div>
              </div>

              {/* Row Center: Description */}
              <div className="relative z-10 lg:w-4/12 font-body text-sm text-[#cbcbcb] leading-relaxed font-normal">
                {cap.desc}
              </div>

              {/* Row Right: Tech Tag & Gliding Arrow Signal */}
              <div className="relative z-10 lg:w-3/12 font-mono-tech text-[11px] text-[#ffd400] tracking-wider flex items-center lg:justify-end gap-3">
                <span>{cap.tech}</span>
                <span className={`transition-transform duration-300 ${activeIdx === index ? 'translate-x-2 text-[#ffd400]' : 'text-white/30'}`}>
                  →
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
