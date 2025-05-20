'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';
import { ProjectCard } from '@/components/project-card';
import { Globe, AppWindow, Code2 } from 'lucide-react';

// Images
import BenyankomThumbnail from '@/public/Benyankom_thumbnail.png';
import CoStudyThumbnail from '@/public/CoStudy_thumbnail.png';
import FullAuthAppThumbnail from '@/public/FullAuth_app_thumbnail.png';
import BenyankomAppThumbnail from '@/public/Benyankom_app_thumbnail.png';
import WinakolAppThumbnail from '@/public/Winakol_app_thumbnail.png';
import { StaticImageData } from 'next/image';

// Define project types
type ProjectType = 'all' | 'website' | 'app' | 'library';

type Project = {
  id: number;
  type: ProjectType;
  title: string;
  description: string;
  image: string | StaticImageData;
  tags: string[];
  demoUrl: string;
  githubUrl?: string;
  featured?: boolean;
};
// Sample project data
const projects: Project[] = [
  {
    id: 1,
    type: 'website',
    title: 'Benyankom',
    description:
      'A platform to connect clients with skilled craftsmen in Algeria',
    image: BenyankomThumbnail,
    tags: ['Next.js', 'MongoDB', 'Tailwind CSS', 'FullAuth'],
    demoUrl: 'https://benyankom.vercel.app',
    // githubUrl: 'https://github.com/a-allaaeddine/portfolio',
  },
  {
    id: 2,
    type: 'website',
    title: 'CoSutdy',
    description:
      'A platform that let students study together in a shared session',
    image: CoStudyThumbnail,
    tags: ['Next.js', 'MongoDB', 'Tailwind CSS', 'NextAuth'],
    demoUrl: 'https://costudy-flame.vercel.appp',
    githubUrl: 'https://github.com/A-AllaaEddine/costudy-nextjs',
  },
  {
    id: 3,
    type: 'app',
    title: 'Benyankom App',
    description: 'An App to connect clients with skilled craftsmen in Algeria',
    image: BenyankomAppThumbnail,
    tags: ['React Native', 'NativeWind', 'FullAuth'],
    demoUrl:
      'https://play.google.com/store/apps/details?id=com.benyankom.app&pli=1',
    // githubUrl: 'https://github.com/a-allaaeddine/tasks',
  },
  {
    id: 4,
    type: 'app',
    title: 'Winakol',
    description:
      'An app that let users browse through thousands of restaurants and dishes',
    image: WinakolAppThumbnail,
    tags: ['React Native', 'NativeWind', 'FullAuth'],
    demoUrl: 'https://play.google.com/store/apps/details?id=com.winnakol.app',
    githubUrl: 'https://github.com/A-AllaaEddine/winnakol-app',
  },
  {
    id: 5,
    type: 'library',
    title: 'FullAuth',
    description:
      ' An auth library that supports authentication for both web and mobile',
    image: FullAuthAppThumbnail,
    tags: ['TypeScript', 'Next.js', 'React Native', 'OAuth'],
    demoUrl: 'https://full-auth.vercel.app/introduction',
    githubUrl: 'https://github.com/A-AllaaEddine/fullauth',
    featured: true,
  },
];

export function ProjectFilter() {
  const [filter, setFilter] = useState<ProjectType>('all');

  const filteredProjects = projects.filter((project) =>
    filter === 'all' ? true : project.type === filter
  );

  return (
    <div>
      <div className="flex flex-wrap justify-center gap-3 mb-10">
        <Button
          onClick={() => setFilter('all')}
          variant={filter === 'all' ? 'default' : 'outline'}
          className="rounded-full font-medium"
        >
          All Projects
        </Button>
        <Button
          onClick={() => setFilter('website')}
          variant={filter === 'website' ? 'default' : 'outline'}
          className="rounded-full font-medium flex items-center gap-2"
        >
          <Globe className="h-4 w-4" />
          Websites
        </Button>
        <Button
          onClick={() => setFilter('app')}
          variant={filter === 'app' ? 'default' : 'outline'}
          className="rounded-full font-medium flex items-center gap-2"
        >
          <AppWindow className="h-4 w-4" />
          Applications
        </Button>
        <Button
          onClick={() => setFilter('library')}
          variant={filter === 'library' ? 'default' : 'outline'}
          className="rounded-full font-medium flex items-center gap-2"
        >
          <Code2 className="h-4 w-4" />
          Libraries
        </Button>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={filter}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              image={project.image}
              tags={project.tags}
              demoUrl={project.demoUrl}
              githubUrl={project.githubUrl ? project.githubUrl : ''}
              featured={project.featured}
            />
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
