import { PageId, Product } from '../types';

interface RouteSeoMeta {
  title: string;
  description: string;
  keywords: string;
  image: string;
  label: string;
  robots?: string;
}

const DEFAULT_IMAGE = '/images/client-uploads/upload_5.jpg';

const ROUTE_SEO: Record<PageId, RouteSeoMeta> = {
  home: {
    label: 'Home',
    title: 'Kohinoor Audio Visual – AV Equipment Supplier Pakistan',
    description:
      'Authorized AV equipment supplier in Islamabad since 1978: Interactive LEDs, Mitsubishi & Casio projectors, screens, digital podiums, Tenveo & teleprompters.',
    keywords:
      'Kohinoor Audio Visual, AV Equipment Pakistan, Interactive LED Display Islamabad, Casio XJ-S400UN, Mitsubishi 8000 Series Projector, Black White Digital Podium, Tenveo TEVO-VA3000E',
    image: '/images/client-uploads/upload_5.jpg'
  },
  products: {
    label: 'All Products',
    title: 'AV Equipment Catalog | Kohinoor Audio Visual Pakistan',
    description:
      'Browse ready-stock 4K Interactive LEDs, Mitsubishi & Casio projectors, projection screens, digital podiums, Tenveo conferencing, and stage teleprompters.',
    keywords:
      'AV Catalog Pakistan, Interactive LEDs, Mitsubishi UD8900U, Casio XJ-S400UN, Projection Screens, Digital Podiums, Tenveo VA3000E, Stage Teleprompters',
    image: '/images/products/product_6.jpg'
  },
  'interactive-led-displays': {
    label: 'Interactive LED Displays',
    title: 'Interactive LED Displays (55"-110") | Kohinoor AV',
    description:
      '4K Ultra HD 20-point touch Interactive LED Displays (55", 65", 75", 85", 86", 98", 110") with Dual OS Android + Windows OPS in Pakistan.',
    keywords:
      'Interactive LED Display Pakistan, 75 inch Interactive Flat Panel, 86 inch Smart Board Islamabad, 4K Touch LED Classroom Pakistan',
    image: '/images/products/product_6.jpg'
  },
  'multimedia-projectors': {
    label: 'Multimedia Projectors',
    title: 'Mitsubishi & Casio Projectors | Kohinoor AV Pakistan',
    description:
      'Ready-stock Mitsubishi 8000 Series (UD8900U, UD8850U, WD8700U, XD8600U) and Casio XJ-S400UN & XJ-V100W LampFree projectors across Pakistan.',
    keywords:
      'Casio XJ-S400UN Pakistan, Casio XJ-V100W, Mitsubishi UD8900U, Mitsubishi 8000 Series Projector, LampFree Laser LED Projector Islamabad',
    image: '/images/real-stock/casio-xj-s400un.jpg'
  },
  'projection-screens': {
    label: 'Projection Screens',
    title: 'Wall-Mounted & Tripod Projection Screens | Kohinoor AV',
    description:
      'High-gain matte white Wall-Mounted, Portable Tripod / Floor Stand, and Electric Motorized RF projection screens from 6x6 to 13x10 ft in Pakistan.',
    keywords:
      'Wall Mounted Projection Screen Pakistan, Portable Tripod Projection Screen Islamabad, Motorized RF Projector Screen 10x8 12x9',
    image: '/images/real-stock/wall-screen-clean.jpg'
  },
  'digital-podiums': {
    label: 'Digital Podiums',
    title: 'Black & White Digital Podiums (60W) | Kohinoor AV',
    description:
      'Ready-stock Black & White Digital Podiums with dual gooseneck mics, 2 wireless mics, 60W audio, MP3/USB/SD/AUX panel (580x420x1100 mm, 29 kg).',
    keywords:
      'Digital Podium Pakistan, Black Digital Podium, White Digital Podium, Smart Rostrum Islamabad, Lectern 60W Audio 2 Wireless Mics',
    image: '/images/real-stock/digital-podium-black.jpg'
  },
  'conference-systems': {
    label: 'Video Conferencing & Conference Systems',
    title: 'Tenveo TEVO-VA3000E & BETERVA BE-2300 | Kohinoor AV',
    description:
      'All-in-one Tenveo TEVO-VA3000 / TEVO-VA3000E 10X Zoom HD 1080p video conferencing kit and BETERVA BE-2300 Chairman & Delegate audio units.',
    keywords:
      'Tenveo TEVO-VA3000 Pakistan, Tenveo TEVO-VA3000E Islamabad, BETERVA BE-2300 Chairman Delegate Microphone System, Video Conferencing Pakistan',
    image: '/images/real-stock/tenveo-va3000e.jpg'
  },
  teleprompters: {
    label: 'Teleprompters (Stage & Floor Series)',
    title: 'Stage & Floor Teleprompters (TP27-TP100) | Kohinoor AV',
    description:
      'Full HD 1920x1080 Stage Monitor & Floor Captioner Teleprompters (TP27 to TP100, 27"-100") with Foot Pedal, Remote Control & HDMI/SDI/Wireless.',
    keywords:
      'Stage Teleprompter Pakistan, Floor Captioner Teleprompter TP27 TP43 TP55 TP100, Teleprompter Foot Pedal HDMI SDI Islamabad',
    image: '/images/products/product_2.jpg'
  },
  'audio-equipment': {
    label: 'Audio Equipment',
    title: 'CMX Audio Amplifiers & Wireless Mics | Kohinoor AV',
    description:
      'Commercial CMX EA-120 / EA-240A PA mixer amplifiers, dual UHF wireless microphones, wired gooseneck mics, and Edifier portable PA systems.',
    keywords:
      'CMX EA-120 Amplifier Pakistan, CMX WM-U200B Wireless Microphone, Podium Gooseneck Mic Islamabad, Commercial PA Sound System',
    image: '/images/real-stock/cmx-ea-amplifier.png'
  },
  'projector-mounting-kits': {
    label: 'Projector Mounting Kits',
    title: 'Projector Ceiling & Wall Mounting Kits | Kohinoor AV',
    description:
      'Heavy-duty cold-rolled steel universal projector ceiling mounts and short-throw wall boom brackets with internal cable concealment in Pakistan.',
    keywords:
      'Projector Ceiling Mount Kit Pakistan, Universal Projector Bracket Islamabad, Short Throw Wall Projector Mount',
    image: '/images/real-stock/projector-ceiling-mount.jpg'
  },
  'ptz-robotic-cameras': {
    label: 'PTZ Conferencing Cameras',
    title: 'Tenveo 10X Optical Zoom PTZ Camera System | Kohinoor AV',
    description:
      'Tenveo TEVO-VA3000 / VA3000E 10X lossless optical zoom 1080p PTZ camera with 350 deg pan, 90 deg tilt, speakerphone, Bluetooth & USB plug-and-play.',
    keywords:
      'PTZ Conference Camera Pakistan, Tenveo 10X Zoom Camera, USB Bluetooth PTZ Camera Islamabad, Zoom Teams Camera',
    image: '/images/real-stock/tenveo-va3000e.jpg'
  },
  'smart-classroom-solutions': {
    label: 'Smart Classroom Solutions',
    title: 'Smart Classroom Turnkey Solutions | Kohinoor AV Pakistan',
    description:
      'Turnkey Smart Classroom integration with Interactive LEDs, Digital Podiums, Casio/Mitsubishi projectors, Tenveo conferencing & nationwide setup.',
    keywords:
      'Smart Classroom Solution Pakistan, Digital Lecture Hall Setup HEC, University AV Turnkey Integration Islamabad',
    image: '/images/client-uploads/upload_5.jpg'
  },
  projects: {
    label: 'Client Projects',
    title: 'Installed AV Projects & Case Studies | Kohinoor AV',
    description:
      'Verified installations at NUST NCAI, council conference chambers, and university lecture halls across Islamabad, Rawalpindi, and Lahore.',
    keywords:
      'Kohinoor AV Projects, NUST NCAI Podium, Council Chamber Conference Installation Islamabad, Auditorium AV Pakistan',
    image: '/images/client-uploads/upload_2.jpg'
  },
  gallery: {
    label: 'Installation Gallery',
    title: 'Installation & Hardware Gallery | Kohinoor Audio Visual',
    description:
      'Real photographs of Interactive LEDs, Mitsubishi & Casio projectors, Digital Podiums, Tenveo conferencing, and stage installations in Pakistan.',
    keywords:
      'Kohinoor AV Gallery, Digital Podium Photos Pakistan, Smart Classroom Photos Islamabad, AV Installation Gallery',
    image: '/images/client-uploads/upload_5.jpg'
  },
  about: {
    label: 'About Us',
    title: 'About Kohinoor Audio Visual | Est. 1978 Islamabad',
    description:
      'Serving Pakistan since 1978 from Blue Area, Islamabad. Authorized Audio Visual, Educational Equipment & Business Systems with official warranty.',
    keywords:
      'About Kohinoor Audio Visual, AV Supplier Since 1978, Blue Area Islamabad AV Company, Educational Equipment Pakistan',
    image: '/images/client-uploads/upload_6.jpg'
  },
  contact: {
    label: 'Contact Us',
    title: 'Contact Kohinoor Audio Visual | Blue Area Islamabad',
    description:
      'Visit United Plaza, Blue Area, Islamabad or contact +92 333 5163220 / kohinoor_ibd@yahoo.co.uk for AV quotations, tenders & site surveys.',
    keywords:
      'Contact Kohinoor Audio Visual, Blue Area Islamabad AV Office, Request AV Quotation Pakistan, +92 333 5163220',
    image: '/images/client-uploads/upload_5.jpg'
  },
  admin: {
    label: 'Admin Portal',
    title: 'Admin Portal | Kohinoor Audio Visual',
    description: 'Internal content panel for Kohinoor Audio Visual.',
    keywords: 'Kohinoor Audio Visual',
    image: DEFAULT_IMAGE,
    robots: 'noindex, nofollow'
  }
};

