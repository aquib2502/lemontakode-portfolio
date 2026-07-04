'use client';

import React from 'react';
import { Cpu } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-dark-navy text-slate-400 border-t border-white/5 relative z-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand Info */}
          <div className="space-y-6 md:col-span-2">
            <a href="#" className="flex items-center">
              <img
                src="/logo-dark-bg-transparent.png"
                alt="LemontaKode Tech Logo"
                className="h-12 w-auto object-contain"
              />
            </a>
            <p className="text-sm max-w-sm leading-relaxed">
              We design and construct premium custom software systems, scalable cloud engines, and advanced cybersecurity strategies for enterprise visionaries.
            </p>
          </div>

          {/* Links Column 1 */}
          <div className="space-y-4">
            <h5 className="font-display text-sm font-bold text-white uppercase tracking-wider">Services</h5>
            <ul className="space-y-2.5 text-sm">
              <li><a href="#services" className="hover:text-primary transition-colors">Mobile Engineering</a></li>
              <li><a href="#services" className="hover:text-primary transition-colors">Web Systems</a></li>
              <li><a href="#services" className="hover:text-primary transition-colors">Cyber Audit</a></li>
              <li><a href="#services" className="hover:text-primary transition-colors">Cloud Architecture</a></li>
            </ul>
          </div>

          {/* Links Column 2 */}
          <div className="space-y-4">
            <h5 className="font-display text-sm font-bold text-white uppercase tracking-wider">Company</h5>
            <ul className="space-y-2.5 text-sm">
              <li><a href="#process" className="hover:text-primary transition-colors">Our Process</a></li>
              <li><a href="#stats" className="hover:text-primary transition-colors">Our Performance</a></li>
              <li><a href="#" className="inline-flex items-center gap-2 hover:text-primary transition-colors">
                Careers <span className="px-2 py-0.5 rounded-full bg-primary/20 text-circuit-glow text-[10px] font-bold">Hiring</span>
              </a></li>
              <li><a href="#contact" className="hover:text-primary transition-colors">Get In Touch</a></li>
            </ul>
          </div>
        </div>

        {/* Lower Footer */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-6">
          <p className="text-xs">
            &copy; {new Date().getFullYear()} LemontaKode Tech. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="#"
              className="p-2 rounded-full bg-white/5 hover:bg-primary hover:text-white transition-all duration-200 flex items-center justify-center"
              aria-label="LinkedIn"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect width="4" height="12" x="2" y="9" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>
            <a
              href="#"
              className="p-2 rounded-full bg-white/5 hover:bg-primary hover:text-white transition-all duration-200 flex items-center justify-center"
              aria-label="Twitter"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
              </svg>
            </a>
            <a
              href="#"
              className="p-2 rounded-full bg-white/5 hover:bg-primary hover:text-white transition-all duration-200 flex items-center justify-center"
              aria-label="GitHub"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                <path d="M9 18c-4.51 2-5-2-7-2" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
