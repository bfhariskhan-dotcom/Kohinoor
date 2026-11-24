import React from 'react';
import { Product } from '../types';
import { BUSINESS_INFO } from '../data/products';
import { MessageSquare, ArrowRight, Check } from 'lucide-react';
import { motion } from 'motion/react';

interface ProductCardProps {
  product: Product;
  onSelect: (product: Product) => void;
  onOpenQuote: (productName: string) => void;
  index?: number;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onSelect,
  index = 0
}) => {
  const handleWhatsAppOrder = (e: React.MouseEvent) => {
    e.stopPropagation();
    const text = `Hello Kohinoor AV, I would like to inquire about *${product.name}* (Model: ${product.modelNumber || 'Standard'}). Please share specifications, availability, and institutional quotation details.`;
    window.open(`${BUSINESS_INFO.whatsappUrl}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.4, delay: (index % 2) * 0.08 }}
      onClick={() => onSelect(product)}
      className="group bg-white rounded-2xl border border-slate-200/90 overflow-hidden hover:border-emerald-600 hover:shadow-lg transition-all duration-300 flex flex-col cursor-pointer"
    >
      {/* Product Image Stage */}
      <div className="relative aspect-4/3 bg-slate-50/80 overflow-hidden border-b border-slate-100 flex items-center justify-center p-5">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          decoding="async"
          referrerPolicy="no-referrer"
          onError={(e) => {
            (e.currentTarget as HTMLImageElement).src = product.fallbackImage;
          }}
          className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      {/* Card Content */}
      <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
        <div>
          {/* Clean Unboxed Metadata */}
          <div className="flex flex-wrap items-center gap-1.5 text-[11px] font-semibold text-emerald-700 mb-1">
            <span>{product.categoryLabel}</span>
            {product.modelNumber && (
              <>
                <span aria-hidden="true" className="text-slate-300">&middot;</span>
                <span className="font-mono text-slate-500">{product.modelNumber}</span>
              </>
            )}
          </div>

          <h3 className="text-sm sm:text-base font-extrabold text-slate-900 group-hover:text-emerald-700 transition-colors leading-snug line-clamp-1">
            {product.name}
          </h3>

          <p className="text-xs text-slate-600 mt-1.5 line-clamp-2 leading-relaxed">
            {product.description}
          </p>

          {product.availableSizes && product.availableSizes.length > 0 && (
            <div className="mt-2 text-[11px] text-slate-700 font-semibold">
              Sizes: <span className="text-emerald-800">{product.availableSizes.join(' · ')}</span>
            </div>
          )}

          <div className="mt-3 space-y-1">
            {product.keyFeatures.slice(0, 2).map((feat, i) => (
              <div key={i} className="flex items-center gap-1.5 text-[11px] text-slate-700">
                <Check className="w-3 h-3 text-emerald-600 shrink-0" />
                <span className="line-clamp-1">{feat}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Compact Action Controls */}
        <div className="pt-3 border-t border-slate-100 flex items-center gap-2">
          <button
            onClick={handleWhatsAppOrder}
            className="cursor-pointer flex-1 py-2 px-3 bg-emerald-700 hover:bg-emerald-800 active:scale-95 text-white text-xs font-bold rounded-lg transition-all flex items-center justify-center gap-1.5 whitespace-nowrap"
          >
            <MessageSquare className="w-3.5 h-3.5 fill-current" />
            <span>Inquire on WhatsApp</span>
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              onSelect(product);
            }}
            className="cursor-pointer py-2 px-3 bg-slate-100 hover:bg-emerald-50 hover:text-emerald-700 text-slate-800 text-xs font-semibold rounded-lg transition-colors flex items-center justify-center gap-1 shrink-0 whitespace-nowrap"
          >
            <span>Specs</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </motion.div>
  );
};
