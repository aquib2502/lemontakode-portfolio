'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const SERVICES = [
  {
    id: '01',
    title: 'Digital Products',
    desc: 'Websites, platforms and customer-facing applications designed for performance, clarity and seamless user experience.',
    tech: 'React · Next.js · Node.js · PostgreSQL',
    image: '/lemontakode_hero_dashboard_1787310632187.png',
    badge: 'TPF Aid Web Platform'
  },
  {
    id: '02',
    title: 'Business Systems',
    desc: 'Internal software that replaces spreadsheets, manual processes and disconnected tools with custom automated workflows.',
    tech: 'Enterprise Architecture · Role-Based Auth · REST APIs',
    image: '/tpfadmin-video.mp4',
    badge: 'TPF Admin Operations System'
  },
  {
    id: '03',
    title: 'Mobile Experiences',
    desc: 'Applications designed around how customers actually use a service, optimized for touch, speed and offline capability.',
    tech: 'React Native · Swift · Mobile Security',
    image: '/tpfvideo.mp4',
    badge: 'Mobile Product Interface'
  },
  {
    id: '04',
    title: 'Automation & Integration',
    desc: 'Connect existing systems and eliminate repetitive work through robust APIs, queues and custom background pipelines.',
    tech: 'Python · Cloud Queues · Third-party APIs',
    image: '/lemontakode_task_execution_1787310653065.png',
    badge: 'Operational Integration Pipeline'
  },
  {
    id: '05',
    title: 'Product Design',
    desc: 'Interfaces that are simple, clear and easy to use, supported by rigorous wireframing, design systems and user research.',
    tech: 'UI/UX Design Systems · Prototyping · Design Audits',
    image: '/lemontakode_analytics_results_1787310673170.png',
    badge: 'Design System & Interface Specs'
  }
];

export default function SolutionCapabilities() {
  const [activeIdx, setActiveIdx] = useState(0);

  const activeService = SERVICES[activeIdx];

  return (
    <section id="services" className="py-28 md:py-40 bg-[#F7F5F0] text-[#111111] border-b border-[#E5E2D9] select-none">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-6">
          <span className="h-px w-8 bg-[#B89B5E]" />
          <span className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-[#77736B]">
            CAPABILITIES
          </span>
        </div>

        <div className="mb-16">
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#111111]">
            What we{' '}
            <span className="font-serif-italic font-normal text-[#111111] relative inline-block">
              build.
              <span className="absolute bottom-1 left-0 right-0 h-[2px] bg-[#B89B5E]/30" />
            </span>
          </h2>
        </div>

        {/* Editorial Services List & Preview Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Column: Clean Editorial List */}
          <div className="lg:col-span-6 border-t border-[#E5E2D9]">
            {SERVICES.map((service, idx) => {
              const isActive = activeIdx === idx;
              return (
                <div
                  key={service.id}
                  onMouseEnter={() => setActiveIdx(idx)}
                  className="py-7 border-b border-[#E5E2D9] cursor-pointer transition-all duration-300 group"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-5">
                      <span className={`font-display text-xs font-bold transition-colors ${isActive ? 'text-[#B89B5E]' : 'text-[#77736B]'}`}>
                        {service.id}
                      </span>
                      <h3 className={`font-display text-2xl md:text-3xl font-semibold tracking-tight transition-colors ${isActive ? 'text-[#111111]' : 'text-[#111111]/50 group-hover:text-[#111111]'}`}>
                        {service.title}
                      </h3>
                    </div>

                    <ArrowUpRight
                      size={18}
                      className={`transition-all duration-300 ${
                        isActive ? 'text-[#B89B5E] translate-x-1 -translate-y-1' : 'text-[#77736B]/40 group-hover:text-[#111111]'
                      }`}
                    />
                  </div>

                  {isActive && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      transition={{ duration: 0.3 }}
                      className="pt-4 ml-10 space-y-3"
                    >
                      <p className="font-body text-base text-[#77736B] leading-relaxed">
                        {service.desc}
                      </p>
                      <div className="font-display text-xs text-[#B89B5E] font-medium tracking-wide">
                        {service.tech}
                      </div>
                    </motion.div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Right Column: Editorial Product Preview Frame */}
          <div className="lg:col-span-6 sticky top-28">
            <div className="w-full rounded-2xl border border-[#E5E2D9] bg-[#FFFFFF] overflow-hidden shadow-xl p-3 relative">
              
              {/* Window Header */}
              <div className="h-9 px-4 bg-[#F7F5F0] rounded-xl flex items-center justify-between mb-3 border border-[#E5E2D9]">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#111111]/20" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#111111]/20" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#111111]/20" />
                </div>
                
                <span className="font-display text-[11px] text-[#77736B] uppercase tracking-wider font-medium">
                  {activeService.badge}
                </span>

                <span className="w-2 h-2 rounded-full bg-[#B89B5E]" />
              </div>

              {/* Dynamic Image / Video Preview */}
              <div className="relative aspect-[16/10] rounded-xl overflow-hidden bg-[#F7F5F0] border border-[#E5E2D9]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeService.id}
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.3 }}
                    className="w-full h-full"
                  >
                    {activeService.image.endsWith('.mp4') ? (
                      <video
                        src={activeService.image}
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <img
                        src={activeService.image}
                        alt={activeService.title}
                        className="w-full h-full object-cover"
                      />
                    )}
                  </motion.div>
                </AnimatePresence>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

