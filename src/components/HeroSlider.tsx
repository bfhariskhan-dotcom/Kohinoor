import React, { useState, useEffect, useRef } from 'react';
import { PageId } from '../types';
import { BUSINESS_INFO } from '../data/products';
import {
  MessageSquare,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface HeroSliderProps {
  onNavigate: (page: PageId) => void;
  onOpenQuoteModal: (productName?: string) => void;
}

interface Slide {
  id: number;
  title: string;
  subtitle: string;
  image: string;
  alt: string;
  productName: string;
}

const SLIDES: Slide[] = [
  {
    id: 1,
    title: 'Smart Audio Visual & Classroom Systems',
    subtitle: 'Digital Podiums, 4K Interactive LEDs, Projectors & Conference Audio across Pakistan.',
    image: '/images/client-uploads/upload_5.jpg',
    alt: 'Beterva Digital Smart Podiums in University Auditorium',
    productName: 'Turnkey Smart Classroom'
  },
  {
    id: 2,
    title: 'Interactive Steel Digital Rostrums',
    subtitle: '21.5", 32" & 43" touch podiums with built-in 60W audio, deployed at NUST & universities.',
    image: '/images/client-uploads/upload_3.jpg',
    alt: 'Digital Rostrum with Built-in Touch & AV Controller Interface',
    productName: 'Digital Podiums (21.5" - 43")'
  },
  {
    id: 3,
    title: '4K Interactive Flat Panel Displays',
    subtitle: '20-point touch screens (55" to 110") with Dual OS Android & Windows for modern teaching.',
    image: '/images/products/product_6.jpg',
    alt: 'Full Series of Interactive Flat Panel LEDs 55 to 110 inch',
    productName: 'Interactive Flat Panel 86"'
  },
  {
    id: 4,
    title: 'Council Conference Audio Systems',
    subtitle: 'Chairman priority override & delegate microphones built for boardrooms and chambers.',
    image: '/images/client-uploads/upload_2.jpg',
    alt: 'Multinational Conference Room Installation with Conference Microphones',
    productName: 'MA4617 Conference System'
  },
  {
    id: 5,
    title: '4K AI Auto-Tracking PTZ Cameras',
    subtitle: 'Tag-free presenter tracking with 20x optical zoom for hybrid lecture halls.',
    image: '/images/ptz_camera_tracking_1793992811906.jpg',
    alt: '4K PTZ Robotic Tracking Conference Camera',
    productName: '4K AI Auto-Tracking PTZ Camera'
  }
];

export const HeroSlider: React.FC<HeroSliderProps> = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const slideCount = SLIDES.length;
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  useEffect(() => {
    resetTimeout();
    if (!isPaused) {
      timeoutRef.current = setTimeout(() => {
        setCurrentSlide((prev) => (prev + 1) % slideCount);
      }, 5500);
    }
    return () => resetTimeout();
  }, [currentSlide, isPaused, slideCount]);

  const handlePrev = () => {
    resetTimeout();
    setCurrentSlide((prev) => (prev === 0 ? slideCount - 1 : prev - 1));
  };

  const handleNext = () => {
    resetTimeout();
    setCurrentSlide((prev) => (prev + 1) % slideCount);
  };

  const slide = SLIDES[currentSlide];

  const handleWhatsAppSlideInquiry = () => {
    const text = `Hello Kohinoor AV, I would like to order *${slide.productName}*. Please share pricing and delivery details.`;
    window.open(`${BUSINESS_INFO.whatsappUrl}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section
      className="relative text-white overflow-hidden bg-gradient-to-br from-[#062c1b] via-[#0a3d26] to-[#041f13] border-b border-emerald-900/50"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Subtle Ambient Emerald Glow */}
      <div className="absolute top-0 left-1/4 w-[480px] h-[480px] bg-emerald-500/15 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-[400px] h-[400px] bg-emerald-400/15 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-10 sm:py-14 lg:py-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center min-h-[340px] sm:min-h-[380px]">
          {/* Left Text Carrier (6 columns): Strictly Heading + Description + 1 Button */}
          <div className="lg:col-span-6 space-y-5">
            <AnimatePresence mode="wait">
              <motion.div
                key={`slide-content-${slide.id}`}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 25 }}
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                className="space-y-4"
              >
                <h1 className="text-2xl sm:text-4xl lg:text-[42px] font-extrabold tracking-tight text-white leading-[1.15] text-balance">
                  {slide.title}
                </h1>

                <p className="text-sm sm:text-base text-emerald-50/90 leading-relaxed max-w-xl font-normal">
                  {slide.subtitle}
                </p>

                <div className="pt-1">
                  <button
                    onClick={handleWhatsAppSlideInquiry}
                    className="cursor-pointer px-5 py-2.5 bg-emerald-600 hover:bg-emerald-500 active:scale-95 text-white text-xs font-bold rounded-xl shadow-lg shadow-emerald-950/40 transition-all inline-flex items-center gap-2"
                  >
                    <MessageSquare className="w-3.5 h-3.5 fill-current" />
                    <span>Order on WhatsApp</span>
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right Clean Image Stage (6 columns) */}
          <div className="lg:col-span-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={`slide-img-${slide.id}`}
                initial={{ opacity: 0, scale: 0.95, x: 30 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                exit={{ opacity: 0, scale: 0.96, x: -25 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="relative"
              >
                <div className="rounded-2xl overflow-hidden border border-white/15 shadow-2xl bg-slate-950 aspect-16/10">
                  <img
                    src={slide.image}
                    alt={slide.alt}
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Minimal Slider Controls */}
        <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-2">
            {SLIDES.map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  resetTimeout();
                  setCurrentSlide(idx);
                }}
                className={`cursor-pointer h-1.5 rounded-full transition-all duration-300 ${
                  currentSlide === idx
                    ? 'w-8 sm:w-10 bg-emerald-400'
                    : 'w-2 bg-white/25 hover:bg-white/45'
                }`}
                aria-label={`Slide ${idx + 1}`}
              />
            ))}
          </div>

          <div className="flex items-center gap-1.5">
            <button
              onClick={handlePrev}
              className="p-2 rounded-lg bg-white/10 hover:bg-emerald-600 text-white border border-white/10 transition-colors cursor-pointer"
              aria-label="Previous Slide"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={handleNext}
              className="p-2 rounded-lg bg-white/10 hover:bg-emerald-600 text-white border border-white/10 transition-colors cursor-pointer"
              aria-label="Next Slide"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
