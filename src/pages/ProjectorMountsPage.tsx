import React from 'react';
import { PageId, Product } from '../types';
import { PRODUCTS, BUSINESS_INFO } from '../data/products';
import { ProductCard } from '../components/ProductCard';
import { Wrench, CheckCircle2, MessageSquare, ShieldCheck } from 'lucide-react';

interface ProjectorMountsPageProps {
  onNavigate: (page: PageId) => void;
  onSelectProduct: (product: Product) => void;
  onOpenQuoteModal: (productName?: string) => void;
}

export const ProjectorMountsPage: React.FC<ProjectorMountsPageProps> = ({
  onSelectProduct,
  onOpenQuoteModal
}) => {
  const mountProducts = PRODUCTS.filter((p) => p.category === 'projector-mounting-kits');

  return (
    <div className="space-y-14 py-10 max-w-7xl mx-auto px-4 sm:px-8">
      {/* Header */}
      <div className="space-y-3 max-w-3xl">
        <div className="text-xs font-bold text-emerald-700 uppercase tracking-wider">
          Category 04 · Structural Installation Hardware
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
          Projector Mounting Kits
        </h1>
        <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
          Precision ceiling projector mounts, long-drop telescopic suspension kits, and short-throw wall boom brackets engineered for rock-solid projector alignment in concrete and false-ceiling rooms across Pakistan.
        </p>
      </div>

      {/* Feature Showcase Banner */}
      <div className="bg-gradient-to-br from-[#062c1b] via-[#0a3d26] to-[#041f13] text-white rounded-3xl p-8 sm:p-12 border border-emerald-900/60 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center shadow-2xl">
        <div className="lg:col-span-6 space-y-5">
          <div className="text-xs font-bold text-emerald-300 uppercase tracking-wider flex items-center gap-1.5">
            <Wrench className="w-4 h-4" />
            <span>Universal Compatibility &amp; Precision Alignment</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white leading-snug">
            Commercial Steel Ceiling &amp; Wall Mounting Brackets
          </h2>
          <p className="text-xs sm:text-sm text-emerald-100/85 leading-relaxed">
            Built with heavy-gauge cold-rolled steel and brushed aluminum columns to eliminate image vibration. Compatible with Casio, Panasonic, NEC, Mitsubishi, and MAGAPOWER projectors with complete internal cable concealment and multi-size M4/M5/M6 screw hardware.
          </p>

          <div className="space-y-2 text-xs text-emerald-100/90">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Universal 4-arm spider adapter fits virtually all projector bolt patterns</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>360° yaw rotation and ±15° pitch/roll micro-tilt adjustment</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Hollow telescopic shaft conceals HDMI, VGA &amp; AC cables cleanly</span>
            </div>
          </div>

          <div className="pt-2 flex flex-wrap gap-3">
            <a
              href={`${BUSINESS_INFO.whatsappUrl}?text=${encodeURIComponent('Hello Kohinoor AV, I would like to inquire about Projector Ceiling Mounting Kits.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer px-6 py-3 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold rounded-xl transition-all shadow-md flex items-center gap-2"
            >
              <MessageSquare className="w-4 h-4 fill-current" />
              <span>Inquire on WhatsApp</span>
            </a>
            <button
              onClick={() => onOpenQuoteModal('Projector Mounting Kits')}
              className="cursor-pointer px-5 py-3 bg-white/10 hover:bg-white/20 text-white text-xs font-semibold rounded-xl border border-white/20 transition-colors"
            >
              Request Bulk Supply Quote
            </button>
          </div>
        </div>

        <div className="lg:col-span-6">
          <div className="rounded-2xl overflow-hidden border border-emerald-800/80 bg-white shadow-2xl p-3">
            <img
              src="/images/catalog/projector-ceiling-mount.jpg"
              alt="Universal Heavy-Duty Ceiling Projector Mounting Kit with Telescopic Pole and Hardware"
              className="w-full h-auto object-contain rounded-xl"
            />
          </div>
        </div>
      </div>

      {/* Product Models Grid */}
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
              Mounting Kits &amp; Accessories
            </h2>
            <p className="text-xs text-slate-500 mt-1">
              Supplied with heavy masonry anchors, projector screws, and optional on-site ceiling installation across Pakistan.
            </p>
          </div>
          <ShieldCheck className="w-5 h-5 text-emerald-700 hidden sm:block" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mountProducts.map((prod, idx) => (
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
