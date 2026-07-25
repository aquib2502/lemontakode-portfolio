'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const steps = [
  {
    num: '01',
    title: 'DISCOVER & ARCHITECT',
    subtitle: 'System Modeling & Risk Analysis',
    desc: 'We map system requirements, identify security vectors, and specify database schemas before writing a single line of production code.',
  },
  {
    num: '02',
    title: 'UX & SYSTEM DESIGN',
    subtitle: 'Interface & Modular Components',
    desc: 'We prototype intuitive human interfaces and establish modular component architecture designed for scale and clarity.',
  },
  {
    num: '03',
    title: 'TEST-DRIVEN BUILD',
    subtitle: 'Modular Engineering & Reviews',
    desc: 'We execute clean, modular code with automated continuous integration, unit testing, and peer code reviews.',
  },
  {
    num: '04',
    title: 'VALIDATED LAUNCH',
    subtitle: 'Zero-Downtime Deployment',
    desc: 'We deploy to production infrastructure with load testing, security verification, and automated rollback triggers.',
  },
  {
    num: '05',
    title: 'TELEMETRY & SCALE',
    subtitle: 'Performance Monitoring',
    desc: 'We monitor live performance metrics, optimize database queries, and continuously expand system capabilities.',
  },
];

export default function DetailsCraftsmanship() {
  const sectionRef = useRef(null);
  const containerRef = useRef(null);
  const numberRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const descRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Pin the process section on desktop while scrolling through steps
      const trigger = ScrollTrigger.create({
        trigger: sectionRef.current,
        start: 'top top',
        end: '+=2000',
        pin: true,
        scrub: 0.5,
        onUpdate: (self) => {
          const progress = self.progress;
          const stepIndex = Math.min(
            steps.length - 1,
            Math.floor(progress * steps.length)
          );
          
          if (numberRef.current) {
            numberRef.current.innerText = steps[stepIndex].num;
          }
          if (titleRef.current) {
            titleRef.current.innerText = steps[stepIndex].title;
          }
          if (subtitleRef.current) {
            subtitleRef.current.innerText = steps[stepIndex].subtitle;
          }
          if (descRef.current) {
            descRef.current.innerText = steps[stepIndex].desc;
          }
        },
      });

      return () => trigger.kill();
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="min-h-screen bg-[#07080a] text-[#F4F2ED] border-t border-white/10 flex items-center justify-center relative overflow-hidden px-6 md:px-12 py-20 select-none"
      id="process"
    >
      <div ref={containerRef} className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Oversized Dynamic Monospace Counter */}
        <div className="lg:col-span-5 flex flex-col justify-center">
          <div className="font-mono-tech text-xs tracking-[0.2em] text-[#ffd400] uppercase mb-4">
            04 // PINNED METHODOLOGY
          </div>
          <div
            ref={numberRef}
            className="font-mono-tech text-[22vw] lg:text-[14rem] font-extrabold text-[#ffd400] leading-none tracking-tighter"
          >
            01
          </div>
        </div>

        {/* Right Column: Dynamic Process Detail Content */}
        <div className="lg:col-span-7 space-y-6 flex flex-col justify-center border-l border-white/10 pl-6 lg:pl-12 py-6">
          <h2
            ref={titleRef}
            className="font-display text-3xl sm:text-5xl font-extrabold tracking-tight text-[#F4F2ED] transition-all duration-300"
          >
            {steps[0].title}
          </h2>

          <div
            ref={subtitleRef}
            className="font-mono-tech text-xs uppercase tracking-widest text-[#ffd400]/80 font-bold"
          >
            {steps[0].subtitle}
          </div>

          <p
            ref={descRef}
            className="font-body text-base sm:text-xl text-[#F4F2ED]/75 max-w-xl font-light leading-relaxed transition-all duration-300"
          >
            {steps[0].desc}
          </p>

          <div className="pt-8 font-mono-tech text-xs text-white/40 flex items-center gap-3">
            <span>SCROLL TO PROGRESS</span>
            <span className="w-12 h-[1px] bg-white/20" />
            <span>01 — 05</span>
          </div>
        </div>
      </div>
    </section>
  );
}
