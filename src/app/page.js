'use client';

import React from 'react';
import SmoothScroll from '../components/SmoothScroll';
import NavBar from '../components/NavBar';
import FloatingContactButton from '../components/FloatingContactButton';
import ProblemHero from '../components/ProblemHero';
import VisionStory from '../components/VisionStory';
import SolutionCapabilities from '../components/SolutionCapabilities';
import StatsSection from '../components/StatsSection';
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
      <div className="relative flex flex-col min-h-screen bg-[#0b0d14] text-white antialiased">
        {/* Navigation Bar */}
        <NavBar />

        {/* Floating Quick Contact Trigger */}
        <FloatingContactButton />

        <main className="flex-grow">
          {/* SECTION 1: HERO */}
          <div id="hero">
            <ProblemHero
              onViewWork={() => scrollToSection('projects')}
              onStartProject={() => scrollToSection('contact')}
            />
          </div>

          {/* SECTION 2: VISION */}
          <div id="vision">
            <VisionStory />
          </div>

          {/* SECTION 3: CAPABILITIES */}
          <div id="services">
            <SolutionCapabilities />
          </div>

          {/* SECTION 4: PERFORMANCE & STATS */}
          <div id="stats">
            <StatsSection />
          </div>

          {/* SECTION 5: CRAFTSMANSHIP & PROCESS */}
          <div id="process">
            <DetailsCraftsmanship />
          </div>

          {/* SECTION 6: STORIES OF IMPACT */}
          <div id="projects">
            <EmotionStories />
          </div>

          {/* SECTION 7: CONTACT / PARTNERSHIP */}
          <div id="contact">
            <ContactCTA />
          </div>
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </SmoothScroll>
  );
}
