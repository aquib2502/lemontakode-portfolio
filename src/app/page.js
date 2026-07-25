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
        {/* Navigation Bar */}
        <NavBar />

        <main className="flex-grow">
          {/* SECTION 1: ASYMMETRICAL EDITORIAL HERO */}
          <div id="hero">
            <ProblemHero
              onViewWork={() => scrollToSection('projects')}
              onStartProject={() => scrollToSection('contact')}
            />
          </div>

          {/* SECTION 2: STUDIO VISION & PHILOSOPHY */}
          <div id="vision">
            <VisionStory />
          </div>

          {/* SECTION 3: EDITORIAL CAPABILITY INDEX */}
          <div id="services">
            <SolutionCapabilities />
          </div>

          {/* SECTION 4: METHODOLOGY & PROCESS */}
          <div id="process">
            <DetailsCraftsmanship />
          </div>

          {/* SECTION 5: CINEMATIC CASE STUDIES */}
          <div id="projects">
            <EmotionStories />
          </div>

          {/* SECTION 6: INITIATE ENGAGEMENT */}
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
