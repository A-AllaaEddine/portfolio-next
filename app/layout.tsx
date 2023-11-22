import BackToTop from '@/components/backtotop';
import Navbar from '@/components/navbar';
import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import './globals.css';

export const montserrat = Montserrat({
  weight: ['300', '400', '500', '600'],
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${montserrat.variable}`}>
      <body className={montserrat.className}>
        <Navbar />
        <main className="bg-[#100F0F]">{children}</main>
        <BackToTop />
      </body>
    </html>
  );
}