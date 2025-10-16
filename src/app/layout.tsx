import type { Metadata } from 'next';
import './globals.css';
import { Inter } from 'next/font/google';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Numaware — Cybersecurity Solutions & Awareness Training',
  description:
    'Numaware empowers businesses with cybersecurity confidence through assessments, training, compliance, and managed security support.',
  metadataBase: new URL('https://numaware.com'),
  openGraph: {
    title: 'Numaware',
    description:
      'Cybersecurity solutions: assessments, awareness training, compliance, incident response, managed support.',
    url: 'https://numaware.com',
    siteName: 'Numaware',
    images: [
      { url: '/logo.png', width: 512, height: 512, alt: 'Numaware' },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Numaware',
    description:
      'Cybersecurity solutions: assessments, awareness training, compliance, incident response, managed support.',
    images: ['/logo.png'],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-navy text-white antialiased min-h-screen flex flex-col`}>
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
