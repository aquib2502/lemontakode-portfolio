'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from 'framer-motion';
import { Sparkles, Code2, Cpu, BarChart3, CheckCircle2, ArrowRight } from 'lucide-react';

export default function NunuProcess() {
  const sectionRef = useRef(null);
  const pathRef = useRef(null);
  const node1Ref = useRef(null);
  const node2Ref = useRef(null);
  const node3Ref = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const section = sectionRef.current;
    const path = pathRef.current;

    if (!section || !path) return;

    // Get total SVG path length for strokeDasharray animation
    const pathLength = path.getTotalLength();
    gsap.set(path, {
      strokeDasharray: pathLength,
      strokeDashoffset: pathLength,
    });

    // GSAP ScrollTrigger timeline to draw the SVG line as user scrolls
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: 'top 60%',
        end: 'bottom 80%',
        scrub: 0.8,
      },
    });

    tl.to(path, {
      strokeDashoffset: 0,
      ease: 'none',
    });

    // Activate Node 1, 2, 3 as scroll progresses
    ScrollTrigger.create({
      trigger: node1Ref.current,
      start: 'top 70%',
      onEnter: () => gsap.to(node1Ref.current, { scale: 1.2, backgroundColor: '#ffd400', boxShadow: '0 0 25px #ffd400', duration: 0.4 }),
      onLeaveBack: () => gsap.to(node1Ref.current, { scale: 1, backgroundColor: '#1a1c23', boxShadow: 'none', duration: 0.4 }),
    });

    ScrollTrigger.create({
      trigger: node2Ref.current,
      start: 'top 70%',
      onEnter: () => gsap.to(node2Ref.current, { scale: 1.2, backgroundColor: '#ffd400', boxShadow: '0 0 25px #ffd400', duration: 0.4 }),
      onLeaveBack: () => gsap.to(node2Ref.current, { scale: 1, backgroundColor: '#1a1c23', boxShadow: 'none', duration: 0.4 }),
    });

    ScrollTrigger.create({
      trigger: node3Ref.current,
      start: 'top 70%',
      onEnter: () => gsap.to(node3Ref.current, { scale: 1.2, backgroundColor: '#ffd400', boxShadow: '0 0 25px #ffd400', duration: 0.4 }),
      onLeaveBack: () => gsap.to(node3Ref.current, { scale: 1, backgroundColor: '#1a1c23', boxShadow: 'none', duration: 0.4 }),
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <section ref={sectionRef} id="how-it-works" className="relative py-28 md:py-36 bg-[#07080a] text-[#F4F2ED] overflow-hidden select-none">
      {/* Section Atmosphere Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#ffd400]/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-[1280px] mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 md:mb-28">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-[#ffd400]/30 bg-[#ffd400]/5 text-[#ffd400] font-mono-tech text-xs uppercase tracking-widest mb-4"
          >
            <Sparkles size={13} />
            <span>HOW IT WORKS</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-[#F4F2ED] leading-none mb-4"
          >
            Here&apos;s how it <span className="text-[#ffd400]">works.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="font-body text-base md:text-lg text-[#9ea0a8]"
          >
            Two thousand percent faster execution on LemontaKode with AI agents &amp; expert engineers.
          </motion.p>
        </div>

        {/* Process Steps Container with Central Connected Line */}
        <div className="relative max-w-5xl mx-auto">
          
          {/* Desktop SVG Connecting Line (Hidden on Mobile) */}
          <div className="hidden md:block absolute inset-0 pointer-events-none z-0">
            <svg className="w-full h-full" viewBox="0 0 1000 1200" fill="none" preserveAspectRatio="none">
              {/* Dim background guide path */}
              <path
                d="M 500 40 L 500 180 L 500 350 L 200 550 L 200 700 L 800 900 L 800 1050"
                stroke="rgba(255, 255, 255, 0.08)"
                strokeWidth="2"
                strokeDasharray="6 6"
              />
              {/* Animated Glowing Yellow GSAP Path */}
              <path
                ref={pathRef}
                d="M 500 40 L 500 180 L 500 350 L 200 550 L 200 700 L 800 900 L 800 1050"
                stroke="#ffd400"
                strokeWidth="3"
                strokeLinecap="round"
                style={{ filter: 'drop-shadow(0 0 8px rgba(255,212,0,0.6))' }}
              />
            </svg>
          </div>

          {/* Step 1: Right Card */}
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-8 items-center mb-24 md:mb-36">
            <div className="hidden md:flex col-span-5 justify-end pr-8" />
            
            {/* Center Node 1 */}
            <div className="hidden md:flex col-span-2 justify-center relative">
              <div
                ref={node1Ref}
                className="w-10 h-10 rounded-full bg-[#12141c] border-2 border-[#ffd400] text-[#ffd400] font-mono-tech text-sm font-bold flex items-center justify-center transition-all duration-300 z-10 shadow-[0_0_15px_rgba(255,212,0,0.3)]"
              >
                1
              </div>
            </div>

            {/* Right Content Block */}
            <div className="col-span-12 md:col-span-5">
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="p-6 md:p-8 rounded-2xl bg-[#0f1117] border border-white/10 hover:border-[#ffd400]/40 transition-all duration-300 shadow-xl group"
              >
                <div className="w-10 h-10 rounded-xl bg-[#ffd400]/10 border border-[#ffd400]/30 text-[#ffd400] flex items-center justify-center mb-4">
                  <Code2 size={20} />
                </div>
                
                <div className="font-mono-tech text-xs text-[#ffd400] uppercase tracking-widest mb-2 font-semibold">
                  STEP 01 // SPECIFICATION
                </div>

                <h3 className="font-display text-2xl font-bold text-[#F4F2ED] mb-3 group-hover:text-[#ffd400] transition-colors">
                  Write instructions in plain english.
                </h3>

                <p className="font-body text-sm text-[#9ea0a8] leading-relaxed mb-6">
                  Describe your feature requests, software workflows, or bug reports. Our system parses specifications into structured architecture plans.
                </p>

                {/* Input Prompt Card Preview (nunu.ai prompt style) */}
                <div className="p-4 rounded-xl bg-[#08090d] border border-white/10 space-y-2">
                  <div className="flex items-center gap-2 text-xs font-mono-tech text-white/40">
                    <span className="w-2 h-2 rounded-full bg-[#ffd400] animate-ping" />
                    <span>Prompt Input //</span>
                  </div>
                  <div className="text-xs font-mono-tech text-[#F4F2ED] bg-white/5 p-2.5 rounded-lg border border-white/5">
                    &quot;Build an automated QA test suite for user authentication with Stripe webhook validation.&quot;
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Step 2: Left Card */}
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-8 items-center mb-24 md:mb-36">
            {/* Left Content Block */}
            <div className="col-span-12 md:col-span-5 order-2 md:order-1">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="p-6 md:p-8 rounded-2xl bg-[#0f1117] border border-white/10 hover:border-[#ffd400]/40 transition-all duration-300 shadow-xl group"
              >
                <div className="w-10 h-10 rounded-xl bg-[#ffd400]/10 border border-[#ffd400]/30 text-[#ffd400] flex items-center justify-center mb-4">
                  <Cpu size={20} />
                </div>

                <div className="font-mono-tech text-xs text-[#ffd400] uppercase tracking-widest mb-2 font-semibold">
                  STEP 02 // EXECUTION
                </div>

                <h3 className="font-display text-2xl font-bold text-[#F4F2ED] mb-3 group-hover:text-[#ffd400] transition-colors">
                  Let our agents &amp; engineers run your tasks.
                </h3>

                <p className="font-body text-sm text-[#9ea0a8] leading-relaxed mb-6">
                  AI agents collaborate with our lead engineers to execute code, run continuous automated test suites, and resolve infrastructure tasks seamlessly.
                </p>

                {/* Task Execution UI Image Mockup */}
                <div className="rounded-xl overflow-hidden border border-white/10 shadow-lg relative aspect-[16/10]">
                  <img
                    src="/lemontakode_task_execution_1787310653065.png"
                    alt="Task Execution Preview"
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>
            </div>

            {/* Center Node 2 */}
            <div className="hidden md:flex col-span-2 justify-center relative order-1 md:order-2">
              <div
                ref={node2Ref}
                className="w-10 h-10 rounded-full bg-[#12141c] border-2 border-[#ffd400] text-[#ffd400] font-mono-tech text-sm font-bold flex items-center justify-center transition-all duration-300 z-10 shadow-[0_0_15px_rgba(255,212,0,0.3)]"
              >
                2
              </div>
            </div>

            <div className="hidden md:flex col-span-5 order-3" />
          </div>

          {/* Step 3: Right Card */}
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="hidden md:flex col-span-5 justify-end pr-8" />
            
            {/* Center Node 3 */}
            <div className="hidden md:flex col-span-2 justify-center relative">
              <div
                ref={node3Ref}
                className="w-10 h-10 rounded-full bg-[#12141c] border-2 border-[#ffd400] text-[#ffd400] font-mono-tech text-sm font-bold flex items-center justify-center transition-all duration-300 z-10 shadow-[0_0_15px_rgba(255,212,0,0.3)]"
              >
                3
              </div>
            </div>

            {/* Right Content Block */}
            <div className="col-span-12 md:col-span-5">
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="p-6 md:p-8 rounded-2xl bg-[#0f1117] border border-white/10 hover:border-[#ffd400]/40 transition-all duration-300 shadow-xl group"
              >
                <div className="w-10 h-10 rounded-xl bg-[#ffd400]/10 border border-[#ffd400]/30 text-[#ffd400] flex items-center justify-center mb-4">
                  <BarChart3 size={20} />
                </div>

                <div className="font-mono-tech text-xs text-[#ffd400] uppercase tracking-widest mb-2 font-semibold">
                  STEP 03 // DELIVERY &amp; RESULTS
                </div>

                <h3 className="font-display text-2xl font-bold text-[#F4F2ED] mb-3 group-hover:text-[#ffd400] transition-colors">
                  Get your results &amp; scale.
                </h3>

                <p className="font-body text-sm text-[#9ea0a8] leading-relaxed mb-6">
                  Receive clean, production-ready code with instant test coverage reports, automated rollouts, and 24/7 system health monitoring.
                </p>

                {/* Analytics & Results UI Image Mockup */}
                <div className="rounded-xl overflow-hidden border border-white/10 shadow-lg relative aspect-[16/10]">
                  <img
                    src="/lemontakode_analytics_results_1787310673170.png"
                    alt="Analytics Results Preview"
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
