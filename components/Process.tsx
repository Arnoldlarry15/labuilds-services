'use client';

import { motion } from 'motion/react';

const steps = [
  {
    num: "01",
    title: "Discovery & Consultation",
    desc: "We analyze your operations, identify bottlenecks, and map out where AI and custom software can drive the most impact."
  },
  {
    num: "02",
    title: "Solution Design",
    desc: "Architecting a secure, scalable solution tailored to your specific business requirements and technical ecosystem."
  },
  {
    num: "03",
    title: "Development & Implementation",
    desc: "Agile building of the core systems with continuous feedback loops, ensuring rapid deployment and value realization."
  },
  {
    num: "04",
    title: "Optimization & Support",
    desc: "Post-launch monitoring, iterative improvements, and ongoing support to ensure long-term operational success."
  }
];

export function Process() {
  return (
    <section className="py-32 bg-[#050505] border-y border-white/5 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-accent-500/50 to-transparent" />
      
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl font-bold font-heading mb-6 text-white">How We Work</h2>
          <p className="text-xl text-slate-400">
            A structured, transparent process designed to deliver functional software and measurable business outcomes rapidly.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connecting line for desktop */}
          <div className="hidden lg:block absolute top-[4.5rem] left-[10%] right-[10%] h-[2px] bg-white/10 z-0" />

          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="relative z-10 flex flex-col pt-8 lg:pt-0"
            >
              <div className="w-20 h-20 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-center text-2xl font-bold font-mono text-accent-500 mb-8 mx-auto relative backdrop-blur-md">
                {step.num}
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold text-white mb-4">{step.title}</h3>
                <p className="text-slate-400 leading-relaxed">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
