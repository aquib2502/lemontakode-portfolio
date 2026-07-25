'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const steps = [
  {
    num: '01',
    subtitle: 'Step 1: Goal Mapping',
    title: 'UNDERSTAND THE PROBLEM',
    desc: 'We start by interviewing your team, mapping your current workflow, and identifying the exact bottlenecks — before writing a single line of code.',
  },
  {
    num: '02',
    subtitle: 'Step 2: User Testing',
    title: 'DESIGN SIMPLE INTERFACES',
    desc: 'We design clear wireframes and prototypes so your team and customers can navigate the new software without needing a manual or training session.',
  },
  {
    num: '03',
    subtitle: 'Step 3: Custom Build',
    title: 'ENGINEER FAST CODE',
    desc: 'We write clean, modular software with automated tests to ensure maximum security, speed, and zero production bugs at launch.',
  },
  {
    num: '04',
    subtitle: 'Step 4: Safe Release',
    title: 'TEST & LAUNCH',
    desc: 'We run live load tests, deploy with automated rollback protection, and monitor system health so your launch never causes downtime.',
  },
  {
    num: '05',
    subtitle: 'Step 5: Ongoing Growth',
    title: 'MONITOR & EXPAND',
    desc: 'We continuously track performance, optimize database queries, and help you roll out new features as your business grows.',
  },
];

