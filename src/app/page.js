'use client';

import React from 'react';
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
    <div className="relative flex flex-col min-h-screen bg-soft-white text-dark-navy antialiased">
      {/* Navigation Bar */}
      <NavBar />

      <main className="flex-grow">
        {/* SECTION 1: PROBLEM (Cinematic Hero) */}
        <div id="problem">
          <ProblemHero
            onViewWork={() => scrollToSection('projects')}
            onStartProject={() => scrollToSection('contact')}
          />
        </div>

        {/* SECTION 2: VISION */}
        <div id="vision">
          <VisionStory />
        </div>

        {/* SECTION 3: SOLUTION */}
        <div id="solution">
          <SolutionCapabilities />
        </div>

        {/* SECTION 4: DETAILS */}
        <div id="details">
          <DetailsCraftsmanship />
        </div>

        {/* SECTION 5: EMOTION */}
        <div id="emotion">
          <EmotionStories />
        </div>

        {/* SECTION 6: CALL TO ACTION */}
        <div id="cta">
          <ContactCTA />
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
