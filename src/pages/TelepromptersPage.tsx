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

const TELEPROMPTER_MODEL_SPECS = [
  { model: 'TP27', size: '27 Inch', resolution: '1920 × 1080 Full HD', control: 'Foot Pedal & Remote', app: 'Stage Monitor / Broadcast Desk' },
  { model: 'TP32', size: '32 Inch', resolution: '1920 × 1080 Full HD', control: 'Foot Pedal & Remote', app: 'Floor Captioner / TV Studio' },
  { model: 'TP43', size: '43 Inch', resolution: '1920 × 1080 Full HD', control: 'Foot Pedal & Remote', app: 'Enterprise Boardroom / Stage Floor' },
  { model: 'TP55', size: '55 Inch', resolution: '1920 × 1080 Full HD', control: 'Foot Pedal & Remote', app: 'Auditorium / Keynote Stage' },
  { model: 'TP65', size: '65 Inch', resolution: '1920 × 1080 Full HD', control: 'Foot Pedal & Remote', app: 'Grand Hall / Parliamentary Chamber' },
  { model: 'TP75', size: '75 Inch', resolution: '1920 × 1080 Full HD', control: 'Foot Pedal & Remote', app: 'Convention Hall / Convocation Stage' },
  { model: 'TP85', size: '85 Inch', resolution: '1920 × 1080 Full HD', control: 'Foot Pedal & Remote', app: 'Mega-Venue / Wide Arena' },
  { model: 'TP100', size: '100 Inch', resolution: '1920 × 1080 Full HD', control: 'Foot Pedal & Remote', app: 'National Stadium / Flagship Arena' }
];

