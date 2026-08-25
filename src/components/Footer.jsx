'use client';

import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-[#F7F5F0] text-[#77736B] border-t border-[#E5E2D9] font-display text-xs select-none py-14">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-start md:items-center gap-10">
        
        {/* Brand Info */}
        <div className="space-y-2">
          <div className="flex items-center gap-2.5">
            <img
              src="/4th.png"
              alt="LemontaKode Logo"
              className="h-5 w-auto object-contain"
            />
            <span className="font-display text-sm font-bold tracking-[0.14em] uppercase text-[#111111]">
              LEMONTAKODE
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#B89B5E]" />
          </div>
          <p className="font-display text-xs text-[#77736B]">
            Digital Product Studio & Technology Consultancy
          </p>
        </div>

        {/* Links Column */}
        <div className="flex flex-wrap items-center gap-8 text-xs uppercase tracking-wider text-[#111111] font-medium">
          <a href="#work" className="hover:text-[#B89B5E] transition-colors">Work</a>
          <a href="#services" className="hover:text-[#B89B5E] transition-colors">Services</a>
          <a href="#approach" className="hover:text-[#B89B5E] transition-colors">Approach</a>
          <a href="#about" className="hover:text-[#B89B5E] transition-colors">About</a>
          <a href="#contact" className="hover:text-[#B89B5E] transition-colors">Contact</a>
        </div>

        {/* Contact Email & Socials */}
        <div className="space-y-2 text-right md:text-right flex flex-col items-start md:items-end">
          <a
            href="mailto:hello@lemontakode.tech"
            className="text-sm font-medium text-[#111111] underline hover:text-[#B89B5E] transition-colors"
          >
            hello@lemontakode.tech
          </a>
          <div className="flex items-center gap-4 text-xs tracking-wider uppercase text-[#77736B] pt-1">
            <a href="#" className="hover:text-[#111111] transition-colors">LinkedIn</a>
            <span>•</span>
            <a href="#" className="hover:text-[#111111] transition-colors">GitHub</a>
          </div>
        </div>

      </div>

      <div className="max-w-[1280px] mx-auto px-6 md:px-12 pt-10 mt-10 border-t border-[#E5E2D9] flex flex-col sm:flex-row justify-between items-center text-[11px] text-[#77736B]">
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

