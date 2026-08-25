'use client';

import React from 'react';
import { motion } from 'framer-motion';

const TECH_ITEMS = [
  'React',
  'Next.js',
  'Node.js',
  'PostgreSQL',
  'Cloud infrastructure'
];

export default function StatsSection() {
  return (
    <section id="technology" className="py-20 md:py-28 bg-[#F7F5F0] text-[#111111] border-b border-[#E5E2D9] select-none">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12">
        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 pt-4">
          <div className="space-y-1">
            <span className="font-display text-xs uppercase tracking-[0.2em] text-[#77736B] block">
              CREDIBILITY & STACK
            </span>
            <h3 className="font-display text-lg font-bold text-[#111111]">
              Technology we work with
            </h3>
          </div>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-3 font-display text-sm font-semibold text-[#111111] md:justify-end">
            {TECH_ITEMS.map((item, idx) => (
              <React.Fragment key={item}>
                <span className="hover:text-[#B89B5E] transition-colors">{item}</span>
                {idx < TECH_ITEMS.length - 1 && (
                  <span className="text-[#B89B5E]/60 text-xs">•</span>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

