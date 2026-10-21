"use client";

import React from 'react';
import { X, Check, Sparkles, Tag, ArrowRight } from 'lucide-react';
import { WhatsAppIcon } from './icons';
import { ServiceItem } from '../data/eventsData';

interface ServiceDetailModalProps {
  service: ServiceItem | null;
  onClose: () => void;
  onPlanEvent: (serviceTitle: string) => void;
}

export const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({
  service,
  onClose,
  onPlanEvent
}) => {
  if (!service) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-0 sm:p-4 bg-black/70 backdrop-blur-md overflow-y-auto modal-backdrop">
      
      <div className="relative w-full max-w-lg sm:max-w-xl bg-[#FAF7F2] text-[#221F1D] sm:rounded-3xl shadow-2xl h-[100dvh] sm:h-auto sm:max-h-[92vh] flex flex-col overflow-hidden modal-panel border border-[#E8DEC8]">
        
        {/* Top Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-[#EAE3D6] bg-[#FAF7F2]/90 backdrop-blur-sm sticky top-0 z-20">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-[#7A1B28]" />
            <span className="font-display font-bold text-lg text-[#221F1D]">{service.title} Package</span>
          </div>

          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white border border-[#D8CCBD] text-[#221F1D] flex items-center justify-center hover:bg-[#7A1B28] hover:text-white transition-colors cursor-pointer"
            aria-label="Close"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 min-h-0 overflow-y-auto overscroll-contain p-5 sm:p-6 space-y-6">
          
          {/* Banner Image */}
          <div className="relative aspect-[16/9] rounded-2xl overflow-hidden shadow-md">
            <img src={service.image} alt={service.title} loading="lazy" decoding="async" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 text-white">
              <span className="text-[10px] uppercase font-bold tracking-widest text-[#E2B856]">
                Starting from {service.startingPrice}
              </span>
              <h2 className="font-display text-2xl font-bold">{service.title}</h2>
            </div>
          </div>

          {/* Description */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#7A1B28] mb-1">Overview</h3>
            <p className="font-sans text-sm text-[#423932] leading-relaxed">
              {service.fullDesc}
            </p>
          </div>

          {/* Deliverables / Inclusions */}
          <div className="bg-white rounded-2xl p-5 border border-[#EAE3D6] space-y-3">
            <h3 className="font-display text-base font-bold text-[#221F1D]">
              Package Inclusions & Deliverables
            </h3>
            <div className="space-y-2.5">
              {service.deliverables.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5">
                  <div className="w-4 h-4 rounded-full bg-[#7A1B28]/10 text-[#7A1B28] flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3 stroke-[3]" />
                  </div>
                  <span className="font-sans text-xs sm:text-sm text-[#38312B]">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Popular Themes */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#7A1B28] mb-2 flex items-center gap-1.5">
              <Tag className="w-3.5 h-3.5" />
              <span>Popular Themes & Styles</span>
            </h3>
            <div className="flex flex-wrap gap-2">
              {service.popularThemes.map((theme, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded-full bg-white border border-[#E8DEC8] text-xs font-medium text-[#4A3E36]"
                >
                  {theme}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Footer Actions */}
        <div className="p-4 sm:p-5 bg-white border-t border-[#EAE3D6] sticky bottom-0 z-20 flex gap-3">
          <button
            onClick={() => {
              onPlanEvent(service.title);
              onClose();
            }}
            className="flex-1 py-3.5 px-5 rounded-full bg-[#7A1B28] hover:bg-[#8F2030] text-white text-xs sm:text-sm font-sans font-bold flex items-center justify-center gap-2 shadow-md transition-all cursor-pointer"
          >
            <WhatsAppIcon className="w-4 h-4 text-[#E2B856]" />
            <span>Book This Service on WhatsApp</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>

    </div>
  );
};
