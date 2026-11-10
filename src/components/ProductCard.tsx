import React from 'react';
import { Product } from '../types';
import { BUSINESS_INFO } from '../data/products';
import { MessageSquare, ArrowRight, Check, Tag } from 'lucide-react';
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
  onOpenQuote,
  index = 0
}) => {
  // Direct WhatsApp Inquiry / Purchase Flow (No phone number in button text)
  const handleWhatsAppOrder = (e: React.MouseEvent) => {
    e.stopPropagation();
    const text = `Hello Kohinoor AV, I want to purchase / inquire about *${product.name}* (Model: ${product.modelNumber || 'Standard'}, Listed Price: ${product.price || 'Special'}). Please provide price, availability, and delivery details in Pakistan.`;
    window.open(`${BUSINESS_INFO.whatsappUrl}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay: (index % 2) * 0.12 }}
      onClick={() => onSelect(product)}
      className="group bg-white rounded-3xl border border-slate-200/90 overflow-hidden hover:border-emerald-600 hover:shadow-[0_15px_35px_-5px_rgba(21,128,61,0.18)] transition-all duration-300 flex flex-col cursor-pointer hover:-translate-y-1"
    >
      {/* Product Image Stage with Subtle Emerald Background Tint */}
      <div className="relative aspect-4/3 bg-slate-50/80 overflow-hidden border-b border-slate-100 flex items-center justify-center p-6">
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-50/30 to-transparent pointer-events-none" />

        <img
          src={product.image}
          alt={product.name}
          referrerPolicy="no-referrer"
          onError={(e) => {
            (e.currentTarget as HTMLImageElement).src = product.fallbackImage;
          }}
          className="w-full h-full object-contain group-hover:scale-106 transition-transform duration-500 relative z-10"
        />

        {/* Category Tag in Emerald */}
        <div className="absolute top-3 left-3 z-20 bg-emerald-900/90 text-white backdrop-blur-sm px-3 py-1 rounded-xl text-[11px] font-bold tracking-wide shadow-sm border border-emerald-700/50">
          {product.categoryLabel}
        </div>

        {product.modelNumber && (
          <div className="absolute top-3 right-3 z-20 bg-slate-900/85 text-emerald-300 backdrop-blur-sm px-2.5 py-1 rounded-xl text-[10px] font-bold tracking-wider font-mono border border-slate-700/50">
            {product.modelNumber}
          </div>
        )}
      </div>

      {/* Card Content with Prominent Pricing as Requested */}
      <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-4">
        <div>
          <div className="flex items-start justify-between gap-3">
            <h3 className="text-base sm:text-lg font-extrabold text-slate-900 group-hover:text-emerald-700 transition-colors leading-snug">
              {product.name}
            </h3>
          </div>

          {/* Pricing Highlight Badge */}
          {product.price && (
            <div className="mt-2.5 inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-emerald-50 border border-emerald-200/80 text-emerald-800 text-xs font-extrabold">
              <Tag className="w-3.5 h-3.5 text-emerald-600" />
              <span>{product.price}</span>
              <span className="text-[10px] font-normal text-emerald-600">· Official Warranty</span>
            </div>
          )}

          <p className="text-xs text-slate-600 mt-2 line-clamp-2 leading-relaxed">
            {product.description}
          </p>

          {/* Key Features List */}
          <div className="mt-3.5 space-y-1.5">
            {product.keyFeatures.slice(0, 2).map((feat, i) => (
              <div key={i} className="flex items-start gap-2 text-xs text-slate-700">
                <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                <span className="line-clamp-1">{feat}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Action Controls: Direct WhatsApp Purchase (No Phone in Label) + Specs */}
        <div className="pt-4 border-t border-slate-100 flex items-center gap-2.5">
          <button
            onClick={handleWhatsAppOrder}
            className="cursor-pointer flex-1 py-3 px-3.5 bg-emerald-700 hover:bg-emerald-800 active:scale-95 text-white text-xs font-bold rounded-xl transition-all shadow-md shadow-emerald-700/20 flex items-center justify-center gap-2"
          >
            <MessageSquare className="w-4 h-4 fill-current" />
            <span>Order on WhatsApp</span>
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              onSelect(product);
            }}
            className="cursor-pointer py-3 px-3.5 bg-slate-100 hover:bg-emerald-50 hover:text-emerald-700 text-slate-800 text-xs font-semibold rounded-xl transition-colors flex items-center justify-center gap-1 shrink-0"
            title="View Technical Specifications"
          >
            <span>Specs</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </motion.div>
  );
};
