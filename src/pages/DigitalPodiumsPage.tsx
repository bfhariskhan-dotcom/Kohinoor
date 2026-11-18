import React, { useState } from 'react';
import { PageId, Product } from '../types';
import { PRODUCTS, BUSINESS_INFO } from '../data/products';
import { ProductCard } from '../components/ProductCard';
import {
  Mic,
  Volume2,
  CheckCircle2,
  MessageSquare,
  Usb,
  Ruler,
  Scale
} from 'lucide-react';

interface DigitalPodiumsPageProps {
  onNavigate: (page: PageId) => void;
  onSelectProduct: (product: Product) => void;
  onOpenQuoteModal: (productName?: string) => void;
}

const BLACK_PODIUM_VIEWS = [
  { label: 'Black Digital Podium (Dual Angles)', src: '/images/real-stock/digital-podium-black.jpg' },
  { label: 'Classroom Setup', src: '/images/products/product_13.jpg' }
];

const WHITE_PODIUM_VIEWS = [
  { label: 'White Variant (4-Angle View)', src: '/images/products/product_9.jpg' },
  { label: 'White Edition Studio View', src: '/images/products/product_10.jpg' },
  { label: 'NUST NCAI Deployment', src: '/images/products/product_8.jpg' }
];

export const DigitalPodiumsPage: React.FC<DigitalPodiumsPageProps> = ({
  onSelectProduct,
  onOpenQuoteModal
}) => {
  const podiumProducts = PRODUCTS.filter((p) => p.category === 'digital-podiums');
  const [blackViewIdx, setBlackViewIdx] = useState(0);
  const [whiteViewIdx, setWhiteViewIdx] = useState(0);

  return (
    <div className="space-y-16 py-10 max-w-7xl mx-auto px-4 sm:px-8">
      {/* Category Header */}
      <div className="space-y-4 max-w-3xl">
        <div className="text-xs font-bold text-emerald-700 uppercase tracking-wider">
          Category 04 · Interactive &amp; Audio Lecterns (Black &amp; White Editions)
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
          Digital Podiums
        </h1>
        <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
          Ready-stock digital podiums engineered for lecture halls, auditoriums, and training centers across Pakistan—available in both <strong>Black Digital Podium</strong> and <strong>White Digital Podium</strong> finishes with dual gooseneck + 2 wireless handheld mics, 60W audio output, MP3/USB/SD/AUX panel, and 580 × 420 × 1100 mm build (29 kg).
        </p>
      </div>

      {/* Core Specifications Strip */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        <div className="p-5 bg-white rounded-2xl border border-slate-200 space-y-2 shadow-xs">
          <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center">
            <Mic className="w-5 h-5" />
          </div>
          <h3 className="text-xs font-bold text-slate-900">Dual Gooseneck + 2 Wireless Mics</h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            Includes gooseneck podium microphone &amp; lamp plus 2 wireless handheld microphones.
          </p>
        </div>

        <div className="p-5 bg-white rounded-2xl border border-slate-200 space-y-2 shadow-xs">
          <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center">
            <Volume2 className="w-5 h-5" />
          </div>
          <h3 className="text-xs font-bold text-slate-900">60W High-Performance Audio</h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            Dedicated 60W integrated audio output (100W consumed power) with front column speakers.
          </p>
        </div>

        <div className="p-5 bg-white rounded-2xl border border-slate-200 space-y-2 shadow-xs">
          <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center">
            <Usb className="w-5 h-5" />
          </div>
          <h3 className="text-xs font-bold text-slate-900">MP3 / USB / SD / AUX Panel</h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            Built-in digital media player and microphone/line mixing controls on the console.
          </p>
        </div>

        <div className="p-5 bg-white rounded-2xl border border-slate-200 space-y-2 shadow-xs">
          <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center">
            <Ruler className="w-5 h-5" />
          </div>
          <h3 className="text-xs font-bold text-slate-900">580 × 420 × 1100 mm · 29 kg</h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            Compact ergonomic footprint with solid 29 kg weighted base built for stability.
          </p>
        </div>
      </div>

      {/* VARIANT A: BLACK DIGITAL PODIUM */}
      <section className="bg-gradient-to-br from-emerald-700 via-emerald-600 to-emerald-800 text-white rounded-3xl p-6 sm:p-10 border border-emerald-500/40 shadow-2xl space-y-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-6 space-y-4">
            <div className="text-xs font-bold text-emerald-300 uppercase tracking-wider">
              Variant 01 · Sleek Black Finish
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              Black Digital Podium
            </h2>
            <p className="text-xs sm:text-sm text-emerald-100/85 leading-relaxed">
              Sleek matte-black digital lectern designed for clear auditorium and classroom projection. Equipped with dual gooseneck mic &amp; lamp, 2 wireless handheld microphones, integrated 60W amplifier &amp; speaker array (100W power consumption), and built-in MP3/USB/SD/AUX control console.
            </p>

            <div className="space-y-2 text-xs text-emerald-100/90 pt-1">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Size: 580 × 420 × 1100 mm · Weight: Solid 29 kg Build</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Audio Output: 60W High-Performance (100W Consumed Power)</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Microphones: Dual Gooseneck + 2 Wireless Handheld Mics</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Controls: Built-in MP3 / USB / SD / AUX Control Panel</span>
              </div>
            </div>

            <div className="pt-2 flex flex-wrap gap-3">
              <a
                href={`${BUSINESS_INFO.whatsappUrl}?text=${encodeURIComponent('Hello Kohinoor AV, I would like technical specs and availability for the Black Digital Podium (580x420x1100mm, 60W).')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer px-6 py-3 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold rounded-xl transition-all shadow-md flex items-center gap-2"
              >
                <MessageSquare className="w-4 h-4 fill-current" />
                <span>Inquire on WhatsApp</span>
              </a>
              <button
                onClick={() => onOpenQuoteModal('Black Digital Podium (KAV-DP-BLK-60W)')}
                className="cursor-pointer px-5 py-3 bg-white/10 hover:bg-white/20 text-white text-xs font-semibold rounded-xl border border-white/20 transition-colors"
              >
                Request Institutional Quote
              </button>
            </div>
          </div>

          <div className="lg:col-span-6 space-y-3">
            <div className="rounded-2xl overflow-hidden border border-white/20 bg-white aspect-4/3 flex items-center justify-center p-3">
              <img
                src={BLACK_PODIUM_VIEWS[blackViewIdx].src}
                alt={`Black Digital Podium - ${BLACK_PODIUM_VIEWS[blackViewIdx].label}`}
                className="w-full h-full object-contain"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {BLACK_PODIUM_VIEWS.map((view, idx) => (
                <button
                  key={view.label}
                  onClick={() => setBlackViewIdx(idx)}
                  className={`cursor-pointer px-3 py-1.5 rounded-lg text-[11px] font-semibold transition-colors ${
                    blackViewIdx === idx
                      ? 'bg-emerald-400 text-slate-950 font-bold'
                      : 'bg-white/10 text-emerald-100 hover:bg-white/20'
                  }`}
                >
                  {view.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* VARIANT B: WHITE DIGITAL PODIUM */}
      <section className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-xs space-y-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-6 space-y-3 order-2 lg:order-1">
            <div className="rounded-2xl overflow-hidden border border-slate-200 bg-slate-50 aspect-4/3 flex items-center justify-center p-3">
              <img
                src={WHITE_PODIUM_VIEWS[whiteViewIdx].src}
                alt={`White Digital Podium Variant - ${WHITE_PODIUM_VIEWS[whiteViewIdx].label}`}
                className="w-full h-full object-contain"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {WHITE_PODIUM_VIEWS.map((view, idx) => (
                <button
                  key={view.label}
                  onClick={() => setWhiteViewIdx(idx)}
                  className={`cursor-pointer px-3 py-1.5 rounded-lg text-[11px] font-semibold transition-colors ${
                    whiteViewIdx === idx
                      ? 'bg-emerald-700 text-white font-bold'
                      : 'bg-slate-100 text-slate-700 hover:bg-emerald-50'
                  }`}
                >
                  {view.label}
                </button>
              ))}
            </div>
          </div>

          <div className="lg:col-span-6 space-y-4 order-1 lg:order-2">
            <div className="text-xs font-bold text-emerald-700 uppercase tracking-wider">
              Variant 02 · Architectural White Edition
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              White Digital Podium
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Modern architectural White Digital Podium finish matching bright medical campuses, university lecture halls, and research centers across Pakistan. Available in both audio podium and interactive touchscreen rostrum configurations.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-700">
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-200/80 flex items-start gap-2">
                <Volume2 className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                <span>60W high-performance audio output (100W consumed)</span>
              </div>
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-200/80 flex items-start gap-2">
                <Mic className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                <span>Dual gooseneck mic + 2 wireless handheld mics</span>
              </div>
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-200/80 flex items-start gap-2">
                <Usb className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                <span>Built-in MP3 / USB / SD / AUX control panel</span>
              </div>
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-200/80 flex items-start gap-2">
                <Scale className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                <span>Size 580 × 420 × 1100 mm · Solid 29 kg build</span>
              </div>
            </div>

            <div className="pt-2 flex flex-wrap gap-3">
              <a
                href={`${BUSINESS_INFO.whatsappUrl}?text=${encodeURIComponent('Hello Kohinoor AV, I would like technical details for the White Digital Podium Variant.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer px-6 py-3 bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-bold rounded-xl transition-all shadow-sm flex items-center gap-2"
              >
                <MessageSquare className="w-4 h-4 fill-current" />
                <span>Inquire on WhatsApp</span>
              </a>
              <button
                onClick={() => onOpenQuoteModal('White Digital Podium (KAV-DP-WHT-60W)')}
                className="cursor-pointer px-5 py-3 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-semibold rounded-xl transition-colors"
              >
                Request Quotation
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Catalog Product Cards */}
      <div className="space-y-6">
        <div className="max-w-2xl">
          <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
            Digital Podium Models ({podiumProducts.length} Variants)
          </h2>
          <p className="text-xs text-slate-600 mt-1">
            Black Digital Podium, White Digital Podium, and 43-inch NUST/NCAI Reference Interactive Rostrum.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {podiumProducts.map((prod, idx) => (
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

      {/* Technical Comparison Table */}
      <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 space-y-6 shadow-xs max-w-5xl mx-auto">
        <h3 className="text-base sm:text-lg font-bold text-slate-900">
          Technical Specifications: Black &amp; White Digital Podiums
        </h3>

        <div className="overflow-x-auto">
          <table className="w-full text-xs text-left text-slate-700 border-collapse">
            <thead>
              <tr className="bg-emerald-50/70 text-emerald-950 border-b border-emerald-200 font-bold">
                <th className="py-3 px-4">Specification</th>
                <th className="py-3 px-4">Black Digital Podium</th>
                <th className="py-3 px-4">White Digital Podium</th>
                <th className="py-3 px-4">Executive 43" (NUST)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              <tr>
                <td className="py-3 px-4 font-bold text-slate-900">Color Finish</td>
                <td className="py-3 px-4">Sleek Matte Black</td>
                <td className="py-3 px-4">Architectural White</td>
                <td className="py-3 px-4">White / Custom Metallic</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-bold text-slate-900">Microphones</td>
                <td className="py-3 px-4">Dual Gooseneck + 2 Wireless Handheld Mics</td>
                <td className="py-3 px-4">Dual Gooseneck + 2 Wireless Handheld Mics</td>
                <td className="py-3 px-4">Dual Gooseneck + Wireless</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-bold text-slate-900">Audio Output</td>
                <td className="py-3 px-4">60W High-Performance (100W Consumed)</td>
                <td className="py-3 px-4">60W High-Performance (100W Consumed)</td>
                <td className="py-3 px-4">Room PA Audio Interface</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-bold text-slate-900">Control Panel</td>
                <td className="py-3 px-4">Built-in MP3 / USB / SD / AUX Panel</td>
                <td className="py-3 px-4">Built-in MP3 / USB / SD / AUX Panel</td>
                <td className="py-3 px-4">43" 4K UHD Touch Console</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-bold text-slate-900">Dimensions &amp; Weight</td>
                <td className="py-3 px-4">580 × 420 × 1100 mm · 29 kg</td>
                <td className="py-3 px-4">580 × 420 × 1100 mm · 29 kg</td>
                <td className="py-3 px-4">Custom Full-Body Rostrum</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-emerald-700 rounded-3xl p-8 sm:p-10 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl max-w-5xl mx-auto">
        <div className="space-y-1 text-center md:text-left">
          <h3 className="text-xl font-bold text-white">Request an Institutional Quotation for Digital Podiums</h3>
          <p className="text-xs text-emerald-100">
            Chat directly with our Islamabad engineering team for Black &amp; White finish availability and delivery schedules.
          </p>
        </div>
        <a
          href={`${BUSINESS_INFO.whatsappUrl}?text=${encodeURIComponent('Hello Kohinoor AV, I would like information and availability for Digital Podiums (Black / White Variant).')}`}
          target="_blank"
          rel="noopener noreferrer"
          className="cursor-pointer px-6 py-3 bg-white text-emerald-800 hover:bg-emerald-50 font-bold text-xs rounded-xl shadow-md transition-colors whitespace-nowrap flex items-center gap-2 shrink-0"
        >
          <MessageSquare className="w-4 h-4 fill-current text-emerald-700" />
          <span>Chat on WhatsApp</span>
        </a>
      </div>
    </div>
  );
};
