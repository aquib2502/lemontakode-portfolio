'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const SERVICES = [
  {
    id: '01',
    title: 'Digital Products',
    desc: 'Websites, platforms and customer-facing applications designed around real business needs.',
    image: '/lemontakode_hero_dashboard_1787310632187.png',
    badge: 'Digital Platform Interface'
  },
  {
    id: '02',
    title: 'Business Systems',
    desc: 'Software that replaces manual processes, spreadsheets and disconnected tools with streamlined custom workflows.',
    image: '/tpfadmin-video.mp4',
    badge: 'Operations Control Center'
  },
  {
    id: '03',
    title: 'Mobile Experiences',
    desc: 'Applications designed around how customers actually interact with a service, built for reliability and speed.',
    image: '/tpfvideo.mp4',
    badge: 'Mobile Product Experience'
  },
  {
    id: '04',
    title: 'Automation & Integration',
    desc: 'Connecting systems and removing repetitive operational work through robust APIs and automated data pipelines.',
    image: '/lemontakode_task_execution_1787310653065.png',
    badge: 'System Integration Pipeline'
  },
  {
    id: '05',
    title: 'Product Design',
    desc: 'Simple, intuitive interfaces for complicated businesses, backed by wireframing, design systems and user research.',
    image: '/lemontakode_analytics_results_1787310673170.png',
    badge: 'Design System & Spec'
  }
];

export default function SolutionCapabilities() {
  const [activeIdx, setActiveIdx] = useState(0);

  const activeService = SERVICES[activeIdx];

  return (
    <section id="services" className="py-16 md:py-24 bg-[#F7F5F0] text-[#111111] border-b border-[#E5E2D9] select-none">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12">
        
        {/* Eyebrow */}
        <div className="flex items-center gap-3 mb-6">
          <span className="h-px w-6 bg-[#B89B5E]" />
          <span className="font-display text-[11px] font-semibold uppercase tracking-[0.2em] text-[#6F6C65]">
            SERVICES
          </span>
        </div>

        <div className="mb-12">
          <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-[#111111]">
            What we{' '}
            <span className="font-serif-italic font-normal text-[#111111] relative inline-block">
              build.
              <span className="absolute bottom-1 left-0 right-0 h-[1.5px] bg-[#B89B5E]/40" />
            </span>
          </h2>
        </div>

        {/* Editorial Services List & Preview Frame */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Clean Editorial List */}
          <div className="lg:col-span-6 border-t border-[#E5E2D9]">
            {SERVICES.map((service, idx) => {
              const isActive = activeIdx === idx;
              return (
                <div
                  key={service.id}
                  onMouseEnter={() => setActiveIdx(idx)}
                  className="py-6 border-b border-[#E5E2D9] cursor-pointer transition-all duration-300 group"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 sm:gap-6">
                      <span className={`font-display text-xs font-mono font-bold transition-colors ${isActive ? 'text-[#B89B5E]' : 'text-[#6F6C65]'}`}>
                        {service.id}
                      </span>
                      <h3 className={`font-display text-2xl sm:text-3xl font-semibold tracking-tight transition-colors ${isActive ? 'text-[#111111]' : 'text-[#111111]/45 group-hover:text-[#111111]'}`}>
                        {service.title}
                      </h3>
                    </div>

                    <ArrowUpRight
                      size={18}
                      className={`transition-all duration-300 ${
                        isActive ? 'text-[#B89B5E] translate-x-0.5 -translate-y-0.5' : 'text-[#6F6C65]/30 group-hover:text-[#111111]'
                      }`}
                    />
                  </div>

                  {isActive && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      transition={{ duration: 0.3 }}
                      className="pt-3 ml-8 sm:ml-12"
                    >
                      <p className="font-body text-sm sm:text-base text-[#6F6C65] leading-relaxed">
                        {service.desc}
                      </p>
                    </motion.div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Right Column: Editorial Visual Showcase Frame */}
          <div className="lg:col-span-6 sticky top-28">
            <div className="w-full rounded-xl border border-[#E5E2D9] bg-[#FFFFFF] overflow-hidden p-2 shadow-sm relative">
              
              <div className="h-8 px-3.5 bg-[#F7F5F0] rounded-md flex items-center justify-between mb-2 border border-[#E5E2D9]">
                <span className="font-display text-[11px] text-[#6F6C65] uppercase tracking-wider font-medium">
                  {activeService.badge}
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#B89B5E]" />
              </div>

              {/* Dynamic Image / Video Preview */}
              <div className="relative aspect-[16/10] rounded-md overflow-hidden bg-[#F7F5F0] border border-[#E5E2D9]">
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


