import React from 'react';
import { Twitter, Facebook, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="relative bg-black pt-16 sm:pt-20 md:pt-24 pb-10 sm:pb-12 px-5 sm:px-6 md:px-12 overflow-hidden border-t border-white/5">
      
      <div className="max-w-[1400px] mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 sm:gap-12 lg:gap-8 mb-16 sm:mb-20 md:mb-24">
          
          {/* Brand Column */}
          <div className="md:col-span-4 space-y-6">
            <div className="flex items-center gap-3">
              {/* Logo Icon */}
              <div className="w-10 h-10 bg-white rotate-45 flex items-center justify-center rounded-lg">
                  <span className="-rotate-45 font-black text-black text-xl">A</span>
              </div>
              <span className="text-2xl sm:text-3xl font-bold tracking-tighter text-white font-[Inter]">ApexFlow</span>
            </div>
            <p className="text-zinc-500 text-sm leading-relaxed max-w-sm">
              Your all-in-one automation agency — build, deploy, and scale AI agents across all workflows from one powerful framework.
            </p>
          </div>

          {/* Links Column - Replaced About & Support with this */}
          <div className="md:col-span-4 space-y-6 sm:space-y-8">
            <h4 className="font-bold text-white text-base">Explore</h4>
            <ul className="space-y-4 text-zinc-500 text-sm font-medium">
              <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
              <li><a href="#portfolio" className="hover:text-white transition-colors">Portfolio</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Newsletter Column */}
          <div className="md:col-span-4 space-y-6 sm:space-y-8">
            <h4 className="font-bold text-white text-base">Get Updates</h4>
            <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-2 bg-zinc-900 border border-zinc-800 rounded-2xl sm:rounded-full p-3 sm:p-1.5 sm:pl-5 focus-within:border-zinc-700 transition-colors">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="bg-transparent border-none outline-none text-sm w-full text-zinc-300 placeholder:text-zinc-600 font-medium px-1"
              />
              <button className="px-5 py-3 bg-white text-black text-sm font-bold rounded-full hover:bg-zinc-200 transition-colors">
                Subscribe
              </button>
            </div>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:bg-white hover:text-black transition-all">
                {/* Discord Icon SVG */}
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057 13.1117 13.1117 0 01-1.872-.892.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.299 12.299 0 01-1.873.892.077.077 0 00-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 00.084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z"/></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:bg-white hover:text-black transition-all">
                <Twitter className="w-4 h-4" fill="currentColor" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:bg-white hover:text-black transition-all">
                <Facebook className="w-4 h-4" fill="currentColor" />
              </a>
               <a href="#" className="w-10 h-10 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:bg-white hover:text-black transition-all">
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 sm:gap-6 relative z-20">
          <p className="text-zinc-500 text-xs font-medium">
            © 2025 ApexFlow. All rights reserved.
          </p>
          <div className="flex gap-8">
            <a href="#" className="text-zinc-500 text-xs font-medium hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="text-zinc-500 text-xs font-medium hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>

      {/* Big Background Text */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-[20%] pointer-events-none select-none z-0 w-full overflow-hidden flex justify-center">
        <h1 className="text-[26vw] sm:text-[23vw] font-bold leading-none tracking-tighter text-zinc-950 whitespace-nowrap">
          ApexFlow
        </h1>
      </div>
    </footer>
  );
};

export default Footer;
