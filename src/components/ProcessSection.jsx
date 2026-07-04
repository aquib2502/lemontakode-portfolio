'use client';

import React from 'react';
import { Compass, Code2, HeartHandshake } from 'lucide-react';

export default function ProcessSection() {
  const steps = [
    {
      number: '1',
      title: 'Discovery & Feasibility',
      icon: <Compass size={24} className="text-white" />,
      subTitle: 'Strategic Alignment',
      desc: 'We perform deep-dive interviews and technical validation to craft a detailed Product Roadmap and functional design specifications before writing a single line of code.'
    },
    {
      number: '2',
      title: 'Agile Software Dev',
      icon: <Code2 size={24} className="text-white" />,
      subTitle: 'Modern Sprints',
      desc: 'Our engineers construct highly scalable architectures using Clean Code patterns. You receive bi-weekly sandbox deployments and full access to our Git repositories.'
    },
    {
      number: '3',
      title: 'Support & Security Auditing',
      icon: <HeartHandshake size={24} className="text-white" />,
      subTitle: '24/7 Operations',
      desc: 'Following deployment, we provide system monitoring, performance tuning, and scheduled security checks to ensure your application scales safely as you grow.'
    }
  ];

  return (
    <section className="py-24 bg-surface" id="process">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-20">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-3">Our Methodology</p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-dark-navy tracking-tight">
            Engineered For Reliable Delivery
          </h2>
        </div>

        <div className="relative">
          {/* Vertical connection line for Desktop */}
          <div className="absolute left-1/2 top-8 bottom-8 w-0.5 bg-outline-variant/30 -translate-x-1/2 hidden md:block" />

          <div className="space-y-16 md:space-y-24">
            {steps.map((step, idx) => {
              const isEven = idx % 2 === 1;
              return (
                <div key={idx} className={`relative flex flex-col md:flex-row items-center w-full ${isEven ? 'md:flex-row-reverse' : ''}`}>
                  {/* Text side */}
                  <div className={`w-full md:w-5/12 ${isEven ? 'md:pl-12 text-left' : 'md:pr-12 md:text-right'} mb-6 md:mb-0`}>
                    <span className="text-xs font-semibold text-primary uppercase tracking-widest">
                      {step.subTitle}
                    </span>
                    <h3 className="font-display text-2xl font-bold text-dark-navy mt-1 mb-3">
                      {step.title}
                    </h3>
                    <p className="font-body text-sm sm:text-base text-on-surface-variant leading-relaxed">
                      {step.desc}
                    </p>
                  </div>

                  {/* Bullet center */}
                  <div className="relative z-10 my-4 md:my-0 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold text-lg shadow-[0_0_20px_rgba(0,80,203,0.3)]">
                      {step.icon}
                    </div>
                  </div>

                  {/* Spacer side */}
                  <div className="w-full md:w-5/12 hidden md:block" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
