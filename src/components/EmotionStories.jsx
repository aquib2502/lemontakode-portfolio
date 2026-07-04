'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function EmotionStories() {
  const projects = [
    {
      id: 'tpfaid',
      title: 'TPFAID',
      subtitle: 'Crowdfunding Platform',
      tagline: 'Empowering communities through collective empathy.',
      story: {
        problem: 'Traditional donation platforms were slow, confusing, and lacked transparency, causing donors to lose trust and beneficiaries to wait weeks for vital aid.',
        change: 'We built a high-performance, real-time crowdfunding system that connects donors and projects with complete, trackable verification at every stage.',
        achieved: 'Enabled instant disbursements, lowered processing friction by 40%, and created a transparent pathway that restored trust for thousands of global donors.',
      },
      videoUrl: '/tpfvideo.mp4',
      colorTheme: 'from-blue-600/10 via-primary/5 to-transparent',
    },
    {
      id: 'tpf-admin',
      title: 'tpf-admin',
      subtitle: 'Management Dashboard',
      tagline: 'Orchestrating trust with absolute precision.',
      story: {
        problem: 'Administrators struggled to verify claims, moderate campaigns, and handle distribution pipelines using disjointed, fragile spreadsheets.',
        change: 'We compiled a centralized, secure control dashboard designed specifically to handle campaign approval workflows, audit trails, and automatic transactions.',
        achieved: 'Reduced campaign approval delay from 72 hours to 6 minutes, ensuring emergency funding reaches campaigns before critical deadlines.',
      },
      videoUrl: '/tpfadmin-video.mp4',
      colorTheme: 'from-[#00D4FF]/10 via-[#00D4FF]/5 to-transparent',
    },
    {
      id: 'thetraceexpress',
      title: 'The Trace Express',
      subtitle: 'Courier Delivery Platform',
      tagline: 'Shrinking the global trade gap.',
      story: {
        problem: 'International shipping and courier tracking felt like a black box, full of hidden fees, missing paperwork, and customs delays.',
        change: 'We designed a cross-border shipping engine with predictive customs validation, automated manifests, and multi-carrier live integration.',
        achieved: 'Successfully automated international courier routing and delivered a real-time tracking interface that handles shipments across 120+ countries.',
      },
      videoUrl: '/tte-video.mp4',
      colorTheme: 'from-[#FFD400]/10 via-[#FFD400]/5 to-transparent',
    },
    {
      id: 'flowindia',
      title: 'Flow India Projects',
      subtitle: 'Brand Identity Showcase',
      tagline: 'Designing a legacy online.',
      story: {
        problem: 'FlowIndia lacked a digital signature to present their high-end projects, making it difficult to convey authority to enterprise clients.',
        change: 'We sculpted a minimalist, high-speed, immersive web identity using custom typography, massive whitespace, and fluid animations.',
        achieved: 'Established a premium brand benchmark, increasing client engagement and creating a highly professional corporate introduction.',
      },
      videoUrl: '/flowindiavideo.mp4',
      colorTheme: 'from-purple-600/10 via-purple-500/5 to-transparent',
    }
  ];

  return (
    <section className="relative py-32 bg-[#020B1E] text-soft-white overflow-hidden" id="projects">
      {/* Background divider line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-primary/5 rounded-full blur-[180px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="max-w-3xl mb-32 text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-xs uppercase tracking-[0.25em] font-bold text-primary mb-4"
          >
            Stories of Impact
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-120px" }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="font-display text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.1] text-white"
          >
            Technology is only meaningful when it helps people.
          </motion.h2>
        </div>

        {/* Stories Listing */}
        <div className="space-y-48">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-16 lg:gap-24`}
            >
              {/* Loop Video Frame */}
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                className="w-full lg:w-7/12 aspect-[16/9] relative rounded-3xl overflow-hidden bg-black/40 border border-white/10 group shadow-[0_30px_100px_rgba(0,0,0,0.5)]"
              >
                {/* Visual Glow Layer */}
                <div className={`absolute inset-0 bg-gradient-to-br ${project.colorTheme} opacity-20 pointer-events-none z-10`} />

                {/* Video Loop Element */}
                <video
                  src={project.videoUrl}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover relative z-0"
                />
              </motion.div>

              {/* Story Narrative */}
              <div className="w-full lg:w-5/12 flex flex-col justify-center">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                >
                  <span className="text-sm font-semibold uppercase tracking-wider text-primary block mb-2">
                    {project.subtitle}
                  </span>
                  <h3 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight mb-4">
                    {project.title}
                  </h3>
                  <p className="font-body text-lg text-white/80 italic font-light mb-8 leading-relaxed">
                    "{project.tagline}"
                  </p>
                </motion.div>

                {/* The Emotional Story Segments */}
                <div className="space-y-6 border-l border-white/10 pl-6">
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 1, delay: 0.1 }}
                  >
                    <h4 className="text-xs uppercase tracking-widest text-white/40 font-bold mb-1">The Problem</h4>
                    <p className="text-sm text-white/70 font-light leading-relaxed">
                      {project.story.problem}
                    </p>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 1, delay: 0.2 }}
                  >
                    <h4 className="text-xs uppercase tracking-widest text-primary font-bold mb-1">The Change</h4>
                    <p className="text-sm text-white/70 font-light leading-relaxed">
                      {project.story.change}
                    </p>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 1, delay: 0.3 }}
                  >
                    <h4 className="text-xs uppercase tracking-widest text-lemon-yellow font-bold mb-1">What Changed</h4>
                    <p className="text-sm text-white/70 font-light leading-relaxed">
                      {project.story.achieved}
                    </p>
                  </motion.div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
