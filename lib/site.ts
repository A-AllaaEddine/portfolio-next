import type { Metadata } from 'next';

export const siteOrigin = new URL('https://a-allaaeddine.vercel.app');
const shareImage = {
  url: '/opengraph-image.png',
  width: 1200,
  height: 630,
  alt: 'Kaden, full-stack developer',
};

export function pageMetadata(path: string, title: string, description: string): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: { type: 'website', siteName: 'Kaden', url: path, title, description, images: [shareImage] },
    twitter: { card: 'summary_large_image', title, description, images: [shareImage] },
  };
}
