import React, { useState } from 'react';
import { PageId, GalleryItem } from '../types';
import { GALLERY_ITEMS } from '../data/gallery';
import { BUSINESS_INFO } from '../data/products';
import {
  MapPin,
  Building2,
  CheckCircle2,
  MessageSquare,
  Maximize2,
  X,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  Layers
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface GalleryPageProps {
  onNavigate: (page: PageId) => void;
  onOpenQuoteModal: (productName?: string) => void;
}

export const GalleryPage: React.FC<GalleryPageProps> = ({ onNavigate, onOpenQuoteModal }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  const filterTabs = [
    { id: 'all', label: 'All Installations', count: GALLERY_ITEMS.length },
    { id: 'podiums', label: 'Digital Podiums', count: GALLERY_ITEMS.filter((i) => i.category === 'podiums').length },
    { id: 'smart-classrooms', label: 'Smart Classrooms', count: GALLERY_ITEMS.filter((i) => i.category === 'smart-classrooms').length },
    { id: 'conference', label: 'Conference Systems', count: GALLERY_ITEMS.filter((i) => i.category === 'conference').length },
    { id: 'auditorium', label: 'Auditoriums & Stages', count: GALLERY_ITEMS.filter((i) => i.category === 'auditorium').length },
    { id: 'led-displays', label: 'Interactive 4K LEDs', count: GALLERY_ITEMS.filter((i) => i.category === 'led-displays').length }
  ];

  const filteredItems = activeCategory === 'all'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === activeCategory);

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!selectedItem) return;
    const currentIndex = filteredItems.findIndex((item) => item.id === selectedItem.id);
    const prevIndex = (currentIndex - 1 + filteredItems.length) % filteredItems.length;
    setSelectedItem(filteredItems[prevIndex]);
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!selectedItem) return;
    const currentIndex = filteredItems.findIndex((item) => item.id === selectedItem.id);
    const nextIndex = (currentIndex + 1) % filteredItems.length;
    setSelectedItem(filteredItems[nextIndex]);
  };

  const handleWhatsAppInquiry = (item: GalleryItem) => {
    const text = `Hello Kohinoor Audio Visual, I am inquiring about the equipment shown in your gallery: *${item.title}* (${item.location}). Please provide formal quotation and delivery information.`;
    window.open(`${BUSINESS_INFO.whatsappUrl}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <div className="space-y-12 py-10 max-w-7xl mx-auto px-4 sm:px-8">
      {/* Page Header */}
      <div className="space-y-4 max-w-3xl">
        <div className="text-xs font-bold text-emerald-700 uppercase tracking-wider">
          Verified Field Deployments · Pakistan
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
          Project &amp; Installation Gallery
        </h1>
        <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
          Explore real-world audio-visual installations deployed by Kohinoor Audio Visual across universities, government council chambers, executive auditoriums, and smart classrooms in Islamabad, Lahore, Peshawar, and nationwide.
        </p>
      </div>

      {/* Filter Tabs Bar (Horizontal scrolling on mobile) */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
        {filterTabs.map((tab) => {
          const isActive = activeCategory === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveCategory(tab.id)}
              className={`cursor-pointer px-4 py-2.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap flex items-center gap-2 ${
                isActive
                  ? 'bg-emerald-700 text-white shadow-md shadow-emerald-700/20'
                  : 'bg-white text-slate-700 border border-slate-200 hover:border-emerald-300 hover:bg-emerald-50/50'
              }`}
            >
              <span>{tab.label}</span>
              <span
                className={`text-[10px] px-1.5 py-0.2 rounded-full font-bold ${
                  isActive ? 'bg-emerald-800 text-white' : 'bg-slate-100 text-slate-600'
                }`}
              >
                {tab.count}
              </span>
            </button>
          );
        })}
      </div>

      {/* Responsive Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {filteredItems.map((item, idx) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: idx * 0.04 }}
            className="group bg-white rounded-3xl border border-slate-200/90 overflow-hidden shadow-xs hover:border-emerald-400 hover:shadow-xl transition-all duration-300 flex flex-col cursor-pointer"
            onClick={() => setSelectedItem(item)}
          >
            {/* Image Container with Zoom & Overlay */}
            <div className="relative aspect-4/3 w-full bg-slate-950 overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-black/20 opacity-80 group-hover:opacity-90 transition-opacity" />

              {/* Top Badges */}
              <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-2">
                <span className="px-2.5 py-1 rounded-full bg-emerald-900/90 text-white text-[10px] font-bold backdrop-blur-xs border border-emerald-500/30 flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-emerald-400" />
                  <span>{item.location}</span>
                </span>
                <span className="p-1.5 rounded-full bg-white/20 hover:bg-white/40 text-white backdrop-blur-xs transition-colors">
                  <Maximize2 className="w-3.5 h-3.5" />
                </span>
              </div>

              {/* Bottom Label on Image */}
              <div className="absolute bottom-3 left-3 right-3">
                <span className="text-[10px] uppercase tracking-wider font-extrabold text-emerald-300 block">
                  {item.categoryLabel}
                </span>
                <h3 className="text-sm font-bold text-white line-clamp-1 leading-snug">
                  {item.title}
                </h3>
              </div>
            </div>

            {/* Card Content Body */}
            <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-[11px] font-bold text-emerald-800">
                  <Building2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span className="line-clamp-1">{item.clientType}</span>
                </div>
                <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Equipment Tags */}
              <div className="pt-2 border-t border-slate-100 space-y-1.5">
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                  Key Equipment:
                </span>
                <div className="flex flex-wrap gap-1">
                  {item.equipmentDeployed.slice(0, 2).map((eq, i) => (
                    <span
                      key={i}
                      className="px-2 py-0.5 bg-slate-100 text-slate-700 text-[10px] rounded-md font-medium"
                    >
                      {eq}
                    </span>
                  ))}
                  {item.equipmentDeployed.length > 2 && (
                    <span className="px-1.5 py-0.5 bg-emerald-50 text-emerald-700 text-[10px] rounded-md font-bold">
                      +{item.equipmentDeployed.length - 2} more
                    </span>
                  )}
                </div>
              </div>

              {/* Action */}
              <div className="pt-2 flex items-center justify-between text-xs font-bold text-emerald-700 group-hover:text-emerald-800">
                <span>View Full Details &amp; Equipment</span>
                <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Lightbox Modal with Full-Resolution Preview & Technical Specs */}
      <AnimatePresence>
        {selectedItem && (
          <div
            className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/85 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6"
            onClick={() => setSelectedItem(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.94 }}
              transition={{ duration: 0.2 }}
              className="relative w-full max-w-4xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden my-6"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedItem(null)}
                className="absolute top-4 right-4 z-20 p-2 text-white bg-slate-900/70 hover:bg-slate-900 rounded-full backdrop-blur-xs transition-colors cursor-pointer"
                aria-label="Close dialog"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Navigation Arrows */}
              <button
                onClick={handlePrev}
                className="absolute left-4 top-1/3 -translate-y-1/2 z-20 p-2.5 text-white bg-slate-900/60 hover:bg-slate-900 rounded-full backdrop-blur-xs transition-colors cursor-pointer"
                aria-label="Previous photo"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={handleNext}
                className="absolute right-4 top-1/3 -translate-y-1/2 z-20 p-2.5 text-white bg-slate-900/60 hover:bg-slate-900 rounded-full backdrop-blur-xs transition-colors cursor-pointer"
                aria-label="Next photo"
              >
                <ChevronRight className="w-5 h-5" />
              </button>

              <div className="grid grid-cols-1 lg:grid-cols-12 max-h-[85vh] overflow-y-auto">
                {/* Large Preview Photo (7 cols) */}
                <div className="lg:col-span-7 bg-slate-950 flex items-center justify-center relative min-h-[300px] lg:min-h-[460px]">
                  <img
                    src={selectedItem.image}
                    alt={selectedItem.title}
                    className="w-full h-full object-contain max-h-[500px]"
                  />
                  {selectedItem.highlightBadge && (
                    <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-emerald-700 text-white text-[10px] font-bold shadow-md">
                      {selectedItem.highlightBadge}
                    </div>
                  )}
                </div>

                {/* Technical Information Sidebar (5 cols) */}
                <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between space-y-6 bg-slate-50">
                  <div className="space-y-4">
                    <div>
                      <div className="text-[10px] font-bold text-emerald-700 uppercase tracking-wider">
                        {selectedItem.categoryLabel}
                      </div>
                      <h2 className="text-lg sm:text-xl font-extrabold text-slate-900 mt-0.5 leading-snug">
                        {selectedItem.title}
                      </h2>
                    </div>

                    <div className="space-y-2 text-xs">
                      <div className="flex items-center gap-2 text-slate-700">
                        <MapPin className="w-4 h-4 text-emerald-700 shrink-0" />
                        <span className="font-semibold">{selectedItem.location}</span>
                      </div>
                      <div className="flex items-center gap-2 text-slate-700">
                        <Building2 className="w-4 h-4 text-emerald-700 shrink-0" />
                        <span>{selectedItem.clientType}</span>
                      </div>
                    </div>

                    <div className="pt-2 border-t border-slate-200">
                      <p className="text-xs text-slate-600 leading-relaxed">
                        {selectedItem.description}
                      </p>
                    </div>

                    <div className="pt-2 space-y-2">
                      <span className="text-xs font-bold text-slate-900 block">
                        Hardware &amp; Systems Deployed:
                      </span>
                      <ul className="space-y-1.5 text-xs text-slate-700">
                        {selectedItem.equipmentDeployed.map((eq, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                            <span>{eq}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="pt-4 border-t border-slate-200 space-y-2">
                    <button
                      onClick={() => handleWhatsAppInquiry(selectedItem)}
                      className="cursor-pointer w-full py-3 bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-bold rounded-xl shadow-md transition-colors flex items-center justify-center gap-2"
                    >
                      <MessageSquare className="w-4 h-4 fill-current" />
                      <span>Order on WhatsApp</span>
                    </button>
                    <button
                      onClick={() => {
                        setSelectedItem(null);
                        onOpenQuoteModal(selectedItem.title);
                      }}
                      className="cursor-pointer w-full py-2.5 bg-white hover:bg-slate-100 text-slate-800 text-xs font-semibold rounded-xl border border-slate-200 transition-colors"
                    >
                      Request Formal Quote
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
