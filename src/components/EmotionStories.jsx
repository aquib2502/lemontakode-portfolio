'use client';

import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const projects = [
  {
    id: 'tpfaid',
    num: '01',
    category: 'CROWDFUNDING PLATFORM',
    title: 'TPFAID Platform',
    problemSolved: 'Emergency relief donations were delayed by days due to slow manual paperwork, leaving aid victims waiting during critical hours.',
    solutionBuilt: 'We engineered a real-time verification engine with live donation tracking that processes aid disburse instantly.',
    outcomeLabel: 'DISBURSEMENT SPEED',
    outcomeVal: '72 HRS → INSTANT',
    outcomeDesc: 'Cut donation processing friction by 40% globally.',
    role: 'Product Design & Full-Stack Engineering',
    tech: 'NEXT.JS / AWS AMPLIFY / TAILWIND',
    videoUrl: '/tpfvideo.mp4',
    liveUrl: '#contact',
  },
  {
    id: 'tpf-admin',
    num: '02',
    category: 'MANAGEMENT DASHBOARD',
    title: 'TPF Admin System',
    problemSolved: 'Verifying thousands of aid relief campaigns manually created a 72-hour review backlog for campaign managers.',
    solutionBuilt: 'We built a automated campaign review dashboard with real-time audit logs and instant fraud detection.',
    outcomeLabel: 'REVIEW BACKLOG',
    outcomeVal: '72 HRS → 6 MIN',
    outcomeDesc: 'Reduced review time from days to minutes.',
    role: 'System Architecture & Security Audit',
    tech: 'REACT / NODE.JS / EXPRESS / MONGO',
    videoUrl: '/tpfadmin-video.mp4',
    liveUrl: '#contact',
  },
  {
    id: 'thetraceexpress',
    num: '03',
    category: 'LOGISTICS ENGINE',
    title: 'The Trace Express',
    problemSolved: 'Cross-border courier shipments frequently got stuck in customs due to missing manifest data and carrier miscommunication.',
    solutionBuilt: 'We created an automated logistics API that auto-fills international customs declarations and tracks manifests live.',
    outcomeLabel: 'GLOBAL COVERAGE',
    outcomeVal: '120+ COUNTRIES',
    outcomeDesc: 'Predictive manifest processing across global shipping hubs.',
    role: 'API Integration & Microservices',
    tech: 'NEXT.JS SSR / GRAPHQL / KUBERNETES',
    videoUrl: '/tte-video.mp4',
    liveUrl: '#contact',
  },
  {
    id: 'flowindia',
    num: '04',
    category: 'BRAND IDENTITY & WEB',
    title: 'Flow India Platform',
    problemSolved: 'Legacy corporate site suffered from low engagement and high visitor drop-off rates due to slow page loads.',
    solutionBuilt: 'We redesigned the entire web presence with fluid studio showcases, instant sub-second load times, and custom typography.',
    outcomeLabel: 'VISITOR RETENTION',
    outcomeVal: '+250% ENGAGEMENT',
    outcomeDesc: 'Established a premium corporate showcase benchmark.',
    role: 'Brand Direction & Editorial Web Design',
    tech: 'NEXT.JS / GSAP / FRAMER MOTION',
    videoUrl: '/flowindiavideo.mp4',
    liveUrl: '#contact',
  }
];

