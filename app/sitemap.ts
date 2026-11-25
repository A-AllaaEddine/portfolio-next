import type { MetadataRoute } from 'next';
import { caseStudies } from '@/lib/projects';
import { siteOrigin } from '@/lib/site';

export default function sitemap(): MetadataRoute.Sitemap {
  return ['/', ...caseStudies.map(({ slug }) => `/projects/${slug}`)].map((path) => ({
    url: new URL(path, siteOrigin).href,
  }));
}
