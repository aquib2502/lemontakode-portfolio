'use client';

import React, { useState, useEffect, useRef } from 'react';
import { CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';

const SERVICE_ID = 'service_2xon1oq';
const TEMPLATE_ID = 'template_xovznfr';
const PUBLIC_KEY = 'kvwsQoFKEDH5a4KKL';

const scopes = ['Web Application', 'Mobile App', 'Business Automation', 'UX & Product Design', 'Security Audit'];

export default function ContactCTA() {
  const formRef = useRef(null);
  const [formData, setFormData] = useState({
    from_name: '',
    from_email: '',
    phone: '',
    subject: 'Web Application',
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

  const handleScopeSelect = (scope) => {
    setFormData((prev) => ({ ...prev, subject: scope }));
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
        // Fallback dynamic loading if script hasn't loaded yet
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
        subject: 'Web Application',
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
    <section className="theme-ivory py-28 md:py-36 border-t border-black/10 select-none" id="contact">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
        {/* Left Column: High-Contrast Editorial Statement */}
        <div className="lg:col-span-5 space-y-8">
          <div className="font-mono-tech text-xs tracking-[0.2em] text-[#5a5c66] uppercase">
            06 // START A CONVERSATION
          </div>

          <h2 className="font-display text-4xl sm:text-6xl font-extrabold tracking-tight !text-[#121316] leading-[1.05]">
            Have a problem to solve? <br />
            <span className="font-serif-italic font-normal text-[#9e8300]">Let's build it properly.</span>
          </h2>

          <p className="font-body text-base sm:text-lg !text-[#2a2c33] max-w-md font-normal leading-relaxed">
            Tell us about your business goals. Our engineering lead will respond within 12 hours with a clear action plan.
          </p>

          <div className="font-mono-tech text-xs text-[#5a5c66] space-y-2 pt-4 border-t border-black/10">
            <div>DIRECT EMAIL // hello@lemontakode.tech</div>
            <div>GLOBAL DELIVERY // London · Bangalore · Remote</div>
          </div>
        </div>

        {/* Right Column: Custom Form */}
        <div className="lg:col-span-7">
          {status === 'success' ? (
            <div className="bg-[#eae8e3] p-10 rounded-2xl border border-black/15 text-center space-y-4 shadow-sm">
              <div className="w-12 h-12 rounded-full bg-[#9e8300]/10 text-[#9e8300] flex items-center justify-center mx-auto mb-2">
                <CheckCircle2 size={32} />
              </div>
              <div className="font-mono-tech text-xs text-[#9e8300] uppercase tracking-widest">TRANSMISSION RECEIVED</div>
              <h3 className="font-display text-2xl font-bold text-[#121316]">Thank you! Your message has been sent.</h3>
              <p className="font-body text-sm text-[#2a2c33] font-normal max-w-xs mx-auto">
                Our lead engineer will review your project requirements and respond within 12 hours.
              </p>
              <button
                type="button"
                onClick={() => setStatus('idle')}
                className="mt-4 text-xs font-mono-tech font-bold uppercase tracking-wider text-[#121316] underline hover:text-[#9e8300] transition-colors cursor-pointer"
              >
                Send Another Message →
              </button>
            </div>
          ) : (
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="space-y-6 bg-[#eae8e3] p-8 sm:p-10 rounded-2xl border border-black/15 shadow-sm"
              noValidate
            >
              {status === 'error' && (
                <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/20 flex items-start gap-3 text-red-700 text-sm">
                  <AlertCircle size={18} className="shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold block">Submission Error</span>
                    <span>{errorMessage}</span>
                  </div>
                </div>
              )}

              {/* Step 1: Project Scope Chips (Sets Subject) */}
              <div className="space-y-3">
                <label className="font-mono-tech text-xs uppercase tracking-wider text-[#121316]/80 font-bold block">
                  Select Project Scope (Optional)
                </label>
                <div className="flex flex-wrap gap-2">
                  {scopes.map((scope) => (
                    <button
                      key={scope}
                      type="button"
                      onClick={() => handleScopeSelect(scope)}
                      className={`form-chip ${formData.subject === scope ? 'active-chip' : ''}`}
                    >
                      {scope}
                    </button>
                  ))}
                </div>
              </div>

              {/* Contact Inputs */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="space-y-1.5">
                  <label className="font-mono-tech text-xs uppercase tracking-wider text-[#121316]/70 block">
                    Your Name <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="text"
                    name="from_name"
                    required
                    placeholder="John Doe"
                    value={formData.from_name}
                    onChange={handleChange}
                    className={`w-full bg-[#f4f2ed] border ${
                      errors.from_name ? 'border-red-500' : 'border-black/15'
                    } rounded-xl p-3.5 text-sm text-[#121316] focus:outline-none focus:border-[#9e8300] transition-colors`}
                  />
                  {errors.from_name && <p className="text-xs text-red-600 mt-1">{errors.from_name}</p>}
                </div>

                <div className="space-y-1.5">
                  <label className="font-mono-tech text-xs uppercase tracking-wider text-[#121316]/70 block">
                    Email Address <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="email"
                    name="from_email"
                    required
                    placeholder="john@company.com"
                    value={formData.from_email}
                    onChange={handleChange}
                    className={`w-full bg-[#f4f2ed] border ${
                      errors.from_email ? 'border-red-500' : 'border-black/15'
                    } rounded-xl p-3.5 text-sm text-[#121316] focus:outline-none focus:border-[#9e8300] transition-colors`}
                  />
                  {errors.from_email && <p className="text-xs text-red-600 mt-1">{errors.from_email}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="font-mono-tech text-xs uppercase tracking-wider text-[#121316]/70 block">
                    Phone Number (Optional)
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="+1 (555) 000-0000"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full bg-[#f4f2ed] border border-black/15 rounded-xl p-3.5 text-sm text-[#121316] focus:outline-none focus:border-[#9e8300] transition-colors"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="font-mono-tech text-xs uppercase tracking-wider text-[#121316]/70 block">
                    Subject (Optional)
                  </label>
                  <input
                    type="text"
                    name="subject"
                    placeholder="e.g. Web Application"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full bg-[#f4f2ed] border border-black/15 rounded-xl p-3.5 text-sm text-[#121316] focus:outline-none focus:border-[#9e8300] transition-colors"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="font-mono-tech text-xs uppercase tracking-wider text-[#121316]/70 block">
                  Describe Your Problem <span className="text-red-600">*</span>
                </label>
                <textarea
                  name="message"
                  required
                  rows={4}
                  placeholder="Tell us what business hurdle or software goal you want to tackle..."
                  value={formData.message}
                  onChange={handleChange}
                  className={`w-full bg-[#f4f2ed] border ${
                    errors.message ? 'border-red-500' : 'border-black/15'
                  } rounded-xl p-3.5 text-sm text-[#121316] focus:outline-none focus:border-[#9e8300] transition-colors resize-none`}
                />
                {errors.message && <p className="text-xs text-red-600 mt-1">{errors.message}</p>}
              </div>

              <button
                type="submit"
                disabled={status === 'sending'}
                className="editorial-btn w-full py-4 text-center justify-center font-bold !bg-[#121316] !text-[#F4F2ED] hover:!bg-[#9e8300] disabled:opacity-60 disabled:cursor-not-allowed flex items-center gap-2 cursor-pointer"
              >
                {status === 'sending' ? (
                  <>
                    <Loader2 size={18} className="animate-spin shrink-0" />
                    Sending...
                  </>
                ) : (
                  'Send Request to Lead Engineer →'
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
