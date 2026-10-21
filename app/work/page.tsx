import type { Metadata } from 'next';
import { WorkClient } from './WorkClient';

export const metadata: Metadata = {
  title: 'Our Work & Event Portfolio | Shree Swami Samarth Events | Kalyan, Thane & Mumbai',
  description:
    'Browse the real event gallery of Shree Swami Samarth Events: wedding mandap setups, baby shower backdrops, birthday balloon styling, floral centerpieces, and celebrations across Kalyan, Dombivli, Thane & Mumbai.',
  keywords: [
    'event gallery kalyan',
    'event gallery thane',
    'event gallery mumbai',
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
