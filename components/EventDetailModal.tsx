"use client";

import React, { useState } from 'react';
import { ArrowLeft, ChevronLeft, ChevronRight, Calendar, MapPin, Tag, Check, X } from 'lucide-react';
import { WhatsAppIcon } from './icons';
import { FloralCornerMotif } from './FloralMotif';
import { GalleryItem } from '../data/eventsData';

interface EventDetailModalProps {
  event: GalleryItem | null;
  onClose: () => void;
  onEnquire: (event: GalleryItem) => void;
}

export const EventDetailModal: React.FC<EventDetailModalProps> = ({
  event,
  onClose,
  onEnquire
}) => {
  const [activePhotoIdx, setActivePhotoIdx] = useState(0);

  if (!event) return null;

  const photoList = event.images && event.images.length > 0 ? event.images : [event.image];

  const handlePrev = () => {
    setActivePhotoIdx((prev) => (prev === 0 ? photoList.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActivePhotoIdx((prev) => (prev === photoList.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-0 sm:p-4 bg-black/70 backdrop-blur-md overflow-y-auto modal-backdrop">
      
      {/* Modal Card / Screen Container */}
      <div className="relative w-full max-w-lg sm:max-w-xl bg-[#FAF7F2] text-[#221F1D] sm:rounded-3xl shadow-2xl h-[100dvh] sm:h-auto sm:max-h-[92vh] flex flex-col overflow-hidden modal-panel border border-[#E8DEC8]">
        
        {/* Subtle Floral watermark */}
        <FloralCornerMotif position="bottom-right" opacity={0.25} className="bottom-0 right-0 pointer-events-none" />

        {/* Top Header Bar */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-[#EAE3D6] bg-[#FAF7F2]/90 backdrop-blur-sm sticky top-0 z-20">
          <button
            onClick={onClose}
            className="flex items-center gap-2 text-[#221F1D] hover:text-[#7A1B28] font-sans font-bold text-sm cursor-pointer"
          >
            <ArrowLeft className="w-5 h-5 text-[#7A1B28]" />
            <span>{event.category} Decoration</span>
          </button>

          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white border border-[#D8CCBD] text-[#221F1D] flex items-center justify-center hover:bg-[#7A1B28] hover:text-white transition-colors cursor-pointer"
            aria-label="Close"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Scrollable Body Content */}
        <div className="flex-1 min-h-0 overflow-y-auto overscroll-contain p-5 sm:p-6 space-y-6">
          
          {/* Main Photo with Carousel Arrows */}
          <div className="space-y-3">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-md bg-black">
              <img
                src={photoList[activePhotoIdx]}
                alt={event.title}
                className="w-full h-full object-cover transition-all duration-300"
              />

              {/* Prev / Next Arrows */}
              {photoList.length > 1 && (
                <>
                  <button
                    onClick={handlePrev}
                    className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/90 hover:bg-white text-[#221F1D] flex items-center justify-center shadow-lg transition-transform active:scale-90"
                    aria-label="Previous photo"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={handleNext}
                    className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/90 hover:bg-white text-[#221F1D] flex items-center justify-center shadow-lg transition-transform active:scale-90"
                    aria-label="Next photo"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </>
              )}
            </div>

            {/* Thumbnail Strip */}
            {photoList.length > 1 && (
              <div className="flex items-center gap-2 overflow-x-auto pb-1">
                {photoList.map((thumb, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActivePhotoIdx(idx)}
                    className={`relative w-16 h-12 rounded-lg overflow-hidden shrink-0 border-2 transition-all cursor-pointer ${
                      activePhotoIdx === idx ? 'border-[#7A1B28] ring-1 ring-[#7A1B28]' : 'border-transparent opacity-60 hover:opacity-100'
                    }`}
                  >
                    <img src={thumb} alt={`Thumbnail ${idx + 1}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Title & Metadata Badges */}
          <div>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#221F1D] leading-tight mb-3">
              {event.title}
            </h2>

            {/* Badges Row */}
            <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs font-sans text-[#6E6259]">
              <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-[#EAE3D6]">
                <Calendar className="w-3.5 h-3.5 text-[#7A1B28]" />
                <span>{event.date}</span>
              </span>

              <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-[#EAE3D6]">
                <MapPin className="w-3.5 h-3.5 text-[#7A1B28]" />
                <span>{event.location}</span>
              </span>

              <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-[#EAE3D6]">
                <Tag className="w-3.5 h-3.5 text-[#7A1B28]" />
                <span>{event.category}</span>
              </span>
            </div>
          </div>

          {/* Event Narrative Description */}
          <p className="font-sans text-sm sm:text-[15px] text-[#423932] leading-relaxed">
            {event.description}
          </p>

          {/* Event Highlights Checklist with Red Checks */}
          <div className="bg-white/80 rounded-2xl p-5 border border-[#EAE3D6] space-y-3">
            <h3 className="font-display text-lg font-bold text-[#221F1D]">
              Event Highlights
            </h3>

            <div className="space-y-2.5">
              {event.highlights.map((item, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#7A1B28] text-white flex items-center justify-center shrink-0 shadow-xs">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span className="font-sans text-xs sm:text-sm text-[#38312B] font-medium">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Bottom Fixed Enquire Button */}
        <div className="p-4 sm:p-5 bg-white border-t border-[#EAE3D6] sticky bottom-0 z-20 shadow-lg">
          <button
            onClick={() => {
              onEnquire(event);
              onClose();
            }}
            className="w-full py-3.5 px-6 rounded-full bg-[#7A1B28] hover:bg-[#8F2030] text-white text-sm font-sans font-bold flex items-center justify-center gap-2 shadow-[0_4px_16px_rgba(122,27,40,0.3)] transition-all active:scale-[0.98] cursor-pointer"
          >
            <WhatsAppIcon className="w-4 h-4 text-[#E2B856]" />
            <span>Enquire for Similar Setup</span>
          </button>
        </div>

      </div>

    </div>
  );
};
