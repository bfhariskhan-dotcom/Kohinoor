import { BusinessPartner, Product } from '../types';

export const CATEGORIES = [
  {
    id: 'interactive-led-displays',
    name: 'Interactive LED Displays',
    slug: 'interactive-led-displays',
    tagline: '4K Ultra HD Multi-Touch Smart Displays from 55" to 110"',
    description: 'Ready-stock 4K UHD anti-glare interactive LED panels available in 55", 65", 75", 85", 86", 98", and 110" with dual OS (Android & Windows OPS) and 20-point multi-touch.',
    heroImage: '/images/products/product_6.jpg',
    features: ['55", 65", 75", 85", 86", 98", 110" Sizes', 'True 4K UHD & 20-Point Touch', 'Dual OS (Android + Windows OPS)', 'Whiteboard & Annotation Suite', 'Heavy-Duty Mobile Trolley Carts']
  },
  {
    id: 'multimedia-projectors',
    name: 'Multimedia Projectors',
    slug: 'multimedia-projectors',
    tagline: 'Mitsubishi 8000 Series & Casio XJ-S400UN LampFree Projectors',
    description: 'Ready-stock genuine installation and classroom projectors including Mitsubishi Electric 8000 Series (UD8900U, UD8850U, WD8700U, XD8600U White & Black BL) and Casio XJ-S400UN LampFree Superior Series.',
    heroImage: '/images/real-stock/casio-xj-s400un.jpg',
    features: ['Mitsubishi 8000 Series (7,300–8,500 Lumens)', 'Casio XJ-S400UN (4,000 Lumens WUXGA)', 'Laser & LED R-Hybrid Mercury Free', 'Dual-Lamp Auditorium Reliability', 'Optional Interchangeable Lenses']
  },
  {
    id: 'projection-screens',
    name: 'Projection Screens',
    slug: 'projection-screens',
    tagline: 'Wall-Mounted, Portable Tripod / Stand & Motorized Screens',
    description: 'High-gain matte white projection screens stocked in Wall-Mounted Pull-Down, Portable Tripod / Floor Stand, and Electric Motorized configurations across 6×6 to 13×10 ft.',
    heroImage: '/images/real-stock/wall-screen-clean.jpg',
    features: ['Wall-Mounted Projection Screens', 'Portable Tripod / Stand Screens', 'Electric Motorized RF Screens', 'Sizes: 6×6, 8×6, 10×8, 12×9, 13×10 ft', 'Anti-Crease Matte White Surface']
  },
  {
    id: 'digital-podiums',
    name: 'Digital Podiums',
    slug: 'digital-podiums',
    tagline: 'Black & White Digital Podiums with 60W Audio, Gooseneck & Wireless Mics',
    description: 'Ready-stock Black and White Digital Podiums featuring dual gooseneck microphones, 2 wireless handheld mics, built-in 60W audio output, MP3/USB/SD/AUX control panel, and 580×420×1100 mm chassis (29 kg).',
    heroImage: '/images/real-stock/digital-podium-black.jpg',
    features: ['Black & White Finish Variants', 'Dual Gooseneck + 2 Wireless Mics', '60W Audio Output (100W Consumed)', 'MP3 / USB / SD / AUX Control Panel', '580 × 420 × 1100 mm · 29 kg Build']
  },
  {
    id: 'conference-systems',
    name: 'Video Conferencing & Conference Systems',
    slug: 'conference-systems',
    tagline: 'Tenveo TEVO-VA3000 / TEVO-VA3000E & BETERVA BE-2300 Series',
    description: 'All-in-one Tenveo TEVO-VA3000 / TEVO-VA3000E HD 1080p 10X Zoom video conferencing kits with speakerphone & expansion mics, plus BETERVA BE-2300 Chairman & Delegate audio units.',
    heroImage: '/images/real-stock/tenveo-va3000e.jpg',
    features: ['Tenveo TEVO-VA3000 / TEVO-VA3000E Kit', '10X Lossless Zoom PTZ & 1080p @ 30fps', 'Speakerphone, Bluetooth & Expansion Mics', 'Zoom / Teams / WebEx / Polycom Ready', 'BETERVA BE-2300 Chairman & Delegate Units']
  },
  {
    id: 'teleprompters',
    name: 'Teleprompters (Stage & Floor Series)',
    slug: 'teleprompters',
    tagline: 'Stage Monitor / Floor Captioner Series: TP27 to TP100 (27"–100")',
    description: 'Professional Stage Monitor / Floor Captioner teleprompters from 27-inch to 100-inch (TP27, TP32, TP43, TP55, TP65, TP75, TP85, TP100) with 1920×1080 Full HD panels, foot pedal, remote, and HDMI/SDI/Wireless inputs.',
    heroImage: '/images/products/product_2.jpg',
    features: ['Models: TP27, TP32, TP43, TP55, TP65, TP75, TP85, TP100', '1920×1080 Full HD Resolution Panels', 'Stage Monitor / Floor Captioner Style', 'Foot Pedal & Wireless Remote Control', 'HDMI / SDI / Wireless Video Support']
  },
  {
    id: 'audio-equipment',
    name: 'Audio Equipment',
    slug: 'audio-equipment',
    tagline: 'CMX EA-120 / EA-240A Amplifiers, Wireless Mics & Acoustic PA Systems',
    description: 'Commercial PA mixer amplifiers (CMX EA Series), dual-channel UHF wireless microphones, wired podium/conference mics, and portable classroom sound systems.',
    heroImage: '/images/real-stock/cmx-ea-amplifier.png',
    features: ['CMX Audio EA-120 / EA-240A Amplifiers', 'UHF Dual-Channel Wireless Mics', 'Wired Gooseneck & Vocal Mics', '100V/70V & 4–16Ω Zone Support', 'USB, Bluetooth & Aux Playback']
  },
  {
    id: 'projector-mounting-kits',
    name: 'Projector Mounting Kits',
    slug: 'projector-mounting-kits',
    tagline: 'Heavy-Duty Ceiling Brackets, Telescopic Poles & Wall Mounts',
    description: 'Commercial cold-rolled steel universal ceiling mounts, telescopic extension drops, and short-throw wall brackets with concealed cable routing.',
    heroImage: '/images/real-stock/projector-ceiling-mount.jpg',
    features: ['Universal 4-Arm Spider Plate', 'Telescopic Height Adjustment', '360° Swivel & +/-15° Tilt Alignment', 'Concealed Internal Cable Routing', 'Heavy-Duty Steel Load Support']
  }
];

