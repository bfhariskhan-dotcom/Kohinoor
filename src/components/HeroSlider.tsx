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
    title: '4K Interactive LED Displays (55" – 110")',
    subtitle: '20-point multi-touch panels with Dual OS (Android + Windows OPS) in ready stock across Pakistan.',
    image: '/images/products/product_6.jpg',
    alt: 'Kohinoor AV Interactive LED Displays Warehouse Stock 55 to 110 Inch',
    productName: 'Interactive LED Display (55"–110")'
  },
  {
    id: 2,
    title: 'Casio & Mitsubishi Multimedia Projectors',
    subtitle: 'Mitsubishi 8000 Series (7,300–8,500 Lumens) & Casio XJ-S400UN LampFree Laser/LED projectors.',
    image: '/images/real-stock/mitsubishi-ud8900u.jpg',
    alt: 'Mitsubishi Electric 8000 Series Multimedia Projector UD8900U White Finish',
    productName: 'Mitsubishi 8000 Series & Casio XJ-S400UN'
  },
  {
    id: 3,
    title: 'Black & White Digital Podiums',
    subtitle: 'Dual gooseneck & 2 wireless mics, 60W audio output, MP3/USB/SD/AUX console & 29 kg steel chassis.',
    image: '/images/client-uploads/upload_3.jpg',
    alt: 'Digital Podium Installation in University Lecture Hall',
    productName: 'Black & White Digital Podiums'
  },
  {
    id: 4,
    title: 'Tenveo TEVO-VA3000E Video Conferencing',
    subtitle: '10X Lossless Zoom HD 1080p PTZ camera, speakerphone & 2 expansion mics for up to 25 people.',
    image: '/images/real-stock/tenveo-va3000e.jpg',
    alt: 'Tenveo TEVO-VA3000E All-in-One Video and Audio Conference System',
    productName: 'Tenveo TEVO-VA3000 / TEVO-VA3000E'
  },
  {
    id: 5,
    title: 'Stage & Floor Teleprompters (TP27–TP100)',
    subtitle: '27" to 100" Full HD stage monitor prompters with foot pedal, remote & HDMI/SDI/Wireless inputs.',
    image: '/images/products/product_2.jpg',
    alt: 'Stage Monitor Floor Captioner Teleprompter System TP27 to TP100',
    productName: 'Stage Floor Teleprompters (TP27–TP100)'
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
    const text = `Hello Kohinoor AV, I would like technical specifications and institutional quotation details for *${slide.productName}*.`;
    window.open(`${BUSINESS_INFO.whatsappUrl}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section
      className="relative text-white overflow-hidden bg-gradient-to-br from-emerald-700 via-emerald-600 to-emerald-800 border-b border-emerald-500/40"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Subtle Ambient Light-Emerald Glow */}
      <div className="absolute top-0 left-1/4 w-[480px] h-[480px] bg-emerald-300/20 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-[400px] h-[400px] bg-emerald-200/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-8 sm:py-12 lg:py-14 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-12 items-center">
          {/* Left Text Carrier (6 columns): Strictly Heading + Description + 1 Button */}
          <div className="lg:col-span-6 space-y-4 sm:space-y-5">
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
                    className="cursor-pointer px-5 py-2.5 bg-white hover:bg-emerald-50 active:scale-95 text-emerald-800 text-xs font-extrabold rounded-xl shadow-lg shadow-emerald-900/25 transition-all inline-flex items-center gap-2"
                  >
                    <MessageSquare className="w-3.5 h-3.5 fill-current text-emerald-600" />
                    <span>Order on WhatsApp</span>
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right Clean Image Stage (6 columns) — Full Uncropped Product View */}
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
                <div className="rounded-2xl overflow-hidden border border-white/25 shadow-2xl bg-white p-3 sm:p-4 h-[250px] sm:h-[310px] lg:h-[340px] flex items-center justify-center">
                  <img
                    src={slide.image}
                    alt={slide.alt}
                    className="w-full h-full object-contain rounded-xl"
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
