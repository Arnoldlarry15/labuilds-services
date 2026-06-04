'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'py-4 bg-black/50 backdrop-blur-xl border-b border-white/10 shadow-2xl shadow-black/50' : 'py-6 bg-transparent'}`}>
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-xl font-bold tracking-tight flex items-center gap-3 relative z-50">
            <div className="relative w-10 h-10 flex-shrink-0">
              <Image 
                src="/logo.png" 
                alt="LA Builds Logo" 
                fill
                className="object-contain"
                referrerPolicy="no-referrer"
              />
            </div>
            LA Builds
          </Link>
          
          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href="#services" className="text-sm font-medium text-slate-400 hover:text-white transition-colors">Services</Link>
            <Link href="#projects" className="text-sm font-medium text-slate-400 hover:text-white transition-colors">Projects</Link>
            <Link href="#process" className="text-sm font-medium text-slate-400 hover:text-white transition-colors">Process</Link>
            <Link href="#faq" className="text-sm font-medium text-slate-400 hover:text-white transition-colors">FAQ</Link>
            <Link href="#contact" className="text-xs font-bold px-5 py-2.5 bg-white text-black hover:bg-slate-200 rounded-full transition-colors uppercase tracking-widest">
              Book Consultation
            </Link>
          </nav>
          
          {/* Mobile Toggle */}
          <button 
            className="md:hidden relative z-50 text-white p-2 -mr-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-black/95 backdrop-blur-xl pt-24 px-6 flex flex-col gap-6 md:hidden"
          >
            <Link 
              href="#services" 
              onClick={() => setMobileMenuOpen(false)}
              className="text-2xl font-medium text-slate-300 hover:text-white border-b border-white/10 pb-4"
            >
              Services
            </Link>
            <Link 
              href="#projects" 
              onClick={() => setMobileMenuOpen(false)}
              className="text-2xl font-medium text-slate-300 hover:text-white border-b border-white/10 pb-4"
            >
              Projects
            </Link>
            <Link 
              href="#process" 
              onClick={() => setMobileMenuOpen(false)}
              className="text-2xl font-medium text-slate-300 hover:text-white border-b border-white/10 pb-4"
            >
              Process
            </Link>
            <Link 
              href="#faq" 
              onClick={() => setMobileMenuOpen(false)}
              className="text-2xl font-medium text-slate-300 hover:text-white border-b border-white/10 pb-4"
            >
              FAQ
            </Link>
            <Link 
              href="#contact" 
              onClick={() => setMobileMenuOpen(false)}
              className="text-2xl font-medium text-slate-300 hover:text-white border-b border-white/10 pb-4"
            >
              Book Consultation
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
