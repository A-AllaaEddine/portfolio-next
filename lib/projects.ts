export type ProjectImage = {
  src: string;
  alt: string;
  caption: string;
  preferredTheme?: 'dark';
};

export type CaseStudy = {
  slug: string;
  title: string;
  category: string;
  kind: 'Open source' | 'Client project' | 'Independent product';
  summary: string;
  stack: string[];
  context: string;
  contribution: string;
  architecture: string;
  details: string[];
  constraints: string[];
  gallery: ProjectImage[];
  external?: { label: string; href: string };
  testimonial?: { quote: string; author: string; results: string[] };
};

export const caseStudies: CaseStudy[] = [
  {
    slug: 'fullauth', title: 'FullAuth', category: 'Open-source library', kind: 'Open source',
    summary: 'A TypeScript authentication library with integrations for web and native clients.',
    stack: ['TypeScript', 'Next.js', 'React', 'React Native', 'JWT'],
    context: 'Authentication code can become fragmented when separate web and native products need related identity flows. FullAuth organizes shared authentication behavior into a TypeScript core and framework integrations.',
    contribution: 'Built and published the library, its provider modules, token and session utilities, and integrations for Next.js, React, and React Native.',
    architecture: 'Web and native applications connect through framework-specific integration points to shared TypeScript modules. Credential and Google provider modules sit alongside JWT and session utilities.',
    details: ['TypeScript core modules', 'Credential and Google provider modules', 'JWT and session utilities', 'Next.js, React, and React Native integrations'],
    constraints: [
      'Signing configuration, OAuth state validation, and token expiration still need fixes before the library is ready for production use. The screenshots show a locally reviewed website redesign.',
      'Native OAuth and server-side token revocation are still incomplete.',
    ],
    gallery: [
      { src: '/fullauth/approved-home-light.webp', alt: 'Approved FullAuth homepage in its light theme, with a package architecture explorer', caption: 'Homepage · light theme' },
      { src: '/fullauth/approved-home-dark.webp', alt: 'Approved FullAuth homepage in its dark theme', caption: 'Homepage · dark theme', preferredTheme: 'dark' },
      { src: '/fullauth/approved-docs-light.webp', alt: 'FullAuth documentation page showing Next.js setup code in the light theme', caption: 'Documentation and code · light' },
      { src: '/fullauth/approved-docs-dark.webp', alt: 'FullAuth documentation page showing Next.js setup code in the dark theme', caption: 'Documentation and code · dark' },
      { src: '/fullauth/approved-architecture.webp', alt: 'The approved FullAuth package map with the React Native integration selected', caption: 'Package map · React Native' },
      { src: '/fullauth/approved-mobile-light.webp', alt: 'FullAuth homepage at a mobile viewport in the light theme', caption: 'Mobile · light theme' },
      { src: '/fullauth/approved-mobile-dark.webp', alt: 'FullAuth homepage at a mobile viewport in the dark theme', caption: 'Mobile · dark theme' },
    ],
    external: { label: 'View public repository', href: 'https://github.com/A-AllaaEddine/fullauth' },
  },
  {
    slug: 'stayfinder', title: 'StayFinder', category: 'Travel product · Paid freelance', kind: 'Client project',
    summary: 'A hotel discovery and booking workflow built with a shared authentication foundation.',
    stack: ['Next.js 13', 'TypeScript', 'tRPC', 'TanStack Query', 'Prisma', 'MongoDB', 'Zod', 'FullAuth'],
    context: 'The product brings hotel discovery and account-based trip planning into one web experience.',
    contribution: 'Implemented catalogue browsing, search and filters, property details, saved hotels, account and profile flows, reviews, and create, confirm, and cancel booking workflows.',
    architecture: 'Next.js application with typed tRPC procedures, TanStack Query client state, Zod validation, and Prisma persistence over MongoDB; FullAuth provides the shared auth layer.',
    details: ['Hotel catalogue, search and filtering', 'Property detail pages and saved hotels', 'Profiles and reviews', 'Booking create, confirm, and cancel flows'],
    constraints: ['Payment is simulated and uses a hard-coded placeholder payment ID. No real payment provider or completed transactions are claimed.', 'Booking authorization and availability race handling require further review.', 'Client repository is private; no source link is provided.'],
    gallery: [
      { src: '/Stayfinder_thumbnail.png', alt: 'StayFinder landing page with a hotel search interface', caption: 'Hotel discovery' },
      { src: '/Stayfinder_thumbnail_2.png', alt: 'StayFinder search results with filters and hotel listings', caption: 'Search and filters' },
      { src: '/Stayfinder_thumbnail_3.png', alt: 'StayFinder property page with a multi-image hotel gallery', caption: 'Property details' },
      { src: '/Stayfinder_thumbnail_4.png', alt: 'StayFinder account interface', caption: 'Account experience' },
    ],
  },
  {
    slug: 'flavourfind', title: 'FlavourFind', category: 'Food discovery · Paid freelance', kind: 'Client project',
    summary: 'Restaurant, shop, and dish discovery with reviews and account features.',
    stack: ['Next.js 14', 'TypeScript', 'tRPC', 'Prisma', 'MongoDB', 'Zod', 'FullAuth'],
    context: 'A discovery product centered on finding places and individual dishes, with tools for diners and shop owners.',
    contribution: 'Built discovery and favorites experiences, profiles, reviews, localized routes, and shop-owner and admin interfaces.',
    architecture: 'Next.js application using typed tRPC endpoints, Prisma with MongoDB, Zod schemas, and FullAuth integration.',
    details: ['Restaurant and shop discovery', 'Dish discovery, favorites, and reviews', 'Localized routing', 'Shop-owner management and admin interfaces'],
    constraints: ['Client source remains private.'],
    gallery: [
      { src: '/FlavourFind_thumbnail.png', alt: 'FlavourFind restaurant discovery landing page', caption: 'Restaurant discovery' },
      { src: '/FlavourFind_thumbnail_2.png', alt: 'FlavourFind restaurant results with cuisine filters', caption: 'Search and filters' },
      { src: '/FlavourFind_thumbnail_3.png', alt: 'FlavourFind restaurant page with menu items and reviews navigation', caption: 'Restaurant and menu details' },
    ],
    testimonial: {
      quote: 'Allaa delivered exactly what we needed—a fast, intuitive, and visually appealing platform that our users love. Our traffic and restaurant partnerships have grown significantly since launch.',
      author: 'Danny, Head of Product',
      results: ['45% increase in user engagement through dish-level ratings', '60% more return visits due to personalized recommendations', 'Doubled partner restaurant sign-ups within the first 2 months'],
    },
  },
  {
    slug: 'benyankom', title: 'Benyankom', category: 'Marketplace · Web and mobile', kind: 'Independent product',
    summary: 'A marketplace connecting customers with craftsmen in Algeria across web and mobile experiences.',
    stack: ['Next.js', 'React Native', 'NativeWind', 'FullAuth'],
    context: 'Customers need a way to connect with skilled craftsmen through a product designed for the local market.',
    contribution: 'Built web and mobile product experiences for the marketplace.',
    architecture: 'A web application and React Native mobile client serve the same marketplace concept; FullAuth is part of the observed technology stack.',
    details: ['Web marketplace experience', 'React Native mobile experience', 'Customer-to-craftsman marketplace concept'],
    constraints: ['Source repositories remain private.'],
    gallery: [
      { src: '/Benyankom_thumbnail.png', alt: 'Benyankom web marketplace interface', caption: 'Web marketplace' },
      { src: '/Benyankom_app_thumbnail.png', alt: 'Benyankom application mark used for the mobile product', caption: 'Mobile product mark' },
    ],
  },
  {
    slug: 'winakol', title: 'Winakol', category: 'Restaurant discovery · Mobile', kind: 'Independent product',
    summary: 'A React Native restaurant discovery experience with ratings at restaurant and dish level.',
    stack: ['React Native', 'Expo'],
    context: 'Restaurant discovery benefits from feedback on both the venue and the food itself.',
    contribution: 'Developed a mobile discovery experience with restaurant-level and dish-level ratings.',
    architecture: 'React Native and Expo application organized around restaurant and dish discovery.',
    details: ['Restaurant discovery', 'Restaurant-level ratings', 'Dish-level ratings'],
    constraints: [],
    gallery: [{ src: '/Winakol_app_thumbnail.png', alt: 'Winakol mobile application visual mark', caption: 'Application mark' }],
  },

];

export const projectFilters = [
  { label: 'All projects', slugs: caseStudies.map((project) => project.slug) },
  { label: 'Client projects', slugs: caseStudies.filter((project) => project.kind === 'Client project').map((project) => project.slug) },
  { label: 'Mobile apps', slugs: ['benyankom', 'winakol'] },
  { label: 'Open source', slugs: caseStudies.filter((project) => project.kind === 'Open source').map((project) => project.slug) },
];
