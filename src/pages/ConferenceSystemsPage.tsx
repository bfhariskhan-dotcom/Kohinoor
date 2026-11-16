import React from 'react';
import { PageId, Product } from '../types';
import { PRODUCTS, BUSINESS_INFO } from '../data/products';
import { ProductCard } from '../components/ProductCard';
import {
  Mic,
  Cpu,
  Sliders,
  CheckCircle2,
  MessageSquare,
  Shield,
  Building2,
  Headphones
} from 'lucide-react';

interface ConferenceSystemsPageProps {
  onNavigate: (page: PageId) => void;
  onSelectProduct: (product: Product) => void;
  onOpenQuoteModal: (productName?: string) => void;
}

export const ConferenceSystemsPage: React.FC<ConferenceSystemsPageProps> = ({
  onSelectProduct,
  onOpenQuoteModal
}) => {
  const confProducts = PRODUCTS.filter((p) => p.category === 'conference-systems');

  return (
    <div className="space-y-16 py-10 max-w-7xl mx-auto px-4 sm:px-8">
      {/* Category Header */}
      <div className="space-y-4 max-w-3xl">
        <div className="text-xs font-bold text-emerald-700 uppercase tracking-wider">
          Category 07 · Parliamentary &amp; Boardroom Systems
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
          Conference Systems – BETERVA BE-2300
        </h1>
        <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
          Official boardroom and council chamber discussion hardware from Beterva Audio Visual Company. Features the complete BETERVA BE-2300 Series comprising separate <strong>BE-2300 Chairman Units</strong>, <strong>BE-2300 Delegate Units</strong>, and <strong>BE-2300 Central Control Units</strong>.
        </p>
      </div>

      {/* Three Separate BE-2300 System Architecture Highlights */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-2xl border border-slate-200 p-6 space-y-3 shadow-xs">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-emerald-700 uppercase">01 · Priority Unit</span>
            <span className="font-mono text-xs font-bold text-slate-500">BE-2300C</span>
          </div>
          <h2 className="text-lg font-extrabold text-slate-900">BE-2300 Chairman Unit</h2>
          <p className="text-xs text-slate-600 leading-relaxed">
            Dedicated Priority Override button mutes active delegate microphones with alert chime. Equipped with red-ring unidirectional condenser gooseneck mic, auto-muting internal speaker, and side 3.5mm earphone/mic jacks.
          </p>
        </div>

        <div className="bg-white rounded-2xl border border-slate-200 p-6 space-y-3 shadow-xs">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-emerald-700 uppercase">02 · Participant Unit</span>
            <span className="font-mono text-xs font-bold text-slate-500">BE-2300D</span>
          </div>
          <h2 className="text-lg font-extrabold text-slate-900">BE-2300 Delegate Unit</h2>
          <p className="text-xs text-slate-600 leading-relaxed">
            Ergonomic tabletop discussion station featuring green speaking status LED, red gooseneck working ring, auto-muting monitor loudspeaker, volume wheel, and 2.1m shielded 8-pin DIN daisy-chain interconnect cable.
          </p>
        </div>

        <div className="bg-white rounded-2xl border border-slate-200 p-6 space-y-3 shadow-xs">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-emerald-700 uppercase">03 · System Processor</span>
            <span className="font-mono text-xs font-bold text-slate-500">BE-2300M / BE-1000</span>
          </div>
          <h2 className="text-lg font-extrabold text-slate-900">BE-2300 Central Control Unit</h2>
          <p className="text-xs text-slate-600 leading-relaxed">
            Master controller supplying 24V DC power to 60–120 conference units with Free, Limit, and FIFO discussion modes, acoustic feedback suppression, 4× 8-pin DIN trunks, and balanced XLR/RCA outputs.
          </p>
        </div>
      </div>

      {/* Real Council Room Field Showcase */}
      <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-xs">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
          <div className="lg:col-span-7 h-72 lg:h-[420px] relative overflow-hidden bg-slate-950">
            <img
              src="/images/client-uploads/upload_2.jpg"
              alt="Council Chamber Conference Audio System Installation in Pakistan"
              className="w-full h-full object-cover"
            />
            <div className="absolute top-4 left-4 px-3 py-1 rounded-lg bg-emerald-900/90 text-white text-[11px] font-bold flex items-center gap-1.5">
              <Building2 className="w-3.5 h-3.5 text-emerald-300" />
              <span>Council Hall Deployment · Islamabad</span>
            </div>
          </div>
          <div className="lg:col-span-5 p-8 sm:p-10 space-y-4">
            <div className="text-xs font-bold text-emerald-700 uppercase tracking-wider">
              Beterva Audio Visual Company
            </div>
            <h2 className="text-2xl font-extrabold text-slate-900">
              Structured Chamber &amp; Boardroom Speech Control
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Every BETERVA BE-2300 conference installation is calibrated by our Islamabad engineering crew for zero feedback howling and total immunity to mobile GSM/4G/5G interference. Scales cleanly from 10-seat boardrooms to 120-seat academic senate halls.
            </p>
            <div className="space-y-2 text-xs text-slate-700 pt-1">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Chairman priority override for disciplined meetings</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Auto-muting desktop speakers prevent acoustic loops</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Balanced XLR/RCA feeds for PA amplifiers &amp; recording</span>
              </div>
            </div>
            <div className="pt-2">
              <a
                href={`${BUSINESS_INFO.whatsappUrl}?text=${encodeURIComponent('Hello Kohinoor AV, I would like specifications and quotation details for the BETERVA BE-2300 Conference System.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer inline-flex items-center gap-2 px-5 py-2.5 bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-bold rounded-xl transition-colors shadow-sm"
              >
                <MessageSquare className="w-4 h-4 fill-current" />
                <span>Inquire on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* BETERVA BE-2300 Technical Banner */}
      <div className="bg-gradient-to-br from-[#072115] via-[#0d3420] to-[#05180f] text-white rounded-3xl p-8 sm:p-12 border border-emerald-900/60 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center shadow-2xl">
        <div className="lg:col-span-6 space-y-5">
          <div className="inline-flex items-center gap-1.5 text-emerald-300 text-xs font-bold uppercase tracking-wider">
            <Shield className="w-4 h-4" />
            <span>Authorized Partner Series · BETERVA BE-2300</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white leading-snug">
            Complete Chairman, Delegate &amp; Central Control Architecture
          </h2>
          <p className="text-xs sm:text-sm text-emerald-100/85 leading-relaxed">
            Built with die-cast housings, dual 3.5mm audio jacks for earphones and external lapel microphones, and rotary monitor volume knobs. Supports Free, Limit (1/2/3/6 active mics), and FIFO floor queuing from the central processor.
          </p>

          <div className="grid grid-cols-2 gap-3 text-xs text-emerald-100/90 pt-1">
            <div className="flex items-center gap-2">
              <Mic className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Condenser Gooseneck Mics</span>
            </div>
            <div className="flex items-center gap-2">
              <Headphones className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>3.5mm Earphone Monitoring</span>
            </div>
            <div className="flex items-center gap-2">
              <Sliders className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Anti-Feedback DSP Tuning</span>
            </div>
            <div className="flex items-center gap-2">
              <Cpu className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>60–120 Unit Expandability</span>
            </div>
          </div>

          <div className="pt-2 flex flex-wrap gap-3">
            <a
              href={`${BUSINESS_INFO.whatsappUrl}?text=${encodeURIComponent('Hello Kohinoor AV, please share the BETERVA BE-2300 Chairman, Delegate, and Central Control Unit proposal.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer px-6 py-3 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold rounded-xl transition-all shadow-md flex items-center gap-2"
            >
              <MessageSquare className="w-4 h-4 fill-current" />
              <span>Inquire on WhatsApp</span>
            </a>
            <button
              onClick={() => onOpenQuoteModal('BETERVA BE-2300 Complete Conference System')}
              className="cursor-pointer px-5 py-3 bg-emerald-950/80 hover:bg-emerald-900 text-emerald-200 text-xs font-semibold rounded-xl border border-emerald-800 transition-colors"
            >
              Request Formal Bid Sheet
            </button>
          </div>
        </div>

        <div className="lg:col-span-6">
          <div className="rounded-2xl overflow-hidden border border-emerald-800/80 bg-slate-900 shadow-2xl p-4">
            <img
              src="/images/products/product_17.jpg"
              alt="BETERVA BE-2300 Chairman and Delegate Conference Units"
              className="w-full h-auto object-contain bg-white rounded-xl p-2"
            />
            <div className="mt-3 text-center text-xs text-emerald-300 font-bold">
              BETERVA BE-2300 Chairman Unit · Delegate Unit · Central Control Unit
            </div>
          </div>
        </div>
      </div>

      {/* Three Separate BE-2300 Products Grid */}
      <div className="space-y-6">
        <div className="max-w-2xl">
          <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
            BETERVA BE-2300 System Components
          </h2>
          <p className="text-xs text-slate-500 mt-1">
            Each BETERVA BE-2300 component is supplied individually or as a calibrated multi-seat package with 8-pin interconnect cables.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {confProducts.map((prod, idx) => (
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
