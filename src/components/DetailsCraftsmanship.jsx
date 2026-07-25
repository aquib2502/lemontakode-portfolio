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

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const mm = gsap.matchMedia();

    // DESKTOP: Smooth GSAP Timeline Pinned Sequence
    mm.add('(min-width: 1024px)', () => {
      const stepElements = gsap.utils.toArray('.process-step-item');
      
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: '+=1500',
          pin: true,
          scrub: 0.6,
          anticipatePin: 1,
        },
      });

      // Animate step transitions cleanly through DOM opacity and translation
      stepElements.forEach((step, idx) => {
        if (idx !== 0) {
          tl.to(stepElements[idx - 1], {
            opacity: 0,
            y: -30,
            duration: 0.5,
          }).fromTo(
            step,
            { opacity: 0, y: 30 },
            { opacity: 1, y: 0, duration: 0.5 },
            '<'
          );
        }
      });

      return () => {
        tl.kill();
      };
    });

    return () => mm.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="min-h-screen bg-[#07080a] text-[#F4F2ED] border-t border-white/10 flex items-center justify-center relative overflow-hidden px-6 md:px-12 py-20 select-none"
      id="process"
    >
      <div ref={containerRef} className="max-w-7xl mx-auto w-full relative">
        <div className="font-mono-tech text-xs tracking-[0.2em] text-[#ffd400] uppercase mb-8">
          04 // HOW WE WORK
        </div>

        {/* DOM-rendered Step Items for Clean Animation (No innerText DOM mutation jumps) */}
        <div className="relative min-h-[360px]">
          {steps.map((step, idx) => (
            <div
              key={step.num}
              className={`process-step-item lg:absolute lg:inset-0 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center ${
                idx === 0 ? 'opacity-100 relative' : 'lg:opacity-0 mb-12 lg:mb-0'
              }`}
            >
              {/* Rolling Counter Number */}
              <div className="lg:col-span-4">
                <div className="font-mono-tech text-7xl lg:text-[11rem] font-extrabold text-[#ffd400] leading-none tracking-tighter">
                  {step.num}
                </div>
              </div>

              {/* Step Detail Content */}
              <div className="lg:col-span-8 space-y-4 lg:border-l border-white/10 lg:pl-10">
                <div className="font-mono-tech text-xs uppercase tracking-widest text-[#ffd400] font-bold">
                  {step.subtitle}
                </div>
                <h2 className="font-display text-3xl sm:text-5xl font-extrabold tracking-tight text-[#F4F2ED]">
                  {step.title}
                </h2>
                <p className="font-body text-base sm:text-xl text-[#cbcbcb] max-w-xl font-normal leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
