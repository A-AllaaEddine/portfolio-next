import BackToTop from '@/components/backtotop';
import Navbar from '@/components/navbar';
import { Montserrat } from 'next/font/google';
import './globals.css';
import { NextFontWithVariable } from 'next/dist/compiled/@next/font';

const montserrat: NextFontWithVariable = Montserrat({
  weight: ['300', '400', '500', '600'],
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
});

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${montserrat?.variable}`}>
      <body>
        <Navbar />
        <main className="bg-[#100F0F]">{children}</main>
        <BackToTop />
      </body>
    </html>
  );
}
