import React, { useState, useEffect } from 'react';
import { Award, CheckCircle2, ShieldCheck, Truck, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface StatSlide {
  metric: string;
  label: string;
  subtext: string;
  icon: React.ElementType;
}

const STATS: StatSlide[] = [
  {
    metric: '15+ Years',
    label: 'Industry Experience',
    subtext: 'AV engineering & supply since 2009',
    icon: Award
  },
  {
    metric: '500+ Projects',
    label: 'Rooms Equipped',
    subtext: 'Universities, schools & chambers',
    icon: CheckCircle2
  },
  {
    metric: '6 Major Cities',
    label: 'Nationwide Delivery',
    subtext: 'Islamabad, Lahore, Karachi & more',
    icon: Truck
  },
  {
    metric: '100% Genuine',
    label: 'Official Warranty',
    subtext: 'Certified commercial AV hardware',
    icon: ShieldCheck
  }
];

export const StatsSlider: React.FC = () => {
  const [activeIdx, setActiveIdx] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % STATS.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-white rounded-2xl shadow-[0_14px_35px_rgba(5,150,105,0.08)] border border-emerald-100 overflow-hidden">
      {/* Desktop 4-Column Strip */}
      <div className="hidden md:grid grid-cols-4 divide-x divide-emerald-100/80 p-4 sm:p-5">
        {STATS.map((stat, idx) => {
          const Icon = stat.icon;
          return (
            <div
              key={idx}
              className={`p-3.5 transition-all duration-300 rounded-xl ${
                activeIdx === idx ? 'bg-emerald-50/80' : 'hover:bg-slate-50'
              }`}
              onMouseEnter={() => setActiveIdx(idx)}
            >
              <div className="flex items-center justify-between mb-1">
                <span className="text-2xl font-extrabold text-emerald-700 tracking-tight tabular-nums">
                  {stat.metric}
                </span>
                <Icon className="w-4 h-4 text-emerald-600" />
              </div>
              <div className="text-xs font-bold text-slate-900">
                {stat.label}
              </div>
              <div className="text-[11px] text-slate-500 mt-0.5">
                {stat.subtext}
              </div>
            </div>
          );
        })}
      </div>

      {/* Mobile Compact Auto-Playing Slide */}
      <div className="md:hidden p-5 relative">
        <div className="flex items-center justify-between mb-2">
          <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-700">
            Kohinoor AV Track Record
          </span>
          <div className="flex items-center gap-1">
            <button
              onClick={() => setActiveIdx((prev) => (prev === 0 ? STATS.length - 1 : prev - 1))}
              className="p-1.5 rounded-lg bg-slate-100 hover:bg-emerald-100 text-slate-600 transition-colors"
              aria-label="Previous stat"
            >
              <ChevronLeft className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() => setActiveIdx((prev) => (prev + 1) % STATS.length)}
              className="p-1.5 rounded-lg bg-slate-100 hover:bg-emerald-100 text-slate-600 transition-colors"
              aria-label="Next stat"
            >
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeIdx}
            initial={{ opacity: 0, x: 15 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -15 }}
            transition={{ duration: 0.3 }}
            className="space-y-0.5"
          >
            <div className="text-2xl font-extrabold text-emerald-700 tracking-tight tabular-nums">
              {STATS[activeIdx].metric}
            </div>
            <div className="text-sm font-bold text-slate-900">
              {STATS[activeIdx].label}
            </div>
            <div className="text-xs text-slate-500">
              {STATS[activeIdx].subtext}
            </div>
          </motion.div>
        </AnimatePresence>

        <div className="flex items-center justify-center gap-1.5 mt-3 pt-2.5 border-t border-slate-100">
          {STATS.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveIdx(i)}
              className={`h-1.5 rounded-full transition-all ${
                activeIdx === i ? 'w-6 bg-emerald-600' : 'w-2 bg-slate-200'
              }`}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
