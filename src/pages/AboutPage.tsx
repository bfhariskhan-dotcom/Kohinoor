import React from 'react';
import { PageId } from '../types';
import { BUSINESS_INFO } from '../data/products';
import {
  ShieldCheck,
  Wrench,
  Phone,
  Mail,
  Truck,
  ArrowRight,
  MessageSquare
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
            Corporate Profile &amp; Identity
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            About Kohinoor Audio Visual Education Business System
          </h1>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Headquartered in the commercial heart of Islamabad at United Plaza, Blue Area, we are a leading specialist supplier and systems integrator of professional audio-visual equipment, smart classrooms, and presentation technologies across Pakistan.
          </p>
        </motion.div>
      </section>

      {/* Main Narrative Split */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -45 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-5 text-xs sm:text-sm text-slate-700 leading-relaxed"
          >
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
              Transforming Pakistan’s Classrooms, Auditoriums &amp; Boardrooms
            </h2>
            <p>
              Founded with the objective of providing educational institutions and corporate enterprises with international-standard audio-visual systems, <strong>Kohinoor Audio Visual Education Business System</strong> has grown into one of Pakistan's most dependable AV hardware partners.
            </p>
            <p>
              We bridge modern audio-visual technology and real-world educational infrastructure. Whether a university requires an all-in-one steel digital rostrum with integrated touch control and amplification, a medical faculty needs 86-inch 4K interactive flat panels with multi-touch stylus support, or a ministry requires a secured conference discussion microphone network, Kohinoor AV provides turnkey hardware supply, physical installation, and ongoing maintenance.
            </p>
            <p>
              Our portfolio includes landmark deployments such as the <strong>National Centre of Artificial Intelligence (NCAI) at NUST Islamabad</strong>, premier engineering universities, convocation halls, and government boardrooms nationwide.
            </p>

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
            initial={{ opacity: 0, x: 45 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-5 space-y-4"
          >
            <div className="rounded-3xl overflow-hidden border border-slate-200 bg-white shadow-md hover:border-emerald-400 transition-colors">
              <img
                src="/images/client-uploads/upload_6.jpg"
                alt="Kohinoor AV Digital Rostrum Installation in Pakistan"
                className="w-full h-auto object-cover"
              />
              <div className="p-4 bg-slate-50 border-t border-slate-200 text-xs">
                <p className="font-bold text-slate-900">Real Campus Implementation</p>
                <p className="text-slate-500 text-[11px]">Direct supplier of Cold-Rolled Steel Digital Rostrums in Islamabad</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Core Values & Pillars */}
      <section className="bg-slate-100/70 py-16 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-10">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-2xl mx-auto space-y-2"
          >
            <h2 className="text-2xl font-extrabold text-slate-900">Our Core Operational Pillars</h2>
            <p className="text-xs text-slate-600">The engineering standards that define our work.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: ShieldCheck,
                title: 'Zero Compromise on Hardware Quality',
                desc: 'We only supply commercial-grade interactive displays with tempered 4mm safety glass, heavy gauge steel rostrums, and genuine audio transducers built for heavy daily institutional usage.'
              },
              {
                icon: Wrench,
                title: 'Turnkey Technical Execution',
                desc: 'We do not just ship boxes. Our Islamabad-based technical crew handles on-site site surveys, secure structural bracket mounting, professional cable routing, audio acoustic calibration, and faculty training.'
              },
              {
                icon: Truck,
                title: 'Nationwide Logistical Reach',
                desc: 'With verified dispatch channels across Pakistan, we routinely deliver and deploy equipment in Islamabad, Rawalpindi, Lahore, Karachi, Peshawar, Multan, Faisalabad, and regional university campuses.'
              }
            ].map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="p-6 bg-white rounded-3xl border border-slate-200/90 space-y-3 shadow-xs hover:border-emerald-400 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-sm font-bold text-slate-900">{pillar.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {pillar.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Verified Project Installation Gallery (Upload 6 & 7) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <div className="text-xs font-bold text-emerald-700 uppercase tracking-wider">
            Real Hardware in Action
          </div>
          <h2 className="text-2xl font-extrabold text-slate-900">Proven Track Record Across Pakistan</h2>
          <p className="text-xs text-slate-600">
            From smart amphitheatres to executive committee rooms, explore our actual hardware installations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-xs hover:border-emerald-300 transition-colors">
            <div className="h-64 sm:h-80 overflow-hidden bg-slate-950">
              <img
                src="/images/client-uploads/upload_6.jpg"
                alt="Digital Rostrum Deployment in University Lecture Hall"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-6 space-y-2">
              <h3 className="text-base font-bold text-slate-900">Interactive Rostrum in University Auditorium</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Featuring integrated 21.5" capacitive touch display, dual gooseneck condenser microphones, amplifier with column speakers, and unified AV connectivity.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-xs hover:border-emerald-300 transition-colors">
            <div className="h-64 sm:h-80 overflow-hidden bg-slate-950">
              <img
                src="/images/client-uploads/upload_7.jpg"
                alt="Institutional Presentation Setup with Steel Rostrum"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-6 space-y-2">
              <h3 className="text-base font-bold text-slate-900">Executive Lectern in National Seminar Hall</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Heavy-duty cold-rolled steel rostrum engineered for convocation ceremonies, keynote speeches, and institutional hybrid broadcasts.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Nationwide Coverage Cities */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto space-y-2"
        >
          <div className="text-xs font-bold text-emerald-700 uppercase tracking-wider">
            Supply &amp; Field Support
          </div>
          <h2 className="text-2xl font-extrabold text-slate-900">Nationwide Service Network</h2>
          <p className="text-xs text-slate-600">
            Prompt delivery, on-site commissioning, and warranty support across Pakistan.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {[
            { city: 'Islamabad & Rawalpindi', role: 'Head Office & Technical Hub', detail: 'United Plaza, Fazlehaq Road, Blue Area' },
            { city: 'Lahore & Punjab', role: 'University & College Logistics', detail: 'Direct delivery & installation across Punjab' },
            { city: 'Karachi & Sindh', role: 'Corporate & Institutional AV', detail: 'Rapid commercial delivery & technical support' },
            { city: 'Peshawar & Multan', role: 'Regional Education Supply', detail: 'Dedicated support for higher education projects' }
          ].map((loc, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.94 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="p-5 bg-white rounded-2xl border border-slate-200/90 space-y-1.5 shadow-xs hover:border-emerald-300 transition-colors"
            >
              <div className="text-xs font-bold text-slate-900">{loc.city}</div>
              <div className="text-[11px] font-bold text-emerald-700">{loc.role}</div>
              <p className="text-[11px] text-slate-500">{loc.detail}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Headquarters Address Card */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.55 }}
          className="p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-[#072115] via-[#0d3420] to-[#05180f] text-white flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-xl border border-emerald-900/60"
        >
          <div className="space-y-2 max-w-xl">
            <div className="text-xs font-bold text-emerald-400 uppercase tracking-wider">
              Visit Our Islamabad Office
            </div>
            <h3 className="text-xl font-bold text-white">United Plaza, Blue Area, Islamabad</h3>
            <p className="text-xs text-emerald-100/80 leading-relaxed">
              We welcome institutional representatives, procurement committees, and educational administrators to visit us for live equipment demonstrations and customized technical consultations.
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
        </motion.div>
      </section>
    </div>
  );
};
