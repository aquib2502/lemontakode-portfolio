'use client';

import React from 'react';
import { motion } from 'framer-motion';

const POP_EASE = [0.34, 1.56, 0.64, 1];

const gridVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.045, delayChildren: 0.02 } },
};

// Tech cards flip in on the Y axis (distinct from the capability cards'
// X-axis flip above) - transform/opacity only, cheap even across 9 cards.
const techCardVariants = {
  hidden: { opacity: 0, y: 14, rotateY: 50, scale: 0.92 },
  visible: {
    opacity: 1,
    y: 0,
    rotateY: 0,
    scale: 1,
    transition: { duration: 0.36, ease: POP_EASE },
  },
};

const stepCardVariants = {
  hidden: { opacity: 0, y: 20, rotateX: -14, scale: 0.94 },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    scale: 1,
    transition: { duration: 0.4, ease: POP_EASE },
  },
};

const stepNumberVariants = {
  hidden: { opacity: 0, scale: 0.3, rotate: 25 },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: { duration: 0.32, ease: POP_EASE, delay: 0.08 },
  },
};

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
  { number: '01', title: 'Discover', desc: 'Map requirements and architecture.' },
  { number: '02', title: 'Design', desc: 'Prototype the experience.' },
  { number: '03', title: 'Build', desc: 'Ship scalable, tested code.' },
  { number: '04', title: 'Launch', desc: 'Deploy to production, validated.' },
  { number: '05', title: 'Scale', desc: 'Monitor and grow with demand.' },
];

export default function DetailsCraftsmanship() {
  return (
    <section className="relative py-20 md:py-32 bg-soft-white text-dark-navy overflow-hidden" id="process">
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="max-w-3xl mb-10 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="text-xs uppercase tracking-[0.25em] font-bold text-primary mb-4"
          >
            Craftsmanship
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.08 }}
            className="font-display text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.1] text-dark-navy"
          >
            Built right.
          </motion.h2>
        </div>

        {/* Tech stack - horizontal snap-scroll on mobile, grid on desktop */}
        <motion.div
          variants={gridVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          style={{ perspective: 1000 }}
          className="flex sm:grid sm:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-4 overflow-x-auto sm:overflow-visible snap-x snap-mandatory -mx-6 px-6 sm:mx-0 sm:px-0 pb-2 sm:pb-0 mb-16 md:mb-24 no-scrollbar"
        >
          {technologies.map((tech) => (
            <motion.div
              key={tech.name}
              variants={techCardVariants}
              className="group shrink-0 w-[38%] sm:w-auto snap-start p-5 bg-white rounded-xl border border-dark-navy/5 flex flex-col justify-between h-24 hover:border-primary/20 hover:shadow-[0_8px_30px_rgba(7,29,73,0.02)] transition-all duration-300"
            >
              <span className="font-display text-base font-bold text-dark-navy group-hover:text-primary transition-colors duration-300">
                {tech.name}
              </span>
              <span className="font-body text-[10px] uppercase tracking-widest text-on-surface-variant/60 font-medium">
                {tech.purpose}
              </span>
            </motion.div>
          ))}
        </motion.div>

        {/* Process - horizontal snap-scroll on mobile, timeline grid on desktop */}
        <div className="relative">
          <h3 className="font-display text-xl sm:text-2xl font-extrabold tracking-tight text-dark-navy mb-8 md:mb-12">
            How we work
          </h3>

          {/* Timeline line (desktop only) */}
          <div className="absolute top-[59px] left-0 right-0 h-[1.5px] bg-dark-navy/10 hidden lg:block z-0" />

          <motion.div
            variants={gridVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            style={{ perspective: 1000 }}
            className="flex lg:grid lg:grid-cols-5 gap-4 lg:gap-8 overflow-x-auto lg:overflow-visible snap-x snap-mandatory -mx-6 px-6 lg:mx-0 lg:px-0 pb-2 lg:pb-0 relative z-10 no-scrollbar"
          >
            {steps.map((step) => (
              <motion.div
                key={step.number}
                variants={stepCardVariants}
                className="group shrink-0 w-[58%] sm:w-[35%] lg:w-auto snap-start flex flex-col gap-3"
              >
                <motion.div
                  variants={stepNumberVariants}
                  className="w-11 h-11 rounded-full bg-white border border-dark-navy/10 flex items-center justify-center font-display text-sm font-extrabold text-primary shadow-sm group-hover:border-primary group-hover:shadow-[0_0_15px_rgba(0,102,255,0.15)] transition-all duration-300"
                >
                  {step.number}
                </motion.div>
                <div>
                  <h4 className="font-display text-lg font-bold text-dark-navy mb-1 group-hover:text-primary transition-colors duration-300">
                    {step.title}
                  </h4>
                  <p className="font-body text-sm text-on-surface-variant/80 leading-snug font-light">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