function upsertMetaTag(attr: 'name' | 'property', key: string, content: string) {
  let el = document.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

function upsertLinkTag(rel: string, href: string, extraAttrs: Record<string, string> = {}, selectorKey?: string) {
  const selector = selectorKey
    ? `link[rel="${rel}"]${selectorKey}`
    : `link[rel="${rel}"]`;
  let el = document.querySelector<HTMLLinkElement>(selector);
  if (!el) {
    el = document.createElement('link');
    el.rel = rel;
    Object.entries(extraAttrs).forEach(([k, v]) => el!.setAttribute(k, v));
    document.head.appendChild(el);
  }
  el.href = href;
}

function getBaseOrigin(): string {
  if (typeof window !== 'undefined' && window.location.origin.startsWith('http')) {
    return window.location.origin;
  }
  return 'https://kohinoorav.com';
}

export function getRoutePath(page: PageId, product?: Product | null): string {
  if (product) {
    return `/product/${product.id}`;
  }
  return page === 'home' ? '/' : `/${page}`;
}

function resolveCanonicalUrl(page: PageId, product: Product | null): string {
  const base = getBaseOrigin();
  return `${base}${getRoutePath(page, product)}`;
}

function resolveAbsoluteImage(path: string): string {
  const base = getBaseOrigin();
  return path.startsWith('http') ? path : `${base}${path}`;
}

export function applyRouteSeo(page: PageId, product: Product | null) {
  const routeMeta = ROUTE_SEO[page] || ROUTE_SEO.home;
  const base = getBaseOrigin();
  const pageUrl = resolveCanonicalUrl(page, product);
  const categoryUrl = `${base}${getRoutePath(page)}`;

  const title = product
    ? `${product.name.slice(0, 48)} | Kohinoor AV`
    : routeMeta.title;
  const description = product
    ? product.description.slice(0, 158)
    : routeMeta.description;
  const keywords = product
    ? `${product.name}, ${product.modelNumber || ''}, ${product.brand || 'Kohinoor AV'}, ${product.categoryLabel}, Pakistan, Islamabad`
    : routeMeta.keywords;
  const imageUrl = resolveAbsoluteImage(product ? product.image : routeMeta.image);
  const robotsValue =
    routeMeta.robots ||
    'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1';

  document.title = title;
  upsertMetaTag('name', 'description', description);
  upsertMetaTag('name', 'keywords', keywords);
  upsertMetaTag('name', 'robots', robotsValue);
  upsertMetaTag('name', 'googlebot', robotsValue);

  upsertMetaTag('property', 'og:title', title);
  upsertMetaTag('property', 'og:description', description);
  upsertMetaTag('property', 'og:url', pageUrl);
  upsertMetaTag('property', 'og:image', imageUrl);
  upsertMetaTag('property', 'og:type', product ? 'product' : 'website');

  upsertMetaTag('name', 'twitter:title', title);
  upsertMetaTag('name', 'twitter:description', description);
  upsertMetaTag('name', 'twitter:url', pageUrl);
  upsertMetaTag('name', 'twitter:image', imageUrl);

  upsertLinkTag('canonical', pageUrl);
  upsertLinkTag('alternate', pageUrl, { hreflang: 'en-PK' }, '[hreflang="en-PK"]');
  upsertLinkTag('alternate', pageUrl, { hreflang: 'x-default' }, '[hreflang="x-default"]');

  // Update dynamic structured data for the active page or opened product modal
  let scriptEl = document.getElementById('kohinoor-dynamic-schema') as HTMLScriptElement | null;
  if (!scriptEl) {
    scriptEl = document.createElement('script');
    scriptEl.id = 'kohinoor-dynamic-schema';
    scriptEl.type = 'application/ld+json';
    document.head.appendChild(scriptEl);
  }

  if (page === 'admin') {
    scriptEl.textContent = '';
    return;
  }

  const breadcrumbs: Array<{ '@type': string; position: number; name: string; item: string }> = [
    { '@type': 'ListItem', position: 1, name: 'Home', item: `${base}/` }
  ];

  if (page !== 'home') {
    breadcrumbs.push({
      '@type': 'ListItem',
      position: 2,
      name: routeMeta.label,
      item: categoryUrl
    });
  }

  if (product) {
    breadcrumbs.push({
      '@type': 'ListItem',
      position: breadcrumbs.length + 1,
      name: product.name,
      item: pageUrl
    });

    const graphSchema = {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'Product',
          name: product.name,
          sku: product.modelNumber || product.id,
          mpn: product.modelNumber || product.id,
          brand: {
            '@type': 'Brand',
            name: product.brand || 'Kohinoor Audio Visual'
          },
          category: product.categoryLabel,
          image: [
            resolveAbsoluteImage(product.image),
            ...(product.gallery || []).map((g) => resolveAbsoluteImage(g))
          ],
          description: product.description,
          additionalProperty: Object.entries(product.specs || {}).map(([name, value]) => ({
            '@type': 'PropertyValue',
            name,
            value
          })),
          offers: {
            '@type': 'Offer',
            availability: 'https://schema.org/InStock',
            url: pageUrl,
            seller: {
              '@type': 'Organization',
              name: 'Kohinoor Audio Visual Education Business System'
            }
          }
        },
        {
          '@type': 'BreadcrumbList',
          itemListElement: breadcrumbs
        }
      ]
    };
    scriptEl.textContent = JSON.stringify(graphSchema);
  } else {
    const graphSchema = {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'WebPage',
          name: title,
          description,
          url: pageUrl,
          inLanguage: 'en-PK',
          primaryImageOfPage: {
            '@type': 'ImageObject',
            url: imageUrl
          },
          isPartOf: {
            '@type': 'WebSite',
            name: 'Kohinoor Audio Visual',
            url: 'https://kohinoorav.com/'
          }
        },
        {
          '@type': 'BreadcrumbList',
          itemListElement: breadcrumbs
        }
      ]
    };
    scriptEl.textContent = JSON.stringify(graphSchema);
  }
}
