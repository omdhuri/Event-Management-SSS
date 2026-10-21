import type { Metadata, Viewport } from 'next';
import { Cormorant_Garamond, Playfair_Display, Plus_Jakarta_Sans, Alex_Brush } from 'next/font/google';
import './globals.css';
import { AppShell } from '../components/AppShell';

export const viewport: Viewport = {
  themeColor: '#7A1B28',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-playfair',
  display: 'swap',
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-jakarta',
  display: 'swap',
});

const alexBrush = Alex_Brush({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-alex',
  display: 'swap',
  preload: false,
});

export const metadata: Metadata = {
  metadataBase: new URL('https://shreeswamisamarthevents.com'),
  title: 'Shree Swami Samarth Events | Luxury Event Management & Decor',
  description:
    'Thoughtfully curated celebrations in Kalyan, Dombivli, Thane, Mumbai, Virar & Vasai. From intimate milestone birthdays and dreamy baby showers to grand royal weddings and traditional haldi ceremonies.',
  keywords: [
    'event management Kalyan',
    'event management Thane',
    'event management Mumbai',
    'wedding decor Kalyan',
    'wedding decor Thane',
    'birthday decoration Dombivli',
    'birthday decoration Mumbai',
    'baby shower decor',
    'dohale jevan decoration',
    'haldi ceremony decor',
    'welcome baby decoration',
    'Shree Swami Samarth Events'
  ],
  icons: {
    icon: { url: '/favicon.svg', type: 'image/svg+xml' },
  },
  openGraph: {
    title: 'Shree Swami Samarth Events | Your Moments. Our Magic.',
    description:
      'From intimate gatherings to grand celebrations — stunning décor, seamless planning, and unforgettable experiences in Kalyan, Dombivli, Thane & Mumbai.',
    type: 'website',
    images: [
      {
        url: '/images/hero/hero-slide-01.webp',
        width: 1600,
        height: 720,
        alt: 'Shree Swami Samarth Events Stage & Floral Decor',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shree Swami Samarth Events | Luxury Event Management & Decor',
    description: 'Transforming celebrations into extraordinary memories in Kalyan, Thane & Mumbai.',
    images: ['/images/hero/hero-slide-01.webp'],
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Shree Swami Samarth Events',
  image: 'https://shreeswamisamarthevents.com/images/hero/hero-slide-01.webp',
  telephone: '+918108912433',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Kalyan',
    addressRegion: 'Maharashtra',
    postalCode: '421306',
    addressCountry: 'IN',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 19.2437,
    longitude: 73.1355,
  },
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    opens: '09:00',
    closes: '22:00',
  },
  priceRange: '₹₹',
  servesCuisine: 'Event Decor & Planning Services',
  sameAs: ['https://www.instagram.com/shreeswamisamarthevent_07/'],
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
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body suppressHydrationWarning className="antialiased bg-[#FAF7F2]">
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}
