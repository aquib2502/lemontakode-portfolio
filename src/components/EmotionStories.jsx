'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const projects = [
  {
    id: 'tpfaid',
    num: '01',
    category: 'CROWDFUNDING PLATFORM',
    title: 'TPFAID',
    tagline: 'Empowering global donors through instant, trackable aid verification.',
    outcomeLabel: 'DISBURSEMENT SPEED',
    outcomeVal: 'INSTANT',
    outcomeDesc: 'Lowered donation processing friction by 40% globally.',
    role: 'Product Design · Full-Stack Engineering',
    tech: 'NEXT.JS / AWS AMPLIFY / TAILWIND',
    videoUrl: '/tpfvideo.mp4',
  },
  {
    id: 'tpf-admin',
    num: '02',
    category: 'MANAGEMENT DASHBOARD',
    title: 'TPF ADMIN',
    tagline: 'Orchestrating trust & campaign verification with absolute precision.',
    outcomeLabel: 'APPROVAL DELAY',
    outcomeVal: '72 HRS → 6 MIN',
    outcomeDesc: 'Cut campaign review backlog from days to minutes.',
    role: 'System Architecture · Security Audit',
    tech: 'REACT / NODE.JS / EXPRESS / MONGO',
    videoUrl: '/tpfadmin-video.mp4',
  },
  {
    id: 'thetraceexpress',
    num: '03',
    category: 'COURIER LOGISTICS ENGINE',
    title: 'THE TRACE EXPRESS',
    tagline: 'Shrinking international courier tracking & customs friction.',
    outcomeLabel: 'GLOBAL REACH',
    outcomeVal: '120+ COUNTRIES',
    outcomeDesc: 'Predictive manifest processing across global shipping hubs.',
    role: 'API Integration · Microservices',
    tech: 'NEXT.JS SSR / GRAPHQL / KUBERNETES',
    videoUrl: '/tte-video.mp4',
  },
  {
    id: 'flowindia',
    num: '04',
    category: 'BRAND SHOWCASE',
    title: 'FLOW INDIA',
    tagline: 'Sculpting an authoritative corporate presence online.',
    outcomeLabel: 'ENGAGEMENT',
    outcomeVal: '+250% RETENTION',
    outcomeDesc: 'Established a premium corporate showcase benchmark.',
    role: 'Brand Direction · Editorial Web Design',
    tech: 'NEXT.JS / GSAP / FRAMER MOTION',
    videoUrl: '/flowindiavideo.mp4',
  }
];

export default function EmotionStories() {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Only apply pinned horizontal scroll on desktop screens (>= 1024px)
    if (window.innerWidth >= 1024) {
      const ctx = gsap.context(() => {
        const track = trackRef.current;
        const totalWidth = track.scrollWidth - window.innerWidth + 100;

        gsap.to(track, {
          x: -totalWidth,
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            pin: true,
            scrub: 0.8,
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
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-12 flex justify-between items-end">
        <div>
          <div className="font-mono-tech text-xs tracking-[0.2em] text-[#ffd400] uppercase mb-2">
            05 // PINNED CASE STUDIES
          </div>
          <h2 className="font-display text-4xl sm:text-6xl font-extrabold tracking-tight text-[#F4F2ED]">
            Selected <span className="font-serif-italic font-normal text-[#ffd400]">works.</span>
          </h2>
        </div>
        <div className="hidden lg:block font-mono-tech text-xs text-white/40">
          SCROLL TO TRANSLATE HORIZONTALLY →
        </div>
      </div>

      {/* Desktop Horizontal Track / Mobile Vertical Fallback Container */}
      <div className="relative w-full overflow-hidden">
        <div
          ref={trackRef}
          className="flex flex-col lg:flex-row gap-12 lg:gap-16 px-6 md:px-12 w-full lg:w-max"
        >
          {projects.map((project) => (
            <div
              key={project.id}
              className="w-full lg:w-[75vw] xl:w-[65vw] max-w-[1100px] shrink-0 flex flex-col justify-between p-6 sm:p-8 bg-[#090a0e] border border-white/12 rounded-2xl"
            >
              {/* Top Project Metadata Header */}
              <div className="flex justify-between items-center font-mono-tech text-xs mb-4">
                <div className="flex items-center gap-3">
                  <span className="text-[#ffd400] font-bold text-sm">{project.num}</span>
                  <span className="text-white/30">//</span>
                  <span className="tracking-widest uppercase text-white/80">{project.category}</span>
                </div>
                <div className="text-white/40">{project.role}</div>
              </div>

              {/* Adaptive Video Stage: Preserves Full Aspect Ratio Without UI Cropping */}
              <div className="adaptive-video-stage mb-6">
                <video
                  src={project.videoUrl}
                  autoPlay
                  loop
                  muted
                  playsInline
                />
              </div>

              {/* Project Story Details & Outcome Callout */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-end">
                <div className="md:col-span-8 space-y-2">
                  <h3 className="font-display text-2xl sm:text-4xl font-extrabold text-[#F4F2ED] tracking-tight">
                    {project.title}
                  </h3>
                  <p className="font-serif-italic text-sm sm:text-base text-[#ffd400] leading-relaxed">
                    "{project.tagline}"
                  </p>
                  <div className="font-mono-tech text-[10px] text-white/40 tracking-wider pt-1">
                    TECH: {project.tech}
                  </div>
                </div>

                <div className="md:col-span-4 bg-[#111319] p-4 rounded-xl border border-white/10 font-mono-tech text-left md:text-right">
                  <span className="text-[9px] uppercase tracking-widest text-white/40 block mb-0.5">
                    {project.outcomeLabel}
                  </span>
                  <div className="text-xl sm:text-2xl font-extrabold text-[#F4F2ED] tracking-tight">
                    {project.outcomeVal}
                  </div>
                  <span className="text-[11px] text-[#F4F2ED]/70 block font-sans font-light mt-0.5">
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
