'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Smartphone, Monitor, ShieldCheck, Cpu, LayoutTemplate, Cloud } from 'lucide-react';

export default function SolutionCapabilities() {
  const capabilities = [
    {
      title: 'Mobile Experiences',
      outcome: 'Reach your users anywhere with seamless native performance and elegant interfaces.',
      details: 'Deploy instantly to iOS and Android with systems architected for performance, offline reliability, and fast response times.',
      icon: Smartphone,
      accent: 'bg-primary/5 border-primary/20 text-primary',
    },
    {
      title: 'Web Platforms',
      outcome: 'Scale your business with lightning-fast applications built for mass conversion.',
      details: 'Server-side rendered, search-optimized engines that maintain instant loading even under peak load spikes.',
      icon: Monitor,
      accent: 'bg-blue-400/5 border-blue-400/20 text-blue-500',
    },
    {
      title: 'Business Software',
      outcome: 'Unify workflows, automate compliance, and streamline operations into a single tool.',
      details: 'Tailor-made dashboards, enterprise orchestration platforms, and high-performance databases tailored to your precise logic.',
      icon: Cpu,
      accent: 'bg-amber-500/5 border-amber-500/20 text-amber-600',
    },
    {
      title: 'Cyber Security',
      outcome: 'Ensure absolute trust with military-grade threat prevention and security standards.',
      details: 'Continuous vulnerability scanning, automated penetration pipelines, and secure cloud environments out of the box.',
      icon: ShieldCheck,
      accent: 'bg-emerald-500/5 border-emerald-500/20 text-emerald-500',
    },
    {
      title: 'User Experience Design',
      outcome: 'Translate complex product workflows into simple, human-centric interactions.',
      details: 'User-tested design systems, high-fidelity prototypes, and customer-centered layouts designed to eliminate user friction.',
      icon: LayoutTemplate,
      accent: 'bg-purple-500/5 border-purple-500/20 text-purple-500',
    },
    {
      title: 'Cloud Infrastructure',
      outcome: 'Deliver infinite scale, automated scaling, and bulletproof uptime for global systems.',
      details: 'Serverless deployment pipelines, distributed edge networks, and multi-region databases built to survive traffic surges.',
      icon: Cloud,
      accent: 'bg-orange-500/5 border-orange-500/20 text-orange-500',
    }
  ];

  return (
    <section className="relative py-32 bg-[#F5F6F8] text-dark-navy overflow-hidden" id="services">
      {/* Background Soft Lines */}
      <div className="absolute inset-0 circuit-grid opacity-[0.25] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="max-w-3xl mb-24">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.0, ease: "easeOut" }}
            className="text-xs uppercase tracking-[0.25em] font-bold text-primary mb-4"
          >
            Capabilities
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-120px" }}
            transition={{ duration: 1.0, ease: "easeOut", delay: 0.1 }}
            className="font-display text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.1] text-dark-navy"
          >
            We build the systems that modern businesses rely on.
          </motion.h2>
        </div>

        {/* Symmetric Grid (3 columns on desktop, 2 on tablet, 1 on mobile) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {capabilities.map((cap, index) => {
            const Icon = cap.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1], delay: index * 0.05 }}
                className="group flex flex-col justify-between p-10 bg-white rounded-3xl border border-dark-navy/10 shadow-[0_15px_45px_rgba(7,29,73,0.03)] hover:shadow-[0_25px_60px_rgba(7,29,73,0.08)] hover:border-primary/20 transition-all duration-500"
              >
                <div>
                  {/* Icon Container */}
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-8 border transition-all duration-500 group-hover:scale-105 ${cap.accent}`}>
                    <Icon size={26} strokeWidth={1.5} />
                  </div>

                  <h3 className="font-display text-2xl font-bold text-dark-navy mb-4 group-hover:text-primary transition-colors duration-500">
                    {cap.title}
                  </h3>
                  
                  <p className="font-body text-sm text-on-surface-variant leading-relaxed font-light mb-6">
                    {cap.outcome}
                  </p>
                </div>

                <div className="pt-6 border-t border-dark-navy/5">
                  <p className="font-body text-xs text-on-surface-variant/70 leading-relaxed font-light">
                    {cap.details}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
