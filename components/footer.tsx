import Link from 'next/link';
import { Github, Linkedin, Mail } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-gray-800/20 py-12">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-8 md:mb-0">
            <Link href="/" className="text-xl font-medium tracking-tight">
              Allaa<span className="text-primary">Eddine</span>
            </Link>
            <p className="mt-2 text-gray-400 max-w-md">
              Full-Stack Developer specializing in Next.js, TypeScript, and
              Tailwind CSS for crafting efficient and elegant web solutions.
            </p>
          </div>

          <div className="flex flex-col items-center md:items-end">
            <div className="flex space-x-6 mb-4">
              <Link
                href="https://github.com/A-AllaaEddine"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Github className="h-6 w-6" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link
                href="https://www.linkedin.com/in/allaa-eddine-riad-amiar/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Linkedin className="h-6 w-6" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link
                href="mailto:a.allaaeddine.riad@gmail.com"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Mail className="h-6 w-6" />
                <span className="sr-only">Email</span>
              </Link>
            </div>
            <p className="text-gray-500 text-sm">
              © {currentYear} Allaa Eddine. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
