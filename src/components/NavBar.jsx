'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

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
    { name: 'Vision', href: '#vision' },
    { name: 'Capabilities', href: '#services' },
    { name: 'Craftsmanship', href: '#process' },
    { name: 'Stories', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'glass-header py-3 shadow-[0_10px_30px_rgba(0,0,0,0.5)]'
          : 'bg-transparent py-5'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Brand Logo & Name */}
        <a href="#" className="flex items-center gap-2.5 group relative">
          <img
            src="/4th.png"
            alt="LemontaKode Logo"
            className="h-10 w-auto object-contain transition-transform duration-500 group-hover:scale-105 group-hover:rotate-[3deg]"
          />
          <div className="flex flex-col">
            <span className="font-display text-base font-extrabold tracking-tight text-white group-hover:text-primary transition-colors">
              Lemonta<span className="text-lemon-yellow font-normal">Kode</span>
            </span>
            <span className="text-[9px] uppercase tracking-[0.25em] text-white/50 font-semibold font-body">
              Tech Studio
            </span>
          </div>
        </a>

        {/* Live Status Pill (Desktop) */}
        <div className="hidden lg:flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[11px] text-white/80 font-medium">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
          </span>
          <span>Available for projects</span>
        </div>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-xs uppercase tracking-widest font-semibold text-white/70 hover:text-primary transition-colors duration-200"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Action Button */}
        <div className="hidden md:flex items-center">
          <a
            href="#contact"
            className="px-5 py-2.5 rounded-xl bg-white hover:bg-[#6289ff] text-[#0b0d14] hover:text-white text-xs uppercase tracking-wider font-bold transition-all duration-300 active:scale-95 flex items-center gap-1.5 shadow-[0_4px_20px_rgba(255,255,255,0.15)] hover:shadow-[0_6px_25px_rgba(98,137,255,0.4)]"
          >
            Start a Project
            <ArrowUpRight size={14} />
          </a>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-white/90 hover:text-primary transition-colors"
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu Drawer */}
      <div
        className={`fixed inset-0 top-[60px] bg-[#0b0d14]/98 backdrop-blur-2xl z-40 md:hidden flex flex-col items-center justify-center gap-8 transition-all duration-300 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none -translate-y-4'
        }`}
      >
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            onClick={() => setIsOpen(false)}
            className="text-xl font-bold text-white hover:text-primary transition-colors"
          >
            {link.name}
          </a>
        ))}
        <a
          href="#contact"
          onClick={() => setIsOpen(false)}
          className="mt-4 bg-primary text-white px-8 py-3.5 rounded-xl text-sm uppercase tracking-wider font-bold shadow-lg transition-all active:scale-95 flex items-center gap-2"
        >
          Start a Project
          <ArrowUpRight size={16} />
        </a>
      </div>
    </header>
  );
}
