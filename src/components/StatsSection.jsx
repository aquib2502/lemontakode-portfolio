'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Shield, Zap, Users } from 'lucide-react';

export default function StatsSection() {
  const [projectsCount, setProjectsCount] = useState(0);
  const [satisfactionCount, setSatisfactionCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);

          let pStart = 0;
          const pEnd = 50;
          const pStepTime = Math.floor(1000 / pEnd);
          const pTimer = setInterval(() => {
            pStart += 1;
            setProjectsCount(pStart);
            if (pStart >= pEnd) clearInterval(pTimer);
          }, pStepTime);

          let sStart = 0;
          const sEnd = 100;
          const sStepTime = Math.floor(1000 / (sEnd / 2));
          const sTimer = setInterval(() => {
            sStart += 2;
            if (sStart >= sEnd) {
              setSatisfactionCount(sEnd);
              clearInterval(sTimer);
            } else {
              setSatisfactionCount(sStart);
            }
          }, sStepTime);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        observer.unobserve(sectionRef.current);
      }
    };
  }, [hasAnimated]);

  return (
    <section ref={sectionRef} className="py-24 bg-[#121212] text-white border-t border-white/5" id="stats">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <div className="text-xs uppercase tracking-[0.2em] font-semibold text-[#6289ff] mb-3">
            Why Partner With Us
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Unrivaled Engineering Expertise. <br />
            <span className="text-[#6289ff]">Guaranteed Performance.</span>
          </h2>
          <p className="font-body text-base text-[#cbcbcb] mb-10 leading-relaxed font-normal">
            We build resilient digital platforms that adapt to scale, run at high speed, and stay secure under fire.
          </p>

          <div className="grid grid-cols-2 gap-6">
            <div className="p-6 bg-[#181818] rounded-xl border border-white/10">
              <div className="text-4xl font-bold text-white mb-1">
                {projectsCount}+
              </div>
              <p className="text-xs text-[#cbcbcb] uppercase tracking-wider">
                Projects Delivered
              </p>
            </div>
            <div className="p-6 bg-[#181818] rounded-xl border border-white/10">
              <div className="text-4xl font-bold text-[#6289ff] mb-1">
                {satisfactionCount}%
              </div>
              <p className="text-xs text-[#cbcbcb] uppercase tracking-wider">
                Customer Retention
              </p>
            </div>
          </div>
        </div>

        {/* Feature Cards Column */}
        <div className="bg-[#181818] p-8 sm:p-10 rounded-xl border border-white/10 text-white space-y-8">
          <h3 className="font-display text-xl font-bold border-b border-white/10 pb-4">
            Engineering Standards
          </h3>
          
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center shrink-0 text-[#6289ff]">
                <Zap size={20} />
              </div>
              <div>
                <h4 className="font-bold text-base text-white">Rapid Iteration</h4>
                <p className="text-sm text-[#cbcbcb] leading-relaxed mt-1 font-normal">
                  Continuous deployment for instant review cycles without sacrificing architecture.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center shrink-0 text-[#6289ff]">
                <Shield size={20} />
              </div>
              <div>
                <h4 className="font-bold text-base text-white">Security-First Focus</h4>
                <p className="text-sm text-[#cbcbcb] leading-relaxed mt-1 font-normal">
                  Automated security analysis, OWASP compliance, and dependency audits from day one.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center shrink-0 text-[#6289ff]">
                <Users size={20} />
              </div>
              <div>
                <h4 className="font-bold text-base text-white">Direct Senior Support</h4>
                <p className="text-sm text-[#cbcbcb] leading-relaxed mt-1 font-normal">
                  You work directly with principal developers who translate business goals into scalable software.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
