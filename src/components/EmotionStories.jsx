'use client';

import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const PROJECTS = [
  {
    id: '01',
    name: 'True Path Foundation',
    category: 'Digital platform · Product design · Engineering',
    outcome: 'A digital platform designed to simplify access to healthcare and support services.',
    desc: 'Engineered a transparent web application featuring automated donor tracking, real-time campaign management, and streamlined public access to critical medical and community healthcare programs.',
    tech: ['Next.js', 'AWS Cloud', 'MongoDB', 'Real-time CMS'],
    image: '/lemontakode_hero_dashboard_1787310632187.png',
    url: 'https://tpfaid.org'
  },
  {
    id: '02',
    name: 'TPF Admin Dashboard',
    category: 'Internal operations · System design',
    outcome: 'Streamlined management interface for field teams and healthcare coordinators.',
    desc: 'Designed and built a secure, role-based operations control center that unifies financial disbursement tracking, campaign publishing, and field analytics into one rapid system.',
    tech: ['React', 'Node.js', 'JWT Auth', 'RBAC Security'],
    image: '/tpfadmin-video.mp4',
    url: '#contact'
  },
  {
    id: '03',
    name: 'The Trace Express',
    category: 'Web application · Logistics',
    outcome: 'Real-time tracking and dispatch platform optimizing supply chain efficiency.',
    desc: 'An international shipping and logistics engine with real-time rate calculation, automated customs documentation, and package tracking across global networks.',
    tech: ['Next.js', 'Logistics API', 'Automated Clearance'],
    image: '/tte-video.mp4',
    url: 'https://thetraceexpress.com'
  },
  {
    id: '04',
    name: 'Flow India',
    category: 'Enterprise platform · Workflow automation',
    outcome: 'Automated operational workflow system for national distribution networks.',
    desc: 'Built a high-concurrency business automation engine that eliminates manual inventory reporting and coordinates order fulfillment across nationwide hubs.',
    tech: ['Node.js', 'PostgreSQL', 'Workflow Engine', 'Cloud Infra'],
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
    <section id="work" className="py-28 md:py-44 bg-[#F7F5F0] text-[#111111] border-b border-[#E5E2D9] select-none">
      <div className="max-w-[1360px] mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-6">
          <span className="h-px w-8 bg-[#B89B5E]" />
          <span className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-[#77736B]">
            CASE STUDIES
          </span>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-24 md:mb-32 gap-6 border-b border-[#E5E2D9] pb-10">
          <div>
            <h2 className="font-display text-4xl sm:text-6xl font-bold tracking-tight text-[#111111]">
              Selected{' '}
              <span className="font-serif-italic font-normal text-[#111111] relative inline-block">
                work.
                <span className="absolute bottom-1 left-0 right-0 h-[2px] bg-[#B89B5E]/30" />
              </span>
            </h2>
          </div>
          <p className="font-body text-[#77736B] max-w-md text-base md:text-lg leading-relaxed">
            Practical digital platforms and business systems engineered for operational impact.
          </p>
        </div>

        {/* Case Studies Editorial Sequence */}
        <div className="space-y-36">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-8 group"
            >
              {/* Project Meta Bar */}
              <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#E5E2D9] pb-4">
                <div className="flex items-center gap-4">
                  <span className="font-display text-xs font-bold text-[#B89B5E]">
                    {project.id}
                  </span>
                  <span className="font-display text-xs font-semibold uppercase tracking-wider text-[#77736B]">
                    {project.category}
                  </span>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 rounded-full bg-[#FFFFFF] border border-[#E5E2D9] font-display text-[11px] text-[#77736B] font-medium"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Title & Business Outcome Header */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-7">
                  <h3 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-[#111111] mb-3 group-hover:text-[#B89B5E] transition-colors duration-300">
                    {project.name}
                  </h3>
                  <p className="font-serif-italic text-xl text-[#111111] leading-relaxed">
                    {project.outcome}
                  </p>
                </div>

                <div className="lg:col-span-5 space-y-4">
                  <p className="font-body text-base text-[#77736B] leading-relaxed">
                    {project.desc}
                  </p>

                  <div>
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

              {/* Large Case Study Media Frame */}
              <div className="w-full rounded-2xl border border-[#E5E2D9] bg-[#FFFFFF] overflow-hidden shadow-2xl p-3 relative">
                <div className="h-9 px-4 bg-[#F7F5F0] rounded-xl flex items-center justify-between mb-3 border border-[#E5E2D9]">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#111111]/20" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#111111]/20" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#111111]/20" />
                  </div>

                  <span className="font-display text-[11px] text-[#77736B] uppercase tracking-wider font-medium">
                    {project.name} Showcase
                  </span>

                  <span className="w-2 h-2 rounded-full bg-[#B89B5E]" />
                </div>

                <div className="relative aspect-[16/9] rounded-xl overflow-hidden bg-[#F7F5F0] border border-[#E5E2D9]">
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
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

