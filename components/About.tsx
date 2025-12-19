import React, { useEffect, useRef } from 'react';
import { Network, Cloud, Zap, Workflow } from 'lucide-react';

const About: React.FC = () => {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const paragraphRef = useRef<HTMLParagraphElement>(null);
  const largeCardRef = useRef<HTMLDivElement>(null);
  const topCardRef = useRef<HTMLDivElement>(null);
  const bottomCardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Remove initial hidden states and add visible states
            entry.target.classList.remove('opacity-0', '-translate-x-12', 'translate-y-24', 'translate-x-12');
            entry.target.classList.add('opacity-100', 'translate-x-0', 'translate-y-0');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.2, // Trigger when 20% of the element is visible
        rootMargin: '0px 0px -50px 0px'
      }
    );

    const refs = [headingRef, paragraphRef, largeCardRef, topCardRef, bottomCardRef];
    refs.forEach((ref) => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative py-20 sm:py-24 md:py-32 px-5 sm:px-6 md:px-12 bg-black overflow-hidden border-t border-white/5">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>

      <div className="max-w-[1400px] mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 lg:gap-24 items-center">
          
          {/* Left Column: Text Content */}
          <div className="space-y-6 sm:space-y-8 order-2 lg:order-1">
            <h2 
              ref={headingRef}
              className="text-4xl sm:text-5xl md:text-8xl font-bold tracking-tighter text-white opacity-0 -translate-x-12 transition-all duration-1000 ease-out"
            >
              Our DNA
            </h2>
            <p 
              ref={paragraphRef}
              className="text-zinc-400 text-base sm:text-lg md:text-xl leading-relaxed max-w-xl font-light opacity-0 -translate-x-12 transition-all duration-1000 delay-200 ease-out"
            >
              At ApexFlow, we don't just build systems; we engineer intelligence that amplifies human potential. 
              We bridge the critical gap between intuition and machine learning, creating adaptive solutions that 
              drive exponential growth and redefine efficiency for forward-thinking organizations.
            </p>
          </div>

          {/* Right Column: Visual Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 h-full min-h-[420px] sm:min-h-[500px] order-1 lg:order-2">
            
            {/* Tall Card: Efficiency Metric (Animates Bottom to Up) */}
            <div 
              ref={largeCardRef}
              className="relative bg-zinc-900/20 border border-white/10 rounded-[2rem] sm:rounded-[2.5rem] p-6 sm:p-8 flex flex-col items-center justify-between overflow-hidden backdrop-blur-sm group hover:border-white/20 opacity-0 translate-y-24 transition-all duration-1000 delay-300 ease-out"
            >
               {/* Glossy top highlight */}
               <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-white/5 to-transparent pointer-events-none" />
               
               <div className="flex-1 flex items-center justify-center w-full">
                  <div className="relative w-44 h-44 sm:w-56 sm:h-56 flex items-center justify-center">
                    {/* Glowing Background */}
                    <div className="absolute inset-0 bg-white/5 blur-3xl rounded-full" />
                    
                    {/* Ring Structure */}
                    <div className="absolute inset-0 rounded-full border border-white/5" />
                    <div className="absolute inset-4 rounded-full border border-white/5" />
                    
                    {/* Animated Arc */}
                    <svg className="absolute inset-0 w-full h-full rotate-[-90deg]">
                       <circle 
                         cx="112" 
                         cy="112" 
                         r="110" 
                         stroke="white" 
                         strokeWidth="1.5" 
                         fill="none" 
                         strokeDasharray="500" 
                         strokeDashoffset="140" 
                         strokeLinecap="round"
                         className="opacity-20" 
                       />
                       <circle 
                         cx="112" 
                         cy="112" 
                         r="110" 
                         stroke="url(#efficiency-gradient)" 
                         strokeWidth="2" 
                         fill="none" 
                         strokeDasharray="500" 
                         strokeDashoffset="140" 
                         strokeLinecap="round"
                         className="opacity-80 drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]" 
                       />
                       <defs>
                          <linearGradient id="efficiency-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                             <stop offset="0%" stopColor="white" stopOpacity="0" />
                             <stop offset="100%" stopColor="white" />
                          </linearGradient>
                       </defs>
                    </svg>

                    <div className="text-center z-10 space-y-1">
                       <div className="text-4xl sm:text-6xl font-bold text-white tracking-tighter drop-shadow-2xl">98%</div>
                       <div className="text-xs sm:text-sm font-medium text-zinc-400">Efficiency</div>
                       <div className="text-xs sm:text-sm font-medium text-zinc-400">Increase</div>
                    </div>
                  </div>
               </div>

               <div className="text-zinc-500 text-[10px] font-bold uppercase tracking-[0.2em]">Proven Scale</div>
            </div>

            {/* Right Stack Cards (Animates Right to Left) */}
            <div className="flex flex-col gap-4">
               
               {/* Top Card: Human-First AI */}
               <div 
                 ref={topCardRef}
                 className="flex-1 bg-zinc-900/20 border border-white/10 rounded-[2rem] sm:rounded-[2.5rem] p-6 sm:p-8 flex flex-col items-center text-center justify-center backdrop-blur-sm hover:bg-zinc-900/30 opacity-0 translate-x-12 transition-all duration-1000 delay-500 ease-out"
               >
                  <div className="mb-5 sm:mb-6 p-4 rounded-2xl bg-white/5 border border-white/5 relative">
                     <Network className="w-7 h-7 sm:w-8 sm:h-8 text-zinc-200" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">Human-First AI</h3>
                  <p className="text-zinc-500 text-xs sm:text-sm leading-relaxed max-w-[200px] font-medium">
                    Empowering people with intelligent tools, not replacing them.
                  </p>
               </div>

               {/* Bottom Card: Tech Stack */}
               <div 
                 ref={bottomCardRef}
                 className="flex-1 bg-zinc-900/20 border border-white/10 rounded-[2rem] sm:rounded-[2.5rem] p-6 sm:p-8 flex flex-col justify-center backdrop-blur-sm hover:bg-zinc-900/30 opacity-0 translate-x-12 transition-all duration-1000 delay-700 ease-out"
               >
                  <div className="space-y-5 pl-2">
                     <div className="flex items-center gap-3 opacity-80 hover:opacity-100 transition-opacity">
                        <Workflow className="w-4 h-4 sm:w-5 sm:h-5 text-white" strokeWidth={1.5} />
                        <span className="text-sm sm:text-base font-semibold text-zinc-300 tracking-tight">n8n</span>
                     </div>
                     <div className="flex items-center gap-3 opacity-80 hover:opacity-100 transition-opacity">
                        <Cloud className="w-4 h-4 sm:w-5 sm:h-5 text-white" strokeWidth={1.5} />
                        <span className="text-sm sm:text-base font-semibold text-zinc-300 tracking-tight">Google Cloud</span>
                     </div>
                     <div className="flex items-center gap-3 opacity-80 hover:opacity-100 transition-opacity">
                        <div className="w-4 h-4 sm:w-5 sm:h-5 flex items-center justify-center bg-white rounded-full">
                           <span className="text-[8px] sm:text-[10px] font-black text-black">m</span>
                        </div>
                        <span className="text-sm sm:text-base font-semibold text-zinc-300 tracking-tight">make.com</span>
                     </div>
                  </div>
                  <div className="text-zinc-600 text-[10px] font-bold uppercase tracking-[0.2em] mt-8 pl-2">Tech Stack Mastery</div>
               </div>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
