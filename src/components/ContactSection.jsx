'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Mail, MapPin, Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';

const SERVICE_ID = 'service_2xon1oq';
const TEMPLATE_ID = 'template_xovznfr';
const PUBLIC_KEY = 'kvwsQoFKEDH5a4KKL';

export default function ContactSection() {
  const formRef = useRef(null);
  const [formData, setFormData] = useState({
    from_name: '',
    from_email: '',
    phone: '',
    subject: 'Mobile App Development',
    message: ''
  });
  

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // 'idle' | 'sending' | 'success' | 'error'
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    if (typeof window !== 'undefined' && window.emailjs) {
      window.emailjs.init(PUBLIC_KEY);
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.from_name.trim()) {
      newErrors.from_name = 'Name is required';
    }

    if (!formData.from_email.trim()) {
      newErrors.from_email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.from_email.trim())) {
      newErrors.from_email = 'Please enter a valid email address';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage('');

    if (!validate()) {
      return;
    }

    setStatus('sending');

    try {
      if (typeof window !== 'undefined' && window.emailjs) {
        window.emailjs.init(PUBLIC_KEY);
        await window.emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current || e.target);
      } else {
        await new Promise((resolve, reject) => {
          const script = document.createElement('script');
          script.src = 'https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js';
          script.onload = () => {
            if (window.emailjs) {
              window.emailjs.init(PUBLIC_KEY);
              resolve();
            } else {
              reject(new Error('EmailJS SDK failed to load'));
            }
          };
          script.onerror = () => reject(new Error('Failed to load EmailJS SDK script'));
          document.head.appendChild(script);
        });
        await window.emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current || e.target);
      }

      setStatus('success');
      setFormData({
        from_name: '',
        from_email: '',
        phone: '',
        subject: 'Mobile App Development',
        message: ''
      });
      setErrors({});
      if (formRef.current) formRef.current.reset();
    } catch (err) {
      console.error('EmailJS Form Submission Error:', err);
      setStatus('error');
      setErrorMessage(err?.text || err?.message || 'Failed to send message. Please try again.');
    }
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
            {status === 'success' ? (
              <div className="py-16 text-center flex flex-col items-center justify-center h-full">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-6 animate-bounce">
                  <CheckCircle2 size={36} />
                </div>
                <h3 className="font-display text-2xl font-bold text-dark-navy mb-2">Message Sent!</h3>
                <p className="text-sm text-on-surface-variant max-w-sm">
                  Thank you for reaching out. A senior engineering manager will contact you within 24 hours.
                </p>
                <button
                  onClick={() => setStatus('idle')}
                  className="mt-8 text-sm font-semibold text-primary hover:underline cursor-pointer"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6" noValidate>
                {status === 'error' && (
                  <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/20 flex items-start gap-3 text-red-600 text-sm">
                    <AlertCircle size={18} className="shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold block">Submission Error</span>
                      <span>{errorMessage}</span>
                    </div>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-on-surface-variant/70 uppercase tracking-wider">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="from_name"
                      required
                      placeholder="John Doe"
                      value={formData.from_name}
                      onChange={handleChange}
                      className={`w-full bg-surface-container-low border ${
                        errors.from_name ? 'border-red-500' : 'border-outline-variant/20'
                      } rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:bg-white transition-all text-on-surface`}
                    />
                    {errors.from_name && <p className="text-xs text-red-500">{errors.from_name}</p>}
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold text-on-surface-variant/70 uppercase tracking-wider">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="from_email"
                      required
                      placeholder="john@company.com"
                      value={formData.from_email}
                      onChange={handleChange}
                      className={`w-full bg-surface-container-low border ${
                        errors.from_email ? 'border-red-500' : 'border-outline-variant/20'
                      } rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:bg-white transition-all text-on-surface`}
                    />
                    {errors.from_email && <p className="text-xs text-red-500">{errors.from_email}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-on-surface-variant/70 uppercase tracking-wider">
                      Phone Number (Optional)
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="+1 (555) 000-0000"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full bg-surface-container-low border border-outline-variant/20 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:bg-white transition-all text-on-surface"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold text-on-surface-variant/70 uppercase tracking-wider">
                      Subject (Optional)
                    </label>
                    <input
                      type="text"
                      name="subject"
                      placeholder="e.g. Mobile App Development"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full bg-surface-container-low border border-outline-variant/20 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:bg-white transition-all text-on-surface"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-on-surface-variant/70 uppercase tracking-wider">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    required
                    placeholder="Tell us about your project goals and timeline..."
                    value={formData.message}
                    onChange={handleChange}
                    className={`w-full bg-surface-container-low border ${
                      errors.message ? 'border-red-500' : 'border-outline-variant/20'
                    } rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:bg-white transition-all text-on-surface`}
                  />
                  {errors.message && <p className="text-xs text-red-500">{errors.message}</p>}
                </div>

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="w-full bg-primary hover:bg-primary-container text-white py-4 rounded-xl font-display text-base font-bold hover:shadow-[0px_0px_20px_rgba(0,102,255,0.3)] transition-all active:scale-[0.98] flex items-center justify-center gap-2 group cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {status === 'sending' ? (
                    <>
                      <Loader2 size={18} className="animate-spin shrink-0" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
