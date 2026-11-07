import React from 'react';
import { Product } from '../types';
import { BUSINESS_INFO } from '../data/products';
import { MessageSquare, ArrowRight, Check, Sparkles } from 'lucide-react';
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
  // Direct WhatsApp Inquiry / Purchase Flow
  const handleWhatsAppOrder = (e: React.MouseEvent) => {
    e.stopPropagation();
    const text = `Hello Kohinoor AV, I want to purchase / inquire about *${product.name}* (Model: ${product.modelNumber || 'Standard'}). Please provide price, availability, and delivery details in Pakistan.`;
    window.open(`${BUSINESS_INFO.whatsappUrl}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay: (index % 2) * 0.12 }}
      onClick={() => onSelect(product)}
      className="group bg-white rounded-3xl border border-slate-200/90 overflow-hidden hover:border-blue-500 hover:shadow-[0_15px_35px_-5px_rgba(37,99,235,0.18)] transition-all duration-300 flex flex-col cursor-pointer hover:-translate-y-1"
    >
      {/* Product Image Stage with Subtle Lighting */}
      <div className="relative aspect-4/3 bg-slate-50/80 overflow-hidden border-b border-slate-100 flex items-center justify-center p-6">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50/30 to-transparent pointer-events-none" />

        <img
          src={product.image}
          alt={product.name}
          referrerPolicy="no-referrer"
          onError={(e) => {
            (e.currentTarget as HTMLImageElement).src = product.fallbackImage;
          }}
          className="w-full h-full object-contain group-hover:scale-106 transition-transform duration-500 relative z-10"
        />

        {/* Category Tag in Royal Blue */}
        <div className="absolute top-3 left-3 z-20 bg-blue-900/90 text-white backdrop-blur-sm px-3 py-1 rounded-xl text-[11px] font-bold tracking-wide shadow-sm border border-blue-700/50">
          {product.categoryLabel}
        </div>

        {product.modelNumber && (
          <div className="absolute top-3 right-3 z-20 bg-slate-900/85 text-blue-300 backdrop-blur-sm px-2.5 py-1 rounded-xl text-[10px] font-bold tracking-wider font-mono border border-slate-700/50">
            {product.modelNumber}
          </div>
        )}
      </div>

      {/* Card Content - Clean, Uncluttered, Spaced */}
      <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-4">
        <div>
          <h3 className="text-base sm:text-lg font-extrabold text-slate-900 group-hover:text-blue-600 transition-colors leading-snug">
            {product.name}
          </h3>

          <p className="text-xs text-slate-600 mt-2 line-clamp-2 leading-relaxed">
            {product.description}
          </p>

          {/* Key Features List */}
          <div className="mt-4 space-y-2">
            {product.keyFeatures.slice(0, 3).map((feat, i) => (
              <div key={i} className="flex items-start gap-2 text-xs text-slate-700">
                <Check className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                <span className="line-clamp-1">{feat}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Action Controls: Direct WhatsApp Purchase (Primary Blue) + Technical Specs Button */}
        <div className="pt-4 border-t border-slate-100 flex items-center gap-2.5">
          <button
            onClick={handleWhatsAppOrder}
            className="cursor-pointer flex-1 py-3 px-3.5 bg-blue-600 hover:bg-blue-700 active:scale-95 text-white text-xs font-bold rounded-xl transition-all shadow-md shadow-blue-600/20 flex items-center justify-center gap-2"
          >
            <MessageSquare className="w-4 h-4 fill-current" />
            <span>Order on WhatsApp</span>
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              onSelect(product);
            }}
            className="cursor-pointer py-3 px-3.5 bg-slate-100 hover:bg-blue-50 hover:text-blue-600 text-slate-800 text-xs font-semibold rounded-xl transition-colors flex items-center justify-center gap-1 shrink-0"
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
