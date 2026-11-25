'use client';

import type React from 'react';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled ? 'glass py-3' : 'bg-transparent py-5'
      )}
    >
      <div className="container px-4 md:px-6 flex items-center justify-between">
        <Link href="/" className="text-xl font-medium tracking-tight">
          Allaa<span className="text-primary">Eddine</span>
        </Link>

        <nav className="hidden md:flex items-center space-x-10">
          <NavLink href="#home" onClick={closeMenu}>
            Home
          </NavLink>
          <NavLink href="#about" onClick={closeMenu}>
            About
          </NavLink>
          <NavLink href="#stack" onClick={closeMenu}>
            Stack
          </NavLink>
          <NavLink href="#projects" onClick={closeMenu}>
            Projects
          </NavLink>
          <NavLink href="#client-work" onClick={closeMenu}>
            Client Work
          </NavLink>
          <NavLink href="#contact" onClick={closeMenu}>
            Contact
          </NavLink>
          <Button
            asChild
            size="sm"
            variant="ghost"
            className="ml-2 rounded-full"
          >
            <a href="/resume/AMIAR_ALLAA_EDDINE_RIAD_Full_Stack_CV.pdf" download>Resume</a>
          </Button>
        </nav>

        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={toggleMenu}
        >
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          'fixed inset-0 glass z-50 flex flex-col transition-transform duration-300 md:hidden',
          isOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        <div className="flex items-center justify-between p-4">
          <Link
            href="#home"
            className="text-xl font-medium tracking-tight"
            onClick={closeMenu}
          >
            Allaa<span className="text-primary">Eddine</span>
          </Link>
          <Button variant="ghost" size="icon" onClick={toggleMenu}>
            <X className="h-6 w-6" />
            <span className="sr-only">Close menu</span>
          </Button>
        </div>
        <nav className="flex flex-col items-center justify-center flex-1 space-y-8 p-4">
          <NavLink href="/" onClick={closeMenu}>
            Home
          </NavLink>
          <NavLink href="#about" onClick={closeMenu}>
            About
          </NavLink>
          <NavLink href="#stack" onClick={closeMenu}>
            Stack
          </NavLink>
          <NavLink href="#projects" onClick={closeMenu}>
            Projects
          </NavLink>
          <NavLink href="#client-work" onClick={closeMenu}>
            Client Work
          </NavLink>
          <NavLink href="#contact" onClick={closeMenu}>
            Contact
          </NavLink>
          <Button
            asChild
            size="sm"
            variant="ghost"
            className="mt-4 rounded-full"
          >
            <a href="/resume/AMIAR_ALLAA_EDDINE_RIAD_Full_Stack_CV.pdf" download onClick={closeMenu}>
              Resume
            </a>
          </Button>
        </nav>
      </div>
    </header>
  );
}

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
}

function NavLink({ href, children, onClick }: NavLinkProps) {
  return (
    <Link
      href={href}
      className="text-gray-300 hover:text-white transition-colors relative group"
      onClick={onClick}
    >
      {children}
      <span className="absolute left-0 right-0 bottom-0 h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
    </Link>
  );
}
