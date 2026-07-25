'use client';

import React from 'react';
import { motion } from 'framer-motion';

const technologies = [
  { name: 'React', purpose: 'Component Architecture' },
  { name: 'Next.js', purpose: 'Hybrid Rendering' },
  { name: 'Flutter', purpose: 'Cross-Platform Engine' },
  { name: 'Node.js', purpose: 'Asynchronous Services' },
  { name: 'Django', purpose: 'Rapid Backend Logic' },
  { name: 'Docker', purpose: 'Immutable Containers' },
  { name: 'Kubernetes', purpose: 'Cluster Orchestration' },
  { name: 'AWS', purpose: 'Elastic Cloud Infrastructure' },
  { name: 'Cloud Security', purpose: 'Proactive Hardening' },
  { name: 'Tailwind CSS', purpose: 'Fluid Design System' },
];

const steps = [
  { number: '01', title: 'Discover', desc: 'Map requirements, tech stack, and roadmap.' },
  { number: '02', title: 'Design', desc: 'Prototype high-converting user flows.' },
  { number: '03', title: 'Build', desc: 'Write clean, test-driven production code.' },
  { number: '04', title: 'Launch', desc: 'Deploy to production with automated validation.' },
  { number: '05', title: 'Scale', desc: 'Monitor telemetry and expand functionality.' },
];

export default function DetailsCraftsmanship() {
  return (
    <section className="relative py-28 md:py-36 bg-[#0b0d14] text-white overflow-hidden" id="process">
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
            className="text-xs uppercase tracking-[0.25em] font-bold text-primary mb-3"
          >
            Craftsmanship
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-tight"
          >
            Built right from line one.
          </motion.h2>
        </div>

        {/* Tech Stack Grid */}
        <div className="mb-24">
          <h3 className="font-display text-lg font-bold text-white/80 uppercase tracking-widest mb-6">
            Technologies & Frameworks
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="group p-5 bg-[#121212] rounded-xl border border-white/10 flex flex-col justify-between h-24 hover:border-primary/40 hover:bg-[#181920] transition-all duration-300"
              >
                <span className="font-display text-base font-bold text-white group-hover:text-primary transition-colors">
                  {tech.name}
                </span>
                <span className="font-body text-[10px] uppercase tracking-wider text-[#cbcbcb] font-medium">
                  {tech.purpose}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* 5-Step Process Timeline */}
        <div className="relative">
          <h3 className="font-display text-2xl sm:text-3xl font-extrabold tracking-tight text-white mb-12">
            How We Execute
          </h3>

          {/* Connecting Line (Desktop) */}
          <div className="absolute top-[65px] left-0 right-0 h-[2px] bg-white/10 hidden lg:block z-0" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group flex flex-col gap-4 p-6 rounded-2xl bg-[#121212] lg:bg-transparent border border-white/10 lg:border-none"
              >
                <div className="w-12 h-12 rounded-full bg-[#121212] border border-white/20 flex items-center justify-center font-display text-sm font-extrabold text-primary shadow-lg group-hover:border-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  {step.number}
                </div>
                <div>
                  <h4 className="font-display text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors">
                    {step.title}
                  </h4>
                  <p className="font-body text-sm text-[#cbcbcb] leading-relaxed font-light">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
