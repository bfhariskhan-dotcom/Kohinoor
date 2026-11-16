import { BusinessPartner, Product } from '../types';

export const CATEGORIES = [
  {
    id: 'interactive-led-displays',
    name: 'Interactive LED Displays',
    slug: 'interactive-led-displays',
    tagline: '4K Ultra HD Multi-Touch Smart Displays from 55" to 110"',
    description: 'Commercial 4K UHD anti-glare interactive LED panels available in 55", 65", 75", 85", 86", 98", and 110" with dual OS (Android & Windows OPS) and 20-point multi-touch.',
    heroImage: '/images/products/product_6.jpg',
    features: ['55", 65", 75", 85", 86", 98", 110" Sizes', 'True 4K UHD & 20-Point Touch', 'Dual OS (Android + Windows OPS)', 'Whiteboard & Annotation Suite', 'Heavy-Duty Mobile Trolley Carts']
  },
  {
    id: 'multimedia-projectors',
    name: 'Multimedia Projectors',
    slug: 'multimedia-projectors',
    tagline: 'Casio, Panasonic, NEC, Mitsubishi & MAGAPOWER Projectors',
    description: 'Genuine high-brightness 3LCD, DLP, and Lamp-Free Laser/LED multimedia projectors engineered for bright classrooms, seminar rooms, and large auditoriums.',
    heroImage: '/images/multimedia_projector_pro_1793992811682.jpg',
    features: ['Casio Laser & LED Lamp-Free Series', 'Panasonic & NEC 3LCD High-Lumen', 'Mitsubishi & MAGAPOWER Range', 'XGA, WXGA & Full HD WUXGA', 'Institutional Supply Across Pakistan']
  },
  {
    id: 'projection-screens',
    name: 'Projection Screens',
    slug: 'projection-screens',
    tagline: 'Tripod, Wall-Mounted & Electric Motorized Screens (6×6 to 13×10)',
    description: 'High-gain matte white projection screens in portable tripod stand, manual wall-mounted pull-down, and remote-controlled electric motorized formats.',
    heroImage: '/images/catalog/motorized-projection-screen.jpg',
    features: ['Tripod / Stand Portable Screens', 'Wall-Mounted Pull-Down Screens', 'Electric Motorized RF Screens', 'Sizes: 6×6, 8×6, 10×8, 12×9, 13×10 ft', 'Anti-Crease High-Gain Surface']
  },
  {
    id: 'projector-mounting-kits',
    name: 'Projector Mounting Kits',
    slug: 'projector-mounting-kits',
    tagline: 'Heavy-Duty Ceiling Brackets, Telescopic Poles & Wall Mounts',
    description: 'Commercial cold-rolled steel and brushed aluminum universal ceiling mounts, telescopic extension drops, and short-throw wall brackets with concealed cable routing.',
    heroImage: '/images/catalog/projector-ceiling-mount.jpg',
    features: ['Universal 4-Arm Spider Plate', 'Telescopic Height Adjustment', '360° Swivel & +/-15° Tilt Alignment', 'Concealed Internal Cable Routing', 'Heavy-Duty Steel Load Support']
  },
  {
    id: 'digital-podiums',
    name: 'Digital Podiums',
    slug: 'digital-podiums',
    tagline: 'Black Steel Digital Podiums & Table-Style Audio Podiums',
    description: 'Institutional Black Digital Podiums with 21.5"–43" touch screens and Table-Style Digital Podiums featuring integrated amplifiers, gooseneck mics, and MP3/USB players.',
    heroImage: '/images/catalog/black-digital-podium.jpg',
    features: ['Black Cold-Rolled Steel Digital Podium', 'Table-Style Audio Podium Console', 'Built-in 60W Amplifier & Speakers', 'Gooseneck Mic & Reading Lamp', 'HDMI, USB, LAN & Wireless Mic']
  },
  {
    id: 'audio-equipment',
    name: 'Audio Equipment',
    slug: 'audio-equipment',
    tagline: 'CMX Mixer Amplifiers, Wireless & Wired Mics & Acoustic Systems',
    description: 'Commercial PA mixer amplifiers (CMX EA Series), dual-channel UHF wireless microphones, wired podium/conference mics, and portable classroom sound systems.',
    heroImage: '/images/catalog/audio-mixer-amplifier.jpg',
    features: ['CMX Audio Mixer Amplifiers', 'UHF Dual-Channel Wireless Mics', 'Wired Gooseneck & Vocal Mics', '100V/70V & 4–16Ω Zone Support', 'USB, Bluetooth & Aux Playback']
  },
  {
    id: 'conference-systems',
    name: 'Conference Systems – BETERVA BE-2300',
    slug: 'conference-systems',
    tagline: 'BETERVA BE-2300 Chairman, Delegate & Central Control Units',
    description: 'Dedicated BETERVA BE-2300 boardroom and council discussion series featuring BE-2300C Chairman Units, BE-2300D Delegate Units, and Central Control Units.',
    heroImage: '/images/products/product_17.jpg',
    features: ['BE-2300 Chairman Priority Unit', 'BE-2300 Delegate Discussion Unit', 'BE-2300 Central Control Unit', 'Built-in Monitor Speaker & Headphone Jack', 'Anti-Feedback & Mobile RF Shielding']
  },
  {
    id: 'teleprompters',
    name: 'Professional Teleprompters',
    slug: 'teleprompters',
    tagline: 'King Teleprompter Full Lineup: TP27 to TP100 (27"–100")',
    description: 'Broadcast and podium teleprompter hardware by King manufacturer spanning 27-inch desktop studio rigs up to 100-inch auditorium & presidential stage prompting systems.',
    heroImage: '/images/catalog/teleprompter-king-studio.jpg',
    features: ['King Models: TP27, TP32, TP43, TP55', 'Large Venue: TP65, TP75, TP85, TP100', '70/30 Beamsplitter Optical Glass', 'Full HD & 4K High-Brightness Panels', 'HDMI, VGA, SDI & Wireless Sync']
  }
];

export const BUSINESS_PARTNERS: BusinessPartner[] = [
  {
    id: 'mitsubishi',
    name: 'Mitsubishi Corporation Japan',
    origin: 'Japan',
    specialty: 'Commercial Projection & Display Systems',
    shortCode: 'MITSUBISHI'
  },
  {
    id: 'casio',
    name: 'CASIO Computer Ltd Japan',
    origin: 'Japan',
    specialty: 'Lamp-Free Laser & LED Multimedia Projectors',
    shortCode: 'CASIO'
  },
  {
    id: 'qomo',
    name: 'QOMO International USA',
    origin: 'United States',
    specialty: 'Interactive Displays, Document Cameras & EdTech',
    shortCode: 'QOMO'
  },
  {
    id: 'cmx',
    name: 'CMX Audio',
    origin: 'International',
    specialty: 'Public Address Amplifiers, Mixers & Pro Audio',
    shortCode: 'CMX AUDIO'
  },
  {
    id: 'beterva',
    name: 'Beterva Audio Visual Company',
    origin: 'International',
    specialty: 'BE-2300 Conference Discussion Systems & Audio',
    shortCode: 'BETERVA'
  },
  {
    id: 'tenoveo',
    name: 'Tenoveo Video Conference Systems',
    origin: 'International',
    specialty: 'PTZ Cameras & Video Conferencing Hardware',
    shortCode: 'TENOVEO'
  },
  {
    id: 'magapower',
    name: 'MAGAPOWER Multimedia Projectors',
    origin: 'International',
    specialty: 'High-Lumen Institutional & Venue Projectors',
    shortCode: 'MAGAPOWER'
  }
];

