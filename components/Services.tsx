'use client';

import { motion } from 'motion/react';
import { 
  Bot, 
  TerminalSquare, 
  BrainCircuit, 
  LineChart 
} from 'lucide-react';

const services = [
  {
    icon: <Bot className="w-8 h-8 text-white" />,
    title: "AI Automation",
    description: "Replace manual, repetitive workflows with intelligent systems that run 24/7. We identify bottlenecks and deploy targeted automation to improve operational efficiency.",
    features: ["Automate repetitive workflows", "Reduce manual work", "Improve efficiency", "Data extraction & processing"]
  },
  {
    icon: <TerminalSquare className="w-8 h-8 text-white" />,
    title: "Custom Software Development",
    description: "Bespoke software tailored entirely to your business logic. We build fast, scalable, and secure applications to serve as the backbone of your operations.",
    features: ["Internal business tools", "Customer-facing applications", "Web platforms", "Legacy system modernization"]
  },
  {
    icon: <BrainCircuit className="w-8 h-8 text-white" />,
    title: "AI Integration",
    description: "Embed state-of-the-art AI capabilities directly into your existing software ecosystem to supercharge capabilities and unlock new insights.",
    features: ["Chatbots", "AI assistants", "Knowledge systems", "Intelligent workflows"]
  },
  {
    icon: <LineChart className="w-8 h-8 text-white" />,
    title: "Technical Consulting",
    description: "Strategic advisory to help you navigate the complex technology landscape. We architect solutions optimized for long-term business goals.",
    features: ["Strategy", "Architecture", "Technology planning", "Process improvement"]
  }
];

export function Services() {
  return (
    <section id="services" className="py-32 relative">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mb-20">
          <div className="text-xs font-mono tracking-[0.1em] uppercase text-white/50 mb-4">Capabilities</div>
          <h2 className="text-4xl md:text-5xl font-bold font-heading mb-6 text-white">Services</h2>
          <p className="text-xl text-slate-400">
            Comprehensive solutions designed to elevate your business capabilities through strategic application of technology.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="group p-8 md:p-10 rounded-xl bg-white/[0.03] border border-white/[0.08] hover:border-accent-500/30 transition-all duration-500"
            >
              <div className="w-16 h-16 rounded-lg bg-accent-500/10 flex items-center justify-center mb-8 border border-accent-500/20 group-hover:scale-110 group-hover:bg-accent-500/20 transition-all duration-500">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold font-heading mb-4 text-white">{service.title}</h3>
              <p className="text-slate-400 mb-8 leading-relaxed">
                {service.description}
              </p>
              <ul className="space-y-3">
                {service.features.map((feature, fIdx) => (
                  <li key={fIdx} className="flex items-center text-sm text-zinc-400">
                    <div className="w-2 h-2 rounded-full bg-accent-500 mr-3" />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
