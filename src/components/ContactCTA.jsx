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
    <section className="relative min-h-screen py-36 bg-[#FAFAFA] text-dark-navy flex flex-col justify-center overflow-hidden" id="contact">
      {/* Massive Brand Watermark Behind Section */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-0 overflow-hidden">
        <span className="text-[12vw] font-display font-extrabold uppercase tracking-[0.15em] text-[#071D49] opacity-[0.025] select-none whitespace-nowrap">
          LemontaKode
        </span>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-stretch my-auto">
        {/* Left Column (Grid span 5) - Formatted for height balance and typography */}
        <div className="lg:col-span-5 flex flex-col justify-between py-2 text-left space-y-12">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-primary/5 border border-primary/10 text-primary text-[10px] font-bold uppercase tracking-[0.25em]">
              <span className="h-1 w-1 rounded-full bg-primary" />
              Partnership
            </div>
            
            <h2 className="font-display text-4xl sm:text-5xl md:text-5.5xl font-extrabold tracking-tight leading-[1.1] text-gradient-blue">
              Let's build something remarkable together.
            </h2>

            <p className="font-body text-base text-on-surface-variant leading-relaxed font-light">
              Fresh ideas deserve exceptional technology. Let’s coordinate a scoping call to map your product roadmap.
            </p>
          </div>

          {/* Structured Info Block to balance form height */}
          <div className="space-y-8 pt-6 border-t border-dark-navy/5">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-primary/5 border border-primary/10 flex items-center justify-center text-primary shrink-0">
                <ShieldCheck size={18} />
              </div>
              <div>
                <h4 className="text-xs uppercase tracking-widest font-bold text-dark-navy mb-1">Architecture Roadmap</h4>
                <p className="text-xs text-on-surface-variant/80 font-light leading-relaxed">
                  Every engagement starts with a comprehensive 30-minute scoping workshop.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-primary/5 border border-primary/10 flex items-center justify-center text-primary shrink-0">
                <Mail size={18} />
              </div>
              <div>
                <h4 className="text-xs uppercase tracking-widest font-bold text-dark-navy mb-1">Direct Connection</h4>
                <p className="text-xs text-on-surface-variant/80 font-light leading-relaxed">
                  Email hello@lemontakode.tech for immediate corporate assistance.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-primary/5 border border-primary/10 flex items-center justify-center text-primary shrink-0">
                <MapPin size={18} />
              </div>
              <div>
                <h4 className="text-xs uppercase tracking-widest font-bold text-dark-navy mb-1">Global Presence</h4>
                <p className="text-xs text-on-surface-variant/80 font-light leading-relaxed">
                  Orchestrating engineering execution from London and Bangalore.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column (Grid span 7) - Clean Minimal Form */}
        <div className="lg:col-span-7 flex items-center">
          <div className="w-full bg-white rounded-3xl border border-dark-navy/10 shadow-[0_20px_60px_rgba(7,29,73,0.03)] p-8 sm:p-12 relative overflow-hidden">
            <AnimatePresence mode="wait">
              {!submitted ? (
                <form
                  onSubmit={handleSubmit}
                  className="space-y-6"
                >
                  <div className="space-y-1.5">
                    <label className="text-[10px] uppercase tracking-wider font-semibold text-on-surface-variant/70 block">Full Name</label>
                    <input
                      type="text"
                      required
                      placeholder="Enter your name"
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      className="w-full bg-[#FAFAFA] border border-dark-navy/10 rounded-xl p-4 text-xs focus:outline-none focus:border-primary transition-all duration-300"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[10px] uppercase tracking-wider font-semibold text-on-surface-variant/70 block">Email Address</label>
                    <input
                      type="email"
                      required
                      placeholder="name@company.com"
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      className="w-full bg-[#FAFAFA] border border-dark-navy/10 rounded-xl p-4 text-xs focus:outline-none focus:border-primary transition-all duration-300"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[10px] uppercase tracking-wider font-semibold text-on-surface-variant/70 block">Project Scope</label>
                    <select
                      value={formState.scope}
                      onChange={(e) => setFormState({ ...formState, scope: e.target.value })}
                      className="w-full bg-[#FAFAFA] border border-dark-navy/10 rounded-xl p-4 text-xs focus:outline-none focus:border-primary transition-all duration-300 text-on-surface"
                    >
                      <option disabled>Select a project scope</option>
                      <option>Mobile Experiences</option>
                      <option>Web Platforms</option>
                      <option>Business Software</option>
                      <option>Cyber Security Audit</option>
                      <option>User Experience Design</option>
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[10px] uppercase tracking-wider font-semibold text-on-surface-variant/70 block">Message</label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Tell us about your goals..."
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      className="w-full bg-[#FAFAFA] border border-dark-navy/10 rounded-xl p-4 text-xs focus:outline-none focus:border-primary transition-all duration-300 resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-primary hover:bg-primary-container text-white py-4 rounded-xl font-semibold text-xs uppercase tracking-wider transition-all duration-300 active:scale-[0.98] flex items-center justify-center gap-2 shadow-sm cursor-pointer"
                  >
                    Send Message
                    <ArrowRight size={14} />
                  </button>
                </form>
              ) : (
                <div
                  className="flex flex-col items-center text-center py-12"
                >
                  <div className="w-14 h-14 rounded-full bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-500 mb-6">
                    <CheckCircle2 size={28} />
                  </div>
                  <h3 className="font-display text-2xl font-bold text-dark-navy mb-2">Message Transmitted</h3>
                  <p className="font-body text-xs text-on-surface-variant/80 max-w-xs font-light">
                    Thank you, {formState.name}. We will follow up regarding your scope options within 12 hours.
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
