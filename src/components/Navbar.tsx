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

export const Navbar: React.FC<NavbarProps> = ({
  currentPage,
  onNavigate,
  onOpenQuoteModal
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false); // Closed by default
  const [productsDropdownOpen, setProductsDropdownOpen] = useState(false);

  const handleNavClick = (page: PageId) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    setMobileProductsOpen(false);
    setProductsDropdownOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const marqueeText = [
    'Kohinoor Audio Visual Education Business System',
    'United Plaza, 2nd Floor, Fazlehaq Road, Blue Area, Islamabad',
    'Nationwide Supply & Installation across Pakistan',
    'Smart Digital Podiums (21.5", 32", 43")',
    '4K Interactive Flat Panels (55" to 110")',
    'Conference Microphone Systems with Chairman Priority (MA4617)',
    '4K AI Auto-Tracking PTZ Robotic Cameras',
    'Official Warranty & Nationwide Logistics'
  ];

  return (
    <header className="sticky top-0 z-40 bg-white/98 backdrop-blur-md border-b border-slate-200/90 shadow-xs transition-colors">
      {/* 1. TOP ANNOUNCEMENT BAR: Visible on Both Mobile & Desktop in Deep Forest Green */}
      <div className="bg-[#0b2416] text-emerald-100/90 text-[11px] py-1.5 border-b border-emerald-950 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between gap-4">
          {/* Continuous Auto-Scrolling Marquee Track */}
          <div className="flex-1 overflow-hidden relative">
            <div className="animate-marquee-smooth flex items-center gap-6 whitespace-nowrap text-[11px] text-emerald-200/90 font-medium">
              {marqueeText.concat(marqueeText).map((item, idx) => (
                <div key={idx} className="flex items-center gap-3 inline-flex">
                  <span>{item}</span>
                  <span className="text-emerald-400 font-bold" aria-hidden="true">◆</span>
                </div>
              ))}
            </div>
          </div>

          {/* Direct Quick Contact on Desktop */}
          <div className="hidden sm:flex shrink-0 items-center gap-4 text-[11px] font-semibold pl-3 border-l border-emerald-800/50">
            <a
              href={`tel:${BUSINESS_INFO.phoneClean}`}
              className="text-emerald-200 hover:text-white transition-colors flex items-center gap-1.5"
            >
              <Phone className="w-3 h-3 text-emerald-400" />
              <span>{BUSINESS_INFO.phone}</span>
            </a>
            <a
              href={BUSINESS_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-300 hover:text-white flex items-center gap-1 transition-colors"
            >
              <MessageSquare className="w-3 h-3 text-emerald-400" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </div>

      {/* 2. MAIN NAVIGATION BAR */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 h-20 sm:h-22 flex items-center justify-between gap-3 sm:gap-8">
        {/* Zone 1: Official Enlarged Logo */}
        <button
          onClick={() => handleNavClick('home')}
          className="text-left cursor-pointer focus:outline-none shrink-0"
          aria-label="Kohinoor Audio Visual Home"
        >
          <Logo size="md" />
        </button>

        {/* Zone 2: Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-slate-700">
          <button
            onClick={() => handleNavClick('home')}
            className={`cursor-pointer transition-colors py-2 whitespace-nowrap hover:text-emerald-700 ${
              currentPage === 'home' ? 'text-emerald-700 font-bold border-b-2 border-emerald-600' : 'text-slate-700'
            }`}
          >
            Home
          </button>

          {/* Products Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setProductsDropdownOpen(true)}
            onMouseLeave={() => setProductsDropdownOpen(false)}
          >
            <button
              onClick={() => handleNavClick('products')}
              className={`cursor-pointer flex items-center gap-1 py-2 whitespace-nowrap transition-colors hover:text-emerald-700 ${
                ['products', 'digital-podiums', 'multimedia-projectors', 'interactive-led-displays', 'conference-systems', 'ptz-robotic-cameras', 'smart-classroom-solutions'].includes(currentPage)
                  ? 'text-emerald-700 font-bold'
                  : 'text-slate-700'
              }`}
            >
              <span>Products &amp; Pricing</span>
              <ChevronDown className="w-4 h-4 text-slate-400" />
            </button>

            {productsDropdownOpen && (
              <div className="absolute top-full -left-4 w-72 bg-white rounded-2xl shadow-2xl border border-emerald-100 py-3 px-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                <button
                  onClick={() => handleNavClick('products')}
                  className="w-full text-left px-3 py-2 text-xs font-bold text-emerald-700 uppercase tracking-wider hover:bg-emerald-50 rounded-xl transition-colors"
                >
                  View All Products Catalog &rarr;
                </button>
                <div className="h-px bg-slate-100 my-1" />
                {CATEGORIES.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => handleNavClick(cat.id as PageId)}
                    className="w-full text-left px-3 py-2.5 text-xs font-semibold text-slate-700 hover:text-emerald-700 hover:bg-emerald-50/80 rounded-xl transition-colors flex items-center justify-between"
                  >
                    <span>{cat.name}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          <button
            onClick={() => handleNavClick('gallery')}
            className={`cursor-pointer transition-colors py-2 whitespace-nowrap hover:text-emerald-700 flex items-center gap-1.5 ${
              currentPage === 'gallery' ? 'text-emerald-700 font-bold border-b-2 border-emerald-600' : 'text-slate-700'
            }`}
          >
            <Images className="w-4 h-4 text-emerald-600" />
            <span>Gallery</span>
          </button>

          <button
            onClick={() => handleNavClick('smart-classroom-solutions')}
            className={`cursor-pointer transition-colors py-2 whitespace-nowrap hover:text-emerald-700 ${
              currentPage === 'smart-classroom-solutions' ? 'text-emerald-700 font-bold border-b-2 border-emerald-600' : 'text-slate-700'
            }`}
          >
            Smart Classrooms
          </button>

          <button
            onClick={() => handleNavClick('projects')}
            className={`cursor-pointer transition-colors py-2 whitespace-nowrap hover:text-emerald-700 ${
              currentPage === 'projects' ? 'text-emerald-700 font-bold border-b-2 border-emerald-600' : 'text-slate-700'
            }`}
          >
            Projects
          </button>

          <button
            onClick={() => handleNavClick('about')}
            className={`cursor-pointer transition-colors py-2 whitespace-nowrap hover:text-emerald-700 ${
              currentPage === 'about' ? 'text-emerald-700 font-bold border-b-2 border-emerald-600' : 'text-slate-700'
            }`}
          >
            About Us
          </button>

          <button
            onClick={() => handleNavClick('contact')}
            className={`cursor-pointer transition-colors py-2 whitespace-nowrap hover:text-emerald-700 ${
              currentPage === 'contact' ? 'text-emerald-700 font-bold border-b-2 border-emerald-600' : 'text-slate-700'
            }`}
          >
            Contact
          </button>
        </nav>

        {/* Zone 3: Desktop Primary Action (No Phone Number in Label!) */}
        <div className="hidden lg:flex items-center gap-3 shrink-0">
          <a
            href={BUSINESS_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer px-5 py-2.5 text-xs font-bold text-white bg-emerald-700 hover:bg-emerald-800 active:scale-95 rounded-xl shadow-md hover:shadow-emerald-700/20 transition-all flex items-center gap-2 whitespace-nowrap shrink-0"
          >
            <MessageSquare className="w-4 h-4 fill-current" />
            <span>Order on WhatsApp</span>
          </a>
        </div>

        {/* Mobile Action & Three-Lines Hamburger Menu Button */}
        <div className="flex items-center gap-2 lg:hidden">
          {/* Quick Mobile WhatsApp Button (No Number in Label) */}
          <a
            href={BUSINESS_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-2 text-xs font-bold text-white bg-emerald-700 hover:bg-emerald-800 rounded-xl transition-colors flex items-center gap-1.5 shadow-sm"
          >
            <MessageSquare className="w-3.5 h-3.5 fill-current" />
            <span>WhatsApp</span>
          </a>

          {/* Prominent Three-Lines Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2.5 rounded-xl border border-slate-300 bg-slate-100 hover:bg-emerald-50 hover:border-emerald-400 text-slate-800 hover:text-emerald-700 transition-colors cursor-pointer focus:outline-none focus:ring-2 focus:ring-emerald-500"
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

      {/* 3. MOBILE DRAWER MENU: Dropdown closed by default, clicks open it! */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white px-5 pt-3 pb-8 space-y-2 shadow-2xl animate-in slide-in-from-top-2 duration-200 max-h-[85vh] overflow-y-auto">
          <div className="grid grid-cols-1 gap-1">
            <button
              onClick={() => handleNavClick('home')}
              className={`text-left px-3.5 py-2.5 text-sm font-semibold rounded-xl transition-colors ${
                currentPage === 'home' ? 'bg-emerald-50 text-emerald-800 font-bold' : 'text-slate-800 hover:bg-slate-50'
              }`}
            >
              Home
            </button>

            {/* Accordion Item: Products (CLOSED BY DEFAULT, user clicks to open) */}
            <div className="border border-slate-200 rounded-xl overflow-hidden bg-slate-50/50">
              <button
                onClick={() => setMobileProductsOpen(!mobileProductsOpen)}
                className="w-full text-left px-3.5 py-2.5 text-sm font-semibold text-slate-800 flex items-center justify-between hover:bg-slate-100 transition-colors cursor-pointer"
              >
                <div className="flex items-center gap-2">
                  <span>Products &amp; Pricing</span>
                  <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-emerald-100 text-emerald-800">Catalog</span>
                </div>
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
                    <span>View All Products &amp; Prices</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                  <button
                    onClick={() => handleNavClick('digital-podiums')}
                    className="w-full text-left px-3 py-1.5 text-xs text-slate-700 hover:text-emerald-700 hover:bg-slate-50 rounded-lg transition-colors"
                  >
                    • Digital Podiums (21.5", 32", 43")
                  </button>
                  <button
                    onClick={() => handleNavClick('interactive-led-displays')}
                    className="w-full text-left px-3 py-1.5 text-xs text-slate-700 hover:text-emerald-700 hover:bg-slate-50 rounded-lg transition-colors"
                  >
                    • Interactive Flat Panels (55"–110")
                  </button>
                  <button
                    onClick={() => handleNavClick('multimedia-projectors')}
                    className="w-full text-left px-3 py-1.5 text-xs text-slate-700 hover:text-emerald-700 hover:bg-slate-50 rounded-lg transition-colors"
                  >
                    • Multimedia Projectors &amp; Screens
                  </button>
                  <button
                    onClick={() => handleNavClick('conference-systems')}
                    className="w-full text-left px-3 py-1.5 text-xs text-slate-700 hover:text-emerald-700 hover:bg-slate-50 rounded-lg transition-colors"
                  >
                    • Conference Microphone Systems
                  </button>
                  <button
                    onClick={() => handleNavClick('ptz-robotic-cameras')}
                    className="w-full text-left px-3 py-1.5 text-xs text-slate-700 hover:text-emerald-700 hover:bg-slate-50 rounded-lg transition-colors"
                  >
                    • 4K PTZ Robotic Cameras
                  </button>
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
              <span>Project &amp; Installation Gallery</span>
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
              Our Projects &amp; Work
            </button>

            <button
              onClick={() => handleNavClick('about')}
              className={`text-left px-3.5 py-2.5 text-sm font-semibold rounded-xl transition-colors ${
                currentPage === 'about' ? 'bg-emerald-50 text-emerald-800 font-bold' : 'text-slate-800 hover:bg-slate-50'
              }`}
            >
              About Kohinoor AV
            </button>

            <button
              onClick={() => handleNavClick('contact')}
              className={`text-left px-3.5 py-2.5 text-sm font-semibold rounded-xl transition-colors ${
                currentPage === 'contact' ? 'bg-emerald-50 text-emerald-800 font-bold' : 'text-slate-800 hover:bg-slate-50'
              }`}
            >
              Contact Us &amp; Map
            </button>
          </div>

          {/* Action Row - Clean (No Phone Number in Labels) */}
          <div className="pt-4 border-t border-slate-100 flex flex-col gap-2">
            <a
              href={BUSINESS_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-center py-3 text-xs font-bold text-white bg-emerald-700 hover:bg-emerald-800 rounded-xl transition-colors flex items-center justify-center gap-2 shadow-md"
            >
              <MessageSquare className="w-4 h-4 fill-current" />
              <span>Contact on WhatsApp</span>
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenQuoteModal();
              }}
              className="w-full text-center py-2.5 text-xs font-semibold text-slate-800 bg-slate-100 hover:bg-slate-200 rounded-xl transition-colors cursor-pointer"
            >
              Request Institutional Quotation
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
