import React from 'react';
import { PageId, Product } from '../types';
import { PRODUCTS, BUSINESS_INFO } from '../data/products';
import { ProductCard } from '../components/ProductCard';
import {
  Video,
  Camera,
  ZoomIn,
  CheckCircle2,
  MessageSquare,
  Sparkles
} from 'lucide-react';

interface PtzCamerasPageProps {
  onNavigate: (page: PageId) => void;
  onSelectProduct: (product: Product) => void;
  onOpenQuoteModal: (productName?: string) => void;
}

export const PtzCamerasPage: React.FC<PtzCamerasPageProps> = ({
  onSelectProduct,
  onOpenQuoteModal
}) => {
  const ptzProducts = PRODUCTS.filter(
    (p) => p.id === 'tenveo-va3000e-conference-system' || p.category === 'conference-systems'
  );

  return (
    <div className="space-y-16 py-10 max-w-7xl mx-auto px-4 sm:px-8">
      {/* Category Header */}
      <div className="space-y-4 max-w-3xl">
        <div className="text-xs font-bold text-emerald-700 uppercase tracking-wider">
          Product Category 05 · Video Conferencing &amp; PTZ Cameras
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
          Tenveo TEVO-VA3000 / TEVO-VA3000E Video Conferencing PTZ System
        </h1>
        <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
          Complete all-in-one video conferencing hardware engineered for executive boardrooms, hybrid classrooms, and government committee rooms: 10X Lossless Optical Zoom HD 1080p@30fps PTZ Camera, Full-Duplex Speakerphone, Central Hub, IR Remote, Bluetooth &amp; USB plug-and-play, with optional 2 expansion microphones (TEVO-VA3000E) for up to 25 attendees.
        </p>
      </div>

      {/* Feature Capabilities Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="p-5 bg-white rounded-3xl border border-slate-200 space-y-2.5 shadow-xs">
          <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center">
            <Camera className="w-5 h-5" />
          </div>
          <h3 className="text-xs font-bold text-slate-900">10X Lossless Optical Zoom</h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            HD 1080p@30fps video clarity with 51.3° wide field of view and razor-sharp optical magnification.
          </p>
        </div>

        <div className="p-5 bg-white rounded-3xl border border-slate-200 space-y-2.5 shadow-xs">
          <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center">
            <Sparkles className="w-5 h-5" />
          </div>
          <h3 className="text-xs font-bold text-slate-900">350° Pan &amp; 90° Tilt</h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            Whisper-quiet motorized gimbal sweeps ±175° horizontally and ±45° vertically with IR remote presets.
          </p>
        </div>

        <div className="p-5 bg-white rounded-3xl border border-slate-200 space-y-2.5 shadow-xs">
          <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center">
            <ZoomIn className="w-5 h-5" />
          </div>
          <h3 className="text-xs font-bold text-slate-900">Full-Duplex Speakerphone + Hub</h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            Echo-canceling omnidirectional speakerphone with optional 2 expansion mics (TEVO-VA3000E) for up to 25 people.
          </p>
        </div>

        <div className="p-5 bg-white rounded-3xl border border-slate-200 space-y-2.5 shadow-xs">
          <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center">
            <Video className="w-5 h-5" />
          </div>
          <h3 className="text-xs font-bold text-slate-900">USB &amp; Bluetooth Plug-and-Play</h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            Driver-free compatibility with Zoom, Microsoft Teams, Cisco WebEx, Skype for Business, and Polycom.
          </p>
        </div>
      </div>

      {/* Featured Hardware Showcase */}
      <div className="bg-gradient-to-br from-emerald-700 via-emerald-600 to-emerald-800 text-white rounded-3xl p-8 sm:p-12 border border-emerald-500/40 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center shadow-2xl">
        <div className="lg:col-span-6 space-y-5">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-emerald-900/80 border border-emerald-700/50 text-emerald-300 text-xs font-bold">
            <Video className="w-3.5 h-3.5" />
            <span>Tenveo TEVO-VA3000 / TEVO-VA3000E Complete Kit</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white leading-snug">
            All-in-One PTZ Camera, Speakerphone, Hub &amp; Expansion Mics
          </h2>
          <p className="text-xs sm:text-sm text-emerald-100/80 leading-relaxed">
            Designed for medium to large conference rooms up to 25 participants. Single central hub connects power, USB host computer, PTZ camera, and tabletop speakerphone—plus 2 daisy-chained expansion microphones in the VA3000E edition.
          </p>

          <div className="space-y-2 pt-1 text-xs text-emerald-100/90">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>10X Lossless Optical Zoom · 1080p@30fps · 51.3° Wide Angle Lens</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>350° Pan &amp; 90° Tilt with IR Remote Controller included</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Works seamlessly with Zoom, MS Teams, WebEx, Skype &amp; Polycom</span>
            </div>
          </div>

          <div className="pt-2 flex flex-wrap gap-3">
            <a
              href={`${BUSINESS_INFO.whatsappUrl}?text=${encodeURIComponent('Hello Kohinoor AV, I would like specifications and stock availability for Tenveo TEVO-VA3000 / TEVO-VA3000E.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer px-6 py-3 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold rounded-xl transition-all shadow-md flex items-center gap-2"
            >
              <MessageSquare className="w-4 h-4 fill-current" />
              <span>Order on WhatsApp</span>
            </a>
            <button
              onClick={() => onOpenQuoteModal('Tenveo TEVO-VA3000E Group Video Conferencing System')}
              className="cursor-pointer px-5 py-3 bg-emerald-950/80 hover:bg-emerald-900 text-emerald-200 text-xs font-semibold rounded-xl border border-emerald-800 transition-colors"
            >
              Request Technical Proposal
            </button>
          </div>
        </div>

        <div className="lg:col-span-6 grid grid-cols-2 gap-4">
          <div className="rounded-2xl overflow-hidden border border-emerald-800/80 bg-white shadow-2xl p-4 flex items-center justify-center aspect-square">
            <img
              src="/images/real-stock/tenveo-va3000e.jpg"
              alt="Tenveo TEVO-VA3000E Complete Kit with Expansion Microphones"
              className="w-full h-full object-contain"
            />
          </div>
          <div className="rounded-2xl overflow-hidden border border-emerald-800/80 bg-white shadow-2xl p-4 flex items-center justify-center aspect-square">
            <img
              src="/images/real-stock/tenveo-va3000.jpg"
              alt="Tenveo TEVO-VA3000 PTZ Camera Speakerphone Hub and Remote"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </div>

      {/* Available Models */}
      <div className="space-y-6">
        <div className="max-w-2xl">
          <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
            Video Conferencing &amp; PTZ Hardware
          </h2>
          <p className="text-xs text-slate-500 mt-1">
            Engineered for high reliability in corporate boardrooms and government committee rooms.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {ptzProducts.map((prod, idx) => (
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
