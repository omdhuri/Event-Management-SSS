import type { Metadata } from 'next';
import { ServicesClient } from './ServicesClient';

export const metadata: Metadata = {
  title: 'Services & Packages | Shree Swami Samarth Events | Kalyan, Thane & Mumbai',
  description:
    'Explore luxury event management services by Shree Swami Samarth Events: Wedding Decor, Haldi & Sangeet, Baby Showers, Birthday Parties, Traditional celebrations, and Corporate events in Kalyan, Dombivli, Thane & Mumbai.',
  keywords: [
    'wedding decor kalyan',
    'wedding decor thane',
    'baby shower decoration kalyan',
    'birthday event planner dombivli',
    'corporate events mumbai',
    'event management packages thane',
  ],
  openGraph: {
    title: 'Luxury Event Management & Decor Services | Shree Swami Samarth Events',
    description:
      'From intimate celebrations to grand royal weddings — bespoke themes, floral artistry, and seamless event management.',
    type: 'website',
  },
};

export default function ServicesPage() {
  return <ServicesClient />;
}