export const TelepromptersPage: React.FC<TelepromptersPageProps> = ({
  onSelectProduct,
  onOpenQuoteModal
}) => {
  const [selectedModel, setSelectedModel] = useState<string>('TP43');
  const teleprompterProducts = PRODUCTS.filter((p) => p.category === 'teleprompters');
  const activeSpec = TELEPROMPTER_MODEL_SPECS.find((m) => m.model === selectedModel) || TELEPROMPTER_MODEL_SPECS[2];

  return (
    <div className="space-y-14 py-10 max-w-7xl mx-auto px-4 sm:px-8">
      {/* Header */}
      <div className="space-y-3 max-w-3xl">
        <div className="text-xs font-bold text-emerald-700 uppercase tracking-wider">
          Category 06 · Stage Monitor &amp; Floor Captioner Teleprompters
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
          Stage &amp; Floor Teleprompters (TP27–TP100)
        </h1>
        <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
          Professional Stage Monitor &amp; Floor Captioner style teleprompters from 27-inch up to 100-inch (TP27 through TP100) with crisp 1920 × 1080 Full HD panels, Foot Pedal &amp; Wireless Remote speed control, and HDMI, SDI &amp; Wireless input support.
        </p>
      </div>

      {/* Hero Hardware Showcase */}
      <div className="bg-gradient-to-br from-emerald-700 via-emerald-600 to-emerald-800 text-white rounded-3xl p-8 sm:p-12 border border-emerald-500/40 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center shadow-2xl">
        <div className="lg:col-span-6 space-y-5">
          <div className="text-xs font-bold text-emerald-300 uppercase tracking-wider flex items-center gap-1.5">
            <Tv className="w-4 h-4" />
            <span>Stage Monitor / Floor Captioner Series · TP27 to TP100</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white leading-snug">
            Full HD Stage &amp; Floor Prompting Systems (27"–100")
          </h2>
          <p className="text-xs sm:text-sm text-emerald-100/85 leading-relaxed">
            Engineered in low-profile floor-wedge and stage-monitor housings for keynote stages, auditoriums, broadcast studios, and official diplomatic briefings. Includes dual control via tactile Foot Pedal and Wireless Remote Controller with seamless HDMI, SDI, and Wireless signal inputs.
          </p>

          <div className="space-y-2 text-xs text-emerald-100/90">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Complete Range TP27–TP100 (27", 32", 43", 55", 65", 75", 85" &amp; 100") · 1920 × 1080 Full HD</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Foot Pedal &amp; Wireless Remote Control for hands-free script scrolling</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>HDMI, SDI &amp; Wireless video inputs with English, Urdu &amp; Arabic Unicode text support</span>
            </div>
          </div>

          <div className="pt-2 flex flex-wrap gap-3">
            <a
              href={`${BUSINESS_INFO.whatsappUrl}?text=${encodeURIComponent(`Hello Kohinoor AV, I would like specifications and availability for Stage Teleprompter ${activeSpec.model} (${activeSpec.size}).`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer px-6 py-3 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold rounded-xl transition-all shadow-md flex items-center gap-2"
            >
              <MessageSquare className="w-4 h-4 fill-current" />
              <span>Inquire on WhatsApp</span>
            </a>
            <button
              onClick={() => onOpenQuoteModal(`Stage & Floor Teleprompter ${activeSpec.model} (${activeSpec.size})`)}
              className="cursor-pointer px-5 py-3 bg-white/10 hover:bg-white/20 text-white text-xs font-semibold rounded-xl border border-white/20 transition-colors"
            >
              Request Technical Proposal
            </button>
          </div>
        </div>

        <div className="lg:col-span-6">
          <div className="rounded-2xl overflow-hidden border border-emerald-800/80 bg-white shadow-2xl p-2">
            <img
              src="/images/products/product_2.jpg"
              alt="Stage Monitor and Floor Captioner Teleprompter TP27-TP100 with Foot Pedal and Wireless Remote"
              className="w-full h-auto object-contain rounded-xl max-h-96 mx-auto"
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
              <span>Stage &amp; Floor Teleprompter Comparison Matrix</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 mt-1">
              Explore All 8 Teleprompter Sizes (27" to 100")
            </h2>
          </div>
        </div>

        {/* Model Selector Buttons */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1">
          {TELEPROMPTER_MODEL_SPECS.map((m) => (
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
            <div className="text-[11px] font-bold text-emerald-700 uppercase">Model Code</div>
            <div className="text-xl font-extrabold text-slate-900 tabular-nums">{activeSpec.model}</div>
            <div className="text-xs text-slate-600 font-semibold">{activeSpec.size} Panel</div>
          </div>
          <div>
            <div className="text-[11px] font-bold text-slate-500 uppercase">Resolution</div>
            <div className="text-xs sm:text-sm font-bold text-slate-900 tabular-nums">{activeSpec.resolution}</div>
          </div>
          <div>
            <div className="text-[11px] font-bold text-slate-500 uppercase">Control &amp; Inputs</div>
            <div className="text-xs sm:text-sm font-bold text-slate-900">{activeSpec.control} · HDMI/SDI/Wireless</div>
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
                <th className="py-3 px-4">Style</th>
                <th className="py-3 px-4">Screen Size</th>
                <th className="py-3 px-4">Resolution</th>
                <th className="py-3 px-4">Controls &amp; Inputs</th>
                <th className="py-3 px-4">Application</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 tabular-nums">
              {TELEPROMPTER_MODEL_SPECS.map((row) => (
                <tr
                  key={row.model}
                  onClick={() => setSelectedModel(row.model)}
                  className={`cursor-pointer transition-colors ${
                    selectedModel === row.model ? 'bg-emerald-50/70 font-semibold' : 'hover:bg-slate-50/60'
                  }`}
                >
                  <td className="py-2.5 px-4 font-mono font-bold text-emerald-800">{row.model}</td>
                  <td className="py-2.5 px-4">Stage / Floor Monitor</td>
                  <td className="py-2.5 px-4 font-bold text-slate-900">{row.size}</td>
                  <td className="py-2.5 px-4">{row.resolution}</td>
                  <td className="py-2.5 px-4">{row.control} · HDMI/SDI/Wireless</td>
                  <td className="py-2.5 px-4 text-slate-600">{row.app}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Individual Product Cards */}
      <div className="space-y-6">
        <div>
          <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
            Ready-Stock Teleprompter Lineup ({teleprompterProducts.length} Models)
          </h2>
          <p className="text-xs text-slate-500 mt-1">
            Click any model card to inspect technical interfaces, foot pedal control, and installation configurations.
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
