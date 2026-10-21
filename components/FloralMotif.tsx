"use client";

import React from 'react';

/**
 * Official "Shree Swami Samarth Events" lotus mark — vector recreation of the
 * brand logo: seven gold petals converging at a single point, each split by a
 * negative-space slit, with a deeper amber centre bud and inner accent.
 * `dark` renders the light-gold variant for midnight navy surfaces.
 */
export const LotusMark: React.FC<{ className?: string; dark?: boolean; id?: string }> = ({
  className = 'w-12 h-12',
  dark = false,
  id
}) => {
  const gold = dark ? '#E2B856' : '#C8872B';
  const deep = dark ? '#C59B27' : '#B2741E';
  const accent = dark ? '#9E771B' : '#95600F';
  const pid = `lotus-petal${id ? `-${id}` : ''}`;
  return (
    <svg viewBox="0 0 240 208" className={className} aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <path
          id={pid}
          fillRule="evenodd"
          d="M0 -175 C -15 -134, -21.5 -84, -20.5 -42 C -19.8 -17, -11 -3.5, 0 0 C 11 -3.5, 19.8 -17, 20.5 -42 C 21.5 -84, 15 -134, 0 -175 Z
             M0 -146 C -3.6 -110, -5.2 -70, -4.7 -40 C -4.4 -20, -2.2 -8.5, 0 -5.5 C 2.2 -8.5, 4.4 -20, 4.7 -40 C 5.2 -70, 3.6 -110, 0 -146 Z"
        />
      </defs>
      <g transform="translate(120 193)">
        {/* Outer pair - widest flare */}
        <use href={`#${pid}`} fill={gold} transform="rotate(73) scale(0.7 0.58)" />
        <use href={`#${pid}`} fill={gold} transform="rotate(-73) scale(0.7 0.58)" />
        {/* Middle pair */}
        <use href={`#${pid}`} fill={gold} transform="rotate(48) scale(0.82 0.78)" />
        <use href={`#${pid}`} fill={gold} transform="rotate(-48) scale(0.82 0.78)" />
        {/* Inner pair */}
        <use href={`#${pid}`} fill={gold} transform="rotate(24) scale(0.93 0.9)" />
        <use href={`#${pid}`} fill={gold} transform="rotate(-24) scale(0.93 0.9)" />
        {/* Centre bud */}
        <use href={`#${pid}`} fill={deep} />
        <path
          d="M0 -96 C -6 -62, -8.6 -29, -8 -7 C -7.6 4, -4 10.5, 0 13 C 4 10.5, 7.6 4, 8 -7 C 8.6 -29, 6 -62, 0 -96 Z"
          fill={accent}
        />
      </g>
    </svg>
  );
};

// Back-compat alias for the mark-only logo
export const BrandLogoIcon: React.FC<{ className?: string; dark?: boolean }> = (props) => (
  <LotusMark {...props} />
);

type BrandLogoSize = 'xs' | 'sm' | 'md' | 'lg';

const BRAND_SIZES: Record<BrandLogoSize, { mark: string; title: string; sub: string; mb: string }> = {
  xs: { mark: 'w-7 h-7', title: 'text-[12px] tracking-[0.05em]', sub: 'text-[6.5px] tracking-[0.32em]', mb: 'mb-0' },
  sm: { mark: 'w-8 h-8 md:w-9 md:h-9', title: 'text-[13px] md:text-sm tracking-[0.06em]', sub: 'text-[7px] md:text-[8px] tracking-[0.34em]', mb: 'mb-0.5' },
  md: { mark: 'w-11 h-11 md:w-12 md:h-12', title: 'text-base md:text-lg tracking-[0.06em]', sub: 'text-[8px] md:text-[9px] tracking-[0.36em]', mb: 'mb-1' },
  lg: { mark: 'w-14 h-14 md:w-16 md:h-16', title: 'text-xl md:text-2xl tracking-[0.07em]', sub: 'text-[10px] md:text-[11px] tracking-[0.38em]', mb: 'mb-1' }
};

/**
 * Full brand lockup: gold lotus over "SHREE SWAMI" (Didone serif, deep burgundy)
 * with "SAMARTH EVENTS" in wide-tracked sans beneath - exactly as the original logo.
 * `darkTheme` inverts to cream/gold for midnight navy backgrounds.
 */
export const BrandLogo: React.FC<{
  darkTheme?: boolean;
  className?: string;
  onClick?: () => void;
  size?: BrandLogoSize;
  layout?: 'stacked' | 'horizontal';
}> = ({ darkTheme = false, className = '', onClick, size = 'md', layout = 'stacked' }) => {
  const s = BRAND_SIZES[size];
  const isHorizontal = layout === 'horizontal';
  return (
    <div
      onClick={onClick}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
      onKeyDown={onClick ? (e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); onClick(); } } : undefined}
      aria-label="Shree Swami Samarth Events - home"
      className={`inline-flex ${isHorizontal ? 'flex-row items-center gap-2.5' : 'flex-col items-center'} select-none cursor-pointer group transition-transform duration-300 hover:scale-[1.03] ${className}`}
    >
      <div className={isHorizontal ? 'shrink-0' : s.mb}>
        <LotusMark dark={darkTheme} className={isHorizontal ? 'w-9 h-9' : s.mark} />
      </div>
      <div className={`flex flex-col ${isHorizontal ? 'items-start text-left' : 'items-center text-center'}`}>
        <span
          className={`font-display font-bold leading-none uppercase ${isHorizontal ? 'text-[15px] tracking-[0.06em]' : s.title} ${
            darkTheme ? 'text-[#FAF7F2]' : 'text-[#801129]'
          }`}
        >
          Shree Swami
        </span>
        <span
          className={`font-sans font-bold uppercase mt-1 ${isHorizontal ? 'text-[7.5px] tracking-[0.3em]' : s.sub} ${
            darkTheme ? 'text-[#E2B856]' : 'text-[#8E1632]'
          }`}
        >
          {isHorizontal ? '· Samarth Events ·' : 'Samarth Events'}
        </span>
      </div>
    </div>
  );
};

