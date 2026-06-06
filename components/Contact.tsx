'use client';

import { useState } from 'react';
import { motion } from 'motion/react';
import { Send } from 'lucide-react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    description: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [configMissing, setConfigMissing] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMsg('');
    setConfigMissing(false);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        if (result.requiresConfig) {
          setConfigMissing(true);
        } else if (result.success) {
          setIsSubmitted(true);
        } else {
          setErrorMsg(result.error || 'Failed to submit form.');
        }
      } else {
        setErrorMsg(result.error || 'A server error occurred. Please try again.');
      }
    } catch (err) {
      console.error(err);
      setErrorMsg('Network error. Please check your connection and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
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
                    <p className="text-sm text-slate-400">I analyze your needs</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                    <span className="text-accent-500 font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">Strategy</h4>
                    <p className="text-sm text-slate-400">I propose a solution</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                    <span className="text-accent-500 font-bold">3</span>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">Execution</h4>
                    <p className="text-sm text-slate-400">I build and deploy</p>
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
                  <p className="text-slate-400">Thank you for reaching out. I will get back to you shortly to schedule your consultation.</p>
                </motion.div>
              ) : configMissing ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="p-8 bg-black/40 rounded-3xl border border-orange-500/20 backdrop-blur-md"
                >
                  <div className="w-16 h-16 bg-orange-500/25 rounded-full flex items-center justify-center mb-6 mx-auto">
                    <svg className="w-8 h-8 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-white text-center mb-3">API Key Required</h3>
                  <p className="text-slate-300 text-sm leading-relaxed mb-6 text-center">
                    The contact form is successfully integrated to route to <strong className="text-white font-semibold">labuilds@proton.me</strong>!
                  </p>
                  <div className="bg-white/[0.03] border border-white/5 p-5 rounded-xl text-xs text-slate-400 space-y-3 font-mono leading-relaxed">
                    <p className="text-accent-400 font-bold">To wire up live delivery:</p>
                    <ol className="list-decimal pl-4 space-y-2 text-left">
                      <li>Sign up for a free account at <a href="https://resend.com" target="_blank" rel="noreferrer" className="underline text-white hover:text-accent-400">resend.com</a></li>
                      <li>Copy your API Key</li>
                      <li>In AI Studio, go to <strong className="text-white">Settings &gt; Environment Variables</strong></li>
                      <li>Add <strong className="text-white">RESEND_API_KEY</strong> with your copied key value</li>
                    </ol>
                  </div>
                  <button
                    onClick={() => setConfigMissing(false)}
                    className="w-full mt-6 py-3 bg-white/10 hover:bg-white/20 text-white rounded-xl font-bold transition-all text-sm uppercase tracking-wide cursor-pointer"
                  >
                    Go Back to Form
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="p-8 bg-black/40 rounded-3xl border border-white/10 backdrop-blur-md shadow-2xl">
                  <div className="text-xs font-mono tracking-[0.1em] uppercase text-accent-500 mb-4 block">Consultation Form</div>
                  <h3 className="text-2xl font-semibold text-white mb-6">Contact Me</h3>
                  
                  {errorMsg && (
                    <div className="mb-6 p-4 bg-red-500/10 border border-red-500/20 text-red-400 text-sm rounded-xl">
                      {errorMsg}
                    </div>
                  )}

                  <div className="space-y-5">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">Full Name</label>
                      <input 
                        required
                        type="text" 
                        id="name"
                        value={formData.name}
                        onChange={handleChange}
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
                        value={formData.email}
                        onChange={handleChange}
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
                        value={formData.company}
                        onChange={handleChange}
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
                        value={formData.description}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:ring-2 focus:ring-accent-500 focus:border-transparent outline-none text-white transition-all resize-none placeholder:text-slate-600"
                        placeholder="Tell me about the challenges you're facing..."
                      />
                    </div>
                    
                    <button 
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 bg-white hover:bg-slate-200 text-black rounded-xl font-bold transition-all flex items-center justify-center gap-2 group disabled:opacity-70 text-xs tracking-widest uppercase cursor-pointer"
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
