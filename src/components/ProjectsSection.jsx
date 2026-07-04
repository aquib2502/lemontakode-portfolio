'use client';

import React from 'react';
import { ArrowUpRight, ExternalLink } from 'lucide-react';

export default function ProjectsSection() {
  const projects = [
    {
      title: 'TPFAID Emergency Platform',
      category: 'Mission Critical Web App',
      tech: ['Next.js', 'AWS Amplify', 'Tailwind', 'Realtime Map'],
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA87IpntHI3AGFY6-5Y5csCqerSDdytzoFWN0OzfKdPKCunpC3cTpqmE_HxFzdJx7VHKmMK2V6BDJb6Rc63iU7Z3_Y67hONmqCWeAYM7saEKyAmujuwC730kNRuFtUUluXGOmOWK89Gk9JfaR7IyOQlfOpsS1_o8Nbb1Og3neKb64DueVNvODpe5RZnffRf5PlUlplxhCDsppX7pZcVXi-DcPP_5TjUpyruD7puHubpMuXaX5SEwW5oCHQg84tOJgFSDLEuMeBMmeQ',
      link: '#'
    },
    {
      title: 'The Trace Express System',
      category: 'High-Volume CMS Portal',
      tech: ['React', 'Next.js SSR', 'Graphql API', 'Kubernetes'],
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDgVaKte9mAHwX4xJqV0E9mf0849BCVei5Dd7kwa6q05jDLDMnwadMZEvbVdSRGkanQG8db0Lz8viPAwjlwlEyUYxPV52KAN0-BDveR5mmy0Bcoyjb4tohY_wQgbjlgF1LRwlae3hZTQpzd6Txsyznx26Vr2DKsPuN6bqOK0K4OM1sZ2ZbKpcyfY012K9nryMLpKuFdUmnDzsUfBeKCqs9k0oZnN1loEZUncUw3rzODN1jenb-9VHDIuBrtlN2n2S4WkB7wKIN-xGQ',
      link: '#'
    }
  ];

  return (
    <section className="py-24 bg-surface-container-low" id="projects">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
          <div className="max-w-xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-3">Portfolio Highlights</p>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-dark-navy tracking-tight">
              Featured Case Studies
            </h2>
            <p className="font-body text-base text-on-surface-variant mt-4 leading-relaxed">
              Selected client works that demonstrate our dedication to scalability, performance, and refined user experience.
            </p>
          </div>
          <a
            href="#"
            className="inline-flex items-center gap-2 text-sm font-bold text-primary hover:text-primary-container transition-colors group border-b border-primary/20 pb-1"
          >
            Explore Full Portfolio 
            <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {projects.map((project, index) => (
            <div key={index} className="group flex flex-col justify-between h-full bg-white rounded-3xl overflow-hidden border border-outline-variant/20 shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="relative overflow-hidden aspect-[16/10] bg-surface-container">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={project.img}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-dark-navy/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              <div className="p-8 flex flex-col flex-grow justify-between">
                <div>
                  <span className="text-xs font-semibold text-primary uppercase tracking-wider block mb-2">
                    {project.category}
                  </span>
                  <h3 className="font-display text-2xl font-bold text-dark-navy mb-4 group-hover:text-primary transition-colors duration-200">
                    {project.title}
                  </h3>
                  
                  {/* Tech stack badges */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tech.map((t, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 rounded-full bg-surface-container-high text-on-surface-variant text-xs font-semibold font-body"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-outline-variant/10">
                  <a
                    href={project.link}
                    className="inline-flex items-center justify-center bg-primary hover:bg-primary-container text-white px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 hover:shadow-[0_0_15px_rgba(0,80,203,0.2)]"
                  >
                    View Case Study
                  </a>
                  <div className="flex items-center gap-3">
                    <a
                      href="#"
                      className="p-2.5 rounded-full bg-surface-container hover:bg-primary hover:text-white text-on-surface-variant transition-all duration-200 flex items-center justify-center"
                      aria-label="GitHub Repository"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                        <path d="M9 18c-4.51 2-5-2-7-2" />
                      </svg>
                    </a>
                    <a
                      href={project.link}
                      className="p-2.5 rounded-full bg-surface-container hover:bg-primary hover:text-white text-on-surface-variant transition-all duration-200"
                      aria-label="Live Demo"
                    >
                      <ExternalLink size={18} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
