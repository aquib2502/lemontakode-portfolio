'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Shield, Zap, Users } from 'lucide-react';
import { motion } from 'framer-motion';

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
          const pDuration = 1200;
          const pStepTime = Math.abs(Math.floor(pDuration / pEnd));
          const pTimer = setInterval(() => {
            pStart += 1;
            setProjectsCount(pStart);
            if (pStart >= pEnd) clearInterval(pTimer);
          }, pStepTime);

          let sStart = 0;
          const sEnd = 100;
          const sDuration = 1200;
          const sStepTime = Math.abs(Math.floor(sDuration / (sEnd / 2)));
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
    <section ref={sectionRef} className="py-28 bg-[#0b0d14] text-white relative overflow-hidden" id="stats">
      {/* Glow Accent */}
      <div className="absolute top-1/2 left-10 w-96 h-96 bg-primary/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary mb-3">Why Partner With Us</p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight tracking-tight">
            Unrivaled Engineering Expertise. <br />
            <span className="text-gradient-lemon">Guaranteed Performance.</span>
          </h2>
          <p className="font-body text-base sm:text-lg text-[#cbcbcb] mb-10 leading-relaxed font-light">
            We don't just write code. We construct resilient digital platforms that adapt to scale, run at lightning speed, and stay secure under real-world loads.
          </p>

          <div className="grid grid-cols-2 gap-6">
            <div className="p-6 bg-[#121212] rounded-2xl border border-white/10">
              <div className="text-4xl sm:text-5xl font-display font-extrabold text-primary mb-1">
                {projectsCount}+
              </div>
              <p className="text-xs font-semibold text-white/70 uppercase tracking-wider">
                Projects Delivered
              </p>
            </div>
            <div className="p-6 bg-[#121212] rounded-2xl border border-white/10">
              <div className="text-4xl sm:text-5xl font-display font-extrabold text-lemon-yellow mb-1">
                {satisfactionCount}%
              </div>
              <p className="text-xs font-semibold text-white/70 uppercase tracking-wider">
                Customer Retention
              </p>
            </div>
          </div>
        </motion.div>

        {/* Feature Cards Column */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-[#121212] p-8 sm:p-10 rounded-3xl border border-white/10 text-white shadow-2xl space-y-8"
        >
          <h3 className="font-display text-xl sm:text-2xl font-bold border-b border-white/10 pb-4">
            Engineering Standards
          </h3>
          
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0 text-primary">
                <Zap size={22} />
              </div>
              <div>
                <h4 className="font-bold text-base text-white">Rapid Iteration</h4>
                <p className="text-sm text-[#cbcbcb] leading-relaxed mt-1 font-light">
                  Continuous deployment for instant review cycles without compromising underlying system architecture.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center shrink-0 text-emerald-400">
                <Shield size={22} />
              </div>
              <div>
                <h4 className="font-bold text-base text-white">Security-First Focus</h4>
                <p className="text-sm text-[#cbcbcb] leading-relaxed mt-1 font-light">
                  Injecting automated security audits, OWASP guidelines, and vulnerability scanning from line one.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-lemon-yellow/10 border border-lemon-yellow/20 flex items-center justify-center shrink-0 text-lemon-yellow">
                <Users size={22} />
              </div>
              <div>
                <h4 className="font-bold text-base text-white">Direct Senior Support</h4>
                <p className="text-sm text-[#cbcbcb] leading-relaxed mt-1 font-light">
                  Work directly with senior software architects who translate business targets into clean code.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
