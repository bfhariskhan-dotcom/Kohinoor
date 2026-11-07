import { Product } from '../types';

export const CATEGORIES = [
  {
    id: 'digital-podiums',
    name: 'Digital Podiums',
    slug: 'digital-podiums',
    tagline: 'Interactive Teaching & Presentation Rostrums with Integrated Touch & Audio',
    description: 'All-in-one steel digital rostrums featuring 21.5" to 43" multi-touch interactive displays, built-in AV controllers, powerful 60W amplifiers, and gooseneck microphones.',
    heroImage: '/images/products/product_13.jpg',
    features: ['21.5", 32" & 43" Touch Displays', 'Built-in 60W Amplifier & Speakers', 'Professional Gooseneck Mic', 'HDMI, USB & LAN Hub', 'Centralized Key Lock']
  },
  {
    id: 'multimedia-projectors',
    name: 'Multimedia Projectors',
    slug: 'multimedia-projectors',
    tagline: 'High-Lumen 3LCD & DLP Projection Systems for Auditoriums & Classrooms',
    description: 'Professional multimedia projectors from 3500 to 5000+ ANSI lumens engineered for universities, colleges, and training halls, accompanied by heavy-duty projection screens.',
    heroImage: '/images/multimedia_projector_pro_1793992811682.jpg',
    features: ['3500 – 5000+ Lumens Brightness', '3LCD & DLP Optical Technologies', 'Wireless Projection & Screen Sharing', 'Heavy-Duty Tripod & Motorized Screens', 'Bulk Institutional Supply Available']
  },
  {
    id: 'interactive-led-displays',
    name: 'Interactive Flat Panel LEDs',
    slug: 'interactive-led-displays',
    tagline: '4K Ultra HD Multi-Touch Smart Displays from 55" to 110"',
    description: 'Next-generation interactive touch screens with 4K UHD anti-glare tempered glass, dual OS (Android & Windows OPS), multi-touch writing, and wireless device mirroring.',
    heroImage: '/images/products/product_6.jpg',
    features: ['Sizes: 55", 65", 75", 85", 86", 98", 110"', 'True 4K UHD Resolution & 20-Point Touch', 'Dual OS (Android 13 + Windows OPS)', 'Digital Whiteboard & Annotation Software', 'Mobile Trolley Carts with Castors']
  },
  {
    id: 'conference-systems',
    name: 'Conference Room Systems',
    slug: 'conference-systems',
    tagline: 'Chairman & Delegate Discussion Units, DSP Audio & Wireless Microphones',
    description: 'Complete board-level conference solutions with priority speech control, feedback suppression, high-sensitivity goosenecks, Sennheiser & Beterva systems, and vocal microphones.',
    heroImage: '/images/products/product_11.jpg',
    features: ['Chairman Priority Speech Override', 'Daisy-Chain & UHF Wireless Options', 'Sennheiser & Beterva Discussion Sets', 'True Diversity Wireless Vocal Mics', 'DSP Digital Acoustic Processing']
  },
  {
    id: 'ptz-robotic-cameras',
    name: 'PTZ Robotic Cameras',
    slug: 'ptz-robotic-cameras',
    tagline: '4K AI Auto-Tracking & Optical Zoom Remote-Controlled Cameras',
    description: 'Precision robotic PTZ cameras engineered for smart classrooms, hybrid lecture recording, council chambers, and live video streaming with seamless presenter auto-tracking.',
    heroImage: '/images/ptz_camera_tracking_1793992811906.jpg',
    features: ['4K Ultra HD & 60fps Recording', 'AI Presenter Auto-Tracking (No Lanyard)', '12x / 20x Smooth Optical Zoom', 'HDMI, USB 3.0, IP & NDI|HX Support', 'Quiet Motorized Pan-Tilt Drive']
  },
  {
    id: 'smart-classroom-solutions',
    name: 'Smart Classroom Solutions',
    slug: 'smart-classroom-solutions',
    tagline: 'Turnkey Educational Technology Integration Across Pakistan',
    description: 'Complete institutional packages combining digital podiums, interactive flat panels, high-lumen projectors, audio dispersion, and faculty training for universities and colleges.',
    heroImage: '/images/hero_av_solutions_1793992811053.jpg',
    features: ['End-to-End Turnkey Hardware Setup', 'Acoustic & Audio Optimization', 'Faculty Training & Handover', 'Nationwide On-Site Installation', 'Ongoing Maintenance & Support']
  }
];

