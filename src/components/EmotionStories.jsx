'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function EmotionStories() {
  const projects = [
    {
      id: 'tpfaid',
      title: 'TPFAID Platform',
      subtitle: 'Crowdfunding Platform',
      tagline: 'Empowering communities through collective empathy.',
      story: {
        problem: 'Traditional donation platforms were slow and lacked verification, causing donors to lose trust and beneficiaries to wait weeks for vital aid.',
        change: 'We built a high-performance, real-time crowdfunding system that connects donors directly to verified emergency projects.',
        achieved: 'Enabled instant disbursements, lowered processing friction by 40%, and restored donor trust globally.',
      },
      videoUrl: '/tpfvideo.mp4',
      glow: 'from-blue-600/20 via-primary/10 to-transparent',
    },
    {
      id: 'tpf-admin',
      title: 'tpf-admin System',
      subtitle: 'Management Dashboard',
      tagline: 'Orchestrating trust with absolute precision.',
      story: {
        problem: 'Administrators struggled to verify claims, moderate campaigns, and handle distribution pipelines using fragmented tools.',
        change: 'We engineered a centralized control dashboard designed specifically for campaign approval workflows, audit trails, and security.',
        achieved: 'Reduced campaign approval delay from 72 hours to 6 minutes, ensuring emergency funding arrives when needed.',
      },
      videoUrl: '/tpfadmin-video.mp4',
      glow: 'from-[#00D4FF]/20 via-[#00D4FF]/10 to-transparent',
    },
    {
      id: 'thetraceexpress',
      title: 'The Trace Express',
      subtitle: 'Courier Delivery Engine',
      tagline: 'Shrinking global logistics friction.',
      story: {
        problem: 'International courier tracking was complex, plagued by missing manifests and customs delays.',
        change: 'We designed a cross-border shipping engine with predictive customs validation and multi-carrier live tracking.',
        achieved: 'Automated international courier routing and delivered real-time tracking across 120+ countries.',
      },
      videoUrl: '/tte-video.mp4',
      glow: 'from-[#FFD400]/20 via-[#FFD400]/10 to-transparent',
    },
    {
      id: 'flowindia',
      title: 'Flow India Projects',
      subtitle: 'Brand Identity Showcase',
      tagline: 'Sculpting a digital legacy.',
      story: {
        problem: 'Flow India lacked an immersive digital presentation to convey enterprise authority to international clients.',
        change: 'We constructed a high-speed, minimalist web identity with fluid typography and dynamic project showcases.',
        achieved: 'Established a premium digital presence, driving client conversions and corporate authority.',
      },
      videoUrl: '/flowindiavideo.mp4',
      glow: 'from-purple-600/20 via-purple-500/10 to-transparent',
    }
  ];

  return (
    <section className="relative py-28 md:py-36 bg-[#0b0d14] text-white overflow-hidden" id="projects">
      {/* Divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-white/10" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="max-w-3xl mb-24">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
            className="text-xs uppercase tracking-[0.25em] font-bold text-primary mb-3"
          >
            Stories of Impact
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-tight"
          >
            Featured Case Studies.
          </motion.h2>
        </div>

        {/* Stories Listing */}
        <div className="space-y-36">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12 lg:gap-20`}
            >
              {/* Video Loop Container Frame */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.8 }}
                className="w-full lg:w-7/12 aspect-[16/9] relative rounded-3xl overflow-hidden bg-[#121212] border border-white/15 shadow-[0_25px_80px_rgba(0,0,0,0.6)] group"
              >
                {/* Visual Ambient Glow */}
                <div className={`absolute inset-0 bg-gradient-to-br ${project.glow} opacity-30 pointer-events-none z-10`} />

                {/* Video Loop */}
                <video
                  src={project.videoUrl}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover relative z-0 group-hover:scale-102 transition-transform duration-700"
                />
              </motion.div>

              {/* Story Details */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.8, delay: 0.15 }}
                className="w-full lg:w-5/12 flex flex-col justify-center"
              >
                <span className="text-xs font-bold uppercase tracking-widest text-primary block mb-2">
                  {project.subtitle}
                </span>
                <h3 className="font-display text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
                  {project.title}
                </h3>
                <p className="font-body text-base text-white/80 italic font-light mb-8 leading-relaxed">
                  "{project.tagline}"
                </p>

                {/* Story Segments */}
                <div className="space-y-5 border-l-2 border-white/10 pl-6">
                  <div>
                    <h4 className="text-[11px] uppercase tracking-widest text-white/40 font-bold mb-1">The Problem</h4>
                    <p className="text-sm text-[#cbcbcb] font-light leading-relaxed">
                      {project.story.problem}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-[11px] uppercase tracking-widest text-primary font-bold mb-1">The Solution</h4>
                    <p className="text-sm text-[#cbcbcb] font-light leading-relaxed">
                      {project.story.change}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-[11px] uppercase tracking-widest text-lemon-yellow font-bold mb-1">The Result</h4>
                    <p className="text-sm text-[#cbcbcb] font-light leading-relaxed">
                      {project.story.achieved}
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
