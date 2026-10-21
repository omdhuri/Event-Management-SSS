import type { Metadata } from 'next';
import { ContactClient } from './ContactClient';

export const metadata: Metadata = {
  title: 'Contact Us & Location | Shree Swami Samarth Events | Kalyan, Thane & Mumbai',
  description:
    'Contact Shree Swami Samarth Events. Visit our office in Kalyan, call +91 81089 12433, or message on WhatsApp for customized event planning and decor quotes across Kalyan, Dombivli, Thane, Mumbai, Virar & Vasai.',
  keywords: [
    'contact shree swami samarth events',
    'event planner kalyan phone',
    'wedding decor office kalyan',
    'whatsapp event planner thane',
    'hire event manager mumbai',
  ],
  openGraph: {
    title: 'Contact Shree Swami Samarth Events | Kalyan, Thane & Mumbai',
    description:
      'Get in touch with our event planning team for customized wedding, birthday, and celebration decor.',
    type: 'website',
  },
};

export default function ContactPage() {
  return <ContactClient />;
}
