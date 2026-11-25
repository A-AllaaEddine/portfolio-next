'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { Laptop, Menu, Moon, Sun, X } from 'lucide-react';
import { useTheme } from 'next-themes';

const themeOptions = [
  { value: 'light', label: 'Light', Icon: Sun },
  { value: 'dark', label: 'Dark', Icon: Moon },
  { value: 'system', label: 'System', Icon: Laptop },
] as const;

function ThemeControl() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return <div className="theme-control" role="group" aria-label="Color theme">
    {themeOptions.map(({ value, label, Icon }) => <button
      key={value}
      type="button"
      aria-label={`${label} theme`}
      aria-pressed={mounted && theme === value}
      title={`${label} theme`}
      onClick={() => setTheme(value)}
    ><Icon size={15} strokeWidth={1.7}/><span>{label}</span></button>)}
  </div>;
}

export function PortfolioHeader() {
  const [open, setOpen] = useState(false);
  const menuButton = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    if (!open) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false);
        menuButton.current?.focus();
      }
    };
    window.addEventListener('keydown', closeOnEscape);
    return () => window.removeEventListener('keydown', closeOnEscape);
  }, [open]);

  const close = () => setOpen(false);
  return <header className="site-header">
    <div className="site-header-inner">
      <Link href="/" className="site-home-link" onClick={close} aria-label="Kaden, home">Kaden</Link>
      <nav className="desktop-nav" aria-label="Main navigation">
        <Link href="/#work">Work</Link>
        <Link href="/#about">About</Link>
        <Link href="/#contact">Contact</Link>
        <a className="resume-link" href="/resume/AMIAR_ALLAA_EDDINE_RIAD_Full_Stack_CV.pdf" download>Résumé <span aria-hidden="true">↓</span></a>
      </nav>
      <ThemeControl />
      <button ref={menuButton} className="mobile-menu-button" type="button" aria-label={open ? 'Close navigation' : 'Open navigation'} aria-expanded={open} aria-controls="mobile-navigation" onClick={() => setOpen(!open)}>
        {open ? <X size={22}/> : <Menu size={22}/>}
      </button>
    </div>
    <nav id="mobile-navigation" className={`mobile-nav${open ? ' is-open' : ''}`} aria-label="Mobile navigation" aria-hidden={!open}>
      <Link href="/#work" onClick={close}>Explore my work</Link>
      <Link href="/#about" onClick={close}>About Kaden</Link>
      <Link href="/#contact" onClick={close}>Get in touch</Link>
      <a href="/resume/AMIAR_ALLAA_EDDINE_RIAD_Full_Stack_CV.pdf" download onClick={close}>Download résumé <span>↓</span></a>
      <ThemeControl />
    </nav>
  </header>;
}
