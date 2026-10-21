import type { Metadata } from 'next';
import { AboutClient } from './AboutClient';

export const metadata: Metadata = {
  title: 'About Us | Shree Swami Samarth Events | Luxury Event Planners Pune',
  description:
    'Learn about Shree Swami Samarth Events, established in 2023 in Kalyan & Pune. Discover our story, core values, passion for luxury decor, and client experiences.',
  keywords: [
    'about shree swami samarth events',
    'event planners pune',
    'luxury wedding decor kalyan',
    'event decorators maharashtra',
  ],
  openGraph: {
    title: 'About Shree Swami Samarth Events | We Create Experiences',
    description:
      'With creativity, attention to detail, and a passion for perfection, we turn your celebrations into beautifully crafted moments.',
    type: 'website',
  },
};

export default function AboutPage() {
  return <AboutClient />;
}
