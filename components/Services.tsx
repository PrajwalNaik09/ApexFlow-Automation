import React, { useEffect, useRef } from 'react';
import { MessageSquare, GitMerge, Mic, ArrowUpRight } from 'lucide-react';

const Services: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);

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
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    if (containerRef.current) {
      Array.from(containerRef.current.children).forEach((child) => {
        observer.observe(child as Element);
      });
    }
    
    if (headerRef.current) {
        observer.observe(headerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="services" className="relative py-32 px-6 md:px-12 bg-black overflow-hidden">
       {/* Background subtle glow */}
       <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[800px] bg-white/[0.02] blur-[150px] rounded-full pointer-events-none" />

       <div className="max-w-7xl mx-auto mb-24 relative z-10">
         <div ref={headerRef} className="flex flex-col md:flex-row justify-between items-end gap-12 opacity-0 translate-y-12 transition-all duration-700">
           <div className="space-y-8">
             <span className="text-zinc-500 text-xs font-bold tracking-[0.2em] uppercase pl-1">Capabilities</span>
             <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tighter leading-[0.9]">
               Scale beyond <br/>
               <span className="text-zinc-600">human limits.</span>
             </h2>
           </div>
           <p className="text-zinc-400 text-sm leading-relaxed max-w-sm text-left md:pb-2">
             We don't just "automate". We re-engineer your business model around AI, ensuring your operations are scalable, predictable, and 100% autonomous.
           </p>
         </div>
       </div>

       <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-7xl mx-auto relative z-10">

          {/* --- CARD 1: AI Chatbots --- */}
          <div className="group relative h-[420px] flex flex-col justify-between p-8 md:p-10 rounded-3xl bg-zinc-900/10 backdrop-blur-md border border-white/5 overflow-hidden hover:border-white/10 hover:bg-zinc-900/30 transition-all duration-700 opacity-0 translate-y-12">
             
             <div className="relative z-10 flex justify-between items-start">
                <div className="relative">
                    <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/5 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-500">
                        <MessageSquare className="w-6 h-6 transition-colors duration-500" strokeWidth={1.5} />
                    </div>
                     {/* Visual: Animated Wave */}
                    <div className="absolute -right-24 top-1/2 -translate-y-1/2 ml-4 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                        <svg width="60" height="24" viewBox="0 0 60 24" fill="none">
                            <path d="M0 12 Q 15 24 30 12 T 60 12" stroke="white" strokeWidth="1.5" className="animate-pulse opacity-50" />
                        </svg>
                    </div>
                </div>
                <ArrowUpRight className="w-5 h-5 text-zinc-800 group-hover:text-white transition-colors duration-500" />
             </div>

             <div className="relative z-10 space-y-4">
               <div className="w-full h-px bg-gradient-to-r from-white/10 to-transparent mb-6 group-hover:from-white/30 transition-colors duration-500" />
               <h3 className="text-2xl font-medium text-white tracking-tight group-hover:translate-x-1 transition-transform duration-300">AI Chatbots</h3>
               <p className="text-zinc-500 text-sm leading-7 font-light group-hover:text-zinc-400 transition-colors duration-300">
                 Deploy 24/7 intelligent agents that resolve 80% of inquiries instantly. Seamlessly integrates with your existing support stack.
               </p>
             </div>
             
             {/* Hover Glow */}
             <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-white/5 blur-[80px] group-hover:bg-white/10 transition-colors duration-700 rounded-full pointer-events-none" />
          </div>

          {/* --- CARD 2: Custom Workflows --- */}
          <div className="group relative h-[420px] flex flex-col justify-between p-8 md:p-10 rounded-3xl bg-zinc-900/10 backdrop-blur-md border border-white/5 overflow-hidden hover:border-white/10 hover:bg-zinc-900/30 transition-all duration-700 delay-100 opacity-0 translate-y-12">
             
             <div className="relative z-10 flex justify-between items-start">
                <div className="relative">
                    <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/5 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-500">
                        <GitMerge className="w-6 h-6 transition-colors duration-500" strokeWidth={1.5} />
                    </div>
                    {/* Visual: Circuit */}
                    <div className="absolute -right-24 top-1/2 -translate-y-1/2 ml-4 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                         <svg width="60" height="24" viewBox="0 0 60 24" fill="none">
                           <path d="M0 12 L 20 12 L 30 4 L 55 4" stroke="white" strokeWidth="1.5" className="opacity-50"/>
                           <circle cx="55" cy="4" r="2" fill="white" className="animate-ping origin-center" />
                        </svg>
                    </div>
                </div>
                <ArrowUpRight className="w-5 h-5 text-zinc-800 group-hover:text-white transition-colors duration-500" />
             </div>

             <div className="relative z-10 space-y-4">
               <div className="w-full h-px bg-gradient-to-r from-white/10 to-transparent mb-6 group-hover:from-white/30 transition-colors duration-500" />
               <h3 className="text-2xl font-medium text-white tracking-tight group-hover:translate-x-1 transition-transform duration-300">Custom Workflows</h3>
               <p className="text-zinc-500 text-sm leading-7 font-light group-hover:text-zinc-400 transition-colors duration-300">
                 Hyper-automated internal systems connecting CRM, Slack, and email to eliminate repetitive manual data entry tasks.
               </p>
             </div>

             {/* Hover Glow */}
             <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-white/5 blur-[80px] group-hover:bg-white/10 transition-colors duration-700 rounded-full pointer-events-none" />
          </div>

          {/* --- CARD 3: AI Voice Agents --- */}
          <div className="group relative h-[420px] flex flex-col justify-between p-8 md:p-10 rounded-3xl bg-zinc-900/10 backdrop-blur-md border border-white/5 overflow-hidden hover:border-white/10 hover:bg-zinc-900/30 transition-all duration-700 delay-200 opacity-0 translate-y-12">
             
             <div className="relative z-10 flex justify-between items-start">
                <div className="relative">
                    <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/5 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-500">
                        <Mic className="w-6 h-6 transition-colors duration-500" strokeWidth={1.5} />
                    </div>
                     {/* Visual: Audio Equalizer */}
                    <div className="absolute -right-24 top-1/2 -translate-y-1/2 ml-4 opacity-0 group-hover:opacity-100 transition-opacity duration-700 flex items-center gap-1 h-6">
                        <div className="w-0.5 bg-white h-3 animate-[pulse_1s_ease-in-out_infinite]" />
                        <div className="w-0.5 bg-white h-5 animate-[pulse_1.2s_ease-in-out_infinite]" />
                        <div className="w-0.5 bg-white h-2 animate-[pulse_0.8s_ease-in-out_infinite]" />
                        <div className="w-0.5 bg-white h-4 animate-[pulse_1.1s_ease-in-out_infinite]" />
                    </div>
                </div>
                <ArrowUpRight className="w-5 h-5 text-zinc-800 group-hover:text-white transition-colors duration-500" />
             </div>

             <div className="relative z-10 space-y-4">
               <div className="w-full h-px bg-gradient-to-r from-white/10 to-transparent mb-6 group-hover:from-white/30 transition-colors duration-500" />
               <h3 className="text-2xl font-medium text-white tracking-tight group-hover:translate-x-1 transition-transform duration-300">AI Voice Agents</h3>
               <p className="text-zinc-500 text-sm leading-7 font-light group-hover:text-zinc-400 transition-colors duration-300">
                 Human-like voice assistants for inbound/outbound qualification. Capable of handling complex scheduling and triage.
               </p>
             </div>

             {/* Hover Glow */}
             <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-white/5 blur-[80px] group-hover:bg-white/10 transition-colors duration-700 rounded-full pointer-events-none" />
          </div>

       </div>
    </section>
  );
};

export default Services;