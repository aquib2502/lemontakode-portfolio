'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, ArrowUpRight } from 'lucide-react';

export default function FloatingContactButton() {
  const handleClick = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 1, ease: [0.16, 1, 0.3, 1] }}
      className="fixed bottom-6 right-6 z-50 pointer-events-auto"
    >
      <button
        onClick={handleClick}
        className="group relative flex items-center gap-3 px-4 py-3 rounded-full bg-[#121212]/90 backdrop-blur-xl border border-white/15 text-white shadow-[0_10px_30px_rgba(0,0,0,0.5)] hover:border-[#6289ff]/50 hover:shadow-[0_10px_35px_rgba(98,137,255,0.25)] transition-all duration-300 active:scale-95 cursor-pointer"
        aria-label="Contact LemontaKode"
      >
        {/* Glowing pulse indicator dot */}
        <span className="relative flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
        </span>

        {/* Action Label */}
        <span className="text-xs font-semibold tracking-wide text-white group-hover:text-primary transition-colors">
          Let's Talk
        </span>

        {/* Icon */}
        <div className="w-7 h-7 rounded-full bg-[#6289ff] text-white flex items-center justify-center group-hover:bg-white group-hover:text-[#0b0d14] transition-all duration-300">
          <MessageSquare size={14} className="group-hover:hidden" />
          <ArrowUpRight size={14} className="hidden group-hover:block" />
        </div>
      </button>
    </motion.div>
  );
}
