import React, { useState } from 'react';
import { PageId, Product } from '../types';
import { PRODUCTS, CATEGORIES, BUSINESS_INFO } from '../data/products';
import { ProductCard } from '../components/ProductCard';
import { Search, SlidersHorizontal, Tag, MessageSquare, CheckCircle2, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

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
  const [sortBy, setSortBy] = useState<'featured' | 'price-asc' | 'price-desc'>('featured');

  // Filter products by category and search
  const filtered = PRODUCTS.filter((p) => {
    const matchesCategory = selectedCategory === 'all' || p.category === selectedCategory;
    const matchesSearch =
      searchQuery.trim() === '' ||
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (p.modelNumber && p.modelNumber.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  // Sort products
  const sortedProducts = [...filtered].sort((a, b) => {
    if (sortBy === 'price-asc') return (a.priceNumeric || 0) - (b.priceNumeric || 0);
    if (sortBy === 'price-desc') return (b.priceNumeric || 0) - (a.priceNumeric || 0);
    return 0;
  });

  return (
    <div className="space-y-12 py-10 max-w-7xl mx-auto px-4 sm:px-8">
      {/* Page Header */}
      <div className="space-y-3 max-w-3xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider">
          <Tag className="w-3.5 h-3.5" />
          <span>Hardware Catalog &amp; Transparent Pricing</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
          Complete AV Equipment Catalog
        </h1>
        <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
          Explore genuine prices, technical specifications, and official warranties for all our digital podiums, 4K interactive flat panels, multimedia projectors, and conference microphone systems.
        </p>
      </div>

      {/* Filter & Search Toolbar */}
      <div className="bg-white rounded-3xl p-5 sm:p-6 border border-slate-200/90 shadow-sm space-y-4">
        {/* Search Input & Sort Dropdown */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
          <div className="relative flex-1 max-w-md">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by model, display size, or keyword..."
              className="w-full pl-10 pr-4 py-2.5 text-xs sm:text-sm rounded-xl border border-slate-200 bg-slate-50/50 focus:bg-white focus:outline-none focus:border-emerald-600 transition-colors"
            />
          </div>

          <div className="flex items-center gap-3">
            <span className="text-xs text-slate-500 font-medium whitespace-nowrap">Sort by:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="px-3.5 py-2.5 text-xs font-semibold rounded-xl border border-slate-200 bg-white text-slate-700 focus:outline-none focus:border-emerald-600 cursor-pointer"
            >
              <option value="featured">Featured Order</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
            </select>
          </div>
        </div>

        {/* Category Filter Pills (Emerald Theme) */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 pt-1 scrollbar-none">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`cursor-pointer px-4 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap shrink-0 ${
              selectedCategory === 'all'
                ? 'bg-emerald-700 text-white shadow-md shadow-emerald-700/20'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            All Hardware ({PRODUCTS.length})
          </button>
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`cursor-pointer px-4 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap shrink-0 ${
                selectedCategory === cat.id
                  ? 'bg-emerald-700 text-white shadow-md shadow-emerald-700/20'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>
      </div>

      {/* Product Results Counter */}
      <div className="flex items-center justify-between text-xs text-slate-500 font-medium">
        <span>Showing {sortedProducts.length} of {PRODUCTS.length} hardware models</span>
        <span className="text-emerald-700 font-bold">Official Warranty &amp; On-Site Setup Available</span>
      </div>

      {/* Clean 2-Column Product Grid with Real Pricing */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {sortedProducts.map((product, idx) => (
          <ProductCard
            key={product.id}
            product={product}
            onSelect={onSelectProduct}
            onOpenQuote={onOpenQuoteModal}
            index={idx}
          />
        ))}
      </div>

      {/* Instant Procurement Banner in Emerald Theme */}
      <div className="bg-gradient-to-br from-[#072115] via-[#0d3420] to-[#05180f] text-white rounded-3xl p-8 sm:p-12 border border-emerald-900/60 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl max-w-5xl mx-auto">
        <div className="space-y-1.5 text-center md:text-left">
          <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider">
            Custom Procurement &amp; Tenders
          </span>
          <h3 className="text-xl font-bold text-white">
            Need a Formal Institutional Bid Sheet or GST Quotation?
          </h3>
          <p className="text-xs text-emerald-100/80 max-w-xl">
            Our Islamabad technical sales team provides official NTN/GST invoices, delivery schedules, and tender compliance documents.
          </p>
        </div>
        <a
          href={BUSINESS_INFO.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="cursor-pointer px-6 py-3.5 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold rounded-xl whitespace-nowrap transition-colors flex items-center gap-2 shadow-md shrink-0"
        >
          <MessageSquare className="w-4 h-4 fill-current" />
          <span>Order on WhatsApp</span>
        </a>
      </div>
    </div>
  );
};
