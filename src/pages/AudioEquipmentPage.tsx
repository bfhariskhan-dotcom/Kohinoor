import React from 'react';
import { PageId, Product } from '../types';
import { PRODUCTS, BUSINESS_INFO } from '../data/products';
import { ProductCard } from '../components/ProductCard';
import { Volume2, Mic, Radio, Sliders, CheckCircle2, MessageSquare } from 'lucide-react';

interface AudioEquipmentPageProps {
  onNavigate: (page: PageId) => void;
  onSelectProduct: (product: Product) => void;
  onOpenQuoteModal: (productName?: string) => void;
}

export const AudioEquipmentPage: React.FC<AudioEquipmentPageProps> = ({
  onSelectProduct,
  onOpenQuoteModal
}) => {
  const audioProducts = PRODUCTS.filter((p) => p.category === 'audio-equipment');

  return (
    <div className="space-y-14 py-10 max-w-7xl mx-auto px-4 sm:px-8">
      {/* Header */}
      <div className="space-y-3 max-w-3xl">
        <div className="text-xs font-bold text-emerald-700 uppercase tracking-wider">
          Category 06 · Commercial Sound Reinforcement
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
          Audio Equipment
        </h1>
        <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
          Complete commercial audio solutions featuring CMX Audio PA mixer amplifiers, dual-channel UHF wireless microphones, wired podium &amp; conference microphones, portable PA systems, and wall/ceiling loudspeakers.
        </p>
      </div>

      {/* Four Sub-Areas Covered */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        <div className="p-5 bg-white rounded-2xl border border-slate-200 space-y-2 shadow-xs">
          <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center">
            <Sliders className="w-5 h-5" />
          </div>
          <h3 className="text-xs font-bold text-slate-900">Audio Amplifiers</h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            CMX EA-120 / EA-240A rackmount PA mixer amplifiers with 100V/70V &amp; 4–16Ω zone outputs.
          </p>
        </div>

        <div className="p-5 bg-white rounded-2xl border border-slate-200 space-y-2 shadow-xs">
          <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center">
            <Mic className="w-5 h-5" />
          </div>
          <h3 className="text-xs font-bold text-slate-900">Wired Microphones</h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            Cardioid condenser desktop goosenecks and balanced XLR vocal microphones with LED rings.
          </p>
        </div>

        <div className="p-5 bg-white rounded-2xl border border-slate-200 space-y-2 shadow-xs">
          <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center">
            <Radio className="w-5 h-5" />
          </div>
          <h3 className="text-xs font-bold text-slate-900">Wireless Microphones</h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            CMX WM-U200B &amp; SKM9000 UHF handheld, collar lapel, and headset wireless mic kits.
          </p>
        </div>

        <div className="p-5 bg-white rounded-2xl border border-slate-200 space-y-2 shadow-xs">
          <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center">
            <Volume2 className="w-5 h-5" />
          </div>
          <h3 className="text-xs font-bold text-slate-900">PA &amp; Audio Accessories</h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            Edifier rechargeable trolley PA speakers, wall/ceiling acoustic pairs, stands, and cabling.
          </p>
        </div>
      </div>

      {/* Partner CMX Audio Showcase */}
      <div className="bg-gradient-to-br from-[#062c1b] via-[#0a3d26] to-[#041f13] text-white rounded-3xl p-8 sm:p-12 border border-emerald-900/60 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center shadow-2xl">
        <div className="lg:col-span-6 space-y-5">
          <div className="text-xs font-bold text-emerald-300 uppercase tracking-wider">
            Official Partner Hardware · CMX Audio
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white leading-snug">
            Commercial PA Amplifiers &amp; UHF Wireless Microphones
          </h2>
          <p className="text-xs sm:text-sm text-emerald-100/85 leading-relaxed">
            Designed for continuous 24/7 academic and institutional use. From multi-zone campus paging amplifiers (120W to 240W+) to long-range 100m UHF wireless microphone receivers, Kohinoor Audio Visual engineers complete room acoustics across Pakistan.
          </p>

          <div className="space-y-2 text-xs text-emerald-100/90">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>USB, SD Card, FM Tuner &amp; Bluetooth audio source integration</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>200-channel agile UHF reception immune to signal dropouts</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Full speaker layout, cabling, and acoustic calibration included</span>
            </div>
          </div>

          <div className="pt-2 flex flex-wrap gap-3">
            <a
              href={`${BUSINESS_INFO.whatsappUrl}?text=${encodeURIComponent('Hello Kohinoor AV, I would like information on CMX Audio Amplifiers and Microphones.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer px-6 py-3 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold rounded-xl transition-all shadow-md flex items-center gap-2"
            >
              <MessageSquare className="w-4 h-4 fill-current" />
              <span>Inquire on WhatsApp</span>
            </a>
            <button
              onClick={() => onOpenQuoteModal('Audio Equipment & CMX Amplifiers')}
              className="cursor-pointer px-5 py-3 bg-white/10 hover:bg-white/20 text-white text-xs font-semibold rounded-xl border border-white/20 transition-colors"
            >
              Request Audio Proposal
            </button>
          </div>
        </div>

        <div className="lg:col-span-6">
          <div className="rounded-2xl overflow-hidden border border-emerald-800/80 bg-slate-900 shadow-2xl">
            <img
              src="/images/catalog/audio-mixer-amplifier.jpg"
              alt="CMX PA Mixer Amplifier and Dual-Channel UHF Wireless Microphones"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>

      {/* Product Models Grid */}
      <div className="space-y-6">
        <div className="max-w-2xl">
          <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
            Audio Equipment Catalog
          </h2>
          <p className="text-xs text-slate-500 mt-1">
            Amplifiers, wired gooseneck/vocal mics, dual UHF wireless microphone sets, and portable PA speakers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {audioProducts.map((prod, idx) => (
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
