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
  onNavigate,
  onSelectProduct,
  onOpenQuoteModal
}) => {
  const ptzProducts = PRODUCTS.filter((p) => p.category === 'ptz-robotic-cameras');

  return (
    <div className="space-y-16 py-10 max-w-7xl mx-auto px-4 sm:px-8">
      {/* Category Header */}
      <div className="space-y-4 max-w-3xl">
        <div className="text-xs font-bold text-emerald-700 uppercase tracking-wider">
          Product Category 05 · Intelligent Video Capture
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
          PTZ Robotic Cameras &amp; Auto-Tracking Systems
        </h1>
        <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
          High-definition and 4K Ultra HD motorized Pan-Tilt-Zoom robotic cameras engineered for hybrid university classrooms, lecture capture recording, live distance learning, council chambers, and broadcast video streaming in Pakistan.
        </p>
      </div>

      {/* Feature Capabilities Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="p-5 bg-white rounded-3xl border border-slate-200 space-y-2.5 shadow-xs">
          <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center">
            <Camera className="w-5 h-5" />
          </div>
          <h3 className="text-xs font-bold text-slate-900">4K Ultra HD &amp; 60fps Optics</h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            Sony 1/2.8" commercial CMOS sensors capturing intricate blackboard handwriting and lecture diagrams.
          </p>
        </div>

        <div className="p-5 bg-white rounded-3xl border border-slate-200 space-y-2.5 shadow-xs">
          <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center">
            <Sparkles className="w-5 h-5" />
          </div>
          <h3 className="text-xs font-bold text-slate-900">AI Teacher Auto-Tracking</h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            Smooth presenter tracking follows faculty movement automatically without requiring lanyards or camera crew.
          </p>
        </div>

        <div className="p-5 bg-white rounded-3xl border border-slate-200 space-y-2.5 shadow-xs">
          <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center">
            <ZoomIn className="w-5 h-5" />
          </div>
          <h3 className="text-xs font-bold text-slate-900">12x &amp; 20x Optical Zoom</h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            Lossless optical zoom with distortion-free multi-element glass lenses for deep auditorium focal ranges.
          </p>
        </div>

        <div className="p-5 bg-white rounded-3xl border border-slate-200 space-y-2.5 shadow-xs">
          <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center">
            <Video className="w-5 h-5" />
          </div>
          <h3 className="text-xs font-bold text-slate-900">HDMI, USB, IP &amp; NDI|HX</h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            Direct USB 3.0 plug-and-play for Zoom and MS Teams alongside network IP and HDMI outputs.
          </p>
        </div>
      </div>

      {/* Featured Hardware Showcase */}
      <div className="bg-gradient-to-br from-[#072115] via-[#0d3420] to-[#05180f] text-white rounded-3xl p-8 sm:p-12 border border-emerald-900/60 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center shadow-2xl">
        <div className="lg:col-span-6 space-y-5">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-emerald-900/80 border border-emerald-700/50 text-emerald-300 text-xs font-bold">
            <Video className="w-3.5 h-3.5" />
            <span>Hybrid Education &amp; Boardroom Standard</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white leading-snug">
            Intelligent Presenter Tracking without Human Operators
          </h2>
          <p className="text-xs sm:text-sm text-emerald-100/80 leading-relaxed">
            Equipped with proprietary humanoid motion algorithms, the camera locks onto the designated lecturer or keynote speaker, panning and tilting seamlessly across the dais while maintaining optimal framing. If the presenter walks to the blackboard or interactive LED, the camera fluidly follows.
          </p>

          <div className="space-y-2 pt-1 text-xs text-emerald-100/90">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Zero wearable tags or infrared beacons required</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Whisper-quiet stepper motors with 255 preset memory slots</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Wall mount, ceiling inverted mount, and tripod brackets included</span>
            </div>
          </div>

          <div className="pt-2 flex flex-wrap gap-3">
            <a
              href={`${BUSINESS_INFO.whatsappUrl}?text=${encodeURIComponent('Hello Kohinoor AV, I would like to order the 4K AI Auto-Tracking PTZ Robotic Camera.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer px-6 py-3 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold rounded-xl transition-all shadow-md flex items-center gap-2"
            >
              <MessageSquare className="w-4 h-4 fill-current" />
              <span>Order on WhatsApp</span>
            </a>
            <button
              onClick={() => onOpenQuoteModal('4K AI Auto-Tracking PTZ Robotic Camera')}
              className="cursor-pointer px-5 py-3 bg-emerald-950/80 hover:bg-emerald-900 text-emerald-200 text-xs font-semibold rounded-xl border border-emerald-800 transition-colors"
            >
              Request Specs &amp; Mount Options
            </button>
          </div>
        </div>

        <div className="lg:col-span-6">
          <div className="rounded-2xl overflow-hidden border border-emerald-800/80 bg-slate-900 shadow-2xl">
            <img
              src="/images/ptz_camera_tracking_1793992811906.jpg"
              alt="4K PTZ Robotic Tracking Camera with Optical Zoom"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>

      {/* Available Models: CLEAN 2-COLUMN GRID */}
      <div className="space-y-6">
        <div className="max-w-2xl">
          <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
            Robotic PTZ Camera Systems
          </h2>
          <p className="text-xs text-slate-500 mt-1">
            Engineered for high reliability in university lecture halls and government committee rooms.
          </p>
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {ptzProducts.map((prod) => (
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
