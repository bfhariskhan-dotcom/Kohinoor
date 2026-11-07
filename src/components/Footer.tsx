import React from 'react';
import { PageId } from '../types';
import { BUSINESS_INFO, CATEGORIES } from '../data/products';
import { Logo } from './Logo';
import { MapPin, Phone, Mail, Clock, ExternalLink, ShieldCheck, Truck, Headphones, MessageSquare } from 'lucide-react';

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
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-12 border-t border-slate-900">
      {/* Trust & Capability Ribbon */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 pb-14 border-b border-slate-900 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="flex items-start gap-4">
          <div className="p-3 bg-blue-950 text-blue-400 rounded-2xl border border-blue-900 shrink-0">
            <Truck className="w-6 h-6" />
          </div>
          <div>
            <h4 className="text-sm font-bold text-white">Nationwide Supply &amp; Logistics</h4>
            <p className="text-xs text-slate-400 mt-1 leading-relaxed">
              Safe, insured, and verified equipment delivery across Islamabad, Rawalpindi, Lahore, Karachi, Peshawar, Multan, and all regions of Pakistan.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <div className="p-3 bg-blue-950 text-blue-400 rounded-2xl border border-blue-900 shrink-0">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <div>
            <h4 className="text-sm font-bold text-white">100% Genuine Hardware</h4>
            <p className="text-xs text-slate-400 mt-1 leading-relaxed">
              Authentic digital rostrums, interactive flat panel LEDs, Beterva &amp; Sennheiser conference systems, and 4K robotic PTZ cameras with official warranty.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <div className="p-3 bg-blue-950 text-blue-400 rounded-2xl border border-blue-900 shrink-0">
            <Headphones className="w-6 h-6" />
          </div>
          <div>
            <h4 className="text-sm font-bold text-white">On-Site Setup &amp; Training</h4>
            <p className="text-xs text-slate-400 mt-1 leading-relaxed">
              Expert Islamabad engineering team provides complete hardware mounting, audio calibration, cabling, and faculty training for educational institutions.
            </p>
          </div>
        </div>
      </div>

      {/* Main Footer Content Columns */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Column 1: Clean Logo & Quick Contact */}
        <div className="space-y-4">
          <Logo variant="light" />
          <p className="text-xs text-slate-400 leading-relaxed pt-1">
            Your trusted engineering partner for modern smart classrooms, interactive flat panels, digital rostrums, multimedia projectors, and board-level conference microphone networks in Pakistan.
          </p>
          <div className="pt-2">
            <a
              href={BUSINESS_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer px-4 py-2.5 text-xs font-bold text-white bg-blue-600 hover:bg-blue-500 rounded-xl transition-colors inline-flex items-center gap-2 shadow-sm"
            >
              <MessageSquare className="w-4 h-4 fill-current" />
              <span>WhatsApp: +92 333 5163220</span>
            </a>
          </div>
        </div>

        {/* Column 2: Product Categories */}
        <div>
          <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">
            Product Categories
          </h4>
          <ul className="space-y-2.5 text-xs text-slate-400">
            {CATEGORIES.map((cat) => (
              <li key={cat.id}>
                <button
                  onClick={() => handleNav(cat.id as PageId)}
                  className="hover:text-blue-400 transition-colors cursor-pointer text-left"
                >
                  {cat.name}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: Quick Navigation & Services */}
        <div>
          <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">
            Navigation &amp; Sectors
          </h4>
          <ul className="space-y-2.5 text-xs text-slate-400">
            <li>
              <button onClick={() => handleNav('home')} className="hover:text-blue-400 transition-colors cursor-pointer">
                Home Overview
              </button>
            </li>
            <li>
              <button onClick={() => handleNav('about')} className="hover:text-blue-400 transition-colors cursor-pointer">
                About Our Company
              </button>
            </li>
            <li>
              <button onClick={() => handleNav('projects')} className="hover:text-blue-400 transition-colors cursor-pointer">
                Projects &amp; Proven Work
              </button>
            </li>
            <li>
              <button onClick={() => handleNav('smart-classroom-solutions')} className="hover:text-blue-400 transition-colors cursor-pointer">
                Smart Classroom Solutions
              </button>
            </li>
            <li>
              <button onClick={() => handleNav('contact')} className="hover:text-blue-400 transition-colors cursor-pointer">
                Contact &amp; Islamabad Office
              </button>
            </li>
          </ul>

          <div className="mt-6 pt-4 border-t border-slate-900">
            <h5 className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2">
              Major Cities Served
            </h5>
            <p className="text-[11px] text-slate-500 leading-relaxed">
              Islamabad · Rawalpindi · Lahore · Karachi · Peshawar · Multan · Faisalabad · Nationwide
            </p>
          </div>
        </div>

        {/* Column 4: Official Contact & Address */}
        <div>
          <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">
            Office &amp; Inquiries
          </h4>
          <div className="space-y-3 text-xs text-slate-400">
            <div className="flex items-start gap-2.5">
              <MapPin className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
              <span>{BUSINESS_INFO.address}</span>
            </div>

            <div className="flex items-center gap-2.5">
              <Phone className="w-4 h-4 text-blue-400 shrink-0" />
              <div>
                <a href={`tel:${BUSINESS_INFO.phoneClean}`} className="hover:text-white transition-colors block font-bold">
                  {BUSINESS_INFO.phone} (WhatsApp)
                </a>
                <span className="text-[11px] text-slate-500">Tel: {BUSINESS_INFO.landline}</span>
              </div>
            </div>

            <div className="flex items-center gap-2.5">
              <Mail className="w-4 h-4 text-blue-400 shrink-0" />
              <div>
                <a href={`mailto:${BUSINESS_INFO.email}`} className="hover:text-white transition-colors block">
                  {BUSINESS_INFO.email}
                </a>
                <a href={`mailto:${BUSINESS_INFO.emailAlt}`} className="text-[11px] text-slate-500 hover:text-slate-400 transition-colors block">
                  {BUSINESS_INFO.emailAlt}
                </a>
              </div>
            </div>

            <div className="flex items-center gap-2.5">
              <Clock className="w-4 h-4 text-blue-400 shrink-0" />
              <span>{BUSINESS_INFO.workingHours}</span>
            </div>

            <div className="pt-2">
              <a
                href={BUSINESS_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-blue-400 hover:text-blue-300 font-bold transition-colors"
              >
                <span>View Office on Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Legal & Copyright Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
        <p>
          &copy; {new Date().getFullYear()} Kohinoor Audio Visual Education Business System. All rights reserved.
        </p>
        <div className="flex items-center gap-4 text-[11px]">
          <span>Islamabad, Pakistan</span>
          <span>&middot;</span>
          <span>Commercial AV Solutions</span>
          <span>&middot;</span>
          <span>Website: kohinoorav.com</span>
        </div>
      </div>
    </footer>
  );
};
