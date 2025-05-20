import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import { ExternalLink, Github } from 'lucide-react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string | StaticImageData;
  tags: string[];
  demoUrl: string;
  githubUrl?: string;
  featured?: boolean;
}

export function ProjectCard({
  title,
  description,
  image,
  tags,
  demoUrl,
  githubUrl,
  featured,
}: ProjectCardProps) {
  return (
    <Card className="overflow-hidden glass glass-hover border-0 rounded-3xl transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
      <div className="relative aspect-video overflow-hidden rounded-t-3xl">
        <Image
          src={image || '/placeholder.svg'}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>
      <CardContent className="p-6">
        <h3 className="text-xl font-medium mb-2">{title}</h3>
        <p className="text-gray-400 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-6">
          {tags.map((tag) => (
            <Badge
              key={tag}
              variant="outline"
              className="bg-secondary/50 hover:bg-secondary/70 border-primary/30 rounded-full"
            >
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex justify-between p-6 pt-0">
        <Button
          asChild
          variant="ghost"
          size="sm"
          className="rounded-full hover:text-primary transition-all"
        >
          <Link
            href={demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2"
          >
            <ExternalLink className="h-4 w-4" />
            Demo
          </Link>
        </Button>
        {githubUrl && (
          <Button
            asChild
            variant="ghost"
            size="sm"
            className="rounded-full font-medium hover:text-primary transition-all"
          >
            <Link
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <Github className="h-4 w-4" />
              Code
            </Link>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}
