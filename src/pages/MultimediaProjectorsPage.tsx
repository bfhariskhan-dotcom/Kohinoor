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
          Category 02 · Large-Format Visual Projection
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
          Multimedia Projectors
        </h1>
        <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
          Genuine multimedia projectors from authorized partners and global manufacturers—Casio, Panasonic, NEC, Mitsubishi Corporation Japan, and MAGAPOWER. Engineered for bright classrooms, university amphitheaters, and corporate boardrooms across Pakistan.
        </p>
      </div>

      {/* Feature Capabilities Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="p-5 bg-white rounded-2xl border border-slate-200 space-y-2.5 shadow-xs">
          <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center">
            <Sun className="w-5 h-5" />
          </div>
          <h3 className="text-xs font-bold text-slate-900">3,000 – 5,500 Lumens</h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            High-brightness optical output delivering clear visibility even in sunlit classrooms and halls.
          </p>
        </div>

        <div className="p-5 bg-white rounded-2xl border border-slate-200 space-y-2.5 shadow-xs">
          <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center">
            <Projector className="w-5 h-5" />
          </div>
          <h3 className="text-xs font-bold text-slate-900">3LCD, DLP &amp; Laser/LED</h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            Genuine Panasonic/NEC 3LCD, Mitsubishi DLP, and Casio lamp-free Laser/LED hybrid optics.
          </p>
        </div>

        <div className="p-5 bg-white rounded-2xl border border-slate-200 space-y-2.5 shadow-xs">
          <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center">
            <Wifi className="w-5 h-5" />
          </div>
          <h3 className="text-xs font-bold text-slate-900">HDMI, LAN &amp; Wireless</h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            Dual HDMI inputs, RJ-45 PJLink network control, and wireless presenter mirroring readiness.
          </p>
        </div>

        <div className="p-5 bg-white rounded-2xl border border-slate-200 space-y-2.5 shadow-xs">
          <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center">
            <Layers className="w-5 h-5" />
          </div>
          <h3 className="text-xs font-bold text-slate-900">Authorized Brands</h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            Casio, Panasonic, NEC, Mitsubishi Corporation Japan &amp; MAGAPOWER Multimedia Projectors.
          </p>
        </div>
      </div>

      {/* Hero Showcase */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-gradient-to-br from-emerald-700 via-emerald-600 to-emerald-800 text-white rounded-3xl p-8 sm:p-12 border border-emerald-500/40 shadow-2xl">
        <div className="lg:col-span-6 space-y-4">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
            Authorized Global Projector Brands for Institutions
          </h2>
          <p className="text-xs sm:text-sm text-emerald-100/85 leading-relaxed">
            From lamp-free CASIO XJ-Series units rated at 20,000 hours to high-brightness Panasonic PT-LB, NEC MC, Mitsubishi EX/EW, and MAGAPOWER Full HD projectors—every unit is supplied with genuine manufacturer support and optional ceiling mounting &amp; screen packages.
          </p>
          <div className="space-y-2 pt-2">
            <div className="flex items-center gap-2 text-xs text-emerald-100/90">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>XGA, WXGA &amp; Full HD 1080p optical resolutions</span>
            </div>
            <div className="flex items-center gap-2 text-xs text-emerald-100/90">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Dual HDMI, VGA PC, and RJ-45 LAN classroom management</span>
            </div>
            <div className="flex items-center gap-2 text-xs text-emerald-100/90">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Full after-sales service, spare lamps &amp; on-site installation</span>
            </div>
          </div>
          <div className="pt-4 flex flex-wrap gap-3">
            <a
              href={`${BUSINESS_INFO.whatsappUrl}?text=${encodeURIComponent('Hello Kohinoor AV, I would like technical specs and institutional quotation details for Multimedia Projectors.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer px-6 py-3 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold rounded-xl transition-all shadow-md flex items-center gap-2"
            >
              <MessageSquare className="w-4 h-4 fill-current" />
              <span>Inquire on WhatsApp</span>
            </a>
            <button
              onClick={() => onOpenQuoteModal('Multimedia Projectors')}
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

      {/* Genuine Projector Models Grid */}
      <div className="space-y-6">
        <div className="max-w-2xl">
          <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
            Multimedia Projector Lineup ({projectorProducts.length} Verified Models)
          </h2>
          <p className="text-xs text-slate-500 mt-1">
            Casio, Panasonic, NEC, Mitsubishi &amp; MAGAPOWER models with verified brightness and native optical specifications.
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

      {/* Cross-Link to Dedicated Category 3 (Screens) & Category 4 (Mounts) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-2xl border border-slate-200 p-6 flex items-center justify-between gap-4 shadow-xs">
          <div className="space-y-1">
            <div className="text-[11px] font-bold text-emerald-700 uppercase">Category 03</div>
            <h3 className="text-base font-extrabold text-slate-900">Projection Screens</h3>
            <p className="text-xs text-slate-600">Tripod, Wall-Mounted &amp; Motorized Electric (6×6 to 13×10 ft).</p>
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
            <div className="text-[11px] font-bold text-emerald-700 uppercase">Category 04</div>
            <h3 className="text-base font-extrabold text-slate-900">Projector Mounting Kits</h3>
            <p className="text-xs text-slate-600">Ceiling mounts, extended telescopic drops &amp; short-throw brackets.</p>
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
