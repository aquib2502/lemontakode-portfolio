'use client';

import React from 'react';
import { Smartphone, Globe, Shield, CheckCircle } from 'lucide-react';

export default function ServicesSection() {
  const services = [
    {
      title: 'Mobile Engineering',
      desc: 'High-performance native and cross-platform apps using Flutter and React Native, tailored for seamless performance.',
      icon: <Smartphone size={28} className="text-primary" />,
      glowColor: 'group-hover:shadow-[0_0_30px_rgba(0,80,203,0.15)]',
      bullets: [
        'Premium iOS & Android development',
        'Offline-first architecture and real-time syncing',
        'State-of-the-art UI/UX design integration'
      ]
    },
    {
      title: 'Enterprise Web Apps',
      desc: 'Scalable, lightning-fast cloud web platforms built on Next.js, React, and modular serverless architecture.',
      icon: <Globe size={28} className="text-circuit-glow" />,
      glowColor: 'group-hover:shadow-[0_0_30px_rgba(51,195,255,0.15)]',
      bullets: [
        'SEO-optimized Server-Side Rendering (SSR)',
        'Complex admin dashboards & SaaS integrations',
        'Robust multi-tenant user authentication'
      ]
    },
    {
      title: 'Hardened Cyber Security',
      desc: 'Comprehensive infrastructure audits, penetration testing, and compliance maps to protect your digital assets.',
      icon: <Shield size={28} className="text-secondary-container" />,
      glowColor: 'group-hover:shadow-[0_0_30px_rgba(254,212,0,0.15)]',
      bullets: [
        'Security-first DevSecOps pipeline design',
        'Infrastructure penetration and audits',
        'OWASP Top 10 compliance mapping'
      ]
    }
  ];

  return (
    <section className="py-24 relative bg-surface" id="services">
      {/* Decorative background grid */}
      <div className="absolute inset-0 circuit-grid opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="mb-16 max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-3">Our Core Expertise</p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-dark-navy mb-5 tracking-tight">
            World-Class Software Services
          </h2>
          <p className="font-body text-base sm:text-lg text-on-surface-variant leading-relaxed">
            From complex cloud architecture to sleek consumer interfaces, we deliver precision engineering and clean code at every layer.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`group glass-card p-8 rounded-3xl hover:bg-white hover:-translate-y-2 border border-outline-variant/30 transition-all duration-300 flex flex-col justify-between ${service.glowColor}`}
            >
              <div>
                <div className="w-14 h-14 rounded-2xl bg-surface-container flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="font-display text-2xl font-bold text-dark-navy mb-4 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="font-body text-sm sm:text-base text-on-surface-variant mb-6 leading-relaxed">
                  {service.desc}
                </p>
              </div>

              <ul className="space-y-3 pt-4 border-t border-outline-variant/20">
                {service.bullets.map((bullet, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-on-surface-variant">
                    <CheckCircle size={16} className="text-primary shrink-0 mt-0.5" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
