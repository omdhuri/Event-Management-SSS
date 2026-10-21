"use client";

import React from 'react';
import { WhatsAppIcon } from './icons';
import { whatsappHref } from '../data/contact';

/** Persistent WhatsApp entry point — direct chat, always accessible on every scroll depth. */
export const FloatingActions: React.FC = () => {
  return (
    <div className="fixed bottom-5 right-5 z-40 flex items-center gap-3 select-none">
      <a
        href={whatsappHref('Hello Shree Swami Samarth Events, I would like to enquire about event planning and decor.')}
        target="_blank"
        rel="noopener noreferrer"
        className="relative w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#1FBE5A] text-white flex items-center justify-center shadow-[0_8px_24px_rgba(37,211,102,0.4)] transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer"
        aria-label="Instant WhatsApp chat with our event planner"
      >
        <WhatsAppIcon className="relative w-7 h-7" />
      </a>
    </div>
  );
};
