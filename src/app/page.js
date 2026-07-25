'use client';

import React from 'react';
import SmoothScroll from '../components/SmoothScroll';
import NavBar from '../components/NavBar';
import ProblemHero from '../components/ProblemHero';
import VisionStory from '../components/VisionStory';
import SolutionCapabilities from '../components/SolutionCapabilities';
import DetailsCraftsmanship from '../components/DetailsCraftsmanship';
import EmotionStories from '../components/EmotionStories';
import ContactCTA from '../components/ContactCTA';
import Footer from '../components/Footer';

export default function Home() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <SmoothScroll>
      <div className="relative flex flex-col min-h-screen bg-[#0a0b0e] text-[#F4F2ED] antialiased">
        {/* Centered Floating Morphing Navbar (NO FULL WIDTH BAR, NO WHITE LINE) */}
        <NavBar />

        <main className="flex-grow">
          {/* SECTION 1: 100DVH LAPTOP FIT HERO WITH INTERACTIVE BRAND OBJECT */}
          <div id="hero">
            <ProblemHero
              onViewWork={() => scrollToSection('projects')}
              onStartProject={() => scrollToSection('contact')}
            />
          </div>

          {/* SECTION 2: VISION — WARM IVORY ATMOSPHERIC CONTRAST */}
          <div id="vision">
            <VisionStory />
          </div>

          {/* SECTION 3: CAPABILITIES — INTERACTIVE HORIZONTAL TYPOGRAPHY ROWS */}
          <div id="services">
            <SolutionCapabilities />
          </div>

          {/* SECTION 4: PROCESS — GSAP SCROLLTRIGGER PINNED METHODOLOGY (01->05) */}
          <div id="process">
            <DetailsCraftsmanship />
          </div>

          {/* SECTION 5: PROJECTS — GSAP SCROLLTRIGGER PINNED HORIZONTAL TRACK */}
          <div id="projects">
            <EmotionStories />
          </div>

          {/* SECTION 6: CONTACT — WARM IVORY EDITORIAL CONCLUSION */}
          <div id="contact">
            <ContactCTA />
          </div>
        </main>

        {/* Minimal Studio Footer */}
        <Footer />
      </div>
    </SmoothScroll>
  );
}
