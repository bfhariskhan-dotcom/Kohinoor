import React from 'react';
import { PageId } from '../types';
import { ArrowRight, MapPin } from 'lucide-react';

interface GalleryMarqueeProps {
  onNavigate: (page: PageId) => void;
  onSelectImage?: (image: { src: string; title: string; location: string }) => void;
}

const MARQUEE_IMAGES = [
  {
    src: '/images/client-uploads/upload_5.jpg',
    title: 'Auditorium Digital Podium Stage',
    location: 'Islamabad'
  },
  {
    src: '/images/client-uploads/upload_2.jpg',
    title: 'Council Chamber Audio System',
    location: 'Islamabad'
  },
  {
    src: '/images/client-uploads/upload_3.jpg',
    title: 'University Lecture Hall Rostrum',
    location: 'Rawalpindi'
  },
  {
    src: '/images/client-uploads/upload_4.jpg',
    title: 'Smart Classroom AV Setup',
    location: 'Lahore'
  },
  {
    src: '/images/client-uploads/upload_6.jpg',
    title: 'NCAI National Research Podium',
    location: 'NUST Islamabad'
  },
  {
    src: '/images/client-uploads/upload_1.jpg',
    title: 'MA4617 Chairman Microphone',
    location: 'Islamabad'
  },
  {
    src: '/images/client-uploads/upload_7.jpg',
    title: 'Seminar Hall Steel Lectern',
    location: 'Peshawar'
  },
  {
    src: '/images/products/product_6.jpg',
    title: '4K Interactive Flat Panels (55"–110")',
    location: 'In Stock'
  },
  {
    src: '/images/products/product_8.jpg',
    title: 'Executive 43" Touch Podium',
    location: 'NUST NCAI'
  },
  {
    src: '/images/products/product_11.jpg',
    title: 'Chairman & Delegate Mics',
    location: 'Boardroom'
  },
  {
    src: '/images/products/product_7.jpg',
    title: 'Heavy-Duty Mobile Trolley Cart',
    location: 'Nationwide'
  },
  {
    src: '/images/ptz_camera_tracking_1793992811906.jpg',
    title: '4K AI Auto-Tracking PTZ Camera',
    location: 'Hybrid Hall'
  },
  {
    src: '/images/multimedia_projector_pro_1793992811682.jpg',
    title: '5000 Lumens Laser Projector',
    location: 'Auditorium'
  },
  {
    src: '/images/hero_av_solutions_1793992811053.jpg',
    title: 'Turnkey Smart Classroom',
    location: 'Pakistan'
  }
];

export const GalleryMarquee: React.FC<GalleryMarqueeProps> = ({ onNavigate, onSelectImage }) => {
  const trackItems = [...MARQUEE_IMAGES, ...MARQUEE_IMAGES];

  return (
    <section className="py-8 sm:py-12 bg-white border-y border-slate-200/80 overflow-hidden">
      {/* Compact Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 mb-6 flex items-center justify-between gap-4">
        <div>
          <span className="text-[11px] font-bold text-emerald-700 uppercase tracking-wider">
            Live Showcase
          </span>
          <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
            Installation Gallery
          </h2>
        </div>

        <button
          onClick={() => onNavigate('gallery')}
          className="cursor-pointer px-3.5 py-2 bg-emerald-50 hover:bg-emerald-100 text-emerald-800 text-xs font-bold rounded-lg transition-colors inline-flex items-center gap-1.5 shrink-0"
        >
          <span>View All</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* Continuous Square-Box Marquee Track */}
      <div className="relative w-full overflow-hidden">
        {/* Soft Side Fade Overlays */}
        <div className="hidden sm:block pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="hidden sm:block pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-white to-transparent z-10" />

        <div className="animate-marquee-gallery flex items-center gap-4 sm:gap-5 px-2">
          {trackItems.map((item, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => {
                if (onSelectImage) {
                  onSelectImage(item);
                } else {
                  onNavigate('gallery');
                }
              }}
              className="group relative w-44 h-44 sm:w-56 sm:h-56 md:w-64 md:h-64 shrink-0 rounded-2xl overflow-hidden border border-slate-200 bg-slate-950 shadow-sm hover:border-emerald-500 hover:shadow-xl transition-all duration-300 cursor-pointer text-left"
            >
              <img
                src={item.src}
                alt={item.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent" />

              <div className="absolute bottom-2.5 left-2.5 right-2.5 space-y-0.5">
                <div className="flex items-center gap-1 text-[10px] font-semibold text-emerald-300">
                  <MapPin className="w-2.5 h-2.5 shrink-0" />
                  <span className="truncate">{item.location}</span>
                </div>
                <div className="text-xs font-bold text-white line-clamp-1 leading-snug">
                  {item.title}
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};
