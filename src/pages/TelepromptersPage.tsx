import React, { useState } from 'react';
import { PageId, Product } from '../types';
import { PRODUCTS, BUSINESS_INFO } from '../data/products';
import { ProductCard } from '../components/ProductCard';
import { Tv, CheckCircle2, MessageSquare, Layers } from 'lucide-react';

interface TelepromptersPageProps {
  onNavigate: (page: PageId) => void;
  onSelectProduct: (product: Product) => void;
  onOpenQuoteModal: (productName?: string) => void;
}

const KING_MODEL_SPECS = [
  { model: 'TP27', size: '27 Inch', resolution: '1920 × 1080 Full HD', range: 'Up to 5–6 m', app: 'Broadcast Desk / E-Learning Studio' },
  { model: 'TP32', size: '32 Inch', resolution: '1920 × 1080 Full HD', range: 'Up to 7 m', app: 'TV Studio / Mid-Range Conference' },
  { model: 'TP43', size: '43 Inch', resolution: '3840 × 2160 4K UHD', range: 'Up to 10 m', app: 'Enterprise Boardroom / Stage' },
  { model: 'TP55', size: '55 Inch', resolution: '3840 × 2160 4K UHD', range: '12 – 15 m', app: 'Auditorium / Presidential Stage' },
  { model: 'TP65', size: '65 Inch', resolution: '3840 × 2160 4K UHD', range: '14 – 18 m', app: 'Grand Hall / Parliamentary Chamber' },
  { model: 'TP75', size: '75 Inch', resolution: '3840 × 2160 4K UHD', range: '15 – 22 m', app: 'Convention Hall / Convocation Stage' },
  { model: 'TP85', size: '85 Inch', resolution: '3840 × 2160 4K UHD', range: 'Up to 28 m', app: 'Mega-Venue / Wide Arena' },
  { model: 'TP100', size: '100 Inch', resolution: '3840 × 2160 4K UHD', range: 'Up to 35 m', app: 'National Stadium / Flagship Arena' }
];

