'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, CheckCircle2, ShieldCheck, Mail, MapPin } from 'lucide-react';

export default function ContactCTA() {
  const [formState, setFormState] = useState({ name: '', email: '', scope: 'Select a project scope', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="relative py-28 md:py-36 bg-[#0b0d14] text-white flex flex-col justify-center overflow-hidden" id="contact">
      {/* Background Watermark Text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-0 overflow-hidden">
        <span className="text-[14vw] font-display font-extrabold uppercase tracking-[0.15em] text-white opacity-[0.02] whitespace-nowrap">
          LemontaKode
        </span>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-16 items-stretch">
        {/* Left Column: Direct Info & Partnership */}
        <div className="lg:col-span-5 flex flex-col justify-between py-2 space-y-12">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest">
              <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
              Partnership
            </div>
            
            <h2 className="font-display text-4xl sm:text-5xl font-extrabold tracking-tight leading-tight text-white">
              Let's build something <span className="text-gradient-lemon">remarkable</span> together.
            </h2>

            <p className="font-body text-base text-[#cbcbcb] leading-relaxed font-light">
              Fresh ideas deserve exceptional technology. Schedule a scoping call with our engineering team to map your digital roadmap.
            </p>
          </div>

          <div className="space-y-6 pt-8 border-t border-white/10">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-[#121212] border border-white/10 flex items-center justify-center text-primary shrink-0">
                <ShieldCheck size={20} />
              </div>
              <div>
                <h4 className="text-xs uppercase tracking-widest font-bold text-white mb-1">Architecture Workshop</h4>
                <p className="text-xs text-[#cbcbcb] font-light leading-relaxed">
                  Every engagement starts with a clear 30-minute scoping workshop.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-[#121212] border border-white/10 flex items-center justify-center text-primary shrink-0">
                <Mail size={20} />
              </div>
              <div>
                <h4 className="text-xs uppercase tracking-widest font-bold text-white mb-1">Direct Connection</h4>
                <p className="text-xs text-[#cbcbcb] font-light leading-relaxed">
                  Email hello@lemontakode.tech for immediate corporate assistance.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-[#121212] border border-white/10 flex items-center justify-center text-primary shrink-0">
                <MapPin size={20} />
              </div>
              <div>
                <h4 className="text-xs uppercase tracking-widest font-bold text-white mb-1">Global Delivery</h4>
                <p className="text-xs text-[#cbcbcb] font-light leading-relaxed">
                  Executing engineering projects globally across America, Europe, and Asia.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Clean Form */}
        <div className="lg:col-span-7 flex items-center">
          <div className="w-full bg-[#121212] rounded-3xl border border-white/10 p-8 sm:p-12 relative overflow-hidden shadow-2xl">
            <AnimatePresence mode="wait">
              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-wider font-semibold text-[#cbcbcb] block">Full Name</label>
                    <input
                      type="text"
                      required
                      placeholder="Enter your name"
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      className="w-full bg-[#0b0d14] border border-white/15 rounded-xl p-4 text-sm text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-wider font-semibold text-[#cbcbcb] block">Email Address</label>
                    <input
                      type="email"
                      required
                      placeholder="name@company.com"
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      className="w-full bg-[#0b0d14] border border-white/15 rounded-xl p-4 text-sm text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-wider font-semibold text-[#cbcbcb] block">Project Scope</label>
                    <select
                      value={formState.scope}
                      onChange={(e) => setFormState({ ...formState, scope: e.target.value })}
                      className="w-full bg-[#0b0d14] border border-white/15 rounded-xl p-4 text-sm text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                    >
                      <option disabled>Select a project scope</option>
                      <option>Mobile Experiences</option>
                      <option>Web Platforms</option>
                      <option>Business Software</option>
                      <option>Cyber Security Audit</option>
                      <option>UX Product Design</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-wider font-semibold text-[#cbcbcb] block">Message</label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Tell us about your project..."
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      className="w-full bg-[#0b0d14] border border-white/15 rounded-xl p-4 text-sm text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-primary hover:bg-[#4b72e6] text-white py-4 rounded-xl font-bold text-xs uppercase tracking-wider transition-all duration-300 active:scale-[0.98] flex items-center justify-center gap-2 shadow-[0_10px_30px_rgba(98,137,255,0.3)] cursor-pointer"
                  >
                    Send Message
                    <ArrowRight size={16} />
                  </button>
                </form>
              ) : (
                <div className="flex flex-col items-center text-center py-12">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-6">
                    <CheckCircle2 size={32} />
                  </div>
                  <h3 className="font-display text-2xl font-bold text-white mb-2">Message Transmitted</h3>
                  <p className="font-body text-sm text-[#cbcbcb] max-w-xs font-light">
                    Thank you, {formState.name}. Our engineering leads will reply to your scope options within 12 hours.
                  </p>
                </div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
