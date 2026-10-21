import type { Metadata } from 'next';
import { Cormorant_Garamond, Playfair_Display, Plus_Jakarta_Sans, Alex_Brush } from 'next/font/google';
import './globals.css';
import { AppShell } from '../components/AppShell';

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-playfair',
  display: 'swap',
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-jakarta',
  display: 'swap',
});

const alexBrush = Alex_Brush({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-alex',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Shree Swami Samarth Events | Luxury Event Management & Decor Pune',
  description:
    'Thoughtfully curated celebrations in Pune. From intimate gatherings to grand weddings, birthdays, baby showers, and corporate events.',
  keywords: ['event management Pune', 'wedding decor', 'birthday decoration', 'baby shower', 'corporate events', 'Shree Swami Samarth Events'],
  icons: {
    icon: { url: '/favicon.svg', type: 'image/svg+xml' },
  },
  openGraph: {
    title: 'Shree Swami Samarth Events | Your Moments. Our Magic.',
    description: 'From intimate gatherings to grand celebrations — stunning décor, seamless planning, unforgettable experiences.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${playfair.variable} ${jakarta.variable} ${alexBrush.variable}`}
    >
      <body suppressHydrationWarning className="antialiased bg-[#FAF7F2]">
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}