export default function EmotionStories() {
  const sectionRef = useRef(null);
  const [activeProjectIdx, setActiveProjectIdx] = useState(0);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const mm = gsap.matchMedia();

    // DESKTOP: Clean Pinned Timeline transitioning 1 complete project at a time
    mm.add('(min-width: 1024px)', () => {
      const trigger = ScrollTrigger.create({
        trigger: sectionRef.current,
        start: 'top top',
        end: `+=${projects.length * 900}`,
        pin: true,
        scrub: 0.5,
        onUpdate: (self) => {
          const idx = Math.min(
            projects.length - 1,
            Math.floor(self.progress * projects.length)
          );
          setActiveProjectIdx(idx);
        },
      });

      return () => trigger.kill();
    });

    return () => mm.revert();
  }, []);

  const activeProject = projects[activeProjectIdx];

  return (
    <section ref={sectionRef} className="theme-black relative overflow-hidden py-20 select-none" id="projects">
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">
        {/* Section Header */}
        <div className="flex justify-between items-end mb-8 border-b border-white/10 pb-6">
          <div>
            <div className="font-mono-tech text-xs tracking-[0.2em] text-[#ffd400] uppercase mb-2">
              05 // REAL PROBLEMS WE SOLVED
            </div>
            <h2 className="font-display text-3xl sm:text-5xl font-extrabold tracking-tight text-[#F4F2ED]">
              Featured <span className="font-serif-italic font-normal text-[#ffd400]">case studies.</span>
            </h2>
          </div>
          <div className="font-mono-tech text-xs text-white/50 flex items-center gap-2">
            <span>PROJECT {activeProjectIdx + 1} / {projects.length}</span>
          </div>
        </div>

        {/* Desktop Single-Stage Viewport Framing (1 Complete Active Project Visible) */}
        <div className="hidden lg:grid grid-cols-12 gap-8 items-center min-h-[520px]">
          {/* Left Column: Non-Cropped Adaptive Video Stage */}
          <div className="col-span-7">
            <div className="adaptive-video-stage">
              <video
                src={activeProject.videoUrl}
                autoPlay
                loop
                muted
                playsInline
              />
            </div>
          </div>

          {/* Right Column: Case Study Narrative Details */}
          <div className="col-span-5 space-y-4">
            <div className="flex justify-between items-center font-mono-tech text-xs">
              <span className="text-[#ffd400] font-bold">{activeProject.num} // {activeProject.category}</span>
              <span className="text-white/40">{activeProject.role}</span>
            </div>

            <h3 className="font-display text-3xl font-extrabold text-[#F4F2ED] tracking-tight">
              {activeProject.title}
            </h3>

            <div className="space-y-3 text-xs sm:text-sm pt-2">
              <div>
                <span className="font-mono-tech text-[10px] text-[#ffd400] uppercase tracking-wider block mb-0.5">PROBLEM SOLVED</span>
                <p className="font-body text-[#cbcbcb] leading-relaxed">
                  {activeProject.problemSolved}
                </p>
              </div>
              <div>
                <span className="font-mono-tech text-[10px] text-white/50 uppercase tracking-wider block mb-0.5">OUR SOLUTION</span>
                <p className="font-body text-[#a0a2a8] leading-relaxed">
                  {activeProject.solutionBuilt}
                </p>
              </div>
            </div>

            <div className="bg-[#111319] p-4 rounded-xl border border-white/10 font-mono-tech flex justify-between items-center">
              <div>
                <span className="text-[9px] uppercase tracking-widest text-white/50 block">{activeProject.outcomeLabel}</span>
                <span className="text-xl font-extrabold text-[#F4F2ED]">{activeProject.outcomeVal}</span>
              </div>
              <span className="text-[11px] text-[#cbcbcb] text-right font-sans">{activeProject.outcomeDesc}</span>
            </div>

            <div className="pt-2">
              <a
                href={activeProject.liveUrl}
                className="editorial-btn !py-2 !px-5 !text-xs !bg-white/10 !text-[#F4F2ED] hover:!bg-[#ffd400] hover:!text-[#0a0b0e]"
              >
                View Live Case Details →
              </a>
            </div>
          </div>
        </div>

        {/* Mobile Native Touch Carousel (1 Slide Per Touch) */}
        <div className="lg:hidden mobile-carousel flex gap-6 overflow-x-auto no-scrollbar pb-4">
          {projects.map((project) => (
            <div
              key={project.id}
              className="w-[88vw] shrink-0 p-6 bg-[#090a0e] border border-white/12 rounded-2xl space-y-4"
            >
              <div className="font-mono-tech text-xs text-[#ffd400]">{project.num} // {project.category}</div>
              <div className="adaptive-video-stage">
                <video src={project.videoUrl} autoPlay loop muted playsInline />
              </div>
              <h3 className="font-display text-2xl font-bold text-[#F4F2ED]">{project.title}</h3>
              <p className="font-body text-xs text-[#cbcbcb] leading-relaxed">{project.problemSolved}</p>
              <a href={project.liveUrl} className="editorial-btn !py-2 !px-4 !text-xs w-full text-center justify-center">
                View Case Details →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
