import React, { useState, useEffect } from 'react';

interface NavbarProps {
  onOpenConsultant: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onOpenConsultant }) => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    // Optimization: Use IntersectionObserver instead of scroll listener to prevent main-thread blocking
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-50% 0px -50% 0px' // Trigger when the section is in the middle of the viewport
      }
    );

    const sectionIds = ['home', 'services', 'portfolio', 'contact'];
    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-[100] py-8 md:py-12 pointer-events-none">
      <div className="max-w-[1600px] mx-auto px-8 md:px-16 flex justify-between items-center pointer-events-auto">
        {/* Left: Logo and Navigation Links */}
        <div className="flex items-center gap-8 lg:gap-14">
          <a href="#home" className="text-lg font-bold tracking-wider text-white uppercase mr-4 lg:mr-8">
            Apex Flow
          </a>
          <a 
            href="#home" 
            className={`text-[11px] font-bold tracking-[0.2em] uppercase transition-colors ${
              activeSection === 'home' ? 'text-white' : 'text-zinc-600 hover:text-white'
            }`}
          >
            Home
          </a>
          <a 
            href="#services" 
            className={`text-[11px] font-bold tracking-[0.2em] uppercase transition-colors ${
              activeSection === 'services' ? 'text-white' : 'text-zinc-600 hover:text-white'
            }`}
          >
            Services
          </a>
          <a 
            href="#portfolio" 
            className={`text-[11px] font-bold tracking-[0.2em] uppercase transition-colors ${
              activeSection === 'portfolio' ? 'text-white' : 'text-zinc-600 hover:text-white'
            }`}
          >
            Portfolio
          </a>
          <a 
            href="#contact" 
            className={`text-[11px] font-bold tracking-[0.2em] uppercase transition-colors ${
              activeSection === 'contact' ? 'text-white' : 'text-zinc-600 hover:text-white'
            }`}
          >
            Contact Us
          </a>
        </div>
        
        {/* Right: Utility and CTA */}
        <div className="flex items-center gap-6">
          <a 
            href="https://calendly.com/prajwalofficial14/new-meeting"
            target="_blank" 
            rel="noopener noreferrer"
            className="hidden sm:block px-10 py-3.5 bg-transparent border border-white/10 rounded-full text-[11px] font-bold tracking-[0.2em] uppercase hover:bg-white hover:text-black transition-all"
          >
            Let's Talk
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;