export const TelepromptersPage: React.FC<TelepromptersPageProps> = ({
  onSelectProduct,
  onOpenQuoteModal
}) => {
  const [selectedModel, setSelectedModel] = useState<string>('TP43');
  const teleprompterProducts = PRODUCTS.filter((p) => p.category === 'teleprompters');
  const activeSpec = KING_MODEL_SPECS.find((m) => m.model === selectedModel) || KING_MODEL_SPECS[2];

  return (
    <div className="space-y-14 py-10 max-w-7xl mx-auto px-4 sm:px-8">
      {/* Header */}
      <div className="space-y-3 max-w-3xl">
        <div className="text-xs font-bold text-emerald-700 uppercase tracking-wider">
          Category 08 · King Manufacturer Series
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
          Professional Teleprompters
        </h1>
        <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
          Complete range of King broadcast, studio, and stage teleprompter systems from 27-inch studio hood rigs up to 100-inch auditorium &amp; convention floor prompters (TP27 through TP100). Engineered with 70/30 beamsplitter glass, high-brightness commercial panels, and multi-language Unicode software.
        </p>
      </div>

      {/* Hero Hardware Showcase */}
      <div className="bg-gradient-to-br from-[#062c1b] via-[#0a3d26] to-[#041f13] text-white rounded-3xl p-8 sm:p-12 border border-emerald-900/60 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center shadow-2xl">
        <div className="lg:col-span-6 space-y-5">
          <div className="text-xs font-bold text-emerald-300 uppercase tracking-wider flex items-center gap-1.5">
            <Tv className="w-4 h-4" />
            <span>King Teleprompter Lineup · TP27 to TP100</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white leading-snug">
            Precision Studio &amp; Stage Prompting Systems (27"–100")
          </h2>
          <p className="text-xs sm:text-sm text-emerald-100/85 leading-relaxed">
            Built for television broadcast desks, university lecture-capture studios, national convocations, and diplomatic keynotes. Supports HDMI, VGA, and 3G-SDI inputs with wireless speed controllers and dual-screen script synchronization.
          </p>

          <div className="space-y-2 text-xs text-emerald-100/90">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Full 8-Model Series: TP27, TP32, TP43, TP55, TP65, TP75, TP85 &amp; TP100</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>70/30 optical beamsplitter glass eliminates color shift on camera</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>English, Urdu, and Arabic Unicode script software compatibility</span>
            </div>
          </div>

          <div className="pt-2 flex flex-wrap gap-3">
            <a
              href={`${BUSINESS_INFO.whatsappUrl}?text=${encodeURIComponent(`Hello Kohinoor AV, I would like specifications and availability for King Teleprompter ${activeSpec.model} (${activeSpec.size}).`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer px-6 py-3 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold rounded-xl transition-all shadow-md flex items-center gap-2"
            >
              <MessageSquare className="w-4 h-4 fill-current" />
              <span>Inquire on WhatsApp</span>
            </a>
            <button
              onClick={() => onOpenQuoteModal(`King Teleprompter ${activeSpec.model} (${activeSpec.size})`)}
              className="cursor-pointer px-5 py-3 bg-white/10 hover:bg-white/20 text-white text-xs font-semibold rounded-xl border border-white/20 transition-colors"
            >
              Request Technical Proposal
            </button>
          </div>
        </div>

        <div className="lg:col-span-6 grid grid-cols-2 gap-3">
          <div className="rounded-2xl overflow-hidden border border-emerald-800/80 bg-slate-900 shadow-2xl col-span-2 aspect-16/10">
            <img
              src="/images/catalog/teleprompter-king-studio.jpg"
              alt="King Professional Studio Teleprompter System with Beamsplitter Glass"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Interactive Model & Size Selector */}
      <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 space-y-6 shadow-xs">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div>
            <div className="text-xs font-bold text-emerald-700 uppercase tracking-wider flex items-center gap-1.5">
              <Layers className="w-3.5 h-3.5" />
              <span>King Model Comparison Matrix</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 mt-1">
              Explore All 8 Teleprompter Sizes (27" to 100")
            </h2>
          </div>
        </div>

        {/* Model Selector Buttons */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1">
          {KING_MODEL_SPECS.map((m) => (
            <button
              key={m.model}
              onClick={() => setSelectedModel(m.model)}
              className={`cursor-pointer px-4 py-2 rounded-xl font-bold text-xs transition-all whitespace-nowrap shrink-0 tabular-nums ${
                selectedModel === m.model
                  ? 'bg-emerald-700 text-white shadow-md'
                  : 'bg-slate-100 text-slate-700 hover:bg-emerald-50 hover:text-emerald-800'
              }`}
            >
              {m.model} · {m.size}
            </button>
          ))}
        </div>

        {/* Highlighted Model Details */}
        <div className="p-6 bg-emerald-50/50 rounded-2xl border border-emerald-100 grid grid-cols-1 md:grid-cols-4 gap-4 items-center">
          <div>
            <div className="text-[11px] font-bold text-emerald-700 uppercase">King Model</div>
            <div className="text-xl font-extrabold text-slate-900 tabular-nums">{activeSpec.model}</div>
            <div className="text-xs text-slate-600 font-semibold">{activeSpec.size} Panel</div>
          </div>
          <div>
            <div className="text-[11px] font-bold text-slate-500 uppercase">Resolution</div>
            <div className="text-xs sm:text-sm font-bold text-slate-900 tabular-nums">{activeSpec.resolution}</div>
          </div>
          <div>
            <div className="text-[11px] font-bold text-slate-500 uppercase">Reading Range</div>
            <div className="text-xs sm:text-sm font-bold text-slate-900 tabular-nums">{activeSpec.range}</div>
          </div>
          <div>
            <div className="text-[11px] font-bold text-slate-500 uppercase">Recommended Venue</div>
            <div className="text-xs font-bold text-slate-900">{activeSpec.app}</div>
          </div>
        </div>

        {/* Full Comparison Table */}
        <div className="overflow-x-auto rounded-2xl border border-slate-200">
          <table className="w-full text-xs text-left text-slate-700 border-collapse">
            <thead>
              <tr className="bg-slate-50 text-slate-900 border-b border-slate-200 font-bold">
                <th className="py-3 px-4">Model</th>
                <th className="py-3 px-4">Manufacturer</th>
                <th className="py-3 px-4">Screen Size</th>
                <th className="py-3 px-4">Panel Resolution</th>
                <th className="py-3 px-4">Reading Range</th>
                <th className="py-3 px-4">Application</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 tabular-nums">
              {KING_MODEL_SPECS.map((row) => (
                <tr
                  key={row.model}
                  onClick={() => setSelectedModel(row.model)}
                  className={`cursor-pointer transition-colors ${
                    selectedModel === row.model ? 'bg-emerald-50/70 font-semibold' : 'hover:bg-slate-50/60'
                  }`}
                >
                  <td className="py-2.5 px-4 font-mono font-bold text-emerald-800">{row.model}</td>
                  <td className="py-2.5 px-4">King</td>
                  <td className="py-2.5 px-4 font-bold text-slate-900">{row.size}</td>
                  <td className="py-2.5 px-4">{row.resolution}</td>
                  <td className="py-2.5 px-4">{row.range}</td>
                  <td className="py-2.5 px-4 text-slate-600">{row.app}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Individual Product Cards for All 8 Models */}
      <div className="space-y-6">
        <div>
          <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
            King Teleprompter Lineup ({teleprompterProducts.length} Models)
          </h2>
          <p className="text-xs text-slate-500 mt-1">
            Click any model card to inspect technical interfaces, beamsplitter ratio, and installation configurations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {teleprompterProducts.map((prod, idx) => (
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
    </div>
  );
};