export const PRODUCTS: Product[] = [
  // =========================================================================
  // CATEGORY 1: INTERACTIVE LED DISPLAYS
  // =========================================================================
  {
    id: 'interactive-led-55-65',
    name: '4K Interactive LED Display (55" & 65" Series)',
    category: 'interactive-led-displays',
    categoryLabel: 'Interactive LED Displays',
    tagline: 'Compact & Classroom-Standard 4K Multi-Touch Flat Panel Displays',
    modelNumber: 'KAV-IFP-55 / 65',
    brand: 'Kohinoor / QOMO',
    availableSizes: ['55"', '65"'],
    stockStatus: 'Available · Islamabad',
    description: 'Engineered for seminar rooms, faculty offices, and school classrooms. Delivers crisp 4K UHD visuals on anti-glare 4mm toughened glass with zero-air-gap infrared touch and dual Android/Windows OPS architecture.',
    image: '/images/products/product_6.jpg',
    fallbackImage: '/images/products/product_7.jpg',
    gallery: ['/images/products/product_6.jpg', '/images/products/product_7.jpg'],
    keyFeatures: [
      'Available Sizes: 55-Inch and 65-Inch Diagonal 4K IPS Panels',
      '20-Point High-Precision Multi-Touch Writing with Dual Stylus Pens',
      'Dual OS: Android 13 Built-In + Optional Intel Core Windows OPS PC',
      '4mm Anti-Glare, Anti-Scratch Mohs-7 Tempered Safety Glass',
      '4-Way Wireless Screen Sharing for Laptops, iOS & Android Devices'
    ],
    specs: {
      'Available Sizes': '55" (121 × 68 cm active) & 65" (143 × 80 cm active)',
      'Resolution': '3840 × 2160 4K Ultra HD @ 60Hz',
      'Touch Points': '20-Point Infrared Multi-Touch (< 5ms response)',
      'Brightness': '400 cd/m² High-Luminance Commercial IPS',
      'Audio': '2 × 20W Front-Facing Integrated Stereo Speakers',
      'Connectivity': '3× HDMI, USB 3.0, Touch USB, Type-C, RJ-45 LAN, Audio Out'
    },
    applications: [
      'School & College Smart Classrooms',
      'Faculty Briefing & Seminar Rooms',
      'Huddle & Executive Meeting Spaces'
    ]
  },
  {
    id: 'interactive-led-75-85-86',
    name: '4K Interactive LED Display (75", 85" & 86" Series)',
    category: 'interactive-led-displays',
    categoryLabel: 'Interactive LED Displays',
    tagline: 'University Standard Large-Format 4K Multi-Touch Displays',
    modelNumber: 'KAV-IFP-75 / 85 / 86',
    brand: 'Kohinoor / QOMO',
    availableSizes: ['75"', '85"', '86"'],
    stockStatus: 'Available · Islamabad',
    description: 'Our most widely deployed interactive flat panels across Pakistani universities and corporate boardrooms. Combines effortless multi-user whiteboard annotation, built-in optical bonding, and seamless compatibility with wall brackets or heavy-duty mobile trolleys.',
    image: '/images/products/product_7.jpg',
    fallbackImage: '/images/products/product_6.jpg',
    gallery: ['/images/products/product_7.jpg', '/images/products/product_6.jpg'],
    keyFeatures: [
      'Available Sizes: 75", 85", and 86" Commercial 4K UHD Displays',
      'Built-in Smart Whiteboard Software with QR Code Note Export',
      'Dual OS Switching: Built-in Android 13 + Pluggable Windows OPS Slot',
      'Supports Heavy-Duty Dual-Column Mobile Trolley Cart with Lockable Wheels',
      'Front Access Ports: HDMI, USB 3.0, Touch USB, and USB Type-C'
    ],
    specs: {
      'Available Sizes': '75", 85", and 86" Diagonal',
      'Resolution': '3840 × 2160 True 4K Ultra HD',
      'Glass': '4mm Anti-Glare Tempered Glass',
      'Touch Accuracy': '±1mm with Zero-Lag Ink Rendering',
      'Operating System': 'Android 13 + Windows 11 Pro OPS Support',
      'Mounting': 'Standard Heavy-Duty Wall Bracket or Mobile Floor Cart'
    },
    applications: [
      'University Lecture Halls',
      'Corporate Executive Boardrooms',
      'Medical & Engineering Teaching Labs'
    ]
  },
  {
    id: 'interactive-led-98-110',
    name: 'Ultra-Large Interactive LED Display (98" & 110" Series)',
    category: 'interactive-led-displays',
    categoryLabel: 'Interactive LED Displays',
    tagline: 'Seamless Auditorium & Command Center 4K Touch Canvas',
    modelNumber: 'KAV-IFP-98 / 110',
    brand: 'Kohinoor Commercial Display',
    availableSizes: ['98"', '110"'],
    stockStatus: 'Institutional Order · Islamabad',
    description: 'Designed to replace multi-screen video walls in grand conference rooms, parliamentary chambers, and university amphitheaters. Delivers dramatic 98-inch and 110-inch uninterrupted 4K touch surfaces visible from up to 20 meters away.',
    image: '/images/products/product_6.jpg',
    fallbackImage: '/images/products/product_7.jpg',
    gallery: ['/images/products/product_6.jpg', '/images/products/product_7.jpg'],
    keyFeatures: [
      'Massive 98-Inch and 110-Inch Uninterrupted 4K Touch Panels',
      '178° Wide Viewing Angle Ideal for Tiered Auditoriums',
      '20-Point Touch Interaction with Palm Rejection & Dual-Color Stylus',
      'Reinforced Aluminum Bezel & Commercial 24/7 Duty Cycle Rating',
      'Seamless Video Conferencing Ready (PTZ Camera & Wireless Audio Sync)'
    ],
    specs: {
      'Available Sizes': '98" (216 × 122 cm) & 110" (243 × 137 cm)',
      'Resolution': '3840 × 2160 4K Ultra HD',
      'Contrast Ratio': '4000:1 High Dynamic Contrast',
      'Speakers': 'Integrated Front Soundbar Audio Dispersion',
      'OS Support': 'Android Embedded + Intel i5/i7 OPS Windows Module'
    },
    applications: [
      'Grand Auditoriums & Convocation Centers',
      'National Command & Operations Rooms',
      'Ministry & Executive Cabinet Boardrooms'
    ]
  },

  // =========================================================================
  // CATEGORY 2: MULTIMEDIA PROJECTORS
  // =========================================================================
  {
    id: 'casio-xj-v2-projector',
    name: 'CASIO XJ-V2 Lamp-Free Laser & LED Projector',
    category: 'multimedia-projectors',
    categoryLabel: 'Multimedia Projectors',
    tagline: '3,000 ANSI Lumens · XGA · 20,000-Hour Mercury-Free Light Source',
    modelNumber: 'CASIO XJ-V2',
    brand: 'CASIO Computer Ltd Japan',
    stockStatus: 'Authorized Partner Supply',
    description: 'Engineered in Japan with CASIO’s signature Laser & LED Hybrid light source delivering 20,000 hours of operation with zero lamp replacements and 5-second quick power on/off—built for daily classroom reliability.',
    image: '/images/multimedia_projector_pro_1793992811682.jpg',
    fallbackImage: '/images/multimedia_projector_pro_1793992811682.jpg',
    gallery: ['/images/multimedia_projector_pro_1793992811682.jpg'],
    keyFeatures: [
      '3,000 ANSI Lumens brightness with Laser & LED Hybrid optical engine',
      'Up to 20,000 hours maintenance-free life (zero mercury lamp changes)',
      'Native XGA (1024 × 768) resolution & 20,000:1 contrast ratio',
      '5-second instant startup with no warm-up or cool-down wait time',
      'Dust-resistant sealed optical block ideal for Pakistani campuses'
    ],
    specs: {
      'Manufacturer': 'CASIO Computer Ltd Japan',
      'Brightness': '3,000 ANSI Lumens',
      'Native Resolution': 'XGA (1024 × 768)',
      'Contrast Ratio': '20,000:1',
      'Light Source Life': 'Up to 20,000 hours (Laser & LED Hybrid)',
      'Inputs': 'HDMI, RGB/VGA Mini D-Sub 15-pin, RS-232C, Audio In/Out',
      'Throw Lens': '1.1x Manual Zoom & Focus'
    },
    applications: [
      'School & College Classrooms',
      'Continuous Daily Academic Lectures',
      'Training Institutes & Coaching Centers'
    ]
  },
  {
    id: 'casio-xj-v100w-projector',
    name: 'CASIO XJ-V100W Widescreen Laser & LED Projector',
    category: 'multimedia-projectors',
    categoryLabel: 'Multimedia Projectors',
    tagline: '3,000 ANSI Lumens · WXGA (1280×800) · 1.5x Optical Zoom',
    modelNumber: 'CASIO XJ-V100W',
    brand: 'CASIO Computer Ltd Japan',
    stockStatus: 'Authorized Partner Supply',
    description: 'Widescreen WXGA lamp-free projector featuring a versatile 1.5x zoom lens for flexible ceiling mounting distances, dust-resistant chassis, and 20,000-hour solid-state illumination.',
    image: '/images/multimedia_projector_pro_1793992811682.jpg',
    fallbackImage: '/images/multimedia_projector_pro_1793992811682.jpg',
    gallery: ['/images/multimedia_projector_pro_1793992811682.jpg'],
    keyFeatures: [
      '3,000 ANSI Lumens widescreen WXGA (1280 × 800) native clarity',
      'Flexible 1.5x manual optical zoom simplifies existing mount retrofits',
      '20,000-hour Laser/LED hybrid source eliminates consumable lamp costs',
      '20,000:1 dynamic contrast with vertical ±30° keystone adjustment'
    ],
    specs: {
      'Manufacturer': 'CASIO Computer Ltd Japan',
      'Brightness': '3,000 ANSI Lumens',
      'Native Resolution': 'WXGA (1280 × 800), 16:10',
      'Optical Zoom': '1.5x Manual Zoom',
      'Contrast Ratio': '20,000:1',
      'Inputs': 'HDMI Type A, VGA D-Sub, Audio Out, RS-232C'
    },
    applications: [
      'Widescreen University Classrooms',
      'Corporate Meeting Rooms',
      'Retrofit Ceiling Installations'
    ]
  },
  {
    id: 'panasonic-pt-lb306-projector',
    name: 'Panasonic PT-LB306 Portable 3LCD Classroom Projector',
    category: 'multimedia-projectors',
    categoryLabel: 'Multimedia Projectors',
    tagline: '3,100 Lumens · XGA · 20,000:1 Contrast · 3LCD Natural Color',
    modelNumber: 'Panasonic PT-LB306',
    brand: 'Panasonic',
    stockStatus: 'Available · Islamabad',
    description: 'Compact and lightweight 3LCD projector engineered by Panasonic delivering natural color reproduction, 3,100 lumens daylight output, 20,000:1 contrast ratio, and long-life lamp cycles up to 20,000 hours in Eco mode.',
    image: '/images/multimedia_projector_pro_1793992811682.jpg',
    fallbackImage: '/images/multimedia_projector_pro_1793992811682.jpg',
    gallery: ['/images/multimedia_projector_pro_1793992811682.jpg'],
    keyFeatures: [
      '3,100 Lumens bright 3LCD optical output with true-to-life color',
      'High 20,000:1 contrast ratio ensures sharp charts and spreadsheets',
      'Long lamp replacement cycle up to 20,000 hours in Eco2 mode',
      'Quiet 30 dB Eco operation prevents classroom acoustic distraction'
    ],
    specs: {
      'Brand / Model': 'Panasonic PT-LB306',
      'Technology': '3LCD (0.63" × 3 Polysilicon TFT)',
      'Brightness': '3,100 Lumens',
      'Native Resolution': 'XGA (1024 × 768)',
      'Contrast Ratio': '20,000:1',
      'Connectivity': 'HDMI, 2× D-Sub RGB, Composite Video, Audio In/Out, USB-A'
    },
    applications: [
      'University Lecture Rooms',
      'Portable Faculty Presentations',
      'College Seminar Rooms'
    ]
  },
  {
    id: 'panasonic-pt-lb426-projector',
    name: 'Panasonic PT-LB426 High-Brightness 3LCD Projector',
    category: 'multimedia-projectors',
    categoryLabel: 'Multimedia Projectors',
    tagline: '4,100 Lumens · XGA · Dual HDMI · LAN Control & 10W Speaker',
    modelNumber: 'Panasonic PT-LB426',
    brand: 'Panasonic',
    stockStatus: 'Available · Islamabad',
    description: 'High-lumen 3LCD installation projector built for bright halls and conference venues. Features 4,100 lumens output, dual HDMI inputs, RJ-45 network monitoring, and an integrated 10W speaker.',
    image: '/images/multimedia_projector_pro_1793992811682.jpg',
    fallbackImage: '/images/multimedia_projector_pro_1793992811682.jpg',
    gallery: ['/images/multimedia_projector_pro_1793992811682.jpg'],
    keyFeatures: [
      '4,100 Lumens output cuts through strong classroom & auditorium lighting',
      'Dual HDMI inputs + RJ-45 LAN network control (PJLink compatible)',
      'Daylight View Lite optimizes screen contrast dynamically',
      'Built-in 10W speaker for room sound without external amp'
    ],
    specs: {
      'Brand / Model': 'Panasonic PT-LB426',
      'Technology': '3LCD Transparent LCD Panel',
      'Brightness': '4,100 Lumens',
      'Native Resolution': 'XGA (1024 × 768)',
      'Contrast Ratio': '20,000:1',
      'Interfaces': '2× HDMI, 2× Computer In, RJ-45 LAN, USB-A (Wireless ready), RS-232C'
    },
    applications: [
      'Large University Auditoriums',
      'Sunlit Institutional Classrooms',
      'Corporate Boardrooms'
    ]
  },
  {
    id: 'nec-mc372x-projector',
    name: 'NEC MC372X High-Lumen 3LCD Multimedia Projector',
    category: 'multimedia-projectors',
    categoryLabel: 'Multimedia Projectors',
    tagline: '3,700 ANSI Lumens · XGA · 16W Speaker · MultiPresenter Ready',
    modelNumber: 'NEC MC372X',
    brand: 'NEC Display Solutions',
    stockStatus: 'Available · Islamabad',
    description: 'Dependable NEC 3LCD classroom projector offering 3,700 ANSI lumens brightness, dual HDMI connectivity, a powerful built-in 16W speaker, and MultiPresenter screen sharing support across up to 16 connected devices.',
    image: '/images/multimedia_projector_pro_1793992811682.jpg',
    fallbackImage: '/images/multimedia_projector_pro_1793992811682.jpg',
    gallery: ['/images/multimedia_projector_pro_1793992811682.jpg'],
    keyFeatures: [
      '3,700 ANSI Lumens 3LCD display technology with vivid color accuracy',
      'Powerful integrated 16W room speaker avoids external audio cabling',
      'Dual HDMI inputs with HDCP, VGA, LAN RJ-45 & USB Display',
      'ECO Mode lamp life up to 15,000 hours with low power consumption'
    ],
    specs: {
      'Brand / Model': 'NEC MC372X',
      'Technology': '3LCD',
      'Brightness': '3,700 ANSI Lumens',
      'Native Resolution': 'XGA (1024 × 768)',
      'Contrast Ratio': '16,000:1',
      'Built-in Audio': '16W Integrated Speaker',
      'Inputs': '2× HDMI, VGA In/Out, RJ-45 LAN, USB Type-A/B'
    },
    applications: [
      'Higher Education Lecture Classrooms',
      'Government Training Facilities',
      'Collaborative Meeting Rooms'
    ]
  },
  {
    id: 'mitsubishi-ex320u-projector',
    name: 'Mitsubishi EX320U Professional DLP Projector',
    category: 'multimedia-projectors',
    categoryLabel: 'Multimedia Projectors',
    tagline: '3,000 ANSI Lumens · XGA DLP · RJ-45 LAN & Crestron Control',
    modelNumber: 'Mitsubishi EX320U',
    brand: 'Mitsubishi Corporation Japan',
    stockStatus: 'Partner Supply · Islamabad',
    description: 'Precision optical engineering by Mitsubishi Corporation Japan featuring 1-chip DLP optics, 3,000 ANSI lumens, HDMI & dual VGA inputs, and network RJ-45 management for reliable institutional projection.',
    image: '/images/multimedia_projector_pro_1793992811682.jpg',
    fallbackImage: '/images/multimedia_projector_pro_1793992811682.jpg',
    gallery: ['/images/multimedia_projector_pro_1793992811682.jpg'],
    keyFeatures: [
      '3,000 ANSI Lumens with 0.55" LVDS 1-Chip DLP clarity',
      'RJ-45 LAN network control & Crestron RoomView support',
      'HDMI + Dual PC VGA inputs for seamless presenter switching',
      'Filter-free sealed DLP architecture lowers maintenance overhead'
    ],
    specs: {
      'Partner': 'Mitsubishi Corporation Japan',
      'Model': 'EX320U (Short-throw EW230U-ST also available)',
      'Brightness': '3,000 ANSI Lumens',
      'Native Resolution': 'XGA (1024 × 768)',
      'Contrast Ratio': '2,000:1',
      'Inputs': 'HDMI, Dual VGA, Composite, S-Video, RS-232C, RJ-45 LAN'
    },
    applications: [
      'Institutional Classrooms & Labs',
      'Corporate Boardrooms',
      'Networked Campus Installations'
    ]
  },
  {
    id: 'magapower-ml365u-projector',
    name: 'MAGAPOWER ML365U Full HD 1080p Venue Projector',
    category: 'multimedia-projectors',
    categoryLabel: 'Multimedia Projectors',
    tagline: '3,600 ANSI Lumens · Full HD (1920×1080) · Venue Series',
    modelNumber: 'MAGAPOWER ML365U',
    brand: 'MAGAPOWER Multimedia Projectors',
    stockStatus: 'Partner Supply · Islamabad',
    description: 'Full HD 1080p multimedia projector from Kohinoor Audio Visual’s partner MAGAPOWER. Engineered for sharp widescreen architectural blueprints, medical imaging, and high-resolution hall presentations (high-lumen venue models up to 5,500 lumens available).',
    image: '/images/multimedia_projector_pro_1793992811682.jpg',
    fallbackImage: '/images/multimedia_projector_pro_1793992811682.jpg',
    gallery: ['/images/multimedia_projector_pro_1793992811682.jpg'],
    keyFeatures: [
      '3,600 ANSI Lumens crisp Full HD 1080p native resolution',
      'Extended MAGAPOWER venue series available up to 5,500 lumens',
      'Multi-interface input compatibility including HDMI & PC RGB',
      'Optimized color temperature for classroom & auditorium screens'
    ],
    specs: {
      'Partner': 'MAGAPOWER Multimedia Projectors',
      'Model': 'ML365U (SL451X / CL55W Series Available)',
      'Brightness': '3,600 ANSI Lumens (Venue models up to 5,500 lm)',
      'Native Resolution': 'Full HD 1920 × 1080 (16:9)',
      'Technology': 'LCD Projection Engine'
    },
    applications: [
      'Auditoriums & Large Seminar Halls',
      'Engineering & CAD Projection',
      'Educational Training Venues'
    ]
  },

  // =========================================================================
  // CATEGORY 3: PROJECTION SCREENS
  // =========================================================================
  {
    id: 'tripod-stand-projection-screen',
    name: 'Tripod / Stand Portable Projection Screen',
    category: 'projection-screens',
    categoryLabel: 'Projection Screens',
    subType: 'Tripod / Stand Screens',
    tagline: 'Mobile Folding Tripod Frame with High-Gain Matte White Surface',
    modelNumber: 'KAV-SCR-TRIPOD',
    availableSizes: ['6 × 6 ft', '8 × 6 ft', '10 × 8 ft'],
    stockStatus: 'Available · Multiple Sizes',
    description: 'Portable heavy-duty tripod projection screen engineered for mobile trainings, multi-room classroom sharing, and outdoor seminars. Features an integrated keystone eliminator arm, anti-skid rubber leg caps, and matte white vinyl fabric.',
    image: '/images/products/product_15.jpg',
    fallbackImage: '/images/catalog/motorized-projection-screen.jpg',
    gallery: ['/images/products/product_15.jpg'],
    keyFeatures: [
      'Available Sizes: 6 × 6 ft, 8 × 6 ft, and 10 × 8 ft',
      '1.1 Gain matte white fiberglass/vinyl fabric with black masking borders',
      '160-degree wide viewing field for clear visibility across wide rooms',
      'Reinforced tripod legs with quick cam-lock height adjuster'
    ],
    specs: {
      'Screen Type': 'Portable Tripod / Floor Stand',
      'Standard Sizes': '6 × 6 ft, 8 × 6 ft, 10 × 8 ft',
      'Fabric Surface': 'Matte White with Black Lightproof Backing',
      'Viewing Angle': '160° Wide Viewing Angle',
      'Optical Gain': '1.1 Gain'
    },
    applications: [
      'Mobile Classroom Lectures',
      'College Seminar Rooms',
      'Training Workshops & Conferences'
    ]
  },
  {
    id: 'wall-mounted-projection-screen',
    name: 'Wall-Mounted Manual Pull-Down Projection Screen',
    category: 'projection-screens',
    categoryLabel: 'Projection Screens',
    subType: 'Wall-Mounted Screens',
    tagline: 'Spring-Loaded Auto-Locking Casing for Classrooms & Meeting Rooms',
    modelNumber: 'KAV-SCR-WALL',
    availableSizes: ['6 × 6 ft', '8 × 6 ft', '10 × 8 ft', '12 × 9 ft'],
    stockStatus: 'Available · Multiple Sizes',
    description: 'Clean white steel octagonal housing engineered for flush wall or ceiling mounting. Built with a reliable self-locking pull-down mechanism allowing height stops at any interval without spring snap-back.',
    image: '/images/catalog/motorized-projection-screen.jpg',
    fallbackImage: '/images/products/product_15.jpg',
    gallery: ['/images/catalog/motorized-projection-screen.jpg'],
    keyFeatures: [
      'Available Sizes: 6 × 6 ft, 8 × 6 ft, 10 × 8 ft, and 12 × 9 ft',
      'Smooth slow-retract / auto-locking ratchet roller mechanism',
      'Universal end-cap brackets support wall or ceiling hook installation',
      '4-side black framing border improves perceived projector contrast'
    ],
    specs: {
      'Screen Type': 'Manual Wall / Ceiling Pull-Down',
      'Available Sizes': '6 × 6, 8 × 6, 10 × 8, 12 × 9 ft',
      'Surface': 'Anti-Curl Matte White Fiber Screen',
      'Casing': 'Heavy-Gauge Powder-Coated White Steel'
    },
    applications: [
      'Permanent University Classrooms',
      'Corporate Meeting Rooms',
      'Training Academies'
    ]
  },
  {
    id: 'electric-motorized-projection-screen',
    name: 'Electric Motorized RF Projection Screen',
    category: 'projection-screens',
    categoryLabel: 'Projection Screens',
    subType: 'Electric Motorized Screens',
    tagline: 'Silent Tubular Motor with RF Wireless Remote & Wall Switch (Up to 13×10 ft)',
    modelNumber: 'KAV-SCR-MOTOR',
    availableSizes: ['6 × 6 ft', '8 × 6 ft', '10 × 8 ft', '12 × 9 ft', '13 × 10 ft'],
    stockStatus: 'Available · Full Size Range',
    description: 'Executive electric motorized screen powered by a quiet tubular motor with wireless RF remote control and wired wall control box. Covers every institutional dimension from 6 × 6 ft seminar rooms up to grand 13 × 10 ft auditorium stages.',
    image: '/images/catalog/motorized-projection-screen.jpg',
    fallbackImage: '/images/products/product_15.jpg',
    gallery: ['/images/catalog/motorized-projection-screen.jpg'],
    keyFeatures: [
      'Complete Size Lineup: 6 × 6, 8 × 6, 10 × 8, 12 × 9, and 13 × 10 ft',
      'Included wireless RF remote control + wired wall up/stop/down switch',
      'Whisper-quiet synchronized tubular motor with preset limit stops',
      'Seamless flame-retardant & mildew-resistant matte white surface'
    ],
    specs: {
      'Screen Type': 'Electric Motorized Ceiling / Wall Drop',
      'Available Sizes': '6 × 6, 8 × 6, 10 × 8, 12 × 9, 13 × 10 ft',
      'Control': 'RF Wireless Remote + Wired Wall Switch Box',
      'Power': '220–240V AC 50Hz'
    },
    applications: [
      'Grand Auditoriums & Convocation Halls',
      'Executive Boardrooms',
      'Council & Parliamentary Chambers'
    ]
  },

  // =========================================================================
  // CATEGORY 4: PROJECTOR MOUNTING KITS
  // =========================================================================
  {
    id: 'universal-ceiling-projector-mount',
    name: 'Universal Heavy-Duty Ceiling Projector Mounting Kit',
    category: 'projector-mounting-kits',
    categoryLabel: 'Projector Mounting Kits',
    tagline: 'Adjustable 4-Arm Spider Plate with 360° Swivel & Tilt Lock',
    modelNumber: 'KAV-PMK-CEIL',
    stockStatus: 'In Stock · Islamabad',
    description: 'Commercial-grade universal ceiling mount engineered from cold-rolled steel and brushed aluminum. Fits virtually all Casio, Panasonic, NEC, Mitsubishi, and MAGAPOWER projectors with precision tilt, roll, and yaw micro-adjustment.',
    image: '/images/catalog/projector-ceiling-mount.jpg',
    fallbackImage: '/images/catalog/projector-ceiling-mount.jpg',
    gallery: ['/images/catalog/projector-ceiling-mount.jpg'],
    keyFeatures: [
      'Universal 4-arm adjustable mounting spider fits 99% of projectors',
      'Telescopic height extension from 17.5" to 25.5" (extended poles available)',
      '360° horizontal rotation & ±15° tilt alignment with locking knobs',
      'Internal cable routing column conceals HDMI and AC power leads',
      'Complete M4/M5/M6 bolt kit, concrete anchors & Allen wrenches included'
    ],
    specs: {
      'Load Capacity': 'Up to 25 kg (55 lbs)',
      'Material': 'Heavy-Gauge Steel & Aluminum Column',
      'Drop Range': '17.5" – 25.5" Standard (Extended 3ft–6ft options)',
      'Tilt / Swivel': '±15° Pitch / Roll, 360° Yaw Swivel',
      'Finish': 'Powder-Coated Matte Black / Silver'
    },
    applications: [
      'Concrete & False-Ceiling Classrooms',
      'Auditoriums & High-Ceiling Halls',
      'Boardroom Projection Setups'
    ]
  },
  {
    id: 'telescopic-long-drop-projector-mount',
    name: 'Extended Telescopic Auditorium Ceiling Projector Kit',
    category: 'projector-mounting-kits',
    categoryLabel: 'Projector Mounting Kits',
    tagline: 'Long-Drop Telescopic Aluminum Mount for High-Ceiling Auditoriums',
    modelNumber: 'KAV-PMK-LONG',
    stockStatus: 'In Stock · Islamabad',
    description: 'Extra-long telescopic ceiling suspension kit designed for high false ceilings and university amphitheaters requiring 1 to 2 meter vertical drop clearance with zero vibration sway.',
    image: '/images/catalog/projector-ceiling-mount.jpg',
    fallbackImage: '/images/catalog/projector-ceiling-mount.jpg',
    gallery: ['/images/catalog/projector-ceiling-mount.jpg'],
    keyFeatures: [
      'Extended telescopic drop tube (100cm to 200cm reach)',
      'Reinforced double-bolt ceiling flange prevents sway during HVAC drafts',
      'Large internal conduit opening for thick HDMI & VGA cables',
      'Supports heavy-venue projectors up to 30 kg'
    ],
    specs: {
      'Load Capacity': 'Up to 30 kg',
      'Extension Length': '1000mm – 2000mm Adjustable',
      'Swivel': '360° with Anti-Vibration Set Screws',
      'Hardware': 'Heavy Anchor Sleeve Bolts Included'
    },
    applications: [
      'High-Ceiling University Auditoriums',
      'Gypsum & False-Ceiling Halls',
      'Training Centers'
    ]
  },
  {
    id: 'short-throw-wall-projector-mount',
    name: 'Short-Throw Wall-Mount Projector Bracket Kit',
    category: 'projector-mounting-kits',
    categoryLabel: 'Projector Mounting Kits',
    tagline: 'Telescopic Wall Boom Arm for Interactive Boards & Short-Throw Lenses',
    modelNumber: 'KAV-PMK-WALL',
    stockStatus: 'In Stock · Islamabad',
    description: 'Rigid wall-mounted boom bracket engineered specifically for short-throw and ultra-short-throw projectors mounted directly above whiteboards or interactive walls.',
    image: '/images/catalog/projector-ceiling-mount.jpg',
    fallbackImage: '/images/catalog/projector-ceiling-mount.jpg',
    gallery: ['/images/catalog/projector-ceiling-mount.jpg'],
    keyFeatures: [
      'Telescopic horizontal wall arm extends cleanly above whiteboards',
      'Heavy triangular steel wall gusset eliminates arm sag',
      'Fine 3-axis alignment screws keep screen edges perfectly square',
      'Ideal pairing for Mitsubishi EW230U-ST & short-throw models'
    ],
    specs: {
      'Mount Type': 'Heavy-Duty Wall Boom Arm',
      'Arm Extension': '750mm – 1250mm Adjustable Reach',
      'Load Capacity': 'Up to 20 kg',
      'Cable Management': 'Built-in Arm Channel Clips'
    },
    applications: [
      'Smart Classroom Whiteboards',
      'Small Seminar Rooms',
      'Concrete Wall Installations'
    ]
  },

  // =========================================================================
  // CATEGORY 5: DIGITAL PODIUMS (BLACK PODIUM & TABLE-STYLE PODIUM + MODELS)
  // =========================================================================
  {
    id: 'black-digital-podium',
    name: 'Black Digital Podium (All-in-One Steel Smart Rostrum)',
    category: 'digital-podiums',
    categoryLabel: 'Digital Podiums',
    subType: 'Black Digital Podium',
    tagline: 'Matte Black Cold-Rolled Steel Rostrum with 21.5" Touch Display & 60W Audio',
    modelNumber: 'KAV-BDP-215',
    stockStatus: 'Available · Multiple Views',
    description: 'Our signature heavy-duty Black Digital Podium finished in architectural matte black powder-coated steel. Houses an integrated 21.5" Full HD touch monitor, centralized master AV switcher, built-in 60W amplifier, twin 30W speakers, gooseneck microphone, and key-locked chassis bay.',
    image: '/images/catalog/black-digital-podium.jpg',
    fallbackImage: '/images/products/product_13.jpg',
    gallery: [
      '/images/catalog/black-digital-podium.jpg',
      '/images/products/product_13.jpg',
      '/images/products/product_14.jpg'
    ],
    keyFeatures: [
      'Heavy-gauge matte black cold-rolled steel pedestal with sliding top tray',
      '21.5" Full HD capacitive multi-touch lecturer monitor tilted ergonomically',
      'Built-in 60W audio amplifier + 01 pair of 30W room speakers',
      'Flexible cardioid gooseneck speech microphone + external laptop AV ports',
      'Central lockable access doors protecting internal PC & amplification rack'
    ],
    specs: {
      'Style': 'Free-Standing Black Digital Podium',
      'Dimensions': '1200mm (W) × 700mm (D) × 950mm (H)',
      'Touch Screen': '21.5" Full HD Capacitive Multi-Touch LCD',
      'Audio System': '60W Built-in Amplifier + Pair 30W Dispersion Speakers',
      'Microphone': 'High-Sensitivity Cardioid Gooseneck Microphone',
      'Interfaces': 'HDMI In/Out, VGA, USB 3.0 Hub, RJ-45 LAN, Audio Out, AC Power',
      'Security': 'Single-Key Mechanical & Electronic Locking Cabinet'
    },
    applications: [
      'University Lecture Amphitheaters',
      'National Auditoriums & Convocation Halls',
      'Government & Defense Briefing Rooms'
    ]
  },
  {
    id: 'table-style-digital-podium',
    name: 'Table-Style Digital Podium (Portable Audio Lectern Console)',
    category: 'digital-podiums',
    categoryLabel: 'Digital Podiums',
    subType: 'Table-Style Digital Podium',
    tagline: 'Self-Contained Tabletop Audio Podium with Wireless Mics, Amp, Lamp & MP3 Player',
    modelNumber: 'KAV-TDP-100',
    stockStatus: 'Available · Multiple Views',
    description: 'Compact, portable Table-Style Digital Audio Podium engineered to convert any ordinary desk or conference table into a complete sound-reinforced lectern. Integrates a built-in amplifier and speaker, gooseneck microphone, flexible reading lamp, wireless handheld & lapel microphones, and a digital MP3/USB/SD console.',
    image: '/images/catalog/table-digital-podium.jpg',
    fallbackImage: '/images/catalog/black-digital-podium.jpg',
    gallery: [
      '/images/catalog/table-digital-podium.jpg',
      '/images/products/product_14.jpg'
    ],
    keyFeatures: [
      'Self-contained tabletop amplifier & high-clarity front speaker system',
      'Included wireless handheld microphone & collar lapel transmitter set',
      'Adjustable gooseneck conference microphone + integrated LED reading lamp',
      'Built-in Digital MP3 Player with USB, SD/MMC Card slots & LED display',
      'Independent rotary mixer knobs for Mic, Aux, Master Volume, Bass & Treble'
    ],
    specs: {
      'Style': 'Portable Table-Style Digital Audio Podium',
      'Built-in Audio': 'Integrated Amplifier & Full-Range Dispersion Speaker',
      'Microphones Included': 'Gooseneck Mic + Wireless Handheld + Wireless Lapel Mic',
      'Media Console': 'MP3 Player with USB / SD / MMC & Bright LED Screen',
      'Lighting': 'Built-in Flexible LED Gooseneck Reading Lamp',
      'Inputs / Outputs': 'AUX Audio In, External Speaker Out, 2× Wired Mic Inputs, AC Power'
    },
    applications: [
      'Portable Classroom & Desk Presentations',
      'Hotel Banquet & Conference Tables',
      'School Assemblies & Small Auditoriums'
    ]
  },
  {
    id: 'executive-presentation-podium-43',
    name: 'Executive 43-Inch Smart Touch Rostrum (NUST / NCAI Reference)',
    category: 'digital-podiums',
    categoryLabel: 'Digital Podiums',
    subType: 'Executive Touch Podium',
    tagline: 'Large-Format 43" 4K Interactive Touch Presentation Podium',
    modelNumber: 'KAV-NCAI-43',
    stockStatus: 'Reference Deployment Model',
    description: 'The flagship 43-inch interactive presentation rostrum deployed by Kohinoor Audio Visual at premier national universities including the National Centre of Artificial Intelligence (NCAI) at NUST Islamabad.',
    image: '/images/products/product_8.jpg',
    fallbackImage: '/images/products/product_9.jpg',
    gallery: ['/images/products/product_8.jpg', '/images/products/product_9.jpg', '/images/products/product_10.jpg'],
    keyFeatures: [
      'Expansive 43-Inch 4K UHD 20-Point Capacitive Touch Lectern Display',
      'Customizable Front Institutional Crest / University Branding Panel',
      'Full compatibility with Windows, Linux, and macOS presentation laptops',
      'Dual-screen synchronized output to auditorium LEDs or projectors'
    ],
    specs: {
      'Display Size': '43-Inch Commercial IPS Touch Screen',
      'Resolution': '3840 × 2160 4K Ultra HD',
      'Client Reference': 'NCAI / NUST Sector H-12 Islamabad',
      'Power Rating': '100–240V AC 50/60Hz'
    },
    applications: [
      'University Research Symposiums',
      'Executive Town Halls',
      'National Conference Stages'
    ]
  },

  // =========================================================================
  // CATEGORY 6: AUDIO EQUIPMENT
  // =========================================================================
  {
    id: 'cmx-ea120-ea240a-amplifier',
    name: 'CMX Audio EA-120 / EA-240A Commercial PA Mixer Amplifier',
    category: 'audio-equipment',
    categoryLabel: 'Audio Equipment',
    subType: 'Audio Amplifiers',
    tagline: '120W / 240W 100V & 4–16Ω PA Amplifier with USB, FM & Bluetooth',
    modelNumber: 'CMX EA-120 / EA-240A',
    brand: 'CMX Audio',
    stockStatus: 'Partner Supply · Islamabad',
    description: 'Professional 19-inch rackmount public address mixer amplifier from CMX Audio. Engineered for continuous school, mosque, campus, and conference audio distribution featuring multi-voltage speaker outputs, priority mic mute, and built-in media player.',
    image: '/images/catalog/audio-mixer-amplifier.jpg',
    fallbackImage: '/images/products/product_4.jpg',
    gallery: ['/images/catalog/audio-mixer-amplifier.jpg'],
    keyFeatures: [
      'Available in 120W (EA-120) and 240W (EA-240A) RMS rated power models',
      'Supports 100V, 70V constant-voltage lines & 4–16Ω low-impedance speakers',
      '3 Microphone inputs (Mic 1 priority override), 2 Aux inputs & Line Out',
      'Built-in MP3 USB/SD player, FM tuner, and Bluetooth streaming',
      'LED level meters with thermal, overload, and short-circuit protection'
    ],
    specs: {
      'Partner': 'CMX Audio',
      'Model': 'EA-120 (120W) / EA-240A (240W)',
      'Speaker Outputs': '100V, 70V and 4–16 Ohms',
      'Inputs': '3× Mic Inputs, 2× Aux Inputs, EMC Priority Input',
      'Media Sources': 'USB, SD Card, FM Radio, Bluetooth',
      'Dimensions': 'Standard 2U Rackmount Chassis'
    },
    applications: [
      'Auditorium & Campus Public Address',
      'Conference Hall Wall & Ceiling Speakers',
      'Institutional Announcement Systems'
    ]
  },
  {
    id: 'cmx-wm-u200b-wireless-mic',
    name: 'CMX WM-U200B Dual-Channel UHF Wireless Microphone System',
    category: 'audio-equipment',
    categoryLabel: 'Audio Equipment',
    subType: 'Wireless Microphones',
    tagline: '200-Channel True UHF Dual Wireless Handheld / Lapel System (100m Range)',
    modelNumber: 'CMX WM-U200B',
    brand: 'CMX Audio',
    stockStatus: 'Partner Supply · Islamabad',
    description: 'Commercial dual-channel UHF wireless microphone system by CMX Audio offering 200 selectable channels, IR auto-frequency pairing, bright LCD display receivers, and crisp interference-free transmission up to 100 meters.',
    image: '/images/products/product_5.jpg',
    fallbackImage: '/images/catalog/audio-mixer-amplifier.jpg',
    gallery: ['/images/products/product_5.jpg', '/images/catalog/audio-mixer-amplifier.jpg'],
    keyFeatures: [
      '200 agile UHF channels (520–930 MHz band) with IR auto-sync',
      'Dual independent balanced XLR + mixed 6.35mm jack outputs',
      'Up to 100 meters reliable line-of-sight operating range',
      'Configurable with dual handheld metal mics, lapel or headset transmitters'
    ],
    specs: {
      'Partner': 'CMX Audio',
      'Model': 'WM-U200B (SKM9000 Series also stocked)',
      'Frequency Range': 'UHF 520 – 930 MHz',
      'Operating Distance': 'Up to 100 meters',
      'Receiver Display': 'Dual Backlit LCD RF/AF Signal Meters'
    },
    applications: [
      'Auditorium Q&A & Stage Speaking',
      'University Lecture Halls',
      'Corporate Events & Town Halls'
    ]
  },
  {
    id: 'wired-conference-podium-microphones',
    name: 'Professional Wired Gooseneck & Dynamic Vocal Microphones',
    category: 'audio-equipment',
    categoryLabel: 'Audio Equipment',
    subType: 'Wired Microphones',
    tagline: 'Cardioid Condenser Podium Goosenecks & Shielded Vocal Microphones',
    modelNumber: 'KAV-MIC-WIRE-PRO',
    stockStatus: 'In Stock · Islamabad',
    description: 'High-sensitivity wired microphones for podiums, boardroom desks, and auditorium stages. Includes heavy weighted desktop bases with 420mm dual-flex gooseneck stems and cardioid XLR vocal microphones resistant to stage feedback.',
    image: '/images/products/product_18.jpg',
    fallbackImage: '/images/products/product_3.jpg',
    gallery: ['/images/products/product_18.jpg', '/images/products/product_3.jpg'],
    keyFeatures: [
      'Precision cardioid polar pickup rejects side ambient room noise',
      'Illuminated LED ring around capsule confirms live microphone status',
      'Supports 48V phantom power or DC battery operation',
      'Includes heavy anti-slip desk base & balanced XLR interconnect cable'
    ],
    specs: {
      'Transducer': 'Electret Condenser / Dynamic Cardioid',
      'Gooseneck Length': '420mm / 480mm Dual-Flexible Stem',
      'Connector': 'Balanced 3-Pin XLR Male Output',
      'Accessories': 'Foam Windscreen + XLR Audio Cable'
    },
    applications: [
      'Podiums & Rostrum Retrofits',
      'Boardroom & Council Desks',
      'Conference Halls & Studios'
    ]
  },
  {
    id: 'edifier-portable-pa-classroom-sound',
    name: 'Edifier Portable PA Speaker & Classroom Acoustic System',
    category: 'audio-equipment',
    categoryLabel: 'Audio Equipment',
    subType: 'Audio Accessories & PA',
    tagline: 'Rechargeable Trolley PA System with Wireless Mic & Bluetooth',
    modelNumber: 'KAV-PA-EDIFIER',
    brand: 'Edifier Acoustic',
    stockStatus: 'In Stock · Islamabad',
    description: 'Rugged portable trolley sound system with rechargeable internal battery, UHF wireless handheld microphone, Bluetooth 5.0, USB input, and heavy-duty transport wheels for assemblies and mobile classrooms.',
    image: '/images/products/product_4.jpg',
    fallbackImage: '/images/catalog/audio-mixer-amplifier.jpg',
    gallery: ['/images/products/product_4.jpg'],
    keyFeatures: [
      'Telescopic luggage handle with durable transport wheels',
      'Includes UHF wireless handheld microphone with digital display',
      'Up to 8 hours internal rechargeable battery runtime',
      'Bluetooth, USB playback, AUX 3.5mm & wired Mic inputs'
    ],
    specs: {
      'Power Output': '120W Peak / 60W RMS Acoustic Power',
      'Battery Runtime': '6 – 8 Hours Portable Operation',
      'Wireless Mic': 'UHF Handheld Microphone Included',
      'Wall/Ceiling Speakers': '30W/40W Two-Way Acoustic Pairs Also Available'
    },
    applications: [
      'School & College Assemblies',
      'Outdoor Educational Demonstrations',
      'Multi-Room Teaching Reinforcement'
    ]
  },

  // =========================================================================
  // CATEGORY 7: CONFERENCE SYSTEMS – BETERVA BE-2300
  // =========================================================================
  {
    id: 'beterva-be2300-chairman-unit',
    name: 'BETERVA BE-2300 Chairman Unit',
    category: 'conference-systems',
    categoryLabel: 'Conference Systems – BETERVA BE-2300',
    subType: 'Chairman Unit',
    tagline: 'Priority Override Chairman Discussion Console with Red Ring Gooseneck Mic',
    modelNumber: 'BE-2300C',
    brand: 'Beterva Audio Visual Company',
    stockStatus: 'Authorized Partner · Islamabad',
    description: 'Official BETERVA BE-2300 Series Chairman Unit (BE-2300C). Features an exclusive Priority Override button enabling the chairperson to mute all active delegate microphones instantly while delivering crystal-clear speech via a unidirectional condenser gooseneck capsule with red speaking ring.',
    image: '/images/products/product_17.jpg',
    fallbackImage: '/images/products/product_11.jpg',
    gallery: ['/images/products/product_17.jpg', '/images/products/product_16.jpg', '/images/products/product_3.jpg'],
    keyFeatures: [
      'Dedicated Chairman Priority button overrides & silences active delegate units',
      'Unidirectional electret condenser microphone with red LED speaking ring',
      'Built-in high-fidelity loudspeaker automatically mutes when mic activates',
      'Independent rotary speaker/headphone volume knob + 3.5mm earphone & lapel jacks',
      'Integrated 2.1m 8-pin DIN T-shape daisy-chain cable; zero mobile RF buzz'
    ],
    specs: {
      'Manufacturer': 'Beterva Audio Visual Company',
      'Model': 'BE-2300C (Chairman Unit)',
      'Microphone Type': 'Unidirectional Condenser Gooseneck with Red Ring Indicator',
      'Priority Control': 'Instant Delegate Override Button with Chime Alert',
      'Built-in Audio': 'Auto-Muting Desk Monitor Speaker + 3.5mm Earphone Jack',
      'Power & Connection': 'DC 24V (Supplied by Central Controller via 8P-DIN Cable)'
    },
    applications: [
      'Government & Ministry Council Chambers',
      'University Senate & Syndicate Boardrooms',
      'Corporate Board of Directors Rooms'
    ]
  },
  {
    id: 'beterva-be2300-delegate-unit',
    name: 'BETERVA BE-2300 Delegate Unit',
    category: 'conference-systems',
    categoryLabel: 'Conference Systems – BETERVA BE-2300',
    subType: 'Delegate Unit',
    tagline: 'Synchronized Delegate Discussion Console with Auto-Mute Speaker & Indicators',
    modelNumber: 'BE-2300D',
    brand: 'Beterva Audio Visual Company',
    stockStatus: 'Authorized Partner · Islamabad',
    description: 'Official BETERVA BE-2300 Series Delegate Unit (BE-2300D). Engineered for structured participant engagement with green active-status LED, red gooseneck speaking ring, auto-muting internal monitor speaker, and side earphone monitoring jack.',
    image: '/images/products/product_16.jpg',
    fallbackImage: '/images/products/product_11.jpg',
    gallery: ['/images/products/product_16.jpg', '/images/products/product_17.jpg', '/images/products/product_3.jpg'],
    keyFeatures: [
      'Push-to-talk speech control with green status indicator & red gooseneck ring',
      'Built-in internal loudspeaker automatically mutes when delegate mic is live',
      'Side 3.5mm headphone & external microphone input jacks with volume knob',
      'Expandable daisy-chain topology using 8-pin DIN shielded cable',
      'High immunity to mobile phone & GSM RF electromagnetic interference'
    ],
    specs: {
      'Manufacturer': 'Beterva Audio Visual Company',
      'Model': 'BE-2300D (Delegate Unit)',
      'Microphone Type': 'Unidirectional Condenser Gooseneck',
      'Indicators': 'Red Gooseneck Working Ring + Green Desk Status LED',
      'Audio Jacks': '3.5mm Earphone Output & 3.5mm External Mic Input',
      'Cabling': '2.1m 8-Pin T-Type Daisy-Chain Connection'
    },
    applications: [
      'Parliamentary & Municipal Assembly Desks',
      'University Academic Councils',
      'International Summit Meeting Tables'
    ]
  },
  {
    id: 'beterva-be2300-central-control-unit',
    name: 'BETERVA BE-2300 Central Control Unit',
    category: 'conference-systems',
    categoryLabel: 'Conference Systems – BETERVA BE-2300',
    subType: 'Central Control Unit',
    tagline: 'Master Discussion System Processor Supporting Up to 60–120 Units',
    modelNumber: 'BE-2300M / BE-1000',
    brand: 'Beterva Audio Visual Company',
    stockStatus: 'Authorized Partner · Islamabad',
    description: 'The central processing and power hub for BETERVA BE-2300 conference installations. Supplies clean 24V DC power to connected Chairman and Delegate microphones, enforces speaking modes (Free, FIFO, Limit), prevents acoustic feedback, and provides balanced XLR/RCA outputs for room amplification and recording.',
    image: '/images/products/product_11.jpg',
    fallbackImage: '/images/products/product_17.jpg',
    gallery: ['/images/products/product_11.jpg', '/images/products/product_17.jpg'],
    keyFeatures: [
      'Drives up to 60 microphone units directly (expandable up to 120 units)',
      'Selectable Conference Modes: Free Speech, Limit (1–6 mics), and FIFO',
      'Built-in anti-howling acoustic feedback suppression & EQ tuning',
      '4× 8-Pin DIN trunk terminals for clean Left/Right table loop wiring',
      'Balanced XLR & unbalanced RCA Line Outputs for recording & PA mixers'
    ],
    specs: {
      'Manufacturer': 'Beterva Audio Visual Company',
      'Model': 'BE-2300 Central Controller (BE-1000 Compatible)',
      'Unit Capacity': 'Up to 60–120 Chairman/Delegate Stations',
      'Discussion Modes': 'FREE / FIFO / LIMIT (1, 2, 3, or 6 Active Mics)',
      'Outputs': 'Balanced XLR, RCA Line Out, Monitor Phone Jack',
      'Power Supply': 'AC 220–240V 50/60Hz (Supplies 24V DC to Units)'
    },
    applications: [
      'Central Rack in Executive Boardrooms',
      'Council Chamber AV Control Rooms',
      'Institutional Conference Infrastructure'
    ]
  },

  // =========================================================================
  // CATEGORY 8: PROFESSIONAL TELEPROMPTERS (KING MANUFACTURER SERIES)
  // =========================================================================
  {
    id: 'king-teleprompter-tp27',
    name: 'King TP27 – 27 Inch Studio Teleprompter',
    category: 'teleprompters',
    categoryLabel: 'Professional Teleprompters',
    subType: '27 Inch Studio Series',
    tagline: '27-Inch High-Brightness Beamsplitter Teleprompter by King',
    modelNumber: 'TP27',
    brand: 'King Teleprompters',
    stockStatus: 'Official King Lineup',
    description: 'Compact broadcast and lecture-studio teleprompter engineered by King with a crisp 27-inch Full HD reversing monitor and 70/30 optical beamsplitter glass—built for news desks, studio faculty recording, and close-to-mid camera shoots.',
    image: '/images/catalog/teleprompter-king-studio.jpg',
    fallbackImage: '/images/products/product_2.jpg',
    gallery: ['/images/catalog/teleprompter-king-studio.jpg', '/images/products/product_2.jpg'],
    keyFeatures: [
      '27-Inch Diagonal Anti-Glare Monitor with hardware image-flip',
      '70/30 High-Transmission Optical Beamsplitter Glass (zero double reflection)',
      'Supports Broadcast ENG, Cinema & PTZ Robotic Cameras',
      'Inputs: HDMI, VGA, BNC/SDI with USB prompting software included'
    ],
    specs: {
      'Manufacturer': 'King Teleprompters',
      'Model Number': 'TP27',
      'Screen Size': '27 Inch Diagonal (16:9)',
      'Resolution': '1920 × 1080 Full HD',
      'Recommended Reading Range': 'Up to 5 – 6 meters (15 – 20 ft)',
      'Glass Specification': '70/30 Ultra-Clear Beamsplitter Glass',
      'Interfaces': 'HDMI, VGA, Composite / SDI, Wireless Foot/Hand Controller'
    },
    applications: [
      'University E-Learning Video Studios',
      'Broadcast News & Studio Desks',
      'Executive Video Briefings'
    ]
  },
  {
    id: 'king-teleprompter-tp32',
    name: 'King TP32 – 32 Inch Studio & Conference Teleprompter',
    category: 'teleprompters',
    categoryLabel: 'Professional Teleprompters',
    subType: '32 Inch Studio Series',
    tagline: '32-Inch Broadcast Studio & Podium Teleprompter Rig by King',
    modelNumber: 'TP32',
    brand: 'King Teleprompters',
    stockStatus: 'Official King Lineup',
    description: 'Versatile 32-inch King Teleprompter ideal for studio anchors and medium-depth conference halls where presenters read comfortably up to 24 feet away.',
    image: '/images/catalog/teleprompter-king-studio.jpg',
    fallbackImage: '/images/products/product_2.jpg',
    gallery: ['/images/catalog/teleprompter-king-studio.jpg'],
    keyFeatures: [
      '32-Inch Commercial High-Brightness Display (Full HD / 4K Input)',
      'Heavy-duty aluminum hood extrusion with glare-proof blackout shroud',
      'Adjustable camera sled supporting telephoto studio lenses',
      'Variable speed wireless remote & multi-language script software (English/Urdu/Arabic)'
    ],
    specs: {
      'Manufacturer': 'King Teleprompters',
      'Model Number': 'TP32',
      'Screen Size': '32 Inch Diagonal (16:9)',
      'Resolution': '1920 × 1080 Full HD (4K Signal Supported)',
      'Recommended Reading Range': 'Up to 7 meters (20 – 24 ft)',
      'Glass Ratio': '70/30 Low-Iron Beamsplitter Glass',
      'Inputs': 'HDMI, VGA, 3G-SDI Loop'
    },
    applications: [
      'Institutional Production Studios',
      'Seminar Hall Speech Delivery',
      'Broadcast & Documentary Recording'
    ]
  },
  {
    id: 'king-teleprompter-tp43',
    name: 'King TP43 – 43 Inch Enterprise Teleprompter',
    category: 'teleprompters',
    categoryLabel: 'Professional Teleprompters',
    subType: '43 Inch Large Format',
    tagline: '43-Inch High-Visibility 4K Teleprompter System by King',
    modelNumber: 'TP43',
    brand: 'King Teleprompters',
    stockStatus: 'Official King Lineup',
    description: 'Large-format 43-inch King Teleprompter built for big broadcast studios, corporate keynotes, and conference halls requiring crisp long-range script visibility.',
    image: '/images/catalog/teleprompter-king-studio.jpg',
    fallbackImage: '/images/products/product_2.jpg',
    gallery: ['/images/catalog/teleprompter-king-studio.jpg', '/images/products/product_2.jpg'],
    keyFeatures: [
      '43-Inch 4K UHD High-Visibility Display Panel',
      'Long-throw legibility with high-contrast bold script rendering',
      'Heavy-duty rolling tripod or stage floor-wedge configuration',
      'Supports dual-prompter synchronized mirroring over HDMI/SDI'
    ],
    specs: {
      'Manufacturer': 'King Teleprompters',
      'Model Number': 'TP43',
      'Screen Size': '43 Inch Diagonal',
      'Resolution': '3840 × 2160 4K UHD',
      'Recommended Reading Range': 'Up to 10 meters (30+ ft)',
      'Mounting': 'Heavy Studio Tripod Pedestal / Stage Stand'
    },
    applications: [
      'Large Enterprise Boardrooms',
      'Television Production Studios',
      'University Convocation Stages'
    ]
  },
  {
    id: 'king-teleprompter-tp55',
    name: 'King TP55 – 55 Inch Stage & Broadcast Teleprompter',
    category: 'teleprompters',
    categoryLabel: 'Professional Teleprompters',
    subType: '55 Inch Stage Series',
    tagline: '55-Inch 4K Auditorium & Presidential Stage Teleprompter by King',
    modelNumber: 'TP55',
    brand: 'King Teleprompters',
    stockStatus: 'Official King Lineup',
    description: 'High-impact 55-inch King Teleprompter engineered for wide auditorium stages, diplomatic addresses, and concert lyric/keynote confidence monitoring.',
    image: '/images/products/product_2.jpg',
    fallbackImage: '/images/catalog/teleprompter-king-studio.jpg',
    gallery: ['/images/products/product_2.jpg', '/images/catalog/teleprompter-king-studio.jpg'],
    keyFeatures: [
      'Massive 55-Inch 4K UHD Monitor Readable Across Grand Stages',
      'Configurable in Through-the-Lens Hood or Dual Stage Floor Confidence Modes',
      'Anti-glare glass readable even under strong theater spotlights',
      'Dual redundant HDMI / 3G-SDI input distribution'
    ],
    specs: {
      'Manufacturer': 'King Teleprompters',
      'Model Number': 'TP55',
      'Screen Size': '55 Inch Diagonal',
      'Resolution': '3840 × 2160 4K UHD',
      'Recommended Reading Range': '12 – 15 meters',
      'Interfaces': 'HDMI, 3G-SDI, RJ-45 Network Control'
    },
    applications: [
      'National Convocation Auditoriums',
      'State & Diplomatic Keynotes',
      'Live Broadcast Event Stages'
    ]
  },
  {
    id: 'king-teleprompter-tp65',
    name: 'King TP65 – 65 Inch Grand Hall Teleprompter',
    category: 'teleprompters',
    categoryLabel: 'Professional Teleprompters',
    subType: '65 Inch Auditorium Series',
    tagline: '65-Inch Commercial 4K Auditorium Teleprompter Rig by King',
    modelNumber: 'TP65',
    brand: 'King Teleprompters',
    stockStatus: 'Official King Lineup',
    description: 'Ultra-large 65-inch King Teleprompter system providing unmistakable readability from deep stage centers and parliamentary podiums.',
    image: '/images/products/product_2.jpg',
    fallbackImage: '/images/catalog/teleprompter-king-studio.jpg',
    gallery: ['/images/products/product_2.jpg', '/images/catalog/teleprompter-king-studio.jpg'],
    keyFeatures: [
      '65-Inch 4K Ultra HD Commercial Panel with Wide 178° Viewing Angle',
      'Reinforced touring steel floor carriage with lockable wheel casters',
      'Supports synchronized multi-language teleprompting & live countdown clock',
      'Instant mirror/flip switch for straight or reflected glass operation'
    ],
    specs: {
      'Manufacturer': 'King Teleprompters',
      'Model Number': 'TP65',
      'Screen Size': '65 Inch Diagonal',
      'Resolution': '3840 × 2160 4K UHD',
      'Brightness': 'High-Luminance Stage Readable Panel',
      'Connections': 'HDMI 2.0, 3G-SDI, VGA'
    },
    applications: [
      'Grand University Auditoriums',
      'Parliamentary & Assembly Chambers',
      'International Conferences'
    ]
  },
  {
    id: 'king-teleprompter-tp75',
    name: 'King TP75 – 75 Inch Auditorium Confidence Teleprompter',
    category: 'teleprompters',
    categoryLabel: 'Professional Teleprompters',
    subType: '75 Inch Auditorium Series',
    tagline: '75-Inch Long-Throw 4K Stage & Broadcast Prompting System by King',
    modelNumber: 'TP75',
    brand: 'King Teleprompters',
    stockStatus: 'Official King Lineup',
    description: '75-inch large-venue King Teleprompter constructed for auditoriums, convention halls, and live broadcast sets where speakers stand far from the stage apron or camera risers.',
    image: '/images/catalog/teleprompter-king-studio.jpg',
    fallbackImage: '/images/products/product_2.jpg',
    gallery: ['/images/catalog/teleprompter-king-studio.jpg', '/images/products/product_2.jpg'],
    keyFeatures: [
      '75-Inch 4K UHD High-Brightness Prompting Display',
      'Heavy-duty mobile truss/floor trolley mount included',
      'Zero-latency wired & long-range wireless operator control',
      'Supports full Unicode script rendering including Urdu & Arabic'
    ],
    specs: {
      'Manufacturer': 'King Teleprompters',
      'Model Number': 'TP75',
      'Screen Size': '75 Inch Diagonal',
      'Resolution': '3840 × 2160 4K UHD',
      'Recommended Reading Range': '15 – 22 meters',
      'Inputs': 'HDMI, 3G-SDI, IP Control'
    },
    applications: [
      'Convention & Expo Centers',
      'Grand University Convocations',
      'Large Broadcast Studios'
    ]
  },
  {
    id: 'king-teleprompter-tp85',
    name: 'King TP85 – 85 Inch Mega-Venue Teleprompter',
    category: 'teleprompters',
    categoryLabel: 'Professional Teleprompters',
    subType: '85 Inch Mega-Venue Series',
    tagline: '85-Inch Long-Distance Arena & Stadium Teleprompter by King',
    modelNumber: 'TP85',
    brand: 'King Teleprompters',
    stockStatus: 'Official King Lineup',
    description: 'Commanding 85-inch King Teleprompter system delivering crisp typography at stadium and mega-hall distances for keynote presenters and live productions.',
    image: '/images/catalog/teleprompter-king-studio.jpg',
    fallbackImage: '/images/products/product_2.jpg',
    gallery: ['/images/catalog/teleprompter-king-studio.jpg'],
    keyFeatures: [
      '85-Inch Commercial 4K UHD Anti-Glare Prompting Screen',
      'Heavy-duty locking rolling truss stand for rapid stage deployment',
      'Hardware image-reversal + multi-screen splitter synchronization',
      'Operator-controlled scroll pace, font sizing, and cue markers'
    ],
    specs: {
      'Manufacturer': 'King Teleprompters',
      'Model Number': 'TP85',
      'Screen Size': '85 Inch Diagonal',
      'Resolution': '3840 × 2160 4K UHD',
      'Recommended Reading Range': 'Up to 28 meters',
      'Video Inputs': 'Dual HDMI, 3G-SDI'
    },
    applications: [
      'Mega Convention Halls',
      'Stadium & National Ceremonies',
      'Executive Summits'
    ]
  },
  {
    id: 'king-teleprompter-tp100',
    name: 'King TP100 – 100 Inch Flagship Stadium & Convention Teleprompter',
    category: 'teleprompters',
    categoryLabel: 'Professional Teleprompters',
    subType: '100 Inch Flagship Series',
    tagline: '100-Inch Ultra-Large 4K Prompting Display by King',
    modelNumber: 'TP100',
    brand: 'King Teleprompters',
    stockStatus: 'Official King Lineup',
    description: 'The flagship 100-inch King Teleprompter designed for the largest national auditoriums, open-air VIP stages, and convention arenas requiring instant legibility from 30+ meters away.',
    image: '/images/catalog/teleprompter-king-studio.jpg',
    fallbackImage: '/images/products/product_2.jpg',
    gallery: ['/images/catalog/teleprompter-king-studio.jpg'],
    keyFeatures: [
      'Colossal 100-Inch 4K UHD Display — largest model in King TP Series',
      'Commercial high-brightness anti-glare front glass',
      'Heavy-gauge dual-column floor trolley engineered for stage safety',
      'Redundant operator workstation cabling via HDMI/SDI fiber extenders'
    ],
    specs: {
      'Manufacturer': 'King Teleprompters',
      'Model Number': 'TP100',
      'Screen Size': '100 Inch Diagonal',
      'Resolution': '3840 × 2160 4K UHD',
      'Recommended Reading Range': 'Up to 35 meters',
      'Chassis': 'Reinforced Touring Mobile Carriage'
    },
    applications: [
      'National Convocation Arenas',
      'State VIP Ceremonies & Stadiums',
      'Major Convention Auditoriums'
    ]
  },

  // =========================================================================
  // SUPPORTING SPECIALTY SOLUTIONS (PTZ CAMERAS & SMART CLASSROOM PACKAGES)
  // =========================================================================
  {
    id: 'ai-auto-tracking-ptz-camera-4k',
    name: 'Tenoveo / KAV 4K AI Auto-Tracking PTZ Robotic Camera',
    category: 'ptz-robotic-cameras',
    categoryLabel: 'PTZ Robotic Cameras',
    tagline: 'Intelligent Presenter-Tracking Camera for Hybrid Learning & Boardrooms',
    modelNumber: 'KAV-PTZ4K-AUTO',
    brand: 'Tenoveo / Kohinoor AV',
    stockStatus: 'Available · Islamabad',
    description: 'Next-generation 4K PTZ camera equipped with built-in artificial intelligence that tracks instructors and speakers smoothly across the room without requiring lanyards or sensors.',
    image: '/images/ptz_camera_tracking_1793992811906.jpg',
    fallbackImage: '/images/ptz_camera_tracking_1793992811906.jpg',
    gallery: ['/images/ptz_camera_tracking_1793992811906.jpg'],
    keyFeatures: [
      'True 4K Ultra HD at 60fps with 1/2.8" Sony CMOS sensor',
      'Deep-learning AI presenter tracking without wearable tags',
      '12x / 20x Optical Zoom with razor-sharp glass lens elements',
      'Simultaneous HDMI, USB 3.0, IP Streaming & NDI|HX output'
    ],
    specs: {
      'Video Sensor': '1/2.8-inch Sony CMOS',
      'Output Resolution': '4K @ 60fps, 1080p @ 60fps',
      'Optical Zoom': '12x / 20x Optical Zoom',
      'Interfaces': 'HDMI 2.0, USB 3.0, RJ-45 LAN (PoE), RS-232/485'
    },
    applications: [
      'Hybrid University Lecture Capture',
      'Live Online Distance Learning',
      'Corporate Telepresence'
    ]
  },
  {
    id: 'turnkey-smart-classroom-bundle',
    name: 'Complete Turnkey Smart Classroom Solution Package',
    category: 'smart-classroom-solutions',
    categoryLabel: 'Smart Classroom Solutions',
    tagline: 'Integrated Hardware Package: Interactive LED, Digital Podium, Audio & Camera',
    modelNumber: 'KAV-CLASSROOM-BUNDLE',
    stockStatus: 'Turnkey Solution',
    description: 'Complete all-in-one smart classroom package engineered by Kohinoor Audio Visual. Unifies an Interactive LED Flat Panel (75" or 86"), Black or Table-Style Digital Podium, CMX commercial audio, PTZ tracking camera, and nationwide installation.',
    image: '/images/hero_av_solutions_1793992811053.jpg',
    fallbackImage: '/images/hero_av_solutions_1793992811053.jpg',
    gallery: [
      '/images/hero_av_solutions_1793992811053.jpg',
      '/images/catalog/black-digital-podium.jpg',
      '/images/products/product_6.jpg'
    ],
    keyFeatures: [
      'Interactive 75" or 86" 4K Flat Panel with Dual Android & Windows OPS',
      'Digital Podium with touch monitor, gooseneck mic & central AV switch',
      'CMX Audio reinforcement + wireless microphones',
      'Nationwide on-site installation, cabling, faculty training & after-sales warranty'
    ],
    specs: {
      'Interactive Display': '75" or 86" 4K UHD 20-Point Touch LED',
      'Podium': 'Black Steel Digital Podium or Table-Style Audio Podium',
      'Audio': 'CMX Amplifier + Wall Dispersion Speakers + Wireless Mics',
      'Support': 'Full Warranty, Installation & Maintenance Services'
    },
    applications: [
      'Higher Education Universities & Colleges',
      'Medical & Engineering Institutions',
      'Government Training Academies'
    ]
  }
];

