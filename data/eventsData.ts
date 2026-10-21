export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  image: string;
  iconName: string;
  category: string;
  startingPrice: string;
  deliverables: string[];
  popularThemes: string[];
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Birthdays' | 'Baby Shower' | 'Weddings' | 'Festive' | 'Corporate';
  date: string;
  location: string;
  image: string;
  images: string[];
  description: string;
  highlights: string[];
  client: string;
  tagline: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  event: string;
  quote: string;
  avatar: string;
  rating: number;
}

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'birthday-parties',
    title: 'Birthday Parties',
    shortDesc: 'Fun, vibrant and memorable celebrations for all ages.',
    fullDesc: 'Transform birthdays into magical wonderlands. From dreamy 1st birthday milestone themes and giant LED marquee numbers to teen glow parties and elegant milestone jubilees, we craft unforgettable memories.',
    image: '/images/birthday-balloons.jpg',
    iconName: 'Cake',
    category: 'Birthdays',
    startingPrice: '₹15,000',
    deliverables: [
      'Custom organic balloon arches & garlands',
      'Illuminated LED name boards & marquee numbers',
      'Themed photobooth corners & backdrops',
      'Cake table styling & dessert pedestals',
      'Customized welcome signage & entry easel',
      'Sound, ambient lighting & party effect coordination'
    ],
    popularThemes: ['Pastel Dreamland', 'Safari Adventure', 'Princess Castle', 'Retro Glow', 'Minimal Luxury Gold']
  },
  {
    id: 'baby-showers',
    title: 'Baby Showers',
    shortDesc: 'Beautiful setups to welcome new beginnings.',
    fullDesc: 'Celebrate the sweetest upcoming arrival with delicate floral installations, soft pastel balloon clouds, plush teddy bear accents, and heartfelt gender reveals or traditional Dohale Jevan setups.',
    image: '/images/baby-shower.jpg',
    iconName: 'Baby',
    category: 'Baby Shower',
    startingPrice: '₹18,000',
    deliverables: [
      'Pastel balloon cloud arches & backdrops',
      'Warm neon signage ("Oh Baby", "Baby On The Way")',
      'Plush giant teddy bear stage styling',
      'Floral cradle / jhoola traditional decoration',
      'Personalized welcome board & mom-to-be throne',
      'Guest memory book table & return gift display'
    ],
    popularThemes: ['Teddy Bear Garden', 'Pastel Boho Cloud', 'Traditional Dohale Jevan', 'Twinkle Little Star', 'Woodland Whimsy']
  },
  {
    id: 'weddings',
    title: 'Weddings',
    shortDesc: 'Elegant décor for your special day.',
    fullDesc: 'From romantic varmala stages and grand wedding mandaps to breathtaking reception backdrops and floral walkways, we infuse every ceremony with royal luxury and timeless grace.',
    image: '/images/wedding-mandap.jpg',
    iconName: 'HeartHandshake',
    category: 'Weddings',
    startingPrice: '₹75,000',
    deliverables: [
      'Grand wedding reception stage & floral arches',
      'Vedic mandap decor with traditional floral canopies',
      'Bridal entry path styling & crystal chandeliers',
      'Luxury sofa seating & royal backdrop draping',
      'Car floral decoration & grand entryway arches',
      'Vibrant Haldi, Mehendi & Sangeet themed setups'
    ],
    popularThemes: ['Royal Rajwada', 'Blush Pastel Palace', 'Contemporary White & Gold', 'Marigold Heritage', 'Enchanted Forest']
  },
  {
    id: 'festive-traditional',
    title: 'Festive & Traditional',
    shortDesc: 'Celebrate traditions with grandeur.',
    fullDesc: 'Honoring heritage with magnificent marigold floral canopies, brass urlis, glowing antique lanterns, and authentic cultural decorations for Ganesh Utsav, Diwali, Haldi, Navratri, and Housewarmings.',
    image: '/images/festive-traditional.jpg',
    iconName: 'Flower2',
    category: 'Festive',
    startingPrice: '₹20,000',
    deliverables: [
      'Fresh marigold & jasmine floral draping',
      'Traditional wooden swing (Jhoola) decoration',
      'Brass urli with floating candles & rose petals',
      'Temple-style archways & velvet fabric backdrops',
      'Rangoli styling & heritage ambient lighting',
      'Pooja mandap & spiritual altar curation'
    ],
    popularThemes: ['Traditional Marigold Glow', 'Temple Heritage', 'Royal Brass & Silk', 'Modern Festive Fusion']
  },
  {
    id: 'corporate-events',
    title: 'Corporate Events',
    shortDesc: 'Professional setups for meaningful gatherings.',
    fullDesc: 'Elevate your brand presence with sophisticated annual galas, award nights, product launches, corporate conferences, and festive office celebrations executed with flawless professionalism.',
    image: '/images/corporate-event.jpg',
    iconName: 'Briefcase',
    category: 'Corporate',
    startingPrice: '₹35,000',
    deliverables: [
      'Stage backdrop & LED video wall branding',
      'Banquet round table centerpieces & linens',
      'Registration desk & red carpet photo-op wall',
      'Audio-visual setup & ambient color uplighting',
      'Trophy & award presentation podium styling',
      'End-to-end event execution & guest flow management'
    ],
    popularThemes: ['Executive Black & Gold Gala', 'Tech Modern Minimalist', 'Annual Corporate Festival', 'Eco-Chic Conference']
  }
];

