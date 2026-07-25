'use client';

import React from 'react';
import { motion } from 'framer-motion';

const steps = [
  {
    num: '01',
    title: 'Discover & Architecture',
    desc: 'We map technical requirements, identify security risks, and specify system data models before writing code.',
  },
  {
    num: '02',
    title: 'UX & System Design',
    desc: 'We prototype intuitive human interfaces and establish modular component architecture.',
  },
  {
    num: '03',
    title: 'Test-Driven Build',
    desc: 'We execute clean, modular code with automated continuous integration and peer code reviews.',
  },
  {
    num: '04',
    title: 'Validated Launch',
    desc: 'We deploy to production infrastructure with load testing, security verification, and roll-back safety.',
  },
  {
    num: '05',
    title: 'Telemetry & Scale',
    desc: 'We monitor live performance metrics, optimize database queries, and continuously expand features.',
  },
];

const techStack = [
  'REACT', 'NEXT.JS', 'FLUTTER', 'NODE.JS', 'PYTHON / DJANGO', 'DOCKER', 'KUBERNETES', 'AWS CLOUD', 'CYBER SECURITY', 'GRAPHQL'
];

export default function DetailsCraftsmanship() {
  return (
    <section className="py-28 md:py-36 bg-[#07080a] text-[#F4F2ED] border-t border-white/10 overflow-hidden" id="process">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <div className="font-mono-tech text-xs tracking-[0.2em] text-[#ffd400] uppercase mb-3">
            04 // METHODOLOGY
          </div>
          <h2 className="font-display text-4xl sm:text-6xl font-extrabold tracking-tight text-[#F4F2ED]">
            How we <span className="font-serif-italic font-normal text-[#ffd400]">execute.</span>
          </h2>
        </div>

        {/* 5-Step Editorial Process Sequence */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-24">
          {steps.map((step, index) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="border-t border-white/15 pt-6 flex flex-col justify-between"
            >
              <div>
                <span className="font-mono-tech text-sm font-bold text-[#ffd400] block mb-4">
                  {step.num}
                </span>
                <h3 className="font-display text-xl font-bold text-[#F4F2ED] mb-3">
                  {step.title}
                </h3>
                <p className="font-body text-xs text-[#F4F2ED]/70 leading-relaxed font-light">
                  {step.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Subtle Horizontal Tech Stack Ticker */}
        <div className="pt-12 border-t border-white/10">
          <div className="font-mono-tech text-xs uppercase tracking-[0.2em] text-white/40 mb-6">
            Supported Core Technologies
          </div>

          <div className="flex flex-wrap gap-x-8 gap-y-4 font-mono-tech text-xs text-[#F4F2ED]/80">
            {techStack.map((tech) => (
              <div key={tech} className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#ffd400]" />
                <span>{tech}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
