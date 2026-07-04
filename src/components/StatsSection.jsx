'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Shield, Zap, Users, Trophy } from 'lucide-react';

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
          // Animate projects counter
          let pStart = 0;
          const pEnd = 50;
          const pDuration = 1500;
          const pStepTime = Math.abs(Math.floor(pDuration / pEnd));
          const pTimer = setInterval(() => {
            pStart += 1;
            setProjectsCount(pStart);
            if (pStart >= pEnd) clearInterval(pTimer);
          }, pStepTime);

          // Animate satisfaction counter
          let sStart = 0;
          const sEnd = 100;
          const sDuration = 1500;
          const sStepTime = Math.abs(Math.floor(sDuration / sEnd));
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
    <section ref={sectionRef} className="py-24 bg-white relative overflow-hidden" id="stats">
      {/* Decorative Blur Accent */}
      <div className="absolute top-1/2 left-10 w-96 h-96 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-3">Why Partner With Us</p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-dark-navy mb-6 leading-tight tracking-tight">
            Unrivaled Engineering Expertise. <br />
            <span className="brand-gradient-text">Guaranteed Performance.</span>
          </h2>
          <p className="font-body text-base sm:text-lg text-on-surface-variant mb-10 leading-relaxed">
            We don&apos;t just build applications. We build resilient digital ecosystems that adapt to scale, run at speed, and stay secure under fire.
          </p>

          <div className="grid grid-cols-2 gap-8">
            <div className="p-4 bg-surface-container-low rounded-2xl border border-outline-variant/10">
              <div className="text-4xl sm:text-5xl font-display font-extrabold stats-gradient-text mb-1">
                {projectsCount}+
              </div>
              <p className="text-xs sm:text-sm font-semibold text-primary uppercase tracking-wider">
                Projects Delivered
              </p>
            </div>
            <div className="p-4 bg-surface-container-low rounded-2xl border border-outline-variant/10">
              <div className="text-4xl sm:text-5xl font-display font-extrabold stats-gradient-text mb-1">
                {satisfactionCount}%
              </div>
              <p className="text-xs sm:text-sm font-semibold text-primary uppercase tracking-wider">
                Customer Retention
              </p>
            </div>
          </div>
        </div>

        {/* Feature Cards Column */}
        <div className="bg-surface-container-low/60 backdrop-blur-md p-8 sm:p-10 rounded-3xl border border-outline-variant/30 text-dark-navy shadow-lg">
          <h3 className="font-display text-xl sm:text-2xl font-bold mb-8">Engineering Standards</h3>
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                <Zap size={20} className="text-primary" />
              </div>
              <div>
                <h4 className="font-bold text-base text-dark-navy">Rapid Iteration</h4>
                <p className="text-sm text-on-surface-variant leading-relaxed mt-1">
                  Deploying prototypes on Vercel/Netlify for review without sacrificing system architecture.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                <Shield size={20} className="text-primary" />
              </div>
              <div>
                <h4 className="font-bold text-base text-dark-navy">Security-First Focus</h4>
                <p className="text-sm text-on-surface-variant leading-relaxed mt-1">
                  Injecting code analysis linting, OWASP guidelines, and dependency audits from day one.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                <Users size={20} className="text-primary" />
              </div>
              <div>
                <h4 className="font-bold text-base text-dark-navy">Direct Senior Support</h4>
                <p className="text-sm text-on-surface-variant leading-relaxed mt-1">
                  You work directly with principal developers who translate features into scalable, clean implementations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
