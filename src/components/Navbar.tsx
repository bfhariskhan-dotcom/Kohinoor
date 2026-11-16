import React, { useState } from 'react';
import { PageId } from '../types';
import { CATEGORIES, BUSINESS_INFO } from '../data/products';
import { Logo } from './Logo';
import { Phone, MessageSquare, Menu, X, ChevronDown, ChevronRight, Images } from 'lucide-react';

interface NavbarProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
  onOpenQuoteModal: (productName?: string) => void;
}

const PRODUCT_PAGE_IDS: PageId[] = [
  'products',
  'interactive-led-displays',
  'multimedia-projectors',
  'projection-screens',
  'projector-mounting-kits',
  'digital-podiums',
  'audio-equipment',
  'conference-systems',
  'teleprompters',
  'ptz-robotic-cameras',
  'smart-classroom-solutions'
];

export const Navbar: React.FC<NavbarProps> = ({
  currentPage,
  onNavigate,
  onOpenQuoteModal
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const [productsDropdownOpen, setProductsDropdownOpen] = useState(false);

  const handleNavClick = (page: PageId) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    setMobileProductsOpen(false);
    setProductsDropdownOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const marqueeText = [
    'Kohinoor Audio Visual · Established 1978',
    'United Plaza, 2nd Floor, Blue Area, Islamabad',
    'Interactive LED Displays (55"–110") & Projectors',
    'Black & Table-Style Digital Podiums',
    'BETERVA BE-2300 Conference Systems & King Teleprompters',
    'Nationwide AV Supply, Installation & After-Sales Service'
  ];

  return (
    <header className="sticky top-0 z-40 bg-white/98 backdrop-blur-md border-b border-slate-200/90 shadow-xs">
      {/* 1. TOP BAR: Green Background + Pure White Text */}
      <div className="bg-emerald-700 text-white text-[11px] py-1.5 border-b border-emerald-800 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between gap-4">
          <div className="flex-1 overflow-hidden relative">
            <div className="animate-marquee-smooth flex items-center gap-6 whitespace-nowrap text-[11px] text-white font-medium">
              {marqueeText.concat(marqueeText).map((item, idx) => (
                <div key={idx} className="flex items-center gap-3 inline-flex text-white">
                  <span className="text-white">{item}</span>
                  <span className="text-white font-bold" aria-hidden="true">◆</span>
                </div>
              ))}
            </div>
          </div>

          <div className="hidden sm:flex shrink-0 items-center gap-4 text-[11px] font-semibold pl-3 border-l border-white/25 text-white">
            <a
              href={`tel:${BUSINESS_INFO.phoneClean}`}
              className="text-white hover:opacity-85 transition-opacity flex items-center gap-1.5 whitespace-nowrap"
            >
              <Phone className="w-3 h-3 text-white" />
              <span className="text-white">{BUSINESS_INFO.phone}</span>
            </a>
            <a
              href={BUSINESS_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:opacity-85 flex items-center gap-1 transition-opacity whitespace-nowrap"
            >
              <MessageSquare className="w-3 h-3 text-white" />
              <span className="text-white">WhatsApp</span>
            </a>
          </div>
        </div>
      </div>

      {/* 2. MAIN NAVIGATION BAR: Clean Logo & Links, Zero CTA Buttons */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 h-20 flex items-center justify-between gap-4 sm:gap-8">
        <button
          onClick={() => handleNavClick('home')}
          className="text-left cursor-pointer focus:outline-none shrink-0"
          aria-label="Kohinoor Audio Visual Home"
        >
          <Logo size="md" />
        </button>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-slate-700">
          <button
            onClick={() => handleNavClick('home')}
            className={`cursor-pointer transition-colors py-2 whitespace-nowrap shrink-0 hover:text-emerald-700 ${
              currentPage === 'home' ? 'text-emerald-700 font-bold border-b-2 border-emerald-600' : 'text-slate-700'
            }`}
          >
            Home
          </button>

          {/* Products Dropdown (Exact 8 Categories in Order) */}
          <div
            className="relative"
            onMouseEnter={() => setProductsDropdownOpen(true)}
            onMouseLeave={() => setProductsDropdownOpen(false)}
          >
            <button
              onClick={() => handleNavClick('products')}
              className={`cursor-pointer flex items-center gap-1 py-2 whitespace-nowrap shrink-0 transition-colors hover:text-emerald-700 ${
                PRODUCT_PAGE_IDS.includes(currentPage)
                  ? 'text-emerald-700 font-bold'
                  : 'text-slate-700'
              }`}
            >
              <span>Products</span>
              <ChevronDown className="w-4 h-4 text-slate-400" />
            </button>

            {productsDropdownOpen && (
              <div className="absolute top-full -left-4 w-72 bg-white rounded-2xl shadow-2xl border border-emerald-100 py-2.5 px-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                <button
                  onClick={() => handleNavClick('products')}
                  className="w-full text-left px-3 py-2 text-xs font-bold text-emerald-700 uppercase tracking-wider hover:bg-emerald-50 rounded-xl transition-colors cursor-pointer"
                >
                  All Equipment Catalog &rarr;
                </button>
                <div className="h-px bg-slate-100 my-1" />
                {CATEGORIES.map((cat, idx) => (
                  <button
                    key={cat.id}
                    onClick={() => handleNavClick(cat.id as PageId)}
                    className={`w-full text-left px-3 py-2 text-xs font-semibold rounded-xl transition-colors cursor-pointer ${
                      currentPage === cat.id
                        ? 'bg-emerald-50 text-emerald-800 font-bold'
                        : 'text-slate-700 hover:text-emerald-700 hover:bg-emerald-50/80'
                    }`}
                  >
                    {idx + 1}. {cat.name}
                  </button>
                ))}
              </div>
            )}
          </div>

          <button
            onClick={() => handleNavClick('gallery')}
            className={`cursor-pointer transition-colors py-2 whitespace-nowrap shrink-0 hover:text-emerald-700 flex items-center gap-1.5 ${
              currentPage === 'gallery' ? 'text-emerald-700 font-bold border-b-2 border-emerald-600' : 'text-slate-700'
            }`}
          >
            <Images className="w-4 h-4 text-emerald-600" />
            <span>Gallery</span>
          </button>

          <button
            onClick={() => handleNavClick('smart-classroom-solutions')}
            className={`cursor-pointer transition-colors py-2 whitespace-nowrap shrink-0 hover:text-emerald-700 ${
              currentPage === 'smart-classroom-solutions' ? 'text-emerald-700 font-bold border-b-2 border-emerald-600' : 'text-slate-700'
            }`}
          >
            Smart Classrooms
          </button>

          <button
            onClick={() => handleNavClick('projects')}
            className={`cursor-pointer transition-colors py-2 whitespace-nowrap shrink-0 hover:text-emerald-700 ${
              currentPage === 'projects' ? 'text-emerald-700 font-bold border-b-2 border-emerald-600' : 'text-slate-700'
            }`}
          >
            Projects
          </button>

          <button
            onClick={() => handleNavClick('about')}
            className={`cursor-pointer transition-colors py-2 whitespace-nowrap shrink-0 hover:text-emerald-700 ${
              currentPage === 'about' ? 'text-emerald-700 font-bold border-b-2 border-emerald-600' : 'text-slate-700'
            }`}
          >
            About
          </button>

          <button
            onClick={() => handleNavClick('contact')}
            className={`cursor-pointer transition-colors py-2 whitespace-nowrap shrink-0 hover:text-emerald-700 ${
              currentPage === 'contact' ? 'text-emerald-700 font-bold border-b-2 border-emerald-600' : 'text-slate-700'
            }`}
          >
            Contact
          </button>
        </nav>

        {/* Mobile Three-Lines Hamburger Menu Icon ONLY */}
        <div className="flex items-center lg:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2.5 rounded-xl border border-slate-300 bg-slate-50 hover:bg-emerald-50 hover:border-emerald-400 text-slate-800 hover:text-emerald-700 transition-colors cursor-pointer focus:outline-none focus:ring-2 focus:ring-emerald-500"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6 stroke-[2.2]" />
            ) : (
              <Menu className="w-6 h-6 stroke-[2.2]" />
            )}
          </button>
        </div>
      </div>

      {/* 3. MOBILE DRAWER MENU (Dropdown closed by default) */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white px-5 pt-3 pb-6 space-y-2 shadow-2xl animate-in slide-in-from-top-2 duration-200 max-h-[82vh] overflow-y-auto">
          <div className="grid grid-cols-1 gap-1">
            <button
              onClick={() => handleNavClick('home')}
              className={`text-left px-3.5 py-2.5 text-sm font-semibold rounded-xl transition-colors ${
                currentPage === 'home' ? 'bg-emerald-50 text-emerald-800 font-bold' : 'text-slate-800 hover:bg-slate-50'
              }`}
            >
              Home
            </button>

            <div className="border border-slate-200 rounded-xl overflow-hidden bg-slate-50/50">
              <button
                onClick={() => setMobileProductsOpen(!mobileProductsOpen)}
                className="w-full text-left px-3.5 py-2.5 text-sm font-semibold text-slate-800 flex items-center justify-between hover:bg-slate-100 transition-colors cursor-pointer"
              >
                <span>Products Catalog</span>
                <ChevronDown
                  className={`w-4 h-4 text-slate-500 transition-transform duration-200 ${
                    mobileProductsOpen ? 'rotate-180 text-emerald-700' : ''
                  }`}
                />
              </button>

              {mobileProductsOpen && (
                <div className="px-3 pb-3 pt-1 space-y-1 bg-white border-t border-slate-100">
                  <button
                    onClick={() => handleNavClick('products')}
                    className="w-full text-left px-3 py-2 text-xs font-bold text-emerald-700 uppercase tracking-wide hover:bg-emerald-50 rounded-lg transition-colors flex items-center justify-between"
                  >
                    <span>All Equipment Categories</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                  {CATEGORIES.map((cat, idx) => (
                    <button
                      key={cat.id}
                      onClick={() => handleNavClick(cat.id as PageId)}
                      className="w-full text-left px-3 py-1.5 text-xs text-slate-700 hover:text-emerald-700 hover:bg-slate-50 rounded-lg transition-colors"
                    >
                      {idx + 1}. {cat.name}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <button
              onClick={() => handleNavClick('gallery')}
              className={`text-left px-3.5 py-2.5 text-sm font-semibold rounded-xl transition-colors flex items-center gap-2 ${
                currentPage === 'gallery' ? 'bg-emerald-50 text-emerald-800 font-bold' : 'text-slate-800 hover:bg-slate-50'
              }`}
            >
              <Images className="w-4 h-4 text-emerald-700" />
              <span>Gallery</span>
            </button>

            <button
              onClick={() => handleNavClick('smart-classroom-solutions')}
              className={`text-left px-3.5 py-2.5 text-sm font-semibold rounded-xl transition-colors ${
                currentPage === 'smart-classroom-solutions' ? 'bg-emerald-50 text-emerald-800 font-bold' : 'text-slate-800 hover:bg-slate-50'
              }`}
            >
              Smart Classrooms
            </button>

            <button
              onClick={() => handleNavClick('projects')}
              className={`text-left px-3.5 py-2.5 text-sm font-semibold rounded-xl transition-colors ${
                currentPage === 'projects' ? 'bg-emerald-50 text-emerald-800 font-bold' : 'text-slate-800 hover:bg-slate-50'
              }`}
            >
              Projects
            </button>

            <button
              onClick={() => handleNavClick('about')}
              className={`text-left px-3.5 py-2.5 text-sm font-semibold rounded-xl transition-colors ${
                currentPage === 'about' ? 'bg-emerald-50 text-emerald-800 font-bold' : 'text-slate-800 hover:bg-slate-50'
              }`}
            >
              About Us
            </button>

            <button
              onClick={() => handleNavClick('contact')}
              className={`text-left px-3.5 py-2.5 text-sm font-semibold rounded-xl transition-colors ${
                currentPage === 'contact' ? 'bg-emerald-50 text-emerald-800 font-bold' : 'text-slate-800 hover:bg-slate-50'
              }`}
            >
              Contact
            </button>
          </div>

          <div className="pt-3 border-t border-slate-100">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenQuoteModal();
              }}
              className="w-full text-center py-2.5 text-xs font-bold text-white bg-emerald-700 hover:bg-emerald-800 rounded-xl transition-colors cursor-pointer"
            >
              Request Quotation
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
