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
  MessageSquare
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
          Product Category 02 · Large Screen Projection
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
          Multimedia Projectors &amp; Projection Screens
        </h1>
        <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
          High-performance 3500 to 5000+ ANSI lumens multimedia projectors engineered for bright classrooms, lecture halls, and auditoriums across Pakistan. Powered by 3LCD and DLP optical engines with HDMI connectivity and wireless projection.
        </p>
      </div>

      {/* Feature Capabilities Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="p-5 bg-white rounded-3xl border border-slate-200 space-y-2.5 shadow-xs">
          <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center">
            <Sun className="w-5 h-5" />
          </div>
          <h3 className="text-xs font-bold text-slate-900">3500–5000 Lumens Options</h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            Crystal-clear visibility even in sunlit lecture halls and daytime institutional rooms without room blackout.
          </p>
        </div>

        <div className="p-5 bg-white rounded-2xl border border-slate-200 space-y-2.5 shadow-xs">
          <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center">
            <Projector className="w-5 h-5" />
          </div>
          <h3 className="text-xs font-bold text-slate-900">3LCD &amp; DLP Optical Engines</h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            Unrivaled color accuracy for scientific charts, engineering schematics, and high-definition video playback.
          </p>
        </div>

        <div className="p-5 bg-white rounded-2xl border border-slate-200 space-y-2.5 shadow-xs">
          <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center">
            <Wifi className="w-5 h-5" />
          </div>
          <h3 className="text-xs font-bold text-slate-900">Wireless Projection &amp; HDMI</h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            Dual HDMI 2.0 inputs and wireless mirroring allowing educators and students to present from laptops and tablets.
          </p>
        </div>

        <div className="p-5 bg-white rounded-2xl border border-slate-200 space-y-2.5 shadow-xs">
          <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center">
            <Layers className="w-5 h-5" />
          </div>
          <h3 className="text-xs font-bold text-slate-900">Bulk Institutional Supply</h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            Campus-wide rollouts for universities, colleges, and schools across Pakistan with complete ceiling brackets and wiring.
          </p>
        </div>
      </div>

      {/* Hero Showcase with Studio Photography */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-gradient-to-br from-[#072115] via-[#0d3420] to-[#05180f] text-white rounded-3xl p-8 sm:p-12 border border-emerald-900/60 shadow-2xl">
        <div className="lg:col-span-6 space-y-4">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
            Professional Grade 5000 ANSI Lumens Optics
          </h2>
          <p className="text-xs sm:text-sm text-emerald-100/80 leading-relaxed">
            Designed for continuous multi-hour educational operations. Our high-lumen projectors feature long-life laser engines, multi-angle keystone alignment, low maintenance filter systems, and comprehensive network management compatibility (Crestron, AMX, PJLink).
          </p>
          <div className="space-y-2 pt-2">
            <div className="flex items-center gap-2 text-xs text-emerald-100/90">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Full HD 1080p and WUXGA razor-sharp text clarity</span>
            </div>
            <div className="flex items-center gap-2 text-xs text-emerald-100/90">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Dual HDMI inputs + VGA legacy port for all faculty laptops</span>
            </div>
            <div className="flex items-center gap-2 text-xs text-emerald-100/90">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Up to 20,000 hours maintenance-free projection life</span>
            </div>
          </div>
          <div className="pt-4 flex flex-wrap gap-3">
            <a
              href={`${BUSINESS_INFO.whatsappUrl}?text=${encodeURIComponent('Hello Kohinoor AV, I would like to order / get pricing for 5000 Lumens Multimedia Projectors in Pakistan.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer px-6 py-3 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold rounded-xl transition-all shadow-md flex items-center gap-2"
            >
              <MessageSquare className="w-4 h-4 fill-current" />
              <span>Order on WhatsApp</span>
            </a>
            <button
              onClick={() => onOpenQuoteModal('Professional 5000 Lumens Multimedia Projector')}
              className="cursor-pointer px-5 py-3 bg-emerald-950/80 hover:bg-emerald-900 text-emerald-200 text-xs font-semibold rounded-xl border border-emerald-800 transition-colors"
            >
              Request Institutional Quote
            </button>
          </div>
        </div>

        <div className="lg:col-span-6">
          <div className="rounded-2xl overflow-hidden border border-emerald-800/80 bg-slate-900 shadow-2xl">
            <img
              src="/images/multimedia_projector_pro_1793992811682.jpg"
              alt="Professional High-Lumen Multimedia Projector with HDMI and Optical Zoom"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>

      {/* Available Models: CLEAN 2-COLUMN GRID */}
      <div className="space-y-6">
        <div className="max-w-2xl">
          <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
            Projectors &amp; Projection Accessories
          </h2>
          <p className="text-xs text-slate-500 mt-1">
            Supplied with genuine manufacturer lamps, ceiling mounting kits, and heavy-duty tripod screens.
          </p>
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {projectorProducts.map((prod) => (
            <ProductCard
              key={prod.id}
              product={prod}
              onSelect={onSelectProduct}
              onOpenQuote={onOpenQuoteModal}
            />
          ))}
        </div>
      </div>

      {/* Projection Screens Section */}
      <div className="bg-slate-50 rounded-3xl border border-slate-200 p-8 grid grid-cols-1 md:grid-cols-12 gap-8 items-center max-w-5xl mx-auto">
        <div className="md:col-span-4">
          <div className="aspect-square bg-white rounded-2xl border border-slate-200 p-4 flex items-center justify-center shadow-xs">
            <img
              src="/images/products/product_15.jpg"
              alt="Heavy-Duty Tripod Portable Projection Screen"
              className="max-h-full max-w-full object-contain"
            />
          </div>
        </div>
        <div className="md:col-span-8 space-y-4">
          <div className="text-xs font-bold text-emerald-700 uppercase tracking-wider">
            Projection Accessories
          </div>
          <h3 className="text-xl font-bold text-slate-900">
            Tripod &amp; Motorized Electric Projection Screens
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            Complement your projector with our high-gain matte white projection screens. Available in portable aluminum tripod configurations for mobile training workshops, or motorized RF remote ceiling drop screens for permanent auditorium and boardroom integration.
          </p>
          <div className="grid grid-cols-2 gap-3 text-xs text-slate-700">
            <div className="p-3 bg-white rounded-xl border border-slate-200">
              <span className="font-bold text-slate-900 block">Tripod Screens</span>
              <span>70" x 70", 84" x 84", 96" x 96" &amp; 120" sizes</span>
            </div>
            <div className="p-3 bg-white rounded-xl border border-slate-200">
              <span className="font-bold text-slate-900 block">Motorized Screens</span>
              <span>100" to 200" diagonal with wireless RF remote</span>
            </div>
          </div>
          <div className="pt-2">
            <a
              href={`${BUSINESS_INFO.whatsappUrl}?text=${encodeURIComponent('Hello Kohinoor AV, I would like to order Heavy-Duty Projection Screens in Pakistan.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer inline-flex items-center gap-2 px-5 py-2.5 bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-bold rounded-xl transition-colors shadow-sm"
            >
              <MessageSquare className="w-4 h-4 fill-current" />
              <span>Order on WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
