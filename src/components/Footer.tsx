import React from 'react';
import { PageId } from '../types';
import { BUSINESS_INFO, CATEGORIES } from '../data/products';
import { Logo } from './Logo';
import { MapPin, Phone, Mail, Clock, ExternalLink, ShieldCheck, Truck, Headphones, MessageSquare, Images } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: PageId) => void;
  onOpenQuoteModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenQuoteModal }) => {
  const handleNav = (page: PageId) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-50 text-slate-600 pt-16 pb-12 border-t border-slate-200">
      {/* Trust & Capability Ribbon - Clean Light Theme */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 pb-14 border-b border-slate-200/80 grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
        <div className="flex items-start gap-4 p-5 bg-white rounded-2xl border border-slate-200/90 shadow-xs">
          <div className="p-3 bg-emerald-50 text-emerald-700 rounded-xl border border-emerald-100 shrink-0">
            <Truck className="w-6 h-6" />
          </div>
          <div>
            <h4 className="text-sm font-bold text-slate-900">Nationwide Supply &amp; Logistics</h4>
            <p className="text-xs text-slate-600 mt-1 leading-relaxed">
              Safe, insured, and verified equipment delivery across Islamabad, Rawalpindi, Lahore, Karachi, Peshawar, Multan, and all regions of Pakistan.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-4 p-5 bg-white rounded-2xl border border-slate-200/90 shadow-xs">
          <div className="p-3 bg-emerald-50 text-emerald-700 rounded-xl border border-emerald-100 shrink-0">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <div>
            <h4 className="text-sm font-bold text-slate-900">100% Genuine Hardware</h4>
            <p className="text-xs text-slate-600 mt-1 leading-relaxed">
              Authentic digital rostrums, interactive flat panel LEDs, Beterva &amp; Sennheiser conference systems, and 4K robotic PTZ cameras with official warranty.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-4 p-5 bg-white rounded-2xl border border-slate-200/90 shadow-xs">
          <div className="p-3 bg-emerald-50 text-emerald-700 rounded-xl border border-emerald-100 shrink-0">
            <Headphones className="w-6 h-6" />
          </div>
          <div>
            <h4 className="text-sm font-bold text-slate-900">On-Site Setup &amp; Training</h4>
            <p className="text-xs text-slate-600 mt-1 leading-relaxed">
              Expert Islamabad engineering team provides complete hardware mounting, audio calibration, cabling, and faculty training for educational institutions.
            </p>
          </div>
        </div>
      </div>

      {/* Main Footer Content Columns */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
        {/* Column 1: Clean ENLARGED Logo & Quick Contact (4 cols) */}
        <div className="lg:col-span-4 space-y-5">
          <Logo variant="dark" size="lg" />
          <p className="text-xs text-slate-600 leading-relaxed pr-2">
            Kohinoor Audio Visual Education Business System is Pakistan's premier supplier and systems integrator of modern smart classrooms, interactive flat panels, steel digital rostrums, multimedia projectors, and council-grade conference microphone systems.
          </p>
          <div className="pt-2 flex flex-wrap gap-3">
            <a
              href={BUSINESS_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer px-5 py-2.5 text-xs font-bold text-white bg-emerald-700 hover:bg-emerald-800 rounded-xl transition-all inline-flex items-center gap-2 shadow-sm"
            >
              <MessageSquare className="w-4 h-4 fill-current" />
              <span>Contact on WhatsApp</span>
            </a>
            <button
              onClick={onOpenQuoteModal}
              className="cursor-pointer px-4 py-2.5 text-xs font-bold text-slate-800 bg-white hover:bg-slate-100 border border-slate-200 rounded-xl transition-colors"
            >
              Get Official Quote
            </button>
          </div>
        </div>

        {/* Column 2: Product Categories (3 cols) */}
        <div className="lg:col-span-3 space-y-4">
          <h4 className="text-xs font-extrabold text-slate-900 uppercase tracking-wider">
            Equipment Catalog
          </h4>
          <ul className="space-y-2.5 text-xs text-slate-600 font-medium">
            {CATEGORIES.map((cat) => (
              <li key={cat.id}>
                <button
                  onClick={() => handleNav(cat.id as PageId)}
                  className="hover:text-emerald-700 hover:translate-x-0.5 transition-all cursor-pointer text-left block"
                >
                  {cat.name}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: Quick Navigation & Gallery (2 cols) */}
        <div className="lg:col-span-2 space-y-4">
          <h4 className="text-xs font-extrabold text-slate-900 uppercase tracking-wider">
            Company &amp; Work
          </h4>
          <ul className="space-y-2.5 text-xs text-slate-600 font-medium">
            <li>
              <button onClick={() => handleNav('home')} className="hover:text-emerald-700 transition-colors cursor-pointer">
                Home Overview
              </button>
            </li>
            <li>
              <button onClick={() => handleNav('products')} className="hover:text-emerald-700 transition-colors cursor-pointer">
                Products &amp; Pricing
              </button>
            </li>
            <li>
              <button onClick={() => handleNav('gallery')} className="hover:text-emerald-700 font-bold text-emerald-800 transition-colors cursor-pointer flex items-center gap-1.5">
                <Images className="w-3.5 h-3.5" />
                <span>Project Gallery</span>
              </button>
            </li>
            <li>
              <button onClick={() => handleNav('projects')} className="hover:text-emerald-700 transition-colors cursor-pointer">
                Client Deployments
              </button>
            </li>
            <li>
              <button onClick={() => handleNav('about')} className="hover:text-emerald-700 transition-colors cursor-pointer">
                About Company
              </button>
            </li>
            <li>
              <button onClick={() => handleNav('contact')} className="hover:text-emerald-700 transition-colors cursor-pointer">
                Contact &amp; Map
              </button>
            </li>
          </ul>
        </div>

        {/* Column 4: Official Contact & Address (3 cols) */}
        <div className="lg:col-span-3 space-y-4">
          <h4 className="text-xs font-extrabold text-slate-900 uppercase tracking-wider">
            Head Office Islamabad
          </h4>
          <div className="space-y-3 text-xs text-slate-600">
            <div className="flex items-start gap-2.5">
              <MapPin className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
              <span className="leading-relaxed">{BUSINESS_INFO.address}</span>
            </div>

            <div className="flex items-center gap-2.5">
              <Phone className="w-4 h-4 text-emerald-700 shrink-0" />
              <div>
                <a href={`tel:${BUSINESS_INFO.phoneClean}`} className="hover:text-emerald-700 transition-colors block font-bold text-slate-900">
                  {BUSINESS_INFO.phone} (WhatsApp)
                </a>
                <span className="text-[11px] text-slate-500">Tel: {BUSINESS_INFO.landline}</span>
              </div>
            </div>

            <div className="flex items-center gap-2.5">
              <Mail className="w-4 h-4 text-emerald-700 shrink-0" />
              <div>
                <a href={`mailto:${BUSINESS_INFO.email}`} className="hover:text-emerald-700 transition-colors block font-medium">
                  {BUSINESS_INFO.email}
                </a>
                <a href={`mailto:${BUSINESS_INFO.emailAlt}`} className="text-[11px] text-slate-500 hover:text-emerald-700 transition-colors block">
                  {BUSINESS_INFO.emailAlt}
                </a>
              </div>
            </div>

            <div className="flex items-center gap-2.5">
              <Clock className="w-4 h-4 text-emerald-700 shrink-0" />
              <span>{BUSINESS_INFO.workingHours}</span>
            </div>

            <div className="pt-2">
              <a
                href={BUSINESS_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-emerald-700 hover:text-emerald-800 font-bold transition-colors"
              >
                <span>View Office on Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Legal & Copyright Bar - Clean Light */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 pt-8 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
        <p>
          &copy; {new Date().getFullYear()} Kohinoor Audio Visual Education Business System. All rights reserved.
        </p>
        <div className="flex items-center gap-4 text-[11px] flex-wrap justify-center">
          <span>Islamabad, Pakistan</span>
          <span>&middot;</span>
          <span>Commercial Audio-Visual Systems</span>
          <span>&middot;</span>
          <span>Website: kohinoorav.com</span>
        </div>
      </div>
    </footer>
  );
};
