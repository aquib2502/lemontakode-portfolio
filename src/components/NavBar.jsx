'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Projects', href: '#projects' },
    { name: 'Process', href: '#process' },
    { name: 'Stats', href: '#stats' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/80 backdrop-blur-xl border-b border-slate-200/50 shadow-[0_4px_30px_rgba(0,0,0,0.03)] py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <nav className="flex justify-between items-center max-w-7xl mx-auto px-6 md:px-12">
        {/* Logo - using the user's light background transparent logo */}
        <a href="#" className="flex items-center group">
          <img
            src="/logo-light-bg-transparent.png"
            alt="LemontaKode Tech Logo"
            className="h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-[1.02]"
          />
        </a>

        {/* Desktop Nav Links - Highly Visible Dark Navy/Slate text */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-semibold text-dark-navy hover:text-primary transition-colors duration-200"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="#contact"
            className="bg-primary hover:bg-primary-container text-white px-6 py-2.5 rounded-full text-sm font-semibold shadow-[0_4px_14px_rgba(0,80,203,0.25)] hover:shadow-[0_6px_20px_rgba(0,80,203,0.35)] transition-all active:scale-95 duration-300"
          >
            Start Project
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-dark-navy hover:text-primary transition-colors duration-200"
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Drawer */}
      <div
        className={`fixed inset-0 top-[68px] bg-white/98 backdrop-blur-xl z-40 md:hidden flex flex-col items-center justify-center gap-8 transition-all duration-300 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none translate-y-[-10px]'
        }`}
      >
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            onClick={() => setIsOpen(false)}
            className="text-xl font-bold text-dark-navy hover:text-primary transition-colors duration-200"
          >
            {link.name}
          </a>
        ))}
        <a
          href="#contact"
          onClick={() => setIsOpen(false)}
          className="bg-primary text-white px-8 py-3 rounded-full text-base font-semibold shadow-[0_4px_14px_rgba(0,80,203,0.25)] hover:shadow-[0_6px_20px_rgba(0,80,203,0.35)] transition-all active:scale-95 duration-300"
        >
          Start Project
        </a>
      </div>
    </header>
  );
}
