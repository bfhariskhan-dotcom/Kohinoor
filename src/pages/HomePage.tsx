import React, { useState } from 'react';
import { PageId, Product } from '../types';
import { BUSINESS_INFO, CATEGORIES, PRODUCTS } from '../data/products';
import { FAQS } from '../data/faqs';
import { PROJECTS } from '../data/projects';
import { ProductCard } from '../components/ProductCard';
import { HeroSlider } from '../components/HeroSlider';
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
  Award,
  Users,
  Tv,
  Mic2,
  Video,
  Projector,
  Sparkles,
  MapPin,
  Check,
  PhoneCall,
  Sliders,
  BadgeCheck
} from 'lucide-react';
import { motion } from 'motion/react';

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

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="space-y-24 pb-20 overflow-hidden">
      {/* 1. HERO BANNER SLIDER - Autoplay, Vibrant Sapphire Lighting, Framer Motion transitions */}
      <HeroSlider onNavigate={onNavigate} onOpenQuoteModal={onOpenQuoteModal} />

      {/* 2. STATS & CREDIBILITY STRIP - Floating Luminous Glass Card */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 -mt-12 sm:-mt-16 relative z-20">
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="bg-white rounded-3xl shadow-[0_20px_50px_rgba(30,58,138,0.12)] border border-blue-100 p-6 sm:p-8 grid grid-cols-2 md:grid-cols-4 gap-6 divide-y md:divide-y-0 md:divide-x divide-slate-100"
        >
          <div className="pt-2 md:pt-0">
            <div className="text-2xl sm:text-3xl font-extrabold text-blue-600 tabular-nums">15+ Years</div>
            <div className="text-xs text-slate-500 font-medium mt-1">Audio-Visual Industry Experience</div>
          </div>
          <div className="pt-4 md:pt-0 md:pl-6">
            <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 tabular-nums">500+</div>
            <div className="text-xs text-slate-500 font-medium mt-1">Classrooms &amp; Auditoriums Equipped</div>
          </div>
          <div className="pt-4 md:pt-0 md:pl-6">
            <div className="text-2xl sm:text-3xl font-extrabold text-blue-600 tabular-nums">6 Major Cities</div>
            <div className="text-xs text-slate-500 font-medium mt-1">Islamabad, LHE, KHI, PEW, MUX, RWP</div>
          </div>
          <div className="pt-4 md:pt-0 md:pl-6">
            <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 tabular-nums">100% Genuine</div>
            <div className="text-xs text-slate-500 font-medium mt-1">Hardware with Official Warranty</div>
          </div>
        </motion.div>
      </section>

      {/* 3. ABOUT SECTION - Staggered Left & Right Entrance */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Text Column - Enters from Left */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.65, ease: 'easeOut' }}
            className="lg:col-span-7 space-y-5"
          >
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 uppercase tracking-wider">
              <BadgeCheck className="w-4 h-4 text-blue-600" />
              <span>About Kohinoor Audio Visual</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-snug">
              Empowering Education &amp; Corporate Communication with World-Class AV Technology
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Kohinoor Audio Visual Education Business System is an established supplier of professional audio-visual and educational technology solutions based at United Plaza, Fazlehaq Road, Blue Area, Islamabad.
            </p>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              We specialize in engineering, supplying, and deploying smart classroom technologies, interactive touch LED flat panels, multi-feature digital rostrums, high-lumen multimedia projectors, conference discussion microphone systems, and 4K robotic PTZ cameras.
            </p>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Serving leading universities, colleges, schools, government ministries, public sector bodies, and corporate headquarters nationwide, our mission is to deliver dependable equipment, flawless acoustics, and responsive technical support.
            </p>

            <div className="pt-3 flex flex-wrap items-center gap-4">
              <button
                onClick={() => onNavigate('about')}
                className="cursor-pointer px-5 py-3 bg-blue-600 hover:bg-blue-700 active:scale-95 text-white text-xs font-bold rounded-xl shadow-md transition-all inline-flex items-center gap-2"
              >
                <span>Read Full Company Profile</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href={BUSINESS_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer px-5 py-3 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-semibold rounded-xl transition-colors inline-flex items-center gap-2"
              >
                <MessageSquare className="w-4 h-4 text-blue-600" />
                <span>Direct WhatsApp Consultation</span>
              </a>
            </div>
          </motion.div>

          {/* Right Visual Stage - Enters from Right */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.65, ease: 'easeOut', delay: 0.15 }}
            className="lg:col-span-5"
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-2xl overflow-hidden border border-slate-200 bg-slate-50 shadow-md group hover:border-blue-400 transition-colors">
                <div className="overflow-hidden h-48 bg-slate-100">
                  <img
                    src="/images/products/product_8.jpg"
                    alt="NUST NCAI Presentation Rostrum Installation"
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
                  />
                </div>
                <div className="p-3.5 bg-white text-xs">
                  <p className="font-bold text-slate-900">National AI Center (NCAI)</p>
                  <p className="text-[11px] text-blue-600 font-medium">NUST Islamabad Deployment</p>
                </div>
              </div>

              <div className="rounded-2xl overflow-hidden border border-slate-200 bg-slate-50 shadow-md group hover:border-blue-400 transition-colors">
                <div className="overflow-hidden h-48 bg-slate-100">
                  <img
                    src="/images/products/product_14.jpg"
                    alt="Auditorium Digital Rostrum on Dais"
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
                  />
                </div>
                <div className="p-3.5 bg-white text-xs">
                  <p className="font-bold text-slate-900">Digital Rostrum with PC</p>
                  <p className="text-[11px] text-blue-600 font-medium">Dais Sound &amp; Touch System</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 4. INTERACTIVE TURNKEY AV SYSTEM ESTIMATOR (Breaks AI Website feel completely) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
        >
          <AvSystemEstimator />
        </motion.div>
      </section>

      {/* 5. OUR PRODUCTS SECTION (6 Main Categories in Clean 3-Column Grid) - Staggered Fade Up */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.55 }}
          className="text-center max-w-3xl mx-auto mb-12 space-y-3"
        >
          <div className="text-xs font-bold text-blue-600 uppercase tracking-wider">
            Comprehensive Product Catalog
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Six Dedicated AV &amp; Educational Technology Categories
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            From single meeting rooms to campus-wide university rollouts, explore our verified equipment categories engineered for heavy institutional use.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {CATEGORIES.map((cat, idx) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 35, scale: 0.96 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              onClick={() => onNavigate(cat.id as PageId)}
              className="group bg-white rounded-3xl border border-slate-200/90 overflow-hidden hover:border-blue-500 hover:shadow-[0_20px_40px_rgba(37,99,235,0.15)] transition-all duration-300 flex flex-col cursor-pointer hover:-translate-y-1.5"
            >
              <div className="aspect-16/10 bg-slate-900 overflow-hidden relative border-b border-slate-100 flex items-center justify-center p-3">
                <img
                  src={cat.heroImage}
                  alt={cat.name}
                  className="w-full h-full object-cover rounded-2xl group-hover:scale-106 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-5 right-5 text-white">
                  <span className="text-[11px] font-bold text-blue-400 uppercase tracking-wider">
                    Category Overview
                  </span>
                  <h3 className="text-base font-extrabold text-white leading-snug">
                    {cat.name}
                  </h3>
                </div>
              </div>

              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-3">
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {cat.description}
                  </p>

                  <ul className="space-y-2 pt-1">
                    {cat.features.slice(0, 3).map((feat, i) => (
                      <li key={i} className="flex items-center gap-2 text-xs text-slate-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs font-bold text-blue-600 group-hover:text-blue-700 inline-flex items-center gap-1">
                    <span>Explore {cat.name}</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1.5 transition-transform" />
                  </span>
                  <a
                    href={BUSINESS_INFO.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="text-xs font-bold text-blue-600 hover:text-blue-700 hover:bg-blue-50 px-2.5 py-1.5 rounded-lg transition-colors flex items-center gap-1"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 6. INTERACTIVE SCREEN SIZE VISUALIZER TOOL (Dimensional Explorer) */}
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

      {/* 7. FEATURED HARDWARE SPOTLIGHT (Divided into 2-Column Clean Grid to Avoid Overcrowding) */}
      <section className="bg-gradient-to-b from-slate-100/80 to-blue-50/30 py-18 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-10">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5 }}
            className="flex flex-col md:flex-row md:items-end justify-between gap-4"
          >
            <div>
              <div className="text-xs font-bold text-blue-600 uppercase tracking-wider">
                In-Stock &amp; Ready for Delivery
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-1">
                Featured Product Highlights
              </h2>
            </div>
            <button
              onClick={() => onNavigate('products')}
              className="cursor-pointer text-xs font-bold text-blue-600 hover:text-blue-700 inline-flex items-center gap-1.5 self-start md:self-auto"
            >
              <span>View All 18 Hardware Models in Catalog</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </motion.div>

          {/* 2-Column Grid as specifically requested by user to prevent cramping */}
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
        </div>
      </section>

      {/* 8. WHY CHOOSE US SECTION - Staggered Card Entrance */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.55 }}
          className="text-center max-w-2xl mx-auto mb-14 space-y-3"
        >
          <div className="text-xs font-bold text-blue-600 uppercase tracking-wider">
            Proven Reliability
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Why Educational &amp; Government Institutions Choose Kohinoor AV
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            We combine authentic international equipment supply with local engineering presence in Blue Area Islamabad, delivering dependability across every installation.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: ShieldCheck,
              title: 'Professional AV Equipment Solutions',
              desc: 'Every rostrum, display, camera, and microphone is selected for durability, high duty cycles, and crystal-clear presentation performance.'
            },
            {
              icon: GraduationCap,
              title: 'Educational Technology Expertise',
              desc: 'Deep understanding of classroom ergonomics, teacher-friendly interactive software, stylus handwriting accuracy, and student engagement tools.'
            },
            {
              icon: Layers,
              title: 'Multiple Product Categories',
              desc: 'One-stop sourcing for digital podiums, LED touch panels (55"–110"), high-lumen projectors, conference delegate mics, and PTZ robotic cameras.'
            },
            {
              icon: Building2,
              title: 'Nationwide Supply Network',
              desc: 'Direct delivery and technical logistics covering Islamabad, Rawalpindi, Lahore, Karachi, Peshawar, Multan, Faisalabad, and regional cities.'
            },
            {
              icon: Wrench,
              title: 'Installation & Technical Support',
              desc: 'Our trained field engineers manage complete physical mounting, cable raceways, audio tuning, and hands-on staff orientation.'
            },
            {
              icon: Users,
              title: 'Customized Institutional Solutions',
              desc: 'Tailored AV packages accommodating custom university logos, specific room dimensions, tender specifications, and budgetary frameworks.'
            }
          ].map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.45, delay: idx * 0.08 }}
                className="p-6 sm:p-7 rounded-3xl bg-white border border-slate-200/90 space-y-3 hover:border-blue-400 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-11 h-11 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-sm sm:text-base font-bold text-slate-900">{item.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* 9. INDUSTRIES WE SERVE - Dynamic Entrance */}
      <section className="bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white py-18 relative overflow-hidden">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.55 }}
            className="text-center max-w-2xl mx-auto space-y-3"
          >
            <div className="text-xs font-bold text-blue-400 uppercase tracking-wider">
              Client Sectors
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Industries We Serve Across Pakistan
            </h2>
            <p className="text-xs sm:text-sm text-blue-200/80 leading-relaxed">
              Providing specialized audio-visual infrastructure tailored to unique organizational requirements.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { icon: GraduationCap, title: 'Schools', desc: 'Interactive learning displays & portable PA' },
              { icon: GraduationCap, title: 'Colleges', desc: 'Multimedia projectors & smart classrooms' },
              { icon: Landmark, title: 'Universities', desc: 'Digital rostrums & lecture recording' },
              { icon: Building2, title: 'Government Depts', desc: 'Secure conference discussion systems' },
              { icon: Building2, title: 'Corporate Offices', desc: 'Boardroom displays & video conferencing' },
              { icon: Layers, title: 'Conference Centers', desc: 'Auditorium teleprompters & staging' }
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: '-30px' }}
                  transition={{ duration: 0.4, delay: idx * 0.06 }}
                  className="p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-blue-400 hover:bg-white/10 text-center space-y-2.5 transition-all duration-300"
                >
                  <Icon className="w-6 h-6 text-blue-400 mx-auto" />
                  <h3 className="text-xs font-bold text-white">{item.title}</h3>
                  <p className="text-[11px] text-blue-200/70">{item.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 10. PROVEN INSTALLATIONS / CASE STUDIES PREVIEW (Clean 3-Column) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-4"
        >
          <div>
            <div className="text-xs font-bold text-blue-600 uppercase tracking-wider">
              Proven Track Record
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-1">
              Real Installations &amp; Client Projects
            </h2>
          </div>
          <button
            onClick={() => onNavigate('projects')}
            className="cursor-pointer text-xs font-bold text-blue-600 hover:text-blue-700 inline-flex items-center gap-1.5"
          >
            <span>View Full Project Case Studies</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PROJECTS.slice(0, 3).map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.45, delay: idx * 0.1 }}
              onClick={() => onNavigate('projects')}
              className="group bg-white rounded-3xl border border-slate-200/90 overflow-hidden hover:border-blue-500 hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col hover:-translate-y-1"
            >
              <div className="aspect-16/10 bg-slate-100 overflow-hidden border-b border-slate-100">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-106 transition-transform duration-500"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between space-y-3">
                <div>
                  <div className="text-[11px] font-bold text-blue-600 uppercase tracking-wide">{item.client}</div>
                  <h3 className="text-base font-bold text-slate-900 group-hover:text-blue-600 transition-colors mt-1">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-600 mt-2 line-clamp-2 leading-relaxed">
                    {item.description}
                  </p>
                </div>
                <div className="text-[11px] text-slate-400 font-medium pt-2 border-t border-slate-100">
                  Location: {item.location}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 11. VISIBLE FAQ SECTION */}
      <section className="max-w-4xl mx-auto px-4 sm:px-8 space-y-6">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5 }}
          className="text-center space-y-2"
        >
          <div className="text-xs font-bold text-blue-600 uppercase tracking-wider">
            Frequently Asked Questions
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Procurement, Pricing &amp; Technical Inquiries
          </h2>
          <p className="text-xs text-slate-500">
            Everything you need to know about purchasing AV equipment in Islamabad and across Pakistan.
          </p>
        </motion.div>

        <div className="space-y-3 pt-4">
          {FAQS.slice(0, 5).map((faq, index) => (
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
                    openFaq === index ? 'rotate-180 text-blue-600' : ''
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

      {/* 12. CALL TO ACTION SECTION (100% Blue & Sapphire Theme) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-blue-600 via-blue-700 to-slate-950 rounded-3xl p-8 sm:p-14 text-white text-center sm:text-left relative overflow-hidden shadow-2xl"
        >
          <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-400/20 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-3xl relative z-10 space-y-4">
            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight">
              Looking for Professional Audio Visual Solutions?
            </h2>
            <p className="text-xs sm:text-sm text-blue-100 leading-relaxed max-w-2xl">
              Contact our team for product details, quotations, demonstrations and customized AV solutions. We cater to universities, schools, government bodies, and commercial clients throughout Pakistan.
            </p>
            <div className="pt-3 flex flex-wrap items-center gap-4">
              <a
                href={BUSINESS_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer px-7 py-3.5 bg-white text-blue-900 hover:bg-blue-50 active:scale-95 text-xs sm:text-sm font-bold rounded-xl shadow-lg transition-all flex items-center gap-2"
              >
                <MessageSquare className="w-4 h-4 fill-current text-blue-700" />
                <span>Contact Us on WhatsApp (+92 333 5163220)</span>
              </a>

              <button
                onClick={() => onOpenQuoteModal()}
                className="cursor-pointer px-7 py-3.5 bg-blue-950/80 hover:bg-slate-900 text-white active:scale-95 text-xs sm:text-sm font-semibold rounded-xl border border-blue-400/40 backdrop-blur-sm transition-all"
              >
                Get a Free Quotation
              </button>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
};
