"use client";

import React, { useCallback, useEffect, useRef, useState } from 'react';
import { ArrowDown, ArrowRight, Award, Calendar, Heart, Phone } from 'lucide-react';
import { FloralCornerMotif, SectionOverline } from './FloralMotif';
import { HERO_SLIDES } from '../data/eventsData';
import { PHONE_E164 } from '../data/contact';

interface HeroSectionProps {
  onOpenPlanModal?: () => void;
  onExploreWork: () => void;
  onScrollToServices: () => void;
}

const STATS = [
  { icon: Calendar, value: '100+', label: 'Events Organized' },
  { icon: Award, value: '3+', label: 'Years of Experience' },
  { icon: Heart, value: '100%', label: 'Client Satisfaction' },
];

const SLIDE_INTERVAL = 6000;

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenPlanModal,
  onExploreWork,
  onScrollToServices,
}) => {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);
  const total = HERO_SLIDES.length;

  const goTo = useCallback(
    (next: number) => setIndex(((next % total) + total) % total),
    [total]
  );

  useEffect(() => {
    if (paused) return;
    const id = window.setInterval(() => setIndex((prev) => (prev + 1) % total), SLIDE_INTERVAL);
    return () => window.clearInterval(id);
  }, [paused, total]);

  const renderPhotos = () =>
    HERO_SLIDES.map((item, i) => (
      <img
        key={item.id}
        src={item.image}
        alt={i === index ? item.title : ''}
        aria-hidden={i !== index}
        loading={i === 0 ? 'eager' : 'lazy'}
        decoding="async"
        className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-[900ms] ease-[var(--ease-luxe)] ${
          i === index ? 'opacity-100' : 'opacity-0'
        }`}
      />
    ));

  return (
    <section id="home" className="relative overflow-hidden bg-canvas pt-16 lg:p-0">
      {/* ───────── Mobile & tablet ───────── */}
      <div className="lg:hidden">
        <div
          className="relative h-[min(42vh,380px)] min-h-[300px] w-full overflow-hidden bg-midnight [border-bottom-left-radius:50%_40px] [border-bottom-right-radius:50%_40px]"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onTouchStart={(e) => {
            touchStartX.current = e.touches[0].clientX;
            setPaused(true);
          }}
          onTouchEnd={(e) => {
            const start = touchStartX.current;
            touchStartX.current = null;
            if (start !== null) {
              const dx = e.changedTouches[0].clientX - start;
              if (Math.abs(dx) > 40) goTo(index + (dx < 0 ? 1 : -1));
            }
            setPaused(false);
          }}
        >
          {renderPhotos()}
          <span className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/25 to-transparent" />

          <div role="tablist" aria-label="Hero slides" className="absolute inset-x-0 bottom-6 flex justify-center gap-1.5">
            {HERO_SLIDES.map((item, i) => (
              <button
                key={item.id}
                type="button"
                role="tab"
                aria-selected={i === index}
                aria-label={item.title}
                onClick={() => goTo(i)}
                className={`h-1.5 cursor-pointer rounded-full transition-all duration-300 ${
                  i === index ? 'w-5 bg-white' : 'w-1.5 bg-white/55'
                }`}
              />
            ))}
          </div>
        </div>

        <div className="relative px-6 pb-8 pt-7">
          <p className="reveal text-[11px] font-semibold uppercase tracking-[0.18em] text-copper">
            Thoughtfully Curated Celebrations
          </p>

          <h1 className="reveal reveal-delay-1 mt-3 font-display text-[clamp(2.4rem,12.5vw,3.1rem)] font-medium leading-[1.06] tracking-[-0.02em] text-ink">
            Your Moments.
            <br />
            <span className="font-normal italic text-burgundy">Our Magic.</span>
          </h1>

          <p className="reveal reveal-delay-2 mt-4 max-w-[24rem] text-[15px] leading-[1.6] text-ink-soft">
            From intimate gatherings to grand celebrations, we bring your vision to life with stunning décor, seamless planning, and unforgettable experiences.
          </p>

          <div className="reveal reveal-delay-3 mt-7 flex flex-col gap-3">
            <button
              type="button"
              onClick={onExploreWork}
              className="flex h-12 w-full cursor-pointer items-center justify-center gap-2.5 rounded-full bg-burgundy text-[15px] font-semibold text-canvas shadow-[var(--shadow-cta)] transition-colors active:bg-burgundy-dark"
            >
              <span>Explore Our Work</span>
              <ArrowRight className="h-4 w-4" />
            </button>

            <a
              href={`tel:${PHONE_E164}`}
              className="flex h-12 w-full cursor-pointer items-center justify-center gap-2.5 rounded-full border border-burgundy/50 bg-transparent text-[15px] font-semibold text-ink transition-colors active:bg-canvas-soft"
            >
              <Phone className="h-[18px] w-[18px] text-burgundy" />
              <span>Call Now</span>
            </a>
          </div>

          <dl className="reveal reveal-delay-4 mt-9 grid grid-cols-3 gap-2">
            {STATS.map(({ icon: Icon, value, label }) => (
              <div key={label} className="flex flex-col items-center text-center">
                <Icon className="h-6 w-6 text-burgundy" strokeWidth={1.5} aria-hidden="true" />
                <dt className="sr-only">{label}</dt>
                <dd className="m-0 flex flex-col items-center">
                  <span className="tnum mt-2.5 font-display text-[22px] font-semibold leading-none text-ink">
                    {value}
                  </span>
                  <span className="mt-1.5 text-[11px] leading-snug text-ink-soft">{label}</span>
                </dd>
              </div>
            ))}
          </dl>

          <div className="mt-6 flex justify-center">
            <button
              type="button"
              onClick={onScrollToServices}
              aria-label="Scroll to services"
              className="grid h-9 w-9 cursor-pointer place-items-center rounded-full text-ink/60 transition-colors hover:text-burgundy"
            >
              <ArrowDown className="h-5 w-5" />
            </button>
          </div>

          <FloralCornerMotif position="bottom-right" opacity={0.16} className="-bottom-6 -right-10" />
        </div>
      </div>

      {/* ───────── Desktop (matches PC reference) ───────── */}
      <div
        className="relative hidden min-h-[600px] lg:block xl:min-h-[640px]"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        {/* Right-side full-bleed stage photo with a soft S-curve cream mask on its left edge */}
        <div className="absolute inset-y-0 right-0 w-[52%] overflow-hidden bg-midnight">
          {renderPhotos()}
          <span className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black/10 via-transparent to-black/35" />
          <span className="pointer-events-none absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-black/30 to-transparent" />

          {/* Cream S-curve mask blending the left of the photo into the canvas */}
          <svg
            viewBox="0 0 260 640"
            preserveAspectRatio="none"
            aria-hidden="true"
            className="pointer-events-none absolute -left-px inset-y-0 h-full w-[190px] xl:w-[220px]"
          >
            <defs>
              <linearGradient id="heroFeather" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#FAF7F2" stopOpacity="1" />
                <stop offset="55%" stopColor="#FAF7F2" stopOpacity="0.85" />
                <stop offset="100%" stopColor="#FAF7F2" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path d="M0 0 H210 C95 140 55 320 130 500 C160 565 195 610 235 640 H0 Z" fill="url(#heroFeather)" />
            <path d="M0 0 H155 C55 150 20 330 95 510 C122 572 155 615 190 640 H0 Z" fill="#FAF7F2" />
          </svg>

          {/* Script overlay in the upper-right of the stage photo */}
          <div className="pointer-events-none absolute right-24 top-28 -rotate-6 text-center select-none xl:right-28 xl:top-32">
            <span className="block font-script text-[28px] leading-[1.05] text-white/95 drop-shadow-[0_2px_10px_rgb(0_0_0/0.75)] xl:text-[32px]">
              We Make
            </span>
            <span className="block font-script text-[28px] leading-[1.05] text-white/95 drop-shadow-[0_2px_10px_rgb(0_0_0/0.75)] xl:text-[32px]">
              Your Moments
            </span>
            <span className="block font-script text-[28px] leading-[1.05] text-white/95 drop-shadow-[0_2px_10px_rgb(0_0_0/0.75)] xl:text-[32px]">
              Special
            </span>
          </div>

          {/* 3-thumbnail rail pinned to the right edge */}
          <div className="absolute right-5 top-1/2 z-20 flex -translate-y-1/2 flex-col gap-2 xl:right-7">
            {HERO_SLIDES.slice(0, 3).map((item, i) => (
              <button
                key={item.id}
                type="button"
                onClick={() => goTo(i)}
                aria-label={`Show ${item.title}`}
                aria-current={i === index}
                className={`h-12 w-14 cursor-pointer overflow-hidden rounded-lg border-2 shadow-md transition-all duration-300 ${
                  i === index ? 'border-gold-light scale-105' : 'border-white/70 opacity-85 hover:opacity-100'
                }`}
              >
                <img src={item.image} alt="" className="h-full w-full object-cover" />
              </button>
            ))}
          </div>
        </div>

        {/* Left floral watermark */}
        <FloralCornerMotif position="bottom-left" opacity={0.28} className="-left-6 top-20" />

        {/* Left copy column */}
        <div className="container-luxe relative z-10 flex min-h-[600px] items-center pt-20 pb-14 xl:min-h-[640px]">
          <div className="w-full max-w-[600px]">
            <SectionOverline text="Thoughtfully Curated Celebrations" className="reveal" />

            <h1 className="reveal reveal-delay-1 mt-4 font-display text-[3.75rem] font-normal leading-[1.04] tracking-[-0.02em] text-ink xl:text-[4.25rem]">
              Your Moments.
              <br />
              <span className="italic font-normal text-burgundy">Our Magic.</span>
            </h1>

            <p className="reveal reveal-delay-2 mt-5 max-w-[480px] text-[15.5px] leading-[1.65] text-ink-soft">
              From intimate gatherings to grand celebrations, we bring your vision to life with stunning décor, seamless planning, and unforgettable experiences.
            </p>

            <div className="reveal reveal-delay-3 mt-7 flex items-center gap-3.5">
              <button
                type="button"
                onClick={onExploreWork}
                className="group inline-flex cursor-pointer items-center gap-2.5 rounded-full bg-burgundy px-6 py-3 text-[13.5px] font-semibold text-canvas shadow-[var(--shadow-cta)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-burgundy-light"
              >
                <span>Explore Our Work</span>
                <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
              </button>

              <a
                href={`tel:${PHONE_E164}`}
                className="group inline-flex cursor-pointer items-center gap-2.5 rounded-full border border-burgundy/45 bg-transparent px-6 py-3 text-[13.5px] font-semibold text-ink transition-all duration-300 hover:border-burgundy hover:bg-white/70"
              >
                <Phone className="h-3.5 w-3.5 text-burgundy transition-transform duration-300 group-hover:scale-110" />
                <span>Call Now</span>
              </a>
            </div>

            {/* Inline horizontal stats row matching the PC design */}
            <dl className="reveal reveal-delay-4 mt-9 flex items-center gap-8 pt-2">
              {STATS.map(({ icon: Icon, value, label }) => (
                <div key={label} className="flex items-center gap-2.5">
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-burgundy/20 bg-burgundy/5 text-burgundy">
                    <Icon className="h-4 w-4" strokeWidth={1.6} aria-hidden="true" />
                  </span>
                  <dt className="sr-only">{label}</dt>
                  <dd className="m-0 flex flex-col">
                    <span className="tnum font-display text-lg font-bold leading-none text-ink">{value}</span>
                    <span className="mt-1 text-[11px] leading-tight text-ink-soft">{label}</span>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        {/* Bottom-centre circular scroll seal sitting on the curve transition */}
        <button
          type="button"
          onClick={onScrollToServices}
          aria-label="Scroll to services"
          className="group absolute bottom-4 left-1/2 z-20 grid h-12 w-12 -translate-x-1/2 cursor-pointer place-items-center rounded-full border border-dashed border-copper/50 bg-canvas/90 text-ink-soft shadow-md backdrop-blur-sm transition-all duration-300 hover:border-burgundy hover:text-burgundy"
        >
          <ArrowDown className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-0.5" />
        </button>
      </div>
    </section>
  );
};
