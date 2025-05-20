import { ClientProjectCard } from '@/components/client-project-card';
import { ContactForm } from '@/components/contact-form';
import { HeroParallax } from '@/components/hero-parallax';
import { SkillCard } from '@/components/skill-card';
import { Button } from '@/components/ui/button';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

// images
import { ProjectFilter } from '@/components/project-filter';
import DockerIcon from '@/public/docker.svg';
import FirebaseIcon from '@/public/firebase.svg';
import FlavourFindThumbnail from '@/public/FlavourFind_thumbnail.png';
import MongoDbIcon from '@/public/mongodb.svg';
import NextIcon from '@/public/nextjs.svg';
import NodeIcon from '@/public/nodejs02.svg';
import ReactNativeIcon from '@/public/react-native.svg';
import ReactIcon from '@/public/react.svg';
import StayFinderThumbnail from '@/public/Stayfinder_thumbnail.png';
import TailwindIcon from '@/public/tailwind.svg';
import TypescriptIcon from '@/public/typescript.svg';
import VercelIcon from '@/public/vercel.svg';
import ProfileImage from '@/public/Profile.jpg';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section
        id="home"
        className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden"
      >
        <HeroParallax />
        <div className="container px-4 md:px-6 relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-medium tracking-tight mb-6 animate-fade-in">
            Hey there!
          </h1>
          <h2
            className="text-2xl md:text-3xl lg:text-4xl font-medium mb-4 animate-fade-in"
            style={{ animationDelay: '0.2s' }}
          >
            I am <span className="text-primary">Allaa Eddine</span>
          </h2>
          <p
            className="max-w-[700px] mx-auto text-lg md:text-xl text-gray-300 mb-8 animate-fade-in"
            style={{ animationDelay: '0.4s' }}
          >
            A Full-Stack Developer specializing in Next.js, TypeScript, and
            Tailwind CSS for crafting efficient and elegant web solutions.
          </p>
          <div
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-in"
            style={{ animationDelay: '0.6s' }}
          >
            <Button asChild size="lg" className="rounded-full">
              <Link href="#projects">View My Work</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="rounded-full"
            >
              <Link href="#contact">Get In Touch</Link>
            </Button>
          </div>
          <div
            className="flex justify-center gap-6 mb-12 animate-fade-in"
            style={{ animationDelay: '0.8s' }}
          >
            <Link
              href="https://github.com/A-AllaaEddine"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
            >
              <Github className="h-8 w-8" />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link
              href="https://www.linkedin.com/in/allaa-eddine-riad-amiar/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
            >
              <Linkedin className="h-8 w-8" />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link
              href="mailto:a.allaaeddine.riad@gmail.com"
              className="hover:text-primary transition-colors"
            >
              <Mail className="h-8 w-8" />
              <span className="sr-only">Email</span>
            </Link>
          </div>
          <div className="absolute bottom-[-50px] left-1/2 transform -translate-x-1/2 animate-bounce">
            <ArrowDown className="h-8 w-8" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-background">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-medium tracking-tight text-center mb-12">
            About Me
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-square overflow-hidden rounded-3xl">
              <Image
                src={ProfileImage}
                alt="Allaa Eddine"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h3 className="text-2xl font-medium mb-4">
                Full-Stack Developer
              </h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                I'm passionate about creating seamless digital experiences that
                combine elegant design with powerful functionality. With
                expertise in modern web technologies, I build solutions that are
                not only visually appealing but also performant and scalable.
              </p>
              <p className="text-gray-300 mb-6 leading-relaxed">
                My approach focuses on user-centered design principles, ensuring
                that every project I work on delivers exceptional value to both
                clients and end-users.
              </p>
              <Button asChild variant="outline" className="rounded-full">
                <Link href="https://drive.google.com/file/d/1BC727-Z_R-5LLefRrQSFbcuFhlvcgSjf/view?usp=sharing">
                  View Resume
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section
        id="stack"
        className="py-20 bg-gradient-to-b from-background to-black/50"
      >
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-medium tracking-tight text-center mb-12">
            My Tech Stack
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            <SkillCard name="Next.js" icon={NextIcon} />
            <SkillCard name="React" icon={ReactIcon} />
            <SkillCard name="TypeScript" icon={TypescriptIcon} />
            <SkillCard name="Tailwind CSS" icon={TailwindIcon} />
            <SkillCard name="Node.js" icon={NodeIcon} />
            <SkillCard name="MongoDB" icon={MongoDbIcon} />
            <SkillCard name="Firebase" icon={FirebaseIcon} />
            <SkillCard name="Docker" icon={DockerIcon} />
            <SkillCard name="React Native" icon={ReactNativeIcon} />
            <SkillCard name="Vercel" icon={VercelIcon} />
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-black/50">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-medium tracking-tight text-center mb-12">
            Personal Projects
          </h2>
          <ProjectFilter />
          {/* <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"></div> */}
        </div>
      </section>

      {/* Client Work Section */}
      <section id="client-work" className="py-20 bg-background">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-medium tracking-tight text-center mb-12">
            Client Work / Freelance
          </h2>
          <div className="space-y-16">
            <ClientProjectCard
              title="StayFinder"
              client="TravelTech Startup"
              description="A sleek, high-performance platform designed to help users discover and book top-rated hotels effortlessly. Built with scalability and mobile-first usability in mind."
              image={StayFinderThumbnail}
              technologies={['Next.js', 'MongoDB', 'Tailwind CSS', 'FullAuth']}
              results={[
                '35% increase in hotel bookings within 3 months of launch',
                '50% growth in mobile user engagement',
                '20% increase in repeat bookings through personalized user experience',
              ]}
              testimonial={{
                text: 'Working with Allaa was a game-changer. The new site is not only beautiful but incredibly fast and intuitive. Our customers love it, and we’ve seen a clear uptick in both engagement and revenue.',
                author: 'Hadjer, CEO',
              }}
            />

            <ClientProjectCard
              title="FlavourFind"
              client="Food Discovery Platform"
              description="A dynamic web app that helps foodies explore top-rated restaurants and individual dishes in their area. Built for high performance, real-time reviews, and a seamless user experience on all devices."
              image={FlavourFindThumbnail}
              technologies={['Next.js', 'MongoDB', 'Tailwind CSS', 'FullAuth']}
              results={[
                '45% increase in user engagement through dish-level ratings',
                '60% more return visits due to personalized recommendations',
                'Doubled partner restaurant sign-ups within the first 2 months',
              ]}
              testimonial={{
                text: 'Allaa delivered exactly what we needed—a fast, intuitive, and visually appealing platform that our users love. Our traffic and restaurant partnerships have grown significantly since launch.',
                author: 'Danny, Head of Product',
              }}
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-20 bg-gradient-to-b from-black/50 to-background"
      >
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-medium tracking-tight text-center mb-12">
            Get In Touch
          </h2>
          <div className="max-w-2xl mx-auto">
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  );
}
