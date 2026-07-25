'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { num: '01', name: 'Vision', href: '#vision' },
    { num: '02', name: 'Capabilities', href: '#services' },
    { num: '03', name: 'Process', href: '#process' },
    { num: '04', name: 'Work', href: '#projects' },
    { num: '05', name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0a0b0e]/90 backdrop-blur-md border-b border-white/10 py-4'
          : 'bg-transparent py-6'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Brand Logo & Studio Mark */}
        <a href="#" className="flex items-center gap-3 group">
          <img
            src="/4th.png"
            alt="LemontaKode Logo"
            className="h-8 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
          />
          <div className="flex flex-col">
            <span className="font-display text-base font-bold text-[#F4F2ED] tracking-tight leading-none">
              Lemonta<span className="text-[#ffd400]">Kode</span>
            </span>
            <span className="font-mono-tech text-[9px] uppercase tracking-[0.25em] text-white/40 mt-0.5">
              Digital Studio
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="font-mono-tech text-xs text-white/70 hover:text-[#ffd400] transition-colors duration-200 flex items-center gap-1.5"
            >
              <span className="text-white/30 text-[10px]">{link.num}</span>
              <span>{link.name}</span>
            </a>
          ))}
        </div>

        {/* Action Button */}
        <div className="hidden md:flex items-center">
          <a href="#contact" className="editorial-btn">
            Start a Project
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-[#F4F2ED] hover:text-[#ffd400] transition-colors"
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="fixed inset-0 top-[64px] bg-[#0a0b0e] z-40 md:hidden flex flex-col justify-between p-8">
          <div className="flex flex-col gap-6 mt-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-4 text-2xl font-display text-[#F4F2ED] hover:text-[#ffd400] transition-colors"
              >
                <span className="font-mono-tech text-sm text-[#ffd400]">{link.num}</span>
                <span>{link.name}</span>
              </a>
            ))}
          </div>

          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="editorial-btn w-full text-center justify-center py-4 mb-8"
          >
            Start a Project
          </a>
        </div>
      )}
    </header>
  );
}
