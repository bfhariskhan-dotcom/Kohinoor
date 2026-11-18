import React from 'react';
import { PageId, Product } from '../types';
import { PRODUCTS, BUSINESS_INFO } from '../data/products';
import { ProductCard } from '../components/ProductCard';
import {
  Projector,
  Sun,
  Wifi,
  Layers,
  CheckCircle2,
  MessageSquare,
  ArrowRight
} from 'lucide-react';

interface MultimediaProjectorsPageProps {
  onNavigate: (page: PageId) => void;
  onSelectProduct: (product: Product) => void;
  onOpenQuoteModal: (productName?: string) => void;
}

export const MultimediaProjectorsPage: React.FC<MultimediaProjectorsPageProps> = ({
  onNavigate,
  onSelectProduct,
  onOpenQuoteModal
}) => {
  const projectorProducts = PRODUCTS.filter((p) => p.category === 'multimedia-projectors');

  return (
    <div className="space-y-16 py-10 max-w-7xl mx-auto px-4 sm:px-8">
      {/* Category Header */}
      <div className="space-y-4 max-w-3xl">
        <div className="text-xs font-bold text-emerald-700 uppercase tracking-wider">
          Category 02 · Large-Format Optical Projection
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
          Multimedia Projectors
        </h1>
        <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
          Ready-stock commercial and educational multimedia projectors from Japan’s trusted manufacturers—<strong>Mitsubishi Electric 8000 Series</strong> (UD8900U, UD8850U, WD8700U, XD8600U in White &amp; Black BL) and <strong>Casio XJ-S400UN / XJ-V100W LampFree Series</strong>.
        </p>
      </div>

      {/* Feature Capabilities Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="p-5 bg-white rounded-2xl border border-slate-200 space-y-2.5 shadow-xs">
          <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center">
            <Sun className="w-5 h-5" />
          </div>
          <h3 className="text-xs font-bold text-slate-900">7,300 – 8,500 Lumens</h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            Mitsubishi 8000 Series dual-lamp output with 2800:1 contrast delivers vivid imagery in large auditoriums.
          </p>
        </div>

        <div className="p-5 bg-white rounded-2xl border border-slate-200 space-y-2.5 shadow-xs">
          <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center">
            <Projector className="w-5 h-5" />
          </div>
          <h3 className="text-xs font-bold text-slate-900">LampFree Laser &amp; LED</h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            Casio XJ-S400UN (4,000 lm WUXGA) &amp; XJ-V100W deliver 20,000-hour Mercury-Free hybrid operation.
          </p>
        </div>

        <div className="p-5 bg-white rounded-2xl border border-slate-200 space-y-2.5 shadow-xs">
          <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center">
            <Wifi className="w-5 h-5" />
          </div>
          <h3 className="text-xs font-bold text-slate-900">Optional Lenses &amp; Zoom</h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            Mitsubishi optional bayonet throw lenses plus Casio XJ-S400UN flexible 1.7x manual optical zoom.
          </p>
        </div>

        <div className="p-5 bg-white rounded-2xl border border-slate-200 space-y-2.5 shadow-xs">
          <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center">
            <Layers className="w-5 h-5" />
          </div>
          <h3 className="text-xs font-bold text-slate-900">Ready-Stock Hardware</h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            Supplied with genuine mounting kits, projection screens, and nationwide engineering support.
          </p>
        </div>
      </div>

      {/* Hero Showcase with Real Dual Product Visuals */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-gradient-to-br from-emerald-700 via-emerald-600 to-emerald-800 text-white rounded-3xl p-8 sm:p-12 border border-emerald-500/40 shadow-2xl">
        <div className="lg:col-span-6 space-y-4">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
            Mitsubishi 8000 Series &amp; Casio LampFree Projectors
          </h2>
          <p className="text-xs sm:text-sm text-emerald-100/85 leading-relaxed">
            Built for sunlit university lecture halls, seminar rooms, and large auditoriums across Pakistan. Every unit is backed by genuine accessories, ceiling mounting kits, and installation services from our Islamabad headquarters.
          </p>
          <div className="space-y-2 pt-2">
            <div className="flex items-center gap-2 text-xs text-emerald-100/90">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Mitsubishi UD8900U, UD8850U, WD8700U, XD8600U (White &amp; Black BL)</span>
            </div>
            <div className="flex items-center gap-2 text-xs text-emerald-100/90">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Casio XJ-S400UN (4,000 Lumens · WUXGA Real · 1.7x Zoom · 20,000 hrs)</span>
            </div>
            <div className="flex items-center gap-2 text-xs text-emerald-100/90">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Casio XJ-V100W (3,000 Lumens · WXGA · 1.5x Optical Zoom)</span>
            </div>
          </div>
          <div className="pt-4 flex flex-wrap gap-3">
            <a
              href={`${BUSINESS_INFO.whatsappUrl}?text=${encodeURIComponent('Hello Kohinoor AV, I would like technical specs and availability for Mitsubishi 8000 Series / Casio XJ-S400UN Multimedia Projectors.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer px-6 py-3 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold rounded-xl transition-all shadow-md flex items-center gap-2"
            >
              <MessageSquare className="w-4 h-4 fill-current" />
              <span>Inquire on WhatsApp</span>
            </a>
            <button
              onClick={() => onOpenQuoteModal('Multimedia Projectors (Mitsubishi 8000 Series / Casio XJ-S400UN)')}
              className="cursor-pointer px-5 py-3 bg-emerald-950/80 hover:bg-emerald-900 text-emerald-200 text-xs font-semibold rounded-xl border border-emerald-800 transition-colors"
            >
              Request Institutional Quote
            </button>
          </div>
        </div>

        <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="rounded-2xl overflow-hidden border border-white/20 bg-white p-4 shadow-xl space-y-2">
            <img
              src="/images/real-stock/mitsubishi-ud8900u.jpg"
              alt="Mitsubishi Electric 8000 Series Multimedia Projector UD8900U"
              className="w-full h-40 object-contain"
            />
            <div className="text-[11px] font-bold text-slate-900 text-center border-t border-slate-100 pt-2">
              Mitsubishi 8000 Series (White &amp; Black BL)
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden border border-white/20 bg-white p-4 shadow-xl space-y-2">
            <img
              src="/images/real-stock/casio-xj-s400un.jpg"
              alt="Casio XJ-S400UN Superior Series LampFree WUXGA Projector"
              className="w-full h-40 object-contain"
            />
            <div className="text-[11px] font-bold text-slate-900 text-center border-t border-slate-100 pt-2">
              Casio XJ-S400UN LampFree WUXGA
            </div>
          </div>
        </div>
      </div>

      {/* Genuine Projector Models Grid */}
      <div className="space-y-6">
        <div className="max-w-2xl">
          <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
            Ready-Stock Multimedia Projectors ({projectorProducts.length} Models)
          </h2>
          <p className="text-xs text-slate-500 mt-1">
            Official Mitsubishi Electric 8000 Series and Casio LampFree projectors with verified optical specifications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectorProducts.map((prod, idx) => (
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

      {/* Cross-Link to Dedicated Category 3 (Screens) & Supporting Mounting Kits */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-2xl border border-slate-200 p-6 flex items-center justify-between gap-4 shadow-xs">
          <div className="space-y-1">
            <div className="text-[11px] font-bold text-emerald-700 uppercase">Priority Category 03</div>
            <h3 className="text-base font-extrabold text-slate-900">Projection Screens</h3>
            <p className="text-xs text-slate-600">Wall-Mounted, Portable Tripod / Stand &amp; Motorized Electric (6×6 to 13×10 ft).</p>
          </div>
          <button
            onClick={() => onNavigate('projection-screens')}
            className="cursor-pointer px-4 py-2.5 bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-bold rounded-xl inline-flex items-center gap-1.5 shrink-0"
          >
            <span>Explore</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="bg-white rounded-2xl border border-slate-200 p-6 flex items-center justify-between gap-4 shadow-xs">
          <div className="space-y-1">
            <div className="text-[11px] font-bold text-emerald-700 uppercase">Installation Hardware</div>
            <h3 className="text-base font-extrabold text-slate-900">Projector Mounting Kits</h3>
            <p className="text-xs text-slate-600">Ceiling mounts, extended telescopic drops &amp; short-throw wall brackets.</p>
          </div>
          <button
            onClick={() => onNavigate('projector-mounting-kits')}
            className="cursor-pointer px-4 py-2.5 bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-bold rounded-xl inline-flex items-center gap-1.5 shrink-0"
          >
            <span>Explore</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
