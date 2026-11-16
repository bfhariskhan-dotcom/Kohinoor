import React, { useState, useEffect } from 'react';
import { BUSINESS_INFO, CATEGORIES, PRODUCTS } from '../data/products';
import { X, CheckCircle2, MessageSquare } from 'lucide-react';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  preSelectedProduct?: string;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({
  isOpen,
  onClose,
  preSelectedProduct
}) => {
  const [fullName, setFullName] = useState('');
  const [organization, setOrganization] = useState('');
  const [city, setCity] = useState('Islamabad');
  const [phone, setPhone] = useState('');
  const [selectedProduct, setSelectedProduct] = useState(preSelectedProduct || 'Interactive LED Displays');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (preSelectedProduct) {
      setSelectedProduct(preSelectedProduct);
    }
  }, [preSelectedProduct]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleSendViaWhatsApp = () => {
    const text =
      `*New Quotation Request - Kohinoor Audio Visual*\n` +
      `-----------------------------------------\n` +
      `• Name: ${fullName || 'Valued Client'}\n` +
      `• Organization: ${organization || 'Institutional/Corporate'}\n` +
      `• City: ${city}\n` +
      `• Phone: ${phone || 'N/A'}\n` +
      `• Equipment / Model: ${selectedProduct}\n` +
      `• Requirements: ${message || 'Please provide technical specification & formal quotation.'}\n` +
      `-----------------------------------------\n` +
      `Sent via kohinoorav.com`;

    window.open(`${BUSINESS_INFO.whatsappUrl}?text=${encodeURIComponent(text)}`, '_blank');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden">
        <div className="px-6 py-5 bg-gradient-to-r from-emerald-800 to-emerald-950 text-white flex items-center justify-between">
          <div>
            <h3 className="text-base sm:text-lg font-bold">Request Official Quotation</h3>
            <p className="text-xs text-emerald-200/90 mt-0.5">
              Direct institutional proposal from Kohinoor Audio Visual Islamabad
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-emerald-200 hover:text-white rounded-xl hover:bg-white/10 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {submitted ? (
          <div className="p-8 text-center space-y-4">
            <div className="w-14 h-14 bg-emerald-100 text-emerald-800 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h4 className="text-lg font-bold text-slate-900">Inquiry Prepared</h4>
            <p className="text-xs text-slate-600 leading-relaxed max-w-sm mx-auto">
              Thank you. Connect directly with our technical sales engineer on WhatsApp for an immediate quotation and delivery estimate.
            </p>
            <div className="pt-2 flex flex-col sm:flex-row gap-3 justify-center">
              <button
                onClick={handleSendViaWhatsApp}
                className="cursor-pointer px-6 py-3 bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs rounded-xl shadow-md transition-colors flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-4 h-4 fill-current" />
                <span>Send via WhatsApp</span>
              </button>
              <button
                onClick={onClose}
                className="cursor-pointer px-5 py-3 bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-xs rounded-xl transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 space-y-4 text-xs">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block font-bold text-slate-700 mb-1">Your Full Name *</label>
                <input
                  type="text"
                  required
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="e.g. Prof. Tariq Mahmood"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:border-emerald-600"
                />
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1">Organization / University *</label>
                <input
                  type="text"
                  required
                  value={organization}
                  onChange={(e) => setOrganization(e.target.value)}
                  placeholder="e.g. NUST / Air University"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:border-emerald-600"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block font-bold text-slate-700 mb-1">City / Region *</label>
                <input
                  type="text"
                  required
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  placeholder="Islamabad / Rawalpindi / Lahore"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:border-emerald-600"
                />
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1">Mobile / WhatsApp Number *</label>
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="0333-XXXXXXX"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:border-emerald-600"
                />
              </div>
            </div>

            <div>
              <label className="block font-bold text-slate-700 mb-1">Equipment Category / Model *</label>
              <select
                value={selectedProduct}
                onChange={(e) => setSelectedProduct(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:border-emerald-600 bg-white"
              >
                <optgroup label="Product Categories">
                  {CATEGORIES.map((cat) => (
                    <option key={cat.id} value={cat.name}>
                      {cat.name}
                    </option>
                  ))}
                </optgroup>
                <optgroup label="Specific Equipment Models">
                  {PRODUCTS.map((prod) => (
                    <option key={prod.id} value={prod.name}>
                      {prod.name}
                    </option>
                  ))}
                </optgroup>
              </select>
            </div>

            <div>
              <label className="block font-bold text-slate-700 mb-1">Project Details or Room Size (Optional)</label>
              <textarea
                rows={3}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Mention quantities, screen sizes, room dimensions, or tender documentation..."
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:border-emerald-600"
              />
            </div>

            <div className="pt-2 flex flex-col sm:flex-row gap-3">
              <button
                type="button"
                onClick={handleSendViaWhatsApp}
                className="cursor-pointer flex-1 py-3 px-4 bg-emerald-700 hover:bg-emerald-800 text-white font-bold rounded-xl shadow-md transition-colors flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-4 h-4 fill-current" />
                <span>Send via WhatsApp</span>
              </button>
              <button
                type="submit"
                className="cursor-pointer py-3 px-4 bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold rounded-xl transition-colors text-center"
              >
                Submit Form
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
