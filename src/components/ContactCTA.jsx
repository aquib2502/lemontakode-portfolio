'use client';

import React, { useState } from 'react';

const scopes = ['Web Application', 'Mobile App', 'Business Automation', 'UX & Product Design', 'Security Audit'];
const budgets = ['< ₹50,000', '₹50,000 - ₹1,50,000', '₹1,50,000+'];

export default function ContactCTA() {
  const [selectedScope, setSelectedScope] = useState('Web Application');
  const [selectedBudget, setSelectedBudget] = useState('₹50,000 - ₹1,50,000');
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
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

        {/* Right Column: Elevated Custom Form */}
        <div className="lg:col-span-7">
          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-6 bg-[#eae8e3] p-8 sm:p-10 rounded-2xl border border-black/15 shadow-sm">
              {/* Step 1: Project Type Chips */}
              <div className="space-y-3">
                <label className="font-mono-tech text-xs uppercase tracking-wider text-[#121316]/80 font-bold block">
                  1. What problem do you need solved?
                </label>
                <div className="flex flex-wrap gap-2">
                  {scopes.map((scope) => (
                    <button
                      key={scope}
                      type="button"
                      onClick={() => setSelectedScope(scope)}
                      className={`form-chip ${selectedScope === scope ? 'active-chip' : ''}`}
                    >
                      {scope}
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 2: Budget Chips */}
              <div className="space-y-3 pt-2">
                <label className="font-mono-tech text-xs uppercase tracking-wider text-[#121316]/80 font-bold block">
                  2. Estimated Budget Range
                </label>
                <div className="flex flex-wrap gap-2">
                  {budgets.map((b) => (
                    <button
                      key={b}
                      type="button"
                      onClick={() => setSelectedBudget(b)}
                      className={`form-chip ${selectedBudget === b ? 'active-chip' : ''}`}
                    >
                      {b}
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 3: Contact Inputs */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="space-y-1.5">
                  <label className="font-mono-tech text-xs uppercase tracking-wider text-[#121316]/70 block">Your Name</label>
                  <input
                    type="text"
                    required
                    placeholder="John Doe"
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    className="w-full bg-[#f4f2ed] border border-black/15 rounded-xl p-3.5 text-sm text-[#121316] focus:outline-none focus:border-[#9e8300] transition-colors"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="font-mono-tech text-xs uppercase tracking-wider text-[#121316]/70 block">Email Address</label>
                  <input
                    type="email"
                    required
                    placeholder="john@company.com"
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    className="w-full bg-[#f4f2ed] border border-black/15 rounded-xl p-3.5 text-sm text-[#121316] focus:outline-none focus:border-[#9e8300] transition-colors"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="font-mono-tech text-xs uppercase tracking-wider text-[#121316]/70 block">Describe Your Problem</label>
                <textarea
                  required
                  rows={4}
                  placeholder="Tell us what business hurdle or software goal you want to tackle..."
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  className="w-full bg-[#f4f2ed] border border-black/15 rounded-xl p-3.5 text-sm text-[#121316] focus:outline-none focus:border-[#9e8300] transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="editorial-btn w-full py-4 text-center justify-center font-bold !bg-[#121316] !text-[#F4F2ED] hover:!bg-[#9e8300]"
              >
                Send Request to Lead Engineer →
              </button>
            </form>
          ) : (
            <div className="bg-[#eae8e3] p-10 rounded-2xl border border-black/15 text-center space-y-4 shadow-sm">
              <div className="font-mono-tech text-xs text-[#9e8300] uppercase tracking-widest">TRANSMISSION RECEIVED</div>
              <h3 className="font-display text-2xl font-bold text-[#121316]">Thank you, {formState.name}.</h3>
              <p className="font-body text-sm text-[#2a2c33] font-normal max-w-xs mx-auto">
                Our lead engineer will review your {selectedScope} project scope and respond within 12 hours.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
