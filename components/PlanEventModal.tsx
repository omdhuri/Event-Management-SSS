"use client";

import React, { useState } from 'react';
import { X, Sparkles, Calendar, Users, MapPin, Check } from 'lucide-react';
import { WhatsAppIcon } from './icons';
import { WHATSAPP_URL, PHONE_DISPLAY } from '../data/contact';

interface PlanEventModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: string;
}

export const PlanEventModal: React.FC<PlanEventModalProps> = ({
  isOpen,
  onClose,
  initialService
}) => {
  const [eventType, setEventType] = useState(initialService || 'Wedding');
  const [guestCount, setGuestCount] = useState(100);
  const [decorStyle, setDecorStyle] = useState('Royal Luxury');
  const [eventDate, setEventDate] = useState('');
  const [area, setArea] = useState('Kalyan, Maharashtra');
  const [clientName, setClientName] = useState('');
  const [clientPhone, setClientPhone] = useState('');
  const [addons, setAddons] = useState<string[]>(['Floral Backdrop', 'LED Name Board']);
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const toggleAddon = (item: string) => {
    setAddons(prev =>
      prev.includes(item) ? prev.filter(i => i !== item) : [...prev, item]
    );
  };

  const handleLaunchWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    const message = `Hello Shree Swami Samarth Events!%0A%0A🎉 *Event Planning Inquiry*%0A• *Client Name:* ${encodeURIComponent(clientName || 'Valued Client')}%0A• *Contact Phone:* ${encodeURIComponent(clientPhone || 'Provided')}%0A• *Event Type:* ${encodeURIComponent(eventType)}%0A• *Expected Guests:* ${guestCount} Guests%0A• *Preferred Decor Style:* ${encodeURIComponent(decorStyle)}%0A• *Event Date:* ${encodeURIComponent(eventDate || 'Flexible')}%0A• *Location / Venue Area:* ${encodeURIComponent(area)}%0A• *Selected Add-ons:* ${encodeURIComponent(addons.join(', ') || 'Custom')}%0A%0APlease share your availability and a customized quotation proposal!`;

    setTimeout(() => {
      window.open(`${WHATSAPP_URL}?text=${message}`, '_blank');
      setSubmitted(false);
      onClose();
    }, 1000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-0 sm:p-4 bg-black/70 backdrop-blur-md overflow-y-auto modal-backdrop">
      
      <div className="relative w-full max-w-lg sm:max-w-xl bg-[#FAF7F2] text-[#221F1D] sm:rounded-3xl shadow-2xl h-[100dvh] sm:h-auto sm:max-h-[92vh] flex flex-col overflow-hidden modal-panel border border-[#E8DEC8]">
        
        {/* Top Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-[#EAE3D6] bg-[#FAF7F2]/90 backdrop-blur-sm sticky top-0 z-20">
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-[#C59B27]" />
            <span className="font-display font-bold text-lg sm:text-xl text-[#221F1D]">Plan Your Celebration</span>
          </div>

          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white border border-[#D8CCBD] text-[#221F1D] flex items-center justify-center hover:bg-[#7A1B28] hover:text-white transition-colors cursor-pointer"
            aria-label="Close"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Scrollable Form Content */}
        <div className="flex-1 min-h-0 overflow-y-auto overscroll-contain p-5 sm:p-6 space-y-5">
          
          {submitted ? (
            <div className="py-16 text-center space-y-3">
              <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-sm">
                <Check className="w-7 h-7" />
              </div>
              <h3 className="font-display text-2xl font-bold text-[#221F1D]">Inquiry Assembled!</h3>
              <p className="text-xs text-[#7A6E65]">Connecting directly to Shree Swami Samarth Events on WhatsApp...</p>
            </div>
          ) : (
            <form onSubmit={handleLaunchWhatsApp} className="space-y-4">
              
              {/* Event Type Grid */}
              <div>
                <label className="block text-xs font-bold text-[#423932] uppercase tracking-wider mb-2">
                  1. Select Occasion / Event Type *
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {[
                    'Weddings',
                    'Birthday Parties',
                    'Baby Showers',
                    'Festive & Traditional',
                    'Corporate Events',
                    'Anniversary / Gala'
                  ].map((type) => (
                    <button
                      key={type}
                      type="button"
                      onClick={() => setEventType(type)}
                      className={`px-3 py-2 rounded-xl text-xs font-sans font-semibold transition-all text-center border cursor-pointer ${
                        eventType === type
                          ? 'bg-[#7A1B28] text-white border-[#7A1B28] shadow-sm'
                          : 'bg-white text-[#4A3E36] border-[#D8CCBD] hover:border-[#7A1B28]/40'
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              {/* Guest Count Range */}
              <div>
                <div className="flex items-center justify-between text-xs font-bold text-[#423932] uppercase tracking-wider mb-1.5">
                  <span className="flex items-center gap-1.5"><Users className="w-3.5 h-3.5 text-[#7A1B28]" /> 2. Estimated Guest Count</span>
                  <span className="text-[#7A1B28] font-bold text-sm">{guestCount} Guests</span>
                </div>
                <input
                  type="range"
                  min="20"
                  max="1000"
                  step="10"
                  value={guestCount}
                  onChange={(e) => setGuestCount(Number(e.target.value))}
                  className="w-full accent-[#7A1B28] cursor-pointer"
                />
              </div>

              {/* Decor Style */}
              <div>
                <label className="block text-xs font-bold text-[#423932] uppercase tracking-wider mb-1.5">
                  3. Preferred Decor Theme / Aesthetic
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {[
                    'Royal Luxury & Chandeliers',
                    'Dreamy Pastel Balloon Cloud',
                    'Traditional Marigold Heritage',
                    'Minimalist Modern Chic'
                  ].map((style) => (
                    <button
                      key={style}
                      type="button"
                      onClick={() => setDecorStyle(style)}
                      className={`p-2.5 rounded-xl text-xs font-medium text-left border transition-all cursor-pointer ${
                        decorStyle === style
                          ? 'bg-[#FAF2E8] border-[#7A1B28] text-[#7A1B28] font-bold ring-1 ring-[#7A1B28]'
                          : 'bg-white border-[#E2D8CC] text-[#52453D]'
                      }`}
                    >
                      {style}
                    </button>
                  ))}
                </div>
              </div>

              {/* Date & Location */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-bold text-[#423932] uppercase tracking-wider mb-1">
                    <Calendar className="w-3.5 h-3.5 inline mr-1 text-[#7A1B28]" />
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    value={eventDate}
                    onChange={(e) => setEventDate(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl bg-white border border-[#D8CCBD] text-xs text-[#221F1D] focus:ring-2 focus:ring-[#7A1B28] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-[#423932] uppercase tracking-wider mb-1">
                    <MapPin className="w-3.5 h-3.5 inline mr-1 text-[#7A1B28]" />
                    Venue / Area in Kalyan
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Kalyan, Maharashtra"
                    value={area}
                    onChange={(e) => setArea(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl bg-white border border-[#D8CCBD] text-xs text-[#221F1D] focus:ring-2 focus:ring-[#7A1B28] focus:outline-none"
                  />
                </div>
              </div>

              {/* Key Deliverables & Add-ons Checklist */}
              <div>
                <label className="block text-xs font-bold text-[#423932] uppercase tracking-wider mb-1.5">
                  4. Special Requirements & Elements
                </label>
                <div className="grid grid-cols-2 gap-1.5">
                  {[
                    'Floral Backdrop',
                    'LED Name Board',
                    'Balloon Arches',
                    'Photo Corner Setup',
                    'Car Decoration',
                    'Catering Coordination'
                  ].map((addon) => {
                    const isChecked = addons.includes(addon);
                    return (
                      <button
                        key={addon}
                        type="button"
                        onClick={() => toggleAddon(addon)}
                        className={`flex items-center gap-2 px-2.5 py-1.5 rounded-lg text-xs transition-all border text-left cursor-pointer ${
                          isChecked
                            ? 'bg-[#7A1B28]/10 text-[#7A1B28] border-[#7A1B28] font-semibold'
                            : 'bg-white text-[#6E6259] border-[#E8DEC8]'
                        }`}
                      >
                        <span
                          aria-hidden="true"
                          className={`w-4 h-4 rounded flex items-center justify-center shrink-0 transition-colors ${
                            isChecked ? 'bg-[#7A1B28] text-white' : 'border border-[#B8A99A] bg-white'
                          }`}
                        >
                          {isChecked && <Check className="w-3 h-3 stroke-[3]" />}
                        </span>
                        <span className="truncate">{addon}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Client Contact Info */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 border-t border-[#EAE3D6]">
                <div>
                  <label className="block text-[11px] font-bold text-[#423932] uppercase tracking-wider mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Sneha Deshpande"
                    value={clientName}
                    onChange={(e) => setClientName(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl bg-white border border-[#D8CCBD] text-xs text-[#221F1D] focus:ring-2 focus:ring-[#7A1B28] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-[#423932] uppercase tracking-wider mb-1">
                    Phone / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder={PHONE_DISPLAY}
                    value={clientPhone}
                    onChange={(e) => setClientPhone(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl bg-white border border-[#D8CCBD] text-xs text-[#221F1D] focus:ring-2 focus:ring-[#7A1B28] focus:outline-none"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 px-6 rounded-full bg-[#7A1B28] hover:bg-[#8F2030] text-white text-sm font-sans font-bold flex items-center justify-center gap-2 shadow-lg transition-all active:scale-[0.98] cursor-pointer"
                >
                  <WhatsAppIcon className="w-4 h-4 text-[#E2B856]" />
                  <span>Get Instant Custom Quote on WhatsApp</span>
                </button>
              </div>

            </form>
          )}

        </div>

      </div>

    </div>
  );
};
