import React, { useState } from 'react';
import { PageId } from '../types';
import { BUSINESS_INFO, CATEGORIES, PRODUCTS } from '../data/products';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  MessageSquare,
  Send,
  CheckCircle2,
  ExternalLink,
  Building
} from 'lucide-react';

interface ContactPageProps {
  onNavigate: (page: PageId) => void;
}

export const ContactPage: React.FC<ContactPageProps> = () => {
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [organization, setOrganization] = useState('');
  const [productInterested, setProductInterested] = useState('Digital Podiums');
  const [city, setCity] = useState('Islamabad');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleSendWhatsApp = () => {
    const text = `*Contact Form Inquiry - Kohinoor Audio Visual*
*Full Name:* ${fullName || 'Not specified'}
*Organization:* ${organization || 'Individual / Institution'}
*Phone Number:* ${phone || 'Not specified'}
*Email:* ${email || 'Not specified'}
*Location / City:* ${city}
*Product Interested In:* ${productInterested}
*Message / Requirements:* ${message || 'Please provide equipment pricing & specifications.'}`;

    window.open(`${BUSINESS_INFO.whatsappUrl}?text=${encodeURIComponent(text)}`, '_blank');
    setSubmitted(true);
  };

  return (
    <div className="space-y-16 py-10 max-w-7xl mx-auto px-4 sm:px-8">
      {/* Header */}
      <div className="space-y-4 max-w-3xl">
        <div className="text-xs font-bold text-emerald-700 uppercase tracking-wider">
          Connect With Our Engineering Team
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
          Contact Kohinoor Audio Visual
        </h1>
        <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
          Get in touch with our headquarters at United Plaza, Blue Area, Islamabad for official quotations, tender compliance documents, on-site demonstrations, and nationwide logistics.
        </p>
      </div>

      {/* Main Contact Grid: Form on Left, Office & Details on Right */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Form (7 columns) */}
        <div className="lg:col-span-7 bg-white rounded-3xl border border-slate-200 p-8 sm:p-10 shadow-xs space-y-6">
          <div>
            <h2 className="text-xl font-bold text-slate-900">Send an Inquiry / Quotation Request</h2>
            <p className="text-xs text-slate-500 mt-1">
              Fill in your organization details below, or submit directly via WhatsApp for an immediate response.
            </p>
          </div>

          {submitted ? (
            <div className="py-10 text-center space-y-4 bg-emerald-50/50 rounded-2xl p-6 border border-emerald-100">
              <div className="w-14 h-14 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">Message Received Successfully</h3>
              <p className="text-xs text-slate-600 max-w-md mx-auto leading-relaxed">
                Thank you for reaching out, <span className="font-semibold text-slate-800">{fullName || 'Valued Client'}</span>. A technical sales engineer from our Blue Area Islamabad office will contact you shortly regarding <span className="font-semibold text-slate-800">{productInterested}</span>.
              </p>
              <div className="pt-2">
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-5 py-2 text-xs font-bold text-emerald-700 bg-white border border-emerald-200 hover:bg-emerald-50 rounded-xl transition-colors cursor-pointer"
                >
                  Submit Another Inquiry
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="e.g. Engr. Muhammad Tariq"
                    className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-slate-200 focus:outline-none focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Phone / WhatsApp Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="e.g. +92 333 5163220"
                    className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-slate-200 focus:outline-none focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Official Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="e.g. info@university.edu.pk"
                    className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-slate-200 focus:outline-none focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Organization / Institution Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={organization}
                    onChange={(e) => setOrganization(e.target.value)}
                    placeholder="e.g. University / College / Ministry"
                    className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-slate-200 focus:outline-none focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Product Interested In *
                  </label>
                  <select
                    value={productInterested}
                    onChange={(e) => setProductInterested(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-slate-200 focus:outline-none focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 bg-white"
                  >
                    <optgroup label="Main Categories">
                      {CATEGORIES.map((cat) => (
                        <option key={cat.id} value={cat.name}>
                          {cat.name}
                        </option>
                      ))}
                    </optgroup>
                    <optgroup label="Specific Products">
                      {PRODUCTS.map((prod) => (
                        <option key={prod.id} value={prod.name}>
                          {prod.name}
                        </option>
                      ))}
                    </optgroup>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    City / Coverage Area *
                  </label>
                  <select
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-slate-200 focus:outline-none focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 bg-white"
                  >
                    {BUSINESS_INFO.coverageCities.map((c) => (
                      <option key={c} value={c}>
                        {c}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Message / Scope of Work / Technical Specifications *
                </label>
                <textarea
                  required
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Please state quantities, room dimensions, required delivery date, or tender documentation requirements..."
                  className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-slate-200 focus:outline-none focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600"
                />
              </div>

              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <button
                  type="button"
                  onClick={handleSendWhatsApp}
                  className="flex-1 py-3 bg-emerald-700 hover:bg-emerald-800 active:scale-95 text-white text-xs font-bold rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md"
                >
                  <MessageSquare className="w-4 h-4 fill-current" />
                  <span>Send via WhatsApp</span>
                </button>

                <button
                  type="submit"
                  className="flex-1 py-3 bg-slate-900 hover:bg-slate-800 active:scale-95 text-white text-xs font-semibold rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit Inquiry Online</span>
                </button>
              </div>
            </form>
          )}
        </div>

        {/* Right Info Cards (5 columns) */}
        <div className="lg:col-span-5 space-y-6">
          {/* Official Location Card */}
          <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 space-y-5 shadow-xs">
            <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
              <Building className="w-5 h-5 text-emerald-700" />
              <span>Head Office Islamabad</span>
            </h3>

            <div className="space-y-4 text-xs text-slate-600">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-slate-900 block">Address:</span>
                  <span className="leading-relaxed block">
                    {BUSINESS_INFO.address}
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-slate-900 block">Phone / WhatsApp:</span>
                  <a
                    href={`tel:${BUSINESS_INFO.phoneClean}`}
                    className="text-emerald-700 hover:underline block font-bold"
                  >
                    {BUSINESS_INFO.phone}
                  </a>
                  <span className="text-[11px] text-slate-500">
                    Office Landline: {BUSINESS_INFO.landline}
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-slate-900 block">Email Inquiries:</span>
                  <a href={`mailto:${BUSINESS_INFO.email}`} className="text-emerald-700 hover:underline block font-semibold">
                    {BUSINESS_INFO.email}
                  </a>
                  <a href={`mailto:${BUSINESS_INFO.emailAlt}`} className="text-slate-500 hover:underline text-[11px] block">
                    {BUSINESS_INFO.emailAlt}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-slate-900 block">Business Hours:</span>
                  <span>{BUSINESS_INFO.workingHours}</span>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <a
                href={BUSINESS_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 bg-slate-950 hover:bg-slate-900 text-white text-xs font-bold rounded-xl transition-colors flex items-center justify-center gap-2 shadow-sm"
              >
                <span>Open in Google Maps Navigation</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Nationwide Supply Reach Card */}
          <div className="bg-slate-50 rounded-2xl border border-slate-200 p-6 space-y-3 text-xs text-slate-600">
            <h4 className="font-bold text-slate-900 uppercase tracking-wider text-[11px]">
              Nationwide Logistics &amp; Installation
            </h4>
            <p className="leading-relaxed">
              We dispatch insured equipment consignments with on-site engineering crews across:
            </p>
            <div className="flex flex-wrap gap-1.5 pt-1">
              {BUSINESS_INFO.coverageCities.map((ct) => (
                <span
                  key={ct}
                  className="px-2.5 py-1 bg-white rounded-md border border-slate-200 text-[11px] font-semibold text-slate-800"
                >
                  {ct}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Embedded Google Map Section for Blue Area Islamabad */}
      <div className="space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div>
            <h3 className="text-lg font-bold text-slate-900">Interactive Location Map</h3>
            <p className="text-xs text-slate-500">
              United Plaza, 2nd Floor, Fazlehaq Road, Blue Area, Islamabad, Pakistan
            </p>
          </div>
          <a
            href={BUSINESS_INFO.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-bold text-emerald-700 hover:text-emerald-800 inline-flex items-center gap-1"
          >
            <span>Open in Full Screen Google Maps</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        <div className="w-full h-96 rounded-3xl overflow-hidden border border-slate-200 shadow-md bg-slate-100 relative">
          <iframe
            title="Kohinoor Audio Visual Islamabad Office Location"
            src="https://maps.google.com/maps?q=United+Plaza+Fazlehaq+Road+Blue+Area+Islamabad&t=&z=16&ie=UTF8&iwloc=&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </div>
  );
};
