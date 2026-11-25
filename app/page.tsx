import { PortfolioHome } from '@/components/portfolio-home';
import { pageMetadata } from '@/lib/site';

export const metadata = pageMetadata(
  '/',
  'Kaden | Full-Stack Developer',
  'Web and mobile applications, freelance client projects, and open-source work by Kaden (AMIAR ALLAA EDDINE RIAD).',
);

export default function HomePage() {
  return <PortfolioHome/>;
}
