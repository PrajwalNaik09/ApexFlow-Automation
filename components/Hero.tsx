import React, { useEffect, useRef } from 'react';

const Hero: React.FC = () => {
  const splineRef = useRef<any>(null);

  useEffect(() => {
    // Function to hide the Spline logo from the shadow DOM
    const hideLogo = () => {
      if (splineRef.current?.shadowRoot) {
        const logo = splineRef.current.shadowRoot.querySelector('#logo');
        if (logo) {
          // Use display: none instead of remove() to avoid "Cannot read properties of null" 
          // errors if the library tries to access the element's style later.
          (logo as HTMLElement).style.display = 'none';
        }
      }
    };

    // Initial check
    hideLogo();

    // Check repeatedly to catch it after the scene loads
    const intervalId = setInterval(hideLogo, 100);
    
    // Stop checking after 5 seconds
    const timeoutId = setTimeout(() => clearInterval(intervalId), 5000);

    return () => {
      clearInterval(intervalId);
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <section id="home" className="relative min-h-screen w-full flex flex-col justify-end bg-black overflow-hidden pb-12 md:pb-24">
      {/* 
        3D BACKGROUND LAYER
        Optimized for visibility and performance. 
        Using the updated smoother Spline scene URL provided.
        Added pointer-events-none to prevent scroll hijacking by the 3D canvas.
      */}
      <div className="absolute inset-0 z-0 pointer-events-none will-change-transform">
        {/* Subtle overlay to ensure UI elements are legible without muddying the 3D experience */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/80 z-10"></div>
        
        {/* 
          The spline-viewer is the core 3D element. 
          The 'block' class and full dimensions ensure it fills its absolute container.
        */}
        <spline-viewer 
          ref={splineRef}
          url="https://prod.spline.design/psSbk61-j8Moi5eb/scene.splinecode"
          loading-anim-type="spinner-small-dark"
          className="w-full h-full block"
        ></spline-viewer>
      </div>

      <div className="relative z-20 w-full max-w-[1600px] mx-auto px-8 md:px-16 pointer-events-none">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-end gap-12 lg:gap-8 pointer-events-auto">
          <div className="lg:col-span-7 space-y-12 animate-fade-up">
            <h1 className="hero-title font-bold text-white tracking-tighter mix-blend-screen drop-shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
              The Operating System<br />for AI-First Companies
            </h1>
            <div className="flex flex-wrap items-center gap-x-6 gap-y-4 text-[10px] font-black tracking-[0.4em] text-zinc-400 uppercase">
              <a href="#services" className="text-white hover:text-zinc-300 transition-colors">SERVICES</a> \ 
              <a href="#portfolio" className="hover:text-white transition-colors">PORTFOLIO</a> \ 
              <a href="#contact" className="hover:text-white transition-colors">CONTACT US</a>
            </div>
          </div>

          <div className="lg:col-span-5 flex flex-col items-start lg:items-end space-y-12 animate-fade-up [animation-delay:200ms]">
            <p className="text-zinc-300 text-sm md:text-base max-w-[400px] leading-relaxed lg:text-right font-medium drop-shadow-[0_5px_15px_rgba(0,0,0,0.8)]">
              We engineer autonomous systems that replace manual workflows, letting your team focus on high-leverage strategy while we handle the execution.
            </p>
            <div className="flex flex-wrap items-center gap-6">
              <a 
                href="https://calendly.com/prajwalofficial14/new-meeting"
                target="_blank" 
                rel="noopener noreferrer"
                className="px-12 py-4 border border-white/10 bg-black/40 backdrop-blur-md rounded-full text-[11px] font-bold tracking-[0.2em] uppercase hover:bg-white hover:text-black hover:border-white transition-all active:scale-95 duration-300"
              >
                Book a Demo Call
              </a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom fade for smooth transition to the next section */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black via-black/90 to-transparent pointer-events-none z-[15]"></div>
    </section>
  );
};

export default Hero;