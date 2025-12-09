'use client';

import React from 'react';
import { MessageCircle } from 'lucide-react';
import { formatWhatsAppLink, CONTACT_INFO, WHATSAPP_MESSAGES } from '@/lib/utils';

export function WhatsAppButton() {
  const handleClick = () => {
    const link = formatWhatsAppLink(CONTACT_INFO.phone, WHATSAPP_MESSAGES.default);
    window.open(link, '_blank');
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-2xl hover:scale-110 transition-all duration-300 group"
      aria-label="Conversar no WhatsApp"
    >
      <MessageCircle className="w-7 h-7" />
      
      {/* Tooltip */}
      <span className="absolute right-full mr-3 px-3 py-2 bg-dark-900 text-white text-sm rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
        Fale conosco!
      </span>

      {/* Pulse animation */}
      <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75 animate-ping"></span>
    </button>
  );
}