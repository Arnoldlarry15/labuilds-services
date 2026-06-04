'use client';

import { motion } from 'motion/react';
import { ExternalLink } from 'lucide-react';

const projects = [
  {
    title: "CaptureFlow",
    category: "Knowledge Platform",
    description: "AI-powered cognitive offload and knowledge capture platform designed to help users instantly capture, organize, and retrieve information.",
    color: "from-blue-500/20 to-accent-500/20"
  },
  {
    title: "Red Set ProtoCell",
    category: "AI Safety Infrastructure",
    description: "Open-source AI safety platform designed as an immune system for AI systems through ethical red teaming and intelligent oversight.",
    color: "from-rose-500/20 to-red-600/20"
  },
  {
    title: "Sentinel Protocol Ecosystem",
    category: "AI Infrastructure",
    description: "A growing ecosystem of AI infrastructure, safety, automation, and productivity technologies designed for enterprise scalability.",
    color: "from-emerald-500/20 to-teal-500/20"
  }
];

export function Projects() {
  return (
    <section className="py-32 relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-bold font-heading mb-6 text-white">Innovation Portfolio</h2>
            <p className="text-xl text-slate-400">
              A selection of our active projects and platforms pushing the boundaries of AI infrastructure and knowledge management.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="group relative h-full flex flex-col rounded-xl bg-white/[0.03] border border-white/5 overflow-hidden hover:bg-white/[0.05] transition-all duration-300"
            >
              <div className={`h-48 w-full bg-gradient-to-br ${project.color} relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/20 backdrop-blur-[2px]" />
                <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/40 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity transform group-hover:scale-100 scale-90 border border-white/10">
                  <ExternalLink className="w-5 h-5 text-white" />
                </div>
              </div>
              
              <div className="p-8 flex-1 flex flex-col">
                <div className="text-xs font-mono tracking-[0.1em] uppercase text-accent-500 mb-4 block">
                  {project.title}
                </div>
                <p className="text-zinc-400 leading-relaxed max-w-sm mb-6 flex-1 text-sm">
                  {project.description}
                </p>
                <div className="mt-auto flex gap-2">
                  <span className="text-[0.65rem] border border-white/20 px-2 py-[2px] rounded-full uppercase tracking-widest text-white">
                    {project.category}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
