import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, ArrowRight, ArrowUpRight } from 'lucide-react';
import { CaseStudyGallery } from '@/components/case-study-gallery';
import { FullAuthExplorer } from '@/components/fullauth-explorer';
import { caseStudies } from '@/lib/projects';
import { pageMetadata } from '@/lib/site';

export const dynamicParams = false;
type ProjectPageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return caseStudies.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = caseStudies.find((item) => item.slug === slug);
  if (!project) notFound();
  return pageMetadata(`/projects/${slug}`, `${project.title} · Kaden`, project.summary);
}

export default async function CaseStudyPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = caseStudies.find((item) => item.slug === slug);
  if (!project) notFound();

  const currentIndex = caseStudies.findIndex((item) => item.slug === project.slug);
  const previous = caseStudies[(currentIndex - 1 + caseStudies.length) % caseStudies.length];
  const next = caseStudies[(currentIndex + 1) % caseStudies.length];

  return <main id="main-content" className="case-page page-wrap">
    <div className="case-return"><Link href="/#work"><ArrowLeft size={15}/> All projects</Link><span>{project.category}</span></div>
    <header className="case-heading">
      <p className="eyebrow">Case study · {String(currentIndex + 1).padStart(2, '0')} of {String(caseStudies.length).padStart(2, '0')}</p>
      <h1>{project.title}<span>.</span></h1>
      <p>{project.summary}</p>
    </header>

    <CaseStudyGallery title={project.title} images={project.gallery}/>

    <div className="case-layout">
      <aside className="case-sidebar">
        <div><p className="eyebrow">Project type</p><p className="case-kind">{project.category}</p></div>
        <div><p className="eyebrow">Built with</p><ul className="case-stack">{project.stack.map((item) => <li key={item}>{item}</li>)}</ul></div>
        {project.external && <a className="case-external" href={project.external.href} target="_blank" rel="noreferrer">{project.external.label}<ArrowUpRight size={15}/></a>}
      </aside>

      <div className="case-content">
        <section><p className="eyebrow">The context</p><p>{project.context}</p></section>
        <section><p className="eyebrow">My contribution</p><p>{project.contribution}</p></section>
        <section><p className="eyebrow">How it fits together</p><p>{project.architecture}</p></section>
        {project.slug === 'fullauth' && <section className="architecture-case-section"><div><h2 className="eyebrow">Explore the architecture</h2><p>Select a component to see how it fits into the library.</p></div><FullAuthExplorer/></section>}
        <section><p className="eyebrow">What’s included</p><ul className="case-details">{project.details.map((item) => <li key={item}>{item}</li>)}</ul></section>
        {project.testimonial && <section className="case-testimonial"><p className="eyebrow">Client feedback</p><blockquote>“{project.testimonial.quote}”</blockquote><p className="testimonial-credit">{project.testimonial.author}</p><div className="reported-results"><p className="eyebrow">Client-reported outcomes</p><ul>{project.testimonial.results.map((item) => <li key={item}>{item}</li>)}</ul><small>These outcomes were reported by the client.</small></div></section>}
        {project.constraints.length > 0 && <section className="case-scope"><p className="eyebrow">Scope and limitations</p><ul>{project.constraints.map((item) => <li key={item}>{item}</li>)}</ul></section>}
      </div>
    </div>

    <nav className="case-pagination" aria-label="Browse case studies">
      <Link href={`/projects/${previous.slug}`}><span><ArrowLeft size={15}/> Previous project</span><strong>{previous.title}</strong></Link>
      <Link href={`/projects/${next.slug}`}><span>Next project <ArrowRight size={15}/></span><strong>{next.title}</strong></Link>
    </nav>
  </main>;
}
