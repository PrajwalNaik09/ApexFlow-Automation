import React, { useEffect, useRef } from 'react';

const PROJECTS = [
  {
    title: 'Growth Engine v2',
    category: 'Sales Automation',
    image: 'https://images.unsplash.com/photo-1639322537228-f710d846310a?q=80&w=1200&auto=format&fit=crop',
    description: 'Automated a B2B SaaS outreach sequence resulting in 142 booked demos in 30 days.',
  },
  {
    title: 'Ops-Sync AI',
    category: 'Internal Systems',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1200&auto=format&fit=crop',
    description: 'Eliminated 25+ manual hours per week for a logistics firm through custom API synchronizations.',
  }
];

const Portfolio: React.FC = () => {
  const headerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries: IntersectionObserverEntry[]) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove('opacity-0', 'translate-y-12');
            entry.target.classList.add('opacity-100', 'translate-y-0');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    if (headerRef.current) observer.observe(headerRef.current);
    if (gridRef.current) {
      Array.from(gridRef.current.children).forEach((child) => {
        observer.observe(child as Element);
      });
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="portfolio" className="py-24 px-6 md:px-12 bg-zinc-950">
      <div className="max-w-7xl mx-auto">
        <div ref={headerRef} className="mb-16 opacity-0 translate-y-12 transition-all duration-700 ease-out">
          <h2 className="text-zinc-500 text-sm font-bold uppercase tracking-[0.2em] mb-4">Proven Results</h2>
          <p className="text-4xl md:text-5xl font-bold">Systems that generate real ROI.</p>
        </div>

        <div ref={gridRef} className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {PROJECTS.map((project, idx) => (
            <div 
              key={idx} 
              className="group cursor-pointer opacity-0 translate-y-12 transition-all duration-700 ease-out"
              style={{ transitionDelay: `${idx * 200}ms` }}
            >
              {/* Image Container */}
              <div className="relative aspect-[16/10] overflow-hidden rounded-3xl mb-8 border border-white/5 group-hover:border-white/20 transition-colors duration-500">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-700"></div>
                
                {/* Category Badge */}
                <div className="absolute top-6 left-6">
                  <span className="px-4 py-2 rounded-full glass bg-black/20 backdrop-blur-md text-[10px] font-bold uppercase tracking-[0.2em] text-white/90 border border-white/10 group-hover:bg-white group-hover:text-black transition-all duration-500">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Text Content */}
              <div className="flex justify-between items-start gap-6 px-2">
                <div className="space-y-3">
                  <h3 className="text-2xl md:text-3xl font-bold text-zinc-100 group-hover:text-white transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-zinc-500 text-sm leading-relaxed max-w-sm group-hover:text-zinc-400 transition-colors duration-300">
                    {project.description}
                  </p>
                </div>

                {/* Interactive Arrow Button */}
                <div className="relative flex-shrink-0 w-14 h-14 rounded-full border border-white/10 flex items-center justify-center overflow-hidden group-hover:border-white/30 transition-all duration-500">
                   {/* Background fill animation */}
                   <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.25,1,0.5,1)]"></div>
                   
                   {/* Icon */}
                   <svg 
                     className="relative z-10 w-5 h-5 text-zinc-400 group-hover:text-black group-hover:-rotate-45 transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)]" 
                     fill="none" 
                     stroke="currentColor" 
                     viewBox="0 0 24 24"
                    >
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                   </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;