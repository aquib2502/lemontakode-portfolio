'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const steps = [
  {
    num: '01',
    title: 'UNDERSTAND THE PROBLEM',
    subtitle: 'Step 1: Goal Mapping',
    desc: 'We start by interviewing your team, analyzing your current workflow, and identifying exact bottlenecks before writing any code.',
  },
  {
    num: '02',
    title: 'DESIGN SIMPLE INTERFACES',
    subtitle: 'Step 2: User Testing',
    desc: 'We design clear wireframes and prototypes so your users can navigate your software without requiring manuals or training.',
  },
  {
    num: '03',
    title: 'ENGINEER FAST CODE',
    subtitle: 'Step 3: Custom Build',
    desc: 'We write clean, modular software with automated tests to ensure maximum security, speed, and zero bugs.',
  },
  {
    num: '04',
    title: 'TEST & LAUNCH',
    subtitle: 'Step 4: Safe Release',
    desc: 'We run live load tests and deploy your project with automated backups so your system never experiences downtime.',
  },
  {
    num: '05',
    title: 'MONITOR & EXPAND',
    subtitle: 'Step 5: Ongoing Growth',
    desc: 'We continuously monitor system performance, optimize database speed, and help you roll out new features seamlessly.',
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
      const trigger = ScrollTrigger.create({
        trigger: sectionRef.current,
        start: 'top top',
        end: '+=1800',
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
            04 // HOW WE WORK
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
            className="font-mono-tech text-xs uppercase tracking-widest text-[#ffd400] font-bold"
          >
            {steps[0].subtitle}
          </div>

          <p
            ref={descRef}
            className="font-body text-base sm:text-xl text-[#cbcbcb] max-w-xl font-normal leading-relaxed transition-all duration-300"
          >
            {steps[0].desc}
          </p>

          <div className="pt-8 font-mono-tech text-xs text-white/50 flex items-center gap-3">
            <span>SCROLL TO SEE NEXT STEP</span>
            <span className="w-12 h-[1px] bg-white/20" />
            <span>01 — 05</span>
          </div>
        </div>
      </div>
    </section>
  );
}
