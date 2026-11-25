'use client';

import Image from 'next/image';
import { useState } from 'react';
import { useResolvedPortfolioTheme } from '@/components/theme-provider';
import { ArrowUpRight } from 'lucide-react';
import type { ProjectImage } from '@/lib/projects';

export function CaseStudyGallery({ title, images }: { title: string; images: ProjectImage[] }) {
  const resolvedTheme = useResolvedPortfolioTheme();
  const [selection, setSelection] = useState<number | null>(null);
  const darkIndex = images.findIndex((image) => image.preferredTheme === 'dark');
  const initialIndex = resolvedTheme === 'dark' && darkIndex >= 0 ? darkIndex : 0;
  const active = selection ?? initialIndex;
  const image = images[active];
  if (!image) return null;

  return (
    <section className="case-gallery" aria-label={`${title} gallery`}>
      <figure className="case-gallery-main">
        <div className="case-gallery-stage">
          <Image
            key={image.src}
            src={image.src}
            alt={image.alt}
            fill
            priority={selection === null}
            sizes="(max-width: 800px) 95vw, (max-width: 1400px) 94vw, 1320px"
          />
        </div>
        <figcaption>
          <span role="status">{image.caption} · {active + 1} of {images.length}</span>
          <a href={image.src} target="_blank" rel="noreferrer">View full size <ArrowUpRight size={14} aria-hidden="true"/></a>
        </figcaption>
      </figure>
      {images.length > 1 && (
        <div className="case-gallery-thumbs" role="group" aria-label="Choose a gallery image">
          {images.map((item, index) => (
            <button
              key={item.src}
              type="button"
              className={index === active ? 'is-active' : ''}
              aria-pressed={index === active}
              onClick={() => setSelection(index)}
            >
              <span className="case-thumb-image"><Image src={item.src} alt="" fill sizes="(max-width: 700px) 30vw, 180px"/></span>
              <span>{item.caption}</span>
            </button>
          ))}
        </div>
      )}
    </section>
  );
}
