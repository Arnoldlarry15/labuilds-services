'use client';

import { motion } from 'motion/react';
import { ShieldCheck, Code, Zap, Lightbulb } from 'lucide-react';

const trustPillars = [
  {
    icon: <Code className="w-6 h-6 text-accent-500" />,
    title: "Custom Software",
    desc: "Robust, scalable solutions tailored to your processes."
  },
  {
    icon: <Zap className="w-6 h-6 text-accent-500" />,
    title: "AI Automation",
    desc: "Intelligent systems that eliminate repetitive tasks."
  },
  {
    icon: <ShieldCheck className="w-6 h-6 text-accent-500" />,
    title: "Enterprise Grade",
    desc: "Secure architectures focused on data privacy."
  },
  {
    icon: <Lightbulb className="w-6 h-6 text-accent-500" />,
    title: "Innovation Focus",
    desc: "Leveraging emerging tech to build competitive advantages."
  }
];

export function Trust() {
  return (
    <section className="py-20 border-t border-white/5 bg-white/[0.02]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="text-xs font-mono tracking-[0.1em] uppercase text-white/50 mb-4">Core Expertise</div>
          <h2 className="text-3xl font-bold font-heading mb-4 text-white">Engineering the Future of Work</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            We partner with forward-thinking organizations to build intelligent infrastructure that drives efficiency and growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {trustPillars.map((pillar, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-6 rounded-xl bg-white/[0.03] border border-white/5 hover:border-white/10 transition-colors backdrop-blur-md flex flex-col"
            >
              <div className="w-12 h-12 rounded-lg bg-accent-500/10 flex items-center justify-center mb-6">
                {pillar.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">{pillar.title}</h3>
              <p className="text-slate-400">{pillar.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
