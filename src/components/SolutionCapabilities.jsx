'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Smartphone, Monitor, ShieldCheck, Cpu, LayoutTemplate, Cloud } from 'lucide-react';

const capabilities = [
  {
    title: 'Mobile Experiences',
    outcome: 'Native iOS & Android apps that feel instant and responsive.',
    icon: Smartphone,
    color: 'text-primary border-primary/30 bg-primary/10',
  },
  {
    title: 'Web Platforms',
    outcome: 'High-performance, SEO-ready web applications built to scale.',
    icon: Monitor,
    color: 'text-sky-400 border-sky-400/30 bg-sky-400/10',
  },
  {
    title: 'Business Software',
    outcome: 'Custom enterprise software that unifies your operations.',
    icon: Cpu,
    color: 'text-lemon-yellow border-lemon-yellow/30 bg-lemon-yellow/10',
  },
  {
    title: 'Cyber Security',
    outcome: 'Military-grade encryption, vulnerability audits, and defense.',
    icon: ShieldCheck,
    color: 'text-emerald-400 border-emerald-400/30 bg-emerald-400/10',
  },
  {
    title: 'UX Product Design',
    outcome: 'Modern, high-converting interfaces crafted for clarity.',
    icon: LayoutTemplate,
    color: 'text-purple-400 border-purple-400/30 bg-purple-400/10',
  },
  {
    title: 'Cloud Infrastructure',
    outcome: 'Automated CI/CD pipelines with zero downtime deployment.',
    icon: Cloud,
    color: 'text-orange-400 border-orange-400/30 bg-orange-400/10',
  },
];

export default function SolutionCapabilities() {
  return (
    <section className="relative py-28 md:py-36 bg-[#0b0d14] text-white overflow-hidden" id="services">
      {/* Background Circuit Grid */}
      <div className="absolute inset-0 circuit-grid opacity-30 pointer-events-none" />

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
            Capabilities
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-tight"
          >
            What we build.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-body text-base text-[#cbcbcb] mt-4 font-light max-w-xl"
          >
            End-to-end software development tailored to your exact industry requirements.
          </motion.p>
        </div>

        {/* Bento Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilities.map((cap, index) => {
            const Icon = cap.icon;
            return (
              <motion.div
                key={cap.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="group relative p-8 rounded-2xl bg-[#121212] border border-white/10 hover:border-primary/40 transition-all duration-300 hover:-translate-y-1.5 shadow-[0_15px_40px_rgba(0,0,0,0.4)] flex flex-col justify-between"
              >
                <div>
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 border transition-transform duration-300 group-hover:scale-110 ${cap.color}`}>
                    <Icon size={22} />
                  </div>
                  <h3 className="font-display text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors">
                    {cap.title}
                  </h3>
                  <p className="font-body text-sm text-[#cbcbcb] leading-relaxed font-light">
                    {cap.outcome}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between text-xs text-white/50 group-hover:text-white/80 transition-colors">
                  <span>Explore capability</span>
                  <span className="text-primary font-bold group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
