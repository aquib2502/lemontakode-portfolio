'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Layers, Cpu, Smartphone, Gauge, Lock, ArrowUpRight, Zap, CheckCircle2 } from 'lucide-react';

const FEATURES = [
  {
    id: '01',
    title: 'Automated QA & Testing',
    desc: 'Continuous regression testing, automated unit suites, and end-to-end user scenario validation.',
    icon: ShieldCheck,
    size: 'col-span-12 md:col-span-4',
    tag: 'QUALITY ASSURANCE',
  },
  {
    id: '02',
    title: 'Enterprise Web Platforms',
    desc: 'High-performance Next.js & React web applications backed by resilient microservice APIs.',
    icon: Layers,
    size: 'col-span-12 md:col-span-8',
    tag: 'WEB ARCHITECTURE',
  },
  {
    id: '03',
    title: 'AI & Workflow Agents',
    desc: 'Custom AI agents deployed to automate complex business workflows and data transformation pipelines.',
    icon: Cpu,
    size: 'col-span-12 md:col-span-7',
    tag: 'AI AUTOMATION',
  },
  {
    id: '04',
    title: 'Mobile Engineering',
    desc: 'Native iOS & Android cross-platform mobile apps engineered for speed, offline sync, and deep device integration.',
    icon: Smartphone,
    size: 'col-span-12 md:col-span-5',
    tag: 'MOBILE APPS',
  },
  {
    id: '05',
    title: 'Sub-100ms Optimization',
    desc: 'Database query tuning, edge caching, and bundle size reduction for lightning-fast user experience.',
    icon: Gauge,
    size: 'col-span-12 md:col-span-5',
    tag: 'PERFORMANCE',
  },
  {
    id: '06',
    title: 'Enterprise Security & IAM',
    desc: 'Zero-Trust access controls, JWT role-based security, continuous vulnerability audit, and data encryption.',
    icon: Lock,
    size: 'col-span-12 md:col-span-7',
    tag: 'CYBERSECURITY',
  },
];

export default function NunuBentoGrid() {
  return (
    <section id="features" className="relative py-28 md:py-36 bg-[#07080a] text-[#F4F2ED] overflow-hidden select-none">
      {/* Background radial glow */}
      <div className="absolute top-1/3 right-1/4 w-[600px] h-[600px] bg-[#ffd400]/4 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-[1280px] mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-[#ffd400]/30 bg-[#ffd400]/5 text-[#ffd400] font-mono-tech text-xs uppercase tracking-widest mb-4"
          >
            <Zap size={13} />
            <span>FULL CAPABILITIES</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-[#F4F2ED] leading-none mb-4"
          >
            Everything in <span className="text-[#ffd400]">one place.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="font-body text-base md:text-lg text-[#9ea0a8]"
          >
            All your custom software engineering, QA testing, and cloud automation under one roof.
          </motion.p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-12 gap-6">
          {FEATURES.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className={`${item.size} p-8 rounded-2xl bg-[#0d0e13] border border-white/10 hover:border-[#ffd400]/50 transition-all duration-300 shadow-xl group flex flex-col justify-between relative overflow-hidden`}
              >
                {/* Subtle top light bar on hover */}
                <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-[#ffd400] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div>
                  {/* Icon & Tag */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-[#ffd400]/10 border border-[#ffd400]/30 text-[#ffd400] flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Icon size={22} />
                    </div>

                    <span className="font-mono-tech text-[10px] text-[#ffd400]/80 bg-[#ffd400]/10 px-3 py-1 rounded-full uppercase tracking-wider font-semibold border border-[#ffd400]/20">
                      {item.tag}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-display text-2xl font-bold text-[#F4F2ED] mb-3 group-hover:text-[#ffd400] transition-colors">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="font-body text-sm text-[#9ea0a8] leading-relaxed mb-6">
                    {item.desc}
                  </p>
                </div>

                {/* Footer Link Indicator */}
                <div className="flex items-center gap-2 text-xs font-mono-tech text-white/40 group-hover:text-[#ffd400] transition-colors pt-4 border-t border-white/5">
                  <CheckCircle2 size={13} className="text-[#ffd400]" />
                  <span>Production Ready</span>
                  <ArrowUpRight size={14} className="ml-auto transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
