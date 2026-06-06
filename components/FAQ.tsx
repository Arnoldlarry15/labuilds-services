'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    q: "What types of businesses do you work with?",
    a: "I partner with forward-thinking organizations ranging from agile startups to established enterprises that are looking to streamline operations, reduce manual overhead, or build custom software solutions to scale."
  },
  {
    q: "Can AI help my business?",
    a: "Yes. Whether it's through conversational AI for customer support, automated data extraction, intelligent workflow routing, or custom knowledge bases, AI is fundamentally changing operational efficiency across all industries."
  },
  {
    q: "How long does a project take?",
    a: "Project timelines vary widely based on scope. A targeted automation sprint might take 2-4 weeks, while a comprehensive custom software platform could take 3-6 months. I prioritize rapid delivery of core business value."
  },
  {
    q: "Do you provide ongoing support?",
    a: "Absolutely. I view my engagements as long-term partnerships. I offer ongoing maintenance, iteration, and strategic consulting to ensure the systems I build continue to deliver value."
  },
  {
    q: "Can you improve existing systems?",
    a: "Yes. A significant portion of my work involves modernizing legacy applications, developing custom API integrations to bridge existing tools, or layering AI capabilities onto existing infrastructure."
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-white/[0.02] border-t border-white/5">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold font-heading mb-6 text-white">Frequently Asked Questions</h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div 
              key={idx} 
              className={`rounded-xl border transition-colors duration-300 ${openIndex === idx ? 'bg-white/[0.03] border-white/10' : 'bg-transparent border-white/5 hover:border-white/10'}`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full px-6 py-6 flex items-center justify-between text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-500 rounded-xl"
              >
                <span className="text-lg font-medium text-white">{faq.q}</span>
                <ChevronDown 
                  className={`w-5 h-5 text-accent-500 transition-transform duration-300 ${openIndex === idx ? 'rotate-180' : ''}`} 
                />
              </button>
              
              <AnimatePresence>
                {openIndex === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 text-slate-400 leading-relaxed">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
