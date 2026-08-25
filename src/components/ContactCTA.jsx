'use client';

import React, { useState, useEffect, useRef } from 'react';
import { CheckCircle2, AlertCircle, Loader2, ArrowRight } from 'lucide-react';

const SERVICE_ID = 'service_2xon1oq';
const TEMPLATE_ID = 'template_xovznfr';
const PUBLIC_KEY = 'kvwsQoFKEDH5a4KKL';

export default function ContactCTA() {
  const formRef = useRef(null);
  const [formData, setFormData] = useState({
    from_name: '',
    from_email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle');
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
    if (!formData.from_name.trim()) newErrors.from_name = 'Name is required';
    if (!formData.from_email.trim()) {
      newErrors.from_email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.from_email.trim())) {
      newErrors.from_email = 'Please enter a valid email address';
    }
    if (!formData.message.trim()) newErrors.message = 'Message is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage('');

    if (!validate()) return;

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
      setFormData({ from_name: '', from_email: '', phone: '', subject: '', message: '' });
      setErrors({});
    } catch (err) {
      console.error('EmailJS Submission Error:', err);
      setStatus('error');
      setErrorMessage(err?.text || err?.message || 'Failed to send message. Please try again.');
    }
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-[#FFFFFF] text-[#111111] border-b border-[#E5E2D9] select-none">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        
        {/* Left Column: Headline & Direct Contact */}
        <div className="lg:col-span-6 space-y-6">
          <div className="flex items-center gap-3">
            <span className="h-px w-6 bg-[#D9A74A]" />
            <span className="font-display text-[11px] font-semibold uppercase tracking-[0.2em] text-[#6F6C65]">
              START A CONVERSATION
            </span>
          </div>

          <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-[#111111] leading-[1.05]">
            Have something that needs{' '}
            <span className="font-serif-italic font-normal text-[#111111] relative inline-block">
              fixing?
              <span className="absolute bottom-1 left-0 right-0 h-[2px] bg-[#D9A74A]/60" />
            </span>
          </h2>

          <p className="font-body text-base sm:text-lg text-[#6F6C65] leading-relaxed max-w-lg">
            Tell us what&apos;s slowing your business down. We&apos;ll help you figure out what should happen next.
          </p>

          <div className="pt-6 border-t border-[#E5E2D9] space-y-4 font-display text-xs tracking-wider text-[#6F6C65]">
            <div>
              <span className="uppercase text-[#111111] font-semibold block mb-1">Direct Contact</span>
              <a href="mailto:contact@lemontakode.com" className="text-[#2563EB] underline hover:text-[#D9A74A] transition-colors text-sm font-semibold">
                contact@lemontakode.com
              </a>
            </div>
            <div>
              <span className="uppercase text-[#111111] font-semibold block mb-1">Response Commitment</span>
              <span>Our engineering team responds within 12 hours.</span>
            </div>
          </div>
        </div>

        {/* Right Column: Clean Form */}
        <div className="lg:col-span-6">
          {status === 'success' ? (
            <div className="p-8 rounded-xl border border-[#E5E2D9] bg-[#F7F5F0] shadow-sm text-center space-y-4">
              <div className="w-10 h-10 rounded-full bg-[#D9A74A]/15 text-[#D9A74A] flex items-center justify-center mx-auto mb-2">
                <CheckCircle2 size={22} className="text-[#D9A74A]" />
              </div>
              <div className="font-display text-[11px] text-[#D9A74A] font-bold uppercase tracking-widest">INQUIRY RECEIVED</div>
              <h3 className="font-display text-xl sm:text-2xl font-bold text-[#111111]">Thank you. Your message has been sent.</h3>
              <p className="font-body text-sm text-[#6F6C65] max-w-md mx-auto leading-relaxed">
                Our engineering team will review your inquiry and get back to you within 12 hours.
              </p>
              <button
                type="button"
                onClick={() => setStatus('idle')}
                className="mt-2 text-xs font-display font-bold uppercase tracking-wider text-[#111111] underline hover:text-[#2563EB] transition-colors cursor-pointer"
              >
                Send another message →
              </button>
            </div>
          ) : (
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="space-y-5 rounded-xl border border-[#E5E2D9] bg-[#F7F5F0] p-6 sm:p-8 shadow-sm"
              noValidate
            >
              {status === 'error' && (
                <div className="p-3.5 rounded-lg bg-red-500/10 border border-red-500/20 flex items-start gap-2.5 text-red-700 text-xs sm:text-sm">
                  <AlertCircle size={16} className="shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold block">Submission Error</span>
                    <span>{errorMessage}</span>
                  </div>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="space-y-1.5">
                  <label className="font-display text-xs uppercase tracking-wider text-[#6F6C65] block font-medium">
                    Your Name <span className="text-[#D9A74A]">*</span>
                  </label>
                  <input
                    type="text"
                    name="from_name"
                    required
                    placeholder="Alex Morgan"
                    value={formData.from_name}
                    onChange={handleChange}
                    className={`w-full bg-[#FFFFFF] border ${
                      errors.from_name ? 'border-red-500' : 'border-[#E5E2D9]'
                    } rounded-lg p-3 text-sm text-[#111111] focus:outline-none focus:border-[#2563EB] transition-colors`}
                  />
                  {errors.from_name && <p className="text-xs text-red-500 mt-1">{errors.from_name}</p>}
                </div>

                <div className="space-y-1.5">
                  <label className="font-display text-xs uppercase tracking-wider text-[#6F6C65] block font-medium">
                    Email Address <span className="text-[#D9A74A]">*</span>
                  </label>
                  <input
                    type="email"
                    name="from_email"
                    required
                    placeholder="alex@company.com"
                    value={formData.from_email}
                    onChange={handleChange}
                    className={`w-full bg-[#FFFFFF] border ${
                      errors.from_email ? 'border-red-500' : 'border-[#E5E2D9]'
                    } rounded-lg p-3 text-sm text-[#111111] focus:outline-none focus:border-[#2563EB] transition-colors`}
                  />
                  {errors.from_email && <p className="text-xs text-red-500 mt-1">{errors.from_email}</p>}
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="font-display text-xs uppercase tracking-wider text-[#6F6C65] block font-medium">
                  What is slowing your business down?
                </label>
                <input
                  type="text"
                  name="subject"
                  placeholder="e.g. Operational bottleneck, manual process, legacy web system"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full bg-[#FFFFFF] border border-[#E5E2D9] rounded-lg p-3 text-sm text-[#111111] focus:outline-none focus:border-[#2563EB] transition-colors"
                />
              </div>

              <div className="space-y-1.5">
                <label className="font-display text-xs uppercase tracking-wider text-[#6F6C65] block font-medium">
                  Details <span className="text-[#D9A74A]">*</span>
                </label>
                <textarea
                  name="message"
                  required
                  rows={4}
                  placeholder="Tell us about the problem or project..."
                  value={formData.message}
                  onChange={handleChange}
                  className={`w-full bg-[#FFFFFF] border ${
                    errors.message ? 'border-red-500' : 'border-[#E5E2D9]'
                  } rounded-lg p-3 text-sm text-[#111111] focus:outline-none focus:border-[#2563EB] transition-colors resize-none`}
                />
                {errors.message && <p className="text-xs text-red-500 mt-1">{errors.message}</p>}
              </div>

              <button
                type="submit"
                disabled={status === 'sending'}
                className="btn-editorial-primary w-full py-3.5 text-center justify-center font-bold disabled:opacity-60"
              >
                {status === 'sending' ? (
                  <>
                    <Loader2 size={16} className="animate-spin shrink-0 text-[#D9A74A]" />
                    <span>Sending inquiry...</span>
                  </>
                ) : (
                  <>
                    <span>Start a conversation</span>
                    <ArrowRight size={14} className="text-[#D9A74A]" />
                  </>
                )}
              </button>
            </form>
          )}
        </div>

      </div>
    </section>
  );
}