export const GALLERY_DATA: GalleryItem[] = [
  {
    id: 'magical-birthday',
    title: 'Magical Birthday Celebration',
    category: 'Birthdays',
    date: 'Aug 2024',
    location: 'Kalyan',
    client: 'Ananya\'s 3rd Birthday',
    tagline: 'Vibrant pastel balloon kingdom with custom neon and marquee numbers',
    image: '/images/birthday-balloons.jpg',
    images: [
      '/images/birthday-balloons.jpg',
      '/images/baby-shower.jpg',
      '/images/hero-stage.jpg',
      '/images/wedding-mandap.jpg'
    ],
    description: 'A dreamy pastel-themed birthday setup with elegant balloons, floral accents, and personalized elements, creating a magical celebration for a special day.',
    highlights: [
      'Custom theme decoration',
      'Balloon arches & backdrop',
      'LED name board',
      'Photo corner setup',
      'Complete event styling'
    ]
  },
  {
    id: 'royal-reception',
    title: 'Royal Grand Wedding Stage',
    category: 'Weddings',
    date: 'Dec 2024',
    location: 'Kalyan',
    client: 'Priya & Amit Wedding',
    tagline: 'Grand cascading pink roses with crystal chandeliers and royal velvet seating',
    image: '/images/wedding-mandap.jpg',
    images: [
      '/images/wedding-mandap.jpg',
      '/images/hero-stage.jpg',
      '/images/about-centerpiece.jpg',
      '/images/wedding-car.jpg'
    ],
    description: 'A breathtaking royal reception stage featuring thousands of handpicked fresh roses, cascading crystal chandeliers, and opulent velvet seating that mesmerized all 800+ guests.',
    highlights: [
      'Grand 30ft floral stage backdrop',
      'Imported crystal chandeliers & mood uplighting',
      'Luxury velvet royal sofa lounge',
      'Grand red carpet floral walkway',
      'Complete bridal & groom stage coordination'
    ]
  },
  {
    id: 'boho-baby-shower',
    title: 'Dreamy Pastel Baby Shower',
    category: 'Baby Shower',
    date: 'Oct 2024',
    location: 'Kalyan',
    client: 'Sneha & Rohit Baby Shower',
    tagline: 'Soft blush pink balloon clouds with plush teddy bears and glowing neon',
    image: '/images/baby-shower.jpg',
    images: [
      '/images/baby-shower.jpg',
      '/images/about-centerpiece.jpg',
      '/images/birthday-balloons.jpg',
      '/images/festive-traditional.jpg'
    ],
    description: 'An enchanting welcoming celebration with delicate pastel balloon clouds, custom "Oh Baby" glowing neon signage, and cuddly teddy bear accents designed for a joyful family gathering.',
    highlights: [
      'Organic pastel balloon cloud installation',
      'Custom glowing neon backdrop',
      'Plush teddy bear stage arrangement',
      'Mom-to-be floral throne styling',
      'Custom welcome easel and keepsake table'
    ]
  },
  {
    id: 'bridal-car-decor',
    title: 'Luxury Bridal Car Styling',
    category: 'Weddings',
    date: 'Nov 2024',
    location: 'Kalyan',
    client: 'Deshmukh Wedding Procession',
    tagline: 'Heart-shaped red rose arrangement with satin ribbons and baby\'s breath',
    image: '/images/wedding-car.jpg',
    images: [
      '/images/wedding-car.jpg',
      '/images/wedding-mandap.jpg',
      '/images/hero-stage.jpg',
      '/images/about-centerpiece.jpg'
    ],
    description: 'Exquisite bridal car decoration with a romantic heart-shaped fresh red rose centerpiece, delicate baby\'s breath floral garlands, and premium satin ribbons for the grand wedding arrival.',
    highlights: [
      'Fresh Dutch red rose heart installation',
      'Scratch-free magnetic & suction mounting',
      'Door handle ribbon & floral accents',
      'Rear floral garland styling',
      'On-time on-location car styling execution'
    ]
  },
  {
    id: 'haldi-marigold-canopy',
    title: 'Vibrant Haldi Ceremony Canopy',
    category: 'Festive',
    date: 'Jan 2025',
    location: 'Kalyan',
    client: 'Kulkarni Family Haldi',
    tagline: 'Traditional yellow marigold drapes, brass urlis, and heritage wooden swing',
    image: '/images/festive-traditional.jpg',
    images: [
      '/images/festive-traditional.jpg',
      '/images/about-centerpiece.jpg',
      '/images/wedding-mandap.jpg',
      '/images/hero-stage.jpg'
    ],
    description: 'A vibrant celebration of tradition infused with fresh yellow and orange marigold garlands, handcrafted brass urlis with floating candles, and an ornate wooden jhoola swing backdrop.',
    highlights: [
      'Fresh marigold and jasmine flower canopy',
      'Decorated traditional wooden jhoola swing',
      'Brass urli with floating candles & rose petals',
      'Customized Haldi props & photo corner',
      'Traditional heritage entryway arch'
    ]
  },
  {
    id: 'corporate-annual-gala',
    title: 'Corporate Leadership Gala',
    category: 'Corporate',
    date: 'Nov 2024',
    location: 'Kalyan',
    client: 'TechGlobal Annual Awards',
    tagline: 'Sophisticated banquet hall staging, LED wall branding, and centerpiece styling',
    image: '/images/corporate-event.jpg',
    images: [
      '/images/corporate-event.jpg',
      '/images/about-centerpiece.jpg',
      '/images/hero-stage.jpg',
      '/images/wedding-mandap.jpg'
    ],
    description: 'A prestigious annual award night with sleek modern staging, ambient corporate uplighting, banquet table centerpieces, and seamless audio-visual coordination for 350 executives.',
    highlights: [
      'Custom stage backdrop & LED branding',
      'Executive banquet table styling',
      'Red carpet step-and-repeat media wall',
      'Trophy presentation dais & lighting',
      'Full-day event logistics management'
    ]
  }
];

