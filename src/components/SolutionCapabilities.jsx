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
  const [activeIdx, setActiveIdx] = useState(0);

  return (
    <section className="theme-charcoal py-24 md:py-32 border-t border-white/10" id="services">
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
            HOVER OR TAP ANY SERVICE TO LEARN MORE
          </div>
        </div>

        {/* High-Contrast Interactive Typography Rows */}
        <div className="space-y-0">
          {capabilities.map((cap, index) => (
            <motion.div
              key={cap.num}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              onMouseEnter={() => setActiveIdx(index)}
              onClick={() => setActiveIdx(index)}
              className={`capability-row py-8 px-4 cursor-pointer flex flex-col lg:flex-row lg:items-center justify-between gap-6 transition-all duration-300 ${
                activeIdx === index ? 'border-l-2 border-l-[#ffd400] bg-white/[0.04] pl-6' : ''
              }`}
            >
              <div className="flex items-center gap-6 lg:w-5/12">
                <span className="font-mono-tech text-sm font-bold text-[#ffd400]">{cap.num}</span>
                <div>
                  <h3 className="font-display text-xl sm:text-2.5xl font-extrabold tracking-tight text-[#F4F2ED]">
                    {cap.title}
                  </h3>
                  <span className="font-mono-tech text-[10px] text-white/50 tracking-widest uppercase block mt-1">
                    {cap.category}
                  </span>
                </div>
              </div>

              <div className="lg:w-4/12 font-body text-sm text-[#cbcbcb] leading-relaxed font-normal">
                {cap.desc}
              </div>

              <div className="lg:w-3/12 font-mono-tech text-[11px] text-[#ffd400] tracking-wider lg:text-right">
                {cap.tech}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
