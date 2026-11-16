import React, { useState } from 'react';
import { PageId, Product } from '../types';
import { BUSINESS_INFO, CATEGORIES, PRODUCTS } from '../data/products';
import { FAQS } from '../data/faqs';
import { ProductCard } from '../components/ProductCard';
import { HeroSlider } from '../components/HeroSlider';
import { StatsSlider } from '../components/StatsSlider';
import { GalleryMarquee } from '../components/GalleryMarquee';
import { PartnersSection } from '../components/PartnersSection';
import { AvSystemEstimator } from '../components/AvSystemEstimator';
import { ScreenSizeVisualizer } from '../components/ScreenSizeVisualizer';
import {
  ArrowRight,
  MessageSquare,
  Building2,
  ShieldCheck,
  Wrench,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Images,
  MapPin,
  X
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface HomePageProps {
  onNavigate: (page: PageId) => void;
  onSelectProduct: (product: Product) => void;
  onOpenQuoteModal: (productName?: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onNavigate,
  onSelectProduct,
  onOpenQuoteModal
}) => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [activeProjectSlide, setActiveProjectSlide] = useState(0);
  const [lightboxImage, setLightboxImage] = useState<{ src: string; title: string; location: string } | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  // Highlight representative products across key categories (zero prices)
  const featuredProducts = [
    PRODUCTS.find((p) => p.id === 'interactive-led-75-85-86'),
    PRODUCTS.find((p) => p.id === 'casio-xj-v2-projector'),
    PRODUCTS.find((p) => p.id === 'black-digital-podium'),
    PRODUCTS.find((p) => p.id === 'beterva-be2300-chairman-unit')
  ].filter(Boolean) as Product[];

  const clientProjects = [
    {
      title: 'Council Conference Chamber',
      client: 'Government Assembly',
      location: 'Islamabad',
      image: '/images/client-uploads/upload_2.jpg',
      equipment: 'BETERVA BE-2300 Chairman & Delegate Units, DSP Audio, Wall Display',
      summary: 'Multi-seat council discussion setup with Chairman priority override and clean acoustic distribution.'
    },
    {
      title: 'University Lecture Hall Rostrum',
      client: 'Higher Education',
      location: 'Islamabad / Rawalpindi',
      image: '/images/client-uploads/upload_3.jpg',
      equipment: 'Black Digital Podium, 21.5" Touch Display, Gooseneck Mics',
      summary: 'Commercial digital teaching podium with integrated PC, touch monitor, and classroom audio.'
    },
    {
      title: 'National AI Research Center (NCAI)',
      client: 'NUST Islamabad',
      location: 'Sector H-12, Islamabad',
      image: '/images/products/product_8.jpg',
      equipment: '43" 4K Touch Podium with Institutional Crest',
      summary: 'Flagship interactive touch lectern installed for national symposiums and research briefings.'
    },
    {
      title: 'Auditorium Podium & Stage Sound',
      client: 'Convocation Hall',
      location: 'Lahore, Punjab',
      image: '/images/client-uploads/upload_5.jpg',
      equipment: 'Beterva Smart Rostrum, Motorized Screens, CMX Line Audio',
      summary: 'Turnkey auditorium presentation stage with motorized screens and crystal-clear speech amplification.'
    }
  ];

  return (
    <div className="space-y-12 sm:space-y-16 pb-16 overflow-hidden">
      {/* 1. HERO BANNER SLIDER */}
      <HeroSlider onNavigate={onNavigate} onOpenQuoteModal={onOpenQuoteModal} />

      {/* 2. ESTABLISHED 1978 / 500+ PROJECTS SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 -mt-6 sm:-mt-10 relative z-20">
        <StatsSlider />
      </section>

      {/* 3. CONTINUOUS SQUARE MARQUEE GALLERY SLIDER */}
      <GalleryMarquee
        onNavigate={onNavigate}
        onSelectImage={(img) => setLightboxImage(img)}
      />

      {/* 4. SHORT CORPORATE ABOUT SECTION (Established 1978) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 space-y-4"
          >
            <span className="text-[11px] font-bold text-emerald-700 uppercase tracking-wider block">
              Established 1978 · Islamabad
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Audio Visual Equipment, Educational &amp; Business Systems
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-2xl">
              Founded in <strong>1978</strong> and headquartered at <strong>United Plaza, Blue Area, Islamabad</strong>, Kohinoor Audio Visual provides professional audio-visual solutions for educational institutions and businesses across Pakistan, backed by dedicated after-sales technical support, installation, maintenance, and warranty.
            </p>

            <div className="grid grid-cols-3 gap-3 pt-1">
              <div className="p-3 bg-white rounded-xl border border-slate-200">
                <ShieldCheck className="w-4 h-4 text-emerald-700 mb-1" />
                <span className="font-bold text-xs text-slate-900 block">Est. 1978</span>
                <span className="text-[10px] text-slate-500">Official Warranty</span>
              </div>
              <div className="p-3 bg-white rounded-xl border border-slate-200">
                <Wrench className="w-4 h-4 text-emerald-700 mb-1" />
                <span className="font-bold text-xs text-slate-900 block">After-Sales Care</span>
                <span className="text-[10px] text-slate-500">Setup &amp; Maintenance</span>
              </div>
              <div className="p-3 bg-white rounded-xl border border-slate-200">
                <Building2 className="w-4 h-4 text-emerald-700 mb-1" />
                <span className="font-bold text-xs text-slate-900 block">Nationwide</span>
                <span className="text-[10px] text-slate-500">All Major Cities</span>
              </div>
            </div>

            <div className="pt-1 flex flex-wrap items-center gap-2.5">
              <button
                onClick={() => onNavigate('about')}
                className="cursor-pointer px-4 py-2 bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs rounded-lg transition-colors inline-flex items-center gap-1.5"
              >
                <span>About Us</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => onNavigate('gallery')}
                className="cursor-pointer px-4 py-2 bg-white hover:bg-slate-100 text-slate-800 font-semibold text-xs rounded-lg border border-slate-200 transition-colors inline-flex items-center gap-1.5"
              >
                <Images className="w-3.5 h-3.5 text-emerald-700" />
                <span>Gallery</span>
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5"
          >
            <div className="rounded-2xl overflow-hidden shadow-lg border border-slate-200 bg-slate-950 aspect-16/10">
              <img
                src="/images/client-uploads/upload_3.jpg"
                alt="Digital Teaching Rostrum in University Lecture Hall"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* 5. EXACT 8 PRODUCT CATEGORIES GRID IN MANDATORY ORDER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 space-y-6">
        <div className="flex items-end justify-between gap-4">
          <div>
            <span className="text-[11px] font-bold text-emerald-700 uppercase tracking-wider">
              Equipment Range · 8 Core Categories
            </span>
            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
              Product Categories
            </h2>
          </div>
          <button
            onClick={() => onNavigate('products')}
            className="cursor-pointer text-xs font-bold text-emerald-700 hover:text-emerald-800 inline-flex items-center gap-1 shrink-0"
          >
            <span>View Full Catalog</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {CATEGORIES.map((cat, idx) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.4, delay: idx * 0.04 }}
              className="group bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs hover:border-emerald-500 hover:shadow-lg transition-all duration-300 flex flex-col justify-between cursor-pointer"
              onClick={() => onNavigate(cat.id as PageId)}
            >
              <div className="aspect-4/3 overflow-hidden bg-slate-100 relative">
                <img
                  src={cat.heroImage}
                  alt={cat.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="p-4 flex-1 flex flex-col justify-between space-y-2.5">
                <div>
                  <div className="text-[11px] font-bold text-emerald-700 tabular-nums mb-0.5">
                    0{idx + 1}. Category
                  </div>
                  <h3 className="text-sm font-bold text-slate-900 group-hover:text-emerald-700 transition-colors leading-snug">
                    {cat.name}
                  </h3>
                  <p className="text-xs text-slate-600 line-clamp-2 mt-1 leading-relaxed">
                    {cat.description}
                  </p>
                </div>

                <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-emerald-700">
                  <span>Explore Models</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 6. FEATURED PRODUCTS (Zero Prices Shown Anywhere) */}
      <section className="bg-slate-100/60 py-12 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-6">
          <div className="flex items-end justify-between gap-4">
            <div>
              <span className="text-[11px] font-bold text-emerald-700 uppercase tracking-wider">
                Commercial AV Hardware
              </span>
              <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                Featured Equipment Lineup
              </h2>
            </div>
            <button
              onClick={() => onNavigate('products')}
              className="cursor-pointer text-xs font-bold text-emerald-700 hover:text-emerald-800 inline-flex items-center gap-1 shrink-0"
            >
              <span>All Products</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {featuredProducts.map((prod, idx) => (
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
      </section>

      {/* 7. SEPARATE BUSINESS PARTNERS SECTION */}
      <PartnersSection />

      {/* 8. AV SYSTEM CONFIGURATOR */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <AvSystemEstimator />
      </section>

      {/* 9. LED SIZE GUIDE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <ScreenSizeVisualizer />
      </section>

      {/* 10. CLIENT PROJECTS SLIDE SHOWCASE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3">
          <div>
            <span className="text-[11px] font-bold text-emerald-700 uppercase tracking-wider">
              Deployed Nationwide
            </span>
            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
              Client Projects
            </h2>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setActiveProjectSlide((prev) => (prev === 0 ? clientProjects.length - 1 : prev - 1))}
              className="p-2 rounded-lg border border-slate-200 bg-white hover:bg-emerald-50 text-slate-700 hover:text-emerald-700 transition-colors cursor-pointer"
              aria-label="Previous project"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => setActiveProjectSlide((prev) => (prev + 1) % clientProjects.length)}
              className="p-2 rounded-lg border border-slate-200 bg-white hover:bg-emerald-50 text-slate-700 hover:text-emerald-700 transition-colors cursor-pointer"
              aria-label="Next project"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => onNavigate('projects')}
              className="ml-1 cursor-pointer text-xs font-bold text-emerald-700 hover:text-emerald-800 inline-flex items-center gap-1"
            >
              <span>All Projects</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-md grid grid-cols-1 lg:grid-cols-12 items-center">
          <div className="lg:col-span-7 aspect-16/10 lg:aspect-auto lg:h-[340px] bg-slate-950 overflow-hidden">
            <img
              src={clientProjects[activeProjectSlide].image}
              alt={clientProjects[activeProjectSlide].title}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="lg:col-span-5 p-6 space-y-3">
            <span className="text-[11px] font-bold text-emerald-700 uppercase tracking-wider block">
              {clientProjects[activeProjectSlide].client} · {clientProjects[activeProjectSlide].location}
            </span>
            <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 leading-snug">
              {clientProjects[activeProjectSlide].title}
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              {clientProjects[activeProjectSlide].summary}
            </p>
            <div className="p-2.5 bg-emerald-50/70 rounded-xl border border-emerald-100 text-[11px] text-emerald-900">
              <span className="font-bold">Supplied: </span>
              {clientProjects[activeProjectSlide].equipment}
            </div>
            <div className="pt-1">
              <button
                onClick={() => onNavigate('projects')}
                className="cursor-pointer px-4 py-2 bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-bold rounded-lg transition-colors inline-flex items-center gap-1.5"
              >
                <span>View Details</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 11. CONCISE FAQ SECTION */}
      <section className="max-w-4xl mx-auto px-4 sm:px-8 space-y-5">
        <div className="text-center space-y-1">
          <span className="text-[11px] font-bold text-emerald-700 uppercase tracking-wider">
            FAQs
          </span>
          <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
            Common Questions
          </h2>
        </div>

        <div className="space-y-2.5">
          {FAQS.slice(0, 4).map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl border border-slate-200 overflow-hidden"
            >
              <button
                onClick={() => toggleFaq(index)}
                className="w-full text-left p-4 flex items-center justify-between gap-4 cursor-pointer hover:bg-slate-50/50"
              >
                <span className="text-xs sm:text-sm font-bold text-slate-900">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-4 h-4 text-slate-400 shrink-0 transition-transform duration-200 ${
                    openFaq === index ? 'rotate-180 text-emerald-700' : ''
                  }`}
                />
              </button>

              {openFaq === index && (
                <div className="px-4 pb-4 text-xs text-slate-600 leading-relaxed border-t border-slate-100 pt-2.5">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* 12. COMPACT CALL TO ACTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="bg-gradient-to-br from-[#062c1b] via-[#0a3d26] to-[#041f13] rounded-2xl p-6 sm:p-10 text-white flex flex-col md:flex-row items-start md:items-center justify-between gap-6 border border-emerald-900/60 shadow-xl">
          <div className="space-y-1.5 max-w-xl">
            <h2 className="text-xl sm:text-2xl font-extrabold tracking-tight text-white">
              Need AV Equipment for Your Institution?
            </h2>
            <p className="text-xs sm:text-sm text-emerald-100/85">
              Request technical specifications, live product demonstrations, or turnkey installations across Pakistan.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-2.5 shrink-0">
            <a
              href={BUSINESS_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer px-4 py-2.5 bg-white text-emerald-900 hover:bg-emerald-50 text-xs font-bold rounded-lg transition-all inline-flex items-center gap-1.5"
            >
              <MessageSquare className="w-3.5 h-3.5 fill-current text-emerald-700" />
              <span>Inquire on WhatsApp</span>
            </a>
            <button
              onClick={() => onOpenQuoteModal()}
              className="cursor-pointer px-4 py-2.5 bg-emerald-700 hover:bg-emerald-600 text-white text-xs font-bold rounded-lg border border-emerald-500/40 transition-all"
            >
              Request Quotation
            </button>
          </div>
        </div>
      </section>

      {/* Square Gallery Image Lightbox Preview */}
      <AnimatePresence>
        {lightboxImage && (
          <div
            className="fixed inset-0 z-50 bg-slate-950/85 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setLightboxImage(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.94 }}
              transition={{ duration: 0.2 }}
              className="relative max-w-3xl w-full bg-white rounded-2xl overflow-hidden shadow-2xl border border-slate-200"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setLightboxImage(null)}
                className="absolute top-3 right-3 z-20 p-2 bg-slate-900/75 hover:bg-slate-900 text-white rounded-full cursor-pointer"
                aria-label="Close preview"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="bg-slate-950 aspect-16/10 w-full flex items-center justify-center">
                <img
                  src={lightboxImage.src}
                  alt={lightboxImage.title}
                  className="w-full h-full object-contain max-h-[70vh]"
                />
              </div>

              <div className="p-4 sm:p-5 flex items-center justify-between gap-4 bg-white">
                <div>
                  <div className="flex items-center gap-1 text-[11px] font-bold text-emerald-700">
                    <MapPin className="w-3 h-3" />
                    <span>{lightboxImage.location}</span>
                  </div>
                  <h3 className="text-sm sm:text-base font-extrabold text-slate-900">
                    {lightboxImage.title}
                  </h3>
                </div>
                <button
                  onClick={() => {
                    setLightboxImage(null);
                    onNavigate('gallery');
                  }}
                  className="cursor-pointer px-4 py-2 bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-bold rounded-lg shrink-0"
                >
                  Open Gallery
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};
