import React from 'react';
import { BUSINESS_PARTNERS } from '../data/products';
import { Globe2 } from 'lucide-react';
import { motion } from 'motion/react';

export const PartnersSection: React.FC = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-8 space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3">
        <div>
          <span className="text-[11px] font-bold text-emerald-700 uppercase tracking-wider">
            Global Alliances
          </span>
          <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
            Business Partners &amp; Authorized Manufacturers
          </h2>
        </div>
        <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500">
          <Globe2 className="w-4 h-4 text-emerald-700" />
          <span>Official Hardware Distribution Since 1978</span>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {BUSINESS_PARTNERS.map((partner, idx) => (
          <motion.div
            key={partner.id}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.35, delay: idx * 0.04 }}
            className="bg-white rounded-2xl border border-slate-200/90 p-5 flex flex-col justify-between space-y-3 hover:border-emerald-500 hover:shadow-md transition-all"
          >
            <div className="space-y-2">
              <div className="flex items-center justify-between gap-2">
                <div className="text-base font-black tracking-tight text-slate-900 font-mono">
                  {partner.shortCode}
                </div>
                <span className="text-[11px] font-semibold text-emerald-700">
                  {partner.origin}
                </span>
              </div>
              <h3 className="text-xs font-bold text-slate-900 leading-snug">
                {partner.name}
              </h3>
            </div>
            <p className="text-[11px] text-slate-500 leading-relaxed pt-2 border-t border-slate-100">
              {partner.specialty}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