export const BUSINESS_INFO = {
  name: 'Kohinoor Audio Visual Education Business System',
  shortName: 'Kohinoor Audio Visual',
  abbreviation: 'Kohinoor AV',
  establishedYear: 1978,
  yearsActive: '45+ Years',
  tagline: 'Audio Visual Equipment, Educational Equipment & Business Systems Since 1978',
  mission: 'Providing professional Audio Visual solutions for educational institutions and businesses across Pakistan with complete after-sales technical support, maintenance, installation, and warranty services.',
  afterSalesSummary: 'Dedicated technical support, preventive maintenance, professional on-site installation, and official manufacturer warranty across Pakistan.',
  address: 'United Plaza, 2nd Floor, Fazlehaq Road, Blue Area, Islamabad, Pakistan',
  phone: '+92 333 5163220',
  phoneClean: '923335163220',
  landline: '051-2347377',
  email: 'kohinoor_ibd@yahoo.co',
  emailAlt: 'kohinoor_ibd@yahoo.co.uk',
  website: 'https://kohinoorav.com',
  whatsappUrl: 'https://wa.me/923335163220',
  googleMapsUrl: 'https://maps.google.com/?q=United+Plaza+Fazlehaq+Road+Blue+Area+Islamabad',
  coverageCities: [
    'Islamabad',
    'Rawalpindi',
    'Lahore',
    'Karachi',
    'Peshawar',
    'Multan',
    'Faisalabad',
    'Nationwide Pakistan'
  ],
  workingHours: 'Monday – Saturday: 9:00 AM – 6:00 PM (PKT)'
};
