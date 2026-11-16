import React, { useState } from 'react';
import { PageId, Product } from '../types';
import { PRODUCTS, BUSINESS_INFO } from '../data/products';
import { ProductCard } from '../components/ProductCard';
import {
  CheckCircle2,
  MessageSquare,
  Sparkles,
  Layers
} from 'lucide-react';

interface InteractiveLedPageProps {
  onNavigate: (page: PageId) => void;
  onSelectProduct: (product: Product) => void;
  onOpenQuoteModal: (productName?: string) => void;
}

export const InteractiveLedPage: React.FC<InteractiveLedPageProps> = ({
  onNavigate,
  onSelectProduct,
  onOpenQuoteModal
}) => {
  const [activeSize, setActiveSize] = useState<string>('86');
  const ledProducts = PRODUCTS.filter((p) => p.category === 'interactive-led-displays');

  const sizeMatrix: Record<string, { desc: string; room: string; dims: string }> = {
    '55': {
      desc: 'Compact 4K multi-touch flat panel suited for faculty offices, huddle spaces, and small seminar laboratories.',
      room: '10–18 Participants',
      dims: '1265 × 768 × 85 mm'
    },
    '65': {
      desc: 'Ideal for standard school classrooms, collaborative meeting spaces, and medium training rooms.',
      room: '18–35 Participants',
      dims: '1488 × 896 × 88 mm'
    },
    '75': {
      desc: 'The benchmark display size for university classrooms, medical colleges, and corporate conference rooms.',
      room: '30–55 Participants',
      dims: '1709 × 1020 × 88 mm'
    },
    '85': {
      desc: 'Large-format 4K interactive canvas delivering crisp legibility for medium auditoriums and lecture halls.',
      room: '45–75 Participants',
      dims: '1957 × 1160 × 90 mm'
    },
    '86': {
      desc: 'Our most requested institutional display. 4K Ultra HD IPS panel with anti-glare glass and dual stylus handwriting.',
      room: '50–90 Participants',
      dims: '1968 × 1170 × 90 mm'
    },
    '98': {
      desc: 'Executive boardroom and command center scale. Replaces multi-panel video walls with one seamless 4K surface.',
      room: '80–140 Participants',
      dims: '2216 × 1310 × 95 mm'
    },
    '110': {
      desc: 'Flagship cinema-scale interactive display engineered for grand auditoriums, senate halls, and ministries.',
      room: '120+ Participants',
      dims: '2480 × 1460 × 100 mm'
    }
  };

  const handleWhatsAppSizeInquiry = (size: string) => {
    const text = `Hello Kohinoor AV, I would like specifications and institutional quotation details for the *${size}-Inch 4K Interactive LED Display*. Please share stock availability.`;
    window.open(`${BUSINESS_INFO.whatsappUrl}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <div className="space-y-16 py-10 max-w-7xl mx-auto px-4 sm:px-8">
      {/* Category Header */}
      <div className="space-y-4 max-w-3xl">
        <div className="text-xs font-bold text-emerald-700 uppercase tracking-wider">
          Category 01 · Collaborative Smart Displays
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
          Interactive LED Displays (55" – 110")
        </h1>
        <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
          Commercial 4K Ultra HD touch screens designed for modern smart classrooms, university lecture halls, and executive boardrooms. Available in 55", 65", 75", 85", 86", 98", and 110" diagonal sizes with 20-point multi-touch writing and Dual OS (Android + Windows OPS).
        </p>
      </div>

      {/* Supply Lineup Banner */}
      <div className="bg-gradient-to-br from-[#072115] via-[#0d3420] to-[#05180f] rounded-3xl overflow-hidden border border-emerald-900/60 shadow-2xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-8 sm:p-12">
          <div className="lg:col-span-6 space-y-5 text-white">
            <div className="inline-flex items-center gap-1.5 text-emerald-300 text-xs font-bold uppercase tracking-wider">
              <Layers className="w-4 h-4" />
              <span>Complete Diagonal Lineup Available</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white leading-snug">
              Full Interactive LED Series (55" to 110") in Pakistan
            </h2>
            <p className="text-xs sm:text-sm text-emerald-100/85 leading-relaxed">
              Kohinoor Audio Visual supplies the complete commercial interactive panel series: <strong>55", 65", 75", 85", 86", 98", and 110"</strong>. Every unit features 4mm anti-glare toughened glass, ultra-responsive touch sensors, and wireless device mirroring.
            </p>

            <div className="grid grid-cols-2 gap-3 text-xs text-emerald-100/90 pt-2">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Dual OS: Android + Windows OPS</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>4mm Anti-Glare Safety Glass</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>20-Point Multi-Touch with Stylus</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>4-Way Wireless Screen Mirroring</span>
              </div>
            </div>

            <div className="pt-2 flex flex-wrap gap-3">
              <button
                onClick={() => handleWhatsAppSizeInquiry(activeSize)}
                className="cursor-pointer px-6 py-3 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold rounded-xl transition-all shadow-md flex items-center gap-2"
              >
                <MessageSquare className="w-4 h-4 fill-current" />
                <span>Inquire on WhatsApp</span>
              </button>
              <button
                onClick={() => onOpenQuoteModal(`Interactive LED Display ${activeSize} Inch`)}
                className="cursor-pointer px-5 py-3 bg-emerald-950/80 hover:bg-emerald-900 text-emerald-200 text-xs font-semibold rounded-xl border border-emerald-800 transition-colors"
              >
                Request Institutional Bid Sheet
              </button>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="rounded-2xl overflow-hidden border border-emerald-800/80 bg-slate-900 shadow-2xl">
              <img
                src="/images/products/product_6.jpg"
                alt="Interactive LED Displays Lineup 55 to 110 inch in Kohinoor AV Warehouse"
                className="w-full h-auto object-cover"
              />
              <div className="p-3 bg-[#05180f] text-[11px] text-emerald-200/90 flex items-center justify-between border-t border-emerald-900">
                <span>Available Screen Sizes</span>
                <span className="font-bold text-emerald-400">55" · 65" · 75" · 85" · 86" · 98" · 110"</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Size Explorer */}
      <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 space-y-6 shadow-xs max-w-5xl mx-auto">
        <div>
          <div className="text-xs font-bold text-emerald-700 uppercase tracking-wider">
            Display Size Guide
          </div>
          <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 mt-1">
            Compare Size Variations (55" to 110")
          </h2>
        </div>

        <div className="flex items-center gap-2 overflow-x-auto pb-1">
          {Object.keys(sizeMatrix).map((sizeKey) => (
            <button
              key={sizeKey}
              onClick={() => setActiveSize(sizeKey)}
              className={`cursor-pointer px-4 py-2.5 rounded-xl font-bold text-xs transition-all whitespace-nowrap tabular-nums ${
                activeSize === sizeKey
                  ? 'bg-emerald-700 text-white shadow-md'
                  : 'bg-slate-100 text-slate-700 hover:bg-emerald-50 hover:text-emerald-800'
              }`}
            >
              {sizeKey}-Inch 4K
            </button>
          ))}
        </div>

        <div className="p-6 bg-emerald-50/50 rounded-2xl border border-emerald-100 grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
          <div className="md:col-span-2 space-y-2">
            <div className="flex items-center gap-2 text-emerald-800 font-bold text-xs">
              <Sparkles className="w-4 h-4 text-emerald-600" />
              <span>Recommended Room Scope</span>
            </div>
            <h3 className="text-lg font-bold text-slate-900">
              {activeSize}-Inch 4K Commercial Interactive LED Display
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              {sizeMatrix[activeSize].desc}
            </p>
            <div className="flex flex-wrap items-center gap-4 text-xs text-slate-700 pt-1 font-medium tabular-nums">
              <span>Audience: <strong className="text-slate-900">{sizeMatrix[activeSize].room}</strong></span>
              <span aria-hidden="true">&middot;</span>
              <span>Dimensions: <strong className="text-slate-900">{sizeMatrix[activeSize].dims}</strong></span>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <button
              onClick={() => handleWhatsAppSizeInquiry(activeSize)}
              className="cursor-pointer w-full py-3 bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-bold rounded-xl text-center transition-colors shadow-sm flex items-center justify-center gap-2"
            >
              <MessageSquare className="w-4 h-4 fill-current" />
              <span>Inquire on WhatsApp</span>
            </button>
            <button
              onClick={() => onNavigate('contact')}
              className="cursor-pointer w-full py-2.5 bg-white hover:bg-slate-100 text-slate-800 text-xs font-semibold rounded-xl border border-slate-200 text-center transition-colors"
            >
              Book On-Site Demo in Islamabad
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Trolley Integration */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-slate-100/80 rounded-3xl p-6 sm:p-10 border border-slate-200 max-w-5xl mx-auto">
        <div className="lg:col-span-5">
          <div className="rounded-2xl overflow-hidden border border-slate-200 bg-white p-2 shadow-md">
            <img
              src="/images/products/product_7.jpg"
              alt="Interactive LED Display on Heavy-Duty Mobile Trolley Cart with Whiteboard"
              className="w-full h-auto object-cover rounded-xl"
            />
          </div>
        </div>
        <div className="lg:col-span-7 space-y-4">
          <div className="text-xs font-bold text-emerald-700 uppercase tracking-wider">
            Mobility &amp; Versatility
          </div>
          <h2 className="text-2xl font-extrabold text-slate-900">
            Heavy-Duty Mobile Trolley Carts with Lockable Castors
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            Share interactive displays effortlessly across multiple classrooms and executive meeting rooms. Our high-tensile steel trolley carts support panels from 55" to 100", complete with silent lockable wheels, lower AV equipment shelf, and optional top PTZ camera mount.
          </p>
          <div className="pt-2">
            <a
              href={`${BUSINESS_INFO.whatsappUrl}?text=${encodeURIComponent('Hello Kohinoor AV, I would like information on Mobile Trolley Stands for Interactive LED Displays.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer inline-flex items-center gap-2 px-5 py-2.5 bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-bold rounded-xl transition-colors shadow-sm"
            >
              <MessageSquare className="w-4 h-4 fill-current" />
              <span>Inquire on WhatsApp</span>
            </a>
          </div>
        </div>
      </div>

      {/* Catalog Grid */}
      <div className="space-y-6">
        <div className="max-w-2xl">
          <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
            Interactive LED Display Series
          </h2>
          <p className="text-xs text-slate-500 mt-1">
            Supplied with dual styluses, wall mount or mobile trolley cart, remote control, and integrated whiteboard software.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ledProducts.map((prod, idx) => (
            <ProductCard
              key={prod.id}
              product={prod}
              onSelect={onSelectProduct}
              onOpenQuote={onOpenQuoteModal}
              index={idx}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
