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
  Shield,
  Building2
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
        <div className="text-xs font-bold text-emerald-700 uppercase tracking-wider">
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
          <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center">
            <Mic className="w-5 h-5" />
          </div>
          <h3 className="text-xs font-bold text-slate-900">Chairman Priority &amp; Delegate Mics</h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            Chairman unit has dedicated speech and priority buttons to override and mute all delegate units on demand.
          </p>
        </div>

        <div className="p-5 bg-white rounded-3xl border border-slate-200 space-y-2.5 shadow-xs">
          <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center">
            <Sliders className="w-5 h-5" />
          </div>
          <h3 className="text-xs font-bold text-slate-900">DSP Acoustic Processing</h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            Anti-howling feedback suppression and automatic voice leveling for pristine speech intelligibility.
          </p>
        </div>

        <div className="p-5 bg-white rounded-3xl border border-slate-200 space-y-2.5 shadow-xs">
          <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center">
            <Radio className="w-5 h-5" />
          </div>
          <h3 className="text-xs font-bold text-slate-900">Wired &amp; Wireless UHF Options</h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            Reliable 8-pin DIN daisy-chain wiring for fixed rooms, or agile multi-channel UHF wireless sets for modular halls.
          </p>
        </div>

        <div className="p-5 bg-white rounded-3xl border border-slate-200 space-y-2.5 shadow-xs">
          <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center">
            <Volume2 className="w-5 h-5" />
          </div>
          <h3 className="text-xs font-bold text-slate-900">Ceiling Mics &amp; Wall Speakers</h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            Integrated sound reinforcement, ceiling array microphones, and professional wall-mounted two-way speakers.
          </p>
        </div>
      </div>

      {/* Real Chamber Installation Feature Showcase (Using Client Upload upload_2.jpg) */}
      <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-xs">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
          <div className="lg:col-span-7 h-72 lg:h-[420px] relative overflow-hidden bg-slate-950">
            <img
              src="/images/client-uploads/upload_2.jpg"
              alt="High-Level Council Chamber Conference Audio System Installation in Pakistan"
              className="w-full h-full object-cover"
            />
            <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-emerald-900/90 text-white text-[11px] font-bold backdrop-blur-xs border border-emerald-500/30 flex items-center gap-1.5">
              <Building2 className="w-3.5 h-3.5 text-emerald-300" />
              <span>Real Project Installation · Pakistan Council Hall</span>
            </div>
          </div>
          <div className="lg:col-span-5 p-8 sm:p-10 space-y-4">
            <div className="text-xs font-bold text-emerald-700 uppercase tracking-wider">
              Field Implementation Excellence
            </div>
            <h2 className="text-2xl font-extrabold text-slate-900">
              Government &amp; Institutional Boardroom Deployments
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Every microphone unit is calibrated for flawless acoustic pick-up without feedback or buzzing. Our multi-zone digital central processors support daisy-chain connections for up to 128 microphones per controller with automated camera tracking interfaces.
            </p>
            <div className="space-y-2 text-xs text-slate-700 pt-1">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Synchronized audio recording with USB backup</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Seamless integration with PTZ cameras for auto-tracking speakers</span>
              </div>
            </div>
            <div className="pt-2">
              <a
                href={`${BUSINESS_INFO.whatsappUrl}?text=${encodeURIComponent('Hello Kohinoor AV, I would like to inquire about Conference Room Audio Systems for our boardroom.')}`}
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

      {/* Chairman vs Delegate Technical Breakdown */}
      <div className="bg-gradient-to-br from-[#072115] via-[#0d3420] to-[#05180f] text-white rounded-3xl p-8 sm:p-12 border border-emerald-900/60 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center shadow-2xl">
        <div className="lg:col-span-6 space-y-5">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-emerald-900/80 border border-emerald-700/50 text-emerald-300 text-xs font-bold">
            <Shield className="w-3.5 h-3.5" />
            <span>Council Chamber Standard: MA4617 Series</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white leading-snug">
            MA4617A Chairman &amp; MA4617B Delegate System
          </h2>
          <p className="text-xs sm:text-sm text-emerald-100/80 leading-relaxed">
            The MA4617 series provides seamless meeting control. The Chairman unit is equipped with both a speech button and a designated priority button. At any moment during deliberations, the Chairman can silence active delegate units to maintain chamber order.
          </p>

          <div className="space-y-2 pt-1 text-xs text-emerald-100/90">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Chairman priority chime signals floor management</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Bright red ring LED on microphone indicates live speaking</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Built-in monitor speaker in base + side 3.5mm earphone socket</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>High immunity to mobile phone GSM/4G/5G RF interference</span>
            </div>
          </div>

          <div className="pt-2 flex flex-wrap gap-3">
            <a
              href={`${BUSINESS_INFO.whatsappUrl}?text=${encodeURIComponent('Hello Kohinoor AV, I would like to order / get a quote for the MA4617 Chairman & Delegate Conference Microphone System.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer px-6 py-3 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold rounded-xl transition-all shadow-md flex items-center gap-2"
            >
              <MessageSquare className="w-4 h-4 fill-current" />
              <span>Order on WhatsApp</span>
            </a>
            <button
              onClick={() => onOpenQuoteModal('MA4617 Conference Microphone System')}
              className="cursor-pointer px-5 py-3 bg-emerald-950/80 hover:bg-emerald-900 text-emerald-200 text-xs font-semibold rounded-xl border border-emerald-800 transition-colors"
            >
              Request Formal Bid Sheet
            </button>
          </div>
        </div>

        <div className="lg:col-span-6">
          <div className="rounded-2xl overflow-hidden border border-emerald-800/80 bg-slate-900 shadow-2xl p-4">
            <img
              src="/images/products/product_11.jpg"
              alt="MA4617A Chairman and MA4617B Delegate Conference Microphones with Priority Override"
              className="w-full h-auto object-contain bg-white rounded-xl p-2"
            />
            <div className="mt-3 text-center text-xs text-emerald-300 font-bold">
              MA4617A (Chairman Unit with Priority Button) &amp; MA4617B (Delegate Unit)
            </div>
          </div>
        </div>
      </div>

      {/* Product Models: CLEAN 2-COLUMN GRID */}
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
