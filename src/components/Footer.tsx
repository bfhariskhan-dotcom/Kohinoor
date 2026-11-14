import React from 'react';
import { PageId } from '../types';
import { BUSINESS_INFO, CATEGORIES } from '../data/products';
import { Logo } from './Logo';
import { MapPin, Phone, Mail, Clock, ExternalLink, ShieldCheck, Truck, Headphones } from 'lucide-react';

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
    <footer className="bg-slate-50 text-slate-600 pt-14 pb-10 border-t border-slate-200">
      {/* Compact Trust Ribbon */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 pb-10 border-b border-slate-200/80 grid grid-cols-1 md:grid-cols-3 gap-5">
        <div className="flex items-start gap-3.5 p-4 bg-white rounded-2xl border border-slate-200/80">
          <div className="p-2.5 bg-emerald-50 text-emerald-700 rounded-xl shrink-0">
            <Truck className="w-5 h-5" />
          </div>
          <div>
            <h4 className="text-xs sm:text-sm font-bold text-slate-900">Nationwide Supply</h4>
            <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">
              Insured delivery across Islamabad, Lahore, Karachi, Peshawar &amp; Multan.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-3.5 p-4 bg-white rounded-2xl border border-slate-200/80">
          <div className="p-2.5 bg-emerald-50 text-emerald-700 rounded-xl shrink-0">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <div>
            <h4 className="text-xs sm:text-sm font-bold text-slate-900">100% Genuine Hardware</h4>
            <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">
              Official warranty on digital rostrums, 4K LEDs, conference audio &amp; PTZ cameras.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-3.5 p-4 bg-white rounded-2xl border border-slate-200/80">
          <div className="p-2.5 bg-emerald-50 text-emerald-700 rounded-xl shrink-0">
            <Headphones className="w-5 h-5" />
          </div>
          <div>
            <h4 className="text-xs sm:text-sm font-bold text-slate-900">On-Site Setup &amp; Training</h4>
            <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">
              Mounting, audio tuning, cabling, and faculty training by our Islamabad team.
            </p>
          </div>
        </div>
      </div>

      {/* Main Footer Columns */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 sm:gap-10">
        {/* Column 1: Enlarged Logo & Compact Action */}
        <div className="lg:col-span-4 space-y-4">
          <Logo variant="dark" size="lg" />
          <p className="text-xs text-slate-600 leading-relaxed pr-2">
            Trusted AV solutions provider in Pakistan for smart classrooms, digital podiums, 4K interactive displays, projectors, and conference systems.
          </p>
          <div className="pt-1">
            <button
              onClick={onOpenQuoteModal}
              className="cursor-pointer px-4 py-2 text-xs font-bold text-white bg-emerald-700 hover:bg-emerald-800 rounded-lg transition-colors shadow-xs"
            >
              Get Quote
            </button>
          </div>
        </div>

        {/* Column 2: Categories */}
        <div className="lg:col-span-3 space-y-3">
          <h4 className="text-xs font-extrabold text-slate-900 uppercase tracking-wider">
            Products
          </h4>
          <ul className="space-y-2 text-xs text-slate-600 font-medium">
            {CATEGORIES.map((cat) => (
              <li key={cat.id}>
                <button
                  onClick={() => handleNav(cat.id as PageId)}
                  className="hover:text-emerald-700 transition-colors cursor-pointer text-left block"
                >
                  {cat.name}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: Navigation */}
        <div className="lg:col-span-2 space-y-3">
          <h4 className="text-xs font-extrabold text-slate-900 uppercase tracking-wider">
            Company
          </h4>
          <ul className="space-y-2 text-xs text-slate-600 font-medium">
            <li>
              <button onClick={() => handleNav('home')} className="hover:text-emerald-700 transition-colors cursor-pointer">
                Home
              </button>
            </li>
            <li>
              <button onClick={() => handleNav('products')} className="hover:text-emerald-700 transition-colors cursor-pointer">
                All Products
              </button>
            </li>
            <li>
              <button onClick={() => handleNav('gallery')} className="hover:text-emerald-700 font-semibold text-emerald-800 transition-colors cursor-pointer">
                Gallery
              </button>
            </li>
            <li>
              <button onClick={() => handleNav('projects')} className="hover:text-emerald-700 transition-colors cursor-pointer">
                Projects
              </button>
            </li>
            <li>
              <button onClick={() => handleNav('about')} className="hover:text-emerald-700 transition-colors cursor-pointer">
                About Us
              </button>
            </li>
            <li>
              <button onClick={() => handleNav('contact')} className="hover:text-emerald-700 transition-colors cursor-pointer">
                Contact
              </button>
            </li>
          </ul>
        </div>

        {/* Column 4: Islamabad Office */}
        <div className="lg:col-span-3 space-y-3">
          <h4 className="text-xs font-extrabold text-slate-900 uppercase tracking-wider">
            Head Office
          </h4>
          <div className="space-y-2.5 text-xs text-slate-600">
            <div className="flex items-start gap-2">
              <MapPin className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
              <span className="leading-relaxed">{BUSINESS_INFO.address}</span>
            </div>

            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-emerald-700 shrink-0" />
              <a href={`tel:${BUSINESS_INFO.phoneClean}`} className="hover:text-emerald-700 font-bold text-slate-900">
                {BUSINESS_INFO.phone}
              </a>
            </div>

            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-emerald-700 shrink-0" />
              <a href={`mailto:${BUSINESS_INFO.email}`} className="hover:text-emerald-700 font-medium">
                {BUSINESS_INFO.email}
              </a>
            </div>

            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-emerald-700 shrink-0" />
              <span>{BUSINESS_INFO.workingHours}</span>
            </div>

            <div className="pt-1">
              <a
                href={BUSINESS_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs text-emerald-700 hover:text-emerald-800 font-bold"
              >
                <span>Google Maps</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Legal Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
        <p>&copy; {new Date().getFullYear()} Kohinoor Audio Visual. All rights reserved.</p>
        <div className="flex items-center gap-3 text-[11px]">
          <span>Islamabad, Pakistan</span>
          <span>&middot;</span>
          <span>kohinoorav.com</span>
        </div>
      </div>
    </footer>
  );
};
