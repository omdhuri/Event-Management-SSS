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
    image: '/images/birthday/birthday-decor-01.webp',
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
    title: 'Baby Showers & Dohale Jevan',
    shortDesc: 'Beautiful setups to welcome new beginnings.',
    fullDesc: 'Celebrate the sweetest upcoming arrival with delicate floral installations, soft pastel balloon clouds, plush teddy bear accents, and heartfelt gender reveals or traditional Dohale Jevan setups.',
    image: '/images/baby-shower/baby-shower-decor-01.webp',
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
    title: 'Weddings & Engagements',
    shortDesc: 'Elegant décor for your special day.',
    fullDesc: 'From romantic varmala stages and grand wedding mandaps to breathtaking reception backdrops and floral walkways, we infuse every ceremony with royal luxury and timeless grace.',
    image: '/images/hero/hero-slide-01.webp',
    iconName: 'HeartHandshake',
    category: 'Weddings',
    startingPrice: '₹75,000',
    deliverables: [
      'Grand wedding reception stage & floral arches',
      'Vedic mandap decor with traditional floral canopies',
      'Bridal entry path styling & crystal chandeliers',
      'Luxury sofa seating & royal backdrop draping',
      'Car floral decoration & grand entryway arches',
      'Vibrant Haldi, Mehendi & Ring ceremony themed setups'
    ],
    popularThemes: ['Royal Rajwada', 'Blush Pastel Palace', 'Contemporary White & Gold', 'Marigold Heritage', 'Enchanted Forest']
  },
  {
    id: 'festive-traditional',
    title: 'Haldi & Festive Decor',
    shortDesc: 'Celebrate traditions with grandeur.',
    fullDesc: 'Honoring heritage with magnificent marigold floral canopies, brass urlis, glowing antique lanterns, and authentic cultural decorations for Haldi, Mehendi, Ring ceremonies, Ganesh Utsav, and Housewarmings.',
    image: '/images/haldi-ceremony/haldi-ring-ceremony-01.webp',
    iconName: 'Flower2',
    category: 'Festive',
    startingPrice: '₹20,000',
    deliverables: [
      'Fresh marigold & jasmine floral draping',
      'Traditional wooden swing (Jhoola) decoration',
      'Brass urli with floating candles & rose petals',
      'Temple-style archways & velvet fabric backdrops',
      'Rangoli styling & heritage ambient lighting',
      'Ring ceremony pedestal & photo backdrop'
    ],
    popularThemes: ['Traditional Marigold Glow', 'Temple Heritage', 'Royal Brass & Silk', 'Modern Festive Fusion']
  },
  {
    id: 'welcome-baby',
    title: 'Welcome Baby & Naming Ceremony',
    shortDesc: 'Heartwarming setups for your little angel.',
    fullDesc: 'A grand welcome home and naming ceremony for your newborn with customized cradle decorations, cute pastel balloon rings, personalized initial signboards, and elegant baby pedestals.',
    image: '/images/welcome-baby/welcome-baby-decor-01.webp',
    iconName: 'Heart',
    category: 'Baby Shower',
    startingPrice: '₹12,000',
    deliverables: [
      'Custom decorated floral cradle (Barse setup)',
      'Pastel organic balloon ring installations',
      'Customized baby name reveal easel & cutouts',
      'Ambient LED warm backlights & fairy lights',
      'Photo-op corner for family memories'
    ],
    popularThemes: ['Royal Prince / Princess', 'Pastel Cloud Dreams', 'Traditional Marathi Barse', 'Teddy & Stars']
  },
  {
    id: 'corporate-events',
    title: 'Corporate Events & Galas',
    shortDesc: 'Professional setups for meaningful gatherings.',
    fullDesc: 'Elevate your brand presence with sophisticated annual galas, award nights, product launches, corporate conferences, and festive office celebrations executed with flawless professionalism.',
    image: '/images/about-centerpiece.webp',
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
    title: 'Pastel Dream Birthday Kingdom',
    category: 'Birthdays',
    date: 'Aug 2024',
    location: 'Kalyan',
    client: 'Ananya\'s Milestone Birthday',
    tagline: 'Vibrant pastel balloon arches with custom neon and marquee numbers',
    image: '/images/birthday/birthday-decor-01.webp',
    images: [
      '/images/birthday/birthday-decor-01.webp',
      '/images/birthday/birthday-decor-02.webp',
      '/images/birthday/birthday-decor-04.webp',
      '/images/birthday/birthday-decor-05.webp',
      '/images/birthday/birthday-decor-07.webp'
    ],
    description: 'A dreamy pastel-themed birthday setup with organic balloon installations, floral accents, illuminated marquee number lights, and customized welcome entrance.',
    highlights: [
      'Custom theme balloon architecture',
      'Organic pastel arch & backdrops',
      'Warm LED name reveal board',
      'Themed photobooth stage',
      'Complete event styling & props'
    ]
  },
  {
    id: 'jungle-safari-birthday',
    title: 'Jungle Safari Adventure Birthday',
    category: 'Birthdays',
    date: 'Sep 2024',
    location: 'Kalyan',
    client: 'Aarav\'s 2nd Birthday',
    tagline: 'Lush green foliage balloon installations with animal cutouts and jungle bridge',
    image: '/images/birthday/birthday-decor-06.webp',
    images: [
      '/images/birthday/birthday-decor-06.webp',
      '/images/birthday/birthday-decor-14.webp',
      '/images/birthday/birthday-decor-18.webp',
      '/images/birthday/birthday-decor-21.webp',
      '/images/birthday/birthday-decor-24.webp'
    ],
    description: 'An exciting safari wilderness themed celebration featuring multi-tone green and gold balloon garlands, life-sized wild animal cutouts, wooden crates, and custom explorer backdrop.',
    highlights: [
      'Safari animal theme backdrops',
      'Multi-shade jungle balloon canopy',
      'Personalized safari milestone board',
      'Interactive photo-op zone for kids',
      'Dessert table styling with jungle vines'
    ]
  },
  {
    id: 'royal-reception',
    title: 'Royal Grand Reception Stage',
    category: 'Weddings',
    date: 'Dec 2024',
    location: 'Kalyan',
    client: 'Priya & Amit Wedding',
    tagline: 'Grand royal wedding stage with crystal chandeliers and luxury sofa lounge',
    image: '/images/hero/hero-slide-01.webp',
    images: [
      '/images/hero/hero-slide-01.webp',
      '/images/haldi-ceremony/haldi-ring-ceremony-05.webp',
      '/images/wedding-car.webp',
      '/images/about-centerpiece.webp'
    ],
    description: 'A breathtaking royal stage setup featuring handpicked fresh floral arrangements, opulent crystal chandeliers, velvet seating, and grand entryway coordination.',
    highlights: [
      'Grand floral stage backdrop',
      'Imported crystal chandeliers & mood uplighting',
      'Luxury velvet royal sofa lounge',
      'Grand floral walkway & entryway',
      'Complete stage coordination'
    ]
  },
  {
    id: 'boho-baby-shower',
    title: 'Dreamy Pastel Baby Shower',
    category: 'Baby Shower',
    date: 'Oct 2024',
    location: 'Kalyan',
    client: 'Sneha & Rohit Baby Shower',
    tagline: 'Soft blush pink and baby blue balloon clouds with plush teddy bears and glowing neon',
    image: '/images/baby-shower/baby-shower-decor-01.webp',
    images: [
      '/images/baby-shower/baby-shower-decor-01.webp',
      '/images/baby-shower/baby-shower-decor-03.webp',
      '/images/baby-shower/baby-shower-decor-09.webp',
      '/images/baby-shower/baby-shower-decor-10.webp',
      '/images/baby-shower/baby-shower-decor-12.webp'
    ],
    description: 'An enchanting welcoming celebration with delicate pastel balloon clouds, custom "Baby On The Way" glowing neon signage, and cuddly teddy bear accents designed for a joyful family gathering.',
    highlights: [
      'Organic pastel balloon cloud installation',
      'Custom glowing neon backdrop',
      'Plush teddy bear stage arrangement',
      'Mom-to-be floral throne styling',
      'Custom welcome easel and keepsake table'
    ]
  },
  {
    id: 'teddy-bear-baby-shower',
    title: 'Teddy Bear Garden Baby Shower',
    category: 'Baby Shower',
    date: 'Nov 2024',
    location: 'Kalyan',
    client: 'Pooja & Rohan Dohale Jevan',
    tagline: 'Whimsical teddy bear tea party with golden floral ring and pastel accents',
    image: '/images/baby-shower/baby-shower-decor-11.webp',
    images: [
      '/images/baby-shower/baby-shower-decor-11.webp',
      '/images/baby-shower/baby-shower-decor-13.webp',
      '/images/baby-shower/baby-shower-decor-14.webp',
      '/images/baby-shower/baby-shower-decor-15.webp',
      '/images/baby-shower/baby-shower-decor-18.webp'
    ],
    description: 'A traditional and modern fusion Dohale Jevan celebrating the arrival of the newborn, complete with authentic marigold floral jhoola, delicate pastel accents, and warm golden mood lighting.',
    highlights: [
      'Traditional floral jhoola cradle setup',
      'Custom printed milestone backdrop',
      'Golden circular arch with balloon accents',
      'Comfortable seating arrangement for mom-to-be',
      'Return gift and sweets presentation table'
    ]
  },
  {
    id: 'welcome-baby-naming',
    title: 'Welcome Baby & Naming Ceremony',
    category: 'Baby Shower',
    date: 'Dec 2024',
    location: 'Kalyan',
    client: 'Little Prince Naming Ceremony',
    tagline: 'Adorable royal baby cradle setup with customized welcome board and balloon clouds',
    image: '/images/welcome-baby/welcome-baby-decor-01.webp',
    images: [
      '/images/welcome-baby/welcome-baby-decor-01.webp',
      '/images/welcome-baby/welcome-baby-decor-03.webp',
      '/images/welcome-baby/welcome-baby-decor-04.webp',
      '/images/welcome-baby/welcome-baby-decor-05.webp',
      '/images/welcome-baby/welcome-baby-decor-07.webp'
    ],
    description: 'A heartwarming welcome home and naming ceremony celebration for newborn baby with baby blue and white organic balloon garlands, ornate cradle decor, and custom letter board.',
    highlights: [
      'Ornate baby cradle / Palana decoration',
      'Custom name reveal photobooth wall',
      'Fairy lights & soft cloud backdrop',
      'Welcome easel with birth details',
      'Family memories photo corner'
    ]
  },
  {
    id: 'haldi-marigold-canopy',
    title: 'Vibrant Haldi & Ring Ceremony',
    category: 'Festive',
    date: 'Jan 2025',
    location: 'Kalyan',
    client: 'Kulkarni Family Celebrations',
    tagline: 'Traditional yellow marigold drapes, brass urlis, and floral canopy',
    image: '/images/haldi-ceremony/haldi-ring-ceremony-01.webp',
    images: [
      '/images/haldi-ceremony/haldi-ring-ceremony-01.webp',
      '/images/haldi-ceremony/haldi-ring-ceremony-02.webp',
      '/images/haldi-ceremony/haldi-ring-ceremony-03.webp',
      '/images/haldi-ceremony/haldi-ring-ceremony-04.webp',
      '/images/haldi-ceremony/haldi-ring-ceremony-06.webp'
    ],
    description: 'A vibrant celebration of tradition infused with fresh yellow and orange marigold garlands, handcrafted brass urlis with floating candles, and an ornate traditional background for Haldi and engagement.',
    highlights: [
      'Fresh marigold and jasmine flower canopy',
      'Decorated traditional backdrop',
      'Brass urli with floating candles & rose petals',
      'Customized Haldi props & photo corner',
      'Traditional heritage entryway arch'
    ]
  },
  {
    id: 'ring-ceremony-engagement',
    title: 'Elegant Ring Ceremony Setup',
    category: 'Weddings',
    date: 'Jan 2025',
    location: 'Kalyan',
    client: 'Gaurav & Neha Engagement',
    tagline: 'Modern circular ring backdrop with glowing neon and delicate florals',
    image: '/images/haldi-ceremony/haldi-ring-ceremony-05.webp',
    images: [
      '/images/haldi-ceremony/haldi-ring-ceremony-05.webp',
      '/images/haldi-ceremony/haldi-ring-ceremony-06.webp',
      '/images/hero/hero-slide-01.webp',
      '/images/wedding-car.webp'
    ],
    description: 'An intimate, contemporary engagement stage featuring a circular floral ring, warm Edison bulb accents, illuminated initials, and bespoke couple lounge seating.',
    highlights: [
      'Circular floral ring backdrop',
      'Custom couple initial LED sign',
      'Velvet couple seating lounge',
      'Ring exchange pedestal styling',
      'Ambient warm fairy light walkway'
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
    image: '/images/wedding-car.webp',
    images: [
      '/images/wedding-car.webp',
      '/images/hero/hero-slide-01.webp',
      '/images/about-centerpiece.webp'
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
    id: 'corporate-annual-gala',
    title: 'Corporate Leadership Gala',
    category: 'Corporate',
    date: 'Nov 2024',
    location: 'Kalyan',
    client: 'TechGlobal Annual Awards',
    tagline: 'Sophisticated banquet hall staging, LED wall branding, and centerpiece styling',
    image: '/images/about-centerpiece.webp',
    images: [
      '/images/about-centerpiece.webp',
      '/images/hero/hero-slide-01.webp',
      '/images/team-members.webp'
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
    event: 'Wedding & Ring Ceremony',
    quote: 'Absolutely loved the décor and planning! The stage and floral arrangements were breathtaking. Everything was perfect and beyond our expectations.',
    avatar: 'https://images.pexels.com/photos/6023737/pexels-photo-6023737.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=200',
    rating: 5
  },
  {
    id: 'test-2',
    name: 'Sneha & Rohit Patil',
    event: 'Baby Shower & Naming Ceremony',
    quote: 'The team made our baby shower and naming ceremony so magical! Beautiful pastel balloons, cute teddy setup, and amazing coordination.',
    avatar: 'https://images.pexels.com/photos/4993172/pexels-photo-4993172.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=200',
    rating: 5
  },
  {
    id: 'test-3',
    name: 'Rahul Deshmukh',
    event: 'Birthday & Family Celebration',
    quote: 'Professional, creative, and very easy to work with. The safari theme setup was an absolute hit with all our guests and kids!',
    avatar: 'https://images.pexels.com/photos/5308640/pexels-photo-5308640.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=200',
    rating: 5
  }
];

export const HERO_SLIDES = [
  {
    id: 1,
    title: 'Royal Wedding & Stage Decor',
    category: 'Weddings',
    image: '/images/hero/hero-slide-01.webp',
    tagline: 'Opulent mandap and reception stages with chandeliers and floral artistry'
  },
  {
    id: 2,
    title: 'Magical Milestone Birthday Celebrations',
    category: 'Birthdays',
    image: '/images/hero/hero-slide-02.webp',
    tagline: 'Pastel balloon arches, custom neon signs & marquee numbers'
  },
  {
    id: 3,
    title: 'Dreamy Pastel Baby Showers & Dohale Jevan',
    category: 'Baby Showers',
    image: '/images/hero/hero-slide-03.webp',
    tagline: 'Delicate balloon clouds, teddy bear lounges & golden accents'
  },
  {
    id: 4,
    title: 'Grand Haldi & Traditional Celebrations',
    category: 'Festive & Traditional',
    image: '/images/hero/hero-slide-04.webp',
    tagline: 'Marigold floral canopies, brass urlis & traditional swings'
  }
];

