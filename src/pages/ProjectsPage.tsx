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

  const filteredProjects = selectedCategory === 'all'
    ? PROJECTS
    : PROJECTS.filter((p) => p.category.toLowerCase().includes(selectedCategory.toLowerCase()));

  return (
    <div className="space-y-16 py-10 max-w-7xl mx-auto px-4 sm:px-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55 }}
        className="space-y-4 max-w-3xl"
      >
        <div className="text-xs font-bold text-blue-600 uppercase tracking-wider">
          Proven Track Record &amp; Institutional Trust
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
          Our Projects &amp; Proven Installations
        </h1>
        <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
          Explore genuine deployments of our digital podiums, interactive flat panels, conference microphone networks, and auditorium stage audio-visual systems across premier universities, research institutes, and corporate halls in Pakistan.
        </p>
      </motion.div>

      {/* Featured Case Study: NUST NCAI */}
      <motion.div
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.6 }}
        className="bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white rounded-3xl overflow-hidden border border-blue-900/60 shadow-2xl"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-8 sm:p-12">
          <div className="lg:col-span-7 space-y-5">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-bold border border-blue-400/30">
              <Award className="w-3.5 h-3.5" />
              <span>Landmark Reference Project</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white leading-snug">
              National Centre of Artificial Intelligence (NCAI) at NUST
            </h2>
            <div className="flex items-center gap-2 text-xs text-blue-200">
              <MapPin className="w-4 h-4 text-blue-400" />
              <span>National University of Sciences &amp; Technology (NUST), Islamabad</span>
            </div>
            <p className="text-xs sm:text-sm text-blue-100/85 leading-relaxed">
              Kohinoor Audio Visual was selected to deliver the large-format 43-inch interactive digital presentation podium for the National Centre of Artificial Intelligence. Featuring custom institutional branding, responsive 4K touch presentation capability, and seamless audio integration, this rostrum is used during high-level research symposiums and national technological briefings.
            </p>

            <div className="space-y-2 pt-1 text-xs text-blue-100">
              <div className="font-bold text-white">Equipment Delivered &amp; Integrated:</div>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                  <span>43" 4K Commercial Touch Podium</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                  <span>Laser-Engraved NCAI / NUST Branding</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                  <span>Central AV Switching Interface</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                  <span>Acoustic Gooseneck Speech Mics</span>
                </li>
              </ul>
            </div>

            <div className="pt-2 flex flex-wrap gap-3">
              <a
                href={`${BUSINESS_INFO.whatsappUrl}?text=${encodeURIComponent('Hello Kohinoor AV, I would like to order / get specs for the 43-Inch Digital Podium model deployed at NUST NCAI.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold rounded-xl transition-all shadow-md flex items-center gap-2"
              >
                <MessageSquare className="w-4 h-4 fill-current" />
                <span>Order on WhatsApp</span>
              </a>
              <button
                onClick={() => onOpenQuoteModal('NUST NCAI Model 43" Digital Podium')}
                className="cursor-pointer px-5 py-3 bg-white/10 hover:bg-white/20 text-white text-xs font-semibold rounded-xl border border-white/20 backdrop-blur-md transition-colors"
              >
                Request Similar Solution
              </button>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-2xl overflow-hidden border border-white/20 bg-slate-900 shadow-2xl">
              <img
                src="/images/products/product_8.jpg"
                alt="NCAI NUST Islamabad Digital Podium Installation"
                className="w-full h-auto object-cover hover:scale-104 transition-transform duration-500"
              />
              <div className="p-3 bg-slate-950/90 text-xs text-blue-300 font-medium">
                Official Photo: Digital Rostrum on-site at NCAI / NUST Islamabad
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Projects Grid: Clean 2-Column Grid */}
      <div className="space-y-8">
        <div className="flex items-center justify-between">
          <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
            Selected Turnkey Client Deployments
          </h2>
          <span className="text-xs text-slate-500 font-medium">
            {filteredProjects.length} Verified Installations
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {filteredProjects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: (idx % 2) * 0.12 }}
              className="bg-white rounded-3xl border border-slate-200/90 overflow-hidden shadow-xs hover:border-blue-500 hover:shadow-xl transition-all duration-300 flex flex-col hover:-translate-y-1"
            >
              <div className="aspect-16/10 bg-slate-100 overflow-hidden border-b border-slate-100 relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-106 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 bg-blue-900/90 text-white backdrop-blur-sm px-3 py-1 rounded-xl text-[11px] font-bold border border-blue-700/50">
                  {project.category}
                </div>
              </div>

              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-xs text-slate-500">
                    <Building2 className="w-3.5 h-3.5 text-blue-600" />
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
                    <div className="text-[11px] font-bold text-blue-600 uppercase tracking-wider mb-2">
                      Equipment Installed:
                    </div>
                    <ul className="space-y-1.5 text-xs text-slate-700">
                      {project.equipmentSupplied.map((eq, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0" />
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
                    className="cursor-pointer text-xs font-bold text-blue-600 hover:text-blue-700 flex items-center gap-1.5"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>Inquire via WhatsApp</span>
                  </a>
                  <button
                    onClick={() => onOpenQuoteModal(`Similar to: ${project.title}`)}
                    className="cursor-pointer text-xs font-semibold text-slate-600 hover:text-slate-900 flex items-center gap-1"
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

      {/* Inquiry Call to Action in Blue */}
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.5 }}
        className="bg-gradient-to-r from-blue-700 to-blue-900 text-white rounded-3xl p-8 sm:p-10 border border-blue-600/50 flex flex-col md:flex-row items-center justify-between gap-6 max-w-5xl mx-auto shadow-xl"
      >
        <div className="space-y-1 text-center md:text-left">
          <h3 className="text-lg font-bold text-white">Planning an AV Project in Islamabad or Nationwide?</h3>
          <p className="text-xs text-blue-100">
            Our engineers can conduct site surveys, room acoustic analysis, and create tailored hardware bills of materials.
          </p>
        </div>
        <a
          href={`${BUSINESS_INFO.whatsappUrl}?text=${encodeURIComponent('Hello Kohinoor AV, I would like to book a site survey / consultation for an AV project.')}`}
          target="_blank"
          rel="noopener noreferrer"
          className="cursor-pointer px-6 py-3 bg-white hover:bg-blue-50 text-blue-900 text-xs font-bold rounded-xl whitespace-nowrap transition-colors flex items-center gap-2 shadow-md"
        >
          <MessageSquare className="w-4 h-4 fill-current text-blue-700" />
          <span>Chat on WhatsApp</span>
        </a>
      </motion.div>
    </div>
  );
};
