'use client';

import { motion } from 'motion/react';
import { Quote } from 'lucide-react';

export function Testimonials() {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold font-heading mb-6 text-white">Client Success</h2>
          <p className="text-xl text-slate-400">
            Real impact measured in time saved, revenue generated, and capabilities unlocked.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3].map((idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-8 rounded-xl bg-white/[0.03] border border-white/5 relative"
            >
              <Quote className="absolute top-8 right-8 w-8 h-8 text-accent-500/20" />
              
              <div className="flex gap-1 mb-6 text-accent-500">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              
              <p className="text-slate-300 italic mb-8 relative z-10 leading-relaxed text-lg">
                &quot;[Placeholder text to be replaced with a real client testimonial validating LA Builds&apos; expertise, reliability, and business impact.]&quot;
              </p>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-slate-900 flex items-center justify-center text-slate-400 font-bold border border-white/10">
                  {['JD', 'SM', 'AM'][idx - 1]}
                </div>
                <div>
                  <h4 className="text-white font-semibold flex items-center gap-2">
                    [Client Name]
                  </h4>
                  <p className="text-slate-500 text-sm">[Client Title/Company]</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
