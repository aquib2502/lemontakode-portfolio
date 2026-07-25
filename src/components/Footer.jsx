'use client';

import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-[#050608] text-[#F4F2ED]/60 border-t border-white/10 font-mono-tech text-xs">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-12 flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Brand & Studio info */}
        <div className="flex items-center gap-3">
          <img
            src="/4th.png"
            alt="LemontaKode Studio Logo"
            className="h-7 w-auto object-contain opacity-90"
          />
          <span className="font-display text-base font-bold text-[#F4F2ED] tracking-tight">
            Lemonta<span className="text-[#ffd400]">Kode</span>
          </span>
          <span className="text-white/30">//</span>
          <span className="text-white/40">DIGITAL PRODUCT STUDIO</span>
        </div>

        {/* Social Links */}
        <div className="flex items-center gap-6">
          <a href="#" className="hover:text-[#ffd400] transition-colors">LINKEDIN</a>
          <a href="#" className="hover:text-[#ffd400] transition-colors">TWITTER</a>
          <a href="#" className="hover:text-[#ffd400] transition-colors">GITHUB</a>
        </div>

        {/* Copyright */}
        <div className="text-white/40">
          &copy; {new Date().getFullYear()} LEMONTAKODE. ALL RIGHTS RESERVED.
        </div>
      </div>
    </footer>
  );
}
