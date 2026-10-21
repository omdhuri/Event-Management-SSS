"use client";

import React from 'react';
import { ArrowLeft, X, Calendar, Award, Heart, HeartHandshake, Sparkles } from 'lucide-react';
import { SinceSealBadge, FloralCornerMotif } from './FloralMotif';

interface OurStoryModalProps {
  isOpen: boolean;
  onClose: () => void;
  onPlanEvent: () => void;
}

export const OurStoryModal: React.FC<OurStoryModalProps> = ({
  isOpen,
  onClose,
  onPlanEvent
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-0 sm:p-4 bg-black/70 backdrop-blur-md overflow-y-auto modal-backdrop">
      
      <div className="relative w-full max-w-lg sm:max-w-xl bg-[#FAF7F2] text-[#221F1D] sm:rounded-3xl shadow-2xl h-[100dvh] sm:h-auto sm:max-h-[92vh] flex flex-col overflow-hidden modal-panel border border-[#E8DEC8]">
        
        {/* Subtle Floral watermark */}
        <FloralCornerMotif position="bottom-right" opacity={0.2} className="bottom-0 right-0 pointer-events-none" />

        {/* Top Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-[#EAE3D6] bg-[#FAF7F2]/90 backdrop-blur-sm sticky top-0 z-20">
          <button
            onClick={onClose}
            className="flex items-center gap-2 text-[#221F1D] hover:text-[#7A1B28] font-sans font-bold text-sm cursor-pointer"
          >
            <ArrowLeft className="w-5 h-5 text-[#7A1B28]" />
            <span>About Us</span>
          </button>

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
          
          {/* Arched Hero Image with Seal */}
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-md">
            <img
              src="/images/about-centerpiece.jpg"
              alt="Shree Swami Samarth Events Table Setting"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
            
            {/* Since Seal badge */}
            <div className="absolute bottom-3 left-3 z-10">
              <SinceSealBadge />
            </div>
          </div>

          {/* Main Title & Narrative */}
          <div>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#221F1D] leading-tight mb-3">
              More Than Just Events, We Create <span className="italic font-normal text-[#7A1B28]">Experiences.</span>
            </h2>

            <p className="font-sans text-sm text-[#4A3E36] leading-relaxed mb-4">
              At Shree Swami Samarth Events, we believe every celebration is a unique story. With creativity, attention to detail, and a passion for perfection, we turn your ideas into beautifully crafted moments.
            </p>

            <p className="font-sans text-sm text-[#4A3E36] leading-relaxed">
              Founded in Kalyan, we have curated over 100+ bespoke weddings, milestone birthdays, dreamy baby showers, traditional festive canopies, and premier corporate galas. Our team of designers, florists, and production specialists handle every nuance from conceptualization to execution.
            </p>
          </div>

          {/* 4 Pillars Grid (matching Mobile Screen 5) */}
          <div className="grid grid-cols-2 gap-3 pt-2">
            <div className="p-3.5 rounded-xl bg-white border border-[#EAE3D6] flex flex-col items-center text-center">
              <div className="w-8 h-8 rounded-full bg-[#7A1B28]/10 text-[#7A1B28] flex items-center justify-center mb-1.5">
                <Calendar className="w-4 h-4" />
              </div>
              <span className="font-display text-xl font-bold text-[#221F1D]">100+</span>
              <span className="text-[11px] text-[#7A6E65] font-medium">Events Organized</span>
            </div>

            <div className="p-3.5 rounded-xl bg-white border border-[#EAE3D6] flex flex-col items-center text-center">
              <div className="w-8 h-8 rounded-full bg-[#C59B27]/15 text-[#9A7314] flex items-center justify-center mb-1.5">
                <Award className="w-4 h-4" />
              </div>
              <span className="font-display text-xl font-bold text-[#221F1D]">5+</span>
              <span className="text-[11px] text-[#7A6E65] font-medium">Years of Experience</span>
            </div>

            <div className="p-3.5 rounded-xl bg-white border border-[#EAE3D6] flex flex-col items-center text-center">
              <div className="w-8 h-8 rounded-full bg-[#7A1B28]/10 text-[#7A1B28] flex items-center justify-center mb-1.5">
                <Heart className="w-4 h-4" />
              </div>
              <span className="font-display text-xl font-bold text-[#221F1D]">100%</span>
              <span className="text-[11px] text-[#7A6E65] font-medium">Client Satisfaction</span>
            </div>

            <div className="p-3.5 rounded-xl bg-white border border-[#EAE3D6] flex flex-col items-center text-center">
              <div className="w-8 h-8 rounded-full bg-[#C59B27]/15 text-[#9A7314] flex items-center justify-center mb-1.5">
                <HeartHandshake className="w-4 h-4" />
              </div>
              <span className="font-display text-xl font-bold text-[#221F1D]">Personalized</span>
              <span className="text-[11px] text-[#7A6E65] font-medium">Approach</span>
            </div>
          </div>

          {/* Team Photo Section */}
          <div className="space-y-2">
            <h3 className="font-display text-base font-bold text-[#221F1D]">
              Our Dedicated Event Team
            </h3>
            <div className="rounded-2xl overflow-hidden aspect-[16/9] border border-[#EAE3D6]">
              <img src="/images/team-members.jpg" alt="Our Event Planners Team" className="w-full h-full object-cover" />
            </div>
            <p className="text-xs text-[#7A6E65] italic text-center">
              "We treat every client's celebration as if it were our own family's."
            </p>
          </div>

        </div>

        {/* Bottom CTA Button */}
        <div className="p-4 sm:p-5 bg-white border-t border-[#EAE3D6] sticky bottom-0 z-20">
          <button
            onClick={() => {
              onPlanEvent();
              onClose();
            }}
            className="w-full py-3.5 px-6 rounded-full bg-[#7A1B28] hover:bg-[#8F2030] text-white text-sm font-sans font-bold flex items-center justify-center gap-2 shadow-md transition-all active:scale-[0.98] cursor-pointer"
          >
            <Sparkles className="w-4 h-4 text-[#E2B856]" />
            <span>Connect with Our Team on WhatsApp</span>
          </button>
        </div>

      </div>

    </div>
  );
};
