'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function DetailsCraftsmanship() {
  const technologies = [
    { name: 'React', purpose: 'Component Architecture' },
    { name: 'Next.js', purpose: 'Hybrid Rendering' },
    { name: 'Flutter', purpose: 'Cross-Platform Engine' },
    { name: 'Node.js', purpose: 'Asynchronous Services' },
    { name: 'Django', purpose: 'Rapid Backend Logic' },
    { name: 'Docker', purpose: 'Immutable Environments' },
    { name: 'Kubernetes', purpose: 'Cluster Orchestration' },
    { name: 'AWS', purpose: 'Elastic Global Cloud' },
    { name: 'Cloud Security', purpose: 'Proactive Hardening' },
  ];

  const steps = [
    {
      number: '01',
      title: 'Discover',
      desc: 'We map requirements, define architectures, and document the feasibility roadmap.',
    },
    {
      number: '02',
      title: 'Design',
      desc: 'We translate scope into human-centric, high-fidelity prototypes and fluid systems.',
    },
    {
      number: '03',
      title: 'Build',
      desc: 'We compile scalable, modular code with continuous integration and testing.',
    },
    {
      number: '04',
      title: 'Launch',
      desc: 'We deploy to optimized cloud structures under strict staging validation checklists.',
    },
    {
      number: '05',
      title: 'Scale',
      desc: 'We monitor 24/7, perform security audits, and scale infrastructure as demand grows.',
    },
  ];

  return (
    <section className="relative py-32 bg-soft-white text-dark-navy overflow-hidden" id="process">
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="max-w-3xl mb-24">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-xs uppercase tracking-[0.25em] font-bold text-primary mb-4"
          >
            Craftsmanship
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-120px" }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="font-display text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.1] text-dark-navy"
          >
            Built with modern engineering principles.
          </motion.h2>
        </div>

        {/* Tech Craftsmanship Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 mb-32">
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: index * 0.05 }}
              className="p-6 bg-white rounded-2xl border border-dark-navy/5 flex flex-col justify-between h-32 hover:border-primary/20 hover:shadow-[0_8px_30px_rgba(7,29,73,0.02)] transition-all duration-500 group"
            >
              <span className="font-display text-lg font-bold text-dark-navy group-hover:text-primary transition-colors duration-300">
                {tech.name}
              </span>
              <span className="font-body text-2xs uppercase tracking-widest text-on-surface-variant/60 font-medium">
                {tech.purpose}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Apple-Style Process Timeline */}
        <div className="relative">
          <div className="mb-16">
            <h3 className="font-display text-2xl sm:text-3xl font-extrabold tracking-tight text-dark-navy">
              The Path to Production
            </h3>
          </div>

          {/* Timeline Line (Desktop only) */}
          <div className="absolute top-[35px] left-0 right-0 h-[1.5px] bg-dark-navy/10 hidden lg:block z-0" />

          {/* Steps list */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: index * 0.1 }}
                className="flex flex-col gap-4 relative group"
              >
                {/* Step Circle Marker */}
                <div className="w-12 h-12 rounded-full bg-white border border-dark-navy/10 flex items-center justify-center font-display text-sm font-extrabold text-primary shadow-sm group-hover:border-primary group-hover:shadow-[0_0_15px_rgba(0,102,255,0.15)] transition-all duration-500">
                  {step.number}
                </div>

                <div className="pt-2">
                  <h4 className="font-display text-xl font-bold text-dark-navy mb-2 group-hover:text-primary transition-colors duration-300">
                    {step.title}
                  </h4>
                  <p className="font-body text-sm text-on-surface-variant/80 leading-relaxed font-light">
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