export const PRODUCTS: Product[] = [
  // 1. DIGITAL PODIUMS
  {
    id: 'digital-rostrum-computer-sound',
    name: 'Digital Rostrum with Built-in Computer & Sound System',
    category: 'digital-podiums',
    categoryLabel: 'Digital Podiums',
    tagline: 'Signature Institutional Digital Rostrum with 21.5" Touch LCD and Integrated AV Controller',
    modelNumber: 'KAV-DR215-PRO',
    description: 'The premier institutional digital rostrum supplied by Kohinoor Audio Visual. Engineered with high-grade cold-rolled steel, featuring an integrated 21.5-inch multi-touch screen, built-in central AV controller, powerful 60-Watt amplifier, twin 30-Watt speakers, and a sensitive gooseneck microphone.',
    image: '/images/products/product_13.jpg',
    fallbackImage: 'https://i.postimg.cc/FH55QNDW/Whats-App-Image-2026-11-06-at-7-55-36-PM-(1).jpg',
    gallery: [
      '/images/products/product_13.jpg',
      '/images/products/product_14.jpg'
    ],
    keyFeatures: [
      'Dimensions: 1200mm (W) x 700mm (D) x 950mm (H)',
      'Built-in Master AV Controller with centralized port management',
      '21.5-Inch High-Definition Multi-Touch LCD Screen',
      'Built-in 60 Watt High-Fidelity Audio Amplifier',
      '01 Pair of 30 Watt Integrated Stereo Speakers included',
      'Flexible Professional Gooseneck Microphone included',
      'Secure lockable chassis with internal PC tray and cable raceways'
    ],
    specs: {
      'Overall Dimensions': '1200 x 700 x 950 mm',
      'Interactive Screen': '21.5" Full HD Capacitive Touch LCD',
      'Amplifier Power': '60W High-Efficiency Built-in Amp',
      'Loudspeakers': '01 Pair (2 x 30W) Integrated High-Dispersion Speakers',
      'Microphone': 'Cardioid Dynamic Gooseneck Microphone with LED Ring',
      'AV Controller': 'Built-in switching for HDMI, VGA, Audio & USB',
      'Connectivity': 'HDMI, VGA, USB 3.0, 3.5mm Audio, RJ-45 LAN, AC Power',
      'Construction': 'Cold-rolled steel with electrostatic scratch-resistant coating'
    },
    applications: [
      'University Lecture Halls',
      'Auditoriums & Convocation Centers',
      'Government Briefing Rooms',
      'Corporate Boardrooms'
    ]
  },
  {
    id: 'smart-curved-digital-podium-32',
    name: 'Smart Aerodynamic Digital Touch Podium (32-Inch)',
    category: 'digital-podiums',
    categoryLabel: 'Digital Podiums',
    tagline: 'Contemporary Ergonomic Presentation Rostrum with Wide Angle Touch Screen',
    modelNumber: 'KAV-CP32-SMART',
    description: 'A futuristic curved presentation podium featuring a spacious 32-inch commercial interactive touch display mounted at an ergonomic 45-degree speaking angle. Equipped with internal PC compartment, silent ventilation, and complete cable management.',
    image: '/images/products/product_10.jpg',
    fallbackImage: 'https://i.postimg.cc/kXt3ZBFk/Whats-App-Image-2026-11-06-at-7-55-35-PM-(1).jpg',
    gallery: [
      '/images/products/product_10.jpg',
      '/images/products/product_9.jpg'
    ],
    keyFeatures: [
      '32-Inch 10-Point Capacitive Multi-Touch Display',
      'Sculpted curved architectural pedestal design in satin white',
      '4-angle optimized visibility: Front, 45-degree, Side and Rear ports',
      'Internal mini-PC compartment with high-speed cooling',
      'Seamless connectivity: HDMI In/Out, USB 3.0 hub, LAN RJ45, Mic In',
      'Integrated cable pass-through for laptops and document cameras'
    ],
    specs: {
      'Screen Size': '32-inch Diagonal IPS Panel',
      'Resolution': '1920 x 1080 Full HD (4K options available)',
      'Touch Technology': '10-Point Projected Capacitive (PCAP)',
      'Viewing Angle': '45-degree ergonomic speaker incline',
      'I/O Ports': '2x HDMI, 4x USB, 1x LAN, 1x 3.5mm Audio Out, Power',
      'Chassis Material': 'Commercial Grade Aluminum Alloy & Steel',
      'Finish': 'Durable Powder-Coated Satin White'
    },
    applications: [
      'Executive Training Centers',
      'Medical Colleges & Teaching Hospitals',
      'International Conference Venues',
      'Modern High-Tech Classrooms'
    ]
  },
  {
    id: 'executive-presentation-podium-43',
    name: 'Executive 43-Inch Smart Touch Rostrum (NUST & NCAI Model)',
    category: 'digital-podiums',
    categoryLabel: 'Digital Podiums',
    tagline: 'Large Format Touch Presentation Podium Deployed at National Institutions',
    modelNumber: 'KAV-NCAI-43',
    description: 'The exact high-capacity digital podium model deployed by Kohinoor Audio Visual at premier Pakistani institutions, including the National Centre of Artificial Intelligence (NCAI) at NUST Islamabad. Features an expansive 43-inch touch surface for complex presentations, AI research demonstrations, and institutional branding.',
    image: '/images/products/product_8.jpg',
    fallbackImage: 'https://i.postimg.cc/VLbQTdBh/Whats-App-Image-2026-11-06-at-7-55-34-PM-(2).jpg',
    gallery: [
      '/images/products/product_8.jpg',
      '/images/products/product_9.jpg'
    ],
    keyFeatures: [
      'Massive 43-Inch Ultra HD Interactive Multi-Touch Surface',
      'Institutional front branding panel (customized with client crest/logo)',
      'Demonstrated deployment at NUST NCAI for national AI research',
      'Heavy-duty floor stability with hidden leveling casters',
      'Full compatibility with Windows, Linux and macOS hosts',
      'Supports dual-screen output for auditorium LED walls & projectors'
    ],
    specs: {
      'Display Size': '43-Inch Commercial IPS Touch Screen',
      'Resolution': '3840 x 2160 4K Ultra HD',
      'Touch Response': '< 8ms response time, 20-point touch',
      'Client Reference': 'National Centre of Artificial Intelligence (NCAI) / NUST',
      'Body Color': 'Architectural Clean White with Logo Decal Zone',
      'Power Rating': '100-240V AC 50/60Hz, 120W max'
    },
    applications: [
      'University Research Centers',
      'National Artificial Intelligence Labs',
      'High-Level Government Meeting Rooms',
      'Corporate Town Halls'
    ]
  },
  {
    id: 'vertical-digital-information-kiosk',
    name: 'Vertical Floor-Standing Smart Information Display Kiosk',
    category: 'digital-podiums',
    categoryLabel: 'Digital Podiums',
    tagline: 'Sleek Commercial Floor Stand Touch Kiosk for Orientation & Notice Boards',
    modelNumber: 'KAV-VK55-KIOSK',
    description: 'Commercial vertical floor-standing touch display designed for university campus lobbies, examination centers, corporate reception areas, and convention entrances. Perfect for displaying class schedules, wayfinding, and event programs.',
    image: '/images/products/product_1.jpg',
    fallbackImage: 'https://i.postimg.cc/sDZd8v9w/Whats-App-Image-2026-11-06-at-7-51-46-PM.jpg',
    gallery: [
      '/images/products/product_1.jpg'
    ],
    keyFeatures: [
      'Full-length slim vertical profile with tempered glass front',
      'Vibrant high-contrast commercial panel rated for 24/7 continuous operation',
      'Integrated Android / Windows media player with Wi-Fi & LAN',
      'Heavy weighted steel base plate preventing accidental tipping',
      'Centralized remote content management software support'
    ],
    specs: {
      'Display Orientation': 'Vertical Portrait (16:9)',
      'Panel Type': 'Commercial IPS LCD with LED Backlight',
      'Glass': '4mm Toughened Scratch-Proof Glass',
      'Operating System': 'Android / Windows Embedded',
      'Network': 'Wi-Fi 802.11 b/g/n, Gigabit Ethernet, USB OTG'
    },
    applications: [
      'University Department Foyers',
      'Examination & Registrar Notice Centers',
      'Hospital & Conference Wayfinding',
      'Corporate Headquarters Reception'
    ]
  },

  // 2. MULTIMEDIA PROJECTORS
  {
    id: 'pro-multimedia-projector-5000l',
    name: 'Professional 5000 Lumens Multimedia Projector',
    category: 'multimedia-projectors',
    categoryLabel: 'Multimedia Projectors',
    tagline: 'High-Brightness Laser/Lamp Projector for Large Lecture Halls & Auditoriums',
    modelNumber: 'KAV-PJ5000-HD',
    description: 'Engineered for high-ambient-light university lecture rooms and auditoriums, this 5000-lumen professional projector delivers razor-sharp text, vivid educational diagrams, and seamless high-definition video projection.',
    image: '/images/multimedia_projector_pro_1793992811682.jpg',
    fallbackImage: '/images/multimedia_projector_pro_1793992811682.jpg',
    gallery: [
      '/images/multimedia_projector_pro_1793992811682.jpg',
      '/images/products/product_15.jpg'
    ],
    keyFeatures: [
      '5000 ANSI Lumens Brightness for bright daylight classrooms',
      'Advanced 3LCD & DLP Optical Processing for true color fidelity',
      'WUXGA (1920 x 1200) & 4K Input Support',
      'Dual HDMI, VGA, LAN, Audio In/Out, and USB Type-A Power',
      'Wireless projection capability for laptops, smartphones, and tablets',
      'Bulk supply and institution-wide installation packages across Pakistan'
    ],
    specs: {
      'Brightness': '5,000 ANSI Lumens',
      'Native Resolution': 'WUXGA (1920 x 1200) / 1080p Full HD',
      'Contrast Ratio': '20,000:1 Dynamic Contrast',
      'Projection Technology': '3LCD / DLP Engine',
      'Lamp/Laser Life': 'Up to 20,000 hours in Eco Mode',
      'Keystone Correction': 'Vertical & Horizontal +/- 30 degrees, Corner Fit',
      'Network Management': 'Crestron, AMX, PJLink & LAN Control'
    },
    applications: [
      'University Auditoriums & Amphitheaters',
      'College Multipurpose Halls',
      'Training Academies & Seminaries',
      'Government Assembly Chambers'
    ]
  },
  {
    id: 'heavy-duty-tripod-projection-screen',
    name: 'Heavy-Duty Tripod Portable Projection Screen',
    category: 'multimedia-projectors',
    categoryLabel: 'Multimedia Projectors',
    tagline: 'Rugged Aluminum Tripod Projection Screen with High-Gain Matte White Surface',
    modelNumber: 'KAV-SCR-TRIPOD',
    description: 'A robust, field-tested tripod projection screen designed for mobile lectures, temporary workshops, and educational setups. Features a reinforced steel tripod mechanism, self-locking height handle, and seamless matte white fabric.',
    image: '/images/products/product_15.jpg',
    fallbackImage: 'https://i.postimg.cc/2SRRfr2t/Whats-App-Image-2026-11-06-at-7-55-37-PM.jpg',
    gallery: [
      '/images/products/product_15.jpg'
    ],
    keyFeatures: [
      'High-gain (1.1) matte white projection surface with 160-degree viewing angle',
      'Black masking borders for enhanced visual focus and contrast',
      'Sturdy steel/aluminum tripod base with anti-skid rubber feet',
      'Smooth auto-locking height mechanism for quick setup',
      'Available in 70" x 70", 84" x 84", 96" x 96" and 120" diagonal sizes'
    ],
    specs: {
      'Surface Material': 'Multi-layer Matte White Vinyl with Black Backing',
      'Gain': '1.1 Optical Gain',
      'Viewing Angle': '160 degrees wide viewing field',
      'Tripod Mechanism': 'Heavy-gauge steel with quick-cam locking collar',
      'Portability': 'Foldable tripod legs with built-in carry handle'
    },
    applications: [
      'Mobile Classroom Lectures',
      'College Seminar Rooms',
      'Corporate Training Workshops',
      'Outdoor Educational Presentations'
    ]
  },

  // 3. INTERACTIVE FLAT PANEL LED DISPLAYS
  {
    id: 'interactive-led-flat-panel-series',
    name: 'Interactive Flat Panel 4K LED Displays (Full Series 55"–110")',
    category: 'interactive-led-displays',
    categoryLabel: 'Interactive Flat Panels',
    tagline: 'Complete Institutional Lineup: 55", 65", 75", 85", 86", 98" and 110" Displays',
    modelNumber: 'KAV-IFP-SERIES',
    description: 'Our core interactive flat panel display lineup shown directly in our warehouse ready for deployment across Pakistan. Featuring 4K resolution, 20-point touch, dual operating system (Android 13 + Windows OPS PC module), zero air-gap bonding, and anti-glare toughened glass.',
    image: '/images/products/product_6.jpg',
    fallbackImage: 'https://i.postimg.cc/5NFdG6qT/Whats-App-Image-2026-11-06-at-7-55-34-PM.jpg',
    gallery: [
      '/images/products/product_6.jpg',
      '/images/products/product_7.jpg'
    ],
    keyFeatures: [
      'Available Sizes: 55", 65", 75", 85", 86", 98", and 110" diagonal',
      'True 4K Ultra HD (3840 x 2160) IPS commercial grade panels',
      'High-precision 20-point multi-touch writing with dual styluses',
      'Dual OS: Built-in Android 13 with optional Intel Core i5/i7 Windows OPS module',
      '4mm Anti-Glare, Anti-Scratch Toughened Tempered Safety Glass',
      'Front-facing USB 3.0, Touch USB, HDMI 2.0, and Type-C 65W charging ports',
      'Built-in 2 x 20W stereo soundbar with active room coverage'
    ],
    specs: {
      'Sizes in Stock': '55", 65", 75", 85", 86", 98", 110" Inch',
      'Resolution': '3840 x 2160 @ 60Hz 4K UHD',
      'Touch Points': '20-Point Multi-Touch with < 5ms response time',
      'Glass Type': 'Mohs Level 7 Anti-Glare Toughened Safety Glass',
      'Operating System': 'Android 13 + Windows 11 Pro OPS (Dual Boot)',
      'Audio Output': 'Integrated 2x 20W Front Stereo Speakers',
      'Wireless Sharing': 'Supports up to 4 split-screen mirrors simultaneously'
    },
    applications: [
      'Smart Classrooms & STEM Laboratories',
      'University Lecture Halls',
      'Boardrooms & Executive Conference Rooms',
      'Medical Training & Collaborative Labs'
    ]
  },
  {
    id: 'interactive-led-mobile-trolley-solution',
    name: 'Interactive Touch LED on Heavy-Duty Mobile Trolley',
    category: 'interactive-led-displays',
    categoryLabel: 'Interactive Flat Panels',
    tagline: 'Boardroom-Ready Interactive LED with Whiteboard Software & Mobile Cart',
    modelNumber: 'KAV-IFP-CART-PRO',
    description: 'An executive turnkey touch screen setup featuring an Interactive LED mounted on a heavy-duty mobile trolley cart with smooth 360-degree lockable castors. Complete with built-in digital whiteboard software, camera mount shelf, and integrated soundbar.',
    image: '/images/products/product_7.jpg',
    fallbackImage: 'https://i.postimg.cc/yYS45kXb/Whats-App-Image-2026-11-06-at-7-55-34-PM-(1).jpg',
    gallery: [
      '/images/products/product_7.jpg',
      '/images/products/product_6.jpg'
    ],
    keyFeatures: [
      'Heavy-duty dual-column steel mobile trolley cart with accessory shelf',
      'Commercial grade lockable silent casters for effortless room-to-room transfer',
      'Integrated whiteboard software with geometric tools, multi-color ink & PDF export',
      'Camera mounting bracket for PTZ robotic conference camera integration',
      'Cable concealed channels inside trolley pillars for a pristine aesthetic'
    ],
    specs: {
      'Trolley Capacity': 'Supports displays up to 100 inches / 120 kg',
      'Height Adjustment': 'Adjustable VESA mounting brackets (200x200 to 800x600)',
      'Wheels': '4x Industrial PU Silent Wheels with Independent Brakes',
      'Shelf': 'Integrated lower AV shelf for laptops, decoders or keyboards',
      'Panel Included': 'Configurable with 65", 75", 85" or 86" Interactive LEDs'
    },
    applications: [
      'Shared University Departments',
      'Corporate Meeting Rooms',
      'Hospital Training Centers',
      'Government Project Offices'
    ]
  },

  // 4. CONFERENCE SYSTEMS
  {
    id: 'chairman-delegate-system-ma4617',
    name: 'MA4617A Chairman & MA4617B Delegate Conference System',
    category: 'conference-systems',
    categoryLabel: 'Conference Systems',
    tagline: 'Standard Discussion System with Chairman Priority Control & LED Gooseneck',
    modelNumber: 'MA4617A / MA4617B',
    description: 'The industry-standard conference discussion system supplied by Kohinoor AV. The MA4617A Chairman unit features an exclusive priority override button to mute all delegate speech, while the MA4617B Delegate unit allows structured push-to-talk participation.',
    image: '/images/products/product_11.jpg',
    fallbackImage: 'https://i.postimg.cc/02JR3bdT/Whats-App-Image-2026-11-06-at-7-55-35-PM-(2).jpg',
    gallery: [
      '/images/products/product_11.jpg',
      '/images/products/product_3.jpg'
    ],
    keyFeatures: [
      'MA4617A Chairman Unit: Speech button and Priority Override button',
      'MA4617B Delegate Unit: Push-to-talk speech button with illuminated status ring',
      'Built-in high-fidelity personal monitor speaker in each desk base',
      'Long flexible gooseneck with bright red speaking indicator ring',
      'Integrated 3.5mm headphone jack with independent volume wheel',
      'Anti-interference circuitry against mobile phone and RF radio waves'
    ],
    specs: {
      'Transducer Type': 'Condenser Microphone',
      'Polar Pattern': 'Ultra-Cardioid Directional',
      'Frequency Response': '40Hz – 16,000Hz',
      'Chairman Priority': 'Dedicated chime and instant delegate mute button',
      'Gooseneck Length': '420mm Dual-Flexible Metal Neck',
      'Connection': '8-Pin DIN Daisy-Chain Interconnect Cable',
      'Base Dimensions': 'Zinc-alloy weighted desktop console'
    },
    applications: [
      'Municipal & Government Council Chambers',
      'University Academic Councils & Senate Halls',
      'Corporate Board of Directors Meeting Rooms',
      'Judicial & Arbitration Hearing Rooms'
    ]
  },
  {
    id: 'beterva-conference-system-be2400c',
    name: 'Beterva BE-2400C Professional Chairman Conference Unit',
    category: 'conference-systems',
    categoryLabel: 'Conference Systems',
    tagline: 'High-Precision Discussion System with Priority Control & Audio Output',
    modelNumber: 'Beterva BE-2400C',
    description: 'The renowned Beterva BE-2400C conference microphone system. Engineered with a heavy die-cast metal housing, dual headphone monitoring jacks, illuminated tactile speech controls, and a feedback-resistant condenser capsule.',
    image: '/images/products/product_17.jpg',
    fallbackImage: 'https://i.postimg.cc/4xkkTsBM/Whats-App-Image-2026-11-06-at-7-55-37-PM-(2).jpg',
    gallery: [
      '/images/products/product_17.jpg',
      '/images/products/product_16.jpg',
      '/images/products/product_3.jpg'
    ],
    keyFeatures: [
      'Premium Beterva conference engineering for crisp voice clarity',
      'Exclusive Chairman priority control with chime signaling',
      'Red indicator ring on microphone head indicates active speaking status',
      'Side headphone output for simultaneous translation or clear hearing',
      'High-grade shielded 8-pin interconnect cable prevents hum and interference'
    ],
    specs: {
      'Brand / Series': 'Beterva Professional Discussion Series',
      'Microphone Type': 'Electret Condenser Gooseneck',
      'Sensitivity': '-40dB +/- 2dB',
      'S/N Ratio': '> 80dB',
      'Power Supply': 'Supplied by central conference controller (24V DC)',
      'Housing': 'Die-cast aluminum alloy with anti-scratch coating'
    },
    applications: [
      'Senate & Syndicate Halls',
      'International Summit Centers',
      'Corporate Executive Boardrooms',
      'Government Cabinet Rooms'
    ]
  },
  {
    id: 'sennheiser-e304-conference-unit',
    name: 'Sennheiser e 304 Digital Conference Base Unit',
    category: 'conference-systems',
    categoryLabel: 'Conference Systems',
    tagline: 'German Engineering Intelligibility with Digital LCD Status Display',
    modelNumber: 'Sennheiser e 304',
    description: 'Original Sennheiser e 304 conference microphone base unit supplied by Kohinoor Audio Visual. Renowned worldwide for unmatched speech acoustic reproduction, featuring an integrated LCD channel screen, LED status indicator, and ruggedized housing.',
    image: '/images/products/product_12.jpg',
    fallbackImage: 'https://i.postimg.cc/L8KKM2NQ/Whats-App-Image-2026-11-06-at-7-55-36-PM.jpg',
    gallery: [
      '/images/products/product_12.jpg'
    ],
    keyFeatures: [
      'Authentic Sennheiser vocal acoustics and feedback immunity',
      'Integrated digital LCD display showing channel and operation state',
      'Soft-touch illuminated talk button with zero click noise',
      'Threaded microphone collar securing flexible gooseneck stems',
      'Optimal integration with Sennheiser central DSP audio processors'
    ],
    specs: {
      'Brand': 'Sennheiser Audio Systems',
      'Model': 'e 304 Digital Discussion Unit',
      'Display': 'Integrated Digital LCD Status Window',
      'Acoustic Range': '50Hz – 18,000Hz',
      'Distortion (THD)': '< 0.1% at 1kHz',
      'Color': 'Matte Dark Charcoal Professional Finish'
    },
    applications: [
      'High-Security Government Boardrooms',
      'Embassies & Diplomatic Missions',
      'Premier Financial Institutions',
      'Elite University Syndicate Rooms'
    ]
  },
  {
    id: 'skm9000-wireless-vocal-set',
    name: 'SKM9000 True Diversity Wireless Vocal Microphone Set',
    category: 'conference-systems',
    categoryLabel: 'Conference Systems',
    tagline: 'Dual Handheld Wireless Metal Microphones with Dual-Channel Receiver',
    modelNumber: 'SKM9000 Vocal Set',
    description: 'Professional wireless vocal system comprising two heavy-duty handheld transmitters and a 1U rackmount dual-channel digital LCD receiver. Designed for podium speeches, stage presentations, and auditorium question-and-answer sessions.',
    image: '/images/products/product_5.jpg',
    fallbackImage: 'https://i.postimg.cc/vH6FjcLS/Whats-App-Image-2026-11-06-at-7-55-33-PM.jpg',
    gallery: [
      '/images/products/product_5.jpg'
    ],
    keyFeatures: [
      'True Diversity UHF reception with zero dropouts over 100 meters',
      'Dual handheld metal transmitters with high-resolution LCD screens',
      'Dual illuminated blue LCD displays on 1U rack-mountable receiver',
      'Automatic frequency synchronization via infrared (IR)',
      'Exceptional feedback suppression and vocal presence'
    ],
    specs: {
      'Frequency Range': 'UHF 600MHz – 690MHz with agile PLL channels',
      'Operating Range': 'Up to 100 meters line-of-sight',
      'Receiver': 'Dual-channel 1U metal rackmount unit with independent XLR outputs',
      'Transmitters': '2x Solid metal handheld microphones with backlit displays',
      'Battery Life': 'Up to 8–10 hours on standard AA batteries'
    },
    applications: [
      'Auditorium Stage Presentations',
      'University Convocation Ceremonies',
      'Panel Q&A Sessions',
      'Live Event Sound Reinforcement'
    ]
  },
  {
    id: 'wireless-conference-tabletop-pair',
    name: 'Wireless Tabletop Conference Microphone System (Pair)',
    category: 'conference-systems',
    categoryLabel: 'Conference Systems',
    tagline: 'Cordless Freedom for Clean Conference Tables Without Wiring Hassles',
    modelNumber: 'KAV-WCS-DUAL',
    description: 'A set of wireless tabletop gooseneck conference microphones that eliminate messy cables from prestigious boardroom tables. Features sleek brushed-silver accents, sensitive condenser capsules, and multi-channel UHF frequency management.',
    image: '/images/products/product_18.jpg',
    fallbackImage: 'https://i.postimg.cc/nhbbtp0g/Whats-App-Image-2026-11-06-at-7-55-38-PM.jpg',
    gallery: [
      '/images/products/product_18.jpg'
    ],
    keyFeatures: [
      '100% wireless tabletop setup for clutter-free boardroom surfaces',
      'Cardioid condenser capsule with high speech intelligibility',
      'Illuminated LED ring on microphone head confirming live status',
      'Long-lasting lithium rechargeable power with power-saving standby',
      'Interference rejection from mobile devices and Wi-Fi networks'
    ],
    specs: {
      'Channels': 'UHF Multi-frequency Agile with IR sync',
      'Capsule': 'Uni-directional Condenser',
      'Base Finish': 'Black matte with polished silver decorative perimeter',
      'Battery': 'Rechargeable Li-ion battery pack'
    },
    applications: [
      'Roundtable Discussion Rooms',
      'Executive Briefing Rooms',
      'Flexible Modular Meeting Spaces',
      'Rental & Event Applications'
    ]
  },

  // 5. PTZ ROBOTIC CAMERAS
  {
    id: 'ai-auto-tracking-ptz-camera-4k',
    name: '4K Ultra HD AI Auto-Tracking PTZ Robotic Camera',
    category: 'ptz-robotic-cameras',
    categoryLabel: 'PTZ Robotic Cameras',
    tagline: 'Intelligent Presenter-Tracking Camera for Hybrid Learning & Boardrooms',
    modelNumber: 'KAV-PTZ4K-AUTO',
    description: 'Next-generation 4K PTZ camera equipped with built-in artificial intelligence that tracks instructors and speakers smoothly across the room without requiring lanyards or sensors. Features pristine 12x/20x optical zoom, ultra-quiet motorized mechanics, and versatile video outputs.',
    image: '/images/ptz_camera_tracking_1793992811906.jpg',
    fallbackImage: '/images/ptz_camera_tracking_1793992811906.jpg',
    gallery: [
      '/images/ptz_camera_tracking_1793992811906.jpg'
    ],
    keyFeatures: [
      'True 4K Ultra HD at 60fps with 1/2.8" Sony CMOS sensor',
      'Deep-learning AI presenter tracking with smooth human motion following',
      '12x / 20x Optical Zoom with razor-sharp glass lens elements',
      'Simultaneous HDMI, USB 3.0, IP Streaming (RTSP/RTMP), and NDI|HX output',
      'Whisper-quiet brushless pan and tilt motor drive',
      'Ceiling, wall or tripod mounting brackets included'
    ],
    specs: {
      'Video Sensor': '1/2.8-inch High-Quality Sony CMOS Sensor',
      'Output Resolution': '4K @ 60/50/30/25fps, 1080p @ 60/50fps',
      'Optical Zoom': '12x / 20x Optical Zoom with 72.5-degree Wide Angle',
      'Pan / Tilt Angles': 'Pan: +/- 170 degrees; Tilt: -30 to +90 degrees',
      'Interfaces': 'HDMI 2.0, USB 3.0 Type-B, RJ-45 LAN (PoE), RS-232/RS-485 In/Out',
      'Tracking Type': 'AI Body Recognition & Facial Geometry Tracking',
      'Protocols': 'NDI|HX, RTMP, RTSP, SRT, VISCA, Pelco-P/D'
    },
    applications: [
      'Hybrid University Lecture Capture',
      'Live Online Distance Learning',
      'Courtrooms & Parliamentary Proceedings',
      'Corporate Telepresence & Video Conferencing'
    ]
  },

  // 6. SMART CLASSROOM SOLUTIONS & AUDIO
  {
    id: 'stage-prompter-monitor-system',
    name: 'Auditorium Stage Teleprompter & Floor AV Monitor System',
    category: 'smart-classroom-solutions',
    categoryLabel: 'Smart Classroom & Auditorium',
    tagline: 'Low-Profile Confidence Monitors for Convocation Halls & Auditoriums',
    modelNumber: 'KAV-SPM-PAIR',
    description: 'Professional stage teleprompter and floor confidence monitors designed for auditoriums, university convocation stages, and institutional presentation centers. Provides speakers with clear script playback, presentation slide previews, and timing clocks without obstructing audience sightlines.',
    image: '/images/products/product_2.jpg',
    fallbackImage: 'https://i.postimg.cc/m2FfqtNV/Whats-App-Image-2026-11-06-at-7-55-29-PM.jpg',
    gallery: [
      '/images/products/product_2.jpg'
    ],
    keyFeatures: [
      'Low-profile wedge floor housing angled directly toward the dais/presenter',
      'High-brightness anti-glare display legible under heavy stage lighting',
      'Dual-monitor daisy-chain capability for wide stage coverage',
      'Direct HDMI, SDI and wireless video transmission inputs',
      'Ruggedized tour-grade flight-ready wood/metal construction'
    ],
    specs: {
      'Screen Size': '24-Inch / 32-Inch High Brightness Displays',
      'Aspect Ratio': '16:9 Full HD (1920 x 1080)',
      'Viewing Angle': 'Wedge design optimized for standing or seated presenters',
      'Housing': 'Heavy-duty black textured stage monitor cabinet',
      'Inputs': 'HDMI, 3G-SDI, VGA, AC Loop-through'
    },
    applications: [
      'University Convocations & Annual Days',
      'Large Auditoriums & Theaters',
      'Government Keynote Addresses',
      'Television & Live Broadcast Stages'
    ]
  },
  {
    id: 'edifier-portable-pa-classroom-sound',
    name: 'Edifier Heavy-Duty Portable Classroom PA Sound System',
    category: 'smart-classroom-solutions',
    categoryLabel: 'Smart Classroom & Auditorium',
    tagline: 'High-Power Trolley PA System with Wireless Handheld Microphone',
    modelNumber: 'Edifier Trolley PA',
    description: 'Rugged portable trolley sound system with built-in high-capacity rechargeable battery, wireless handheld microphone, Bluetooth connectivity, and smooth transport wheels. Ideal for mobile classrooms, outdoor assemblies, and sports day events.',
    image: '/images/products/product_4.jpg',
    fallbackImage: 'https://i.postimg.cc/ZKytgCFw/Whats-App-Image-2026-11-06-at-7-55-30-PM-(1).jpg',
    gallery: [
      '/images/products/product_4.jpg'
    ],
    keyFeatures: [
      'Built-in retractable trolley handle and durable rear rolling wheels',
      'Dedicated UHF wireless handheld microphone with digital channel screen',
      'High-power acoustic dispersion driver with deep bass and articulate voice clarity',
      'Long-lasting internal rechargeable battery for 6–8 hours of unplugged use',
      'Multiple inputs: Bluetooth 5.0, USB flash drive playback, AUX 3.5mm, and Mic-In'
    ],
    specs: {
      'Brand': 'Edifier Acoustic Technologies',
      'Power Output': '120W Peak / 60W RMS Clean Audio Power',
      'Wireless Mic': 'UHF Digital Handheld Microphone included',
      'Battery': 'High-capacity rechargeable battery (up to 8 hours playback)',
      'Mobility': 'Telescopic luggage handle with corner wheels'
    },
    applications: [
      'School & College Morning Assemblies',
      'Outdoor Sports & Educational Demonstrations',
      'Multi-room Mobile Classroom Teaching',
      'Emergency Public Address'
    ]
  },
  {
    id: 'turnkey-smart-classroom-bundle',
    name: 'Complete Turnkey Smart Classroom Solution Package',
    category: 'smart-classroom-solutions',
    categoryLabel: 'Smart Classroom Solutions',
    tagline: 'Integrated Hardware Package: Touch LED, Digital Podium, Audio & PTZ Camera',
    modelNumber: 'KAV-CLASSROOM-BUNDLE',
    description: 'The definitive all-in-one smart classroom package engineered by Kohinoor Audio Visual. Unifies an 75" or 86" 4K Interactive LED Flat Panel, Digital Teaching Rostrum with touch screen, 60W classroom sound system, PTZ auto-tracking camera, and professional installation across Pakistan.',
    image: '/images/hero_av_solutions_1793992811053.jpg',
    fallbackImage: '/images/hero_av_solutions_1793992811053.jpg',
    gallery: [
      '/images/hero_av_solutions_1793992811053.jpg',
      '/images/products/product_13.jpg',
      '/images/products/product_6.jpg',
      '/images/products/product_7.jpg'
    ],
    keyFeatures: [
      'Comprehensive institutional bundle ready for immediate classroom teaching',
      'Interactive 75" or 86" 4K Flat Panel with dual Android & Windows OPS',
      'Digital Rostrum with 21.5" touch monitor, gooseneck mic, and central AV switch',
      'Integrated classroom speaker audio reinforcement (01 pair 30W wall speakers)',
      'Full nationwide on-site installation, cabling, testing, and faculty training',
      'Official warranty and priority technical maintenance support'
    ],
    specs: {
      'Interactive Display': '75" or 86" 4K UHD 20-Point Touch LED',
      'Podium': 'Kohinoor Digital Rostrum with built-in PC & 60W amp',
      'Camera': '4K Auto-Tracking PTZ Camera for hybrid lectures',
      'Audio': 'Integrated classroom audio dispersion with wireless mics',
      'Warranty': '1-Year comprehensive hardware warranty with local technical support'
    },
    applications: [
      'Higher Education Universities & Colleges',
      'Medical & Engineering Institutions',
      'Government Training Academies',
      'Modern High-Tech Schools'
    ]
  }
];

export const BUSINESS_INFO = {
  name: 'Kohinoor Audio Visual Education Business System',
  shortName: 'Kohinoor Audio Visual',
  abbreviation: 'Kohinoor AV',
  tagline: 'Professional Audio Visual & Smart Classroom Solutions in Pakistan',
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
