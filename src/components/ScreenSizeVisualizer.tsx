import React, { useState } from 'react';
import { BUSINESS_INFO } from '../data/products';
import { Tv, MessageSquare, Check, Users, Eye, Maximize2 } from 'lucide-react';
import { motion } from 'motion/react';

interface ScreenSize {
  size: string;
  diagonalInches: number;
  widthCm: number;
  heightCm: number;
  recommendedAudience: string;
  idealRoomType: string;
  viewingDistance: string;
  touchPoints: number;
  os: string;
  popularity: string;
}

const SCREEN_SIZES: ScreenSize[] = [
  {
    size: '55"',
    diagonalInches: 55,
    widthCm: 121,
    heightCm: 68,
    recommendedAudience: '10 – 18 Persons',
    idealRoomType: 'Huddle Room / Executive Office / Small Lab',
    viewingDistance: '1.5 – 3.5 Meters',
    touchPoints: 20,
    os: 'Android 13 + Optional Win11 OPS',
    popularity: 'Compact Executive'
  },
  {
    size: '65"',
    diagonalInches: 65,
    widthCm: 143,
    heightCm: 80,
    recommendedAudience: '18 – 35 Students',
    idealRoomType: 'Standard School Classroom / Meeting Room',
    viewingDistance: '2.0 – 5.0 Meters',
    touchPoints: 20,
    os: 'Android 13 + Windows OPS Dual OS',
    popularity: 'Most Popular School Size'
  },
  {
    size: '75"',
    diagonalInches: 75,
    widthCm: 165,
    heightCm: 93,
    recommendedAudience: '30 – 60 Students',
    idealRoomType: 'Medium University Lecture Hall / College Lab',
    viewingDistance: '2.5 – 7.0 Meters',
    touchPoints: 20,
    os: 'Android 13 + Windows OPS Dual OS',
    popularity: 'Best Seller Higher Education'
  },
  {
    size: '85" / 86"',
    diagonalInches: 86,
    widthCm: 189,
    heightCm: 107,
    recommendedAudience: '50 – 100 Students',
    idealRoomType: 'Large University Lecture Theatre / Boardroom',
    viewingDistance: '3.0 – 10.0 Meters',
    touchPoints: 20,
    os: 'Android 13 + Windows 11 Pro OPS Core i5/i7',
    popularity: 'Top Tier Corporate & Campus'
  },
  {
    size: '98"',
    diagonalInches: 98,
    widthCm: 216,
    heightCm: 122,
    recommendedAudience: '80 – 150 Attendees',
    idealRoomType: 'Executive Boardroom / High-End Conference Room',
    viewingDistance: '4.0 – 14.0 Meters',
    touchPoints: 20,
    os: 'Android 13 + Win11 OPS Dual System',
    popularity: 'Grand Format Display'
  },
  {
    size: '110"',
    diagonalInches: 110,
    widthCm: 243,
    heightCm: 137,
    recommendedAudience: '120 – 300 Attendees',
    idealRoomType: 'Auditorium / Ministry Briefing Hall / Command Room',
    viewingDistance: '4.5 – 20.0 Meters',
    touchPoints: 20,
    os: 'Commercial Dual OS Heavy-Duty Architecture',
    popularity: 'Flagship Cinema Scale'
  }
];

