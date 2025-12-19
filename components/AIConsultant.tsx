
import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI } from "@google/genai";
import { Message } from '../types';

interface AIConsultantProps {
  onClose: () => void;
}

const AIConsultant: React.FC<AIConsultantProps> = ({ onClose }) => {
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', text: "Protocol initiated. I am the Nexus Architect. Describe your manual bottlenecks for a custom strategy." }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({ top: scrollRef.current.scrollHeight, behavior: 'smooth' });
    }
  }, [messages, isLoading]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;
    const userMsg = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsLoading(true);

    try {
      // Create instance right before use to ensure the latest API key is used
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      
      // Reconstruct conversation history into a single prompt for robust text generation
      const historyContext = messages.map(m => `${m.role === 'user' ? 'Client' : 'Architect'}: ${m.text}`).join('\n');
      const finalPrompt = `${historyContext}\nClient: ${userMsg}\nArchitect:`;

      const response = await ai.models.generateContent({
        model: 'gemini-3-pro-preview',
        contents: { parts: [{ text: finalPrompt }] },
        config: {
          systemInstruction: "You are the Nexus Automation Architect. Provide concise, professional technical briefs. Focused on AI ROI.",
        },
      });

      // Access .text property directly as it is not a method
      const responseText = response.text;
      setMessages(prev => [...prev, { role: 'model', text: responseText || "Connection error." }]);
    } catch (e) {
      console.error("AI Error:", e);
      setMessages(prev => [...prev, { role: 'model', text: "Systems offline. Please retry." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
      <div className="absolute inset-0 bg-black/95 backdrop-blur-xl transition-opacity animate-in fade-in" onClick={onClose}></div>
      <div className="relative w-full max-w-2xl h-[85vh] sm:h-[80vh] bg-zinc-950 border border-white/10 rounded-[2rem] sm:rounded-[2.5rem] flex flex-col shadow-2xl animate-in zoom-in duration-300">
        <div className="px-6 sm:px-10 py-5 sm:py-8 border-b border-white/5 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <div className="w-8 h-8 bg-white rotate-45 flex items-center justify-center">
              <span className="-rotate-45 font-black text-black text-[10px]">N</span>
            </div>
            <span className="text-xs font-bold tracking-[0.2em] uppercase">Architect</span>
          </div>
          <button onClick={onClose} className="p-2 text-zinc-500 hover:text-white transition-colors">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M6 18L18 6M6 6l12 12" strokeWidth="2" strokeLinecap="round"/></svg>
          </button>
        </div>

        <div ref={scrollRef} className="flex-1 overflow-y-auto px-6 sm:px-10 py-6 sm:py-10 space-y-6 sm:space-y-8">
          {messages.map((m, i) => (
            <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-[90%] ${m.role === 'user' ? 'text-white text-right' : 'text-zinc-400'}`}>
                <div className="text-[9px] font-black tracking-widest uppercase mb-1 opacity-40">
                  {m.role === 'user' ? 'Client' : 'Nexus'}
                </div>
                <p className="text-sm leading-relaxed whitespace-pre-wrap">{m.text}</p>
              </div>
            </div>
          ))}
          {isLoading && <div className="text-[9px] font-black tracking-widest text-zinc-700 animate-pulse uppercase">Analysing...</div>}
        </div>

        <div className="p-6 sm:p-8 border-t border-white/5">
          <div className="relative flex items-center">
            <input 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="System brief request..."
              className="w-full bg-zinc-900/50 border border-white/10 rounded-full px-6 sm:px-8 py-3 sm:py-4 pr-14 sm:pr-16 focus:outline-none focus:border-white/20 transition-all text-sm"
            />
            <button 
              onClick={handleSend}
              disabled={isLoading || !input.trim()}
              className="absolute right-2 p-2.5 sm:p-3 bg-white text-black rounded-full hover:scale-105 active:scale-95 transition-all disabled:opacity-20"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7" strokeWidth="2.5"/></svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIConsultant;
