'use client';

import { motion } from 'motion/react';
import { Shield, BrainCircuit, Command } from 'lucide-react';

export function NowWorkingOn() {
  const currentProjects = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'RSEA Agent',
      description: 'An AI agent built not just to survive moltbook but to protect other agents, the safety of the platform, and the reputation of AI agents. Operating in a high-stakes, adversarial environment, RSEA focuses on securing the ecosystem and ensuring ethical, resilient interactions.',
      status: 'In Development'
    },
    {
      icon: <BrainCircuit className="w-6 h-6" />,
      title: 'CaptureFlow',
      description: 'An AI-powered cognitive offloading system transforming information capture into a nearly frictionless experience. By simply dragging a box around content, it automatically extracts, structures, and stores it as searchable knowledge, acting as a personal memory layer.',
      status: 'Concept Validation'
    },
    {
      icon: <Command className="w-6 h-6" />,
      title: 'AI Control Plane',
      description: 'A centralized command and orchestration platform designed to manage multiple models, agents, tools, and workflows from a single interface. It provides intelligent routing, agent orchestration, task monitoring, and real-time operational visibility.',
      status: 'Early Prototype'
    }
  ];

  return (
    <section className="py-24 relative" id="now-working-on">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold font-heading mb-6 text-white pt-10">Now Working On</h2>
          <p className="text-xl text-slate-400">
            A look into active projects, experiments, and the latest technologies I&apos;m integrating.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentProjects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-8 rounded-xl bg-white/[0.03] border border-white/5 relative group hover:bg-white/[0.05] transition-colors"
            >
              <div className="w-12 h-12 rounded-lg bg-accent-500/10 text-accent-500 flex items-center justify-center mb-6">
                {project.icon}
              </div>
              
              <div className="absolute top-8 right-8 px-3 py-1 rounded-full text-xs font-mono font-medium border border-accent-500/20 text-accent-400 bg-accent-500/5">
                {project.status}
              </div>
              
              <h3 className="text-xl font-bold text-white mb-3">
                {project.title}
              </h3>
              
              <p className="text-slate-400 leading-relaxed">
                {project.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
