import Image from 'next/image';
import Link from 'next/link';
import { ArrowDownRight, ArrowUpRight, Github, Linkedin, Mail } from 'lucide-react';
import { WorkExplorer } from '@/components/work-explorer';

const skills = [
  'TypeScript', 'JavaScript', 'React', 'Next.js', 'Node.js', 'tRPC', 'Zod', 'React Native',
  'Expo', 'PostgreSQL', 'MongoDB', 'Prisma', 'Drizzle', 'Firebase', 'TanStack Query', 'Git',
];

export function PortfolioHome() {
  return <main id="main-content">
    <section className="hero page-wrap" id="home" aria-labelledby="hero-title">
      <h1 className="hero-title" id="hero-title">Kaden<span>.</span></h1>
      <div className="hero-lower">
        <div className="hero-role-block">
          <p className="hero-role">Full-stack developer</p>
          <h2>Web &amp; mobile<br/>applications</h2>
          <a className="hero-work-link" href="#work">Explore my work <ArrowDownRight size={16}/></a>
          <a className="hero-resume" href="/resume/AMIAR_ALLAA_EDDINE_RIAD_Full_Stack_CV.pdf" download>Download résumé <span>↓</span></a>
        </div>
        <figure className="hero-portrait">
          <Image src="/CV.png" alt="Portrait of Kaden, full-stack developer" fill priority sizes="(max-width: 700px) 68vw, 330px" quality={86}/>
          <figcaption>AMIAR ALLAA EDDINE RIAD</figcaption>
        </figure>
        <div className="hero-intro-block">
          <p className="hero-intro-lead">I build web and mobile applications, from user interfaces to the APIs and authentication they rely on.</p>
          <p className="hero-intro-small">Selected freelance work · open-source engineering · independent products</p>
          <div className="hero-socials" aria-label="Contact links">
            <a href="https://github.com/A-AllaaEddine" target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={18}/></a>
            <a href="https://www.linkedin.com/in/allaa-eddine-riad-amiar/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={18}/></a>
            <a href="mailto:a.allaaeddine.riad@gmail.com" aria-label="Email"><Mail size={18}/></a>
          </div>
        </div>
      </div>
    </section>

    <WorkExplorer />

    <section className="about-section page-wrap" id="about" aria-labelledby="about-title">
      <div className="about-heading"><p className="eyebrow">A little about how I work</p><h2 id="about-title">Make it useful.<br/><em>Make it hold up.</em></h2></div>
      <div className="about-content">
        <p className="about-lead">I’m <strong>Kaden</strong> (AMIAR ALLAA EDDINE RIAD), a full-stack developer working on web and mobile products.</p>
        <p>From 2023 to 2025, I delivered paid freelance work across client products. I care about clear product flows, reusable architecture, and engineering decisions that stay understandable as a project grows.</p>
        <div className="skills-block"><p className="eyebrow">Tools I’ve worked with</p><p>{skills.join(' · ')}</p></div>
        <a className="text-link" href="/resume/AMIAR_ALLAA_EDDINE_RIAD_Full_Stack_CV.pdf" download>Download résumé <ArrowUpRight size={15}/></a>
      </div>
    </section>

    <section className="contact-section page-wrap" id="contact" aria-labelledby="contact-title">
      <div><h2 id="contact-title">Let’s <em>talk.</em></h2></div>
      <div className="contact-details"><a className="contact-email" href="mailto:a.allaaeddine.riad@gmail.com">a.allaaeddine.riad@gmail.com <ArrowUpRight size={17}/></a><p>I’m open to full-stack roles, freelance projects, and engineering collaborations.</p></div>
    </section>

    <footer className="site-footer page-wrap">
      <Link className="footer-wordmark" href="/">Kaden</Link>
      <span>Full-Stack Developer · Web &amp; Mobile Applications</span>
      <div><a href="https://github.com/A-AllaaEddine" target="_blank" rel="noreferrer">GitHub</a><a href="https://www.linkedin.com/in/allaa-eddine-riad-amiar/" target="_blank" rel="noreferrer">LinkedIn</a><a href="mailto:a.allaaeddine.riad@gmail.com">Email</a></div>
      <small>© {new Date().getFullYear()} Kaden</small>
    </footer>
  </main>;
}
