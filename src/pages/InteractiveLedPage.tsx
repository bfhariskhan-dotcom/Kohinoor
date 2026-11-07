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
    '65': {
      desc: 'Ideal for standard seminar rooms, collaborative meeting spaces, and small training laboratories.',
      room: '10–25 Participants',
      dims: '1488 x 896 x 88 mm'
    },
    '75': {
      desc: 'The gold standard for standard university lecture rooms, high school smart classrooms, and corporate boardrooms.',
      room: '25–45 Participants',
      dims: '1709 x 1020 x 88 mm'
    },
    '85': {
      desc: 'Large-format interactive surface providing magnificent readability for medium auditoriums and tiered lecture theaters.',
      room: '40–70 Participants',
      dims: '1957 x 1160 x 90 mm'
    },
    '86': {
      desc: 'Our most requested institutional model. 4K Ultra HD IPS panel with anti-glare glass and dual stylus handwriting for maximum impact.',
      room: '45–80 Participants',
      dims: '1968 x 1170 x 90 mm'
    },
    '98': {
      desc: 'Command center and executive boardroom scale. Replaces video walls with a seamless, gigantic 4K multi-touch surface.',
      room: '75–120 Participants',
      dims: '2216 x 1310 x 95 mm'
    },
    '110': {
      desc: 'Flagship massive interactive canvas for grand auditoriums, senate halls, and national conference rooms.',
      room: '100+ Participants',
      dims: '2480 x 1460 x 100 mm'
    }
  };

  const handleWhatsAppSizeInquiry = (size: string) => {
    const text = `Hello Kohinoor AV, I would like to order / get pricing for the *${size}-Inch 4K Interactive Flat Panel LED Display*. Please provide stock availability and delivery timeline to my city.`;
    window.open(`${BUSINESS_INFO.whatsappUrl}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <div className="space-y-16 py-10 max-w-7xl mx-auto px-4 sm:px-8">
      {/* Category Header */}
      <div className="space-y-4 max-w-3xl">
        <div className="text-xs font-bold text-blue-600 uppercase tracking-wider">
          Product Category 03 · Collaborative Displays
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
          Interactive Flat Panel 4K LED Displays
        </h1>
        <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
          Premium 4K Ultra HD touch screens designed for modern smart classrooms, university amphitheaters, and executive boardrooms. Featuring 20-point touch writing, dual OS (Android 13 + Windows OPS), anti-glare 4mm safety glass, and mobile cart solutions.
        </p>
      </div>

      {/* Warehouse Supply Lineup Banner (Image 6) */}
      <div className="bg-slate-950 rounded-3xl overflow-hidden border border-slate-800 shadow-2xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-8 sm:p-12">
          <div className="lg:col-span-6 space-y-5 text-white">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-blue-900/60 text-blue-300 text-xs font-bold">
              <Layers className="w-3.5 h-3.5" />
              <span>Full Scale In-Stock Inventory</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white leading-snug">
              Complete Interactive LED Series (55" to 110") in Pakistan
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Kohinoor Audio Visual imports and stocks the complete diagonal lineup ready for dispatch from Islamabad: <strong>55", 65", 75", 85", 86", 98", and 110"</strong> interactive touch flat panels. Every unit is tested with high-precision optical touch sensors and commercial 4K panels.
            </p>

            <div className="grid grid-cols-2 gap-3 text-xs text-slate-300 pt-2">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
                <span>Dual OS: Android 13 + Windows OPS</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
                <span>4mm Anti-Glare Toughened Glass</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
                <span>20-Point Multi-Touch with Dual Pen</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
                <span>4-Way Wireless Screen Mirroring</span>
              </div>
            </div>

            <div className="pt-2 flex flex-wrap gap-3">
              <button
                onClick={() => handleWhatsAppSizeInquiry(activeSize)}
                className="cursor-pointer px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold rounded-xl transition-all shadow-md flex items-center gap-2"
              >
                <MessageSquare className="w-4 h-4 fill-current" />
                <span>Order {activeSize}" on WhatsApp</span>
              </button>
              <button
                onClick={() => onOpenQuoteModal(`Interactive Flat Panel ${activeSize} Inch`)}
                className="cursor-pointer px-5 py-3 bg-slate-900 hover:bg-slate-800 text-slate-200 text-xs font-semibold rounded-xl border border-slate-700 transition-colors"
              >
                Request Itemized Bid Sheet
              </button>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="rounded-2xl overflow-hidden border border-slate-700 bg-slate-900 shadow-2xl">
              <img
                src="/images/products/product_6.jpg"
                alt="Interactive Flat Panel LED Displays Lineup 55 to 110 inch in Kohinoor AV Warehouse"
                className="w-full h-auto object-cover"
              />
              <div className="p-3 bg-slate-950 text-[11px] text-slate-300 flex items-center justify-between">
                <span>Warehouse Stock in Pakistan</span>
                <span className="font-bold text-blue-400">55" · 65" · 75" · 85" · 86" · 98" · 110"</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Size Explorer */}
      <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 space-y-6 shadow-xs max-w-5xl mx-auto">
        <div>
          <div className="text-xs font-bold text-blue-600 uppercase tracking-wider">
            Interactive Size Selector
          </div>
          <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 mt-1">
            Choose Screen Size for Instant WhatsApp Details
          </h2>
        </div>

        {/* Size Tabs in Royal Blue */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1">
          {Object.keys(sizeMatrix).map((sizeKey) => (
            <button
              key={sizeKey}
              onClick={() => setActiveSize(sizeKey)}
              className={`cursor-pointer px-5 py-2.5 rounded-xl font-bold text-xs transition-all whitespace-nowrap ${
                activeSize === sizeKey
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              {sizeKey}-Inch 4K LED
            </button>
          ))}
        </div>

        {/* Selected Size Details Card */}
        <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200 grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
          <div className="md:col-span-2 space-y-2">
            <div className="flex items-center gap-2 text-blue-700 font-bold text-xs">
              <Sparkles className="w-4 h-4" />
              <span>Recommended Room Scope</span>
            </div>
            <h3 className="text-lg font-bold text-slate-900">
              {activeSize}-Inch 4K Commercial Interactive Display
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              {sizeMatrix[activeSize].desc}
            </p>
            <div className="flex items-center gap-4 text-xs text-slate-700 pt-1 font-medium">
              <span>Audience: <strong className="text-slate-900">{sizeMatrix[activeSize].room}</strong></span>
              <span>&middot;</span>
              <span>Dimensions: <strong className="text-slate-900">{sizeMatrix[activeSize].dims}</strong></span>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <button
              onClick={() => handleWhatsAppSizeInquiry(activeSize)}
              className="cursor-pointer w-full py-3 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold rounded-xl text-center transition-colors shadow-sm flex items-center justify-center gap-2"
            >
              <MessageSquare className="w-4 h-4 fill-current" />
              <span>Get WhatsApp Price</span>
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

      {/* Mobile Trolley Integration (Image 7) */}
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
          <div className="text-xs font-bold text-blue-600 uppercase tracking-wider">
            Mobility &amp; Versatility
          </div>
          <h2 className="text-2xl font-extrabold text-slate-900">
            Heavy-Duty Mobile Trolley Carts with Lockable Castors
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            Maximize your institution's return on investment by sharing interactive displays between multiple classrooms, seminar halls, and executive rooms. Our high-tensile steel trolley carts support displays from 55" to 100", featuring smooth 360-degree lockable wheels, an integrated AV laptop shelf, and dedicated top camera mount for PTZ video conferencing cameras.
          </p>
          <div className="pt-2">
            <a
              href={`${BUSINESS_INFO.whatsappUrl}?text=${encodeURIComponent('Hello Kohinoor AV, I would like to order the Heavy-Duty Mobile Trolley Stand for Interactive Flat Panels.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer inline-flex items-center gap-2 px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold rounded-xl transition-colors shadow-sm"
            >
              <MessageSquare className="w-4 h-4 fill-current" />
              <span>Inquire Trolley on WhatsApp</span>
            </a>
          </div>
        </div>
      </div>

      {/* Catalog Grid: CLEAN 2-COLUMN GRID (Per user feedback) */}
      <div className="space-y-6">
        <div className="max-w-2xl">
          <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
            Interactive Flat Panel Products
          </h2>
          <p className="text-xs text-slate-500 mt-1">
            Supplied with dual styluses, wall bracket or mobile trolley, remote control, and pre-installed whiteboard software.
          </p>
        </div>

        {/* Clean 2-column grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {ledProducts.map((prod) => (
            <ProductCard
              key={prod.id}
              product={prod}
              onSelect={onSelectProduct}
              onOpenQuote={onOpenQuoteModal}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
