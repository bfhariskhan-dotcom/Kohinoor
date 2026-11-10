import React, { useState, useEffect } from 'react';
import { Award, CheckCircle2, ShieldCheck, Truck, Users, Sparkles, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface StatSlide {
  metric: string;
  label: string;
  subtext: string;
  badge: string;
  icon: React.ElementType;
}

const STATS: StatSlide[] = [
  {
    metric: '15+ Years',
    label: 'Industry Experience in Pakistan',
    subtext: 'Engineering AV & educational tech solutions since 2009',
    badge: 'Established Trust',
    icon: Award
  },
  {
    metric: '500+ Projects',
    label: 'Classrooms & Auditoriums Equipped',
    subtext: 'Universities, colleges, schools & government chambers nationwide',
    badge: 'Proven Deployments',
    icon: CheckCircle2
  },
  {
    metric: '6 Major Cities',
    label: 'Direct Nationwide Logistics Network',
    subtext: 'Islamabad, Rawalpindi, Lahore, Karachi, Peshawar, Multan & more',
    badge: 'Nationwide Logistics',
    icon: Truck
  },
  {
    metric: '100% Genuine',
    label: 'Commercial Hardware & Warranty',
    subtext: 'Cold-rolled steel rostrums, 4K displays & Sennheiser/Beterva audio',
    badge: 'Official Warranty',
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
    <div className="bg-white rounded-3xl shadow-[0_20px_50px_rgba(21,128,61,0.08)] border border-emerald-100 overflow-hidden">
      {/* Desktop Grid Layout (4 Columns) with Subtle Green Highlights */}
      <div className="hidden md:grid grid-cols-4 divide-x divide-emerald-50 p-6 sm:p-8">
        {STATS.map((stat, idx) => {
          const Icon = stat.icon;
          return (
            <div
              key={idx}
              className={`p-4 transition-all duration-300 rounded-2xl ${
                activeIdx === idx ? 'bg-emerald-50/70 scale-[1.02]' : 'hover:bg-slate-50'
              }`}
              onMouseEnter={() => setActiveIdx(idx)}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-emerald-100/80 text-emerald-800">
                  {stat.badge}
                </span>
                <Icon className="w-4 h-4 text-emerald-700" />
              </div>
              <div className="text-3xl font-extrabold text-emerald-800 tracking-tight tabular-nums">
                {stat.metric}
              </div>
              <div className="text-xs font-bold text-slate-900 mt-1">
                {stat.label}
              </div>
              <div className="text-[11px] text-slate-500 mt-0.5 leading-relaxed">
                {stat.subtext}
              </div>
            </div>
          );
        })}
      </div>

      {/* Mobile Auto-Playing Slide Card as Requested ("इसको स्लाइड वाला कुछ कर दो, अच्छा लगेगा") */}
      <div className="md:hidden p-6 relative">
        <div className="flex items-center justify-between mb-3">
          <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-800">
            {STATS[activeIdx].badge}
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
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.35 }}
            className="space-y-1.5"
          >
            <div className="text-3xl font-extrabold text-emerald-800 tracking-tight">
              {STATS[activeIdx].metric}
            </div>
            <div className="text-sm font-bold text-slate-900">
              {STATS[activeIdx].label}
            </div>
            <div className="text-xs text-slate-600 leading-relaxed">
              {STATS[activeIdx].subtext}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Mobile Slide Dots */}
        <div className="flex items-center justify-center gap-1.5 mt-4 pt-3 border-t border-slate-100">
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
