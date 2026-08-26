'use client';

import React from 'react';

export default function Footer() {
  return (
    <footer className="relative bg-[#F7F5F0] text-[#6F6C65] border-t border-[#E5E2D9] font-display text-xs select-none pt-12 pb-6 overflow-hidden">
      
      {/* Subtle Overlapping Background Wordmark (Anchored Tastefully at Bottom Baseline) */}
      <div className="absolute inset-x-0 bottom-[-4%] pointer-events-none z-0 flex items-center justify-center overflow-hidden opacity-10 select-none">
        <h2 className="font-display text-[12vw] sm:text-[11vw] lg:text-[10vw] font-black tracking-tighter uppercase text-[#111111] leading-none whitespace-nowrap">
          LEMONTA KODE
        </h2>
      </div>

      {/* Foreground Content Container */}
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-12 relative z-10">
        
        {/* Top Row: Brand Info, Nav Links, Direct Contact */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 sm:gap-8 pb-8">
          
          {/* Brand Info */}
          <div className="space-y-1.5">
            <div className="flex items-center gap-2.5">
              <img
                src="/4th.png"
                alt="LemontaKode Logo"
                className="h-4 sm:h-5 w-auto object-contain"
              />
              <span className="font-display text-xs sm:text-sm font-bold tracking-[0.14em] uppercase text-[#111111]">
                LEMONTAKODE
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#D9A74A]" />
            </div>
            <p className="font-display text-[10px] sm:text-[11px] text-[#6F6C65]">
              Digital Product Studio & Technology Consultancy
            </p>
          </div>

          {/* Links Column */}
          <div className="flex flex-wrap items-center gap-4 sm:gap-6 sm:gap-8 text-xs uppercase tracking-wider text-[#111111] font-semibold">
            <a href="#work" className="hover:text-[#2563EB] transition-colors">Work</a>
            <a href="#services" className="hover:text-[#2563EB] transition-colors">Services</a>
            <a href="#approach" className="hover:text-[#2563EB] transition-colors">Approach</a>
            <a href="#about" className="hover:text-[#2563EB] transition-colors">About</a>
            <a href="#contact" className="hover:text-[#2563EB] transition-colors">Contact</a>
          </div>

          {/* Contact Email & Socials */}
          <div className="space-y-1 text-left md:text-right flex flex-col items-start md:items-end">
            <a
              href="mailto:contact@lemontakode.com"
              className="text-xs sm:text-sm font-semibold text-[#111111] underline hover:text-[#2563EB] transition-colors"
            >
              contact@lemontakode.com
            </a>
            <div className="flex items-center gap-3 text-[10px] sm:text-[11px] tracking-wider uppercase text-[#6F6C65]">
              <a href="#" className="hover:text-[#2563EB] transition-colors">LinkedIn</a>
              <span className="text-[#D9A74A]">•</span>
              <a href="#" className="hover:text-[#2563EB] transition-colors">GitHub</a>
            </div>
          </div>

        </div>

        {/* Bottom Row: Copyright Line with Subtle Peeking Wordmark Overlay */}
        <div className="pt-4 sm:pt-5 border-t border-[#E5E2D9]/80 flex flex-col sm:flex-row justify-between items-center text-[10px] sm:text-[11px] text-[#6F6C65]">
          <div>
            &copy; {new Date().getFullYear()} LemontaKode. All rights reserved.
          </div>
          <div className="pt-1.5 sm:pt-0 font-medium">
            Designed with restraint & precision.
          </div>
        </div>

      </div>
    </footer>
  );
}






