import Link from 'next/link';
import Image from 'next/image';
import { Mail, Linkedin, Github, Twitter, Phone } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="pt-24 pb-12 border-t border-white/10 bg-black">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            <Link href="/" className="text-2xl font-bold font-heading text-white tracking-tight mb-4 flex items-center gap-3">
              <div className="relative w-8 h-8 flex-shrink-0">
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
            <p className="text-slate-400 max-w-sm mb-6">
              Empowering organizations to work smarter through custom software and intelligent automation systems.
            </p>
            <div className="flex flex-wrap gap-4">
              <a 
                href="mailto:labuilds@proton.me" 
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:bg-white/10 hover:text-white transition-colors"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
              <a 
                href="tel:4473050161" 
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:bg-white/10 hover:text-white transition-colors"
                aria-label="Phone"
              >
                <Phone className="w-4 h-4" />
              </a>
              <a 
                href="https://linkedin.com/in/larry-arnold" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:bg-white/10 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a 
                href="https://x.com/LA_Builds" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:bg-white/10 hover:text-white transition-colors"
                aria-label="X / Twitter"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a 
                href="https://github.com/Arnoldlarry15" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:bg-white/10 hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-6">Services</h4>
            <ul className="space-y-4">
              <li><Link href="#services" className="text-slate-400 hover:text-white transition-colors">AI Automation</Link></li>
              <li><Link href="#services" className="text-slate-400 hover:text-white transition-colors">Custom Software</Link></li>
              <li><Link href="#services" className="text-slate-400 hover:text-white transition-colors">Workflow Optimization</Link></li>
              <li><Link href="#services" className="text-slate-400 hover:text-white transition-colors">Technical Consulting</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-6">Legal</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm">
            &copy; {currentYear} LA Builds. All rights reserved.
          </p>
          <div className="flex items-center gap-3 text-slate-500 text-sm">
            <span>Founded by</span>
            <a href="https://linkedin.com/in/larry-arnold" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 group">
              <div className="relative w-6 h-6 rounded-full overflow-hidden border border-white/10 group-hover:border-accent-500/50 transition-colors">
                <Image 
                  src="/profile.png" 
                  alt="Larry Arnold" 
                  fill
                  className="object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <span className="text-slate-300 group-hover:text-white transition-colors underline decoration-white/20 underline-offset-4 group-hover:decoration-accent-500/50">
                Larry Arnold
              </span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
