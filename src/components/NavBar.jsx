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
    { num: '01', name: 'Vision', href: '#vision' },
    { num: '02', name: 'Services', href: '#services' },
    { num: '03', name: 'Process', href: '#process' },
    { num: '04', name: 'Work', href: '#projects' },
    { num: '05', name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      {/* Centered Floating Pill Navbar (NO FULL-WIDTH BAR, NO WHITE HORIZONTAL LINE) */}
      <nav
        className={`floating-nav px-5 py-2.5 flex items-center justify-between ${
          scrolled ? 'scrolled-nav' : ''
        }`}
      >
        {/* Brand Mark */}
        <a href="#" className="flex items-center gap-2 group shrink-0">
          <img
            src="/4th.png"
            alt="LemontaKode"
            className="h-6 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
          />
          <span className="font-display text-sm font-bold text-[#F4F2ED] tracking-tight">
            Lemonta<span className="text-[#ffd400]">Kode</span>
          </span>
        </a>

        {/* Desktop Nav Items */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="font-mono-tech text-[11px] text-[#F4F2ED]/70 hover:text-[#ffd400] transition-colors duration-200"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Action Trigger Button */}
        <div className="hidden md:flex items-center shrink-0">
          <a href="#contact" className="editorial-btn !py-1.5 !px-4 !text-xs">
            Start a Project
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-1 text-[#F4F2ED] hover:text-[#ffd400] transition-colors"
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </nav>

      {/* Mobile Drawer Overlay */}
      {isOpen && (
        <div className="fixed inset-0 bg-[#0a0b0e]/98 backdrop-blur-2xl z-40 md:hidden flex flex-col justify-between p-8 pt-24">
          <div className="flex flex-col gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-4 text-2xl font-display text-[#F4F2ED] hover:text-[#ffd400] transition-colors"
              >
                <span className="font-mono-tech text-xs text-[#ffd400]">{link.num}</span>
                <span>{link.name}</span>
              </a>
            ))}
          </div>

          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="editorial-btn w-full text-center justify-center py-4 mb-4"
          >
            Start a Project
          </a>
        </div>
      )}
    </>
  );
}
