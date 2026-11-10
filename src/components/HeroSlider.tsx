import React, { useState, useEffect, useRef } from 'react';
import { PageId } from '../types';
import { BUSINESS_INFO } from '../data/products';
import {
  ArrowRight,
  MessageSquare,
  ChevronLeft,
  ChevronRight,
  Award,
  CheckCircle2,
  Tv,
  Mic2,
  Video,
  Monitor
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface HeroSliderProps {
  onNavigate: (page: PageId) => void;
  onOpenQuoteModal: (productName?: string) => void;
}

interface Slide {
  id: number;
  tag: string;
  title: string;
  subtitle: string;
  image: string;
  alt: string;
  targetPage: PageId;
  productName: string;
  badge: string;
  specsHighlight: string[];
}

const SLIDES: Slide[] = [
  {
    id: 1,
    tag: 'Turnkey AV Engineering · Islamabad',
    title: 'Professional Audio Visual & Smart Classroom Solutions in Pakistan',
    subtitle: 'Your trusted supply & engineering partner for Digital Podiums, 4K Interactive LED Panels, Multimedia Projectors, and Boardroom Conference Systems.',
    image: '/images/client-uploads/upload_5.jpg',
    alt: 'Beterva Digital Smart Podiums in University Auditorium',
    targetPage: 'smart-classroom-solutions',
    productName: 'Turnkey Smart Classroom',
    badge: '15+ Years Industry Experience',
    specsHighlight: ['Nationwide Logistics', 'Official Warranty', 'Blue Area Islamabad Office']
  },
  {
    id: 2,
    tag: 'National Institution Reference',
    title: 'Smart Digital Rostrums with Integrated Touch & 60W Audio',
    subtitle: 'Commercial steel presentation rostrums in 21.5", 32", and 43" sizes. Officially deployed at NUST Islamabad, university lecture halls, and government chambers.',
    image: '/images/client-uploads/upload_3.jpg',
    alt: 'Digital Rostrum with Built-in Touch & AV Controller Interface',
    targetPage: 'digital-podiums',
    productName: 'Digital Podiums (21.5" - 43")',
    badge: 'Deployed at NUST Islamabad',
    specsHighlight: ['Integrated Touchscreen', 'Gooseneck Mics', 'Heavy-Duty Steel Body']
  },
  {
    id: 3,
    tag: 'Warehouse Direct Stock',
    title: '4K Interactive Flat Panel LED Displays (55" to 110")',
    subtitle: 'Commercial 20-point multi-touch writing with Dual OS (Android 13 + Windows OPS), 4mm anti-glare toughened glass, and heavy-duty mobile trolley carts.',
    image: '/images/products/product_6.jpg',
    alt: 'Full Series of Interactive Flat Panel LEDs 55 to 110 inch',
    targetPage: 'interactive-led-displays',
    productName: 'Interactive Flat Panel 86"',
    badge: 'In-Stock in Islamabad',
    specsHighlight: ['Dual OS (Win + Android)', 'Zero-Lag Stylus', '4K UHD Anti-Glare']
  },
  {
    id: 4,
    tag: 'Diplomatic & Chamber Standard',
    title: 'Council Conference Microphone Systems with Chairman Priority',
    subtitle: 'MA4617A Chairman units with priority mute override, Beterva BE-2400C discussion consoles, and acoustic speech solutions deployed in multinational council rooms.',
    image: '/images/client-uploads/upload_2.jpg',
    alt: 'Multinational Conference Room Installation with Conference Microphones',
    targetPage: 'conference-systems',
    productName: 'MA4617 Conference System',
    badge: 'Chairman Priority Speech Control',
    specsHighlight: ['Priority Mute Button', 'Feedback Suppression', 'DSP Amplifier Ready']
  },
  {
    id: 5,
    tag: 'Intelligent Video Capture',
    title: '4K AI Auto-Tracking PTZ Robotic Cameras',
    subtitle: 'Precision presenter-tracking without wearable tags. 12x/20x optical zoom with simultaneous HDMI, USB 3.0, and IP streaming for hybrid university lecture halls.',
    image: '/images/ptz_camera_tracking_1793992811906.jpg',
    alt: '4K PTZ Robotic Tracking Conference Camera',
    targetPage: 'ptz-robotic-cameras',
    productName: '4K AI Auto-Tracking PTZ Camera',
    badge: 'AI Presenter Auto-Tracking',
    specsHighlight: ['Tag-free AI Tracking', '4K 60FPS Video', 'HDMI / USB / IP Triple Output']
  }
];

export const HeroSlider: React.FC<HeroSliderProps> = ({ onNavigate, onOpenQuoteModal }) => {
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
      }, 6000);
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
    const text = `Hello Kohinoor AV, I am inquiring about *${slide.productName}* featured on your website banner. Please share current pricing and delivery timelines.`;
    window.open(`${BUSINESS_INFO.whatsappUrl}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section
      className="relative text-white overflow-hidden bg-gradient-to-br from-[#072115] via-[#0d3420] to-[#05180f] border-b border-emerald-900/60"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Dynamic Emerald Lighting Gradients */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-emerald-500/20 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-[500px] h-[500px] bg-emerald-600/25 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute -top-24 right-1/3 w-[350px] h-[350px] bg-teal-500/15 rounded-full blur-[100px] pointer-events-none" />

      {/* Subtle Grid Lines */}
      <div
        className="absolute inset-0 opacity-[0.12] pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255, 255, 255, 0.15) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.15) 1px, transparent 1px)
          `,
          backgroundSize: '48px 48px'
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-12 sm:py-16 lg:py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center min-h-[480px]">
          {/* Left Text Carrier (7 columns) with Smooth Staggered Entrance */}
          <div className="lg:col-span-7 space-y-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={`slide-content-${slide.id}`}
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 30 }}
                transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                className="space-y-6"
              >
                {/* Luminous Tag Badge in Emerald Green */}
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/20 border border-emerald-400/40 text-emerald-200 text-xs font-bold tracking-wide backdrop-blur-md shadow-sm">
                  <Award className="w-3.5 h-3.5 text-emerald-300" />
                  <span>{slide.tag}</span>
                </div>

                {/* Hero Headline */}
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-[1.18] drop-shadow-sm">
                  {slide.title}
                </h1>

                {/* Subtitle */}
                <p className="text-sm sm:text-base text-emerald-100/90 leading-relaxed max-w-2xl font-normal">
                  {slide.subtitle}
                </p>

                {/* Micro Spec Badges */}
                <div className="flex flex-wrap items-center gap-2 pt-1">
                  {slide.specsHighlight.map((spec, i) => (
                    <span
                      key={i}
                      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/10 backdrop-blur-sm border border-white/15 text-xs text-white font-medium"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-300" />
                      <span>{spec}</span>
                    </span>
                  ))}
                </div>

                {/* Action Buttons - Clean WhatsApp (No Phone in Label) */}
                <div className="flex flex-wrap items-center gap-4 pt-3">
                  <button
                    onClick={handleWhatsAppSlideInquiry}
                    className="cursor-pointer px-6 py-3.5 bg-emerald-600 hover:bg-emerald-500 active:scale-95 text-white text-xs sm:text-sm font-bold rounded-xl shadow-[0_10px_30px_rgba(16,185,129,0.35)] hover:shadow-emerald-500/50 transition-all flex items-center gap-2.5"
                  >
                    <MessageSquare className="w-4 h-4 fill-current" />
                    <span>Order on WhatsApp</span>
                  </button>

                  <button
                    onClick={() => onNavigate(slide.targetPage)}
                    className="cursor-pointer px-6 py-3.5 bg-white/10 hover:bg-white/20 text-white active:scale-95 text-xs sm:text-sm font-semibold rounded-xl border border-white/25 backdrop-blur-md transition-all flex items-center gap-2"
                  >
                    <span>View Specifications</span>
                    <ArrowRight className="w-4 h-4 text-emerald-300" />
                  </button>
                </div>

                {/* Trust Signals */}
                <div className="pt-2 flex flex-wrap items-center gap-6 text-xs text-emerald-200/90 border-t border-white/10 pt-4">
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <span>Islamabad Stock</span>
                  </span>
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <span>Nationwide Installation</span>
                  </span>
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <span>Official Warranty</span>
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right Image Stage (5 columns) with Zoom & Floating Luminous Card */}
          <div className="lg:col-span-5">
            <AnimatePresence mode="wait">
              <motion.div
                key={`slide-img-${slide.id}`}
                initial={{ opacity: 0, scale: 0.92, x: 40 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                exit={{ opacity: 0, scale: 0.95, x: -30 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="relative"
              >
                {/* Luminous Glow Behind Image Container */}
                <div className="absolute -inset-1.5 bg-gradient-to-r from-emerald-500 to-teal-400 rounded-3xl opacity-35 blur-xl group-hover:opacity-60 transition duration-700" />

                <div className="relative rounded-3xl overflow-hidden border border-white/20 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.6)] bg-slate-900/90 backdrop-blur-md">
                  <div className="aspect-16/10 sm:aspect-4/3 w-full overflow-hidden bg-slate-950 flex items-center justify-center p-2.5">
                    <img
                      src={slide.image}
                      alt={slide.alt}
                      className="w-full h-full object-cover rounded-2xl hover:scale-103 transition-transform duration-700"
                    />
                  </div>

                  {/* Floating Specs Pill on Image */}
                  <div className="absolute bottom-4 left-4 right-4 bg-slate-950/90 backdrop-blur-md p-3.5 rounded-2xl border border-white/15 flex items-center justify-between text-xs shadow-xl">
                    <div className="min-w-0 pr-3">
                      <div className="text-[10px] text-emerald-400 font-bold uppercase tracking-wider">
                        {slide.badge}
                      </div>
                      <div className="font-extrabold text-white text-xs sm:text-sm mt-0.5 truncate">
                        {slide.productName}
                      </div>
                    </div>
                    <button
                      onClick={handleWhatsAppSlideInquiry}
                      className="px-3.5 py-1.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg text-xs font-bold transition-all shrink-0 flex items-center gap-1.5 shadow-md"
                    >
                      <MessageSquare className="w-3.5 h-3.5" />
                      <span>WhatsApp</span>
                    </button>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Slider Controls: Dynamic Progress Bars & Arrows */}
        <div className="mt-8 pt-6 border-t border-white/15 flex items-center justify-between">
          {/* Slide Indicators with Progress Bar */}
          <div className="flex items-center gap-2 sm:gap-3">
            {SLIDES.map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  resetTimeout();
                  setCurrentSlide(idx);
                }}
                className={`cursor-pointer h-2 rounded-full transition-all duration-400 ${
                  currentSlide === idx
                    ? 'w-10 sm:w-14 bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.8)]'
                    : 'w-2.5 bg-white/20 hover:bg-white/40'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
            <span className="text-xs text-emerald-200/80 ml-2 font-mono">
              0{currentSlide + 1} / 0{slideCount}
            </span>
          </div>

          {/* Navigation Arrows */}
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrev}
              className="p-2.5 rounded-xl bg-white/10 hover:bg-emerald-700 text-white border border-white/15 backdrop-blur-md transition-colors cursor-pointer"
              aria-label="Previous Slide"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={handleNext}
              className="p-2.5 rounded-xl bg-white/10 hover:bg-emerald-700 text-white border border-white/15 backdrop-blur-md transition-colors cursor-pointer"
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
