'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = ['hero', 'philosophy', 'services', 'work', 'approach', 'about', 'contact'];
      const scrollPos = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Work', href: '#work', id: 'work' },
    { name: 'Services', href: '#services', id: 'services' },
    { name: 'Approach', href: '#approach', id: 'approach' },
    { name: 'About', href: '#about', id: 'about' },
  ];

  return (
    <>
      <header
        className={`editorial-nav px-5 md:px-8 py-3 flex items-center justify-between ${
          scrolled ? 'scrolled-nav' : ''
        }`}
      >
        {/* Brand Mark */}
        <a href="#hero" className="flex items-center gap-2.5 group shrink-0">
          <img
            src="/4th.png"
            alt="LemontaKode Logo"
            className="h-5 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
          />
          <span className="font-display text-xs sm:text-sm font-bold tracking-[0.14em] uppercase text-[#111111]">
            LEMONTAKODE
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#D9A74A]" />
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.name}
                href={link.href}
                className={`font-display text-xs font-semibold tracking-widest uppercase transition-colors duration-200 relative py-1 ${
                  isActive ? 'text-[#111111]' : 'text-[#6F6C65] hover:text-[#111111]'
                }`}
              >
                <span>{link.name}</span>
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#D9A74A]" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Action Button */}
        <div className="hidden md:flex items-center shrink-0">
          <a
            href="#contact"
            className="btn-editorial-primary"
          >
            <span>Start a conversation</span>
            <ArrowRight size={13} className="text-[#D9A74A]" />
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-1.5 text-[#111111] hover:text-[#D9A74A] transition-colors cursor-pointer"
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </header>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="fixed inset-0 bg-[#F7F5F0]/98 backdrop-blur-xl z-40 md:hidden flex flex-col justify-between p-8 pt-28 border-b border-[#E5E2D9]">
          <div className="flex flex-col gap-5">
            {navLinks.map((link, idx) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-between text-2xl font-display font-semibold text-[#111111] border-b border-[#E5E2D9] pb-4"
              >
                <span>{link.name}</span>
                <span className="font-display text-xs text-[#D9A74A] font-mono">0{idx + 1}</span>
              </a>
            ))}
          </div>

          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="btn-editorial-primary justify-center w-full py-3.5 text-center text-sm"
          >
            <span>Start a conversation</span>
            <ArrowRight size={15} className="text-[#D9A74A]" />
          </a>
        </div>
      )}
    </>
  );
}



