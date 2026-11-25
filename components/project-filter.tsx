'use client';

import { useMemo, useState } from 'react';
import Image, { StaticImageData } from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import BenyankomThumbnail from '@/public/Benyankom_thumbnail.png';
import BenyankomAppThumbnail from '@/public/Benyankom_app_thumbnail.png';
import FullAuthAppThumbnail from '@/public/FullAuth_app_thumbnail.png';
import WinakolAppThumbnail from '@/public/Winakol_app_thumbnail.png';
import CoStudyThumbnail from '@/public/CoStudy_thumbnail.png';

type Kind = 'Client work' | 'Web' | 'Mobile' | 'Library';
type Project = { title: string; kind: Kind; description: string; image: StaticImageData; tags: string[]; href?: string; label?: string };
const projects: Project[] = [
  { title: 'FullAuth', kind: 'Library', description: 'A reusable authentication toolkit with a TypeScript core, credential and Google provider modules, JWT and session utilities, plus integrations for Next.js, React, and React Native.', image: FullAuthAppThumbnail, tags: ['TypeScript', 'Next.js', 'React Native'], href: 'https://github.com/A-AllaaEddine/fullauth', label: 'Public source' },
  { title: 'Benyankom', kind: 'Client work', description: 'A marketplace connecting customers with craftsmen in Algeria, presented across its web and mobile experiences.', image: BenyankomThumbnail, tags: ['Next.js', 'MongoDB', 'React Native', 'FullAuth'], label: 'Client project' },
  { title: 'Benyankom Mobile', kind: 'Mobile', description: 'The mobile experience for the Benyankom marketplace, connecting customers and craftsmen.', image: BenyankomAppThumbnail, tags: ['React Native', 'NativeWind', 'FullAuth'], href: 'https://play.google.com/store/apps/details?id=com.benyankom.app', label: 'Google Play' },
  { title: 'Winakol', kind: 'Mobile', description: 'Restaurant discovery with restaurant-level and dish-level ratings.', image: WinakolAppThumbnail, tags: ['React Native', 'Expo'], href: 'https://play.google.com/store/apps/details?id=com.winnakol.app', label: 'Google Play' },
  { title: 'CoStudy', kind: 'Web', description: 'A study collaboration concept for students to work together in shared sessions.', image: CoStudyThumbnail, tags: ['Next.js', 'MongoDB'], href: 'https://github.com/A-AllaaEddine/costudy-nextjs', label: 'Source' },
];
const filters = ['All', 'Client work', 'Web', 'Mobile', 'Library'] as const;

export function ProjectFilter() {
  const [filter, setFilter] = useState<(typeof filters)[number]>('All');
  const visible = useMemo(() => filter === 'All' ? projects : projects.filter(p => p.kind === filter), [filter]);
  return <div><div className="mb-8 flex flex-wrap gap-2" role="group" aria-label="Filter projects">{filters.map(f=><Button key={f} type="button" onClick={()=>setFilter(f)} aria-pressed={filter===f} variant={filter===f?'default':'outline'} className="rounded-full">{f}</Button>)}</div><div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">{visible.map(p=><article key={p.title} className="group overflow-hidden rounded-3xl border border-white/10 bg-white/[.025] transition hover:-translate-y-1 hover:border-orange-400/50"><div className="relative aspect-[16/10] overflow-hidden"><Image src={p.image} alt={`${p.title} project preview`} fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="object-cover transition duration-500 group-hover:scale-[1.03]" /></div><div className="p-6"><div className="flex justify-between gap-3"><h3 className="text-xl font-semibold">{p.title}</h3><span className="font-mono text-xs text-orange-300">{p.kind}</span></div><p className="mt-3 min-h-[6rem] text-sm leading-6 text-zinc-400">{p.description}</p><div className="mt-4 flex flex-wrap gap-2">{p.tags.map(t=><span key={t} className="rounded-full border border-white/10 px-2.5 py-1 text-xs text-zinc-300">{t}</span>)}</div><div className="mt-6 border-t border-white/10 pt-4">{p.href?<a href={p.href} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm text-orange-300 hover:text-orange-200">{p.label}<ArrowUpRight size={15}/></a>:<span className="text-sm text-zinc-500">{p.label} · source private</span>}</div></div></article>)}</div><p className="mt-7 text-sm text-zinc-500">Client source repositories are private. No demos are linked unless the destination is known.</p></div>;
}
