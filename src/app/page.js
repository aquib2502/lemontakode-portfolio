'use client';

import React from 'react';
import SmoothScroll from '../components/SmoothScroll';
import NavBar from '../components/NavBar';
import ProblemHero from '../components/ProblemHero';
import VisionStory from '../components/VisionStory';
import SolutionCapabilities from '../components/SolutionCapabilities';
import EmotionStories from '../components/EmotionStories';
import DetailsCraftsmanship from '../components/DetailsCraftsmanship';
import AboutSection from '../components/AboutSection';
import StatsSection from '../components/StatsSection';
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
      <div className="relative flex flex-col min-h-screen bg-[#F7F5F0] text-[#111111] antialiased">
        {/* Editorial Floating Sticky Header */}
        <NavBar />

        <main className="flex-grow">
          {/* SECTION 1: HERO SECTION */}
          <div id="hero">
            <ProblemHero
              onStartProject={() => scrollToSection('contact')}
              onViewWork={() => scrollToSection('work')}
            />
          </div>

          {/* SECTION 2: BRAND STATEMENT (PHILOSOPHY) */}
          <div id="philosophy">
            <VisionStory />
          </div>

          {/* SECTION 3: SERVICES ("WHAT WE BUILD") */}
          <div id="services">
            <SolutionCapabilities />
          </div>

          {/* SECTION 4: SELECTED WORK (CASE STUDIES) */}
          <div id="work">
            <EmotionStories />
          </div>

          {/* SECTION 5: APPROACH ("HOW WE WORK") */}
          <div id="approach">
            <DetailsCraftsmanship />
          </div>

          {/* SECTION 6: ABOUT LEMONTAKODE */}
          <div id="about">
            <AboutSection />
          </div>

          {/* SECTION 7: TECHNOLOGY STACK CREDIBILITY */}
          <div id="technology">
            <StatsSection />
          </div>

          {/* SECTION 8: FINAL CTA & CONTACT INQUIRIES */}
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

