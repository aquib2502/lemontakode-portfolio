'use client';

import React from 'react';

const TECH_ITEMS = [
  'React',
  'Next.js',
  'Node.js',
  'PostgreSQL',
  'Cloud Infrastructure'
];

export default function StatsSection() {
  return (
    <section id="technology" className="py-10 sm:py-12 md:py-16 bg-[#F7F5F0] text-[#111111] border-b border-[#E5E2D9] select-none">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-12">
        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 sm:gap-6">
          <div className="space-y-1">
            <span className="font-display text-[10px] sm:text-[11px] uppercase tracking-[0.18em] sm:tracking-[0.2em] text-[#6F6C65] font-semibold block">
              CREDIBILITY & STACK
            </span>
            <h3 className="font-display text-sm sm:text-base lg:text-lg font-bold text-[#111111]">
              Technology we work with
            </h3>
          </div>

          <div className="flex flex-wrap items-center gap-2 sm:gap-2.5 font-display text-[11px] sm:text-xs font-semibold md:justify-end">
            {TECH_ITEMS.map((item) => (
              <span
                key={item}
                className="px-2.5 sm:px-3 py-1 rounded-full bg-[#FFFFFF] border border-[#E5E2D9] text-[#2563EB] hover:border-[#2563EB] transition-colors shadow-xs"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}