export const ScreenSizeVisualizer: React.FC = () => {
  const [selectedIdx, setSelectedIdx] = useState<number>(3); // 85"/86" default
  const active = SCREEN_SIZES[selectedIdx];

  const handleWhatsApp = () => {
    const text = `Hello Kohinoor AV, I am checking the *${active.size} 4K Interactive Flat Panel LED* on your visualizer tool. Please send availability and price quotation for Islamabad.`;
    window.open(`${BUSINESS_INFO.whatsappUrl}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-10 shadow-sm space-y-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <div className="text-xs font-bold text-blue-600 uppercase tracking-wider">
            Interactive LED Dimensional Selector
          </div>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-1">
            Compare Display Sizes (55" to 110")
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-xl">
            Choose a screen size to see exact physical dimensions, recommended room capacity, viewing distance, and classroom suitability.
          </p>
        </div>

        <span className="text-xs font-semibold px-3 py-1.5 rounded-full bg-blue-50 text-blue-700 border border-blue-200 self-start md:self-auto">
          Stock in Islamabad Warehouse
        </span>
      </div>

      {/* Size Selector Tabs */}
      <div className="flex flex-wrap items-center gap-2 border-b border-slate-100 pb-4">
        {SCREEN_SIZES.map((item, index) => (
          <button
            key={item.size}
            onClick={() => setSelectedIdx(index)}
            className={`cursor-pointer px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
              selectedIdx === index
                ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            {item.size}
          </button>
        ))}
      </div>

      {/* Visual Comparison Stage */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left Visual Representation */}
        <div className="lg:col-span-6 bg-slate-950 rounded-2xl p-6 sm:p-8 flex flex-col items-center justify-center min-h-[300px] relative overflow-hidden border border-slate-800">
          <div className="absolute inset-0 bg-[radial-gradient(#1e40af_1px,transparent_1px)] [background-size:16px_16px] opacity-25" />

          {/* Scaled Bezel Preview */}
          <motion.div
            key={active.size}
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="relative z-10 w-full max-w-md bg-slate-900 border-2 border-blue-500 rounded-xl p-3 shadow-[0_0_40px_rgba(37,99,235,0.35)] flex flex-col items-center text-center space-y-2"
          >
            <div className="w-full aspect-16/9 bg-gradient-to-br from-blue-950 via-slate-900 to-blue-900 rounded-lg flex flex-col items-center justify-center p-4 border border-blue-400/30">
              <Tv className="w-10 h-10 text-blue-400 mb-1" />
              <div className="text-xl sm:text-2xl font-extrabold text-white">
                {active.size}
              </div>
              <div className="text-[11px] text-blue-300 font-mono">
                {active.widthCm} cm × {active.heightCm} cm
              </div>
              <div className="text-[10px] text-slate-300 mt-2 bg-black/40 px-2.5 py-0.5 rounded-full">
                4K Ultra-HD · 20-Point Multi-Touch
              </div>
            </div>

            {/* Stand Base */}
            <div className="w-24 h-2 bg-slate-700 rounded-full" />
          </motion.div>

          <div className="mt-4 text-[11px] text-slate-400 z-10">
            Available on Fixed Wall Bracket or Heavy-Duty Mobile Trolley Cart
          </div>
        </div>

        {/* Right Dimension & Fit Breakdown */}
        <div className="lg:col-span-6 space-y-5">
          <div className="space-y-1">
            <span className="text-[11px] font-bold text-blue-600 uppercase tracking-wider">
              {active.popularity}
            </span>
            <h4 className="text-xl font-extrabold text-slate-900">
              {active.size} Interactive Flat Panel Specifications
            </h4>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
              <div className="flex items-center gap-1.5 text-xs text-slate-500">
                <Users className="w-3.5 h-3.5 text-blue-600" />
                <span>Audience</span>
              </div>
              <div className="text-xs sm:text-sm font-bold text-slate-900 mt-1">
                {active.recommendedAudience}
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
              <div className="flex items-center gap-1.5 text-xs text-slate-500">
                <Eye className="w-3.5 h-3.5 text-blue-600" />
                <span>Viewing Distance</span>
              </div>
              <div className="text-xs sm:text-sm font-bold text-slate-900 mt-1">
                {active.viewingDistance}
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
              <div className="flex items-center gap-1.5 text-xs text-slate-500">
                <Maximize2 className="w-3.5 h-3.5 text-blue-600" />
                <span>Width × Height</span>
              </div>
              <div className="text-xs sm:text-sm font-bold text-slate-900 mt-1">
                {active.widthCm} × {active.heightCm} cm
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
              <div className="flex items-center gap-1.5 text-xs text-slate-500">
                <Check className="w-3.5 h-3.5 text-blue-600" />
                <span>Multi-Touch</span>
              </div>
              <div className="text-xs sm:text-sm font-bold text-slate-900 mt-1">
                {active.touchPoints} Touch Points
              </div>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-blue-50/70 border border-blue-200 text-xs text-blue-900 space-y-1">
            <div className="font-bold">Ideal Deployment Setting:</div>
            <div>{active.idealRoomType}</div>
          </div>

          <div className="pt-2">
            <button
              onClick={handleWhatsApp}
              className="w-full sm:w-auto cursor-pointer px-6 py-3 bg-blue-600 hover:bg-blue-700 active:scale-95 text-white text-xs font-bold rounded-xl shadow-md transition-all flex items-center justify-center gap-2"
            >
              <MessageSquare className="w-4 h-4 fill-current" />
              <span>Inquire {active.size} on WhatsApp</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
