'use client';

import React, { useState } from 'react';
import { Mail, MapPin, Send, CheckCircle2 } from 'lucide-react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    scope: 'Mobile App Development',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate API request
    setTimeout(() => {
      setIsSubmitted(true);
      setFormData({ name: '', email: '', scope: 'Mobile App Development', message: '' });
    }, 600);
  };

  return (
    <section className="py-24 relative bg-surface-container-low" id="contact">
      {/* Decorative Grid */}
      <div className="absolute inset-0 circuit-grid opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-3">Work With Us</p>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-dark-navy mb-6 tracking-tight">
              Let&apos;s Architect Something <span className="text-primary">Extraordinary</span>
            </h2>
            <p className="font-body text-base sm:text-lg text-on-surface-variant mb-12 leading-relaxed">
              Whether you have a fully designed RFP or just a visionary idea, we are ready to listen, advise, and execute.
            </p>

            <div className="space-y-8">
              <div className="flex items-center gap-6">
                <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center text-primary shadow-sm">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-xs font-semibold text-outline uppercase tracking-wider">Email Us</p>
                  <p className="text-base sm:text-lg font-bold text-dark-navy">hello@lemontakode.tech</p>
                </div>
              </div>

              <div className="flex items-center gap-6">
                <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center text-primary shadow-sm">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-xs font-semibold text-outline uppercase tracking-wider">Global HQ</p>
                  <p className="text-base sm:text-lg font-bold text-dark-navy">Bangalore &amp; London</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form Card */}
          <div className="glass-card p-8 sm:p-10 rounded-3xl border border-outline-variant/30 shadow-lg relative">
            {isSubmitted ? (
              <div className="py-16 text-center flex flex-col items-center justify-center h-full">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-6 animate-bounce">
                  <CheckCircle2 size={36} />
                </div>
                <h3 className="font-display text-2xl font-bold text-dark-navy mb-2">Message Sent!</h3>
                <p className="text-sm text-on-surface-variant max-w-sm">
                  Thank you for reaching out. A senior engineering manager will contact you within 24 hours.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="mt-8 text-sm font-semibold text-primary hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-on-surface-variant/70 uppercase tracking-wider">Full Name</label>
                    <input
                      type="text"
                      required
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-surface-container-low border border-outline-variant/20 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:bg-white transition-all text-on-surface"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-on-surface-variant/70 uppercase tracking-wider">Email Address</label>
                    <input
                      type="email"
                      required
                      placeholder="john@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-surface-container-low border border-outline-variant/20 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:bg-white transition-all text-on-surface"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-on-surface-variant/70 uppercase tracking-wider">Project Scope</label>
                  <select
                    value={formData.scope}
                    onChange={(e) => setFormData({ ...formData, scope: e.target.value })}
                    className="w-full bg-surface-container-low border border-outline-variant/20 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:bg-white transition-all text-on-surface"
                  >
                    <option>Mobile App Development</option>
                    <option>Enterprise Web App</option>
                    <option>Cyber Security Audit</option>
                    <option>Custom Cloud Architecture</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-on-surface-variant/70 uppercase tracking-wider">Message</label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Tell us about your project goals and timeline..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-surface-container-low border border-outline-variant/20 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:bg-white transition-all text-on-surface"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary-container text-white py-4 rounded-xl font-display text-base font-bold hover:shadow-[0px_0px_20px_rgba(0,102,255,0.3)] transition-all active:scale-[0.98] flex items-center justify-center gap-2 group cursor-pointer"
                >
                  Send Message
                  <Send size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
