'use client';

import React, { useState } from 'react';
import OptionWheel from './reactbits/OptionWheel';
import { motion, AnimatePresence } from 'framer-motion';

const capabilities = [
  {
    num: '01',
    title: 'CUSTOM WEB APPLICATIONS',
    category: 'WEB PLATFORMS',
    desc: 'We build web systems that automate daily tasks, replace slow legacy software, and run fast under real load.',
    tech: 'REACT · NEXT.JS · NODE.JS · POSTGRES',
  },
  {
    num: '02',
    title: 'MOBILE APPLICATIONS',
    category: 'IOS & ANDROID',
    desc: 'High-speed apps for iPhone and Android that work smoothly even with a poor internet connection.',
    tech: 'FLUTTER · REACT NATIVE · FIREBASE',
  },
  {
    num: '03',
    title: 'PRODUCT & UX DESIGN',
    category: 'INTERFACE DESIGN',
    desc: 'Clean, simple interface designs that eliminate user confusion and help customers take action faster.',
    tech: 'USER TESTING · WIREFRAMES · PROTOTYPES',
  },
  {
    num: '04',
    title: 'BUSINESS AUTOMATION',
    category: 'WORKFLOW SOFTWARE',
    desc: 'Custom internal tools that replace manual spreadsheets, saving your team hours every single day.',
    tech: 'API INTEGRATIONS · BOT WORKFLOWS · DATABASES',
  },
  {
    num: '05',
    title: 'CLOUD & HOSTING',
    category: 'SYSTEM INFRASTRUCTURE',
    desc: 'Reliable cloud setups that stay online 24/7 and scale without crashing during high traffic.',
    tech: 'AWS · DOCKER · AUTOMATED BACKUPS',
  },
  {
    num: '06',
    title: 'CYBER SECURITY AUDITS',
    category: 'DATA PROTECTION',
    desc: 'Thorough security testing to fix vulnerabilities, protect customer data, and prevent attacks.',
    tech: 'SECURITY SCANS · OWASP · ENCRYPTION',
  },
];

export default function SolutionCapabilities() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [hasInteracted, setHasInteracted] = useState(false);

  // Extract just the titles for the OptionWheel
  const titles = capabilities.map(cap => cap.title);
  
  const activeCap = capabilities[activeIndex] || capabilities[0];

  const handleIndexChange = (idx) => {
    setActiveIndex(idx);
    if (!hasInteracted) setHasInteracted(true);
  };

  return (
    <section className="theme-charcoal py-24 md:py-32 border-t border-white/10 select-none overflow-hidden bg-[#0a0b0e]" id="services">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 w-full">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6 border-b border-white/10 pb-6">
          <div>
            <div className="font-mono-tech text-xs tracking-[0.2em] text-[#ffd400] uppercase mb-3">
              03 // WHAT WE SOLVE
            </div>
            <h2 className="font-display text-4xl sm:text-6xl font-extrabold tracking-tight text-[#F4F2ED]">
              How we <span className="font-serif-italic font-normal text-[#ffd400]">help you.</span>
            </h2>
          </div>
        </div>

        {/* Split Layout: OptionWheel on Left, Details on Right */}
        <div className="flex flex-col lg:flex-row items-center justify-between min-h-[50vh] gap-12 lg:gap-24 relative mt-12">
          
          {/* Instruction Pop-up (Outside the wheel, pointing left) */}
          <AnimatePresence>
            {!hasInteracted && (
              <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                viewport={{ once: true, amount: 0.5 }}
                className="absolute top-1/2 left-[50%] transform -translate-y-1/2 -translate-x-1/2 z-30 pointer-events-none hidden lg:flex items-center gap-3"
              >
                <motion.div
                  animate={{ x: [-5, 5, -5] }}
                  transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#ffd400]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                  </svg>
                </motion.div>
                <div className="bg-[#050608]/90 border border-[#ffd400]/20 text-[#F4F2ED] px-4 py-2 rounded-lg backdrop-blur-md shadow-[0_10px_30px_rgba(255,212,0,0.2)] max-w-[160px]">
                  <span className="font-body text-xs font-semibold leading-tight block">Drag the wheel to know more about what we do</span>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Left Side: OptionWheel (Internal Logic) */}
          <div className="w-full lg:w-1/2 h-[40vh] lg:h-[50vh] relative border-l-2 border-[#ffd400]/20 pl-4 rounded-3xl bg-[#050608] shadow-[inset_0_0_50px_rgba(0,0,0,0.8)] overflow-hidden">
            {/* Gradient Mask for fading out top/bottom edges of the wheel */}
            <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-[#050608] via-transparent to-[#050608] z-10"></div>
            
            <OptionWheel
              items={titles}
              onChange={handleIndexChange}
              textColor="#4a4c52"
              activeColor="#ffd400"
              side="left"
              fontSize={1.8}
              spacing={2.2}
              curve={1.2}
              tilt={8}
              blur={2}
              fade={0.3}
              smoothing={200}
              inset={40}
              loop={false}
              draggable={true}
              className="font-display font-extrabold uppercase tracking-tight"
            />
          </div>

          {/* Right Side: Details Crossfade */}
          <div className="w-full lg:w-1/2 h-[40vh] lg:h-[50vh] flex flex-col justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCap.num}
                initial={{ opacity: 0, y: 20, filter: 'blur(5px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                exit={{ opacity: 0, y: -20, filter: 'blur(5px)' }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="bg-[#0a0b0e] border border-[#ffd400]/20 shadow-[0_20px_60px_rgba(0,0,0,0.5)] p-8 md:p-12 rounded-3xl relative"
              >
                {/* Number Badge */}
                <div className="absolute top-0 right-0 -mt-6 mr-8 bg-[#ffd400] text-black font-display font-extrabold text-2xl py-2 px-4 rounded-lg shadow-xl shadow-[#ffd400]/20 transform rotate-3">
                  {activeCap.num}
                </div>

                <div className="space-y-6">
                  <div>
                    <div className="font-mono-tech text-xs tracking-[0.2em] text-white/40 uppercase mb-2">
                      {activeCap.category}
                    </div>
                    <h3 className="font-display text-3xl font-extrabold text-[#F4F2ED] leading-tight">
                      {activeCap.title}
                    </h3>
                  </div>

                  <p className="font-body text-[#a0a2a8] text-lg leading-relaxed">
                    {activeCap.desc}
                  </p>

                  <div className="pt-6 border-t border-white/10 mt-6">
                    <div className="font-mono-tech text-[10px] text-[#ffd400] tracking-wider uppercase mb-2">
                      TECH STACK
                    </div>
                    <div className="font-mono-tech text-xs text-[#F4F2ED] bg-[#1a1c23] p-4 rounded-xl border border-white/5 shadow-inner inline-block">
                      {activeCap.tech}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
}
