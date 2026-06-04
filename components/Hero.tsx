'use client';

import { motion } from 'motion/react';
import { ChevronRight } from 'lucide-react';
import Link from 'next/link';

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-32 pb-20 overflow-hidden">
      {/* Background elegant gradient blooms */}
      <div className="absolute top-0 left-1/2 -ml-[40rem] w-[80rem] h-[50rem] opacity-30 pointer-events-none bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-accent-600/20 via-black to-black z-0" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="inline-flex items-center gap-2 mb-8">
              <span className="flex h-2 w-2 rounded-full bg-accent-500"></span>
              <span className="text-xs font-mono tracking-[0.1em] uppercase text-white/50">Founded by Larry Arnold &mdash; Future Focused</span>
            </div>
            
            <h1 className="text-[3.5rem] md:text-7xl leading-[0.95] font-bold font-heading tracking-[-0.03em] mb-8 text-white">
              AI Automation & <br className="hidden md:block" />
              <span className="text-accent-500">Custom Software</span> <br className="hidden md:block" />
              That Scales.
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="text-lg md:text-xl text-zinc-400 mb-12 max-w-md mx-auto leading-relaxed">
              We help organizations automate repetitive work and unlock the power of AI through intelligent business systems.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              href="#contact"
              className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3 bg-accent-500 hover:opacity-90 text-white rounded-full font-bold transition-all duration-300"
            >
              Book a Free Consultation
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="#services"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3 border border-white/20 text-white rounded-full font-bold transition-all duration-300 hover:bg-white/5"
            >
              View Services
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
