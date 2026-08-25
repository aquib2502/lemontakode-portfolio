'use client';

import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-[#F7F5F0] text-[#6F6C65] border-t border-[#E5E2D9] font-display text-xs select-none py-10 md:py-12">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
        
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
            <span className="w-1.5 h-1.5 rounded-full bg-[#B89B5E]" />
          </div>
          <p className="font-display text-[11px] text-[#6F6C65]">
            Digital Product Studio & Technology Consultancy
          </p>
        </div>

        {/* Links Column */}
        <div className="flex flex-wrap items-center gap-6 sm:gap-8 text-xs uppercase tracking-wider text-[#111111] font-semibold">
          <a href="#work" className="hover:text-[#B89B5E] transition-colors">Work</a>
          <a href="#services" className="hover:text-[#B89B5E] transition-colors">Services</a>
          <a href="#approach" className="hover:text-[#B89B5E] transition-colors">Approach</a>
          <a href="#about" className="hover:text-[#B89B5E] transition-colors">About</a>
          <a href="#contact" className="hover:text-[#B89B5E] transition-colors">Contact</a>
        </div>

        {/* Contact Email & Socials */}
        <div className="space-y-1 text-left md:text-right flex flex-col items-start md:items-end">
          <a
            href="mailto:hello@lemontakode.tech"
            className="text-xs sm:text-sm font-medium text-[#111111] underline hover:text-[#B89B5E] transition-colors"
          >
            hello@lemontakode.tech
          </a>
          <div className="flex items-center gap-3 text-[11px] tracking-wider uppercase text-[#6F6C65]">
            <a href="#" className="hover:text-[#111111] transition-colors">LinkedIn</a>
            <span className="text-[#B89B5E]/50">•</span>
            <a href="#" className="hover:text-[#111111] transition-colors">GitHub</a>
          </div>
        </div>

      </div>

      <div className="max-w-[1280px] mx-auto px-6 md:px-12 pt-6 mt-8 border-t border-[#E5E2D9] flex flex-col sm:flex-row justify-between items-center text-[11px] text-[#6F6C65]">
        <div>
          &copy; {new Date().getFullYear()} LemontaKode. All rights reserved.
        </div>
        <div className="pt-2 sm:pt-0">
          Designed with restraint & precision.
        </div>
      </div>
    </footer>
  );
}


