import React, { useState, useEffect } from 'react';
import { Product } from '../types';
import { BUSINESS_INFO } from '../data/products';
import { X, MessageSquare, Check } from 'lucide-react';

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
  const [activeImage, setActiveImage] = useState<string>('');

  useEffect(() => {
    if (product) {
      setActiveImage(product.image);
    }
  }, [product]);

  if (!product) return null;

  const handleWhatsApp = () => {
    const text = `Hello Kohinoor AV, I am inquiring about *${product.name}* (Model: ${product.modelNumber || 'Standard'}). Please provide detailed specifications, stock availability, and an institutional quotation in Pakistan.`;
    window.open(`${BUSINESS_INFO.whatsappUrl}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[90vh]">
        {/* Header Bar */}
        <div className="px-6 py-4 bg-slate-50 border-b border-slate-200 flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs">
            <span className="font-bold uppercase tracking-wider text-emerald-700">
              {product.categoryLabel}
            </span>
            {product.modelNumber && (
              <>
                <span aria-hidden="true" className="text-slate-300">&middot;</span>
                <span className="text-slate-600 font-mono font-semibold">
                  {product.modelNumber}
                </span>
              </>
            )}
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-slate-600 rounded-xl hover:bg-slate-200 transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-8 flex-1">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            {/* Gallery Left */}
            <div className="md:col-span-5 space-y-3">
              <div className="aspect-4/3 rounded-2xl bg-slate-50 border border-slate-200 overflow-hidden flex items-center justify-center p-4">
                <img
                  src={activeImage}
                  alt={product.name}
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).src = product.fallbackImage;
                  }}
                />
              </div>

              {product.gallery && product.gallery.length > 1 && (
                <div className="flex items-center gap-2 overflow-x-auto pb-1">
                  {product.gallery.map((img, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveImage(img)}
                      className={`cursor-pointer w-14 h-14 rounded-xl border p-1 overflow-hidden shrink-0 transition-all ${
                        activeImage === img ? 'border-emerald-600 ring-2 ring-emerald-600/30' : 'border-slate-200 hover:border-slate-300'
                      }`}
                    >
                      <img src={img} alt="" className="w-full h-full object-cover rounded-lg" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Info Right */}
            <div className="md:col-span-7 space-y-4">
              <div>
                {product.brand && (
                  <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1">
                    {product.brand}
                  </div>
                )}
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 leading-snug">
                  {product.name}
                </h2>
                <p className="text-xs text-emerald-800 font-semibold mt-1">
                  {product.tagline}
                </p>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {product.description}
              </p>

              {product.availableSizes && product.availableSizes.length > 0 && (
                <div className="p-3 rounded-xl bg-emerald-50/70 border border-emerald-100 text-xs text-emerald-950">
                  <span className="font-bold">Available Sizes: </span>
                  <span>{product.availableSizes.join(' · ')}</span>
                </div>
              )}

              {/* Key Features */}
              <div className="space-y-2 pt-2">
                <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                  Key Technical Features
                </h4>
                <div className="space-y-1.5">
                  {product.keyFeatures.map((feat, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-slate-700">
                      <Check className="w-3.5 h-3.5 text-emerald-700 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Full Specifications Table */}
          {product.specs && Object.keys(product.specs).length > 0 && (
            <div className="space-y-3 pt-4 border-t border-slate-100">
              <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                Full Specifications
              </h4>
              <div className="rounded-2xl border border-slate-200 overflow-hidden">
                <table className="w-full text-xs text-left">
                  <tbody className="divide-y divide-slate-100">
                    {Object.entries(product.specs).map(([key, value], idx) => (
                      <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-slate-50/50'}>
                        <td className="py-2.5 px-4 font-semibold text-slate-700 w-1/3">{key}</td>
                        <td className="py-2.5 px-4 text-slate-900 font-medium">{value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Applications */}
          {product.applications && product.applications.length > 0 && (
            <div className="space-y-2">
              <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                Recommended Applications
              </h4>
              <div className="text-xs text-slate-700 font-medium">
                {product.applications.join(' · ')}
              </div>
            </div>
          )}
        </div>

        {/* Footer Actions */}
        <div className="p-4 sm:p-6 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="text-xs text-slate-500 text-center sm:text-left">
            <span>Supply &amp; After-Sales Service · Blue Area, Islamabad · Nationwide Delivery</span>
          </div>
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={handleWhatsApp}
              className="cursor-pointer flex-1 sm:flex-initial px-6 py-2.5 bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs rounded-xl shadow-md transition-all flex items-center justify-center gap-2 whitespace-nowrap"
            >
              <MessageSquare className="w-4 h-4 fill-current" />
              <span>Inquire via WhatsApp</span>
            </button>
            <button
              onClick={() => {
                onClose();
                onOpenQuote(product.name);
              }}
              className="cursor-pointer px-5 py-2.5 bg-white hover:bg-slate-100 text-slate-800 font-semibold text-xs rounded-xl border border-slate-300 transition-colors whitespace-nowrap"
            >
              Request Formal Quote
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
