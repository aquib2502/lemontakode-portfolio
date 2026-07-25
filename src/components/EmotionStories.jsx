'use client';

import React from 'react';

const projects = [
  {
    id: 'tpf',
    title: 'TRUE PATH FOUNDATION',
    desc: 'A complete brand identity and mobile-first web application designed to guide expecting mothers through their pregnancy journey. Built with Next.js, Node.js, and a beautifully calming UI/UX.',
    videoUrl: '/tpfvideo.mp4',
    tags: ['Web Application', 'UX/UI Design', 'Node.js'],
  },
  {
    id: 'tpf-admin',
    title: 'TPF ADMIN DASHBOARD',
    desc: 'The powerful backend system powering The Pregnancy Folks. We engineered a highly secure, lightning-fast dashboard that allows doctors and admins to manage user data, appointments, and content seamlessly.',
    videoUrl: '/tpfadmin-video.mp4',
    tags: ['Enterprise Software', 'React', 'Security'],
  },
  {
    id: 'tte',
    title: 'THE TRACE EXPRESS',
    desc: 'A high-performance booking platform for extreme adventure tours. We completely rebuilt their system to handle high-traffic surges, implemented a custom CMS, and designed an immersive booking experience.',
    videoUrl: '/tte-video.mp4',
    tags: ['E-Commerce', 'Booking System', 'Next.js'],
  },
  {
    id: 'flow-india',
    title: 'FLOW INDIA',
    desc: 'A digital transformation project for an educational institution. We created an interactive learning portal that connects students with educators through a custom video streaming architecture and real-time chat.',
    videoUrl: '/flowindiavideo.mp4',
    tags: ['EdTech Platform', 'Video Streaming', 'WebSockets'],
  }
];

function PlayOnViewVideo({ src }) {
  const videoRef = React.useRef(null);

  React.useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Only play if it's visible to save massive CPU/GPU resources
            video.play().catch(() => {});
          } else {
            // Pause when out of view
            video.pause();
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  return (
    <video
      ref={videoRef}
      src={src}
      loop
      muted
      playsInline
      preload="metadata"
      className="absolute inset-0 w-full h-full object-contain"
    />
  );
}

export default function EmotionStories() {
  return (
    <section className="theme-charcoal py-24 md:py-32 relative bg-[#0a0b0e] overflow-hidden" id="work">
      {/* Background accents */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#ffd400]/5 rounded-full blur-[120px] pointer-events-none transform translate-x-1/3 -translate-y-1/3"></div>
      
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 md:mb-24 gap-6 border-b border-white/10 pb-6">
          <div>
            <div className="font-mono-tech text-xs tracking-[0.2em] text-[#ffd400] uppercase mb-3">
              02 // OUR WORK
            </div>
            <h2 className="font-display text-4xl sm:text-6xl font-extrabold tracking-tight text-[#F4F2ED]">
              Case <span className="font-serif-italic font-normal text-[#ffd400]">studies.</span>
            </h2>
          </div>
          <p className="font-body text-[#a0a2a8] max-w-sm text-lg">
            We don't just write code. We build digital businesses that scale, perform, and convert.
          </p>
        </div>

        {/* Vertical Project List */}
        <div className="space-y-24 md:space-y-40">
          {projects.map((project, index) => (
            <div 
              key={project.id} 
              className={`flex flex-col ${index % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12 lg:gap-20`}
            >
              
              {/* Video Player Side */}
              <div className="w-full lg:w-[60%]">
                <div className="relative w-full aspect-video rounded-3xl overflow-hidden bg-[#050608] border border-[#ffd400]/20 shadow-[0_20px_60px_rgba(0,0,0,0.5)] p-2">
                  <div className="w-full h-full relative rounded-2xl overflow-hidden bg-black">
                    <PlayOnViewVideo src={project.videoUrl} />
                  </div>
                  
                  {/* Decorative corner brackets */}
                  <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-[#ffd400]/50 rounded-tl-3xl -translate-x-1 -translate-y-1"></div>
                  <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-[#ffd400]/50 rounded-br-3xl translate-x-1 translate-y-1"></div>
                </div>
              </div>

              {/* Text Side */}
              <div className="w-full lg:w-[40%] flex flex-col justify-center">
                
                {/* Project Number */}
                <div className="font-mono-tech text-6xl md:text-8xl font-bold text-white/[0.03] mb-[-40px] md:mb-[-60px] pointer-events-none">
                  0{index + 1}
                </div>

                <div className="relative z-10 space-y-6">
                  {/* Unique Typography Title */}
                  <h3 className="font-display text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#F4F2ED] tracking-tighter uppercase leading-[0.9]">
                    {project.title.split(' ').map((word, i) => (
                      <span 
                        key={i} 
                        className={`block ${i % 2 !== 0 ? 'font-serif-italic font-normal text-[#ffd400] tracking-normal' : ''}`}
                      >
                        {word}
                      </span>
                    ))}
                  </h3>

                  <p className="font-body text-[#a0a2a8] text-lg md:text-xl leading-relaxed">
                    {project.desc}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-3 pt-6 border-t border-white/10">
                    {project.tags.map(tag => (
                      <span 
                        key={tag} 
                        className="px-4 py-2 rounded-full border border-white/10 bg-white/5 font-mono-tech text-xs tracking-wider text-[#e2e4e9] backdrop-blur-sm"
                      >
                        {tag}
                      </span>
                    ))}
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
