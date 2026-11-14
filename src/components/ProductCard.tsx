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
  index = 0
}) => {
  const handleWhatsAppOrder = (e: React.MouseEvent) => {
    e.stopPropagation();
    const text = `Hello Kohinoor AV, I want to purchase *${product.name}* (Model: ${product.modelNumber || 'Standard'}, Price: ${product.price || 'Special'}). Please share details.`;
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
          referrerPolicy="no-referrer"
          onError={(e) => {
            (e.currentTarget as HTMLImageElement).src = product.fallbackImage;
          }}
          className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
        />

        <div className="absolute top-3 left-3 bg-emerald-800/90 text-white px-2.5 py-0.5 rounded-lg text-[10px] font-bold">
          {product.categoryLabel}
        </div>

        {product.modelNumber && (
          <div className="absolute top-3 right-3 bg-slate-900/80 text-emerald-300 px-2 py-0.5 rounded-lg text-[10px] font-bold font-mono">
            {product.modelNumber}
          </div>
        )}
      </div>

      {/* Card Content */}
      <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
        <div>
          <h3 className="text-sm sm:text-base font-extrabold text-slate-900 group-hover:text-emerald-700 transition-colors leading-snug line-clamp-1">
            {product.name}
          </h3>

          {product.price && (
            <div className="mt-2 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-emerald-50 border border-emerald-200/80 text-emerald-800 text-xs font-extrabold">
              <Tag className="w-3 h-3 text-emerald-600" />
              <span>{product.price}</span>
            </div>
          )}

          <p className="text-xs text-slate-600 mt-2 line-clamp-2 leading-relaxed">
            {product.description}
          </p>

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
            className="cursor-pointer flex-1 py-2 px-3 bg-emerald-700 hover:bg-emerald-800 active:scale-95 text-white text-xs font-bold rounded-lg transition-all flex items-center justify-center gap-1.5"
          >
            <MessageSquare className="w-3.5 h-3.5 fill-current" />
            <span>Order on WhatsApp</span>
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              onSelect(product);
            }}
            className="cursor-pointer py-2 px-3 bg-slate-100 hover:bg-emerald-50 hover:text-emerald-700 text-slate-800 text-xs font-semibold rounded-lg transition-colors flex items-center justify-center gap-1 shrink-0"
          >
            <span>Specs</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </motion.div>
  );
};
