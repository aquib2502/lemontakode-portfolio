'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Cpu, Layers, Smartphone, RefreshCw, Layout } from 'lucide-react';

const SERVICES = [
  {
    id: '01',
    title: 'Digital Products',
    icon: Layout,
    desc: 'Websites, web platforms, and customer-facing software applications designed around real business needs and conversion clarity.',
    outcomes: ['High-concurrency web apps', 'Tailored UI design systems', 'Fast web performance'],
    angle: 0
  },
  {
    id: '02',
    title: 'Business Systems',
    icon: Cpu,
    desc: 'Custom software replacing spreadsheets, manual operations, and disconnected tools with automated internal control centers.',
    outcomes: ['Role-based authorization', 'Disbursement & audit logs', 'Automated data pipelines'],
    angle: 72
  },
  {
    id: '03',
    title: 'Mobile Experiences',
    icon: Smartphone,
    desc: 'Applications engineered around how customers actually interact with a service, optimized for touch speed and offline stability.',
    outcomes: ['Cross-platform mobile apps', 'Touch-first micro-interactions', 'Secure API synchronization'],
    angle: 144
  },
  {
    id: '04',
    title: 'Automation & Integration',
    icon: RefreshCw,
    desc: 'Connecting existing software tools and eliminating repetitive manual work through robust APIs, webhooks, and queue workers.',
    outcomes: ['Third-party API integrations', 'Background job queues', 'Zero downtime sync'],
    angle: 216
  },
  {
    id: '05',
    title: 'Product Design',
    desc: 'Simple, intuitive interfaces for complicated businesses, backed by wireframing, component design systems, and UX research.',
    icon: Layers,
    outcomes: ['Figma design systems', 'User journey mapping', 'Conversion-led wireframing'],
    angle: 288
  }
];

