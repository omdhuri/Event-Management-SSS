export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  image: string;
  iconName: string;
  category: string;
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
  date?: string;
  source?: 'Google' | 'Direct';
}

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'birthday-parties',
    title: 'Birthday Parties',
    shortDesc: 'Themed decor, magic shows, mascots, and fog & pyro entries for memorable celebrations.',
    fullDesc: 'Transform birthdays into magical wonderlands. From dreamy 1st birthday milestone themes, giant LED marquee numbers, and themed photobooths to captivating live Magic Shows, delightful Panda & Mickey Mouse mascots, and thrilling grand Fog & Pyro entries, we craft unforgettable celebrations for kids and families.',
    image: '/images/birthday/birthday-decor-01.webp',
    iconName: 'Cake',
    category: 'Birthdays',
    deliverables: [
      'Custom organic balloon arches & themed backdrop styling',
      'Live Magic Show & interactive entertainment',
      'Panda & Mickey Mouse mascot characters for meet-and-greets',
      'Grand Fog & Pyro entry effects for the birthday star',
      'Illuminated LED name boards & giant marquee numbers',
      'Themed photobooth corners & customized welcome easel',
      'Cake table styling & dessert pedestals',
      'Sound, party lighting & special effects coordination'
    ],
    popularThemes: ['Pastel Dreamland', 'Safari Adventure', 'Princess Castle', 'Magic & Mascot Fun', 'Retro Glow', 'Minimal Luxury Gold']
  },
  {
    id: 'baby-showers',
    title: 'Baby Showers & Dohale Jevan',
    shortDesc: 'Beautiful setups to welcome new beginnings.',
    fullDesc: 'Celebrate the sweetest upcoming arrival with delicate floral installations, soft pastel balloon clouds, plush teddy bear accents, and heartfelt gender reveals or traditional Dohale Jevan setups.',
    image: '/images/baby-shower/baby-shower-decor-01.webp',
    iconName: 'Baby',
    category: 'Baby Shower',
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
    title: 'Corporate Events & Celebrations',
    shortDesc: 'Professional setups for meaningful gatherings.',
    fullDesc: 'Elevate your brand presence and company morale with sophisticated entrance gateways, festive workplace styling, annual celebrations, and milestone gatherings executed with flawless professionalism.',
    image: '/images/corporate/corporate-decor-02.webp',
    iconName: 'Briefcase',
    category: 'Corporate',
    deliverables: [
      'Corporate entryway styling & welcome portals',
      'Patriotic & festival photo-op backdrops (15th Aug, Diwali)',
      'Office cubicle & ceiling festive lantern installations',
      'Fresh marigold garland workstation draping',
      'Institutional & annual day balloon arches',
      'End-to-end corporate event styling & zero downtime execution'
    ],
    popularThemes: ['Corporate Gateway & Office Celebrations', 'Institutional Annual Day Decor', 'Patriotic Office Celebrations', 'Festive Workplace Lantern & Bay Styling']
  }
];

