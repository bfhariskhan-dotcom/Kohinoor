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
  Sparkles
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
        <div className="text-xs font-bold text-blue-600 uppercase tracking-wider">
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
          <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
            <GraduationCap className="w-5 h-5" />
          </div>
          <h3 className="text-xs font-bold text-slate-900">Digital Teaching Podiums</h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            Centralized instructor station with touch display, internal computer, gooseneck mic, and AV master switcher.
          </p>
        </div>

        <div className="p-5 bg-white rounded-3xl border border-slate-200 space-y-2.5 shadow-xs">
          <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
            <BookOpen className="w-5 h-5" />
          </div>
          <h3 className="text-xs font-bold text-slate-900">Interactive 4K LED Displays</h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            75" and 86" anti-glare touch panels replacing dusty chalkboards with dynamic digital whiteboard software.
          </p>
        </div>

        <div className="p-5 bg-white rounded-3xl border border-slate-200 space-y-2.5 shadow-xs">
          <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
            <Volume2 className="w-5 h-5" />
          </div>
          <h3 className="text-xs font-bold text-slate-900">Acoustic Audio Systems</h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            Balanced 60W wall speakers and wireless vocal microphones delivering effortless vocal clarity to every student.
          </p>
        </div>

        <div className="p-5 bg-white rounded-3xl border border-slate-200 space-y-2.5 shadow-xs">
          <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
            <Wrench className="w-5 h-5" />
          </div>
          <h3 className="text-xs font-bold text-slate-900">Installation &amp; Faculty Training</h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            Complete turnkey cabling, bracket fixing, software configuration, and hands-on faculty workshops.
          </p>
        </div>
      </div>

      {/* Turnkey Solution Banner */}
      <div className="bg-slate-950 text-white rounded-3xl p-8 sm:p-12 border border-slate-800 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center shadow-2xl">
        <div className="lg:col-span-7 space-y-5">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-blue-900/60 text-blue-300 text-xs font-bold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Turnkey Institutional Package</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white leading-snug">
            All-In-One Modern Classroom Deployment
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            Eliminate vendor fragmentation. Kohinoor Audio Visual designs, delivers, cables, and commissions the entire classroom technology suite. When our engineers hand over the keys, teachers can step up to the podium and start teaching immediately.
          </p>

          <div className="space-y-2 pt-1 text-xs text-slate-300">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
              <span>Includes 75" or 86" 4K Interactive Flat Panel with Android + Windows</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
              <span>Includes Kohinoor Cold-Rolled Steel Digital Rostrum with built-in sound</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
              <span>Includes 4K PTZ auto-tracking camera for hybrid lectures &amp; Zoom</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
              <span>Comprehensive on-site commissioning &amp; official manufacturer warranty</span>
            </div>
          </div>

          <div className="pt-2 flex flex-wrap gap-3">
            <a
              href={`${BUSINESS_INFO.whatsappUrl}?text=${encodeURIComponent('Hello Kohinoor AV, I would like to order / discuss the Turnkey Smart Classroom Package for our institution.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold rounded-xl transition-all shadow-md flex items-center gap-2"
            >
              <MessageSquare className="w-4 h-4 fill-current" />
              <span>Order Turnkey Package on WhatsApp</span>
            </a>
            <button
              onClick={() => onOpenQuoteModal('Turnkey Smart Classroom Package')}
              className="cursor-pointer px-5 py-3 bg-slate-900 hover:bg-slate-800 text-slate-200 text-xs font-semibold rounded-xl border border-slate-700 transition-colors"
            >
              Request Bill of Materials
            </button>
          </div>
        </div>

        <div className="lg:col-span-5">
          <div className="rounded-2xl overflow-hidden border border-slate-700 bg-slate-900 shadow-2xl">
            <img
              src="/images/hero_av_solutions_1793992811053.jpg"
              alt="Complete Smart Classroom Integration in Pakistan"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>

      {/* Associated Products: Clean 2-Column or 3-Column Grid */}
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
