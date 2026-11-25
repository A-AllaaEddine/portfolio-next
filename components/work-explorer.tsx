'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, Eye } from 'lucide-react';
import { Fragment, useState } from 'react';
import { useResolvedPortfolioTheme } from '@/components/theme-provider';
import { caseStudies, projectFilters } from '@/lib/projects';

export function WorkExplorer() {
  const resolvedTheme = useResolvedPortfolioTheme();
  const [activeFilter, setActiveFilter] = useState(0);
  const [activeSlug, setActiveSlug] = useState(caseStudies[0].slug);
  const filter = projectFilters[activeFilter];
  const visibleProjects = caseStudies.filter((project) => filter.slugs.includes(project.slug));

  return (
    <section className="work-section page-wrap" id="work" aria-labelledby="work-title">
      <div className="section-heading work-heading">
        <h2 id="work-title">Explore my <em>work.</em></h2>
      </div>
      <div className="work-browser">
        <div className="work-filters" role="group" aria-label="Filter projects by category">
          <p className="eyebrow">Browse by</p>
          {projectFilters.map((item, index) => (
            <button
              key={item.label}
              type="button"
              className={activeFilter === index ? 'is-selected' : ''}
              aria-pressed={activeFilter === index}
              onClick={() => {
                setActiveFilter(index);
                if (!item.slugs.includes(activeSlug)) setActiveSlug(item.slugs[0]);
              }}
            >
              <span>{item.label}</span>
              <span className="filter-count" aria-hidden="true">{item.slugs.length}</span>
            </button>
          ))}
        </div>
        <div
          className="project-results"
          aria-label="Project results"
          style={{ gridTemplateRows: `repeat(${visibleProjects.length}, max-content) minmax(0, 1fr)` }}
        >
          {visibleProjects.map((project) => {
            const selected = project.slug === activeSlug;
            const darkPreview = resolvedTheme === 'dark' && project.gallery.find((item) => item.preferredTheme === 'dark');
            const image = darkPreview || project.gallery[0];
            return (
              <Fragment key={project.slug}>
                <div
                  className={`project-row${selected ? ' is-current' : ''}`}
                  onPointerEnter={(event) => {
                    if (event.pointerType === 'mouse') setActiveSlug(project.slug);
                  }}
                >
                  <button
                    className="project-preview-button"
                    type="button"
                    aria-label={`Preview ${project.title}`}
                    title={`Preview ${project.title}`}
                    aria-pressed={selected}
                    onClick={() => setActiveSlug(project.slug)}
                  >
                    <Eye size={16} aria-hidden="true"/>
                    <span className="project-row-copy">
                      <strong>{project.title}</strong>
                      <small>{project.category}</small>
                    </span>
                  </button>
                  <Link className="project-direct" href={`/projects/${project.slug}`} aria-label={`Open ${project.title} case study`} title={`Open ${project.title} case study`}>
                    <ArrowUpRight size={18} aria-hidden="true"/>
                  </Link>
                </div>
                {selected && (
                  <article className="project-feature" aria-label={`${project.title} preview`}>
                    <Link href={`/projects/${project.slug}`} className="project-feature-image" aria-label={`See ${project.title} in detail`}>
                      <Image src={image.src} alt={image.alt} fill sizes="(max-width: 540px) 94vw, (max-width: 800px) 45vw, 36vw"/>
                    </Link>
                    <div className="project-feature-meta">{project.stack.slice(0, 3).join(' · ')}</div>
                    <h3>{project.title}</h3>
                    <p>{project.summary}</p>
                    <Link className="text-link" href={`/projects/${project.slug}`}>Read case study <ArrowUpRight size={15}/></Link>
                  </article>
                )}
              </Fragment>
            );
          })}
        </div>
      </div>
      <p className="all-work-line" role="status">
        {visibleProjects.length} {visibleProjects.length === 1 ? 'project' : 'projects'} · {filter.label}
      </p>
    </section>
  );
}
