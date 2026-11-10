import React, { useState } from 'react';
import { PageId, Product, GalleryItem } from '../types';
import { BUSINESS_INFO, CATEGORIES, PRODUCTS } from '../data/products';
import { FAQS } from '../data/faqs';
import { GALLERY_ITEMS } from '../data/gallery';
import { ProductCard } from '../components/ProductCard';
import { HeroSlider } from '../components/HeroSlider';
import { StatsSlider } from '../components/StatsSlider';
import { AvSystemEstimator } from '../components/AvSystemEstimator';
import { ScreenSizeVisualizer } from '../components/ScreenSizeVisualizer';
import {
  ArrowRight,
  MessageSquare,
  Building2,
  GraduationCap,
  Landmark,
  Layers,
  ShieldCheck,
  Wrench,
  CheckCircle2,
  ChevronDown,
  Users,
  ChevronLeft,
  ChevronRight,
  Images,
  MapPin,
  Maximize2,
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
  const [selectedGalleryItem, setSelectedGalleryItem] = useState<GalleryItem | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const clientProjects = [
    {
      title: 'Multinational Council Conference Chamber',
      client: 'Diplomatic & Government Assembly',
      location: 'Islamabad, Pakistan',
      image: '/images/client-uploads/upload_2.jpg',
      equipment: 'Chairman & Delegate Priority Microphones, Central DSP, Wall Audio',
      summary: 'Complete executive council assembly setup featuring Chairman priority override, feedback-free gooseneck mics, and multi-channel audio integration.'
    },
    {
      title: 'Beterva Digital Rostrum University Lecture Hall',
      client: 'Higher Education Lecture Hall',
      location: 'Rawalpindi / Islamabad',
      image: '/images/client-uploads/upload_3.jpg',
      equipment: 'Digital Rostrum with Touchscreen, Built-in PC Tray, Gooseneck Mics',
      summary: 'Steel commercial digital teaching rostrum installed with integrated touch screen, centralized AV control box, and microphone speech interface.'
    },
    {
      title: 'National Centre of Artificial Intelligence (NCAI)',
      client: 'NUST Islamabad',
      location: 'Sector H-12, Islamabad',
      image: '/images/products/product_8.jpg',
      equipment: '43" Commercial 4K Touch Podium with Institutional Crest',
      summary: 'Landmark reference installation deployed for national AI symposiums, diplomatic delegations, and advanced research presentations.'
    },
    {
      title: 'Auditorium Stage Speech Acoustics & Podiums',
      client: 'University Convocation Hall',
      location: 'Lahore, Punjab',
      image: '/images/client-uploads/upload_5.jpg',
      equipment: 'Digital Smart Rostrum, Line Array Stage Audio, Wireless UHF Mics',
      summary: 'Turnkey auditorium presentation solution with digital smart rostrum, teleprompter monitor interface, and wide-dispersion sound reinforcement.'
    }
  ];

  const featuredGallery = GALLERY_ITEMS.slice(0, 6);

  return (
    <div className="space-y-16 sm:space-y-24 pb-20 overflow-hidden">
      {/* 1. HERO BANNER SLIDER - Emerald Green Theme with Real Client Uploads */}
      <HeroSlider onNavigate={onNavigate} onOpenQuoteModal={onOpenQuoteModal} />

      {/* 2. STATS & CREDIBILITY STRIP - Interactive Auto-Playing Widget */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 -mt-10 sm:-mt-14 relative z-20">
        <StatsSlider />
      </section>

      {/* 3. ABOUT SECTION - Clean, Concise with Client Photos */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center">
          {/* Left Text Column */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-4 sm:space-y-5"
          >
            <div className="text-xs font-bold text-emerald-800 uppercase tracking-wider">
              Premier AV Integration Since 2009
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Direct AV Hardware Supplier &amp; Solutions Provider in Islamabad
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Based in the prestigious commercial center of <strong>United Plaza, Blue Area, Islamabad</strong>, Kohinoor Audio Visual Education Business System specializes in supplying heavy-duty educational technology, smart interactive classrooms, digital rostrums, conference microphone systems, and 4K optical equipment across Pakistan.
            </p>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              We eliminate technical risks for universities and corporate boards. Our Islamabad-based engineering team provides comprehensive turnkey site surveys, equipment installation, structural ceiling mounting, audio acoustic calibration, and ongoing warranty support.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
              <div className="p-3.5 bg-slate-100/80 rounded-2xl border border-slate-200">
                <ShieldCheck className="w-5 h-5 text-emerald-700 mb-1" />
                <span className="font-bold text-xs text-slate-900 block">100% Genuine</span>
                <span className="text-[11px] text-slate-500">Official Warranty</span>
              </div>
              <div className="p-3.5 bg-slate-100/80 rounded-2xl border border-slate-200">
                <Wrench className="w-5 h-5 text-emerald-700 mb-1" />
                <span className="font-bold text-xs text-slate-900 block">On-Site Setup</span>
                <span className="text-[11px] text-slate-500">Engineering Crew</span>
              </div>
              <div className="p-3.5 bg-slate-100/80 rounded-2xl border border-slate-200 col-span-2 sm:col-span-1">
                <Building2 className="w-5 h-5 text-emerald-700 mb-1" />
                <span className="font-bold text-xs text-slate-900 block">Nationwide</span>
                <span className="text-[11px] text-slate-500">Insured Delivery</span>
              </div>
            </div>

            <div className="pt-2 flex flex-wrap items-center gap-3">
              <button
                onClick={() => onNavigate('about')}
                className="cursor-pointer px-6 py-3 bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs rounded-xl shadow-md transition-colors flex items-center gap-2"
              >
                <span>Discover Our Company</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => onNavigate('gallery')}
                className="cursor-pointer px-5 py-3 bg-white hover:bg-slate-100 text-slate-800 font-semibold text-xs rounded-xl border border-slate-200 transition-colors flex items-center gap-1.5"
              >
                <Images className="w-4 h-4 text-emerald-700" />
                <span>View Real Installations</span>
              </button>
            </div>
          </motion.div>

          {/* Right Image Split (Real Client Installation Photo) */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 relative"
          >
            <div className="rounded-3xl overflow-hidden shadow-xl border border-slate-200 bg-slate-900">
              <img
                src="/images/client-uploads/upload_3.jpg"
                alt="Digital Teaching Rostrum in Modern University Lecture Hall"
                className="w-full h-auto object-cover"
              />
              <div className="p-4 bg-slate-900/90 text-white flex items-center justify-between border-t border-slate-800">
                <div>
                  <div className="text-xs font-bold">University Amphitheater Deployment</div>
                  <div className="text-[11px] text-emerald-400">Digital Rostrum with Touchscreen &amp; PC</div>
                </div>
                <button
                  onClick={() => onNavigate('projects')}
                  className="cursor-pointer text-[11px] font-bold text-white hover:underline"
                >
                  View Detail &rarr;
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 4. PRODUCT CATEGORIES GRID - Clean 6-Card Overview */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 space-y-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="text-xs font-bold text-emerald-800 uppercase tracking-wider">
              Core Equipment Portfolio
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-1">
              Explore Our Six Dedicated Product Categories
            </h2>
          </div>
          <button
            onClick={() => onNavigate('products')}
            className="cursor-pointer text-xs font-bold text-emerald-800 hover:text-emerald-900 inline-flex items-center gap-1.5 self-start md:self-auto"
          >
            <span>View Complete Catalog with Prices</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {CATEGORIES.map((cat, idx) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.45, delay: idx * 0.08 }}
              className="group bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-xs hover:border-emerald-500/80 hover:shadow-xl transition-all duration-300 flex flex-col justify-between cursor-pointer"
              onClick={() => onNavigate(cat.id as PageId)}
            >
              <div className="aspect-16/10 overflow-hidden bg-slate-900 relative">
                <img
                  src={cat.heroImage}
                  alt={cat.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-emerald-900/90 text-white text-[10px] font-bold backdrop-blur-xs border border-emerald-500/30">
                  {PRODUCTS.filter((p) => p.category === cat.id).length || 3} Models
                </div>
              </div>

              <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                <div>
                  <h3 className="text-base font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">
                    {cat.name}
                  </h3>
                  <p className="text-xs text-slate-600 line-clamp-2 mt-1 leading-relaxed">
                    {cat.description}
                  </p>
                </div>

                <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs font-bold text-emerald-800 group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                    <span>Explore Products</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                  <a
                    href={BUSINESS_INFO.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="text-xs font-bold text-emerald-800 hover:text-emerald-900 hover:bg-emerald-50 px-2.5 py-1 rounded-lg transition-colors flex items-center gap-1"
                  >
                    <MessageSquare className="w-3.5 h-3.5 fill-current" />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 5. DEDICATED REAL INSTALLATION GALLERY SECTION (User Explicit Request) */}
      <section className="bg-gradient-to-b from-slate-100/70 via-emerald-50/20 to-white py-16 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <div className="text-xs font-bold text-emerald-800 uppercase tracking-wider flex items-center gap-1.5">
                <Images className="w-4 h-4 text-emerald-700" />
                <span>Verified Field Installations</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-1">
                Project &amp; Installation Gallery
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-2xl">
                Explore real council chambers, smart auditoriums, and university lecture halls engineered and supplied by Kohinoor Audio Visual.
              </p>
            </div>
            <button
              onClick={() => onNavigate('gallery')}
              className="cursor-pointer px-5 py-2.5 bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs rounded-xl shadow-md transition-all inline-flex items-center gap-2 self-start md:self-auto shrink-0"
            >
              <Images className="w-3.5 h-3.5" />
              <span>View All 12 Gallery Projects</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* 6-Photo Responsive Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredGallery.map((item, idx) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.35, delay: idx * 0.05 }}
                className="group bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-xs hover:border-emerald-400 hover:shadow-xl transition-all duration-300 flex flex-col cursor-pointer"
                onClick={() => setSelectedGalleryItem(item)}
              >
                <div className="relative aspect-4/3 w-full bg-slate-950 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-black/20 opacity-75 group-hover:opacity-90 transition-opacity" />

                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                    <span className="px-2.5 py-1 rounded-full bg-emerald-900/90 text-white text-[10px] font-bold backdrop-blur-xs border border-emerald-500/30 flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-emerald-400" />
                      <span>{item.location}</span>
                    </span>
                    <span className="p-1.5 rounded-full bg-white/20 text-white backdrop-blur-xs">
                      <Maximize2 className="w-3.5 h-3.5" />
                    </span>
                  </div>

                  <div className="absolute bottom-3 left-3 right-3">
                    <span className="text-[10px] uppercase font-bold text-emerald-300 block">
                      {item.categoryLabel}
                    </span>
                    <h3 className="text-sm font-bold text-white line-clamp-1 leading-snug">
                      {item.title}
                    </h3>
                  </div>
                </div>

                <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                  <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                    {item.description}
                  </p>
                  <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-emerald-700 group-hover:text-emerald-800">
                    <span>Click to view full photo &amp; specs</span>
                    <span>&rarr;</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. FEATURED HARDWARE SPOTLIGHT (Clean 2-Column Grid with Prices) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-4"
        >
          <div>
            <div className="text-xs font-bold text-emerald-800 uppercase tracking-wider">
              Transparent Pricing &amp; Stock
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-1">
              Featured Product Highlights
            </h2>
          </div>
          <button
            onClick={() => onNavigate('products')}
            className="cursor-pointer text-xs font-bold text-emerald-800 hover:text-emerald-900 inline-flex items-center gap-1.5 self-start md:self-auto"
          >
            <span>View All Products with Prices</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </motion.div>

        {/* Clean 2-Column Grid as specifically requested */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {PRODUCTS.slice(0, 4).map((prod, idx) => (
            <ProductCard
              key={prod.id}
              product={prod}
              onSelect={onSelectProduct}
              onOpenQuote={onOpenQuoteModal}
              index={idx}
            />
          ))}
        </div>
      </section>

      {/* 7. INTERACTIVE TURNKEY AV SYSTEM ESTIMATOR */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
        >
          <AvSystemEstimator />
        </motion.div>
      </section>

      {/* 8. INTERACTIVE SCREEN SIZE VISUALIZER TOOL */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
        >
          <ScreenSizeVisualizer />
        </motion.div>
      </section>

      {/* 9. REAL INSTALLATIONS / CLIENT PROJECTS - Slide/Carousel Format */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 space-y-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="text-xs font-bold text-emerald-800 uppercase tracking-wider">
              Proven Track Record
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-1">
              Real Installations &amp; Client Projects
            </h2>
          </div>
          <div className="flex items-center gap-2 self-start md:self-auto">
            <button
              onClick={() => setActiveProjectSlide((prev) => (prev === 0 ? clientProjects.length - 1 : prev - 1))}
              className="p-2.5 rounded-xl border border-slate-200 bg-white hover:bg-emerald-50 text-slate-700 hover:text-emerald-800 transition-colors cursor-pointer"
              aria-label="Previous project slide"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => setActiveProjectSlide((prev) => (prev + 1) % clientProjects.length)}
              className="p-2.5 rounded-xl border border-slate-200 bg-white hover:bg-emerald-50 text-slate-700 hover:text-emerald-800 transition-colors cursor-pointer"
              aria-label="Next project slide"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => onNavigate('projects')}
              className="ml-2 cursor-pointer text-xs font-bold text-emerald-800 hover:text-emerald-900 inline-flex items-center gap-1.5"
            >
              <span>View All Projects</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Dynamic Project Slide Card */}
        <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-lg grid grid-cols-1 lg:grid-cols-12 items-center">
          <div className="lg:col-span-7 aspect-16/10 lg:aspect-auto lg:h-[380px] bg-slate-950 overflow-hidden">
            <img
              src={clientProjects[activeProjectSlide].image}
              alt={clientProjects[activeProjectSlide].title}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="lg:col-span-5 p-6 sm:p-8 space-y-3.5">
            <span className="text-[11px] font-bold text-emerald-700 uppercase tracking-wider">
              {clientProjects[activeProjectSlide].client}
            </span>
            <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 leading-snug">
              {clientProjects[activeProjectSlide].title}
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              {clientProjects[activeProjectSlide].summary}
            </p>
            <div className="p-3 bg-emerald-50/70 rounded-xl border border-emerald-100 text-xs text-emerald-900">
              <span className="font-bold">Equipment Supplied: </span>
              {clientProjects[activeProjectSlide].equipment}
            </div>
            <div className="pt-2 flex items-center justify-between">
              <span className="text-xs text-slate-400 font-medium">
                {clientProjects[activeProjectSlide].location}
              </span>
              <a
                href={BUSINESS_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer px-4 py-2 bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-bold rounded-xl transition-all shadow-sm flex items-center gap-1.5"
              >
                <MessageSquare className="w-3.5 h-3.5 fill-current" />
                <span>Inquire on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 10. VISIBLE FAQ SECTION */}
      <section className="max-w-4xl mx-auto px-4 sm:px-8 space-y-6">
        <div className="text-center space-y-2">
          <div className="text-xs font-bold text-emerald-800 uppercase tracking-wider">
            Frequently Asked Questions
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Procurement, Pricing &amp; Technical Inquiries
          </h2>
        </div>

        <div className="space-y-3 pt-2">
          {FAQS.slice(0, 4).map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl border border-slate-200 overflow-hidden transition-colors"
            >
              <button
                onClick={() => toggleFaq(index)}
                className="w-full text-left p-5 flex items-center justify-between gap-4 cursor-pointer hover:bg-slate-50/50"
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
                <div className="px-5 pb-5 text-xs text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* 11. CALL TO ACTION SECTION (Emerald Green Theme) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-[#072115] via-[#0d3420] to-[#05180f] rounded-3xl p-8 sm:p-14 text-white text-center sm:text-left relative overflow-hidden shadow-2xl border border-emerald-900/60"
        >
          <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/15 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-3xl relative z-10 space-y-4">
            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight">
              Looking for Professional Audio Visual Solutions?
            </h2>
            <p className="text-xs sm:text-sm text-emerald-100/90 leading-relaxed max-w-2xl">
              Contact our team for product details, quotations, demonstrations, and customized AV solutions. We cater to universities, schools, government bodies, and commercial clients throughout Pakistan.
            </p>
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href={BUSINESS_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer px-7 py-3.5 bg-white text-emerald-900 hover:bg-emerald-50 active:scale-95 text-xs sm:text-sm font-bold rounded-xl shadow-lg transition-all flex items-center gap-2"
              >
                <MessageSquare className="w-4 h-4 fill-current text-emerald-700" />
                <span>Contact on WhatsApp</span>
              </a>

              <button
                onClick={() => onOpenQuoteModal()}
                className="cursor-pointer px-7 py-3.5 bg-emerald-950/80 hover:bg-slate-900 text-white active:scale-95 text-xs sm:text-sm font-semibold rounded-xl border border-emerald-400/40 backdrop-blur-sm transition-all"
              >
                Get a Free Quotation
              </button>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Lightbox Modal on Home Page */}
      <AnimatePresence>
        {selectedGalleryItem && (
          <div
            className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/85 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6"
            onClick={() => setSelectedGalleryItem(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.94 }}
              transition={{ duration: 0.2 }}
              className="relative w-full max-w-4xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden my-6"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedGalleryItem(null)}
                className="absolute top-4 right-4 z-20 p-2 text-white bg-slate-900/70 hover:bg-slate-900 rounded-full backdrop-blur-xs transition-colors cursor-pointer"
                aria-label="Close dialog"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="grid grid-cols-1 lg:grid-cols-12 max-h-[85vh] overflow-y-auto">
                <div className="lg:col-span-7 bg-slate-950 flex items-center justify-center relative min-h-[300px] lg:min-h-[440px]">
                  <img
                    src={selectedGalleryItem.image}
                    alt={selectedGalleryItem.title}
                    className="w-full h-full object-contain max-h-[480px]"
                  />
                  {selectedGalleryItem.highlightBadge && (
                    <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-emerald-700 text-white text-[10px] font-bold shadow-md">
                      {selectedGalleryItem.highlightBadge}
                    </div>
                  )}
                </div>

                <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between space-y-6 bg-slate-50">
                  <div className="space-y-4">
                    <div>
                      <div className="text-[10px] font-bold text-emerald-700 uppercase tracking-wider">
                        {selectedGalleryItem.categoryLabel}
                      </div>
                      <h2 className="text-lg sm:text-xl font-extrabold text-slate-900 mt-0.5 leading-snug">
                        {selectedGalleryItem.title}
                      </h2>
                    </div>

                    <div className="space-y-2 text-xs">
                      <div className="flex items-center gap-2 text-slate-700">
                        <MapPin className="w-4 h-4 text-emerald-700 shrink-0" />
                        <span className="font-semibold">{selectedGalleryItem.location}</span>
                      </div>
                      <div className="flex items-center gap-2 text-slate-700">
                        <Building2 className="w-4 h-4 text-emerald-700 shrink-0" />
                        <span>{selectedGalleryItem.clientType}</span>
                      </div>
                    </div>

                    <p className="text-xs text-slate-600 leading-relaxed pt-2 border-t border-slate-200">
                      {selectedGalleryItem.description}
                    </p>

                    <div className="pt-2 space-y-1.5">
                      <span className="text-xs font-bold text-slate-900 block">
                        Hardware &amp; Systems Deployed:
                      </span>
                      <ul className="space-y-1 text-xs text-slate-700">
                        {selectedGalleryItem.equipmentDeployed.map((eq, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                            <span>{eq}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-200 space-y-2">
                    <a
                      href={`${BUSINESS_INFO.whatsappUrl}?text=${encodeURIComponent(`Hello Kohinoor AV, I am inquiring about the *${selectedGalleryItem.title}* shown in your gallery.`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cursor-pointer w-full py-3 bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-bold rounded-xl shadow-md transition-colors flex items-center justify-center gap-2"
                    >
                      <MessageSquare className="w-4 h-4 fill-current" />
                      <span>Order on WhatsApp</span>
                    </a>
                    <button
                      onClick={() => {
                        setSelectedGalleryItem(null);
                        onNavigate('gallery');
                      }}
                      className="cursor-pointer w-full py-2.5 bg-white hover:bg-slate-100 text-slate-800 text-xs font-semibold rounded-xl border border-slate-200 transition-colors"
                    >
                      Open Full Project Gallery
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};