export const TESTIMONIALS_DATA: TestimonialItem[] = [
  {
    id: 'test-1',
    name: 'Priya & Amit',
    event: 'Wedding Celebration',
    quote: 'Absolutely loved the décor and planning! Everything was perfect and beyond our expectations.',
    avatar: 'https://images.pexels.com/photos/6023737/pexels-photo-6023737.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=200',
    rating: 5
  },
  {
    id: 'test-2',
    name: 'Sneha Patil',
    event: 'Birthday Celebration',
    quote: 'The team made our daughter\'s birthday so special. Beautiful setup and amazing coordination!',
    avatar: 'https://images.pexels.com/photos/4993172/pexels-photo-4993172.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=200',
    rating: 5
  },
  {
    id: 'test-3',
    name: 'Rahul Deshmukh',
    event: 'Corporate Event',
    quote: 'Professional, creative and very easy to work with. Highly recommended!',
    avatar: 'https://images.pexels.com/photos/5308640/pexels-photo-5308640.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=200',
    rating: 5
  }
];

export const HERO_SLIDES = [
  {
    id: 1,
    title: 'Royal Wedding Celebration',
    category: 'Weddings',
    image: '/images/hero-stage.jpg',
    tagline: 'Opulent mandap and reception stages with chandeliers and floral artistry'
  },
  {
    id: 2,
    title: 'Magical 3rd Birthday Wonderland',
    category: 'Birthdays',
    image: '/images/birthday-balloons.jpg',
    tagline: 'Pastel balloon arches, neon glow signs & marquee numbers'
  },
  {
    id: 3,
    title: 'Dreamy Pastel Baby Shower',
    category: 'Baby Showers',
    image: '/images/baby-shower.jpg',
    tagline: 'Delicate balloon clouds, teddy bear lounges & golden accents'
  },
  {
    id: 4,
    title: 'Grand Haldi & Traditional Decor',
    category: 'Festive & Traditional',
    image: '/images/festive-traditional.jpg',
    tagline: 'Marigold floral canopies, brass lanterns & traditional swings'
  }
];
