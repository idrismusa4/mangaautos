import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Footer } from '@/components/ui/footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Manga Autos Motors | Luxury & Performance Vehicles',
  description: 'Experience the finest collection of premium vehicles at Prestige Motors. Discover luxury cars, performance vehicles, and exceptional service.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Footer />
      </body>
    </html>
  );
}