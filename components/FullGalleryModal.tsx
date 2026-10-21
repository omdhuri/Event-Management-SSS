"use client";

import React, { useState } from 'react';
import { X, Calendar, MapPin, Eye } from 'lucide-react';
import { BrandLogo, FloralCornerMotif, SectionOverline } from './FloralMotif';
import { GALLERY_DATA, GalleryItem } from '../data/eventsData';

interface FullGalleryModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectEvent: (event: GalleryItem) => void;
}

export const FullGalleryModal: React.FC<FullGalleryModalProps> = ({
  isOpen,
  onClose,
  onSelectEvent
}) => {
  const [activeTab, setActiveTab] = useState('All');

  if (!isOpen) return null;

  const categories = ['All', 'Birthdays', 'Baby Shower', 'Weddings', 'Festive', 'Corporate'];

  const filteredItems = activeTab === 'All'
    ? GALLERY_DATA
    : GALLERY_DATA.filter(item => item.category === activeTab);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-0 sm:p-4 bg-black/80 backdrop-blur-md overflow-y-auto modal-backdrop">
      
      <div className="relative w-full max-w-2xl sm:max-w-4xl bg-[#0B1B28] text-[#FAF7F2] sm:rounded-3xl shadow-2xl h-[100dvh] sm:h-auto sm:max-h-[92vh] flex flex-col overflow-hidden modal-panel border border-[#1E3447]">
        
        {/* Subtle Floral watermark */}
        <FloralCornerMotif position="bottom-right" opacity={0.15} className="bottom-0 right-0 pointer-events-none text-[#C59B27]" />

        {/* Top Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#1E3447] bg-[#0B1B28]/95 backdrop-blur-sm sticky top-0 z-20">
          <BrandLogo darkTheme size="sm" />

          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-[#122536] border border-[#1E3447] text-[#E2B856] flex items-center justify-center hover:bg-[#7A1B28] hover:text-white transition-colors cursor-pointer"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Gallery Content */}
        <div className="flex-1 min-h-0 overflow-y-auto overscroll-contain p-5 sm:p-8 space-y-6">
          
          {/* Header Title & Subtitle */}
          <div className="text-center max-w-xl mx-auto">
            <SectionOverline text="OUR WORK" dark centered />
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-2">
              Moments We've <span className="italic font-normal text-[#E2B856]">Made Special</span>
            </h2>
            <p className="text-xs sm:text-sm text-gray-300 font-sans">
              Take a look at some of our favourite celebrations and the stories behind them.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            {categories.map((cat) => {
              const isSelected = activeTab === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveTab(cat)}
                  className={`px-4 py-1.5 rounded-full text-xs font-sans font-semibold transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-[#7A1B28] text-white shadow-md border border-[#A22637]'
                      : 'bg-[#122536] text-gray-300 hover:text-white hover:bg-[#1A334A] border border-[#1E3447]'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* Gallery Image Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3.5 sm:gap-4 pt-2">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                onClick={() => {
                  onSelectEvent(item);
                  onClose();
                }}
                className="aspect-[4/3] sm:aspect-square rounded-2xl overflow-hidden relative group cursor-pointer border border-[#1E3447] shadow-lg transition-all duration-300 hover:border-[#C59B27] hover:-translate-y-1"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                {/* Category Pill */}
                <div className="absolute top-2.5 left-2.5 z-10">
                  <span className="bg-[#122536]/80 text-[#E2B856] text-[9px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">
                    {item.category}
                  </span>
                </div>

                {/* Bottom Overlay Info */}
                <div className="absolute bottom-2.5 left-2.5 right-2.5 z-10 text-left">
                  <div className="flex items-center gap-1.5 text-[10px] text-gray-300 font-sans mb-0.5">
                    <span className="flex items-center gap-0.5"><Calendar className="w-2.5 h-2.5" /> {item.date}</span>
                    <span>•</span>
                    <span className="flex items-center gap-0.5"><MapPin className="w-2.5 h-2.5" /> {item.location}</span>
                  </div>
                  <h4 className="font-display text-xs sm:text-sm font-bold text-white leading-tight truncate group-hover:text-[#E2B856] transition-colors">
                    {item.title}
                  </h4>
                  <div className="hidden sm:flex items-center gap-1 text-[10px] text-[#E2B856] font-semibold mt-1">
                    <Eye className="w-3 h-3" />
                    <span>View Case Study</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="p-4 bg-[#081622] border-t border-[#1E3447] text-center text-xs text-gray-400">
          Showing {filteredItems.length} curated celebration setups in Kalyan, Maharashtra.
        </div>

      </div>

    </div>
  );
};