export const GALLERY_DATA: GalleryItem[] = [
  // ───────── BIRTHDAYS (8 distinct authentic themes) ─────────
  {
    id: 'jungle-safari-birthday',
    title: 'Wild One Jungle Safari Birthday',
    category: 'Birthdays',
    date: 'Sep 2024',
    location: 'Kalyan West',
    client: 'Aarav\'s 1st Birthday',
    tagline: 'Lush green foliage balloon arch, 3D wild safari animals & wooden bridge styling',
    image: '/images/birthday/birthday-decor-06.webp',
    images: [
      '/images/birthday/birthday-decor-06.webp',
      '/images/birthday/birthday-decor-07.webp',
      '/images/birthday/birthday-decor-08.webp',
      '/images/birthday/birthday-decor-09.webp',
      '/images/birthday/birthday-decor-10.webp'
    ],
    description: 'An immersive jungle adventure milestone celebration with layered olive, sage, and golden balloons, lifelike animal cutouts, rustic wooden crates, and an interactive photo corner for children.',
    highlights: [
      'Safari wildlife backdrop installation',
      'Organic foliage & balloon canopy',
      'Custom explorer milestone easel',
      'Kids photobooth zone',
      'Matching dessert table pedestals'
    ]
  },
  {
    id: 'pastel-princess-birthday',
    title: 'Pastel Princess Castle Kingdom',
    category: 'Birthdays',
    date: 'Aug 2024',
    location: 'Kalyan West',
    client: 'Ananya\'s 3rd Birthday',
    tagline: 'Dreamy pink & lavender balloon arches with glowing neon sign & marquee numbers',
    image: '/images/birthday/birthday-decor-01.webp',
    images: [
      '/images/birthday/birthday-decor-01.webp',
      '/images/birthday/birthday-decor-02.webp',
      '/images/birthday/birthday-decor-03.webp',
      '/images/birthday/birthday-decor-04.webp',
      '/images/birthday/birthday-decor-05.webp'
    ],
    description: 'A fairytale pastel celebration featuring organic balloon garlands, a giant illuminated LED marquee number, soft floral draping, and a dedicated cake cutting pedestal corner.',
    highlights: [
      'Fairytale castle backdrop',
      'Organic pastel balloon cloud arch',
      'Giant illuminated LED marquee number',
      'Princess cake pedestal styling',
      'Personalized entrance welcome easel'
    ]
  },
  {
    id: 'superhero-action-birthday',
    title: 'Superhero & Comic Action Fiesta',
    category: 'Birthdays',
    date: 'Oct 2024',
    location: 'Vasai West',
    client: 'Kabir\'s 5th Birthday Bash',
    tagline: 'High-energy comic action backdrop with bold red, blue & yellow balloon towers',
    image: '/images/birthday/birthday-decor-14.webp',
    images: [
      '/images/birthday/birthday-decor-14.webp',
      '/images/birthday/birthday-decor-15.webp',
      '/images/birthday/birthday-decor-16.webp',
      '/images/birthday/birthday-decor-17.webp',
      '/images/birthday/birthday-decor-18.webp'
    ],
    description: 'A power-packed superhero party with bold comic action pop-outs, towering organic balloon pillars, cityscape silhouette backdrop, and superhero photo props.',
    highlights: [
      'Comic book cityscape backdrop',
      'Vibrant superhero balloon towers',
      'Dynamic action prop photo zone',
      'Themed cake table styling',
      'Custom name cutouts & lighting effects'
    ]
  },
  {
    id: 'rainbow-carnival-birthday',
    title: 'Rainbow Carnival Balloon Spectacular',
    category: 'Birthdays',
    date: 'Nov 2024',
    location: 'Virar West',
    client: 'Reyansh\'s 4th Birthday',
    tagline: 'Vibrant spectrum balloon arch with circus pedestals and celebration marquee',
    image: '/images/birthday/birthday-decor-21.webp',
    images: [
      '/images/birthday/birthday-decor-21.webp',
      '/images/birthday/birthday-decor-22.webp',
      '/images/birthday/birthday-decor-23.webp',
      '/images/birthday/birthday-decor-24.webp',
      '/images/birthday/birthday-decor-25.webp'
    ],
    description: 'An eye-catching kaleidoscope celebration featuring multi-color organic balloon architecture, circus-inspired dessert cylinders, and festive ambient lighting.',
    highlights: [
      'Full rainbow balloon arch',
      'Circus tent patterned pedestals',
      'Warm fairy light canopy',
      'Festive welcome signage',
      'Fun photo-op props'
    ]
  },
  {
    id: 'luxury-black-gold-jubilee',
    title: 'Luxury Black & Gold 50th Jubilee',
    category: 'Birthdays',
    date: 'Dec 2024',
    location: 'Thane West',
    client: 'Sanjay Patil\'s 50th Milestone',
    tagline: 'Refined metallic chrome gold, midnight black balloon wall & giant LED 50',
    image: '/images/birthday/birthday-decor-26.webp',
    images: [
      '/images/birthday/birthday-decor-26.webp',
      '/images/birthday/birthday-decor-27.webp',
      '/images/birthday/birthday-decor-28.webp',
      '/images/birthday/birthday-decor-29.webp',
      '/images/birthday/birthday-decor-30.webp'
    ],
    description: 'An elegant milestone birthday celebration crafted with premium chrome gold and matte black balloons, a customized sequin backdrop wall, and warm ambient uplighting.',
    highlights: [
      'Glossy sequin shimmer wall',
      'Chrome gold organic balloon garland',
      '4ft Giant illuminated 50 marquee',
      'Champagne welcome easel',
      'Executive guest photobooth'
    ]
  },
  {
    id: 'boho-butterfly-birthday',
    title: 'Enchanted Butterfly Garden Dream',
    category: 'Birthdays',
    date: 'Jan 2025',
    location: 'Dombivli East',
    client: 'Myra\'s 1st Birthday',
    tagline: 'Pastel peach & eucalyptus balloon garland with 3D acrylic butterflies',
    image: '/images/birthday/birthday-decor-11.webp',
    images: [
      '/images/birthday/birthday-decor-11.webp',
      '/images/birthday/birthday-decor-12.webp',
      '/images/birthday/birthday-decor-13.webp',
      '/images/birthday/birthday-decor-19.webp',
      '/images/birthday/birthday-decor-20.webp'
    ],
    description: 'A delicate garden-themed first birthday with pastel peach and eucalyptus balloons, fluttering 3D golden butterflies, fairy lights, and acrylic cake pedestals.',
    highlights: [
      'Delicate butterfly floral ring',
      'Pastel organic balloon installation',
      'Clear acrylic dessert pedestals',
      'Custom 1st milestone board',
      'Soft ambient photo lighting'
    ]
  },
  {
    id: 'neon-glow-cyber-party',
    title: 'Neon Glow Cyber Milestone Party',
    category: 'Birthdays',
    date: 'Feb 2025',
    location: 'Bandra, Mumbai',
    client: 'Rohan\'s 18th Birthday',
    tagline: 'Vibrant UV neon glow tubes, custom neon name sign & balloon explosion',
    image: '/images/birthday/birthday-decor-31.webp',
    images: [
      '/images/birthday/birthday-decor-31.webp',
      '/images/birthday/birthday-decor-32.webp',
      '/images/birthday/birthday-decor-33.webp',
      '/images/birthday/birthday-decor-34.webp',
      '/images/birthday/birthday-decor-35.webp'
    ],
    description: 'A dynamic teenage milestone party designed with ultraviolet lighting, customized neon script signboards, dark contrast balloon clusters, and party props.',
    highlights: [
      'Custom neon script name sign',
      'UV reactive balloon clusters',
      'LED tube stage uplighting',
      'Selfie corner with party props',
      'Sound & light coordination'
    ]
  },
  {
    id: 'ocean-aqua-adventure',
    title: 'Under the Sea & Aqua Adventure',
    category: 'Birthdays',
    date: 'Jul 2024',
    location: 'Ghatkopar, Mumbai',
    client: 'Advait\'s 2nd Birthday',
    tagline: 'Ocean blue balloon waves, sea creature cutouts & nautical photobooth',
    image: '/images/birthday/birthday-decor-36.webp',
    images: [
      '/images/birthday/birthday-decor-36.webp',
      '/images/birthday/birthday-decor-37.webp',
      '/images/birthday/birthday-decor-38.webp',
      '/images/birthday/birthday-decor-02.webp',
      '/images/birthday/birthday-decor-05.webp'
    ],
    description: 'A refreshing aquatic-themed celebration with oceanic balloon ripples, nautical props, under-the-sea photobooth cutouts, and themed cake pedestal backdrop.',
    highlights: [
      'Sea blue balloon gradient wall',
      'Marine character photo backdrops',
      'Treasure chest cake pedestal',
      'Personalized sailor welcome easel',
      'Themed family photobooth'
    ]
  },

  // ───────── BABY SHOWER & WELCOME BABY (5 distinct setups) ─────────
  {
    id: 'boho-baby-shower',
    title: 'Pastel Cloud "Baby On The Way"',
    category: 'Baby Shower',
    date: 'Oct 2024',
    location: 'Thane West',
    client: 'Sneha & Rohit\'s Baby Shower',
    tagline: 'Soft blush pink & baby blue balloon clouds with plush teddy bears & glowing neon',
    image: '/images/baby-shower/baby-shower-decor-01.webp',
    images: [
      '/images/baby-shower/baby-shower-decor-01.webp',
      '/images/baby-shower/baby-shower-decor-02.webp',
      '/images/baby-shower/baby-shower-decor-03.webp',
      '/images/baby-shower/baby-shower-decor-04.webp',
      '/images/baby-shower/baby-shower-decor-05.webp'
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
    id: 'traditional-dohale-jevan',
    title: 'Traditional Marathi Dohale Jevan',
    category: 'Baby Shower',
    date: 'Nov 2024',
    location: 'Kalyan West',
    client: 'Tanvi & Aditya\'s Dohale Jevan',
    tagline: 'Authentic marigold floral jhoola (cradle), brass urlis & cultural backdrop',
    image: '/images/baby-shower/baby-shower-decor-06.webp',
    images: [
      '/images/baby-shower/baby-shower-decor-06.webp',
      '/images/baby-shower/baby-shower-decor-07.webp',
      '/images/baby-shower/baby-shower-decor-08.webp',
      '/images/baby-shower/baby-shower-decor-09.webp',
      '/images/baby-shower/baby-shower-decor-10.webp'
    ],
    description: 'A heartfelt traditional Maharashtrian Dohale Jevan celebration featuring a hand-decorated floral swing with yellow and orange marigolds, antique brass lamps, and pooja altar styling.',
    highlights: [
      'Fresh floral jhoola swing decoration',
      'Auspicious marigold & jasmine canopies',
      'Brass urlis with floating candles & petals',
      'Traditional seating for Mom-to-Be',
      'Customized family photo backdrop'
    ]
  },
  {
    id: 'teddy-bear-garden-shower',
    title: 'Teddy Bear Picnic Baby Shower',
    category: 'Baby Shower',
    date: 'Dec 2024',
    location: 'Dombivli East',
    client: 'Pooja & Rohan\'s Celebration',
    tagline: 'Whimsical giant teddy bears, golden floral hoop & pampas grass florals',
    image: '/images/baby-shower/baby-shower-decor-11.webp',
    images: [
      '/images/baby-shower/baby-shower-decor-11.webp',
      '/images/baby-shower/baby-shower-decor-12.webp',
      '/images/baby-shower/baby-shower-decor-13.webp',
      '/images/baby-shower/baby-shower-decor-14.webp',
      '/images/baby-shower/baby-shower-decor-15.webp'
    ],
    description: 'A modern boho baby shower featuring life-sized plush teddy bears, circular golden arch draped with neutral and pastel balloons, dried pampas grass, and golden dessert pedestals.',
    highlights: [
      'Golden circular arch backdrop',
      'Life-sized teddy bear props',
      'Boho pampas grass floral accents',
      'Mom-to-be velvet lounge chair',
      'Gift table and dessert display styling'
    ]
  },
  {
    id: 'royal-golden-cradle-shower',
    title: 'Royal Golden Ring Baby Shower',
    category: 'Baby Shower',
    date: 'Jan 2025',
    location: 'Vasai East',
    client: 'Dr. Neha & Shrikant',
    tagline: 'Grand metallic ring arch, crystal fairy lights & custom Mom-to-Be throne',
    image: '/images/baby-shower/baby-shower-decor-16.webp',
    images: [
      '/images/baby-shower/baby-shower-decor-16.webp',
      '/images/baby-shower/baby-shower-decor-17.webp',
      '/images/baby-shower/baby-shower-decor-18.webp',
      '/images/baby-shower/baby-shower-decor-19.webp',
      '/images/baby-shower/baby-shower-decor-20.webp',
      '/images/baby-shower/baby-shower-decor-21.webp'
    ],
    description: 'A royal celebration honoring the mother-to-be with an ornate metallic arch, illuminated fairy light backdrop, blush pink floral garlands, and royal seating.',
    highlights: [
      'Grand metallic arch backdrop',
      'Cascading fairy light backdrop',
      'Floral garland draping',
      'Mom-to-be golden royal throne',
      'Personalized family milestone board'
    ]
  },
  {
    id: 'welcome-baby-naming-ceremony',
    title: 'Grand Welcome Baby & Naming (Barse)',
    category: 'Baby Shower',
    date: 'Dec 2024',
    location: 'Dombivli East',
    client: 'Little Prince Naming Ceremony',
    tagline: 'Ornate decorated wooden cradle (Palana), baby welcome board & fairy lights',
    image: '/images/welcome-baby/welcome-baby-decor-01.webp',
    images: [
      '/images/welcome-baby/welcome-baby-decor-01.webp',
      '/images/welcome-baby/welcome-baby-decor-02.webp',
      '/images/welcome-baby/welcome-baby-decor-03.webp',
      '/images/welcome-baby/welcome-baby-decor-04.webp',
      '/images/welcome-baby/welcome-baby-decor-05.webp',
      '/images/welcome-baby/welcome-baby-decor-06.webp',
      '/images/welcome-baby/welcome-baby-decor-07.webp'
    ],
    description: 'A heartwarming homecoming and naming ceremony for the newborn with traditional decorated Palana (cradle), baby blue balloon cloud rings, custom name reveal board, and gentle ambient lighting.',
    highlights: [
      'Decorated traditional baby cradle (Palana)',
      'Custom baby name reveal easel',
      'Pastel balloon ring installation',
      'Soft cloud fairy light backdrop',
      'Family keepsake photo corner'
    ]
  },

  // ───────── WEDDINGS, FESTIVE & CORPORATE (5 distinct setups) ─────────
  {
    id: 'royal-reception',
    title: 'Royal Grand Reception Stage',
    category: 'Weddings',
    date: 'Dec 2024',
    location: 'Kalyan East',
    client: 'Priya & Amit Wedding',
    tagline: 'Grand 30ft royal stage backdrop with crystal chandeliers and luxury sofa lounge',
    image: '/images/hero/hero-slide-01.webp',
    images: [
      '/images/hero/hero-slide-01.webp',
      '/images/haldi-ceremony/haldi-ring-ceremony-05.webp',
      '/images/wedding-car.webp',
      '/images/about-centerpiece.webp'
    ],
    description: 'A breathtaking royal stage setup featuring handpicked fresh floral arrangements, opulent crystal chandeliers, velvet seating, and grand entryway coordination.',
    highlights: [
      'Grand 30ft floral stage backdrop',
      'Imported crystal chandeliers & mood uplighting',
      'Luxury velvet royal sofa lounge',
      'Grand floral walkway & entryway',
      'Complete stage coordination'
    ]
  },
  {
    id: 'contemporary-ring-ceremony',
    title: 'Modern Ring Ceremony & Engagement',
    category: 'Weddings',
    date: 'Jan 2025',
    location: 'Borivali, Mumbai',
    client: 'Gaurav & Neha Engagement',
    tagline: 'Circular floral ring backdrop with glowing neon and delicate florals',
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
    id: 'haldi-marigold-canopy',
    title: 'Vibrant Haldi Ceremony Canopy',
    category: 'Festive',
    date: 'Jan 2025',
    location: 'Kalyan West',
    client: 'Kulkarni Family Haldi',
    tagline: 'Traditional yellow marigold drapes, brass urlis, and floral canopy',
    image: '/images/haldi-ceremony/haldi-ring-ceremony-01.webp',
    images: [
      '/images/haldi-ceremony/haldi-ring-ceremony-01.webp',
      '/images/haldi-ceremony/haldi-ring-ceremony-02.webp',
      '/images/haldi-ceremony/haldi-ring-ceremony-03.webp',
      '/images/haldi-ceremony/haldi-ring-ceremony-04.webp',
      '/images/haldi-ceremony/haldi-ring-ceremony-06.webp'
    ],
    description: 'A vibrant celebration of tradition infused with fresh yellow and orange marigold garlands, handcrafted brass urlis with floating candles, and an ornate traditional background for Haldi ceremony.',
    highlights: [
      'Fresh marigold and jasmine flower canopy',
      'Decorated traditional backdrop',
      'Brass urli with floating candles & rose petals',
      'Customized Haldi props & photo corner',
      'Traditional heritage entryway arch'
    ]
  },
  {
    id: 'corporate-gateway-office',
    title: 'Corporate Gateway & Festive Office Styling',
    category: 'Corporate',
    date: 'Aug 2024',
    location: 'Thane',
    client: 'TSI Corporate Headquarters',
    tagline: 'Vibrant corporate gateway entrance, paper fan rosettes & office festival decor',
    image: '/images/corporate/corporate-decor-02.webp',
    images: [
      '/images/corporate/corporate-decor-02.webp',
      '/images/corporate/corporate-decor-03.webp',
      '/images/corporate/corporate-decor-06.webp'
    ],
    description: 'A modern corporate workplace celebration featuring vibrant glass entrance decor, custom paper fan rosettes, patriotic photobooth ring installation, and ambient office styling for team celebrations.',
    highlights: [
      'Glass facade entrance portal styling',
      'Custom corporate color paper fan rosettes',
      'Employee selfie & photobooth ring setup',
      'Reception and workstation accent decor',
      'Zero disturbance to daily office workflow'
    ]
  },
  {
    id: 'corporate-annual-day-academy',
    title: 'Institutional Annual Day & Entrance Arch',
    category: 'Corporate',
    date: 'Dec 2024',
    location: 'Kalyan West',
    client: 'Priti Academy Education Society',
    tagline: 'Grand entrance balloon arch in royal blue & gold with custom institution banner',
    image: '/images/corporate/corporate-decor-01.webp',
    images: [
      '/images/corporate/corporate-decor-01.webp',
      '/images/corporate/corporate-decor-02.webp'
    ],
    description: 'A majestic institutional entrance installation for Priti Academy Education Society featuring towering metallic blue, gold, and white organic balloon arches welcoming VIPs, guests, and students.',
    highlights: [
      'Double-pillar royal blue & gold balloon arch',
      'Institutional banner & welcoming archway',
      'VIP entry walkway styling',
      'Durable outdoor-rated balloon construction',
      'Timely setup before early morning guest arrival'
    ]
  },
  {
    id: 'corporate-patriotic-photobooth',
    title: 'Independence Day Corporate Photobooth Ring',
    category: 'Corporate',
    date: 'Aug 2024',
    location: 'Navi Mumbai',
    client: 'Corporate Office Festivities',
    tagline: 'Tricolor circular ring balloon installation with Ashoka Chakra accents',
    image: '/images/corporate/corporate-decor-03.webp',
    images: [
      '/images/corporate/corporate-decor-03.webp',
      '/images/corporate/corporate-decor-02.webp',
      '/images/corporate/corporate-decor-06.webp'
    ],
    description: 'An eye-catching circular ring photobooth backdrop in vibrant saffron, white, and green balloons, complete with custom patriotic centerpieces for corporate employee photo sessions and social sharing.',
    highlights: [
      'Full circular metal ring balloon framing',
      'Saffron, white & emerald green tricolor palette',
      'Ashoka Chakra & flag motif accents',
      'Interactive employee selfie photo-op corner',
      'Compact footprint tailored for corporate lobbies'
    ]
  },
  {
    id: 'corporate-workplace-festive-decor',
    title: 'Workplace Festive Lantern & Bay Decor',
    category: 'Corporate',
    date: 'Oct 2024',
    location: 'Airoli, Navi Mumbai',
    client: 'Tech Hub Corporate Offices',
    tagline: 'Suspended Akash Kandil lanterns, fresh marigold workstation draping & bay decor',
    image: '/images/corporate/corporate-decor-04.webp',
    images: [
      '/images/corporate/corporate-decor-04.webp',
      '/images/corporate/corporate-decor-05.webp',
      '/images/corporate/corporate-decor-07.webp'
    ],
    description: 'Transforming corporate cubicles into a warm, joyous festive environment with hanging traditional Akash Kandils along the ceiling, fresh marigold garland draping across workstation partitions, and reception lobby lighting.',
    highlights: [
      'Ceiling suspended traditional Akash Kandils',
      'Fresh marigold garland runners across workstation bays',
      'Warm ambient fairy lights & ceiling streamers',
      'Zero cable clutter & fire-safe installations',
      'Complete overnight setup with zero downtime'
    ]
  }
];

export const TESTIMONIALS_DATA: TestimonialItem[] = [
  {
    id: 'google-rev-shashwat',
    name: 'Shashwat Tiwari',
    event: 'Verified Google Review',
    quote: 'Beautiful decoration, professional service, and excellent execution. They made our event truly special. Highly recommended! ⭐⭐⭐⭐⭐🤍😍',
    avatar: '',
    rating: 5,
    date: '1 month ago',
    source: 'Google'
  },
  {
    id: 'google-rev-vishal',
    name: '314 Vishal Kolekar',
    event: 'Anniversary & Birthday Planning',
    quote: 'Excellent event management service! The decoration was beautiful, creative, and perfectly arranged. The team was professional, punctual, and very supportive throughout the event. Everything was managed smoothly and the final setup looked amazing. Highly recommended for any function or celebration. Great work, Shree Samarth Event Kalyan! 👏🎉',
    avatar: '',
    rating: 5,
    date: '1 month ago',
    source: 'Google'
  },
  {
    id: 'google-rev-jagathesvaran',
    name: 'Jagathesvaran Thanabal',
    event: 'Verified Google Review',
    quote: 'I love their creative works and in this all members are well experienced on events. I am highly satisfied with the quality of their work!',
    avatar: '',
    rating: 5,
    date: '1 month ago',
    source: 'Google'
  },
  {
    id: 'google-rev-alisha',
    name: 'Alisha Nikalji',
    event: 'Local Guide • Event Decor',
    quote: 'Thank you Shree Swami Event and Shubham for making such a beautiful decoration! As per reference you’ve made it perfectly. Thank you for making our special day memorable. Everyone loved the theme setup. Wonderful work Shree Swami Events, thank you so much! 🙌🏻',
    avatar: '',
    rating: 5,
    date: 'Recent Review',
    source: 'Google'
  },
  {
    id: 'google-rev-yash',
    name: 'Yash Shukla',
    event: 'Verified Google Review',
    quote: "It's really a shame that not many people know about this decorations !! Such a beautiful decorations they do and the behaviour and ethics of the workers is glamorous.... Insane always go for them !!! With lots of love ❤️",
    avatar: '',
    rating: 5,
    date: '1 month ago',
    source: 'Google'
  },
  {
    id: 'google-rev-shivam',
    name: 'Koli Shivam',
    event: 'Verified Google Review',
    quote: 'They decorate very nicely, it makes my heart happy! Exceptional decor, great coordination, and wonderful team to work with. ❣️🔥',
    avatar: '',
    rating: 5,
    date: '1 month ago',
    source: 'Google'
  }
];

export const HERO_SLIDES = [
  {
    id: 1,
    title: 'Royal Wedding & Stage Decor',
    category: 'Weddings',
    image: '/images/hero/hero-slide-01.webp',
    thumb: '/images/hero/hero-thumb-01.webp',
    tagline: 'Opulent mandap and reception stages with chandeliers and floral artistry'
  },
  {
    id: 2,
    title: 'Magical Milestone Birthday Celebrations',
    category: 'Birthdays',
    image: '/images/hero/hero-slide-02.webp',
    thumb: '/images/hero/hero-thumb-02.webp',
    tagline: 'Pastel balloon arches, custom neon signs & marquee numbers'
  },
  {
    id: 3,
    title: 'Dreamy Pastel Baby Showers & Dohale Jevan',
    category: 'Baby Showers',
    image: '/images/hero/hero-slide-03.webp',
    thumb: '/images/hero/hero-thumb-03.webp',
    tagline: 'Delicate balloon clouds, teddy bear lounges & golden accents'
  },
  {
    id: 4,
    title: 'Grand Haldi & Traditional Celebrations',
    category: 'Festive & Traditional',
    image: '/images/hero/hero-slide-04.webp',
    thumb: '/images/hero/hero-thumb-04.webp',
    tagline: 'Marigold floral canopies, brass urlis & traditional swings'
  }
];

