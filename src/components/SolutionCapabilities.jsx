'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Smartphone, Monitor, ShieldCheck, Cpu, LayoutTemplate, Cloud } from 'lucide-react';

// Fast, snappy "flip-up" reveal: a short back-out ease so cards pop into
// place with a bit of overshoot rather than a plain fade/slide. Pure
// transform + opacity (rotateX, scale, y) - no layout properties - so it
// stays cheap even with several cards animating in a tight cascade.
const POP_EASE = [0.34, 1.56, 0.64, 1];

const gridVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.05, delayChildren: 0.02 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 22, rotateX: -14, scale: 0.94 },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    scale: 1,
    transition: { duration: 0.4, ease: POP_EASE },
  },
};

const iconVariants = {
  hidden: { opacity: 0, scale: 0.3, rotate: -20 },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: { duration: 0.32, ease: POP_EASE, delay: 0.08 },
  },
};

const capabilities = [
  {
    title: 'Mobile Experiences',
    outcome: 'Native iOS & Android apps that feel instant.',
    icon: Smartphone,
    accent: 'bg-primary/5 border-primary/20 text-primary',
  },
  {
    title: 'Web Platforms',
    outcome: 'Fast, SEO-ready sites built to convert.',
    icon: Monitor,
    accent: 'bg-blue-400/5 border-blue-400/20 text-blue-500',
  },
  {
    title: 'Business Software',
    outcome: 'Custom tools that unify your workflows.',
    icon: Cpu,
    accent: 'bg-amber-500/5 border-amber-500/20 text-amber-600',
  },
  {
    title: 'Cyber Security',
    outcome: 'Military-grade protection, built in.',
    icon: ShieldCheck,
    accent: 'bg-emerald-500/5 border-emerald-500/20 text-emerald-500',
  },
  {
    title: 'UX Design',
    outcome: 'Interfaces people actually enjoy using.',
    icon: LayoutTemplate,
    accent: 'bg-purple-500/5 border-purple-500/20 text-purple-500',
  },
  {
    title: 'Cloud Infrastructure',
    outcome: 'Infinite scale, zero downtime.',
    icon: Cloud,
    accent: 'bg-orange-500/5 border-orange-500/20 text-orange-500',
  },
];

export default function SolutionCapabilities() {
  return (
    <section className="relative py-20 md:py-32 bg-[#F5F6F8] text-dark-navy overflow-hidden" id="services">
      {/* Background Soft Lines */}
      <div className="absolute inset-0 circuit-grid opacity-[0.25] pointer-events-none" />

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
            Capabilities
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.08 }}
            className="font-display text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.1] text-dark-navy"
          >
            What we build.
          </motion.h2>
        </div>

        {/* Mobile: horizontal snap-scroll strip. Desktop: grid. Same cards,
            different container, so mobile is a quick swipe rather than a
            long vertical scroll. */}
        <motion.div
          variants={gridVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          style={{ perspective: 1000 }}
          className="flex md:grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 overflow-x-auto md:overflow-visible snap-x snap-mandatory -mx-6 px-6 md:mx-0 md:px-0 pb-2 md:pb-0 no-scrollbar"
        >
          {capabilities.map((cap) => {
            const Icon = cap.icon;
            return (
              <motion.div
                key={cap.title}
                variants={cardVariants}
                className="group shrink-0 w-[70%] sm:w-[45%] md:w-auto snap-start flex flex-col p-6 md:p-7 bg-white rounded-2xl border border-dark-navy/10 shadow-[0_15px_45px_rgba(7,29,73,0.03)] hover:shadow-[0_25px_60px_rgba(7,29,73,0.08)] hover:border-primary/20 hover:-translate-y-1 transition-all duration-300"
              >
                <motion.div
                  variants={iconVariants}
                  className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 border transition-all duration-300 group-hover:scale-105 ${cap.accent}`}
                >
                  <Icon size={22} strokeWidth={1.75} />
                </motion.div>
                <h3 className="font-display text-lg font-bold text-dark-navy mb-1.5 group-hover:text-primary transition-colors duration-300">
                  {cap.title}
                </h3>
                <p className="font-body text-sm text-on-surface-variant leading-snug font-light">
                  {cap.outcome}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
