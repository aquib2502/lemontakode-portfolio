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
    tech: ['Next.js', 'AWS Cloud', 'MongoDB'],
    image: '/lemontakode_hero_dashboard_1787310632187.png',
    url: 'https://tpfaid.org'
  },
  {
    id: '02',
    name: 'TPF Admin Dashboard',
    industry: 'Internal Operations · System Design',
    outcome: 'Streamlined management interface for field teams and healthcare coordinators.',
    built: 'Designed and built a secure, role-based operations control center unifying financial disbursement tracking, campaign publishing, and field analytics into one rapid tool.',
    tech: ['React', 'Node.js', 'RBAC Security'],
    image: '/tpfadmin-video.mp4',
    url: '#contact'
  },
  {
    id: '03',
    name: 'The Trace Express',
    industry: 'Logistics · Supply Chain Engine',
    outcome: 'Real-time tracking and dispatch platform optimizing supply chain efficiency.',
    built: 'An international shipping and logistics platform featuring automated rate calculations, customs documentation, and live package tracking across global networks.',
    tech: ['Next.js', 'Logistics API', 'Clearance Engine'],
    image: '/tte-video.mp4',
    url: 'https://thetraceexpress.com'
  },
  {
    id: '04',
    name: 'Flow India',
    industry: 'Enterprise Platform · Workflow Automation',
    outcome: 'Automated operational workflow system for national distribution networks.',
    built: 'Built a high-concurrency business automation engine that eliminates manual inventory reporting and coordinates order fulfillment across nationwide hubs.',
    tech: ['Node.js', 'PostgreSQL', 'Workflow Engine'],
    image: '/flowindiavideo.mp4',
    url: '#contact'
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
      className="w-full h-full object-cover"
    />
  );
}

export default function EmotionStories() {
  return (
    <section id="work" className="py-16 md:py-24 bg-[#F7F5F0] text-[#111111] border-b border-[#E5E2D9] select-none">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12">
        
        {/* Eyebrow */}
        <div className="flex items-center gap-3 mb-6">
          <span className="h-px w-6 bg-[#B89B5E]" />
          <span className="font-display text-[11px] font-semibold uppercase tracking-[0.2em] text-[#6F6C65]">
            CASE STUDIES
          </span>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 md:mb-20 gap-4 border-b border-[#E5E2D9] pb-8">
          <div>
            <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-[#111111]">
              Selected{' '}
              <span className="font-serif-italic font-normal text-[#111111] relative inline-block">
                work.
                <span className="absolute bottom-1 left-0 right-0 h-[1.5px] bg-[#B89B5E]/40" />
              </span>
            </h2>
          </div>
          <p className="font-body text-[#6F6C65] max-w-md text-sm sm:text-base leading-relaxed">
            Practical digital platforms and business systems engineered for operational impact.
          </p>
        </div>

        {/* Case Studies Sequence */}
        <div className="space-y-24 md:space-y-32">
          {PROJECTS.map((project, index) => {
            const isEven = index % 2 === 0;
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="group"
              >
                {/* Project Header Bar */}
                <div className="flex items-center justify-between border-b border-[#E5E2D9] pb-3 mb-6">
                  <div className="flex items-center gap-3">
                    <span className="font-display text-xs font-mono font-bold text-[#B89B5E]">
                      {project.id}
                    </span>
                    <span className="font-display text-[11px] font-semibold uppercase tracking-wider text-[#6F6C65]">
                      {project.industry}
                    </span>
                  </div>

                  <div className="hidden sm:flex items-center gap-2">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-0.5 rounded-full bg-[#FFFFFF] border border-[#E5E2D9] font-display text-[10px] text-[#6F6C65] font-medium"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Alternating Layout: Media & Description */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                  
                  {/* Media Frame */}
                  <div className={`lg:col-span-7 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                    <div className="w-full rounded-xl border border-[#E5E2D9] bg-[#FFFFFF] overflow-hidden p-2 shadow-sm relative">
                      <div className="relative aspect-[16/10] rounded-md overflow-hidden bg-[#F7F5F0] border border-[#E5E2D9]">
                        {project.image.endsWith('.mp4') ? (
                          <PlayVideoIfVisible src={project.image} />
                        ) : (
                          <img
                            src={project.image}
                            alt={project.name}
                            className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.015]"
                          />
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Text Content */}
                  <div className={`lg:col-span-5 space-y-5 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                    <div>
                      <h3 className="font-display text-2xl sm:text-4xl font-bold tracking-tight text-[#111111] mb-2 group-hover:text-[#B89B5E] transition-colors duration-300">
                        {project.name}
                      </h3>
                      <p className="font-serif-italic text-lg sm:text-xl text-[#111111] leading-snug">
                        &ldquo;{project.outcome}&rdquo;
                      </p>
                    </div>

                    <p className="font-body text-sm sm:text-base text-[#6F6C65] leading-relaxed">
                      {project.built}
                    </p>

                    <div className="pt-2">
                      <a
                        href={project.url}
                        target={project.url.startsWith('http') ? '_blank' : '_self'}
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 font-display text-xs font-bold uppercase tracking-wider text-[#111111] hover:text-[#B89B5E] transition-colors py-1 group/link"
                      >
                        <span>View case study</span>
                        <ArrowUpRight size={14} className="text-[#B89B5E] transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                      </a>
                    </div>
                  </div>

                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}


