import React from 'react';
import { PageId } from '../types';
import { BUSINESS_INFO } from '../data/products';
import { PartnersSection } from '../components/PartnersSection';
import {
  ShieldCheck,
  Wrench,
  Phone,
  Mail,
  Truck,
  ArrowRight,
  MessageSquare,
  Headphones,
  Target
} from 'lucide-react';
import { motion } from 'motion/react';

interface AboutPageProps {
  onNavigate: (page: PageId) => void;
  onOpenQuoteModal: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-16 py-10">
      {/* Page Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          className="max-w-3xl space-y-4"
        >
          <div className="text-xs font-bold text-emerald-700 uppercase tracking-wider">
            Established 1978 · Corporate Profile
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            About Kohinoor Audio Visual
          </h1>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Established in <strong>1978</strong> and headquartered at United Plaza, Fazlehaq Road, Blue Area, Islamabad, Kohinoor Audio Visual is Pakistan’s pioneering provider of <strong>Audio Visual Equipment, Educational Equipment, and Business Systems</strong>.
          </p>
        </motion.div>
      </section>

      {/* Main Narrative Split */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.55 }}
            className="lg:col-span-7 space-y-5 text-xs sm:text-sm text-slate-700 leading-relaxed"
          >
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
              Over Four Decades Serving Education &amp; Enterprise Since 1978
            </h2>
            <p>
              For more than 45 years since our founding in <strong>1978</strong>, <strong>Kohinoor Audio Visual</strong> has partnered with universities, schools, government ministries, research institutions, and corporate enterprises across Pakistan.
            </p>
            <p>
              Our core business spans commercial <strong>Audio Visual Equipment</strong>, specialized <strong>Educational Equipment</strong>, and integrated <strong>Business Systems</strong>—from 4K Interactive LED Displays, Casio/Panasonic/NEC/Mitsubishi/MAGAPOWER multimedia projectors, projection screens, and mounting kits to Black &amp; Table-Style digital podiums, CMX commercial audio, BETERVA BE-2300 conference discussion systems, and King professional teleprompters.
            </p>

            {/* Mission & After-Sales Highlight Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-emerald-50/70 border border-emerald-200/80 space-y-1.5">
                <div className="flex items-center gap-2 text-emerald-800 font-bold text-xs uppercase tracking-wider">
                  <Target className="w-4 h-4 text-emerald-700" />
                  <span>Our Mission</span>
                </div>
                <p className="text-xs text-slate-700 leading-relaxed">
                  Providing professional, dependable Audio Visual solutions tailored for educational institutions and businesses nationwide.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-100/80 border border-slate-200 space-y-1.5">
                <div className="flex items-center gap-2 text-slate-900 font-bold text-xs uppercase tracking-wider">
                  <Headphones className="w-4 h-4 text-emerald-700" />
                  <span>After-Sales Services</span>
                </div>
                <p className="text-xs text-slate-700 leading-relaxed">
                  Complete technical support, preventive maintenance, on-site installation, calibration, and official warranty servicing.
                </p>
              </div>
            </div>

            <div className="pt-2 flex flex-wrap gap-4">
              <a
                href={BUSINESS_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer px-6 py-3 bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-bold rounded-xl transition-all shadow-md flex items-center gap-2"
              >
                <MessageSquare className="w-4 h-4 fill-current" />
                <span>Contact Management on WhatsApp</span>
              </a>
              <button
                onClick={() => onNavigate('products')}
                className="cursor-pointer px-5 py-3 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-semibold rounded-xl transition-colors flex items-center gap-1.5"
              >
                <span>View Equipment Catalog</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="lg:col-span-5 space-y-4"
          >
            <div className="rounded-3xl overflow-hidden border border-slate-200 bg-white shadow-md hover:border-emerald-400 transition-colors">
              <div className="p-3 bg-slate-50 flex items-center justify-center">
                <img
                  src="/images/client-uploads/upload_6.jpg"
                  alt="Kohinoor AV Digital Rostrum Installation in Pakistan"
                  className="w-full h-auto max-h-[380px] object-contain rounded-xl"
                />
              </div>
              <div className="p-4 bg-slate-50 border-t border-slate-200 text-xs">
                <p className="font-bold text-slate-900">Established 1978 · Islamabad</p>
                <p className="text-slate-500 text-[11px]">Audio Visual Equipment, Educational Equipment &amp; Business Systems</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SEPARATE BUSINESS PARTNERS SECTION */}
      <div className="bg-slate-100/70 py-14 border-y border-slate-200">
        <PartnersSection />
      </div>

      {/* After-Sales & Operational Pillars */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider">
            Service Commitment
          </span>
          <h2 className="text-2xl font-extrabold text-slate-900">
            After-Sales Support, Installation &amp; Warranty
          </h2>
          <p className="text-xs text-slate-600">
            Long-term institutional reliability backed by our Islamabad technical engineering crew.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              icon: ShieldCheck,
              title: 'Official Hardware Warranty',
              desc: 'Every interactive flat panel, projector, digital podium, audio system, conference unit, and teleprompter includes verified warranty protection.'
            },
            {
              icon: Wrench,
              title: 'Installation & Maintenance',
              desc: 'Our engineers manage site surveys, structural ceiling/wall mounting, clean cable routing, audio calibration, faculty training, and preventive maintenance.'
            },
            {
              icon: Truck,
              title: 'Nationwide Technical Support',
              desc: 'Dedicated field support and insured hardware dispatch across Islamabad, Rawalpindi, Lahore, Karachi, Peshawar, Multan, Faisalabad, and regional campuses.'
            }
          ].map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="p-6 bg-white rounded-3xl border border-slate-200/90 space-y-3 shadow-xs hover:border-emerald-400 transition-colors"
              >
                <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-sm font-bold text-slate-900">{pillar.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Verified Installations */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <div className="text-xs font-bold text-emerald-700 uppercase tracking-wider">
            Proven Nationwide Deployments
          </div>
          <h2 className="text-2xl font-extrabold text-slate-900">Real Hardware in Action</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-xs">
            <div className="h-64 sm:h-80 overflow-hidden bg-slate-50 border-b border-slate-100 p-3 flex items-center justify-center">
              <img
                src="/images/client-uploads/upload_6.jpg"
                alt="Digital Rostrum Deployment in University Lecture Hall"
                className="w-full h-full object-contain hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-6 space-y-2">
              <h3 className="text-base font-bold text-slate-900">Interactive Rostrum in University Auditorium</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Integrated 21.5" capacitive touch screen, dual gooseneck microphones, 60W amplification, and unified AV switching.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-xs">
            <div className="h-64 sm:h-80 overflow-hidden bg-slate-50 border-b border-slate-100 p-3 flex items-center justify-center">
              <img
                src="/images/client-uploads/upload_7.jpg"
                alt="Institutional Presentation Setup with Steel Rostrum"
                className="w-full h-full object-contain hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-6 space-y-2">
              <h3 className="text-base font-bold text-slate-900">Executive Lectern in National Seminar Hall</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Cold-rolled steel rostrum built for university convocations, keynote speeches, and institutional briefings.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Headquarters Address Card */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-emerald-700 via-emerald-600 to-emerald-800 text-white flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-xl border border-emerald-500/40">
          <div className="space-y-2 max-w-xl">
            <div className="text-xs font-bold text-emerald-400 uppercase tracking-wider">
              Head Office · Blue Area, Islamabad
            </div>
            <h3 className="text-xl font-bold text-white">United Plaza, 2nd Floor, Fazlehaq Road</h3>
            <p className="text-xs text-emerald-100/80 leading-relaxed">
              We welcome institutional procurement committees, university faculty, and corporate clients for live hardware demonstrations and technical consultations.
            </p>
          </div>
          <div className="space-y-2 text-xs shrink-0">
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-emerald-400" />
              <span>{BUSINESS_INFO.phone} (WhatsApp)</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-emerald-400" />
              <span>{BUSINESS_INFO.email}</span>
            </div>
            <button
              onClick={() => onNavigate('contact')}
              className="mt-2 px-5 py-2.5 bg-emerald-700 hover:bg-emerald-600 text-white font-bold rounded-xl transition-colors cursor-pointer block text-center shadow-md"
            >
              Get Directions &amp; Contact Us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