export default function SolutionCapabilities() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [rotationAngle, setRotationAngle] = useState(0);
  const [orbitRadius, setOrbitRadius] = useState(125);

  // Responsive orbit radius calculation
  useEffect(() => {
    const handleResize = () => {
      const w = window.innerWidth;
      if (w < 380) {
        setOrbitRadius(75);
      } else if (w < 480) {
        setOrbitRadius(85);
      } else if (w < 640) {
        setOrbitRadius(95);
      } else if (w < 1024) {
        setOrbitRadius(110);
      } else {
        setOrbitRadius(125);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Smooth continuous revolving animation for the background globe rings
  useEffect(() => {
    const interval = setInterval(() => {
      setRotationAngle((prev) => (prev + 0.3) % 360);
    }, 30);
    return () => clearInterval(interval);
  }, []);

  const activeService = SERVICES[activeIdx];
  const IconComponent = activeService.icon;

  return (
    <section id="services" className="py-12 sm:py-16 md:py-20 bg-[#FFFFFF] text-[#111111] border-b border-[#E5E2D9] select-none min-h-[85vh] flex items-center">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-12 w-full">
        
        {/* Eyebrow */}
        <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-4">
          <span className="h-px w-6 bg-[#D9A74A]" />
          <span className="font-display text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.2em] text-[#6F6C65]">
            WHAT WE BUILD
          </span>
          <span className="px-2 py-0.5 rounded text-[9px] sm:text-[10px] font-display font-semibold uppercase tracking-wider bg-[#2563EB]/10 text-[#2563EB] border border-[#2563EB]/20">
            Digital System Constellation
          </span>
        </div>

        <div className="mb-8 flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
          <div>
            <h2 className="font-display text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#111111]">
              Capabilities &{' '}
              <span className="font-serif-italic font-normal text-[#111111] relative inline-block">
                services.
                <span className="absolute bottom-1 left-0 right-0 h-[2px] bg-[#D9A74A]/60" />
              </span>
            </h2>
          </div>
          <p className="font-body text-xs sm:text-sm text-[#6F6C65] max-w-md">
            Click or tap any service node to inspect its digital architecture and outcomes.
          </p>
        </div>

        {/* Mobile Horizontal Quick Service Tabs (Visible on < lg screens) */}
        <div className="lg:hidden flex overflow-x-auto pb-3 mb-4 gap-2 no-scrollbar scroll-smooth">
          {SERVICES.map((service, idx) => {
            const isActive = activeIdx === idx;
            return (
              <button
                key={service.id}
                onClick={() => setActiveIdx(idx)}
                className={`flex-none px-3.5 py-2 rounded-full font-display text-xs font-semibold tracking-wide transition-all border ${
                  isActive
                    ? 'bg-[#2563EB] text-[#FFFFFF] border-[#2563EB] shadow-xs'
                    : 'bg-[#F7F5F0] text-[#111111]/80 border-[#E5E2D9] hover:border-[#2563EB]/50'
                }`}
              >
                <span className="font-mono opacity-60 mr-1.5">{service.id}</span>
                {service.title}
              </button>
            );
          })}
        </div>

        {/* Viewport Grid: Left Service Selector | Center/Right Revolving Globe */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Interactive Capability Selector */}
          <div className="lg:col-span-5 border-t border-[#E5E2D9]">
            {SERVICES.map((service, idx) => {
              const isActive = activeIdx === idx;
              return (
                <div
                  key={service.id}
                  onClick={() => setActiveIdx(idx)}
                  onMouseEnter={() => setActiveIdx(idx)}
                  className={`py-3 sm:py-3.5 border-b border-[#E5E2D9] cursor-pointer transition-all duration-300 group ${
                    isActive ? 'bg-[#F7F5F0] px-3 sm:px-3.5 -mx-3 sm:-mx-3.5 rounded-lg' : ''
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2.5 sm:gap-3">
                      <span className={`font-display text-xs font-mono font-bold transition-colors ${isActive ? 'text-[#D9A74A]' : 'text-[#6F6C65]'}`}>
                        {service.id}
                      </span>
                      <h3 className={`font-display text-base sm:text-lg lg:text-xl font-bold tracking-tight transition-colors ${isActive ? 'text-[#2563EB]' : 'text-[#111111]/70 group-hover:text-[#111111]'}`}>
                        {service.title}
                      </h3>
                    </div>

                    <ArrowUpRight
                      size={16}
                      className={`shrink-0 transition-all duration-300 ${
                        isActive ? 'text-[#D9A74A] translate-x-0.5 -translate-y-0.5' : 'text-[#6F6C65]/30 group-hover:text-[#111111]'
                      }`}
                    />
                  </div>

                  {isActive && (
                    <motion.p
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      transition={{ duration: 0.2 }}
                      className="font-body text-xs text-[#6F6C65] leading-relaxed pt-2 ml-5 sm:ml-7"
                    >
                      {service.desc}
                    </motion.p>
                  )}
                </div>
              );
            })}
          </div>

          {/* Right Column: Revolving Globe & Constellation System */}
          <div className="lg:col-span-7 flex flex-col items-center justify-center">
            <div className="w-full min-h-[380px] sm:min-h-[420px] rounded-xl border border-[#E5E2D9] bg-[#F7F5F0] relative overflow-hidden flex flex-col items-center justify-between p-4 sm:p-6 shadow-sm">
              
              {/* Subtle Grid Canvas Background */}
              <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#2563EB_0.75px,transparent_0.75px)] [background-size:24px_24px]" />

              {/* Revolving Orbit Rings Container */}
              <div className="relative w-52 h-52 sm:w-72 sm:h-72 lg:w-80 lg:h-80 flex items-center justify-center my-auto">
                
                {/* Outer Orbit Ring 1 */}
                <div
                  className="absolute inset-0 rounded-full border border-[#D9A74A]/30 border-dashed transition-transform duration-1000 ease-linear"
                  style={{ transform: `rotate(${rotationAngle}deg)` }}
                />

                {/* Outer Orbit Ring 2 */}
                <div
                  className="absolute inset-3 sm:inset-5 rounded-full border border-[#2563EB]/25 border-t-[#2563EB]/80 transition-transform duration-1000 ease-linear"
                  style={{ transform: `rotate(-${rotationAngle * 1.5}deg)` }}
                />

                {/* Inner Orbit Ring 3 */}
                <div
                  className="absolute inset-8 sm:inset-12 rounded-full border border-[#111111]/15 border-b-[#D9A74A] transition-transform duration-1000 ease-linear"
                  style={{ transform: `rotate(${rotationAngle * 2}deg)` }}
                />

                {/* Central Digital Globe Core */}
                <div className="w-20 h-20 sm:w-26 sm:h-26 lg:w-28 lg:h-28 rounded-full bg-gradient-to-tr from-[#111111] via-[#1E40AF] to-[#2563EB] text-white flex flex-col items-center justify-center p-2.5 sm:p-3 shadow-xl z-20 relative group border-2 border-[#D9A74A]/50 shrink-0">
                  <div className="absolute inset-0 rounded-full bg-[#D9A74A]/20 animate-ping opacity-30 pointer-events-none" />
                  <IconComponent size={22} className="text-[#D9A74A] mb-0.5 sm:mb-1 transition-transform group-hover:scale-110 sm:w-6 sm:h-6" />
                  <span className="font-display text-[8px] sm:text-[9px] uppercase tracking-widest text-[#FFFFFF] font-bold text-center leading-none">
                    LEMONTAKODE
                  </span>
                  <span className="font-display text-[7px] sm:text-[8px] text-[#D9A74A] font-mono mt-0.5">
                    CORE SYSTEM
                  </span>
                </div>

                {/* 5 Revolving Service Nodes on the Orbital Circle */}
                {SERVICES.map((service, idx) => {
                  const isActive = activeIdx === idx;
                  const totalAngle = (service.angle + rotationAngle) * (Math.PI / 180);
                  const x = Math.cos(totalAngle) * orbitRadius;
                  const y = Math.sin(totalAngle) * orbitRadius;
                  const NodeIcon = service.icon;

                  return (
                    <motion.div
                      key={service.id}
                      onClick={() => setActiveIdx(idx)}
                      style={{
                        transform: `translate(${x}px, ${y}px)`
                      }}
                      className={`absolute z-30 cursor-pointer flex items-center justify-center transition-all duration-300 ${
                        isActive ? 'scale-110 sm:scale-125' : 'hover:scale-110'
                      }`}
                    >
                      <div className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center shadow-lg border transition-all duration-300 ${
                        isActive
                          ? 'bg-[#2563EB] text-[#FFFFFF] border-[#D9A74A] ring-4 ring-[#2563EB]/20'
                          : 'bg-[#FFFFFF] text-[#111111] border-[#E5E2D9] hover:border-[#2563EB]'
                      }`}>
                        <NodeIcon size={14} className={`sm:w-4 sm:h-4 ${isActive ? 'text-[#D9A74A]' : 'text-[#6F6C65]'}`} />
                      </div>

                      {isActive && (
                        <span className="absolute -top-6 sm:-top-7 left-1/2 -translate-x-1/2 whitespace-nowrap px-1.5 sm:px-2 py-0.5 rounded bg-[#111111] text-[#FFFFFF] font-display text-[9px] sm:text-[10px] font-bold tracking-wider uppercase border border-[#D9A74A]/40 shadow-md z-40">
                          {service.title}
                        </span>
                      )}
                    </motion.div>
                  );
                })}

              </div>

              {/* Active Service Outcome Banner */}
              <div className="w-full mt-4 bg-[#FFFFFF]/90 backdrop-blur-md rounded-lg p-2.5 sm:p-3 border border-[#E5E2D9] flex flex-col sm:flex-row items-center justify-between gap-2 shadow-xs z-20">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#D9A74A] shrink-0" />
                  <span className="font-display text-xs font-bold text-[#111111] text-center sm:text-left">
                    {activeService.title} Core Output:
                  </span>
                </div>
                <div className="flex flex-wrap gap-1 sm:gap-1.5 justify-center sm:justify-end">
                  {activeService.outcomes.map((out) => (
                    <span
                      key={out}
                      className="px-2 py-0.5 rounded bg-[#F7F5F0] font-display text-[9px] sm:text-[10px] font-medium text-[#2563EB] border border-[#E5E2D9] whitespace-nowrap"
                    >
                      {out}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}





