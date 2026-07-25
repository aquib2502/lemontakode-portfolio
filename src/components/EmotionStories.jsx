'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function EmotionStories() {
  const projects = [
    {
      id: 'tpfaid',
      num: '01',
      category: 'CROWDFUNDING PLATFORM',
      title: 'TPFAID',
      subtitle: 'Realtime Aid Disbursement Platform',
      tagline: 'Empowering global donors through instant, trackable aid verification.',
      outcomeLabel: 'DISBURSEMENT SPEED',
      outcomeVal: 'INSTANT',
      outcomeDesc: 'Lowered donation processing friction by 40% globally.',
      role: 'Product Design · Full-Stack Engineering · AWS Infrastructure',
      tech: 'NEXT.JS / AWS AMPLIFY / TAILWIND / REALTIME MAP',
      videoUrl: '/tpfvideo.mp4',
    },
    {
      id: 'tpf-admin',
      num: '02',
      category: 'MANAGEMENT DASHBOARD',
      title: 'TPF ADMIN',
      subtitle: 'Enterprise Control System',
      tagline: 'Orchestrating trust & campaign verification with absolute precision.',
      outcomeLabel: 'APPROVAL DELAY',
      outcomeVal: '72 HRS → 6 MIN',
      outcomeDesc: 'Cut campaign review backlog from days to minutes.',
      role: 'System Architecture · Security Audit · Dashboard UI',
      tech: 'REACT / NODE.JS / EXPRESS / MONGO / WEBSOCKET',
      videoUrl: '/tpfadmin-video.mp4',
    },
    {
      id: 'thetraceexpress',
      num: '03',
      category: 'COURIER LOGISTICS ENGINE',
      title: 'THE TRACE EXPRESS',
      subtitle: 'Cross-Border Shipping Engine',
      tagline: 'Shrinking international courier tracking & customs friction.',
      outcomeLabel: 'GLOBAL REACH',
      outcomeVal: '120+ COUNTRIES',
      outcomeDesc: 'Predictive manifest processing across global shipping hubs.',
      role: 'API Integration · Custom Logistics CMS · Microservices',
      tech: 'NEXT.JS SSR / GRAPHQL / KUBERNETES / DOCKER',
      videoUrl: '/tte-video.mp4',
    },
    {
      id: 'flowindia',
      num: '04',
      category: 'BRAND IDENTITY & DIGITAL SHOWCASE',
      title: 'FLOW INDIA',
      subtitle: 'Immersive Studio Identity',
      tagline: 'Sculpting an authoritative corporate presence online.',
      outcomeLabel: 'CLIENT ENGAGEMENT',
      outcomeVal: '+250% RETENTION',
      outcomeDesc: 'Established a premium corporate showcase benchmark.',
      role: 'Brand Direction · Editorial Web Design · Animations',
      tech: 'NEXT.JS / GSAP / FRAMER MOTION / TAILWIND',
      videoUrl: '/flowindiavideo.mp4',
    }
  ];

  return (
    <section className="bg-[#0a0b0e] text-[#F4F2ED]" id="projects">
      {/* Section Header */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-28 pb-16 border-t border-white/10">
        <div className="font-mono-tech text-xs tracking-[0.2em] text-[#ffd400] uppercase mb-3">
          05 // FEATURED CASE STUDIES
        </div>
        <h2 className="font-display text-4xl sm:text-6xl font-extrabold tracking-tight text-[#F4F2ED]">
          Selected <span className="font-serif-italic font-normal text-[#ffd400]">works.</span>
        </h2>
      </div>

      {/* Viewport-Filling Cinematic Project Chapters */}
      <div className="space-y-32 pb-32">
        {projects.map((project) => (
          <div
            key={project.id}
            className="min-h-[85vh] flex flex-col justify-center border-t border-white/10 pt-16 px-6 md:px-12 max-w-7xl mx-auto"
          >
            {/* Top Project Metadata Header */}
            <div className="flex flex-col md:flex-row justify-between md:items-end mb-8 gap-4 font-mono-tech text-xs">
              <div className="flex items-center gap-3">
                <span className="text-[#ffd400] font-bold text-sm">{project.num}</span>
                <span className="text-white/40">//</span>
                <span className="tracking-widest uppercase text-white/80">{project.category}</span>
              </div>
              <div className="text-white/40">{project.role}</div>
            </div>

            {/* Massive Viewport Video Frame */}
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.8 }}
              className="w-full aspect-[16/9] max-h-[60vh] rounded-2xl overflow-hidden bg-[#111319] border border-white/15 mb-10 relative group"
            >
              <video
                src={project.videoUrl}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Editorial Project Story Details & Outcome Callout */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
              <div className="lg:col-span-7 space-y-4">
                <h3 className="font-display text-4xl sm:text-5xl font-extrabold text-[#F4F2ED] tracking-tight">
                  {project.title}
                </h3>
                <p className="font-serif-italic text-lg sm:text-xl text-[#ffd400] leading-relaxed font-normal">
                  "{project.tagline}"
                </p>
                <div className="font-mono-tech text-xs text-white/50 tracking-wider">
                  TECH: {project.tech}
                </div>
              </div>

              {/* Major Typographic Outcome Moment */}
              <div className="lg:col-span-5 bg-[#111319] p-6 rounded-xl border border-white/10 font-mono-tech text-right">
                <span className="text-[10px] uppercase tracking-widest text-white/40 block mb-1">
                  {project.outcomeLabel}
                </span>
                <div className="text-3xl sm:text-4xl font-extrabold text-[#F4F2ED] tracking-tight mb-1">
                  {project.outcomeVal}
                </div>
                <span className="text-xs text-[#F4F2ED]/70 block font-sans font-light">
                  {project.outcomeDesc}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
