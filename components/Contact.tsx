'use client';

import { useState } from 'react';
import { motion } from 'motion/react';
import { Send } from 'lucide-react';

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // This is a front-end only prototype, form submission is mocked.
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1500);
  };

  return (
    <section id="contact" className="py-32 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 bg-white/[0.03] border border-white/5 rounded-[2.5rem] p-8 md:p-16 relative overflow-hidden">
            {/* Background design elements */}
            <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-accent-500/10 rounded-full blur-[100px] pointer-events-none" />
            
            <div className="relative z-10 flex flex-col justify-center">
              <h2 className="text-4xl md:text-5xl font-bold font-heading mb-6 text-white text-balance">
                Ready to Put AI to Work for Your Business?
              </h2>
              <p className="text-xl text-slate-400 mb-8 max-w-lg">
                Schedule a free consultation to discuss your operational challenges and discover how custom software and automation can drive growth.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                    <span className="text-accent-500 font-bold">1</span>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">Discovery</h4>
                    <p className="text-sm text-slate-400">We analyze your needs</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                    <span className="text-accent-500 font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">Strategy</h4>
                    <p className="text-sm text-slate-400">We propose a solution</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                    <span className="text-accent-500 font-bold">3</span>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">Execution</h4>
                    <p className="text-sm text-slate-400">We build and deploy</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative z-10">
              {isSubmitted ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="h-full flex flex-col items-center justify-center text-center p-8 bg-black/40 rounded-3xl border border-white/10 backdrop-blur-md"
                >
                  <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mb-6">
                    <svg className="w-10 h-10 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Message Received</h3>
                  <p className="text-slate-400">Thank you for reaching out. We will get back to you shortly to schedule your consultation.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="p-8 bg-black/40 rounded-3xl border border-white/10 backdrop-blur-md shadow-2xl">
                  <div className="text-xs font-mono tracking-[0.1em] uppercase text-accent-500 mb-4 block">Consultation Form</div>
                  <h3 className="text-2xl font-semibold text-white mb-6">Contact Us</h3>
                  
                  <div className="space-y-5">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">Full Name</label>
                      <input 
                        required
                        type="text" 
                        id="name"
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:ring-2 focus:ring-accent-500 focus:border-transparent outline-none text-white transition-all placeholder:text-slate-600"
                        placeholder="John Doe"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">Work Email</label>
                      <input 
                        required
                        type="email" 
                        id="email"
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:ring-2 focus:ring-accent-500 focus:border-transparent outline-none text-white transition-all placeholder:text-slate-600"
                        placeholder="john@company.com"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-slate-300 mb-2">Company</label>
                      <input 
                        required
                        type="text" 
                        id="company"
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:ring-2 focus:ring-accent-500 focus:border-transparent outline-none text-white transition-all placeholder:text-slate-600"
                        placeholder="Company Inc."
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="description" className="block text-sm font-medium text-slate-300 mb-2">Project Description</label>
                      <textarea 
                        required
                        id="description"
                        rows={4}
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:ring-2 focus:ring-accent-500 focus:border-transparent outline-none text-white transition-all resize-none placeholder:text-slate-600"
                        placeholder="Tell us about the challenges you're facing..."
                      />
                    </div>
                    
                    <button 
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 bg-white hover:bg-slate-200 text-black rounded-xl font-bold transition-all flex items-center justify-center gap-2 group disabled:opacity-70 text-xs tracking-widest uppercase"
                    >
                      {isSubmitting ? (
                        <span className="animate-pulse">Sending...</span>
                      ) : (
                        <>
                          Send Message
                          <Send className="w-4 h-4 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
