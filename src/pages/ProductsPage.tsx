import React, { useState } from 'react';
import { PageId, Product } from '../types';
import { CATEGORIES, PRODUCTS, BUSINESS_INFO } from '../data/products';
import { ProductCard } from '../components/ProductCard';
import { Search, MessageSquare } from 'lucide-react';

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

  const filteredProducts = PRODUCTS.filter((p) => {
    const matchesCategory = selectedCategory === 'all' || p.category === selectedCategory;
    const matchesQuery =
      searchQuery.trim() === '' ||
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (p.modelNumber && p.modelNumber.toLowerCase().includes(searchQuery.toLowerCase())) ||
      p.keyFeatures.some((f) => f.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesCategory && matchesQuery;
  });

  return (
    <div className="space-y-12 py-10 max-w-7xl mx-auto px-4 sm:px-8">
      {/* Header */}
      <div className="space-y-3">
        <div className="text-xs font-bold text-blue-600 uppercase tracking-wider">
          Commercial Audio-Visual Catalog
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          Professional AV Equipment &amp; Solutions
        </h1>
        <p className="text-xs sm:text-sm text-slate-600 max-w-3xl leading-relaxed">
          Browse our complete range of digital rostrums, interactive flat panel LEDs, 5000-lumen projectors, conference discussion microphone systems, and PTZ robotic cameras in Pakistan. Order directly on WhatsApp for prompt dispatch.
        </p>
      </div>

      {/* Filter and Search Bar */}
      <div className="bg-white rounded-3xl border border-slate-200 p-5 space-y-4 shadow-xs">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Search Input */}
          <div className="relative w-full md:w-96">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by equipment, model (e.g. 86 inch, podium, MA4617)..."
              className="w-full pl-10 pr-4 py-2.5 text-xs rounded-xl border border-slate-200 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
            />
          </div>

          <div className="text-xs text-slate-500 font-medium">
            Showing <span className="font-bold text-blue-600">{filteredProducts.length}</span> verified equipment items
          </div>
        </div>

        {/* Category Filter Tabs (Segmented buttons) */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 text-xs">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`cursor-pointer px-4 py-2 rounded-xl whitespace-nowrap transition-colors font-bold ${
              selectedCategory === 'all'
                ? 'bg-blue-600 text-white shadow-xs'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            All Categories ({PRODUCTS.length})
          </button>

          {CATEGORIES.map((cat) => {
            const count = PRODUCTS.filter((p) => p.category === cat.id).length;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`cursor-pointer px-4 py-2 rounded-xl whitespace-nowrap transition-colors font-bold ${
                  selectedCategory === cat.id
                    ? 'bg-blue-600 text-white shadow-xs'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {cat.name} ({count})
              </button>
            );
          })}
        </div>
      </div>

      {/* Product Grid: CLEAN 2-COLUMN GRID (Per user feedback to avoid cramped columns) */}
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {filteredProducts.map((prod) => (
            <ProductCard
              key={prod.id}
              product={prod}
              onSelect={onSelectProduct}
              onOpenQuote={onOpenQuoteModal}
            />
          ))}
        </div>
      ) : (
        <div className="py-16 text-center bg-white rounded-3xl border border-slate-200 space-y-3">
          <p className="text-sm font-semibold text-slate-800">No equipment matches your search query.</p>
          <p className="text-xs text-slate-500">Try searching for keywords like "podium", "interactive", "projector", or reset your filters.</p>
          <button
            onClick={() => {
              setSelectedCategory('all');
              setSearchQuery('');
            }}
            className="px-5 py-2.5 bg-blue-600 text-white text-xs font-bold rounded-xl hover:bg-blue-700 transition-colors"
          >
            Reset Filters
          </button>
        </div>
      )}

      {/* Bulk Procurement Banner in Navy & Blue */}
      <div className="bg-slate-950 text-white rounded-3xl p-6 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6 border border-slate-800 shadow-xl max-w-5xl mx-auto">
        <div className="space-y-1 text-center md:text-left">
          <h3 className="text-base sm:text-lg font-bold text-white">Need an Itemized Tender Quotation or Bulk Pricing?</h3>
          <p className="text-xs text-slate-400">
            We provide official tender-compliant technical compliance sheets and formal GST invoices for universities and government ministries.
          </p>
        </div>
        <a
          href={`${BUSINESS_INFO.whatsappUrl}?text=${encodeURIComponent('Hello Kohinoor AV, I would like to request an itemized bulk quotation for institutional equipment.')}`}
          target="_blank"
          rel="noopener noreferrer"
          className="cursor-pointer px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold rounded-xl whitespace-nowrap transition-colors flex items-center gap-2 shadow-md"
        >
          <MessageSquare className="w-4 h-4 fill-current" />
          <span>Chat on WhatsApp</span>
        </a>
      </div>
    </div>
  );
};
