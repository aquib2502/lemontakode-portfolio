'use client';

import React, { useState } from 'react';

export default function ContactCTA() {
  const [formState, setFormState] = useState({ name: '', email: '', scope: 'Select a project scope', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="theme-ivory py-28 md:py-36 border-t border-black/10 select-none" id="contact">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
        {/* Left Column: Bold Editorial Statement */}
        <div className="lg:col-span-6 space-y-8">
          <div className="font-mono-tech text-xs tracking-[0.2em] text-[#121316]/60 uppercase">
            06 // INITIATE ENGAGEMENT
          </div>

          <h2 className="font-display text-4xl sm:text-6xl font-extrabold tracking-tight text-[#121316] leading-[1.05]">
            Have something ambitious <br />
            in mind? <br />
            <span className="font-serif-italic font-normal text-[#9e8300]">Let's build it properly.</span>
          </h2>

          <p className="font-body text-base sm:text-lg text-[#121316]/75 max-w-md font-light leading-relaxed">
            Schedule a 30-minute scoping call with our engineering leads to map your product architecture.
          </p>

          <div className="font-mono-tech text-xs text-[#121316]/60 space-y-2 pt-4">
            <div>EMAIL // hello@lemontakode.tech</div>
            <div>LOCATION // London · Bangalore · Global Delivery</div>
          </div>
        </div>

        {/* Right Column: Streamlined Form */}
        <div className="lg:col-span-6">
          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 sm:p-10 rounded-2xl border border-black/10 shadow-lg">
              <div className="space-y-2">
                <label className="font-mono-tech text-xs uppercase tracking-wider text-[#121316]/60 block">Full Name</label>
                <input
                  type="text"
                  required
                  placeholder="Enter your name"
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  className="w-full bg-[#f4f2ed] border border-black/15 rounded-xl p-4 text-sm text-[#121316] focus:outline-none focus:border-[#9e8300] transition-colors"
                />
              </div>

              <div className="space-y-2">
                <label className="font-mono-tech text-xs uppercase tracking-wider text-[#121316]/60 block">Email Address</label>
                <input
                  type="email"
                  required
                  placeholder="name@company.com"
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  className="w-full bg-[#f4f2ed] border border-black/15 rounded-xl p-4 text-sm text-[#121316] focus:outline-none focus:border-[#9e8300] transition-colors"
                />
              </div>

              <div className="space-y-2">
                <label className="font-mono-tech text-xs uppercase tracking-wider text-[#121316]/60 block">Project Scope</label>
                <select
                  value={formState.scope}
                  onChange={(e) => setFormState({ ...formState, scope: e.target.value })}
                  className="w-full bg-[#f4f2ed] border border-black/15 rounded-xl p-4 text-sm text-[#121316] focus:outline-none focus:border-[#9e8300] transition-colors"
                >
                  <option disabled>Select a project scope</option>
                  <option>Product Engineering</option>
                  <option>Web Platform</option>
                  <option>Mobile Application</option>
                  <option>UX & System Design</option>
                  <option>Cyber Security Audit</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="font-mono-tech text-xs uppercase tracking-wider text-[#121316]/60 block">Message</label>
                <textarea
                  required
                  rows={4}
                  placeholder="Tell us about your project goals..."
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  className="w-full bg-[#f4f2ed] border border-black/15 rounded-xl p-4 text-sm text-[#121316] focus:outline-none focus:border-[#9e8300] transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="editorial-btn w-full py-4 text-center justify-center font-bold !bg-[#121316] !text-white hover:!bg-[#9e8300]"
              >
                Send Message →
              </button>
            </form>
          ) : (
            <div className="bg-white p-10 rounded-2xl border border-black/10 text-center space-y-4 shadow-lg">
              <div className="font-mono-tech text-xs text-[#9e8300] uppercase tracking-widest">TRANSMISSION RECEIVED</div>
              <h3 className="font-display text-2xl font-bold text-[#121316]">Thank you, {formState.name}.</h3>
              <p className="font-body text-sm text-[#121316]/70 font-light max-w-xs mx-auto">
                Our engineering team will respond regarding your scope within 12 hours.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
