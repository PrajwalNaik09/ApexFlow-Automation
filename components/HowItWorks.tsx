import React, { useRef, useEffect } from 'react';
import { Search, Target, Settings, TrendingUp } from 'lucide-react';

const STEPS = [
  {
    step: "01",
    icon: Search,
    title: "Discovery & Mapping",
    desc: "We visualize your entire operational map, identifying bottlenecks and high-value opportunities for autonomous intervention."
  },
  {
    step: "02",
    icon: Target,
    title: "Strategic Audit",
    desc: "We pinpoint exact integration points where AI agents can outperform human operators in speed, accuracy, and cost."
  },
  {
    step: "03",
    icon: Settings,
    title: "Architecture & Build",
    desc: "We engineer custom workflows using a hybrid of proprietary code, LLMs, and enterprise automation platforms."
  },
  {
    step: "04",
    icon: TrendingUp,
    title: "We Manage & Iterate",
    desc: "Systems are monitored 24/7. We continuously iterate on the prompts and logic to ensure scaling efficiency."
  }
];

const HowItWorks: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const dotRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Handle Scroll Animation for the Vertical Line (Lerp & Transform)
  useEffect(() => {
    let animationFrameId: number;
    let currentProgress = 0;
    let targetProgress = 0;

    const updateAnimation = () => {
      if (!containerRef.current || !lineRef.current) {
        animationFrameId = requestAnimationFrame(updateAnimation);
        return;
      }

      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const triggerPoint = windowHeight * 0.6; // Trigger slightly below center
      
      // Calculate raw scroll progress based on container position relative to viewport
      const startY = rect.top;
      const totalHeight = rect.height - 100; // Approximate active area
      
      // Calculate target progress (0 to 1)
      let progress = (triggerPoint - startY) / totalHeight;
      progress = Math.max(0, Math.min(progress, 1));
      targetProgress = progress;

      // Apply Lerp (Linear Interpolation) for smooth physics feel
      // The 0.1 factor determines the 'weight' or 'lag' of the line
      currentProgress += (targetProgress - currentProgress) * 0.1;

      // Apply hardware-accelerated transform
      // scaleY is much more performant than animating height
      lineRef.current.style.transform = `scaleY(${currentProgress})`;

      // Update Dots based on progress
      dotRefs.current.forEach((dot, index) => {
        if (!dot) return;
        
        // Calculate a rough threshold for each step
        // We activate the dot slightly before the line technically reaches it for better visual timing
        const threshold = index / (STEPS.length - 0.5);
        
        if (currentProgress > threshold) {
          // Active State
          dot.classList.add('bg-white', 'scale-125', 'shadow-[0_0_15px_rgba(255,255,255,0.6)]', 'border-transparent');
          dot.classList.remove('bg-zinc-800', 'border-zinc-700');
        } else {
          // Inactive State
          dot.classList.remove('bg-white', 'scale-125', 'shadow-[0_0_15px_rgba(255,255,255,0.6)]', 'border-transparent');
          dot.classList.add('bg-zinc-800', 'border-zinc-700');
        }
      });

      animationFrameId = requestAnimationFrame(updateAnimation);
    };

    // Start Loop
    animationFrameId = requestAnimationFrame(updateAnimation);

    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  // Handle Intersection Observer for Cards (Slide In)
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove('opacity-0', 'translate-x-24');
            entry.target.classList.add('opacity-100', 'translate-x-0');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="process" className="relative py-32 px-6 md:px-12 bg-[#050505] overflow-hidden">
      {/* Subtle Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>
      
      <div className="max-w-5xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="mb-24 md:pl-28">
          <span className="text-zinc-500 text-xs font-bold tracking-[0.2em] uppercase pl-1 block mb-6">The Process</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tighter max-w-xl leading-[1.1]">
            From manual chaos to <span className="text-zinc-500">autonomous order.</span>
          </h2>
        </div>

        {/* Timeline Container */}
        <div ref={containerRef} className="relative">
          
          {/* Static Background Line */}
          <div className="absolute left-4 md:left-8 top-8 bottom-8 w-px bg-white/5 hidden md:block" />
          
          {/* Animated Foreground Line (The Beam) */}
          {/* 
            Using transform scaleY from top origin for performance.
            The gradient gives it the 'glowing head' effect as it scales.
            will-change-transform hints browser to promote to compositing layer.
          */}
          <div 
            ref={lineRef}
            className="absolute left-4 md:left-8 top-8 bottom-8 w-px bg-gradient-to-b from-transparent via-zinc-400 to-white hidden md:block origin-top will-change-transform" 
            style={{ transform: 'scaleY(0)' }}
          >
             {/* Optional: Add a little glow blur at the bottom tip via pseudo-element or child if needed, 
                 but the gradient 'to-white' usually handles this cleanly. */}
             <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[2px] h-12 bg-white blur-[2px]" />
          </div>

          <div className="space-y-16 md:space-y-24">
            {STEPS.map((step, index) => {
              return (
                <div key={index} className="relative flex flex-col md:flex-row gap-8 md:gap-20 items-start">
                  
                  {/* Timeline Dot */}
                  <div className="hidden md:flex flex-col items-center justify-center absolute left-4 md:left-8 -translate-x-1/2 mt-10 z-20">
                     <div 
                       ref={(el) => { dotRefs.current[index] = el; }}
                       className="w-3 h-3 rounded-full border border-zinc-700 bg-zinc-800 transition-all duration-300 ease-out"
                     ></div>
                  </div>

                  {/* Spacer for Desktop Alignment */}
                  <div className="hidden md:block w-0" />

                  {/* Card */}
                  <div 
                    ref={(el) => { cardsRef.current[index] = el; }}
                    className="w-full flex-1 group opacity-0 translate-x-24 transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]"
                  >
                    <div className="relative p-8 md:p-10 rounded-3xl bg-zinc-900/20 backdrop-blur-md border border-white/5 hover:border-white/10 hover:bg-zinc-900/40 transition-all duration-500">
                      
                      {/* Step Number & Icon Header */}
                      <div className="flex justify-between items-start mb-8">
                        <div className="flex items-center gap-4">
                          <div className={`p-3 rounded-xl bg-zinc-900 border border-white/5 group-hover:scale-110 transition-transform duration-500 text-zinc-500 group-hover:text-white`}>
                            <step.icon size={20} strokeWidth={1.5} />
                          </div>
                          <span className="text-[10px] font-bold tracking-[0.2em] text-zinc-600 uppercase">Step {step.step}</span>
                        </div>
                      </div>

                      <h3 className="text-2xl font-bold text-white mb-4 tracking-tight group-hover:translate-x-1 transition-transform duration-300">
                        {step.title}
                      </h3>
                      
                      <p className="text-zinc-400 text-sm leading-7 font-light group-hover:text-zinc-300 transition-colors duration-300">
                        {step.desc}
                      </p>

                      {/* Hover Glow Effect */}
                      <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/5 blur-[60px] rounded-full group-hover:bg-white/10 transition-all duration-500 pointer-events-none" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;