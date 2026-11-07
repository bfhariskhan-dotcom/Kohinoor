import React from 'react';
import { PageId, Product } from '../types';
import { PRODUCTS, BUSINESS_INFO } from '../data/products';
import { ProductCard } from '../components/ProductCard';
import {
  Mic,
  Volume2,
  Radio,
  Sliders,
  CheckCircle2,
  MessageSquare,
  Shield
} from 'lucide-react';

interface ConferenceSystemsPageProps {
  onNavigate: (page: PageId) => void;
  onSelectProduct: (product: Product) => void;
  onOpenQuoteModal: (productName?: string) => void;
}

export const ConferenceSystemsPage: React.FC<ConferenceSystemsPageProps> = ({
  onNavigate,
  onSelectProduct,
  onOpenQuoteModal
}) => {
  const confProducts = PRODUCTS.filter((p) => p.category === 'conference-systems');

  return (
    <div className="space-y-16 py-10 max-w-7xl mx-auto px-4 sm:px-8">
      {/* Category Header */}
      <div className="space-y-4 max-w-3xl">
        <div className="text-xs font-bold text-blue-600 uppercase tracking-wider">
          Product Category 04 · Discussion &amp; Speech Audio
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
          Conference Room Discussion Systems &amp; Audio
        </h1>
        <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
          Parliamentary and boardroom-grade conference systems featuring Chairman priority override, delegate push-to-talk units, feedback-free gooseneck capsules, DSP digital audio processing, and Sennheiser / Beterva discussion hardware.
        </p>
      </div>

      {/* Feature Capabilities Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="p-5 bg-white rounded-3xl border border-slate-200 space-y-2.5 shadow-xs">
          <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
            <Mic className="w-5 h-5" />
          </div>
          <h3 className="text-xs font-bold text-slate-900">Chairman Priority &amp; Delegate Mics</h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            Chairman unit has dedicated speech and priority buttons to override and mute all delegate units on demand.
          </p>
        </div>

        <div className="p-5 bg-white rounded-3xl border border-slate-200 space-y-2.5 shadow-xs">
          <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
            <Sliders className="w-5 h-5" />
          </div>
          <h3 className="text-xs font-bold text-slate-900">DSP Acoustic Processing</h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            Anti-howling feedback suppression and automatic voice leveling for pristine speech intelligibility.
          </p>
        </div>

        <div className="p-5 bg-white rounded-3xl border border-slate-200 space-y-2.5 shadow-xs">
          <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
            <Radio className="w-5 h-5" />
          </div>
          <h3 className="text-xs font-bold text-slate-900">Wired &amp; Wireless UHF Options</h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            Reliable 8-pin DIN daisy-chain wiring for fixed rooms, or agile multi-channel UHF wireless sets for modular halls.
          </p>
        </div>

        <div className="p-5 bg-white rounded-3xl border border-slate-200 space-y-2.5 shadow-xs">
          <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
            <Volume2 className="w-5 h-5" />
          </div>
          <h3 className="text-xs font-bold text-slate-900">Ceiling Mics &amp; Wall Speakers</h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            Integrated sound reinforcement, ceiling array microphones, and professional wall-mounted two-way speakers.
          </p>
        </div>
      </div>

      {/* Chairman vs Delegate Technical Breakdown (Image 11) */}
      <div className="bg-slate-950 text-white rounded-3xl p-8 sm:p-12 border border-slate-800 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center shadow-2xl">
        <div className="lg:col-span-6 space-y-5">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-blue-900/60 text-blue-300 text-xs font-bold">
            <Shield className="w-3.5 h-3.5" />
            <span>Council Chamber Standard: MA4617 Series</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white leading-snug">
            MA4617A Chairman &amp; MA4617B Delegate System
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            The MA4617 series provides seamless meeting control. The Chairman unit is equipped with both a speech button and a designated priority button. At any moment during deliberations, the Chairman can silence active delegate units to maintain chamber order.
          </p>

          <div className="space-y-2 pt-1 text-xs text-slate-300">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
              <span>Chairman priority chime signals floor management</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
              <span>Bright red ring LED on microphone indicates live speaking</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
              <span>Built-in monitor speaker in base + side 3.5mm earphone socket</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
              <span>High immunity to mobile phone GSM/4G/5G RF interference</span>
            </div>
          </div>

          <div className="pt-2 flex flex-wrap gap-3">
            <a
              href={`${BUSINESS_INFO.whatsappUrl}?text=${encodeURIComponent('Hello Kohinoor AV, I would like to order / get a quote for the MA4617 Chairman & Delegate Conference Microphone System.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold rounded-xl transition-all shadow-md flex items-center gap-2"
            >
              <MessageSquare className="w-4 h-4 fill-current" />
              <span>Order on WhatsApp</span>
            </a>
            <button
              onClick={() => onOpenQuoteModal('MA4617 Conference Microphone System')}
              className="cursor-pointer px-5 py-3 bg-slate-900 hover:bg-slate-800 text-slate-200 text-xs font-semibold rounded-xl border border-slate-700 transition-colors"
            >
              Request Formal Bid Sheet
            </button>
          </div>
        </div>

        <div className="lg:col-span-6">
          <div className="rounded-2xl overflow-hidden border border-slate-700 bg-slate-900 shadow-2xl p-4">
            <img
              src="/images/products/product_11.jpg"
              alt="MA4617A Chairman and MA4617B Delegate Conference Microphones with Priority Override"
              className="w-full h-auto object-contain bg-white rounded-xl p-2"
            />
            <div className="mt-3 text-center text-xs text-blue-300 font-bold">
              MA4617A (Chairman Unit with Priority Button) &amp; MA4617B (Delegate Unit)
            </div>
          </div>
        </div>
      </div>

      {/* Product Models: CLEAN 2-COLUMN GRID (Per user feedback to avoid cramped columns) */}
      <div className="space-y-6">
        <div className="max-w-2xl">
          <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
            Conference Microphones &amp; Vocal Audio Systems
          </h2>
          <p className="text-xs text-slate-500 mt-1">
            Supplied with central power supply controllers, interconnect cables, and acoustic tuning.
          </p>
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {confProducts.map((prod) => (
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
