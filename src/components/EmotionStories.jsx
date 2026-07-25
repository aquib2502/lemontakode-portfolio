'use client';

import React, { useEffect, useRef } from 'react';
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
  const trackRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Apply horizontal scroll only on desktop screens (>= 1024px)
    if (window.innerWidth >= 1024) {
      const ctx = gsap.context(() => {
        const track = trackRef.current;
        const totalWidth = track.scrollWidth - window.innerWidth + 120;

        gsap.to(track, {
          x: -totalWidth,
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            pin: true,
            scrub: 0.8,
            snap: 1 / (projects.length - 1),
            end: () => `+=${totalWidth}`,
            invalidateOnRefresh: true,
          },
        });
      }, sectionRef);

      return () => ctx.revert();
    }
  }, []);

  return (
    <section ref={sectionRef} className="theme-black relative overflow-hidden py-24 select-none" id="projects">
      {/* Section Header */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-10 flex justify-between items-end">
        <div>
          <div className="font-mono-tech text-xs tracking-[0.2em] text-[#ffd400] uppercase mb-2">
            05 // REAL PROBLEMS WE SOLVED
          </div>
          <h2 className="font-display text-4xl sm:text-6xl font-extrabold tracking-tight text-[#F4F2ED]">
            Featured <span className="font-serif-italic font-normal text-[#ffd400]">case studies.</span>
          </h2>
        </div>
        <div className="hidden lg:block font-mono-tech text-xs text-white/50">
          SCROLL TO SEE MORE CASE STUDIES →
        </div>
      </div>

      {/* Desktop Horizontal Track & Mobile CSS Scroll-Snap Container */}
      <div className="relative w-full overflow-hidden">
        <div
          ref={trackRef}
          className="mobile-carousel flex flex-col lg:flex-row gap-8 lg:gap-16 px-6 md:px-12 w-full lg:w-max overflow-x-auto lg:overflow-visible no-scrollbar"
        >
          {projects.map((project) => (
            <div
              key={project.id}
              className="w-full lg:w-[78vw] xl:w-[65vw] max-w-[1100px] shrink-0 flex flex-col justify-between p-6 sm:p-8 bg-[#090a0e] border border-white/12 rounded-2xl"
            >
              {/* Top Metadata Line */}
              <div className="flex justify-between items-center font-mono-tech text-xs mb-3">
                <div className="flex items-center gap-3">
                  <span className="text-[#ffd400] font-bold text-sm">{project.num}</span>
                  <span className="text-white/30">//</span>
                  <span className="tracking-widest uppercase text-white/80">{project.category}</span>
                </div>
                <div className="text-white/50">{project.role}</div>
              </div>

              {/* Viewport-Fitted Adaptive Video Stage */}
              <div className="adaptive-video-stage mb-4">
                <video
                  src={project.videoUrl}
                  autoPlay
                  loop
                  muted
                  playsInline
                />
              </div>

              {/* Problem Solved & Solution Details */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-end">
                <div className="md:col-span-8 space-y-3">
                  <h3 className="font-display text-2xl sm:text-3.5xl font-extrabold text-[#F4F2ED] tracking-tight">
                    {project.title}
                  </h3>

                  {/* Problem & Solution Breakdown */}
                  <div className="space-y-2 text-xs sm:text-sm">
                    <div>
                      <span className="font-mono-tech text-[10px] text-[#ffd400] uppercase tracking-wider block">PROBLEM SOLVED</span>
                      <p className="font-body text-[#cbcbcb] leading-relaxed font-normal">
                        {project.problemSolved}
                      </p>
                    </div>
                    <div>
                      <span className="font-mono-tech text-[10px] text-white/50 uppercase tracking-wider block">OUR SOLUTION</span>
                      <p className="font-body text-[#a0a2a8] leading-relaxed font-normal">
                        {project.solutionBuilt}
                      </p>
                    </div>
                  </div>

                  {/* Action Link Button */}
                  <div className="pt-2">
                    <a
                      href={project.liveUrl}
                      className="editorial-btn !py-1.5 !px-4 !text-xs !bg-white/10 !text-[#F4F2ED] hover:!bg-[#ffd400] hover:!text-[#0a0b0e]"
                    >
                      View Live Case Details →
                    </a>
                  </div>
                </div>

                {/* Major Outcome Callout */}
                <div className="md:col-span-4 bg-[#111319] p-4 rounded-xl border border-white/10 font-mono-tech text-left md:text-right">
                  <span className="text-[9px] uppercase tracking-widest text-white/50 block mb-0.5">
                    {project.outcomeLabel}
                  </span>
                  <div className="text-xl sm:text-2xl font-extrabold text-[#F4F2ED] tracking-tight">
                    {project.outcomeVal}
                  </div>
                  <span className="text-[11px] text-[#cbcbcb] block font-sans font-normal mt-0.5">
                    {project.outcomeDesc}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
