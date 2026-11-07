import React from 'react';
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
  Award
} from 'lucide-react';

interface DigitalPodiumsPageProps {
  onNavigate: (page: PageId) => void;
  onSelectProduct: (product: Product) => void;
  onOpenQuoteModal: (productName?: string) => void;
}

export const DigitalPodiumsPage: React.FC<DigitalPodiumsPageProps> = ({
  onNavigate,
  onSelectProduct,
  onOpenQuoteModal
}) => {
  const podiumProducts = PRODUCTS.filter((p) => p.category === 'digital-podiums');

  return (
    <div className="space-y-16 py-10 max-w-7xl mx-auto px-4 sm:px-8">
      {/* Category Header */}
      <div className="space-y-4 max-w-3xl">
        <div className="text-xs font-bold text-blue-600 uppercase tracking-wider">
          Product Category 01 · Smart Rostrums
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
          Smart Digital Podiums &amp; Presentation Rostrums
        </h1>
        <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
          Transform lecture halls, auditoriums, and executive conference spaces with our high-grade steel digital podiums featuring 21.5-inch, 32-inch, and 43-inch interactive touch displays, integrated 60W audio amplification, and professional gooseneck speech microphones.
        </p>
      </div>

      {/* Feature Capabilities Grid - 2x2 Clean Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="p-5 bg-white rounded-3xl border border-slate-200 space-y-2.5 shadow-xs">
          <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
            <Monitor className="w-5 h-5" />
          </div>
          <h3 className="text-xs font-bold text-slate-900">21.5", 32" &amp; 43" Display Options</h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            Capacitive high-definition and 4K multi-touch panels designed for seamless annotations and slides.
          </p>
        </div>

        <div className="p-5 bg-white rounded-2xl border border-slate-200 space-y-2.5 shadow-xs">
          <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
            <Volume2 className="w-5 h-5" />
          </div>
          <h3 className="text-xs font-bold text-slate-900">Built-in 60W Amplifier &amp; Speakers</h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            High-efficiency internal audio amplification with a matched pair of 30W front acoustic dispersion speakers.
          </p>
        </div>

        <div className="p-5 bg-white rounded-2xl border border-slate-200 space-y-2.5 shadow-xs">
          <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
            <Mic className="w-5 h-5" />
          </div>
          <h3 className="text-xs font-bold text-slate-900">Professional Gooseneck Mic</h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            Flexible acoustic cardioid speech microphone with illuminated red LED speaking ring and feedback rejection.
          </p>
        </div>

        <div className="p-5 bg-white rounded-2xl border border-slate-200 space-y-2.5 shadow-xs">
          <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
            <Cpu className="w-5 h-5" />
          </div>
          <h3 className="text-xs font-bold text-slate-900">HDMI, USB &amp; LAN Connectivity</h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            Comprehensive AV controller hub with external laptop inputs, network RJ-45, and central lockable chassis.
          </p>
        </div>
      </div>

      {/* Real Installation Case Spotlight (NUST NCAI) */}
      <div className="bg-slate-950 text-white rounded-3xl p-8 sm:p-12 border border-slate-800 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center shadow-2xl">
        <div className="lg:col-span-7 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-blue-900/60 text-blue-300 text-xs font-bold">
            <Award className="w-3.5 h-3.5" />
            <span>National Institution Landmark Deployment</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
            Deployed at National Centre of Artificial Intelligence (NCAI) / NUST
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            Kohinoor Audio Visual supplied the 43-inch large-format interactive touch presentation podium to the National Centre of Artificial Intelligence at NUST Islamabad. The podium is actively utilized for AI research presentations, high-level diplomatic symposiums, and institutional briefings.
          </p>
          <div className="pt-2 flex flex-wrap gap-4">
            <a
              href={`${BUSINESS_INFO.whatsappUrl}?text=${encodeURIComponent('Hello Kohinoor AV, I want to purchase the Executive 43-Inch Smart Touch Rostrum (NUST / NCAI Model). Please share current pricing and delivery timelines.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold rounded-xl transition-all shadow-md flex items-center gap-2"
            >
              <MessageSquare className="w-4 h-4 fill-current" />
              <span>Order NUST/NCAI Model on WhatsApp</span>
            </a>
            <button
              onClick={() => onOpenQuoteModal('Executive 43-Inch Smart Touch Rostrum (NUST & NCAI Model)')}
              className="cursor-pointer px-5 py-3 bg-slate-900 hover:bg-slate-800 text-slate-200 text-xs font-semibold rounded-xl border border-slate-700 transition-colors"
            >
              Request Formal Tender Sheet
            </button>
          </div>
        </div>

        <div className="lg:col-span-5">
          <div className="rounded-2xl overflow-hidden border border-slate-700 bg-slate-900 shadow-xl">
            <img
              src="/images/products/product_8.jpg"
              alt="43-Inch Touch Rostrum at National Centre of AI NUST Islamabad"
              className="w-full h-auto object-cover"
            />
            <div className="p-3 bg-slate-950 text-[11px] text-blue-300 font-medium">
              National Centre of Artificial Intelligence (NCAI), NUST Islamabad
            </div>
          </div>
        </div>
      </div>

      {/* Available Models: CLEAN 2-COLUMN GRID (Per user feedback to avoid cramped columns) */}
      <div className="space-y-6">
        <div className="max-w-2xl">
          <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
            Available Digital Podium Models
          </h2>
          <p className="text-xs text-slate-600 mt-1">
            Browse our verified models. Direct WhatsApp ordering is available for instant pricing and delivery confirmation across Pakistan.
          </p>
        </div>

        {/* 2-Column Grid as specifically requested by user */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {podiumProducts.map((prod) => (
            <ProductCard
              key={prod.id}
              product={prod}
              onSelect={onSelectProduct}
              onOpenQuote={onOpenQuoteModal}
            />
          ))}
        </div>
      </div>

      {/* Technical Specifications Summary Table */}
      <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 space-y-6 shadow-xs max-w-5xl mx-auto">
        <h3 className="text-base sm:text-lg font-bold text-slate-900">
          Comparative Specifications for Digital Podiums
        </h3>

        <div className="overflow-x-auto">
          <table className="w-full text-xs text-left text-slate-700 border-collapse">
            <thead>
              <tr className="bg-slate-50 text-slate-900 border-b border-slate-200 font-bold">
                <th className="py-3 px-4">Feature / Specification</th>
                <th className="py-3 px-4">Digital Rostrum 21.5"</th>
                <th className="py-3 px-4">Curved Touch Podium 32"</th>
                <th className="py-3 px-4">Executive Podium 43" (NUST)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              <tr>
                <td className="py-3 px-4 font-bold text-slate-900">Display Size &amp; Resolution</td>
                <td className="py-3 px-4">21.5" Full HD (1920x1080)</td>
                <td className="py-3 px-4">32" Full HD IPS</td>
                <td className="py-3 px-4">43" 4K UHD (3840x2160)</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-bold text-slate-900">Touch Technology</td>
                <td className="py-3 px-4">Capacitive Multi-Touch</td>
                <td className="py-3 px-4">10-Point PCAP Touch</td>
                <td className="py-3 px-4">20-Point Multi-Touch</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-bold text-slate-900">Built-in Sound System</td>
                <td className="py-3 px-4">60W Amp + Pair 30W Speakers</td>
                <td className="py-3 px-4">Integrated Audio Out / Amp</td>
                <td className="py-3 px-4">High-Capacity Audio Driver</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-bold text-slate-900">Microphone</td>
                <td className="py-3 px-4">Cardioid Gooseneck Included</td>
                <td className="py-3 px-4">Wireless / Gooseneck Mount</td>
                <td className="py-3 px-4">Dual Gooseneck / Wireless</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-bold text-slate-900">Dimensions (WxDxH)</td>
                <td className="py-3 px-4">1200 x 700 x 950 mm</td>
                <td className="py-3 px-4">Ergonomic Curved Stand</td>
                <td className="py-3 px-4">Heavy-Duty Broad Format</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-bold text-slate-900">Chassis Material</td>
                <td className="py-3 px-4">Cold-Rolled Sheet Steel</td>
                <td className="py-3 px-4">Architectural Aluminum Alloy</td>
                <td className="py-3 px-4">Commercial Steel + Logo Zone</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Inquiry Call to Action in Solid Blue */}
      <div className="bg-blue-600 rounded-3xl p-8 sm:p-10 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl max-w-5xl mx-auto">
        <div className="space-y-1 text-center md:text-left">
          <h3 className="text-xl font-bold text-white">Need an Instant WhatsApp Price Quote for Digital Podiums?</h3>
          <p className="text-xs text-blue-100">
            Chat directly with our Islamabad technical sales team for stock availability, delivery time, and official GST invoice.
          </p>
        </div>
        <a
          href={`${BUSINESS_INFO.whatsappUrl}?text=${encodeURIComponent('Hello Kohinoor AV, I would like to inquire about Digital Podium prices and delivery options in Pakistan.')}`}
          target="_blank"
          rel="noopener noreferrer"
          className="cursor-pointer px-6 py-3 bg-white text-blue-700 hover:bg-blue-50 font-bold text-xs rounded-xl shadow-md transition-colors whitespace-nowrap flex items-center gap-2"
        >
          <MessageSquare className="w-4 h-4 fill-current" />
          <span>Chat on WhatsApp (+92 333 5163220)</span>
        </a>
      </div>
    </div>
  );
};