export const BUSINESS_PARTNERS: BusinessPartner[] = [
  {
    id: 'mitsubishi',
    name: 'Mitsubishi Electric Japan',
    origin: 'Japan',
    specialty: '8000 Series High-Lumen Data & Video Projectors',
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
    id: 'tenveo',
    name: 'Tenveo Video Conference Systems',
    origin: 'International',
    specialty: 'TEVO-VA3000 All-in-One PTZ Video & Audio Kits',
    shortCode: 'TENVEO'
  },
  {
    id: 'beterva',
    name: 'Beterva Audio Visual Company',
    origin: 'International',
    specialty: 'BE-2300 Conference Discussion Systems & Audio',
    shortCode: 'BETERVA'
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
    id: 'huangsheng',
    name: 'Shaoguan Huangsheng Audio / King Prompter',
    origin: 'International',
    specialty: 'Stage Monitor & Floor Captioner Teleprompters (TP27–TP100)',
    shortCode: 'TP SERIES'
  }
];

export const PRODUCTS: Product[] = [
  // =========================================================================
  // PRIORITY 1: INTERACTIVE LED DISPLAYS
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
    stockStatus: 'Ready Stock · Islamabad',
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
    stockStatus: 'Ready Stock · Islamabad',
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
    stockStatus: 'Institutional Supply · Islamabad',
    description: 'Designed to replace multi-screen video walls in grand conference rooms, parliamentary chambers, and university amphitheaters. Delivers dramatic 98-inch and 110-inch uninterrupted 4K touch surfaces visible from up to 20 meters away.',
    image: '/images/products/product_6.jpg',
    fallbackImage: '/images/products/product_7.jpg',
    gallery: ['/images/products/product_6.jpg', '/images/products/product_7.jpg'],
    keyFeatures: [
      'Massive 98-Inch and 110-Inch Uninterrupted 4K Touch Panels',
      '178° Wide Viewing Angle Ideal for Tiered Auditoriums',
      '20-Point Touch Interaction with Palm Rejection & Dual-Color Stylus',
      'Reinforced Aluminum Bezel & Commercial 24/7 Duty Cycle Rating',
      'Seamless Video Conferencing Ready (Tenveo TEVO-VA3000 Sync)'
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
  // PRIORITY 2: MULTIMEDIA PROJECTORS (ACTUAL READY-STOCK MODELS)
  // =========================================================================
  {
    id: 'mitsubishi-8000-series-projector',
    name: 'Mitsubishi Electric 8000 Series Multimedia Projector (UD8900U / UD8850U / WD8700U / XD8600U)',
    category: 'multimedia-projectors',
    categoryLabel: 'Multimedia Projectors',
    tagline: '7,300 to 8,500 ANSI Lumens · 2800:1 Contrast · Dual-Lamp · White & Black (BL)',
    modelNumber: 'UD8900U / UD8850U / WD8700U / XD8600U',
    brand: 'Mitsubishi Electric Japan',
    availableSizes: ['White Finish', 'Black (BL) Finish'],
    stockStatus: 'Ready Stock · Islamabad',
    description: 'Flagship Mitsubishi Electric 8000 Series high-brightness dual-lamp installation projectors built for grand auditoriums, lecture halls, and command rooms. Delivers 7,300 to 8,500 lumens brightness with 2800:1 contrast ratio, uninterrupted dual-lamp operation, and interchangeable bayonet lenses in White and Matte Black (BL) enclosures.',
    image: '/images/real-stock/mitsubishi-ud8900u.jpg',
    fallbackImage: '/images/real-stock/casio-xj-s400un.jpg',
    gallery: ['/images/real-stock/mitsubishi-ud8900u.jpg'],
    keyFeatures: [
      'Models Stocked: UD8900U, UD8850U, WD8700U & XD8600U in White & Black (BL)',
      'High Output 7,300 to 8,500 ANSI Lumens with 2800:1 High Contrast Ratio',
      'Redundant Dual-Lamp System prevents interruption during live events',
      'Supports 5 Optional Interchangeable Lenses with Motorized Lens Shift',
      'WUXGA (1920×1200), WXGA (1280×800) & XGA (1024×768) High-Clarity Optics'
    ],
    specs: {
      'Manufacturer': 'Mitsubishi Electric Japan',
      'Models Available': 'UD8900U, UD8850U, WD8700U, XD8600U (White & Black BL)',
      'Brightness': '7,300 – 8,500 ANSI Lumens',
      'Contrast Ratio': '2800:1',
      'Lamp Architecture': 'Dual-Lamp Failover System (Standard / Single-Lamp Relay)',
      'Lens Options': 'Optional Short, Standard, Long & Ultra-Long Throw Lenses',
      'Connectivity': 'HDMI, DVI-D, 5-BNC, VGA D-Sub, RJ-45 LAN, RS-232C'
    },
    applications: [
      'Large University Auditoriums & Amphitheaters',
      'Government & Ministry Conference Halls',
      'Long-Throw Convention & Convocation Stages'
    ]
  },
  {
    id: 'casio-xj-s400un-projector',
    name: 'Casio XJ-S400UN (Superior Series LampFree Projector)',
    category: 'multimedia-projectors',
    categoryLabel: 'Multimedia Projectors',
    tagline: '4,000 ANSI Lumens · WUXGA Real · Laser & LED R-Hybrid · 1.7x Optical Zoom',
    modelNumber: 'CASIO XJ-S400UN',
    brand: 'CASIO Computer Ltd Japan',
    stockStatus: 'Ready Stock · Islamabad',
    description: 'Genuine Casio Superior Series XJ-S400UN Mercury-Free projector powered by Casio’s proprietary Laser & LED R-Hybrid Light Source. Delivers crisp WUXGA Real (1920 × 1200) clarity at 4,000 lumens brightness with up to 20,000 hours maintenance-free operation, 1.7x manual optical zoom, and wireless campus connectivity.',
    image: '/images/real-stock/casio-xj-s400un.jpg',
    fallbackImage: '/images/real-stock/casio-xj-v100w.jpg',
    gallery: ['/images/real-stock/casio-xj-s400un.jpg', '/images/real-stock/casio-xj-v100w.jpg'],
    keyFeatures: [
      '4,000 ANSI Lumens high brightness engineered for lit classrooms',
      'WUXGA Real (1920 × 1200) widescreen ultra-crisp resolution',
      'Laser & LED R-Hybrid Light Source (20,000 hours life, 100% Mercury Free)',
      'Flexible 1.7x Optical Zoom Lens with Vertical Lens Shift & Keystone',
      'Instant 5-second power-on & shutdown with network RJ-45 & Wireless support'
    ],
    specs: {
      'Manufacturer': 'CASIO Computer Ltd Japan',
      'Model Number': 'XJ-S400UN (Superior Series)',
      'Brightness': '4,000 ANSI Lumens',
      'Native Resolution': 'WUXGA Real (1920 × 1200, 16:10)',
      'Light Source': 'Laser & LED R-Hybrid (20,000 Hours, Mercury Free)',
      'Optical Zoom': '1.7x Manual Optical Zoom',
      'Interfaces': '2× HDMI, RGB/VGA, RJ-45 Wired LAN, USB-A, Audio In/Out'
    },
    applications: [
      'Modern Smart University Lecture Rooms',
      'Corporate Executive Boardrooms',
      'High-Duty Continuous Daily Academic Operation'
    ]
  },
  {
    id: 'casio-xj-v100w-projector',
    name: 'Casio XJ-V100W LampFree Laser & LED Classroom Projector',
    category: 'multimedia-projectors',
    categoryLabel: 'Multimedia Projectors',
    tagline: '3,000 ANSI Lumens · WXGA (1280×800) · 20,000-Hour Light Source · 1.5x Zoom',
    modelNumber: 'CASIO XJ-V100W',
    brand: 'CASIO Computer Ltd Japan',
    stockStatus: 'Ready Stock · Islamabad',
    description: 'Japanese-engineered Casio Core Series widescreen LampFree projector featuring a 1.5x optical zoom lens, sealed dust-resistant chassis, and 20,000-hour mercury-free illumination with zero costly bulb replacements.',
    image: '/images/real-stock/casio-xj-v100w.jpg',
    fallbackImage: '/images/real-stock/casio-xj-s400un.jpg',
    gallery: ['/images/real-stock/casio-xj-v100w.jpg', '/images/real-stock/casio-xj-s400un.jpg'],
    keyFeatures: [
      '3,000 ANSI Lumens widescreen WXGA (1280 × 800) native clarity',
      'Flexible 1.5x manual optical zoom simplifies existing mount retrofits',
      '20,000-hour Laser & LED hybrid light source eliminates lamp changes',
      'Dust-resistant Japanese chassis ideal for high-uptime classrooms'
    ],
    specs: {
      'Manufacturer': 'CASIO Computer Ltd Japan',
      'Model Number': 'XJ-V100W',
      'Brightness': '3,000 ANSI Lumens',
      'Native Resolution': 'WXGA (1280 × 800), 16:10',
      'Optical Zoom': '1.5x Manual Optical Zoom',
      'Light Source Life': 'Up to 20,000 Hours (Mercury Free)',
      'Inputs': 'HDMI Type-A, VGA Mini D-Sub 15-pin, RS-232C, Audio Out'
    },
    applications: [
      'School & College Classrooms',
      'Corporate Training Rooms',
      'Retrofit Ceiling Mount Installations'
    ]
  },

  // =========================================================================
  // PRIORITY 3: PROJECTION SCREENS (WALL-MOUNTED + PORTABLE TRIPOD + MOTORIZED)
  // =========================================================================
  {
    id: 'wall-mounted-projection-screen',
    name: 'Wall-Mounted Projection Screen',
    category: 'projection-screens',
    categoryLabel: 'Projection Screens',
    subType: 'Wall-Mounted Screen',
    tagline: 'Auto-Locking Wall & Ceiling Pull-Down Matte White Screen (6×6 to 12×9 ft)',
    modelNumber: 'KAV-SCR-WALL',
    availableSizes: ['6 × 6 ft', '8 × 6 ft', '10 × 8 ft', '12 × 9 ft'],
    stockStatus: 'Ready Stock · Multiple Sizes',
    description: 'Heavy-duty octagonal white steel housing engineered for flush wall or ceiling installation in classrooms and corporate rooms. Built with a reliable slow-retract auto-locking ratchet roller allowing stops at any height interval.',
    image: '/images/real-stock/wall-screen-clean.jpg',
    fallbackImage: '/images/real-stock/tripod-screen.jpg',
    gallery: ['/images/real-stock/wall-screen-clean.jpg'],
    keyFeatures: [
      'Available Sizes: 6 × 6 ft, 8 × 6 ft, 10 × 8 ft, and 12 × 9 ft',
      'Smooth auto-locking spring mechanism holds securely at any drop level',
      'Universal dual wall/ceiling end-cap brackets for concrete or gypsum',
      '4-side black framing border maximizes perceived projector contrast'
    ],
    specs: {
      'Screen Type': 'Wall-Mounted / Ceiling Manual Pull-Down',
      'Available Sizes': '6 × 6, 8 × 6, 10 × 8, 12 × 9 ft',
      'Fabric Surface': 'Anti-Curl Matte White Fiber Screen (1.1 Gain)',
      'Viewing Angle': '160° Wide Viewing Field',
      'Casing': 'Powder-Coated White Heavy-Gauge Steel'
    },
    applications: [
      'Permanent University & School Classrooms',
      'Corporate Meeting Rooms',
      'Institutional Seminar Halls'
    ]
  },
  {
    id: 'tripod-stand-projection-screen',
    name: 'Portable Tripod / Stand Projection Screen',
    category: 'projection-screens',
    categoryLabel: 'Projection Screens',
    subType: 'Portable Tripod / Stand Screen',
    tagline: 'Folding Heavy-Duty Tripod Floor Stand with High-Gain Matte White Surface',
    modelNumber: 'KAV-SCR-TRIPOD',
    availableSizes: ['6 × 6 ft', '8 × 6 ft', '10 × 8 ft'],
    stockStatus: 'Ready Stock · Multiple Sizes',
    description: 'Portable heavy-duty Tripod / Stand Projection Screen engineered for mobile presentations, multi-room campus sharing, and training seminars. Features an integrated keystone eliminator bar, anti-skid rubber leg caps, and anti-crease matte white fabric.',
    image: '/images/real-stock/tripod-screen.jpg',
    fallbackImage: '/images/products/product_15.jpg',
    gallery: ['/images/real-stock/tripod-screen.jpg', '/images/products/product_15.jpg'],
    keyFeatures: [
      'Available Sizes: 6 × 6 ft, 8 × 6 ft, and 10 × 8 ft',
      '1.1 Gain matte white fiberglass vinyl fabric with black masking borders',
      '160-degree wide viewing field for crisp multi-angle audience visibility',
      'Reinforced folding steel tripod legs with quick cam-lock height adjuster'
    ],
    specs: {
      'Screen Type': 'Portable Tripod / Floor Stand',
      'Standard Sizes': '6 × 6 ft, 8 × 6 ft, 10 × 8 ft',
      'Fabric Surface': 'Matte White with Black Lightproof Backing',
      'Viewing Angle': '160° Wide Viewing Angle',
      'Optical Gain': '1.1 Gain'
    },
    applications: [
      'Mobile Classroom & Training Lectures',
      'Off-Site Corporate Seminars',
      'Multi-Room Campus Presentations'
    ]
  },
  {
    id: 'electric-motorized-projection-screen',
    name: 'Electric Motorized RF Projection Screen',
    category: 'projection-screens',
    categoryLabel: 'Projection Screens',
    subType: 'Electric Motorized Screen',
    tagline: 'Silent Tubular Motor with RF Wireless Remote & Wall Switch (Up to 13×10 ft)',
    modelNumber: 'KAV-SCR-MOTOR',
    availableSizes: ['6 × 6 ft', '8 × 6 ft', '10 × 8 ft', '12 × 9 ft', '13 × 10 ft'],
    stockStatus: 'Ready Stock · Full Size Range',
    description: 'Executive electric motorized projection screen powered by a quiet tubular motor with wireless RF remote control and wired wall control box. Covers every institutional dimension from 6 × 6 ft seminar rooms up to grand 13 × 10 ft auditorium stages.',
    image: '/images/real-stock/wall-screen-clean.jpg',
    fallbackImage: '/images/real-stock/tripod-screen.jpg',
    gallery: ['/images/real-stock/wall-screen-clean.jpg'],
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
  // PRIORITY 4: DIGITAL PODIUMS (BLACK & WHITE VARIANTS)
  // =========================================================================
  {
    id: 'black-digital-podium',
    name: 'Black Digital Podium (Audio & Microphone Lectern)',
    category: 'digital-podiums',
    categoryLabel: 'Digital Podiums',
    subType: 'Black Finish Variant',
    tagline: 'Sleek Black Finish · Dual Gooseneck + 2 Wireless Mics · 60W Output · 29 kg',
    modelNumber: 'KAV-DP-BLK-60W',
    availableSizes: ['Black Finish', '580 × 420 × 1100 mm'],
    stockStatus: 'Ready Stock · Islamabad',
    description: 'Modern sleek Black Digital Podium engineered for lecture halls, auditoriums, and training rooms. Features dual flexible gooseneck microphone and LED reading lamp, 2 wireless handheld microphones, high-performance 60W audio output (100W power consumed), and an integrated MP3/USB/SD/AUX control panel inside a solid 29 kg chassis (580 × 420 × 1100 mm).',
    image: '/images/real-stock/digital-podium-black.jpg',
    fallbackImage: '/images/products/product_13.jpg',
    gallery: [
      '/images/real-stock/digital-podium-black.jpg',
      '/images/products/product_13.jpg'
    ],
    keyFeatures: [
      'Dual Gooseneck Mic & Reading Lamp + 2 Wireless Handheld Microphones',
      'High-Performance 60W Audio Output (100W Total Power Consumption)',
      'Built-in MP3 / USB / SD Card / AUX Audio Control Console',
      'Dimensions: 580 × 420 × 1100 mm with Solid 29 kg Stable Build Weight',
      'Front Column Acoustic Speakers deliver crisp room speech coverage'
    ],
    specs: {
      'Variant': 'Black Digital Podium',
      'Dimensions': '580 × 420 × 1100 mm',
      'Weight': '29 kg Solid Chassis',
      'Audio Output / Power': '60W High-Performance Audio Output (100W Consumed)',
      'Microphones Included': 'Dual Gooseneck Setup + 2 Wireless Handheld Microphones',
      'Control Panel': 'Built-in MP3 / USB / SD Card / AUX Inputs & Tone Mixer',
      'Power Supply': 'AC 220–240V 50/60Hz'
    },
    applications: [
      'University Classrooms & Lecture Halls',
      'Corporate Seminar & Briefing Rooms',
      'Auditoriums & Ceremonial Halls'
    ]
  },
  {
    id: 'white-digital-podium',
    name: 'White Digital Podium (Interactive & Audio Lectern Variant)',
    category: 'digital-podiums',
    categoryLabel: 'Digital Podiums',
    subType: 'White Finish Variant',
    tagline: 'Architectural White Finish · Integrated Touch / Audio Control · 580×420×1100 mm',
    modelNumber: 'KAV-DP-WHT-60W',
    availableSizes: ['White Finish', 'Interactive & Audio Editions'],
    stockStatus: 'Ready Stock · Islamabad',
    description: 'Crisp White Digital Podium variant engineered to complement modern bright classrooms, medical auditoriums, and research centers. Available with dual gooseneck microphones, 2 wireless handheld microphones, 60W internal audio system, MP3/USB/SD/AUX inputs, and optional embedded multi-touch presentation monitor.',
    image: '/images/products/product_9.jpg',
    fallbackImage: '/images/products/product_10.jpg',
    gallery: [
      '/images/products/product_9.jpg',
      '/images/products/product_10.jpg',
      '/images/products/product_8.jpg'
    ],
    keyFeatures: [
      'Architectural White Finish complementing modern campuses & boardrooms',
      'Available in Audio Podium (60W / 29 kg) & Interactive Touch Monitor configurations',
      'Dual Gooseneck Mic Support + 2 Wireless Handheld Microphones',
      'Built-in MP3 / USB / SD / AUX media panel + laptop HDMI/VGA interface'
    ],
    specs: {
      'Variant': 'White Digital Podium',
      'Dimensions': '580 × 420 × 1100 mm (Audio Series) / Custom Touch Rostrum',
      'Weight': '29 kg (Audio Series)',
      'Audio System': '60W Audio Output (100W Power Consumption)',
      'Microphones': 'Dual Gooseneck + 2 Wireless Handheld Microphones',
      'Media Panel': 'MP3 / USB / SD / AUX Control Panel & Display Output'
    },
    applications: [
      'Modern Bright University Halls',
      'Medical Colleges & Hospital Auditoriums',
      'Executive Research Briefings'
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
  // PRIORITY 5A: VIDEO CONFERENCING SYSTEMS (TENVEO TEVO-VA3000 / TEVO-VA3000E)
  // & BETERVA BE-2300 DISCUSSION SERIES
  // =========================================================================
  {
    id: 'tenveo-va3000e-conference-system',
    name: 'Tenveo TEVO-VA3000 / TEVO-VA3000E All-in-One Video & Audio Conference System',
    category: 'conference-systems',
    categoryLabel: 'Video Conferencing & Conference Systems',
    subType: 'All-in-One Video Conferencing',
    tagline: '10X Lossless Zoom PTZ · HD 1080p @ 30fps · Speakerphone + Optional 2 Expansion Mics',
    modelNumber: 'TEVO-VA3000 / TEVO-VA3000E',
    brand: 'Tenveo',
    availableSizes: ['TEVO-VA3000 Group', 'TEVO-VA3000E (+2 Expansion Mics)'],
    stockStatus: 'Ready Stock · Islamabad',
    description: 'Complete Tenveo TEVO-VA3000 / TEVO-VA3000E Group Video & Audio Conference System engineered for medium-to-large boardrooms accommodating up to 25 people. Combines a 10X lossless optical zoom HD 1080p@30fps PTZ camera (51.3° FOV, 350° pan / 90° tilt), full-duplex speakerphone, central connection hub, IR remote control, Bluetooth & USB plug-and-play, and optional 2 expansion microphones (TEVO-VA3000E). Compatible with Zoom, Microsoft Teams, Cisco WebEx, Polycom & Skype.',
    image: '/images/real-stock/tenveo-va3000e.jpg',
    fallbackImage: '/images/real-stock/tenveo-va3000.jpg',
    gallery: ['/images/real-stock/tenveo-va3000e.jpg', '/images/real-stock/tenveo-va3000.jpg'],
    keyFeatures: [
      '10X Lossless Optical Zoom PTZ Camera with HD 1080p @ 30fps video clarity',
      '51.3° Wide Field of View with 350° smooth pan & 90° tilt motorization',
      'Full-duplex Speakerphone + Connection Hub + IR Remote Control included',
      'Bluetooth & USB plug-and-play; TEVO-VA3000E adds 2 wired Expansion Mics',
      'Seamless compatibility with Zoom, Microsoft Teams, Cisco WebEx & Polycom (up to 25 people)'
    ],
    specs: {
      'Manufacturer / Model': 'Tenveo TEVO-VA3000 / TEVO-VA3000E Group System',
      'Camera & Zoom': '10X Lossless Optical Zoom PTZ · HD 1080p @ 30fps',
      'Field of View & Movement': '51.3° FOV · 350° Horizontal Pan · 90° Vertical Tilt',
      'Audio Architecture': 'Full-Duplex Speakerphone + Optional 2 Expansion Mics (VA3000E)',
      'Connectivity': 'USB Plug-and-Play (via Hub) & Bluetooth + IR Remote Control',
      'Room Capacity': 'Medium-to-Large Conference Rooms (Up to 25 Participants)',
      'Platform Compatibility': 'Zoom, Microsoft Teams, Cisco WebEx, Polycom, Google Meet'
    },
    applications: [
      'Corporate Boardrooms & Executive Suites',
      'Hybrid University Classrooms & Tele-Teaching',
      'Government & Diplomatic Video Conferencing'
    ]
  },
  {
    id: 'beterva-be2300-chairman-unit',
    name: 'BETERVA BE-2300 Chairman Unit',
    category: 'conference-systems',
    categoryLabel: 'Video Conferencing & Conference Systems',
    subType: 'Chairman Discussion Unit',
    tagline: 'Priority Override Control with Red-Ring Condenser Mic & Auto-Mute Speaker',
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
    categoryLabel: 'Video Conferencing & Conference Systems',
    subType: 'Delegate Discussion Unit',
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
    categoryLabel: 'Video Conferencing & Conference Systems',
    subType: 'Central Control Unit',
    tagline: 'Master Discussion System Processor Supporting Up to 60–120 Units',
    modelNumber: 'BE-2300M / BE-1000',
    brand: 'Beterva Audio Visual Company',
    stockStatus: 'Authorized Partner · Islamabad',
    description: 'The central processing and power hub for BETERVA BE-2300 conference installations. Supplies clean 24V DC power to connected Chairman and Delegate microphones, enforces speaking modes (Free, FIFO, Limit), prevents acoustic feedback, and provides balanced XLR/RCA outputs.',
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
  // PRIORITY 5B: TELEPROMPTERS (STAGE MONITOR / FLOOR CAPTIONER TP27–TP100)
  // =========================================================================
  {
    id: 'stage-teleprompter-tp27-tp32',
    name: 'Stage / Floor Teleprompter (TP27 & TP32 — 27" & 32" Full HD)',
    category: 'teleprompters',
    categoryLabel: 'Teleprompters (Stage & Floor Series)',
    subType: '27" & 32" Stage Monitor Style',
    tagline: '1920×1080 Full HD · Stage Floor Captioner · Foot Pedal, Remote & HDMI/SDI/Wireless',
    modelNumber: 'TP27 / TP32',
    brand: 'Shaoguan Huangsheng / King',
    availableSizes: ['27" (TP27)', '32" (TP32)'],
    stockStatus: 'Ready Stock · Islamabad',
    description: 'Low-profile Stage Monitor / Floor Captioner teleprompter designed to resemble an acoustic wedge monitor on stage aprons and podium floors. Features 1920×1080 Full HD high-brightness displays in 27" (TP27) and 32" (TP32) sizes with included Foot Pedal, Wireless Remote Control, and HDMI / SDI / Wireless video inputs.',
    image: '/images/products/product_2.jpg',
    fallbackImage: '/images/products/product_2.jpg',
    gallery: ['/images/products/product_2.jpg'],
    keyFeatures: [
      'Models TP27 (27-inch) & TP32 (32-inch) with 1920 × 1080 Full HD panels',
      'Stage Monitor / Floor Captioner low-profile wedge cabinet blends cleanly on stage',
      'Includes Hands-Free Foot Pedal + Wireless Remote Speed Controller',
      'Supports HDMI, 3G-SDI & Wireless Presenter Script Sync'
    ],
    specs: {
      'Manufacturer': 'Shaoguan Huangsheng / King Prompter',
      'Models': 'TP27 (27") & TP32 (32")',
      'Resolution': '1920 × 1080 Full HD',
      'Enclosure Style': 'Stage Monitor / Floor Captioner Wedge',
      'Controls': 'Foot Pedal & Wireless Remote Control',
      'Video Inputs': 'HDMI, SDI & Wireless Input Support'
    },
    applications: [
      'Auditorium & Convocation Stages',
      'VIP Diplomatic Addresses',
      'Broadcast & E-Learning Sets'
    ]
  },
  {
    id: 'stage-teleprompter-tp43-tp55-tp65',
    name: 'Stage / Floor Teleprompter (TP43, TP55 & TP65 — 43" to 65")',
    category: 'teleprompters',
    categoryLabel: 'Teleprompters (Stage & Floor Series)',
    subType: '43"–65" Stage Monitor Series',
    tagline: '1920×1080 Full HD · Medium-to-Large Stage Captioner · Foot Pedal & Remote',
    modelNumber: 'TP43 / TP55 / TP65',
    brand: 'Shaoguan Huangsheng / King',
    availableSizes: ['43" (TP43)', '55" (TP55)', '65" (TP65)'],
    stockStatus: 'Ready Stock · Islamabad',
    description: 'Mid-to-large auditorium Stage Monitor / Floor Captioner teleprompter series (43", 55", and 65"). Engineered for wide conference halls, political keynotes, and university convocations with high-contrast 1920×1080 Full HD screens, dual Foot Pedal & Remote controls, and HDMI / SDI / Wireless connectivity.',
    image: '/images/products/product_2.jpg',
    fallbackImage: '/images/products/product_2.jpg',
    gallery: ['/images/products/product_2.jpg'],
    keyFeatures: [
      'Models TP43 (43"), TP55 (55") & TP65 (65") 1920×1080 Full HD Panels',
      'Wide-angle Stage Monitor / Floor Captioner housing clearly readable under stage lighting',
      'Dual Control Support: Speaker Foot Pedal + Operator Remote Control',
      'Redundant HDMI, 3G-SDI & Wireless signal inputs'
    ],
    specs: {
      'Manufacturer': 'Shaoguan Huangsheng / King Prompter',
      'Models': 'TP43 (43"), TP55 (55"), TP65 (65")',
      'Resolution': '1920 × 1080 Full HD (High-Luminance Anti-Glare)',
      'Enclosure Style': 'Stage Monitor / Floor Captioner',
      'Controls': 'Foot Pedal & Remote Control Included',
      'Inputs': 'HDMI, SDI, Wireless Casting & Mirror Flip'
    },
    applications: [
      'University Convocation Auditoriums',
      'National Keynotes & Conference Stages',
      'Parliamentary & Ceremony Halls'
    ]
  },
  {
    id: 'stage-teleprompter-tp75-tp85-tp100',
    name: 'Large Venue Stage Teleprompter (TP75, TP85 & TP100 — 75" to 100")',
    category: 'teleprompters',
    categoryLabel: 'Teleprompters (Stage & Floor Series)',
    subType: '75"–100" Grand Hall & Arena Series',
    tagline: 'Long-Throw Full HD Stage Prompting · Foot Pedal, Remote & HDMI/SDI/Wireless',
    modelNumber: 'TP75 / TP85 / TP100',
    brand: 'Shaoguan Huangsheng / King',
    availableSizes: ['75" (TP75)', '85" (TP85)', '100" (TP100)'],
    stockStatus: 'Institutional Order · Islamabad',
    description: 'Flagship long-range Stage Monitor / Floor Captioner teleprompters in 75", 85", and 100" sizes for mega-venues, convention arenas, and state VIP ceremonies. Features 1920×1080 Full HD optical clarity, heavy-duty stage floor framing, Foot Pedal, Remote Control, and HDMI / SDI / Wireless video links.',
    image: '/images/products/product_2.jpg',
    fallbackImage: '/images/products/product_2.jpg',
    gallery: ['/images/products/product_2.jpg'],
    keyFeatures: [
      'Mega-Stage Models: TP75 (75"), TP85 (85") & TP100 (100")',
      'Crisp 1920 × 1080 Full HD display readable across deep arena stages',
      'Stage Monitor / Floor Captioner silhouette keeps camera lines clean',
      'Includes Foot Pedal, Wireless Remote Control & HDMI / SDI / Wireless inputs'
    ],
    specs: {
      'Manufacturer': 'Shaoguan Huangsheng / King Prompter',
      'Models': 'TP75 (75"), TP85 (85"), TP100 (100")',
      'Resolution': '1920 × 1080 Full HD',
      'Style': 'Stage Monitor / Floor Captioner',
      'Controls': 'Foot Pedal & Remote Control',
      'Inputs': 'HDMI, SDI & Wireless Input Support'
    },
    applications: [
      'Mega Convention Halls & Arenas',
      'State VIP Ceremonies',
      'National Broadcast Stage Productions'
    ]
  },

  // =========================================================================
  // SUPPORTING CATEGORY 7: AUDIO EQUIPMENT
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
    stockStatus: 'Authorized Partner · Islamabad',
    description: 'Professional 19-inch rackmount public address mixer amplifier from CMX Audio. Engineered for continuous school, mosque, campus, and conference audio distribution featuring multi-voltage speaker outputs, priority mic mute, and built-in media player.',
    image: '/images/real-stock/cmx-ea-amplifier.png',
    fallbackImage: '/images/products/product_4.jpg',
    gallery: ['/images/real-stock/cmx-ea-amplifier.png'],
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
    stockStatus: 'Authorized Partner · Islamabad',
    description: 'Commercial dual-channel UHF wireless microphone system by CMX Audio offering 200 selectable channels, IR auto-frequency pairing, bright LCD display receivers, and crisp interference-free transmission up to 100 meters.',
    image: '/images/products/product_5.jpg',
    fallbackImage: '/images/real-stock/cmx-ea-amplifier.png',
    gallery: ['/images/products/product_5.jpg', '/images/real-stock/cmx-ea-amplifier.png'],
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
    stockStatus: 'Ready Stock · Islamabad',
    description: 'High-sensitivity wired microphones for podiums, boardroom desks, and auditorium stages. Includes heavy weighted desktop bases with 420mm dual-flex gooseneck stems and cardioid XLR vocal microphones resistant to stage feedback.',
    image: '/images/products/product_3.jpg',
    fallbackImage: '/images/products/product_16.jpg',
    gallery: ['/images/products/product_3.jpg', '/images/products/product_16.jpg'],
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
    tagline: 'Rechargeable Trolley PA System with Wireless Mic for Halls & Classes',
    modelNumber: 'KAV-EDIFIER-PA',
    brand: 'Edifier',
    stockStatus: 'Ready Stock · Islamabad',
    description: 'Mobile high-output PA sound system on heavy-duty transport wheels with retractable handle, Bluetooth, USB, Aux inputs, and included wireless microphone—ideal for mobile classrooms, assemblies, and multi-room seminars.',
    image: '/images/products/product_4.jpg',
    fallbackImage: '/images/real-stock/cmx-ea-amplifier.png',
    gallery: ['/images/products/product_4.jpg'],
    keyFeatures: [
      'Included UHF wireless microphone with dedicated channel volume & echo',
      'Internal high-capacity battery supports cordless mobility anywhere on campus',
      'Retractable trolley handle and shock-absorbing floor wheels',
      'Bluetooth, USB MP3 playback, FM & Line Inputs'
    ],
    specs: {
      'Configuration': 'Portable Trolley Active PA Speaker',
      'Microphones': '1× Wireless Handheld Mic + Wired Mic Input',
      'Connectivity': 'Bluetooth, USB, TF Card, Aux In',
      'Portability': 'Integrated Pull Handle & Rolling Wheels'
    },
    applications: [
      'School Morning Assemblies',
      'Mobile Outdoor Training & Workshops',
      'Multi-Room Faculty Presentations'
    ]
  },

  // =========================================================================
  // SUPPORTING CATEGORY 8: PROJECTOR MOUNTING KITS
  // =========================================================================
  {
    id: 'universal-ceiling-projector-mount',
    name: 'Universal Heavy-Duty Ceiling Projector Mounting Kit',
    category: 'projector-mounting-kits',
    categoryLabel: 'Projector Mounting Kits',
    tagline: 'Adjustable 4-Arm Spider Plate with 360° Swivel & Tilt Lock',
    modelNumber: 'KAV-PMK-CEIL',
    stockStatus: 'Ready Stock · Islamabad',
    description: 'Commercial-grade universal ceiling mount engineered from cold-rolled steel. Fits virtually all Casio and Mitsubishi projectors with precision tilt, roll, and yaw micro-adjustment plus concealed internal cable routing.',
    image: '/images/real-stock/projector-ceiling-mount.jpg',
    fallbackImage: '/images/real-stock/projector-ceiling-mount.jpg',
    gallery: ['/images/real-stock/projector-ceiling-mount.jpg'],
    keyFeatures: [
      'Universal 4-arm adjustable mounting spider fits Casio & Mitsubishi chassis',
      'Telescopic height extension from 17.5" to 25.5" (extended poles available)',
      '360° horizontal rotation & ±15° tilt alignment with locking knobs',
      'Internal cable routing column conceals HDMI and AC power leads',
      'Complete M4/M5/M6 bolt kit, concrete anchors & Allen wrenches included'
    ],
    specs: {
      'Load Capacity': 'Up to 25 kg (55 lbs)',
      'Material': 'Heavy-Gauge Cold-Rolled Steel Column',
      'Drop Range': '17.5" – 25.5" Standard (Extended 3ft–6ft options)',
      'Tilt / Swivel': '±15° Pitch / Roll, 360° Yaw Swivel',
      'Finish': 'Powder-Coated Matte White / Black'
    },
    applications: [
      'Concrete & False-Ceiling Classrooms',
      'Auditoriums & High-Ceiling Halls',
      'Boardroom Projection Setups'
    ]
  },
  {
    id: 'short-throw-wall-projector-mount',
    name: 'Short-Throw Wall-Mount Projector Bracket Kit',
    category: 'projector-mounting-kits',
    categoryLabel: 'Projector Mounting Kits',
    tagline: 'Telescopic Wall Boom Arm for Interactive Boards & Short-Throw Lenses',
    modelNumber: 'KAV-PMK-WALL',
    stockStatus: 'Ready Stock · Islamabad',
    description: 'Rigid wall-mounted boom bracket engineered specifically for short-throw projectors mounted directly above whiteboards or interactive walls.',
    image: '/images/real-stock/projector-ceiling-mount.jpg',
    fallbackImage: '/images/real-stock/projector-ceiling-mount.jpg',
    gallery: ['/images/real-stock/projector-ceiling-mount.jpg'],
    keyFeatures: [
      'Telescopic horizontal wall arm extends cleanly above whiteboards',
      'Heavy steel wall gusset eliminates arm sag',
      'Fine 3-axis alignment screws keep screen edges square',
      'Concealed cable management channel with hardware included'
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
  // SUPPORTING SOLUTIONS (SMART CLASSROOMS & VIDEO CONFERENCING ROOMS)
  // =========================================================================
  {
    id: 'turnkey-smart-classroom-bundle',
    name: 'Complete Turnkey Smart Classroom Solution Package',
    category: 'smart-classroom-solutions',
    categoryLabel: 'Smart Classroom Solutions',
    tagline: 'Integrated Hardware Package: Interactive LED, Digital Podium, Projector & Tenveo',
    modelNumber: 'KAV-CLASSROOM-BUNDLE',
    stockStatus: 'Turnkey Solution',
    description: 'Complete all-in-one smart classroom package engineered by Kohinoor Audio Visual. Unifies an Interactive LED Flat Panel (75" or 86"), Black or White Digital Podium (60W audio), Casio LampFree or Mitsubishi 8000 Series projection, Tenveo TEVO-VA3000E video conferencing, and nationwide installation.',
    image: '/images/client-uploads/upload_5.jpg',
    fallbackImage: '/images/products/product_6.jpg',
    gallery: [
      '/images/client-uploads/upload_5.jpg',
      '/images/real-stock/digital-podium-black.jpg',
      '/images/products/product_6.jpg'
    ],
    keyFeatures: [
      'Interactive 75" or 86" 4K Flat Panel with Dual Android & Windows OPS',
      'Black or White Digital Podium with 60W audio, gooseneck & wireless mics',
      'Tenveo TEVO-VA3000E Video Conferencing + CMX Audio reinforcement',
      'Nationwide on-site installation, cabling, faculty training & warranty'
    ],
    specs: {
      'Interactive Display': '75" or 86" 4K UHD 20-Point Touch LED',
      'Podium': 'Black or White Digital Podium (580×420×1100 mm, 60W Audio)',
      'Video Conferencing': 'Tenveo TEVO-VA3000E (10X Zoom + Speakerphone + 2 Mics)',
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
  email: 'kohinoor_ibd@yahoo.co.uk',
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
