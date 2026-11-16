import React, { useState } from 'react';
import { PageId, Product } from '../types';
import { PRODUCTS, BUSINESS_INFO } from '../data/products';
import { ProductCard } from '../components/ProductCard';
import {
  Mic,
  Monitor,
  Volume2,
  Cpu,
  CheckCircle2,
  MessageSquare,
  Lightbulb,
  Usb
} from 'lucide-react';

interface DigitalPodiumsPageProps {
  onNavigate: (page: PageId) => void;
  onSelectProduct: (product: Product) => void;
  onOpenQuoteModal: (productName?: string) => void;
}

const BLACK_PODIUM_VIEWS = [
  { label: 'Studio Front 3/4 View', src: '/images/catalog/black-digital-podium.jpg' },
  { label: 'Classroom Installation', src: '/images/products/product_13.jpg' },
  { label: 'Lecturer Interface & Tray', src: '/images/products/product_14.jpg' }
];

const TABLE_PODIUM_VIEWS = [
  { label: 'Console Desk Setup', src: '/images/catalog/table-digital-podium.jpg' },
  { label: 'Controller & Ports Detail', src: '/images/products/product_14.jpg' }
];

export const DigitalPodiumsPage: React.FC<DigitalPodiumsPageProps> = ({
  onSelectProduct,
  onOpenQuoteModal
}) => {
  const podiumProducts = PRODUCTS.filter((p) => p.category === 'digital-podiums');
  const [blackViewIdx, setBlackViewIdx] = useState(0);
  const [tableViewIdx, setTableViewIdx] = useState(0);

  return (
    <div className="space-y-16 py-10 max-w-7xl mx-auto px-4 sm:px-8">
      {/* Category Header */}
      <div className="space-y-4 max-w-3xl">
        <div className="text-xs font-bold text-emerald-700 uppercase tracking-wider">
          Category 05 · Interactive Rostrums &amp; Portable Lecterns
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
          Digital Podiums
        </h1>
        <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
          Engineered for lecture halls, auditoriums, and executive training centers across Pakistan. Featuring two distinct architectural styles—our flagship floor-standing <strong>Black Digital Podium</strong> and our compact <strong>Table-Style Digital Audio Podium</strong>.
        </p>
      </div>

      {/* Core Capabilities */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        <div className="p-5 bg-white rounded-2xl border border-slate-200 space-y-2 shadow-xs">
          <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center">
            <Monitor className="w-5 h-5" />
          </div>
          <h3 className="text-xs font-bold text-slate-900">21.5" &amp; 43" Touch Displays</h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            Capacitive Full HD &amp; 4K multi-touch lecturer monitors tilted ergonomically for natural control.
          </p>
        </div>

        <div className="p-5 bg-white rounded-2xl border border-slate-200 space-y-2 shadow-xs">
          <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center">
            <Volume2 className="w-5 h-5" />
          </div>
          <h3 className="text-xs font-bold text-slate-900">Built-in 60W Sound System</h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            Internal audio amplifier paired with matching speakers and wireless handheld/lapel mics.
          </p>
        </div>

        <div className="p-5 bg-white rounded-2xl border border-slate-200 space-y-2 shadow-xs">
          <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center">
            <Mic className="w-5 h-5" />
          </div>
          <h3 className="text-xs font-bold text-slate-900">Gooseneck Mic &amp; Lamp</h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            Cardioid speech gooseneck microphone plus integrated LED reading lamp for dimmed halls.
          </p>
        </div>

        <div className="p-5 bg-white rounded-2xl border border-slate-200 space-y-2 shadow-xs">
          <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center">
            <Cpu className="w-5 h-5" />
          </div>
          <h3 className="text-xs font-bold text-slate-900">Master AV Control &amp; Ports</h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            Unified HDMI, VGA, USB/SD/MMC, AUX &amp; LAN hub inside a lockable cold-rolled steel chassis.
          </p>
        </div>
      </div>

      {/* SECTION A: BLACK DIGITAL PODIUM (MULTI-ANGLE) */}
      <section className="bg-gradient-to-br from-[#072115] via-[#0d3420] to-[#05180f] text-white rounded-3xl p-6 sm:p-10 border border-emerald-900/60 shadow-2xl space-y-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-6 space-y-4">
            <div className="text-xs font-bold text-emerald-300 uppercase tracking-wider">
              Section A · Free-Standing Smart Rostrum
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              Black Digital Podium
            </h2>
            <p className="text-xs sm:text-sm text-emerald-100/85 leading-relaxed">
              Heavy-gauge matte-black cold-rolled steel lecturing station with a 21.5" Full HD multi-touch screen, internal master AV controller, built-in 60W audio amplifier, pair of 30W room speakers, gooseneck microphone, and lockable cabinet protecting internal PC hardware.
            </p>

            <div className="space-y-2 text-xs text-emerald-100/90 pt-1">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Dimensions: 1200mm (W) × 700mm (D) × 950mm (H)</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>21.5" Capacitive Touch LCD + Internal AV Switching Matrix</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>60W Built-In Amplifier + 01 Pair of 30W Acoustic Speakers</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Single-key central locking bay + sliding laptop drawer</span>
              </div>
            </div>

            <div className="pt-2 flex flex-wrap gap-3">
              <a
                href={`${BUSINESS_INFO.whatsappUrl}?text=${encodeURIComponent('Hello Kohinoor AV, I would like technical specs and quotation details for the Black Digital Podium.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer px-6 py-3 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold rounded-xl transition-all shadow-md flex items-center gap-2"
              >
                <MessageSquare className="w-4 h-4 fill-current" />
                <span>Inquire on WhatsApp</span>
              </a>
              <button
                onClick={() => onOpenQuoteModal('Black Digital Podium (KAV-BDP-215)')}
                className="cursor-pointer px-5 py-3 bg-white/10 hover:bg-white/20 text-white text-xs font-semibold rounded-xl border border-white/20 transition-colors"
              >
                Request Institutional Quote
              </button>
            </div>
          </div>

          <div className="lg:col-span-6 space-y-3">
            <div className="rounded-2xl overflow-hidden border border-white/20 bg-slate-950 aspect-4/3 flex items-center justify-center">
              <img
                src={BLACK_PODIUM_VIEWS[blackViewIdx].src}
                alt={`Black Digital Podium - ${BLACK_PODIUM_VIEWS[blackViewIdx].label}`}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {BLACK_PODIUM_VIEWS.map((view, idx) => (
                <button
                  key={view.label}
                  onClick={() => setBlackViewIdx(idx)}
                  className={`cursor-pointer px-3 py-1.5 rounded-lg text-[11px] font-semibold transition-colors ${
                    blackViewIdx === idx
                      ? 'bg-emerald-500 text-slate-950 font-bold'
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

      {/* SECTION B: TABLE-STYLE DIGITAL PODIUM */}
      <section className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-xs space-y-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-6 space-y-3 order-2 lg:order-1">
            <div className="rounded-2xl overflow-hidden border border-slate-200 bg-slate-50 aspect-4/3 flex items-center justify-center">
              <img
                src={TABLE_PODIUM_VIEWS[tableViewIdx].src}
                alt={`Table-Style Digital Podium - ${TABLE_PODIUM_VIEWS[tableViewIdx].label}`}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {TABLE_PODIUM_VIEWS.map((view, idx) => (
                <button
                  key={view.label}
                  onClick={() => setTableViewIdx(idx)}
                  className={`cursor-pointer px-3 py-1.5 rounded-lg text-[11px] font-semibold transition-colors ${
                    tableViewIdx === idx
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
              Section B · Portable Tabletop Audio Podium
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Table-Style Digital Podium
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              A complete all-in-one tabletop sound &amp; speech console engineered to turn any ordinary desk or conference table into a powerful amplified podium. Built with an integrated amplifier and full-range speaker, wireless handheld &amp; lapel microphones, flexible gooseneck microphone, and LED reading lamp.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-700">
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-200/80 flex items-start gap-2">
                <Volume2 className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                <span>Self-contained built-in amplifier &amp; room loudspeaker</span>
              </div>
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-200/80 flex items-start gap-2">
                <Mic className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                <span>Includes wireless handheld, lapel &amp; gooseneck mics</span>
              </div>
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-200/80 flex items-start gap-2">
                <Usb className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                <span>Built-in MP3 Player with USB, SD/MMC &amp; LED display</span>
              </div>
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-200/80 flex items-start gap-2">
                <Lightbulb className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                <span>Flexible LED reading lamp &amp; rotary Aux/Master mixer</span>
              </div>
            </div>

            <div className="pt-2 flex flex-wrap gap-3">
              <a
                href={`${BUSINESS_INFO.whatsappUrl}?text=${encodeURIComponent('Hello Kohinoor AV, I would like technical details for the Table-Style Digital Podium.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer px-6 py-3 bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-bold rounded-xl transition-all shadow-sm flex items-center gap-2"
              >
                <MessageSquare className="w-4 h-4 fill-current" />
                <span>Inquire on WhatsApp</span>
              </a>
              <button
                onClick={() => onOpenQuoteModal('Table-Style Digital Podium (KAV-TDP-100)')}
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
            Digital Podium Models
          </h2>
          <p className="text-xs text-slate-600 mt-1">
            Inspect full specifications or contact our Islamabad team for custom institutional branding and quotations.
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

      {/* Technical Comparison Table (Strictly Zero Prices) */}
      <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 space-y-6 shadow-xs max-w-5xl mx-auto">
        <h3 className="text-base sm:text-lg font-bold text-slate-900">
          Technical Comparison: Digital Podium Configurations
        </h3>

        <div className="overflow-x-auto">
          <table className="w-full text-xs text-left text-slate-700 border-collapse">
            <thead>
              <tr className="bg-emerald-50/70 text-emerald-950 border-b border-emerald-200 font-bold">
                <th className="py-3 px-4">Specification</th>
                <th className="py-3 px-4">Black Digital Podium (21.5")</th>
                <th className="py-3 px-4">Table-Style Digital Podium</th>
                <th className="py-3 px-4">Executive Podium 43" (NUST)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              <tr>
                <td className="py-3 px-4 font-bold text-slate-900">Form Factor</td>
                <td className="py-3 px-4">Free-Standing Steel Rostrum</td>
                <td className="py-3 px-4">Portable Tabletop Console</td>
                <td className="py-3 px-4">Executive Floor Lectern</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-bold text-slate-900">Display Interface</td>
                <td className="py-3 px-4">21.5" Full HD Multi-Touch</td>
                <td className="py-3 px-4">LED MP3/USB Status Screen</td>
                <td className="py-3 px-4">43" 4K UHD 20-Point Touch</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-bold text-slate-900">Built-in Audio System</td>
                <td className="py-3 px-4">60W Amp + Pair 30W Speakers</td>
                <td className="py-3 px-4">Integrated Amp &amp; Speaker</td>
                <td className="py-3 px-4">High-Capacity Audio Driver</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-bold text-slate-900">Microphones &amp; Lighting</td>
                <td className="py-3 px-4">Cardioid Gooseneck Mic</td>
                <td className="py-3 px-4">Gooseneck + Wireless + Lamp</td>
                <td className="py-3 px-4">Dual Gooseneck / Wireless</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-bold text-slate-900">Connectivity &amp; Media</td>
                <td className="py-3 px-4">HDMI, VGA, USB 3.0, RJ-45 LAN</td>
                <td className="py-3 px-4">USB, SD/MMC, AUX In, Speaker Out</td>
                <td className="py-3 px-4">HDMI In/Out, USB 3.0, LAN</td>
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
            Chat directly with our Islamabad engineering team for customization, delivery schedules, and GST documentation.
          </p>
        </div>
        <a
          href={`${BUSINESS_INFO.whatsappUrl}?text=${encodeURIComponent('Hello Kohinoor AV, I would like information and quotation details for Digital Podiums.')}`}
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
