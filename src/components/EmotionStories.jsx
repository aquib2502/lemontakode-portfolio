'use client';

import React, { useRef, useEffect, useState } from 'react';

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
  const containerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // Use IntersectionObserver to detect which slide is currently in the center of the viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute('data-index'));
            setActiveIndex(index);
          }
        });
      },
      {
        root: containerRef.current,
        threshold: 0.5, // Trigger when at least 50% of the slide is visible
      }
    );

    const slides = document.querySelectorAll('.project-slide-card');
    slides.forEach((slide) => observer.observe(slide));

    return () => {
      slides.forEach((slide) => observer.unobserve(slide));
    };
  }, []);

  return (
    <section className="theme-black relative overflow-hidden py-24 md:py-32 select-none" id="projects">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 w-full">
        {/* Section Header */}
        <div className="flex justify-between items-end mb-12 border-b border-white/10 pb-6">
          <div>
            <div className="font-mono-tech text-xs tracking-[0.2em] text-[#ffd400] uppercase mb-2">
              05 // REAL PROBLEMS WE SOLVED
            </div>
            <h2 className="font-display text-3xl sm:text-5xl font-extrabold tracking-tight text-[#F4F2ED]">
              Featured <span className="font-serif-italic font-normal text-[#ffd400]">case studies.</span>
            </h2>
          </div>
          <div className="hidden md:flex font-mono-tech text-xs text-white/50 items-center gap-2">
            <span>SCROLL OR SWIPE TO EXPLORE →</span>
          </div>
        </div>

        {/* Horizontal Native Carousel */}
        <div
          ref={containerRef}
          className="flex gap-6 md:gap-12 overflow-x-auto snap-x snap-mandatory no-scrollbar pb-8 px-4 -mx-4 md:px-0 md:mx-0"
          style={{ scrollBehavior: 'smooth' }}
        >
          {projects.map((project, idx) => {
            const isActive = idx === activeIndex;
            return (
              <div
                key={project.id}
                data-index={idx}
                className={`project-slide-card snap-center shrink-0 w-[85vw] md:w-[70vw] lg:w-[60vw] max-w-4xl p-6 md:p-10 bg-[#090a0e] border rounded-2xl transition-all duration-700 ease-out ${
                  isActive
                    ? 'border-white/15 opacity-100 scale-100 shadow-[0_0_40px_rgba(255,255,255,0.02)]'
                    : 'border-white/5 opacity-40 scale-[0.97] saturate-0 hover:opacity-60 cursor-pointer'
                }`}
                onClick={() => {
                  // If clicked on an inactive slide, scroll it into view smoothly
                  if (!isActive && containerRef.current) {
                    const slideEl = document.querySelectorAll('.project-slide-card')[idx];
                    slideEl.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
                  }
                }}
              >
                <div className="flex justify-between items-center font-mono-tech text-xs mb-6">
                  <span className={`font-bold transition-colors duration-500 ${isActive ? 'text-[#ffd400]' : 'text-white/50'}`}>
                    {project.num} // {project.category}
                  </span>
                  <span className="text-white/30 hidden md:block">{project.role}</span>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  {/* Left Column: Video */}
                  <div className="lg:col-span-7 h-full flex flex-col justify-center">
                    <div className="relative w-full bg-[#050608] border border-white/5 rounded-xl overflow-hidden p-2 flex items-center justify-center">
                      <video
                        src={project.videoUrl}
                        autoPlay={isActive}
                        loop
                        muted
                        playsInline
                        className={`w-full h-auto object-contain rounded-lg transition-opacity duration-500 ${isActive ? 'opacity-100' : 'opacity-30'}`}
                        style={{ maxHeight: '35vh' }}
                      />
                    </div>
                  </div>

                  {/* Right Column: Case Study Details */}
                  <div className="lg:col-span-5 space-y-5">
                    <h3 className="font-display text-2xl md:text-3xl font-extrabold text-[#F4F2ED] tracking-tight">
                      {project.title}
                    </h3>

                    <div className="space-y-4 text-xs md:text-sm">
                      <div>
                        <span className="font-mono-tech text-[10px] text-[#ffd400] uppercase tracking-wider block mb-1">PROBLEM SOLVED</span>
                        <p className="font-body text-[#cbcbcb] leading-relaxed">
                          {project.problemSolved}
                        </p>
                      </div>
                      <div>
                        <span className="font-mono-tech text-[10px] text-white/50 uppercase tracking-wider block mb-1">OUR SOLUTION</span>
                        <p className="font-body text-[#a0a2a8] leading-relaxed">
                          {project.solutionBuilt}
                        </p>
                      </div>
                    </div>

                    <div className="bg-[#111319] p-4 rounded-xl border border-white/5 font-mono-tech flex justify-between items-center mt-4">
                      <div>
                        <span className="text-[9px] uppercase tracking-widest text-white/40 block mb-0.5">{project.outcomeLabel}</span>
                        <span className="text-lg md:text-xl font-extrabold text-[#F4F2ED]">{project.outcomeVal}</span>
                      </div>
                    </div>

                    <div className="pt-2">
                      <a
                        href={project.liveUrl}
                        className={`editorial-btn !py-2.5 !px-5 !text-xs w-full text-center justify-center transition-opacity duration-500 ${
                          isActive ? 'opacity-100' : 'opacity-0 pointer-events-none'
                        }`}
                      >
                        View Live Case Details →
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
