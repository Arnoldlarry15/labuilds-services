import type { Metadata } from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-heading',
});

export const metadata: Metadata = {
  title: 'LA Builds - AI Automation & Custom Software',
  description: 'LA Builds helps organizations automate repetitive work, streamline operations, and unlock the power of AI through custom software and intelligent business systems.',
  openGraph: {
    title: 'LA Builds - AI Automation & Custom Software',
    description: 'AI Automation & Custom Software That Helps Businesses Work Smarter',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable} dark scroll-smooth`}>
      <body className="font-sans antialiased selection:bg-accent-500/30 selection:text-accent-200" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
