import React from 'react';
import { PageId } from '../types';
import { ArrowRight, MapPin } from 'lucide-react';

interface GalleryMarqueeProps {
  onNavigate: (page: PageId) => void;
  onSelectImage?: (image: { src: string; title: string; location: string }) => void;
}

const MARQUEE_IMAGES = [
  {
    src: '/images/products/product_6.jpg',
    title: '4K Interactive Flat Panels (55"–110")',
    location: 'In Stock'
  },
  {
    src: '/images/real-stock/casio-xj-s400un.jpg',
    title: 'Casio XJ-S400UN LampFree WUXGA Projector',
    location: 'Ready Stock'
  },
  {
    src: '/images/real-stock/mitsubishi-ud8900u.jpg',
    title: 'Mitsubishi 8000 Series (7,300–8,500 Lumens)',
    location: 'White & Black BL'
  },
  {
    src: '/images/real-stock/digital-podium-black.jpg',
    title: 'Black Digital Podium (60W Audio · 29 kg)',
    location: 'Ready Stock'
  },
  {
    src: '/images/products/product_9.jpg',
    title: 'White Digital Podium Variant',
    location: 'Ready Stock'
  },
  {
    src: '/images/real-stock/tenveo-va3000e.jpg',
    title: 'Tenveo TEVO-VA3000E Video Conference Kit',
    location: 'Zoom & Teams Ready'
  },
  {
    src: '/images/products/product_2.jpg',
    title: 'Stage / Floor Teleprompter (TP27–TP100)',
    location: 'Auditorium Stage'
  },
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
    title: 'BETERVA BE-2300 Chairman Mic',
    location: 'Islamabad'
  },
  {
    src: '/images/products/product_8.jpg',
    title: 'Executive 43" Touch Podium',
    location: 'NUST NCAI'
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
              className="group relative w-48 sm:w-60 md:w-64 shrink-0 rounded-2xl overflow-hidden border border-slate-200 bg-white shadow-sm hover:border-emerald-500 hover:shadow-xl transition-all duration-300 cursor-pointer text-left flex flex-col"
            >
              <div className="w-full h-40 sm:h-48 bg-slate-50 p-2.5 flex items-center justify-center overflow-hidden border-b border-slate-100">
                <img
                  src={item.src}
                  alt={item.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="p-3 bg-white space-y-0.5">
                <div className="flex items-center gap-1 text-[10px] font-bold text-emerald-700">
                  <MapPin className="w-2.5 h-2.5 shrink-0" />
                  <span className="truncate">{item.location}</span>
                </div>
                <div className="text-xs font-bold text-slate-900 line-clamp-1 leading-snug">
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
