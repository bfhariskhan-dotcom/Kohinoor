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
  Award,
  Layers,
  Sparkles
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
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider">
          <Monitor className="w-3.5 h-3.5" />
          <span>Category 01 · Smart Rostrums</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
          Smart Digital Podiums &amp; Presentation Rostrums
        </h1>
        <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
          Transform lecture halls, auditoriums, and executive conference spaces with our high-grade steel digital podiums featuring 21.5-inch, 32-inch, and 43-inch interactive touch displays, integrated 60W audio amplification, and professional gooseneck speech microphones.
        </p>
      </div>

      {/* Feature Capabilities Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="p-5 bg-white rounded-3xl border border-slate-200 space-y-2.5 shadow-xs">
          <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center">
            <Monitor className="w-5 h-5" />
          </div>
          <h3 className="text-xs font-bold text-slate-900">21.5", 32" &amp; 43" Display Options</h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            Capacitive high-definition and 4K multi-touch panels designed for seamless annotations and slides.
          </p>
        </div>

        <div className="p-5 bg-white rounded-3xl border border-slate-200 space-y-2.5 shadow-xs">
          <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center">
            <Volume2 className="w-5 h-5" />
          </div>
          <h3 className="text-xs font-bold text-slate-900">Built-in 60W Amplifier &amp; Speakers</h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            High-efficiency internal audio amplification with a matched pair of 30W front acoustic dispersion speakers.
          </p>
        </div>

        <div className="p-5 bg-white rounded-3xl border border-slate-200 space-y-2.5 shadow-xs">
          <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center">
            <Mic className="w-5 h-5" />
          </div>
          <h3 className="text-xs font-bold text-slate-900">Professional Gooseneck Mic</h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            Flexible acoustic cardioid speech microphone with illuminated red LED speaking ring and feedback rejection.
          </p>
        </div>

        <div className="p-5 bg-white rounded-3xl border border-slate-200 space-y-2.5 shadow-xs">
          <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center">
            <Cpu className="w-5 h-5" />
          </div>
          <h3 className="text-xs font-bold text-slate-900">HDMI, USB &amp; LAN Connectivity</h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            Comprehensive AV controller hub with external laptop inputs, network RJ-45, and central lockable chassis.
          </p>
        </div>
      </div>

      {/* Real Installation Case Spotlight - Featuring Client Uploaded Podium */}
      <div className="bg-gradient-to-br from-[#072115] via-[#0d3420] to-[#05180f] text-white rounded-3xl p-8 sm:p-12 border border-emerald-900/60 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center shadow-2xl">
        <div className="lg:col-span-7 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 text-xs font-bold">
            <Award className="w-3.5 h-3.5" />
            <span>National Institutional Landmark Deployment</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
            Deployed at National Centre of AI (NUST) &amp; University Auditoriums
          </h2>
          <p className="text-xs sm:text-sm text-emerald-100/90 leading-relaxed">
            Kohinoor Audio Visual supplied and installed full steel digital presentation podiums with integrated touch controllers to premier Pakistani universities, including NUST Islamabad. Designed for daily academic use with lockable bays and multi-channel microphone acoustics.
          </p>
          <div className="pt-2 flex flex-wrap gap-3">
            <a
              href={`${BUSINESS_INFO.whatsappUrl}?text=${encodeURIComponent('Hello Kohinoor AV, I want to purchase / inquire about Digital Podiums. Please share current pricing and delivery timelines.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer px-6 py-3 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold rounded-xl transition-all shadow-md flex items-center gap-2"
            >
              <MessageSquare className="w-4 h-4 fill-current" />
              <span>Order on WhatsApp</span>
            </a>
            <button
              onClick={() => onOpenQuoteModal('Digital Rostrum Presentation Model')}
              className="cursor-pointer px-5 py-3 bg-white/10 hover:bg-white/20 text-white text-xs font-semibold rounded-xl border border-white/20 backdrop-blur-md transition-colors"
            >
              Request Formal Tender Sheet
            </button>
          </div>
        </div>

        <div className="lg:col-span-5">
          <div className="rounded-2xl overflow-hidden border border-white/20 bg-slate-950 shadow-2xl">
            <img
              src="/images/client-uploads/upload_3.jpg"
              alt="Digital Rostrum with Controller and Touchscreen in University Classroom"
              className="w-full h-auto object-cover"
            />
            <div className="p-3 bg-slate-950/90 text-[11px] text-emerald-300 font-medium border-t border-emerald-900/50">
              Official Reference Installation: Steel Digital Rostrum in Islamabad
            </div>
          </div>
        </div>
      </div>

      {/* Available Models: CLEAN 2-COLUMN GRID with Prominent Pricing */}
      <div className="space-y-6">
        <div className="max-w-2xl">
          <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
            Available Digital Podium Models &amp; Pricing
          </h2>
          <p className="text-xs text-slate-600 mt-1">
            Browse our verified models with listed prices. Direct WhatsApp ordering is available for instant stock confirmation and official GST quotation.
          </p>
        </div>

        {/* 2-Column Grid as specifically requested */}
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
              <tr className="bg-emerald-50/70 text-emerald-950 border-b border-emerald-200 font-bold">
                <th className="py-3 px-4">Feature / Specification</th>
                <th className="py-3 px-4">Digital Rostrum 21.5"</th>
                <th className="py-3 px-4">Curved Touch Podium 32"</th>
                <th className="py-3 px-4">Executive Podium 43" (NUST)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              <tr>
                <td className="py-3 px-4 font-bold text-slate-900">Estimated Price (PKR)</td>
                <td className="py-3 px-4 font-extrabold text-emerald-800">Rs. 285,000</td>
                <td className="py-3 px-4 font-extrabold text-emerald-800">Rs. 365,000</td>
                <td className="py-3 px-4 font-extrabold text-emerald-800">Rs. 495,000</td>
              </tr>
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
                <td className="py-3 px-4 font-bold text-slate-900">Chassis Material</td>
                <td className="py-3 px-4">Cold-Rolled Sheet Steel</td>
                <td className="py-3 px-4">Architectural Aluminum Alloy</td>
                <td className="py-3 px-4">Commercial Steel + Logo Zone</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Inquiry Call to Action in Emerald Green */}
      <div className="bg-emerald-700 rounded-3xl p-8 sm:p-10 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl max-w-5xl mx-auto">
        <div className="space-y-1 text-center md:text-left">
          <h3 className="text-xl font-bold text-white">Need an Instant WhatsApp Price Quote for Digital Podiums?</h3>
          <p className="text-xs text-emerald-100">
            Chat directly with our Islamabad technical sales team for stock availability, delivery time, and official GST invoice.
          </p>
        </div>
        <a
          href={`${BUSINESS_INFO.whatsappUrl}?text=${encodeURIComponent('Hello Kohinoor AV, I would like to inquire about Digital Podium prices and delivery options in Pakistan.')}`}
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
