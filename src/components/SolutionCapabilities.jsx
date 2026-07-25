'use client';

import React, { useRef } from 'react';
import gsap from 'gsap';

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

// Individual row — uses GSAP for translateX motions to avoid layout shift
function ServiceRow({ cap }) {
  const rowRef = useRef(null);
  const numRef = useRef(null);
  const titleWhiteRef = useRef(null);
  const titleYellowRef = useRef(null);
  const arrowRef = useRef(null);
  const descRef = useRef(null);

  const prefersReduced =
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function handleEnter() {
    if (prefersReduced) return;
    gsap.to(numRef.current, { x: 8, duration: 0.25, ease: 'power2.out' });
    gsap.to(descRef.current, { x: 5, duration: 0.25, ease: 'power2.out' });
    gsap.to(arrowRef.current, { x: 18, duration: 0.3, ease: 'power2.out' });
  }

  function handleLeave() {
    if (prefersReduced) return;
    gsap.to([numRef.current, descRef.current, arrowRef.current], {
      x: 0, duration: 0.2, ease: 'power2.out',
    });
  }

  return (
    <div
      ref={rowRef}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      onFocus={handleEnter}
      onBlur={handleLeave}
      tabIndex={0}
      role="listitem"
      className="service-row group relative py-6 px-0 cursor-default flex flex-col lg:flex-row lg:items-center justify-between gap-4 lg:gap-8 outline-none"
    >
      {/* Number */}
      <div
        ref={numRef}
        className="font-mono-tech text-sm font-bold text-[#ffd400]/50 shrink-0 w-8"
        style={{ willChange: 'transform' }}
      >
        {cap.num}
      </div>

      {/* Title — Left-to-Right CSS Clip-Path Wipe */}
      <div className="flex-1 min-w-0">
        <div className="relative inline-block">
          {/* Default Title */}
          <div className="font-display font-extrabold tracking-tight text-[#F4F2ED]" style={{ fontSize: 'clamp(1rem, 2vw, 1.5rem)', lineHeight: 1.15 }}>
            {cap.title}
          </div>
          {/* White Hover Wipe Overlay */}
          <div
            className="absolute inset-0 font-display font-extrabold tracking-tight text-[#ffffff] service-title-wipe"
            style={{ fontSize: 'clamp(1rem, 2vw, 1.5rem)', lineHeight: 1.15 }}
            aria-hidden="true"
          >
            {cap.title}
          </div>
        </div>
        <div className="font-mono-tech text-[10px] text-white/40 tracking-widest uppercase mt-1">
          {cap.category}
        </div>
      </div>

      {/* Description */}
      <div
        ref={descRef}
        className="lg:w-5/12 font-body text-sm text-[#a0a2a8] leading-relaxed font-normal"
        style={{ willChange: 'transform' }}
      >
        {cap.desc}
      </div>

      {/* Tech + Arrow */}
      <div className="lg:w-3/12 font-mono-tech text-[10px] text-white/40 tracking-wider flex items-center lg:justify-end gap-3">
        <span>{cap.tech}</span>
        <span
          ref={arrowRef}
          className="text-[#ffd400]"
          aria-hidden="true"
          style={{ willChange: 'transform' }}
        >
          →
        </span>
      </div>
    </div>
  );
}

export default function SolutionCapabilities() {
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
        </div>

        {/* Service Rows */}
        <div className="border-t border-white/10" role="list">
          {capabilities.map((cap) => (
            <ServiceRow key={cap.num} cap={cap} />
          ))}
        </div>
      </div>
    </section>
  );
}
