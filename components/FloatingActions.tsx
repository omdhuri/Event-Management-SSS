"use client";

import React from 'react';
import { WhatsAppIcon } from './icons';

interface FloatingActionsProps {
  onOpenPlanModal: () => void;
}

/** Persistent WhatsApp entry point — the primary conversion channel for the business. */
export const FloatingActions: React.FC<FloatingActionsProps> = ({ onOpenPlanModal }) => {
  return (
    <div className="fixed bottom-5 right-5 z-40 flex items-center gap-3 select-none">
      <button
        onClick={onOpenPlanModal}
        className="relative w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#1FBE5A] text-white flex items-center justify-center shadow-[0_8px_24px_rgba(37,211,102,0.4)] transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer"
        aria-label="Plan your event on WhatsApp"
      >
        <WhatsAppIcon className="relative w-7 h-7" />
      </button>
    </div>
  );
};
