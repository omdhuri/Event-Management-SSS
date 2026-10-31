"use client";

import React, { useState } from 'react';
import { Sparkles, HeartHandshake } from 'lucide-react';

interface OwnerProfileCardProps {
  compact?: boolean;
  className?: string;
}

const OWNER_PHOTOS = [
  {
    src: '/images/owner/shubham-mhatre-01.webp',
    alt: 'Shubham Mhatre - Founder & Lead Event Stylist at Shree Swami Samarth Events',
  },
  {
    src: '/images/owner/shubham-mhatre-02.webp',
    alt: 'Shubham Mhatre - Creative Director at Shree Swami Samarth Events',
  },
];

export const OwnerProfileCard: React.FC<OwnerProfileCardProps> = ({
  compact = false,
  className = '',
}) => {
  const [activeLook, setActiveLook] = useState<0 | 1>(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleSwap = () => {
    setIsAnimating(true);
    setActiveLook((prev) => (prev === 0 ? 1 : 0));
    setTimeout(() => setIsAnimating(false), 600);
  };

  return (
    <div className={`relative ${className}`}>
      {/* Photo Frame Container */}
      <div className="relative mx-auto w-full max-w-sm sm:max-w-md">
        
        {/* Interactive Clickable Photo Card */}
        <div
          role="button"
          tabIndex={0}
          onClick={handleSwap}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              handleSwap();
            }
          }}
          title="Click to view alternate portrait"
          aria-label="Portrait of Shubham Mhatre. Click photo to switch portrait view"
          className={`group relative aspect-[4/5] w-full cursor-pointer select-none overflow-hidden rounded-2xl sm:rounded-3xl border-2 border-[#E8DEC8] bg-[#F5EFE6] shadow-[0_16px_36px_-12px_rgba(122,27,40,0.22)] transition-all duration-500 hover:border-[#C59B27]/80 hover:shadow-[0_20px_44px_-12px_rgba(122,27,40,0.32)] active:scale-[0.99] focus:outline-none focus:ring-2 focus:ring-[#7A1B28] focus:ring-offset-2 ${
            isAnimating ? 'ring-2 ring-[#C59B27]/80' : ''
          }`}
        >
          {/* Photos Stack for Smooth Crossfade */}
          {OWNER_PHOTOS.map((photo, index) => {
            const isActive = activeLook === index;
            return (
              <img
                key={photo.src}
                src={photo.src}
                alt={photo.alt}
                width={800}
                height={1000}
                loading={index === 0 ? 'eager' : 'lazy'}
                decoding="async"
                className={`absolute inset-0 h-full w-full object-cover object-top transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                  isActive
                    ? 'scale-100 opacity-100 z-10'
                    : 'scale-105 opacity-0 pointer-events-none z-0'
                }`}
              />
            );
          })}

          {/* Vignette & Contrast Overlay */}
          <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

          {/* Top Left Badge: Founder Tag */}
          <div className="absolute top-3.5 left-3.5 z-20 flex items-center gap-1.5 rounded-full bg-[#7A1B28]/90 px-3 py-1 text-[11px] font-bold text-white shadow-md backdrop-blur-sm border border-[#E8DEC8]/30">
            <Sparkles className="h-3 w-3 text-[#E2B856]" />
            <span>Founder & Lead Stylist</span>
          </div>

          {/* Bottom Card Info Overlay */}
          <div className="absolute inset-x-0 bottom-0 z-20 p-4 sm:p-5 text-white">
            <h4 className="font-display text-xl sm:text-2xl font-bold tracking-tight text-white drop-shadow-sm">
              Shubham Mhatre
            </h4>
            <p className="mt-0.5 text-xs sm:text-[13px] font-medium text-[#E2B856] drop-shadow-sm">
              Founder & Chief Event Designer
            </p>
          </div>
        </div>

        {/* Caption Card */}
        {!compact ? (
          <div className="mt-3.5 rounded-xl border border-[#EAE3D6] bg-white p-4 shadow-sm text-left">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#7A1B28] mb-1.5">
              <HeartHandshake className="h-3.5 w-3.5" />
              <span>Personal Commitment</span>
            </div>
            <p className="font-serif italic text-[13px] sm:text-sm text-[#4A3E36] leading-relaxed">
              &ldquo;Every celebration is a personal milestone. When a family trusts us with their wedding or celebration, my promise is to personally oversee the perfection of every petal, drape, and light.&rdquo;
            </p>
            <div className="mt-2.5 flex items-center justify-between border-t border-[#F2ECE1] pt-2 text-[11.5px] text-[#7A6E65]">
              <span className="font-bold text-[#221F1D]">Shubham Mhatre</span>
              <span>Kalyan, Maharashtra</span>
            </div>
          </div>
        ) : (
          <p className="mt-2.5 text-center font-serif italic text-xs text-[#7A6E65]">
            &ldquo;We treat every client&apos;s celebration as if it were our own family&apos;s.&rdquo;
            <span className="block not-italic font-sans font-semibold text-[#221F1D] text-[11px] mt-0.5">
              — Shubham Mhatre, Founder
            </span>
          </p>
        )}
      </div>
    </div>
  );
};
