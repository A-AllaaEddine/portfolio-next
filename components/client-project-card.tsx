import Image, { StaticImageData } from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { CheckCircle, Quote } from 'lucide-react';

interface Testimonial {
  text: string;
  author: string;
}

interface ClientProjectCardProps {
  title: string;
  client: string;
  description: string;
  image: string | StaticImageData;
  technologies: string[];
  results: string[];
  testimonial?: Testimonial;
}

export function ClientProjectCard({
  title,
  client,
  description,
  image,
  technologies,
  results,
  testimonial,
}: ClientProjectCardProps) {
  return (
    <Card className="overflow-hidden glass border-0 rounded-3xl">
      <CardContent className="p-0">
        <Tabs defaultValue="overview" className="w-full">
          <div className="flex flex-col md:flex-row">
            <div className="relative md:w-1/2 aspect-video md:aspect-auto">
              <Image
                src={image || '/placeholder.svg'}
                alt={title}
                fill
                className="object-full"
              />
            </div>
            <div className="p-8 md:w-1/2">
              <div className="mb-6">
                <h3 className="text-2xl font-medium mb-1">{title}</h3>
                <p className="text-primary mb-4">Client: {client}</p>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {technologies.map((tech) => (
                    <Badge
                      key={tech}
                      variant="outline"
                      className="border-primary/30 rounded-full"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>

              <TabsList className="grid grid-cols-3 mb-6 rounded-full">
                <TabsTrigger value="overview" className="rounded-full">
                  Overview
                </TabsTrigger>
                <TabsTrigger value="results" className="rounded-full">
                  Results
                </TabsTrigger>
                {testimonial && (
                  <TabsTrigger value="testimonial" className="rounded-full">
                    Testimonial
                  </TabsTrigger>
                )}
              </TabsList>

              <TabsContent value="overview" className="mt-0">
                <h4 className="text-lg font-medium mb-4">Project Overview</h4>
                <p className="text-gray-300 leading-relaxed">{description}</p>
              </TabsContent>

              <TabsContent value="results" className="mt-0">
                <h4 className="text-lg font-medium mb-4">Key Results</h4>
                <ul className="space-y-2">
                  {results.map((result, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>{result}</span>
                    </li>
                  ))}
                </ul>
              </TabsContent>

              {testimonial && (
                <TabsContent value="testimonial" className="mt-0">
                  <h4 className="text-lg font-medium mb-4">Client Feedback</h4>
                  <div className="relative border-l-4 border-primary pl-4 italic text-gray-300">
                    <Quote className="h-6 w-6 text-primary absolute -left-3 -top-3 bg-background p-1 rounded-full" />
                    <p className="mb-2 leading-relaxed">{testimonial.text}</p>
                    <p className="text-sm font-medium text-primary not-italic">
                      — {testimonial.author}
                    </p>
                  </div>
                </TabsContent>
              )}
            </div>
          </div>
        </Tabs>
      </CardContent>
    </Card>
  );
}