// Elegant Gold Floral Corner Watermark Motif
export const FloralCornerMotif: React.FC<{
  className?: string;
  position?: 'bottom-right' | 'top-right' | 'top-left' | 'bottom-left';
  opacity?: number;
}> = ({
  className = '',
  position = 'bottom-right',
  opacity = 0.35
}) => {
  const getRotation = () => {
    switch (position) {
      case 'top-right': return 'rotate-90';
      case 'top-left': return 'rotate-180';
      case 'bottom-left': return '-rotate-90';
      default: return '';
    }
  };

  return (
    <div
      className={`pointer-events-none absolute select-none ${getRotation()} ${className}`}
      style={{ opacity }}
    >
      <svg
        width="220"
        height="220"
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-36 h-36 md:w-56 md:h-56 text-[#C59B27]"
      >
        {/* Intricate decorative flower and swirling vine leaves */}
        <path
          d="M170 170 C 130 150, 100 110, 80 60 C 120 70, 160 110, 170 170 Z"
          stroke="currentColor"
          strokeWidth="1.2"
          fill="none"
        />
        <path
          d="M185 185 C 145 160, 110 110, 95 40 C 140 55, 175 120, 185 185 Z"
          stroke="currentColor"
          strokeWidth="1"
          fill="none"
        />
        <path
          d="M150 180 C 120 155, 95 130, 60 115 C 80 145, 115 170, 150 180 Z"
          stroke="currentColor"
          strokeWidth="1.2"
          fill="none"
        />
        <path
          d="M180 150 C 155 120, 130 95, 115 60 C 145 80, 170 115, 180 150 Z"
          stroke="currentColor"
          strokeWidth="1.2"
          fill="none"
        />
        {/* Flower Petals Center */}
        <circle cx="165" cy="165" r="8" stroke="currentColor" strokeWidth="1.2" fill="none" />
        <circle cx="165" cy="165" r="3" fill="currentColor" />
        <path
          d="M165 150 C 160 157, 160 173, 165 180 M150 165 C 157 160, 173 160, 180 165"
          stroke="currentColor"
          strokeWidth="1"
        />
        <path
          d="M154 154 C 160 160, 170 170, 176 176 M154 176 C 160 170, 170 160, 176 154"
          stroke="currentColor"
          strokeWidth="0.8"
        />
        {/* Delicate Swirls */}
        <path
          d="M120 120 C 100 100, 70 90, 40 95 C 20 98, 15 115, 30 120 C 45 125, 60 110, 50 95"
          stroke="currentColor"
          strokeWidth="1"
          fill="none"
        />
        <path
          d="M140 80 C 120 60, 90 40, 80 15 C 75 0, 95 5, 100 20 C 105 35, 90 50, 75 40"
          stroke="currentColor"
          strokeWidth="1"
          fill="none"
        />
      </svg>
    </div>
  );
};

// Circular "SINCE 2023" Seal Badge for About section
export const SinceSealBadge: React.FC<{ className?: string }> = ({ className = '' }) => (
  <div
    className={`relative w-16 h-16 md:w-20 md:h-20 rounded-full bg-[#7A1B28] text-[#FAF7F2] flex flex-col items-center justify-center shadow-lg border-2 border-[#D4AF37]/50 select-none group transition-transform duration-300 hover:scale-105 ${className}`}
  >
    <div className="absolute inset-1 rounded-full border border-dashed border-[#D4AF37]/40 pointer-events-none" />
    
    {/* Top decorative small crown / flourish */}
    <div className="mb-0.5 text-[#E2B856]">
      <svg width="18" height="10" viewBox="0 0 18 10" fill="currentColor">
        <path d="M9 1L12 6L16 3L14 9H4L2 3L6 6L9 1Z" />
      </svg>
    </div>
    
    <span className="text-[8px] md:text-[9px] tracking-[0.2em] font-bold text-[#E2B856] uppercase leading-none">
      SINCE
    </span>
    <span className="text-xs md:text-sm font-display font-bold tracking-wider leading-none text-white mt-0.5">
      2023
    </span>
  </div>
);

// Section eyebrow: copper rule + tracked caps + trailing gold rule on desktop
export const SectionOverline: React.FC<{
  text: string;
  dark?: boolean;
  centered?: boolean;
  trailingLine?: boolean;
  className?: string;
}> = ({ text, dark = false, centered = false, trailingLine = false, className = '' }) => (
  <div className={`flex items-center gap-2.5 ${centered ? 'justify-center' : ''} ${className}`}>
    <span className={`h-[1.5px] w-4 shrink-0 ${dark ? 'bg-gold' : 'bg-burgundy'}`} />
    <span
      className={`text-[10.5px] font-bold uppercase leading-none tracking-[0.2em] sm:text-[11px] ${
        dark ? 'text-gold-light' : 'text-copper'
      }`}
    >
      {text}
    </span>
    {centered && <span className={`h-[1.5px] w-4 shrink-0 ${dark ? 'bg-gold' : 'bg-burgundy'}`} />}
    {!centered && trailingLine && (
      <span className={`hidden lg:block h-px w-12 shrink-0 ${dark ? 'bg-gold/60' : 'bg-[#D6B87A]'}`} />
    )}
  </div>
);
