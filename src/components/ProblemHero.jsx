'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import Aurora from './reactbits/Aurora';

export default function ProblemHero({ onViewWork, onStartProject }) {
  const eyebrowRef = useRef(null);
  const line1Ref = useRef(null);
  const line2Ref = useRef(null);
  const line3Ref = useRef(null);
  const descRef = useRef(null);
  const ctaRef = useRef(null);

  useEffect(() => {
    // Check prefers-reduced-motion
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power2.out' } });

      // Entrance: sequential reveal via clip masks
      tl.fromTo(eyebrowRef.current,
        { opacity: 0, y: 10 },
        { opacity: 1, y: 0, duration: 0.5 }
      )
      .fromTo(line1Ref.current,
        { yPercent: 110 },
        { yPercent: 0, duration: 0.7 },
        '-=0.2'
      )
      .fromTo(line2Ref.current,
        { yPercent: 110 },
        { yPercent: 0, duration: 0.7 },
        '-=0.5'
      )
      .fromTo(line3Ref.current,
        { yPercent: 110 },
        { yPercent: 0, duration: 0.65 },
        '-=0.5'
      )
      .fromTo(descRef.current,
        { opacity: 0, y: 8 },
        { opacity: 1, y: 0, duration: 0.55 },
        '-=0.3'
      )
      .fromTo(ctaRef.current,
        { opacity: 0, y: 8 },
        { opacity: 1, y: 0, duration: 0.45 },
        '-=0.25'
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="hero"
      className="hero-section relative flex flex-col justify-center bg-[#0a0b0e] text-[#F4F2ED] select-none overflow-hidden px-6 md:px-12"
    >
      {/* 3D WebGL Aurora Background */}
      <div className="absolute inset-0 z-0 opacity-40 mix-blend-screen pointer-events-none">
        <Aurora
          colorStops={['#ffd400', '#ffffff', '#ffd400']}
          amplitude={1.2}
          blend={0.5}
          speed={0.5}
        />
      </div>

      {/* Single centered editorial content block */}
      <div className="relative z-10 w-full max-w-4xl mx-auto flex flex-col gap-6">

        {/* Eyebrow */}
        <div
          ref={eyebrowRef}
          className="font-mono-tech text-xs tracking-[0.2em] text-[#ffd400] uppercase flex items-center gap-3"
          style={{ opacity: 0 }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#ffd400]" aria-hidden="true" />
          <span>LEMONTAKODE DIGITAL STUDIO</span>
          <span className="text-white/30" aria-hidden="true">//</span>
          <span className="text-white/60">WE SOLVE REAL PROBLEMS</span>
        </div>

        {/* Headline — three intentional lines, clip-mask per line */}
        <h1 className="font-display font-extrabold tracking-tight leading-[1.07] hero-headline">
          <span className="block overflow-hidden">
            <span ref={line1Ref} className="block">
              We solve complex problems
            </span>
          </span>
          <span className="block overflow-hidden">
            <span ref={line2Ref} className="block">
              with simple, powerful
            </span>
          </span>
          <span className="block overflow-hidden">
            <span ref={line3Ref} className="block font-serif-italic font-normal text-[#ffd400]">
              digital tools.
            </span>
          </span>
        </h1>

        {/* Description */}
        <p
          ref={descRef}
          className="font-body text-base sm:text-lg text-[#F4F2ED]/75 max-w-xl leading-relaxed font-light"
          style={{ opacity: 0 }}
        >
          We don't just write code. We understand your workflow, find where it breaks,
          and build focused software that fixes it — fast, clean, and built to last.
        </p>

        {/* CTAs */}
        <div
          ref={ctaRef}
          className="flex flex-wrap items-center gap-5 pt-1"
          style={{ opacity: 0 }}
        >
          <button onClick={onStartProject} className="editorial-btn">
            Tell Us Your Problem →
          </button>
          <button
            onClick={onViewWork}
            className="font-mono-tech text-xs uppercase tracking-widest text-[#F4F2ED]/70 hover:text-[#ffd400] transition-colors duration-200 flex items-center gap-2 cursor-pointer"
          >
            <span>See Solutions We Built</span>
            <span aria-hidden="true">↓</span>
          </button>
        </div>
      </div>
    </section>
  );
}
