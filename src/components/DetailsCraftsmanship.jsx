'use client';

import React from 'react';
import { motion } from 'framer-motion';

const PROCESS_STEPS = [
  {
    num: '01',
    name: 'Understand',
    title: 'We understand the business before discussing technology.',
    desc: 'We start by interviewing key stakeholders, mapping operational friction, and defining clear real-world business requirements before proposing software solutions.'
  },
  {
    num: '02',
    name: 'Design',
    title: 'We turn the problem into a clear product experience.',
    desc: 'We craft intuitive wireframes, software architecture, and clear user flows so that complex operations feel natural and effortless.'
  },
  {
    num: '03',
    name: 'Build',
    title: 'We engineer the system around real-world requirements.',
    desc: 'We build modular, maintainable software platforms with automated testing and secure data pipelines, designed for scalability and high performance.'
  },
  {
    num: '04',
    name: 'Launch',
    title: 'We test, deploy and make sure everything works properly.',
    desc: 'We conduct comprehensive scenario testing, staging validations, and smooth deployment protocols to ensure zero downtime and total stability.'
  },
  {
    num: '05',
    name: 'Improve',
    title: 'We continue improving the product as the business evolves.',
    desc: 'We monitor production performance, refine user workflows, and continually roll out enhancements as your business grows and changes.'
  }
];

export default function DetailsCraftsmanship() {
  return (
    <section id="approach" className="py-16 md:py-24 bg-[#F7F5F0] text-[#111111] border-b border-[#E5E2D9] select-none">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12">
        
        {/* Eyebrow */}
        <div className="flex items-center gap-3 mb-6">
          <span className="h-px w-6 bg-[#B89B5E]" />
          <span className="font-display text-[11px] font-semibold uppercase tracking-[0.2em] text-[#6F6C65]">
            METHODOLOGY
          </span>
        </div>

        <div className="mb-14">
          <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-[#111111]">
            How we{' '}
            <span className="font-serif-italic font-normal text-[#111111] relative inline-block">
              work.
              <span className="absolute bottom-1 left-0 right-0 h-[1.5px] bg-[#B89B5E]/40" />
            </span>
          </h2>
        </div>

        {/* Clean Editorial Sequence */}
        <div className="border-t border-[#E5E2D9]">
          {PROCESS_STEPS.map((step, idx) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.06 }}
              className="py-8 border-b border-[#E5E2D9] grid grid-cols-1 lg:grid-cols-12 gap-6 items-start hover:bg-[#FFFFFF]/50 transition-colors duration-300 px-3 -mx-3 rounded-lg"
            >
              {/* Number & Stage Name */}
              <div className="lg:col-span-3 flex items-center gap-4">
                <span className="font-display text-lg font-mono font-bold text-[#B89B5E]">
                  {step.num}
                </span>
                <span className="font-display text-xs font-semibold uppercase tracking-wider text-[#111111]">
                  {step.name}
                </span>
              </div>

              {/* Title */}
              <div className="lg:col-span-4">
                <h3 className="font-display text-lg sm:text-xl font-bold text-[#111111] leading-snug">
                  {step.title}
                </h3>
              </div>

              {/* Description */}
              <div className="lg:col-span-5">
                <p className="font-body text-sm text-[#6F6C65] leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}


