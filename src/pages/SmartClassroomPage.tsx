import React from 'react';
import { PageId, Product } from '../types';
import { PRODUCTS, BUSINESS_INFO } from '../data/products';
import { ProductCard } from '../components/ProductCard';
import {
  GraduationCap,
  Wrench,
  BookOpen,
  Volume2,
  CheckCircle2,
  MessageSquare,
  Sparkles,
  Camera
} from 'lucide-react';

interface SmartClassroomPageProps {
  onNavigate: (page: PageId) => void;
  onSelectProduct: (product: Product) => void;
  onOpenQuoteModal: (productName?: string) => void;
}

export const SmartClassroomPage: React.FC<SmartClassroomPageProps> = ({
  onNavigate,
  onSelectProduct,
  onOpenQuoteModal
}) => {
  const smartProducts = PRODUCTS.filter((p) => p.category === 'smart-classroom-solutions');

  return (
    <div className="space-y-16 py-10 max-w-7xl mx-auto px-4 sm:px-8">
      {/* Category Header */}
      <div className="space-y-4 max-w-3xl">
        <div className="text-xs font-bold text-emerald-700 uppercase tracking-wider">
          Product Category 06 · Turnkey Integration
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
          Complete Smart Classroom &amp; Educational Technology Solutions
        </h1>
        <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
          Comprehensive institutional AV bundles tailored for schools, colleges, and universities across Pakistan. We unify digital teaching rostrums, 4K interactive flat panels, multimedia projectors, and classroom audio distribution into a unified, easy-to-use teaching environment.
        </p>
      </div>

      {/* 4 Pillars of a Kohinoor Smart Classroom */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="p-5 bg-white rounded-3xl border border-slate-200 space-y-2.5 shadow-xs">
          <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center">
            <GraduationCap className="w-5 h-5" />
          </div>
          <h3 className="text-xs font-bold text-slate-900">Digital Teaching Podiums</h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            Centralized instructor station with touch display, internal computer, gooseneck mic, and AV master switcher.
          </p>
        </div>

        <div className="p-5 bg-white rounded-3xl border border-slate-200 space-y-2.5 shadow-xs">
          <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center">
            <BookOpen className="w-5 h-5" />
          </div>
          <h3 className="text-xs font-bold text-slate-900">Interactive 4K LED Displays</h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            75" and 86" anti-glare touch panels replacing dusty chalkboards with dynamic digital whiteboard software.
          </p>
        </div>

        <div className="p-5 bg-white rounded-3xl border border-slate-200 space-y-2.5 shadow-xs">
          <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center">
            <Volume2 className="w-5 h-5" />
          </div>
          <h3 className="text-xs font-bold text-slate-900">Acoustic Audio Systems</h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            Balanced 60W wall speakers and wireless vocal microphones delivering effortless vocal clarity to every student.
          </p>
        </div>

        <div className="p-5 bg-white rounded-3xl border border-slate-200 space-y-2.5 shadow-xs">
          <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center">
            <Wrench className="w-5 h-5" />
          </div>
          <h3 className="text-xs font-bold text-slate-900">Installation &amp; Faculty Training</h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            Complete turnkey cabling, bracket fixing, software configuration, and hands-on faculty workshops.
          </p>
        </div>
      </div>

      {/* Turnkey Solution Banner */}
      <div className="bg-gradient-to-br from-[#072115] via-[#0d3420] to-[#05180f] text-white rounded-3xl p-8 sm:p-12 border border-emerald-900/60 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center shadow-2xl">
        <div className="lg:col-span-7 space-y-5">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-emerald-900/80 border border-emerald-700/50 text-emerald-300 text-xs font-bold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Turnkey Institutional Package</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white leading-snug">
            All-In-One Modern Classroom Deployment
          </h2>
          <p className="text-xs sm:text-sm text-emerald-100/80 leading-relaxed">
            Eliminate vendor fragmentation. Kohinoor Audio Visual designs, delivers, cables, and commissions the entire classroom technology suite. When our engineers hand over the keys, teachers can step up to the podium and start teaching immediately.
          </p>

          <div className="space-y-2 pt-1 text-xs text-emerald-100/90">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Includes 75" or 86" 4K Interactive Flat Panel with Android + Windows</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Includes Kohinoor Cold-Rolled Steel Digital Rostrum with built-in sound</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Includes 4K PTZ auto-tracking camera for hybrid lectures &amp; Zoom</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Comprehensive on-site commissioning &amp; official manufacturer warranty</span>
            </div>
          </div>

          <div className="pt-2 flex flex-wrap gap-3">
            <a
              href={`${BUSINESS_INFO.whatsappUrl}?text=${encodeURIComponent('Hello Kohinoor AV, I would like to order / discuss the Turnkey Smart Classroom Package for our institution.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer px-6 py-3 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold rounded-xl transition-all shadow-md flex items-center gap-2"
            >
              <MessageSquare className="w-4 h-4 fill-current" />
              <span>Order on WhatsApp</span>
            </a>
            <button
              onClick={() => onOpenQuoteModal('Turnkey Smart Classroom Package')}
              className="cursor-pointer px-5 py-3 bg-emerald-950/80 hover:bg-emerald-900 text-emerald-200 text-xs font-semibold rounded-xl border border-emerald-800 transition-colors"
            >
              Request Bill of Materials
            </button>
          </div>
        </div>

        <div className="lg:col-span-5">
          <div className="rounded-2xl overflow-hidden border border-emerald-800/80 bg-slate-900 shadow-2xl">
            <img
              src="/images/client-uploads/upload_5.jpg"
              alt="Complete Smart Classroom Integration by Kohinoor AV in Pakistan"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>

      {/* Real Classroom & Auditorium Deployments Gallery */}
      <div className="space-y-6">
        <div>
          <div className="text-xs font-bold text-emerald-700 uppercase tracking-wider">
            Verified University Installations
          </div>
          <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 mt-1">
            Real Smart Classrooms Powered by Kohinoor AV
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs hover:border-emerald-300 transition-all">
            <div className="h-52 overflow-hidden bg-slate-950">
              <img
                src="/images/client-uploads/upload_3.jpg"
                alt="Digital Podium with Interactive Touch Display in University Hall"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-4 space-y-1">
              <h3 className="text-xs font-bold text-slate-900">Tiered Lecture Amphitheater</h3>
              <p className="text-[11px] text-slate-600">Digital rostrum with dual monitors, gooseneck microphone, and high-lumen laser projector projection.</p>
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs hover:border-emerald-300 transition-all">
            <div className="h-52 overflow-hidden bg-slate-950">
              <img
                src="/images/client-uploads/upload_4.jpg"
                alt="Smart Rostrum and Faculty Lectern Deployment"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-4 space-y-1">
              <h3 className="text-xs font-bold text-slate-900">Modern Smart Classroom</h3>
              <p className="text-[11px] text-slate-600">Heavy-duty steel lectern integrated with central PC, acoustic amplification, and HDMI switcher.</p>
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs hover:border-emerald-300 transition-all">
            <div className="h-52 overflow-hidden bg-slate-950">
              <img
                src="/images/client-uploads/upload_5.jpg"
                alt="Auditorium Main Stage Setup with Beterva Digital Podium"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-4 space-y-1">
              <h3 className="text-xs font-bold text-slate-900">Executive Auditorium Stage</h3>
              <p className="text-[11px] text-slate-600">Beterva digital rostrum with high-lumen motorized drop screen and dual PTZ robotic tracking cameras.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Associated Products */}
      <div className="space-y-6">
        <div className="max-w-2xl">
          <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
            Smart Classroom &amp; Auditorium Hardware
          </h2>
          <p className="text-xs text-slate-500 mt-1">
            Turnkey bundles, stage confidence prompters, and portable classroom sound systems.
          </p>
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {smartProducts.map((prod) => (
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
