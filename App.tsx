import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import HowItWorks from './components/HowItWorks';
import Portfolio from './components/Portfolio';
import About from './components/About';
import TechMarquee from './components/TechMarquee';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import AIConsultant from './components/AIConsultant';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [isConsultantOpen, setIsConsultantOpen] = useState(false);

  return (
    <div className="min-h-screen bg-black text-white selection:bg-white selection:text-black overflow-x-hidden">
      <Navbar onOpenConsultant={() => setIsConsultantOpen(true)} />
      
      <main>
        <Hero />
        <Services />
        <HowItWorks />
        <Portfolio />
        <About />
        <TechMarquee />
        <FAQ />
        <Contact />
      </main>

      <Footer />

      {isConsultantOpen && (
        <AIConsultant onClose={() => setIsConsultantOpen(false)} />
      )}
    </div>
  );
};

export default App;