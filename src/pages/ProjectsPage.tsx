import React, { useState } from 'react';
import { PageId } from '../types';
import { PROJECTS } from '../data/projects';
import { BUSINESS_INFO } from '../data/products';
import { Building2, MapPin, CheckCircle2, MessageSquare, ArrowRight, Award } from 'lucide-react';
import { motion } from 'motion/react';

interface ProjectsPageProps {
  onNavigate: (page: PageId) => void;
  onOpenQuoteModal: (productName?: string) => void;
}

export const ProjectsPage: React.FC<ProjectsPageProps> = ({
  onNavigate,
  onOpenQuoteModal
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const clientShowcases = [
    {
      id: 'multinational-council-room',
      title: 'Multinational Council Conference Chamber Integration',
      client: 'Diplomatic Mission & Inter-Governmental Council',
      location: 'Islamabad, Pakistan',
      category: 'Conference Systems',
      image: '/images/client-uploads/upload_2.jpg',
      description: 'Turnkey installation of multi-seat boardroom council table with Chairman and Delegate conference microphones, central audio distribution, and multi-display presentation system.',
      equipmentSupplied: [
        'Chairman Priority Microphone Units',
        'Multi-Seat Delegate Units with Ring LED',
        'Wall Display & Video Conferencing',
        'Acoustic Feedback Suppression System'
      ]
    },
    {
      id: 'beterva-lecture-podium',
      title: 'Beterva Digital Rostrum Deployment for University Lecture Hall',
      client: 'Premier University Tiered Amphitheater',
      location: 'Islamabad, Pakistan',
      category: 'Digital Podiums',
      image: '/images/client-uploads/upload_3.jpg',
      description: 'Supply and mounting of commercial heavy-duty steel digital teaching rostrum with internal PC, touch presentation monitor, and microphone audio amplification.',
      equipmentSupplied: [
        'Digital Rostrum with 21.5" Multi-Touch Screen',
        'Internal Master AV Switcher & Cable Tray',
        'Dual Gooseneck Presentation Microphones',
        'Integrated 60W Sound Driver'
      ]
    },
    {
      id: 'nust-ncai-flagship',
      title: 'National Centre of Artificial Intelligence (NCAI) at NUST',
      client: 'NUST Sector H-12 Islamabad',
      location: 'Islamabad, Pakistan',
      category: 'Digital Podiums',
      image: '/images/products/product_8.jpg',
      description: 'Delivery of 43-inch large-format interactive touch presentation rostrum for national AI research symposiums, diplomatic briefings, and executive lectures.',
      equipmentSupplied: [
        '43" 4K Commercial Touch Podium',
        'Laser-Engraved NCAI / NUST Crest',
        'Central AV Switching Interface',
        'Acoustic Gooseneck Speech Mics'
      ]
    },
    {
      id: 'convocation-stage-system',
      title: 'Auditorium Stage Teleprompter & Sound Reinforcement',
      client: 'Higher Education Convocation Hall',
      location: 'Lahore, Punjab',
      category: 'Smart Classrooms',
      image: '/images/client-uploads/upload_5.jpg',
      description: 'Auditorium stage confidence prompters, wireless vocal microphone sets, and digital rostrum installation for university convocations and international conferences.',
      equipmentSupplied: [
        'Stage Floor Confidence Teleprompters',
        'UHF True Diversity Vocal Microphones',
        'Digital Smart Teaching Rostrum',
        'Line Array Stage Sound System'
      ]
    }
  ];

  return (
    <div className="space-y-16 py-10 max-w-7xl mx-auto px-4 sm:px-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55 }}
        className="space-y-3 max-w-3xl"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider">
          <Award className="w-3.5 h-3.5" />
          <span>Proven Track Record &amp; Institutional Trust</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
          Our Projects &amp; Proven Installations
        </h1>
        <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
          Explore genuine deployments of our digital podiums, interactive flat panels, conference microphone networks, and auditorium stage audio-visual systems across premier universities, research institutes, and corporate halls in Pakistan.
        </p>
        <div className="pt-2">
          <button
            onClick={() => onNavigate('gallery')}
            className="cursor-pointer px-5 py-2.5 bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-bold rounded-xl transition-colors shadow-sm inline-flex items-center gap-2"
          >
            <span>Open Photographic Gallery</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </motion.div>

      {/* Featured Case Study: Council Room Showcase (Real Upload Photo) */}
      <motion.div
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.6 }}
        className="bg-gradient-to-br from-[#072115] via-[#0d3420] to-[#05180f] text-white rounded-3xl overflow-hidden border border-emerald-900/60 shadow-2xl"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-8 sm:p-12">
          <div className="lg:col-span-7 space-y-4">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold border border-emerald-400/30">
              <Award className="w-3.5 h-3.5" />
              <span>Executive Diplomatic Showcase</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white leading-snug">
              Multinational Council Conference Chamber in Islamabad
            </h2>
            <div className="flex items-center gap-2 text-xs text-emerald-200">
              <MapPin className="w-4 h-4 text-emerald-400" />
              <span>Diplomatic &amp; Inter-Governmental Assembly, Islamabad</span>
            </div>
            <p className="text-xs sm:text-sm text-emerald-100/90 leading-relaxed">
              Kohinoor Audio Visual supplied, wired, and commissioned the multi-delegate discussion microphone setup for this executive council chamber. Features Chairman priority speech management, individual base monitors, and acoustic integration.
            </p>

            <div className="space-y-2 pt-1 text-xs text-emerald-100">
              <div className="font-bold text-white">Equipment Delivered &amp; Commissioned:</div>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Chairman Priority Unit &amp; Delegates</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>DSP Anti-Feedback Audio Processor</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Concealed Table Cable Raceways</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Wall Video &amp; Display Integration</span>
                </li>
              </ul>
            </div>

            <div className="pt-2 flex flex-wrap gap-3">
              <a
                href={`${BUSINESS_INFO.whatsappUrl}?text=${encodeURIComponent('Hello Kohinoor AV, I would like to inquire about conference room setups like your diplomatic council room project.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer px-6 py-3 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold rounded-xl transition-all shadow-md flex items-center gap-2"
              >
                <MessageSquare className="w-4 h-4 fill-current" />
                <span>Order on WhatsApp</span>
              </a>
              <button
                onClick={() => onOpenQuoteModal('Council Chamber Audio System')}
                className="cursor-pointer px-5 py-3 bg-white/10 hover:bg-white/20 text-white text-xs font-semibold rounded-xl border border-white/20 backdrop-blur-md transition-colors"
              >
                Request Similar Solution
              </button>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-2xl overflow-hidden border border-white/20 bg-slate-950 shadow-2xl">
              <img
                src="/images/client-uploads/upload_2.jpg"
                alt="Multinational Council Conference Chamber Installation"
                className="w-full h-auto object-cover hover:scale-104 transition-transform duration-500"
              />
              <div className="p-3 bg-slate-950/90 text-xs text-emerald-300 font-medium border-t border-emerald-900/50">
                Official Photo: Conference Microphones on-site in Islamabad
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Projects Grid: Clean 2-Column Grid */}
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
            Selected Turnkey Client Deployments
          </h2>
          <span className="text-xs text-slate-500 font-medium">
            {clientShowcases.length} Verified Installations
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {clientShowcases.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: (idx % 2) * 0.12 }}
              className="bg-white rounded-3xl border border-slate-200/90 overflow-hidden shadow-xs hover:border-emerald-600 hover:shadow-xl transition-all duration-300 flex flex-col hover:-translate-y-1"
            >
              <div className="aspect-16/10 bg-slate-950 overflow-hidden border-b border-slate-100 relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-106 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 bg-emerald-900/90 text-white backdrop-blur-sm px-3 py-1 rounded-xl text-[11px] font-bold border border-emerald-700/50">
                  {project.category}
                </div>
              </div>

              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-xs text-slate-500">
                    <Building2 className="w-3.5 h-3.5 text-emerald-700" />
                    <span className="font-bold text-slate-900">{project.client}</span>
                    <span aria-hidden="true">&middot;</span>
                    <span>{project.location}</span>
                  </div>

                  <h3 className="text-base font-extrabold text-slate-900 leading-snug">
                    {project.title}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="pt-2">
                    <div className="text-[11px] font-bold text-emerald-800 uppercase tracking-wider mb-2">
                      Equipment Installed:
                    </div>
                    <ul className="space-y-1.5 text-xs text-slate-700">
                      {project.equipmentSupplied.map((eq, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700 shrink-0" />
                          <span>{eq}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <a
                    href={`${BUSINESS_INFO.whatsappUrl}?text=${encodeURIComponent(`Hello Kohinoor AV, I would like to inquire about a turnkey solution similar to: ${project.title}`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cursor-pointer text-xs font-bold text-emerald-700 hover:text-emerald-800 flex items-center gap-1.5"
                  >
                    <MessageSquare className="w-3.5 h-3.5 fill-current" />
                    <span>Inquire on WhatsApp</span>
                  </a>
                  <button
                    onClick={() => onOpenQuoteModal(`Similar to: ${project.title}`)}
                    className="cursor-pointer text-xs font-semibold text-slate-600 hover:text-emerald-800 flex items-center gap-1"
                  >
                    <span>Formal Quote</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Inquiry Call to Action in Emerald */}
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.5 }}
        className="bg-emerald-700 text-white rounded-3xl p-8 sm:p-10 border border-emerald-600 flex flex-col md:flex-row items-center justify-between gap-6 max-w-5xl mx-auto shadow-xl"
      >
        <div className="space-y-1 text-center md:text-left">
          <h3 className="text-lg font-bold text-white">Planning an AV Project in Islamabad or Nationwide?</h3>
          <p className="text-xs text-emerald-100">
            Our engineers conduct site surveys, room acoustic analysis, and create tailored hardware bills of materials.
          </p>
        </div>
        <a
          href={`${BUSINESS_INFO.whatsappUrl}?text=${encodeURIComponent('Hello Kohinoor AV, I would like to book a site survey / consultation for an AV project.')}`}
          target="_blank"
          rel="noopener noreferrer"
          className="cursor-pointer px-6 py-3 bg-white hover:bg-emerald-50 text-emerald-800 text-xs font-bold rounded-xl whitespace-nowrap transition-colors flex items-center gap-2 shadow-md shrink-0"
        >
          <MessageSquare className="w-4 h-4 fill-current text-emerald-700" />
          <span>Chat on WhatsApp</span>
        </a>
      </motion.div>
    </div>
  );
};
