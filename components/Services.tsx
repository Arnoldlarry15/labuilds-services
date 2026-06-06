'use client';

import { motion } from 'motion/react';
import { CheckCircle2, ChevronRight, Bot, Target, Shield, Clock, BrainCircuit, Activity, BarChart, HardDrive } from 'lucide-react';

export function Services() {
  const services = [
    {
      title: 'AI Business Systems Audit',
      description: 'I analyze your workflows, operations, and existing tools to identify where AI and automation can save time, reduce costs, and improve efficiency.',
      price: '$99',
      features: [
        'Automation opportunities',
        'AI readiness analysis',
        'Implementation roadmap',
        'Tool recommendations'
      ]
    },
    {
      title: 'Custom AI Dashboard & Internal Tool Development',
      description: 'Custom AI-powered dashboards, internal business tools, and operational interfaces designed to centralize information, automate tasks, and improve decision-making.',
      price: '$199',
      features: [
        'Admin dashboards',
        'AI control panels',
        'Lead management systems',
        'Analytics tools',
        'Productivity hubs'
      ]
    },
    {
      title: 'AI Workflow Automation Setup',
      description: 'I design AI-powered automations that reduce repetitive work, organize operations, and streamline customer communication using modern AI tools and integrations.',
      price: '$250',
      features: [
        'Lead follow-ups',
        'Customer intake',
        'Email automation',
        'CRM workflows',
        'Task automation'
      ]
    },
    {
      title: 'AI MVP Strategy & Prototyping',
      description: 'I help founders and businesses rapidly plan, structure, and prototype AI-powered product ideas with practical development guidance and scalable architecture planning.',
      price: '$500',
      features: [
        'Practical development guidance',
        'Scalable architecture planning',
        'Rapid prototyping structure',
        'Foundational system setup'
      ]
    },
    {
      title: 'AI Integration & Implementation Consulting',
      description: 'Guidance for integrating AI into existing workflows, tools, or products safely and effectively without unnecessary complexity or hype.',
      price: '$199',
      features: [
        'Safe integration practices',
        'Workflow enhancement',
        'Tool setup guidance',
        'Complexity reduction'
      ]
    },
    {
      title: 'AI Safety & Adversarial Testing',
      description: 'Structured testing for AI vulnerabilities, prompt injection risks, unsafe outputs, misuse vectors, and automation failure points with mitigation recommendations included.',
      price: '$500',
      features: [
        'Vulnerability assessments',
        'Prompt injection testing',
        'Risk mitigation plans',
        'Automation failure analysis'
      ]
    },
    {
      title: 'AI Systems Architecture & Infrastructure Planning',
      description: 'Scalable AI system design for startups, platforms, and advanced applications including infrastructure planning, model orchestration, deployment strategy, and operational architecture.',
      price: '$750',
      features: [
        'Scalable system design',
        'Infrastructure planning',
        'Model orchestration',
        'Deployment strategy'
      ]
    },
    {
      title: 'Monthly AI Systems Advisory',
      description: 'Ongoing support for AI strategy, automation planning, infrastructure decisions, workflow optimization, and emerging AI opportunities.',
      price: '$150/month',
      features: [
        'Ongoing strategic support',
        'Automation planning',
        'Infrastructure decisions',
        'Workflow optimization'
      ]
    }
  ];

  return (
    <section className="py-32 relative" id="services">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="text-xs font-mono tracking-[0.1em] uppercase text-white/50 mb-4 pt-10">Products & Services</div>
          <h2 className="text-4xl md:text-5xl font-bold font-heading mb-6 text-white text-center">Services & Pricing</h2>
          <p className="text-xl text-slate-400">
            Strategic AI implementations, automation workflows, and expert consulting to streamline your operations and scale your systems.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (idx % 3) * 0.1 }}
              className="group flex flex-col p-8 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-accent-500/30 hover:bg-white/[0.05] transition-all duration-300"
            >
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-white mb-4 tracking-tight">
                  {service.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-8 h-24">
                  {service.description}
                </p>
                <div className="mb-8 pt-6 border-t border-white/10">
                  <span className="text-xs uppercase tracking-wider font-semibold text-slate-500 mb-2 block">
                    Starting at
                  </span>
                  <div className="flex items-end">
                    <span className="text-4xl font-bold text-accent-500">
                      {service.price}
                    </span>
                  </div>
                </div>
                
                <ul className="space-y-4 mb-8">
                  {service.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-accent-500/80 mr-3 shrink-0" />
                      <span className="text-sm text-slate-300 leading-snug">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
