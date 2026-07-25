'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';

const capabilities = [
  {
    num: '01',
    title: 'PRODUCT ENGINEERING',
    category: 'FULL-STACK SYSTEMS',
    desc: 'End-to-end custom application development engineered for high transaction volume, maintainability, and clean system architecture.',
    tech: 'REACT · NEXT.JS · NODE.JS · PYTHON · POSTGRES',
  },
  {
    num: '02',
    title: 'WEB PLATFORMS',
    category: 'HIGH-PERFORMANCE WEB',
    desc: 'Lightning-fast, SEO-optimized web applications and portal systems built with hybrid server rendering and custom design systems.',
    tech: 'NEXT.JS SSR · TYPESCRIPT · TAILWIND CSS · GRAPHQL',
  },
  {
    num: '03',
    title: 'MOBILE EXPERIENCES',
    category: 'IOS & ANDROID ENGINE',
    desc: 'Cross-platform and native mobile experiences designed for 60fps animations, offline capabilities, and instant push synchronization.',
    tech: 'FLUTTER · REACT NATIVE · SWIFT · KOTLIN · FIREBASE',
  },
  {
    num: '04',
    title: 'UX & SYSTEM DESIGN',
    category: 'INTERFACE ARCHITECTURE',
    desc: 'Interface design that balances visual aesthetic with human clarity, reducing user friction and maximizing conversion efficiency.',
    tech: 'DESIGN SYSTEMS · WIREFRAMING · PROTOTYPES · UX',
  },
  {
    num: '05',
    title: 'CLOUD INFRASTRUCTURE',
    category: 'ELASTIC DEPLOYMENTS',
    desc: 'Automated CI/CD pipelines, container orchestration, and multi-region cloud deployments with zero-downtime releases.',
    tech: 'AWS · DOCKER · KUBERNETES · TERRAFORM · CI/CD',
  },
  {
    num: '06',
    title: 'CYBER SECURITY',
    category: 'HARDENING & AUDITING',
    desc: 'Proactive vulnerability assessments, OWASP auditing, penetration testing, and military-grade encryption built into your codebase.',
    tech: 'OWASP · VULNERABILITY SCANS · ENCRYPTION · AUDITS',
  },
];

export default function SolutionCapabilities() {
  const [activeIdx, setActiveIdx] = useState(0);

  return (
    <section className="theme-charcoal py-28 md:py-36 border-t border-white/10" id="services">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
          <div>
            <div className="font-mono-tech text-xs tracking-[0.2em] text-[#ffd400] uppercase mb-3">
              03 // CAPABILITY INDEX
            </div>
            <h2 className="font-display text-4xl sm:text-6xl font-extrabold tracking-tight text-[#F4F2ED]">
              What we <span className="font-serif-italic font-normal text-[#ffd400]">engineer.</span>
            </h2>
          </div>
          <div className="font-mono-tech text-xs text-white/40">
            HOVER ROWS TO EXPLORE CAPABILITIES
          </div>
        </div>

        {/* Interactive Typography Rows */}
        <div className="space-y-0">
          {capabilities.map((cap, index) => (
            <motion.div
              key={cap.num}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              onMouseEnter={() => setActiveIdx(index)}
              className={`capability-row py-8 px-4 cursor-pointer flex flex-col lg:flex-row lg:items-center justify-between gap-6 transition-all duration-300 ${
                activeIdx === index ? 'border-l-2 border-l-[#ffd400] bg-white/[0.03] pl-6' : ''
              }`}
            >
              <div className="flex items-center gap-6 lg:w-5/12">
                <span className="font-mono-tech text-sm font-bold text-[#ffd400]">{cap.num}</span>
                <div>
                  <h3 className="font-display text-xl sm:text-3xl font-extrabold tracking-tight text-[#F4F2ED]">
                    {cap.title}
                  </h3>
                  <span className="font-mono-tech text-[10px] text-white/40 tracking-widest uppercase block mt-1">
                    {cap.category}
                  </span>
                </div>
              </div>

              <div className="lg:w-4/12 font-body text-sm text-[#F4F2ED]/70 leading-relaxed font-light">
                {cap.desc}
              </div>

              <div className="lg:w-3/12 font-mono-tech text-[11px] text-[#ffd400] tracking-wider lg:text-right">
                {cap.tech}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
