import React, { useState } from 'react';
import { BUSINESS_INFO } from '../data/products';
import { MessageSquare, X } from 'lucide-react';

export const WhatsAppFloatingButton: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const quickMessages = [
    'Pricing for Digital Podiums',
    'Pricing for 75" / 86" Interactive LEDs',
    'Conference Room Audio Quote',
    'Turnkey Smart Classroom Setup'
  ];

  const handleSendQuick = (msg: string) => {
    const encoded = encodeURIComponent(`Hello Kohinoor AV, I need details on: ${msg}`);
    window.open(`${BUSINESS_INFO.whatsappUrl}?text=${encoded}`, '_blank');
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end">
      {isOpen && (
        <div className="mb-3 w-72 bg-white rounded-2xl shadow-2xl border border-emerald-100 p-4 transition-all duration-200 animate-in fade-in slide-in-from-bottom-3">
          <div className="flex items-center justify-between pb-2.5 border-b border-slate-100">
            <div>
              <h4 className="text-xs font-bold text-slate-900">Kohinoor Audio Visual</h4>
              <p className="text-[11px] text-emerald-700 font-semibold">Direct WhatsApp Sales</p>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 text-slate-400 hover:text-slate-600 rounded-lg hover:bg-slate-100 transition-colors"
              aria-label="Close"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="space-y-1.5 my-3">
            {quickMessages.map((msg, i) => (
              <button
                key={i}
                onClick={() => handleSendQuick(msg)}
                className="w-full text-left text-xs p-2 rounded-lg bg-slate-50 hover:bg-emerald-50 hover:text-emerald-900 text-slate-700 transition-colors border border-slate-100 block font-medium"
              >
                {msg}
              </button>
            ))}
          </div>

          <a
            href={BUSINESS_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-2 bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-bold rounded-lg text-center flex items-center justify-center gap-1.5 transition-colors"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Start Chat</span>
          </a>
        </div>
      )}

      {/* Compact Circular Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Chat on WhatsApp"
        className="cursor-pointer w-12 h-12 bg-emerald-700 hover:bg-emerald-800 text-white rounded-full shadow-xl hover:shadow-emerald-700/30 active:scale-95 transition-all duration-200 border-2 border-white/25 flex items-center justify-center"
      >
        {isOpen ? <X className="w-5 h-5" /> : <MessageSquare className="w-5 h-5 fill-current" />}
      </button>
    </div>
  );
};
