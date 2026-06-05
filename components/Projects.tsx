'use client';

import { motion } from 'motion/react';
import { ExternalLink } from 'lucide-react';
import Image from 'next/image';

const projects = [
  {
    title: "ARES Dashboard",
    category: "AI Security",
    description: "An AI-powered automated red-team platform designed to generate, organize, and manage adversarial testing payloads for AI systems. ARES helps security researchers, developers, and organizations systematically evaluate model behavior, identify weaknesses, and improve AI resilience through scalable and intelligent red-team operations.",
    image: "/ares_dashboard_logo.png",
    supplementalImage: "/ares1.png"
  },
  {
    title: "AI Control Plane",
    category: "Infrastructure",
    description: "A centralized platform for managing, coordinating, and governing AI systems. The AI Control Plane provides tools for model orchestration, oversight, monitoring, policy enforcement, and workflow automation, helping organizations deploy AI safely and efficiently at scale.",
    image: "/ai_control_plane_logo.png",
    supplementalImage: "/ai_control_plane1.jpg"
  },
  {
    title: "Anchor Interface",
    category: "User Experience",
    description: "A trust-centered user interface built around an intelligent AI assistant designed to act as a dependable guide, coordinator, and knowledge companion. Anchor emphasizes transparency, usability, and confidence, helping users interact with complex systems through a natural and intuitive experience.",
    image: "/anchor_interface.png"
  },
  {
    title: "CaptureFlow",
    category: "Knowledge Platform",
    description: "An AI-powered cognitive offload system that transforms captured information into structured knowledge. Through a simple capture workflow, users can instantly collect information while AI automatically extracts, organizes, categorizes, and stores it for future retrieval, creating a seamless external memory system.",
    image: "/captureflow_logo.png"
  },
  {
    title: "Flux UI",
    category: "Interface Framework",
    description: "A next-generation adaptive interface framework designed around fluid interaction, contextual awareness, and intelligent workflow management. Flux UI dynamically adapts to user needs, reducing friction and creating more natural interactions between people and technology.",
    image: "/Flux_UI.png"
  },
  {
    title: "Red Set ProtoCell",
    category: "AI Safety Infrastructure",
    description: "An open-source AI safety and security platform designed to function as an immune system for artificial intelligence. At its core is a dual-agent Sniper/Spotter architecture, where specialized agents work together to discover, evaluate, and document vulnerabilities in AI systems. Through automated red-teaming, behavioral analysis, risk scoring, and transparent auditing, Red Set ProtoCell helps improve the safety, reliability, and alignment of advanced AI models.",
    image: "/red_set_logo.png",
    supplementalImage: "/red_set1.png"
  },
  {
    title: "The Sentinel Ecosystem",
    category: "AI Ecosystem",
    description: "A unified ecosystem of AI safety, governance, productivity, and human-AI collaboration technologies. The Sentinel Ecosystem connects projects such as Red Set ProtoCell, ARES Dashboard, AI Control Plane, Anchor, CaptureFlow, and Flux UI into a comprehensive framework for building, managing, securing, and interacting with intelligent systems. Its mission is to create trustworthy, human-centered AI infrastructure that scales safely alongside increasingly capable AI technologies.",
    image: "/sentinel_ecosystem_logo.png"
  }
];

export function Projects() {
  return (
    <section className="py-32 relative text-left">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-bold font-heading mb-6 text-white">Innovation Portfolio</h2>
            <p className="text-xl text-slate-400">
              A selection of our active projects and platforms pushing the boundaries of AI infrastructure and knowledge management.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="group relative h-full flex flex-col rounded-xl bg-white/[0.03] border border-white/5 overflow-hidden hover:bg-white/[0.05] transition-all duration-300"
            >
              <div className="h-56 w-full relative overflow-hidden bg-white/5 flex items-center justify-center p-8">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-contain p-8 group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] to-transparent opacity-80" />
                <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/40 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity transform group-hover:scale-100 scale-90 border border-white/10 z-10">
                  <ExternalLink className="w-5 h-5 text-white" />
                </div>
              </div>
              
              <div className="p-8 flex-1 flex flex-col">
                <div className="text-xs font-mono tracking-[0.1em] uppercase text-accent-500 mb-4 block">
                  {project.title}
                </div>
                {/* @ts-ignore */}
                {project.supplementalImage && (
                  <div className="relative w-full h-32 mb-4 rounded border border-white/10 overflow-hidden">
                    <Image
                      /* @ts-ignore */
                      src={project.supplementalImage}
                      alt={`${project.title} interface`}
                      fill
                      className="object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                )}
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
