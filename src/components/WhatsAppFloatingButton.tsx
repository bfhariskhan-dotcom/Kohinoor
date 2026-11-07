import React, { useState } from 'react';
import { BUSINESS_INFO } from '../data/products';
import { MessageSquare, X } from 'lucide-react';

export const WhatsAppFloatingButton: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const quickMessages = [
    'Hello Kohinoor AV, I would like to order / inquire about Digital Podiums.',
    'Hello, I need pricing and specifications for 75" and 86" Interactive Flat Panel LEDs.',
    'Hi, we require a formal proposal for a Conference Room Audio System in Islamabad.',
    'Hello Kohinoor AV, please share details for Turnkey Smart Classroom setups.'
  ];

  const handleSendQuick = (msg: string) => {
    const encoded = encodeURIComponent(msg);
    window.open(`${BUSINESS_INFO.whatsappUrl}?text=${encoded}`, '_blank');
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Quick message options popover in cohesive Royal Blue */}
      {isOpen && (
        <div className="mb-3 w-80 bg-white rounded-2xl shadow-2xl border border-slate-200 p-4 transition-all duration-200 animate-in fade-in slide-in-from-bottom-3">
          <div className="flex items-center justify-between pb-3 border-b border-slate-100">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-blue-600 text-white flex items-center justify-center font-bold text-xs shadow-xs">
                KAV
              </div>
              <div>
                <h4 className="text-xs font-bold text-slate-900">Kohinoor Audio Visual</h4>
                <p className="text-[11px] text-blue-600 font-semibold">Direct WhatsApp Sales &middot; Online</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 text-slate-400 hover:text-slate-600 rounded-lg hover:bg-slate-100 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <p className="text-xs text-slate-600 my-3 leading-relaxed">
            Need immediate pricing, quotations, or delivery details in Islamabad or nationwide? Tap a message:
          </p>

          <div className="space-y-1.5">
            {quickMessages.map((msg, i) => (
              <button
                key={i}
                onClick={() => handleSendQuick(msg)}
                className="w-full text-left text-xs p-2.5 rounded-xl bg-slate-50 hover:bg-blue-50 hover:text-blue-800 text-slate-700 transition-colors border border-slate-100 hover:border-blue-200 block font-medium"
              >
                {msg}
              </button>
            ))}
          </div>

          <div className="mt-3 pt-2 border-t border-slate-100">
            <a
              href={BUSINESS_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold rounded-xl text-center flex items-center justify-center gap-2 transition-colors shadow-sm"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Open Direct WhatsApp Chat</span>
            </a>
          </div>
        </div>
      )}

      {/* Floating Action Button in Royal Blue Theme */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Contact Kohinoor Audio Visual on WhatsApp"
        className="cursor-pointer group flex items-center gap-2.5 px-4 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-xl hover:shadow-blue-600/30 active:scale-95 transition-all duration-200 border-2 border-white/20"
      >
        <MessageSquare className="w-5 h-5 fill-current" />
        <span className="text-xs font-extrabold tracking-wide hidden sm:inline">
          Order on WhatsApp
        </span>
      </button>
    </div>
  );
};
