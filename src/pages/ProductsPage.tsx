import React, { useState } from 'react';
import { PageId, Product } from '../types';
import { PRODUCTS, CATEGORIES, BUSINESS_INFO } from '../data/products';
import { ProductCard } from '../components/ProductCard';
import { Search, MessageSquare, Layers } from 'lucide-react';

interface ProductsPageProps {
  onNavigate: (page: PageId) => void;
  onSelectProduct: (product: Product) => void;
  onOpenQuoteModal: (productName?: string) => void;
}

export const ProductsPage: React.FC<ProductsPageProps> = ({
  onNavigate,
  onSelectProduct,
  onOpenQuoteModal
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Filter products by category and search query
  const filteredProducts = PRODUCTS.filter((p) => {
    const matchesCategory = selectedCategory === 'all' || p.category === selectedCategory;
    const matchesSearch =
      searchQuery.trim() === '' ||
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (p.modelNumber && p.modelNumber.toLowerCase().includes(searchQuery.toLowerCase())) ||
      (p.brand && p.brand.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="space-y-12 py-10 max-w-7xl mx-auto px-4 sm:px-8">
      {/* Page Header */}
      <div className="space-y-3 max-w-3xl">
        <div className="inline-flex items-center gap-2 text-xs font-bold text-emerald-700 uppercase tracking-wider">
          <Layers className="w-3.5 h-3.5" />
          <span>Complete Equipment Directory · Since 1978</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
          Audio Visual Equipment Catalog
        </h1>
        <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
          Browse technical specifications, model numbers, screen sizes, and system features across all 8 equipment categories supplied by Kohinoor Audio Visual across Pakistan.
        </p>
      </div>

      {/* Search & Category Filter Toolbar */}
      <div className="bg-white rounded-3xl p-5 sm:p-6 border border-slate-200/90 shadow-xs space-y-4">
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
          <div className="relative flex-1 max-w-md">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by model (e.g. BE-2300, XJ-V2, TP43), brand, or keyword..."
              className="w-full pl-10 pr-4 py-2.5 text-xs sm:text-sm rounded-xl border border-slate-200 bg-slate-50/50 focus:bg-white focus:outline-none focus:border-emerald-600 transition-colors"
            />
          </div>

          {selectedCategory !== 'all' && (
            <button
              onClick={() => onNavigate(selectedCategory as PageId)}
              className="cursor-pointer px-4 py-2.5 text-xs font-bold text-emerald-700 bg-emerald-50 hover:bg-emerald-100 rounded-xl transition-colors whitespace-nowrap"
            >
              Open Dedicated Category View &rarr;
            </button>
          )}
        </div>

        {/* Exact 8 Category Filter Tabs in Order */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 pt-1 scrollbar-none">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`cursor-pointer px-4 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap shrink-0 ${
              selectedCategory === 'all'
                ? 'bg-emerald-700 text-white shadow-md shadow-emerald-700/20'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            All Equipment ({PRODUCTS.length})
          </button>
          {CATEGORIES.map((cat, idx) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`cursor-pointer px-4 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap shrink-0 ${
                selectedCategory === cat.id
                  ? 'bg-emerald-700 text-white shadow-md shadow-emerald-700/20'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              {idx + 1}. {cat.name}
            </button>
          ))}
        </div>
      </div>

      {/* Product Results Counter */}
      <div className="flex items-center justify-between text-xs text-slate-500 font-medium">
        <span className="tabular-nums">
          Showing {filteredProducts.length} of {PRODUCTS.length} hardware models
        </span>
        <span className="text-emerald-700 font-bold">
          Installation, Warranty &amp; After-Sales Support Nationwide
        </span>
      </div>

      {/* Clean Corporate Product Grid */}
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product, idx) => (
            <ProductCard
              key={product.id}
              product={product}
              onSelect={onSelectProduct}
              onOpenQuote={onOpenQuoteModal}
              index={idx}
            />
          ))}
        </div>
      ) : (
        <div className="bg-white rounded-3xl border border-slate-200 p-10 text-center space-y-3">
          <p className="text-sm font-bold text-slate-900">
            No matching equipment found for &ldquo;{searchQuery}&rdquo;
          </p>
          <button
            onClick={() => {
              setSearchQuery('');
              setSelectedCategory('all');
            }}
            className="cursor-pointer px-4 py-2 bg-emerald-700 text-white text-xs font-bold rounded-xl"
          >
            Reset Filters
          </button>
        </div>
      )}

      {/* Institutional Quotation Banner */}
      <div className="bg-gradient-to-br from-emerald-700 via-emerald-600 to-emerald-800 text-white rounded-3xl p-8 sm:p-12 border border-emerald-500/40 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
        <div className="space-y-1.5 text-center md:text-left">
          <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider">
            Institutional Procurement &amp; Tenders
          </span>
          <h3 className="text-xl font-bold text-white">
            Need a Formal Bid Sheet or Technical Proposal?
          </h3>
          <p className="text-xs text-emerald-100/80 max-w-xl">
            Our Islamabad engineering team provides official NTN/GST quotations, delivery timelines, and compliant tender specifications nationwide.
          </p>
        </div>
        <a
          href={BUSINESS_INFO.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="cursor-pointer px-6 py-3.5 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold rounded-xl whitespace-nowrap transition-colors flex items-center gap-2 shadow-md shrink-0"
        >
          <MessageSquare className="w-4 h-4 fill-current" />
          <span>Inquire on WhatsApp</span>
        </a>
      </div>
    </div>
  );
};
