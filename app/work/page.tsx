import type { Metadata } from 'next';
import { WorkClient } from './WorkClient';

export const metadata: Metadata = {
  title: 'Our Work & Event Portfolio | Shree Swami Samarth Events Pune',
  description:
    'Browse the real event gallery of Shree Swami Samarth Events: wedding mandap setups, baby shower backdrops, birthday balloon styling, floral centerpieces, and celebrations.',
  keywords: [
    'event gallery pune',
    'wedding decor photos kalyan',
    'baby shower setup pictures',
    'balloon decoration gallery',
    'stage decor portfolio',
  ],
  openGraph: {
    title: 'Curated Portfolio | Shree Swami Samarth Events',
    description:
      'Moments we have made special — explore real celebrations and signature event styling.',
    type: 'website',
  },
};

export default function WorkPage() {
  return <WorkClient />;
}
