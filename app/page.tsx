import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { Trust } from '@/components/Trust';
import { Services } from '@/components/Services';
import { WhyChooseUs } from '@/components/WhyChooseUs';
import { Projects } from '@/components/Projects';
import { Process } from '@/components/Process';
import { Testimonials } from '@/components/Testimonials';
import { FAQ } from '@/components/FAQ';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen selection:bg-accent-500/30 selection:text-accent-200">
      <Header />
      <Hero />
      <Trust />
      <Services />
      <WhyChooseUs />
      <Projects />
      <Process />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
}
