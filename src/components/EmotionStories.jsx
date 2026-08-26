'use client';

import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const PROJECTS = [
  {
    id: '01',
    name: 'True Path Foundation',
    industry: 'Healthcare · Digital Platform',
    outcome: 'Making healthcare support easier to access and manage.',
    built: 'Engineered a transparent web platform featuring automated donor tracking, real-time campaign management, and streamlined public access to medical aid programs.',
    image: '/tpfvideo.mp4',
    url: 'https://tpfaid.org',
    span: 'col-span-1 lg:col-span-7'
  },
  {
    id: '02',
    name: 'TPF Admin Dashboard',
    industry: 'Internal Operations · System Design',
    outcome: 'Streamlined management interface for field teams.',
    built: 'Built a secure, role-based operations control center unifying disbursement tracking, campaign publishing, and field analytics.',
    image: '/tpfadmin-video.mp4',
    url: '#contact',
    span: 'col-span-1 lg:col-span-5'
  },
  {
    id: '03',
    name: 'The Trace Express',
    industry: 'Logistics · Supply Chain Engine',
    outcome: 'Real-time tracking and dispatch platform.',
    built: 'An international shipping and logistics engine with automated rate calculation, customs clearance, and package tracking.',
    image: '/tte-video.mp4',
    url: 'https://thetraceexpress.com',
    span: 'col-span-1 lg:col-span-5'
  },
  {
    id: '04',
    name: 'Flow India',
    industry: 'Enterprise Platform · Workflow Engine',
    outcome: 'Automated workflow system for national distribution.',
    built: 'High-concurrency business automation engine coordinating inventory and order fulfillment across nationwide hubs.',
    image: '/flowindiavideo.mp4',
    url: '#contact',
    span: 'col-span-1 lg:col-span-7'
  }
];

function PlayVideoIfVisible({ src }) {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            video.play().catch(() => {});
          } else {
            video.pause();
          }
        });
      },
      { threshold: 0.15 }
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  return (
    <video
      ref={videoRef}
      src={src}
      loop
      muted
      playsInline
      preload="metadata"
      className="w-full h-full object-cover opacity-95 transition-opacity duration-300 group-hover:opacity-100"
    />
  );
}

export default function EmotionStories() {
  return (
    <section id="work" className="py-12 sm:py-16 md:py-24 bg-[#F7F5F0] text-[#111111] border-b border-[#E5E2D9] select-none">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-12">
        
        {/* Eyebrow */}
        <div className="flex items-center gap-2.5 sm:gap-3 mb-4 sm:mb-6">
          <span className="h-px w-5 sm:w-6 bg-[#D9A74A]" />
          <span className="font-display text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.18em] sm:tracking-[0.2em] text-[#6F6C65]">
            SELECTED WORK
          </span>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 sm:mb-12 gap-4 border-b border-[#E5E2D9] pb-6">
          <div>
            <h2 className="font-display text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#111111]">
              Featured{' '}
              <span className="font-serif-italic font-normal text-[#111111] relative inline-block">
                projects.
                <span className="absolute bottom-1 left-0 right-0 h-[2px] bg-[#D9A74A]/60" />
              </span>
            </h2>
          </div>
          <p className="font-body text-[#6F6C65] max-w-md text-xs sm:text-sm lg:text-base leading-relaxed">
            Practical digital platforms and business systems engineered for real operational impact.
          </p>
        </div>

        {/* Compact Curated Portfolio Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-10">
          {PROJECTS.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className={`${project.span} group flex flex-col justify-between rounded-xl border border-[#E5E2D9] bg-[#FFFFFF] p-4 sm:p-5 lg:p-6 shadow-sm hover:shadow-md transition-shadow duration-300`}
            >
              <div>
                {/* Media Aspect Window */}
                <div className="relative aspect-[16/10] sm:aspect-[16/9] lg:aspect-[16/10] rounded-lg overflow-hidden bg-[#F7F5F0] border border-[#E5E2D9] mb-4">
                  {project.image.endsWith('.mp4') ? (
                    <PlayVideoIfVisible src={project.image} />
                  ) : (
                    <img
                      src={project.image}
                      alt={project.name}
                      className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.02]"
                    />
                  )}
                </div>

                {/* Project Header & Category */}
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <span className="font-display text-xs font-mono font-bold text-[#D9A74A]">
                    {project.id}
                  </span>
                  <span className="px-2 py-0.5 rounded text-[9px] sm:text-[10px] font-display font-semibold uppercase tracking-wider bg-[#2563EB]/10 text-[#2563EB] border border-[#2563EB]/20">
                    {project.industry}
                  </span>
                </div>

                {/* Title & Business Outcome */}
                <h3 className="font-display text-lg sm:text-xl lg:text-2xl font-bold tracking-tight text-[#111111] mb-1.5 group-hover:text-[#2563EB] transition-colors duration-300">
                  {project.name}
                </h3>
                <p className="font-serif-italic text-xs sm:text-sm lg:text-base text-[#111111] mb-2 leading-snug">
                  &ldquo;{project.outcome}&rdquo;
                </p>
                <p className="font-body text-xs sm:text-sm text-[#6F6C65] leading-relaxed mb-4">
                  {project.built}
                </p>
              </div>

              {/* View Case Study Link */}
              <div className="pt-3 border-t border-[#E5E2D9]">
                <a
                  href={project.url}
                  target={project.url.startsWith('http') ? '_blank' : '_self'}
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 font-display text-xs font-bold uppercase tracking-wider text-[#111111] hover:text-[#2563EB] transition-colors group/link"
                >
                  <span>View case study</span>
                  <ArrowUpRight size={14} className="text-[#D9A74A] transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}



