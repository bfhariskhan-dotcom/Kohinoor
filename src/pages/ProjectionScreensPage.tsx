import React from 'react';
import { PageId, Product } from '../types';
import { PRODUCTS, BUSINESS_INFO } from '../data/products';
import { ProductCard } from '../components/ProductCard';
import { Monitor, CheckCircle2, MessageSquare, Maximize2 } from 'lucide-react';

interface ProjectionScreensPageProps {
  onNavigate: (page: PageId) => void;
  onSelectProduct: (product: Product) => void;
  onOpenQuoteModal: (productName?: string) => void;
}

const STANDARD_SIZES = [
  { label: '6 × 6 ft', area: 'Standard Classroom', aspect: '1:1 Square / 4:3' },
  { label: '8 × 6 ft', area: 'Medium Lecture Room', aspect: '4:3 Video Format' },
  { label: '10 × 8 ft', area: 'Large Hall & Seminar', aspect: '4:3 Conference' },
  { label: '12 × 9 ft', area: 'Auditorium Stage', aspect: '4:3 Large Venue' },
  { label: '13 × 10 ft', area: 'Grand Convocation Hall', aspect: '4:3 / Custom Wide' }
];

export const ProjectionScreensPage: React.FC<ProjectionScreensPageProps> = ({
  onSelectProduct,
  onOpenQuoteModal
}) => {
  const screenProducts = PRODUCTS.filter((p) => p.category === 'projection-screens');

  return (
    <div className="space-y-14 py-10 max-w-7xl mx-auto px-4 sm:px-8">
      {/* Header */}
      <div className="space-y-3 max-w-3xl">
        <div className="text-xs font-bold text-emerald-700 uppercase tracking-wider">
          Category 03 · Display Surfaces
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
          Projection Screens
        </h1>
        <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
          High-gain matte white projection screens engineered for crisp visibility in classrooms, corporate boardrooms, and auditoriums across Pakistan. Supplied separately in Tripod / Stand, Wall-Mounted Manual, and Electric Motorized configurations.
        </p>
      </div>

      {/* Three Separate Screen Configuration Types */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-2xl border border-slate-200 p-6 space-y-3 shadow-xs">
          <div className="text-xs font-bold text-emerald-700 uppercase tracking-wider">
            01 · Portable Series
          </div>
          <h2 className="text-lg font-extrabold text-slate-900">
            Tripod / Stand Projection Screens
          </h2>
          <p className="text-xs text-slate-600 leading-relaxed">
            Self-standing heavy steel tripod screens with quick height locking, keystone eliminator bar, and anti-skid legs for mobile seminars and training workshops.
          </p>
          <div className="pt-2 border-t border-slate-100 text-xs font-semibold text-slate-700">
            Sizes: 6 × 6 ft · 8 × 6 ft · 10 × 8 ft
          </div>
        </div>

        <div className="bg-white rounded-2xl border border-slate-200 p-6 space-y-3 shadow-xs">
          <div className="text-xs font-bold text-emerald-700 uppercase tracking-wider">
            02 · Fixed Room Series
          </div>
          <h2 className="text-lg font-extrabold text-slate-900">
            Wall-Mounted Projection Screens
          </h2>
          <p className="text-xs text-slate-600 leading-relaxed">
            Flush-mounted steel housing with slow-retract spring roller and multi-position auto-lock—designed for permanent school and university classrooms.
          </p>
          <div className="pt-2 border-t border-slate-100 text-xs font-semibold text-slate-700">
            Sizes: 6 × 6 · 8 × 6 · 10 × 8 · 12 × 9 ft
          </div>
        </div>

        <div className="bg-white rounded-2xl border border-slate-200 p-6 space-y-3 shadow-xs">
          <div className="text-xs font-bold text-emerald-700 uppercase tracking-wider">
            03 · Remote Automated Series
          </div>
          <h2 className="text-lg font-extrabold text-slate-900">
            Electric Motorized Projection Screens
          </h2>
          <p className="text-xs text-slate-600 leading-relaxed">
            Silent tubular motor drop screens operated via RF wireless remote control or wired wall switch—engineered for conference halls and auditorium stages.
          </p>
          <div className="pt-2 border-t border-slate-100 text-xs font-semibold text-slate-700">
            Sizes: 6 × 6 · 8 × 6 · 10 × 8 · 12 × 9 · 13 × 10 ft
          </div>
        </div>
      </div>

      {/* Exact Standard Dimensions Matrix */}
      <div className="bg-gradient-to-br from-emerald-700 via-emerald-600 to-emerald-800 text-white rounded-3xl p-8 sm:p-10 border border-emerald-500/40 space-y-6 shadow-xl">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div className="space-y-1.5">
            <div className="text-xs font-bold text-emerald-300 uppercase tracking-wider flex items-center gap-1.5">
              <Maximize2 className="w-3.5 h-3.5" />
              <span>Available Standard Dimensions</span>
            </div>
            <h2 className="text-2xl font-extrabold text-white">
              Projection Screen Sizes Stocked (Feet)
            </h2>
          </div>
          <a
            href={`${BUSINESS_INFO.whatsappUrl}?text=${encodeURIComponent('Hello Kohinoor AV, I would like availability details for Projection Screens (Tripod / Wall / Motorized).')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer px-5 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold rounded-xl transition-colors inline-flex items-center gap-2 self-start sm:self-auto"
          >
            <MessageSquare className="w-4 h-4 fill-current" />
            <span>Inquire on WhatsApp</span>
          </a>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-5 gap-3.5">
          {STANDARD_SIZES.map((sz) => (
            <div
              key={sz.label}
              className="p-4 rounded-2xl bg-white/10 border border-white/15 space-y-1"
            >
              <div className="text-xl font-extrabold text-white tabular-nums">{sz.label}</div>
              <div className="text-xs font-bold text-emerald-300">{sz.area}</div>
              <div className="text-[11px] text-emerald-100/75">{sz.aspect}</div>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap gap-5 pt-2 text-xs text-emerald-100/90">
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>1.1 Optical Gain Matte White Surface</span>
          </div>
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>160° Wide Audience Viewing Angle</span>
          </div>
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>Black Lightproof Backing &amp; Borders</span>
          </div>
        </div>
      </div>

      {/* Product Models Grid */}
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
              Projection Screen Models
            </h2>
            <p className="text-xs text-slate-500 mt-1">
              Separate product configurations for portable tripod, manual wall-mount, and electric motorized installations.
            </p>
          </div>
          <Monitor className="w-5 h-5 text-emerald-700 hidden sm:block" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {screenProducts.map((prod, idx) => (
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
