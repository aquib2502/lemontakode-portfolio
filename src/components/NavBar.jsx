'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
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
      className={`fixed top-0 left-0 w-full z-50 transition-[background-color,padding,box-shadow] duration-300 ease-out ${
        scrolled
          ? 'bg-[#FAFAFA]/95 py-2 shadow-[0_4px_20px_rgba(7,29,73,0.02)]'
          : 'bg-transparent py-4'
      }`}
    >
      <nav className="flex justify-between items-center max-w-7xl mx-auto px-6 md:px-12">
        {/* Brand Logo & Name */}
        <a href="#" className="flex items-center gap-1.5 group relative">
          {/* Professional Downwards-sliding Tooltip */}
          <div className="absolute top-full mt-2 left-2 opacity-0 translate-y-[-4px] scale-95 group-hover:opacity-100 group-hover:translate-y-0 group-hover:scale-100 transition-all duration-400 ease-out pointer-events-none bg-primary text-white text-[8px] font-bold uppercase tracking-[0.2em] px-2 py-0.5 rounded shadow-sm flex items-center gap-1.5 z-20">
            HI THERE
            <span className="inline-block w-1 h-1 rounded-full bg-lemon-yellow" />
          </div>

          <img
            src="/4th.png"
            alt="LemontaKode Logo"
            className="h-14 w-auto object-contain transition-all duration-700 ease-out group-hover:scale-108 group-hover:rotate-[4deg]"
          />
          <span
            className={`font-display text-sm font-bold tracking-tight transition-colors duration-300 ${
              scrolled ? 'text-dark-navy' : 'text-white'
            }`}
          >
            LemontaKode
          </span>
        </a>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-[10px] uppercase tracking-widest font-semibold transition-colors duration-300 ${
                scrolled
                  ? 'text-dark-navy/70 hover:text-primary'
                  : 'text-white/70 hover:text-white'
              }`}
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden md:flex items-center">
          <a
            href="#contact"
            className={`px-4 py-2 rounded-lg text-[10px] uppercase tracking-widest font-bold transition-all active:scale-95 duration-300 ${
              scrolled
                ? 'bg-primary hover:bg-primary-container text-white shadow-sm'
                : 'bg-white hover:bg-white/90 text-dark-navy shadow-sm'
            }`}
          >
            Start a Project
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`md:hidden p-2 transition-colors duration-300 ${
            scrolled ? 'text-dark-navy hover:text-primary' : 'text-white hover:text-white/80'
          }`}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile Drawer */}
      <div
        className={`fixed inset-0 top-[56px] bg-dark-navy/98 backdrop-blur-2xl z-40 md:hidden flex flex-col items-center justify-center gap-8 transition-all duration-300 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none -translate-y-4'
        }`}
      >
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            onClick={() => setIsOpen(false)}
            className="text-lg font-bold text-white hover:text-primary transition-colors duration-300"
          >
            {link.name}
          </a>
        ))}
        <a
          href="#contact"
          onClick={() => setIsOpen(false)}
          className="bg-white text-dark-navy px-8 py-3 rounded-lg text-sm font-semibold shadow-md transition-all active:scale-95 duration-300"
        >
          Start a Project
        </a>
      </div>
    </header>
  );
}
