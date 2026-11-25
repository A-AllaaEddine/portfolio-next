import type { Metadata } from 'next';
import type React from 'react';
import './globals.css';
import { PortfolioHeader } from '@/components/portfolio-header';
import { ThemeProvider } from '@/components/theme-provider';

import { siteOrigin } from '@/lib/site';

export const metadata: Metadata = { metadataBase: siteOrigin };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" suppressHydrationWarning>
    <body>
      <ThemeProvider attribute="class" defaultTheme="light" enableSystem storageKey="kaden-theme" disableTransitionOnChange>
        <a href="#main-content" className="skip-link">Skip to content</a>
        <PortfolioHeader/>
        {children}
      </ThemeProvider>
    </body>
  </html>;
}
