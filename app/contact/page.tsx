import type { Metadata } from 'next';
import { ContactClient } from './ContactClient';

export const metadata: Metadata = {
  title: 'Contact Us & Location | Shree Swami Samarth Events Kalyan & Pune',
  description:
    'Contact Shree Swami Samarth Events. Visit our office in Kalyan, call +91 97669 82484, or message on WhatsApp for customized event planning and decor quotes in Pune & Maharashtra.',
  keywords: [
    'contact shree swami samarth events',
    'event planner kalyan phone',
    'wedding decor office kalyan',
    'whatsapp event planner pune',
    'hire event manager pune',
  ],
  openGraph: {
    title: 'Contact Shree Swami Samarth Events | Kalyan & Pune',
    description:
      'Get in touch with our event planning team for customized wedding, birthday, and celebration decor.',
    type: 'website',
  },
};

export default function ContactPage() {
  return <ContactClient />;
}
