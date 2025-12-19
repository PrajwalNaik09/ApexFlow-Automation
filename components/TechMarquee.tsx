import React from 'react';

const TechMarquee: React.FC = () => {
  const topItems = [
    'WhatsApp API', 'Slack', 'OpenAI', 'Anthropic', 'Cohere', 
    'Make.com', 'Zapier', 'LangChain', 'Vertex AI',
    'Python', 'TypeScript', 'Docker', 'Kubernetes'
  ];
  
  const bottomItems = [
    'Gmail API', 'Google Sheets', 'Meta Ads', 'Google Ads', 
    'HubSpot', 'Salesforce', 'Pipedrive', 'Zendesk',
    'Stripe', 'Twilio', 'Notion API', 'Airtable'
  ];

  return (
    <section className="bg-black py-16 sm:py-20 md:py-24 overflow-hidden relative border-t border-white/5">
      {/* Radial background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(30,30,30,0.3)_0%,transparent_70%)]" />
      </div>

      <div className="max-w-7xl mx-auto mb-8 sm:mb-10 md:mb-12 px-5 sm:px-6 md:px-12 text-center relative z-10">
        <p className="text-zinc-500 text-xs font-bold tracking-[0.2em] uppercase">Powered By</p>
      </div>

      {/* First marquee - Left to Right */}
      <div className="relative overflow-hidden py-4 marquee-container group">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-r from-black via-black/80 to-transparent z-20 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-l from-black via-black/80 to-transparent z-20 pointer-events-none" />
        
        {/* Added transform-gpu to force hardware acceleration */}
        <div className="flex whitespace-nowrap animate-scroll-left hover:[animation-play-state:paused] transform-gpu will-change-transform">
          {/* Repeat list 4 times to ensure smooth looping on wide screens */}
          {[...topItems, ...topItems, ...topItems, ...topItems].map((item, idx) => (
            <div
              key={`top-${idx}`}
              className="inline-block px-6 sm:px-8 py-3 sm:py-4 mx-2 sm:mx-3 bg-zinc-900/30 border border-white/5 rounded-2xl text-zinc-400 text-xs sm:text-sm font-medium tracking-wide transition-all duration-300 backdrop-blur-sm hover:bg-zinc-800/50 hover:border-white/20 hover:text-white hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(255,255,255,0.05)]"
            >
              {item}
            </div>
          ))}
        </div>
      </div>

      {/* Second marquee - Right to Left */}
      <div className="relative overflow-hidden py-4 marquee-container mt-4 group">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-r from-black via-black/80 to-transparent z-20 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-l from-black via-black/80 to-transparent z-20 pointer-events-none" />
        
        {/* Added transform-gpu to force hardware acceleration */}
        <div className="flex whitespace-nowrap animate-scroll-right hover:[animation-play-state:paused] transform-gpu will-change-transform">
          {[...bottomItems, ...bottomItems, ...bottomItems, ...bottomItems].map((item, idx) => (
            <div
              key={`bottom-${idx}`}
              className="inline-block px-6 sm:px-8 py-3 sm:py-4 mx-2 sm:mx-3 bg-zinc-900/30 border border-white/5 rounded-2xl text-zinc-400 text-xs sm:text-sm font-medium tracking-wide transition-all duration-300 backdrop-blur-sm hover:bg-zinc-800/50 hover:border-white/20 hover:text-white hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(255,255,255,0.05)]"
            >
              {item}
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes scroll-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        @keyframes scroll-right {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }

        .animate-scroll-left {
          animation: scroll-left 60s linear infinite;
        }

        .animate-scroll-right {
          animation: scroll-right 60s linear infinite;
        }
      `}</style>
    </section>
  );
}

export default TechMarquee;