export default function DetailsCraftsmanship() {
  const sectionRef = useRef(null);
  const wrapperRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const mm = gsap.matchMedia();

    // DESKTOP: Single master timeline, single pin, single scrub
    mm.add('(min-width: 1024px)', () => {
      if (prefersReduced) return;

      const section = sectionRef.current;
      const numEls = gsap.utils.toArray('.proc-num', section);
      const subtitleEls = gsap.utils.toArray('.proc-subtitle', section);
      const titleEls = gsap.utils.toArray('.proc-title', section);
      const descEls = gsap.utils.toArray('.proc-desc', section);

      // Set initial states
      // Only step 0 is visible at start
      gsap.set(numEls.slice(1), { yPercent: 110 });
      gsap.set(titleEls.slice(1), { yPercent: 110 });
      gsap.set(subtitleEls.slice(1), { opacity: 0, y: 8 });
      gsap.set(descEls.slice(1), { opacity: 0, y: 10 });

      // ONE master timeline
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          // Each of the 4 transitions gets 600px of scroll + 300px hold
          end: `+=${steps.length * 900}`,
          pin: true,
          scrub: 0.8,
          anticipatePin: 1,
          pinSpacing: true,
        },
      });

      steps.forEach((_, i) => {
        if (i === 0) return; // nothing before first step

        // Hold previous state briefly (0.3 units = ~270px scroll before transition starts)
        tl.addLabel(`hold-${i - 1}`, '>');

        // --- NUMBER: clip mask replace ---
        // outgoing: travels upward behind its overflow-hidden wrapper
        tl.to(numEls[i - 1], {
          yPercent: -110,
          duration: 0.35,
          ease: 'power2.inOut',
        }, `>0.3`);
        // incoming: enters from below
        tl.fromTo(numEls[i],
          { yPercent: 110 },
          { yPercent: 0, duration: 0.35, ease: 'power2.inOut' },
          '<'
        );

        // --- TITLE: clip mask replace (slightly offset for visual priority) ---
        tl.to(titleEls[i - 1], {
          yPercent: -110,
          duration: 0.3,
          ease: 'power2.inOut',
        }, '<0.05');
        tl.fromTo(titleEls[i],
          { yPercent: 110 },
          { yPercent: 0, duration: 0.3, ease: 'power2.inOut' },
          '<'
        );

        // --- SUBTITLE: quiet fade ---
        tl.to(subtitleEls[i - 1], {
          opacity: 0,
          y: -6,
          duration: 0.2,
          ease: 'power2.in',
        }, '<');
        tl.fromTo(subtitleEls[i],
          { opacity: 0, y: 6 },
          { opacity: 1, y: 0, duration: 0.25, ease: 'power2.out' },
          '>-0.05'
        );

        // --- DESCRIPTION: quiet, small gap between exit and entrance ---
        tl.to(descEls[i - 1], {
          opacity: 0,
          y: -8,
          duration: 0.2,
          ease: 'power2.in',
        }, '<-0.1');
        tl.fromTo(descEls[i],
          { opacity: 0, y: 8 },
          { opacity: 1, y: 0, duration: 0.3, ease: 'power2.out' },
          '>0.05'
        );

        // Hold this new state
        tl.addLabel(`state-${i}`, '>');
      });

      return () => {
        ScrollTrigger.getAll().forEach(t => t.kill());
        tl.kill();
      };
    });

    return () => mm.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-[#07080a] text-[#F4F2ED] border-t border-white/10 relative select-none"
      id="process"
      style={{ minHeight: '100svh' }}
    >
      {/* Navbar-safe top padding so "04 // HOW WE WORK" never collides with floating nav */}
      <div
        ref={wrapperRef}
        className="max-w-7xl mx-auto px-6 md:px-12 w-full h-full flex flex-col justify-center"
        style={{ paddingTop: '6.5rem', paddingBottom: '4rem' }}
      >
        {/* Section label */}
        <div className="font-mono-tech text-xs tracking-[0.2em] text-[#ffd400] uppercase mb-12">
          04 // HOW WE WORK
        </div>

        {/* DESKTOP: Stacked clip-mask layers */}
        <div className="hidden lg:grid grid-cols-12 gap-12 items-center">
          {/* Left: Large Number — overflow-hidden clip mask */}
          <div className="col-span-4">
            {/* The clip container */}
            <div className="overflow-hidden relative" style={{ height: 'clamp(7rem, 14vw, 13rem)' }}>
              {steps.map((step, i) => (
                <div
                  key={step.num}
                  className="proc-num absolute inset-0 flex items-center font-mono-tech font-extrabold text-[#ffd400] leading-none tracking-tighter"
                  style={{ fontSize: 'clamp(6rem, 12vw, 11rem)' }}
                >
                  {step.num}
                </div>
              ))}
            </div>
          </div>

          {/* Right: Step content */}
          <div className="col-span-8 border-l border-white/10 pl-10 space-y-5 relative">
            {/* Subtitle — separate absolute stack */}
            <div className="relative" style={{ height: '1.2rem' }}>
              {steps.map((step, i) => (
                <div
                  key={step.num}
                  className="proc-subtitle absolute inset-0 font-mono-tech text-xs uppercase tracking-widest text-[#ffd400] font-bold"
                >
                  {step.subtitle}
                </div>
              ))}
            </div>

            {/* Title — overflow-hidden clip mask */}
            <div className="overflow-hidden relative" style={{ height: 'clamp(2.5rem, 5vw, 4rem)' }}>
              {steps.map((step, i) => (
                <div
                  key={step.num}
                  className="proc-title absolute inset-0 flex items-center font-display font-extrabold tracking-tight text-[#F4F2ED]"
                  style={{ fontSize: 'clamp(1.6rem, 3.2vw, 2.8rem)', lineHeight: 1.1 }}
                >
                  {step.title}
                </div>
              ))}
            </div>

            {/* Description — separate absolute stack */}
            <div className="relative" style={{ minHeight: '5rem' }}>
              {steps.map((step, i) => (
                <p
                  key={step.num}
                  className="proc-desc absolute top-0 left-0 font-body text-base text-[#cbcbcb] max-w-xl leading-relaxed font-normal"
                >
                  {step.desc}
                </p>
              ))}
            </div>

            {/* Step progress dots */}
            <div className="flex gap-2 pt-4">
              {steps.map((step) => (
                <span
                  key={step.num}
                  className="font-mono-tech text-[10px] text-white/30 tracking-widest"
                >
                  {step.num}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* MOBILE: Natural vertical layout — no pinning, no scroll hijacking */}
        <div className="lg:hidden flex flex-col gap-14">
          {steps.map((step) => (
            <div key={step.num} className="flex flex-col gap-3">
              <div
                className="font-mono-tech font-extrabold text-[#ffd400] leading-none"
                style={{ fontSize: 'clamp(3.5rem, 18vw, 5rem)' }}
              >
                {step.num}
              </div>
              <div className="border-t border-white/10 pt-4 space-y-2">
                <div className="font-mono-tech text-[10px] uppercase tracking-widest text-[#ffd400] font-bold">
                  {step.subtitle}
                </div>
                <h3 className="font-display text-xl font-extrabold tracking-tight text-[#F4F2ED]">
                  {step.title}
                </h3>
                <p className="font-body text-sm text-[#cbcbcb] leading-relaxed font-normal">
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
