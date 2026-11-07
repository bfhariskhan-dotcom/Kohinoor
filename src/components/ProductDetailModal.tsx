import React, { useState } from 'react';
import { Product } from '../types';
import { BUSINESS_INFO } from '../data/products';
import { X, Check, MessageSquare, FileText, ChevronRight } from 'lucide-react';

interface ProductDetailModalProps {
  product: Product | null;
  onClose: () => void;
  onOpenQuote: (productName: string) => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  product,
  onClose,
  onOpenQuote
}) => {
  const [selectedImage, setSelectedImage] = useState<string>('');

  if (!product) return null;

  const activeImage = selectedImage || product.image;

  const handleWhatsAppOrder = () => {
    const text = `Hello Kohinoor AV, I want to purchase / get a formal quote for *${product.name}* (Model: ${product.modelNumber || 'Standard'}). Please provide official pricing, delivery time to my location, and warranty information.`;
    window.open(`${BUSINESS_INFO.whatsappUrl}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-sm animate-in fade-in duration-150">
      <div className="relative w-full max-w-4xl max-h-[90vh] bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col">
        {/* Top Header in Navy & Blue */}
        <div className="bg-slate-950 text-white px-6 py-4 flex items-center justify-between border-b border-slate-800 shrink-0">
          <div>
            <div className="text-xs text-blue-400 font-semibold tracking-wide">
              {product.categoryLabel}
              {product.modelNumber && <span className="text-slate-400"> &middot; Model: {product.modelNumber}</span>}
            </div>
            <h3 className="text-base sm:text-lg font-bold text-white mt-0.5">
              {product.name}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="overflow-y-auto p-6 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            {/* Gallery Column */}
            <div className="space-y-3">
              <div className="aspect-4/3 rounded-2xl bg-slate-50 overflow-hidden border border-slate-200 relative flex items-center justify-center p-4">
                <img
                  src={activeImage}
                  alt={product.name}
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).src = product.fallbackImage;
                  }}
                  className="w-full h-full object-contain bg-white rounded-xl"
                />
              </div>

              {product.gallery && product.gallery.length > 1 && (
                <div className="flex gap-2">
                  {product.gallery.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedImage(img)}
                      className={`w-16 h-16 rounded-xl overflow-hidden border transition-all cursor-pointer ${
                        activeImage === img ? 'border-blue-600 ring-2 ring-blue-600/30' : 'border-slate-200 opacity-70 hover:opacity-100'
                      }`}
                    >
                      <img
                        src={img}
                        alt={`${product.name} view ${idx + 1}`}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}

              <div className="p-3.5 bg-blue-50/50 rounded-xl border border-blue-100 text-xs text-slate-700 space-y-1">
                <p className="font-bold text-slate-900">Kohinoor Audio Visual Supply Guarantee</p>
                <p className="text-slate-600">Head Office: United Plaza, Blue Area, Islamabad</p>
                <p className="text-slate-600">Nationwide Insured Delivery &middot; Official Manufacturer Warranty</p>
              </div>
            </div>

            {/* Information Column */}
            <div className="space-y-5">
              <div>
                <p className="text-xs text-blue-700 font-semibold mb-2">{product.tagline}</p>
                <p className="text-xs text-slate-700 leading-relaxed">{product.description}</p>
              </div>

              {/* Key Features */}
              <div>
                <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2.5">
                  Technical Highlights
                </h4>
                <ul className="space-y-2">
                  {product.keyFeatures.map((feat, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs text-slate-700">
                      <Check className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technical Specifications Table */}
              <div>
                <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2.5">
                  Full Technical Specifications
                </h4>
                <div className="rounded-xl border border-slate-200 overflow-hidden divide-y divide-slate-200 text-xs">
                  {Object.entries(product.specs).map(([specKey, specVal]) => (
                    <div key={specKey} className="grid grid-cols-2 p-2.5 bg-white even:bg-slate-50/50">
                      <span className="font-semibold text-slate-600">{specKey}</span>
                      <span className="font-bold text-slate-900 text-right">{specVal}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Applications */}
              {product.applications && (
                <div>
                  <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2">
                    Ideal Deployments
                  </h4>
                  <div className="flex flex-wrap gap-2 text-xs text-slate-600">
                    {product.applications.map((app, i) => (
                      <span key={i} className="inline-flex items-center gap-1 bg-slate-100 px-2.5 py-1 rounded-lg">
                        <ChevronRight className="w-3.5 h-3.5 text-blue-600" />
                        <span>{app}</span>
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Modal Footer Controls in Blue */}
        <div className="bg-slate-50 px-6 py-4 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3 shrink-0">
          <div className="text-xs text-slate-500 text-center sm:text-left">
            Direct orders and inquiries routed to our Islamabad engineering desk.
          </div>
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={handleWhatsAppOrder}
              className="flex-1 sm:flex-none cursor-pointer px-5 py-2.5 text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 active:scale-95 rounded-xl transition-all shadow-md flex items-center justify-center gap-2"
            >
              <MessageSquare className="w-4 h-4 fill-current" />
              <span>Order via WhatsApp (+92 333 5163220)</span>
            </button>
            <button
              onClick={() => {
                onClose();
                onOpenQuote(product.name);
              }}
              className="flex-1 sm:flex-none cursor-pointer px-4 py-2.5 text-xs font-semibold text-slate-800 bg-white hover:bg-slate-100 border border-slate-200 rounded-xl transition-colors flex items-center justify-center gap-1.5"
            >
              <FileText className="w-4 h-4" />
              <span>Formal Quote</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
