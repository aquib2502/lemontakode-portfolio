import React from 'react';
import NavBar from '../components/NavBar';
import CircuitBackground from '../components/CircuitBackground';
import HeroSection from '../components/HeroSection';
import ServicesSection from '../components/ServicesSection';
import ProjectsSection from '../components/ProjectsSection';
import ProcessSection from '../components/ProcessSection';
import StatsSection from '../components/StatsSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

// Inline Tech Ticker Component
function TechTicker() {
  const technologies = [
    'React', 'Next.js', 'Flutter', 'Amazon Web Services', 'Docker', 'Kubernetes', 'OWASP Hardened', 'TypeScript', 'NodeJS'
  ];
  
  // Duplicate list to make infinite scroll smooth
  const doubleTech = [...technologies, ...technologies];

  return (
    <section className="py-12 bg-dark-navy overflow-hidden relative border-y border-white/5 z-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-6">
        <p className="text-center text-xs font-semibold uppercase tracking-widest text-slate-400">
          Core Technologies &amp; Standards
        </p>
      </div>
      <div className="relative w-full flex items-center">
        {/* Shadow Overlay Left */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-dark-navy to-transparent z-10 pointer-events-none" />
        {/* Shadow Overlay Right */}
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-dark-navy to-transparent z-10 pointer-events-none" />
        
        <div className="flex animate-scroll whitespace-nowrap gap-12 items-center">
          {doubleTech.map((tech, idx) => (
            <div
              key={idx}
              className="inline-flex items-center justify-center min-w-[200px] text-lg font-display font-bold text-slate-300 hover:text-white grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
            >
              {tech}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <div className="relative flex flex-col min-h-screen">
      {/* Navigation Header */}
      <NavBar />

      <main className="flex-grow">
        {/* Hero Section Container with 3D Circuit Background */}
        <div className="relative min-h-screen">
          <CircuitBackground />
          <HeroSection />
        </div>

        {/* Brand Tech Ticker */}
        <TechTicker />

        {/* Services / Expertise */}
        <ServicesSection />

        {/* Case Studies / Projects */}
        <ProjectsSection />

        {/* Workflow methodology */}
        <ProcessSection />

        {/* Performance metrics & stats */}
        <StatsSection />

        {/* Contact form */}
        <ContactSection />
      </main>

      {/* Footer directory */}
      <Footer />
    </div>
  );
}
