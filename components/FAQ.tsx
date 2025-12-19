import React, { useState } from 'react';
import { Plus } from 'lucide-react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      q: "Is AI really reliable for customer-facing tasks?",
      a: "Yes. Our AI agents are trained to sound natural, respectful, and consistent. They don't take breaks, forget, or miss calls—giving your customers a professional experience 24/7."
    },
    {
      q: "What if the AI makes mistakes?",
      a: "We design systems with human fallback. If AI can't resolve an issue, it hands off seamlessly to a real person — so customers are never left hanging."
    },
    {
      q: "What's the cost?",
      a: "Zero upfront risk. We build the automation, you test it, and you only pay if it works."
    },
    {
      q: "Do I need to change my whole business to use this?",
      a: "Not at all. We plug into the tools you already use (CRM, phone, email, website) and automate workflows step by step."
    },
    {
      q: "What if I'm not tech-savvy?",
      a: "No problem. We handle setup, training, and support. You don't need technical skills — you just see the results."
    },
    {
      q: "How do I know this will actually work for my industry?",
      a: "Every industry has repetitive tasks. Whether it's leads, calls, support, or scheduling — AI takes care of the busywork. We tailor it to your business."
    },
    {
      q: "Is my customer data safe with AI?",
      a: "Yes. We use encrypted, secure systems and follow your policies. Sensitive data never leaves your control."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative w-full bg-black py-32 px-6 overflow-hidden border-t border-white/5">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-900/5 to-transparent pointer-events-none" />
      
      {/* Radial glow effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gray-800/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-block mb-4 px-4 py-1.5 rounded-full border border-gray-800/60 bg-gray-900/30 backdrop-blur-sm">
            <span className="text-xs uppercase tracking-widest text-gray-500 font-medium">FAQ</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-4 tracking-tight">
            Questions you might have
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            Everything you need to know about our AI automation services
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-2">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`group relative bg-gradient-to-br from-neutral-800/30 to-neutral-900/20 border backdrop-blur-xl rounded-2xl overflow-hidden transition-all duration-500 ease-out ${
                openIndex === index 
                  ? 'border-neutral-600/60 shadow-2xl shadow-black/50' 
                  : 'border-neutral-700/30 hover:border-neutral-600/50'
              }`}
            >
              {/* Hover glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-neutral-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              
              <button
                className="relative w-full px-7 py-6 flex items-start justify-between text-left transition-all duration-300 focus:outline-none"
                onClick={() => toggleFAQ(index)}
                aria-expanded={openIndex === index}
              >
                <span className={`text-lg font-semibold pr-6 transition-colors duration-300 ${
                  openIndex === index ? 'text-white' : 'text-gray-300 group-hover:text-white'
                }`}>
                  {faq.q}
                </span>
                <div className={`mt-1 flex-shrink-0 w-6 h-6 rounded-full border flex items-center justify-center transition-all duration-500 ${
                  openIndex === index 
                    ? 'bg-white border-white rotate-45' 
                    : 'bg-transparent border-neutral-500 group-hover:border-neutral-400 group-hover:bg-neutral-700/50'
                }`}>
                  <Plus 
                    size={16} 
                    className={`transition-all duration-500 ${
                      openIndex === index ? 'text-black' : 'text-gray-400 group-hover:text-gray-300'
                    }`}
                    strokeWidth={2.5}
                  />
                </div>
              </button>
              
              <div 
                className="overflow-hidden transition-all duration-500 ease-out"
                style={{
                  maxHeight: openIndex === index ? '400px' : '0',
                  opacity: openIndex === index ? 1 : 0
                }}
              >
                <div className="px-7 pb-6 pt-0">
                  <div className="w-full h-px bg-gradient-to-r from-transparent via-neutral-600/40 to-transparent mb-5" />
                  <p className="text-gray-400 text-base leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA hint */}
        <div className="mt-16 text-center">
          <p className="text-gray-600 text-sm">
            Still have questions? <a href="#contact" className="text-gray-400 hover:text-white transition-colors cursor-pointer underline decoration-gray-700 underline-offset-4">Get in touch</a>
          </p>
        </div>
      </div>
    </section>
  );
}