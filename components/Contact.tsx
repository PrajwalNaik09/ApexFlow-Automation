"use client";

import React from 'react';
import { Zap, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-32 px-6 md:px-12 bg-black border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative rounded-[3rem] overflow-hidden bg-gradient-to-br from-zinc-800 to-zinc-950 border border-white/10 p-12 md:p-32 text-center group"
        >
          
          {/* Subtle Background Glows (Animated) */}
          <motion.div 
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08)_0%,transparent_60%)] pointer-events-none"
          />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 blur-[100px] rounded-full pointer-events-none"></div>
          
          <div className="relative z-10 flex flex-col items-center gap-10">
            
            {/* Floating Icon */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="w-20 h-20 rounded-3xl bg-white/5 border border-white/10 flex items-center justify-center backdrop-blur-md shadow-[0_0_40px_rgba(255,255,255,0.05)] group-hover:scale-110 group-hover:bg-white/10 transition-all duration-500"
            >
              <Zap className="w-8 h-8 text-white fill-white drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]" />
            </motion.div>

            {/* Heading */}
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="text-4xl md:text-6xl font-bold tracking-tighter text-white max-w-4xl leading-[1.1] drop-shadow-2xl"
            >
              Transform the way you manage <br className="hidden md:block"/>
              AI tasks with ApexFlow
            </motion.h2>

            {/* CTA Button */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="mt-4"
            >
              <motion.a 
                href="https://calendly.com/prajwalofficial14/new-meeting" 
                target="_blank" 
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-3 px-10 py-5 bg-white text-black rounded-full text-sm font-bold tracking-widest uppercase transition-all duration-300 shadow-[0_0_40px_rgba(255,255,255,0.2)] hover:shadow-[0_0_60px_rgba(255,255,255,0.4)]"
              >
                Book a Demo
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </motion.a>
            </motion.div>
          </div>

        </motion.div>
      </div>
    </section>
  );
};

export default Contact;