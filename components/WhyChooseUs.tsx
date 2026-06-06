'use client';

import { motion } from 'motion/react';
import { Target, Cpu, CheckCircle2, TrendingUp, Handshake } from 'lucide-react';

const reasons = [
  {
    icon: <Target className="w-5 h-5 text-accent-500" />,
    title: "Personalized solutions",
    desc: "No cookie-cutter templates. I solve your specific operational challenges."
  },
  {
    icon: <CheckCircle2 className="w-5 h-5 text-accent-500" />,
    title: "Practical implementation",
    desc: "Focus on technologies that deliver immediate, measurable business value."
  },
  {
    icon: <Cpu className="w-5 h-5 text-accent-500" />,
    title: "Modern technology stack",
    desc: "Built on fast, secure, and scalable modern web frameworks."
  },
  {
    icon: <TrendingUp className="w-5 h-5 text-accent-500" />,
    title: "Business-first approach",
    desc: "I prioritize ROI, efficiency, and growth metrics over technical buzzwords."
  },
  {
    icon: <Handshake className="w-5 h-5 text-accent-500" />,
    title: "Long-term partnerships",
    desc: "Ongoing support and iterative improvements as your business evolves."
  }
];

export function WhyChooseUs() {
  return (
    <section className="py-24 bg-white/[0.02] border-y border-white/5 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative rounded-xl overflow-hidden aspect-square md:aspect-[4/3] lg:aspect-square bg-slate-900 border border-white/10"
            >
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
              <div className="absolute inset-0 flex items-center justify-center flex-col p-12 text-center">
                 <div className="w-24 h-24 bg-accent-500/20 rounded-full blur-xl mb-4" />
                 <h3 className="text-3xl font-bold font-heading text-white z-10">LA Builds</h3>
                 <p className="text-accent-400 mt-2 z-10 text-lg">Your Competitive Edge</p>
              </div>
            </motion.div>
          </div>
          
          <div className="lg:w-1/2">
            <h2 className="text-4xl font-bold font-heading mb-6 text-white">Why Choose LA Builds</h2>
            <p className="text-slate-400 mb-12 text-lg">
              I don&apos;t just write code; I build operational leverage. My approach is grounded in solving actual business problems with intelligent, modern technology.
            </p>
            
            <div className="space-y-8">
              {reasons.map((reason, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="flex"
                >
                  <div className="flex-shrink-0 mt-1 mr-4 w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                    {reason.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">{reason.title}</h3>
                    <p className="text-slate-400 leading-relaxed">{reason.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
