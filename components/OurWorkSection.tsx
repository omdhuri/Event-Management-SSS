"use client";

import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { SectionOverline, FloralCornerMotif } from './FloralMotif';
import { GALLERY_DATA, type GalleryItem } from '../data/eventsData';

interface OurWorkSectionProps {
  onSelectEvent: (event: GalleryItem) => void;
  onOpenFullGallery: () => void;
}

const CATEGORIES = ['All', 'Birthdays', 'Baby Shower', 'Weddings', 'Festive', 'Corporate'] as const;

export const OurWorkSection = ({ onSelectEvent, onOpenFullGallery }: OurWorkSectionProps) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const items =
    activeCategory === 'All'
      ? GALLERY_DATA
      : GALLERY_DATA.filter((item) => item.category === activeCategory);

  return (
    <section id="work" className="relative scroll-mt-20 overflow-hidden bg-midnight py-14 text-canvas sm:py-20 lg:py-24">
      <FloralCornerMotif position="bottom-right" opacity={0.14} className="-bottom-6 -right-10" />
      <FloralCornerMotif position="top-left" opacity={0.1} className="-left-10 -top-6" />

      <div className="container-luxe relative">
        {/* ───────── Mobile & tablet header + filters + 2-up grid (preserved) ───────── */}
        <div className="md:hidden">
          <div className="grid gap-7">
            <div>
              <SectionOverline text="Our Work" dark className="reveal" />
              <h2 className="reveal reveal-delay-1 mt-3 font-display text-[2.1rem] font-medium leading-[1.1] tracking-[-0.02em] text-canvas sm:text-[2.75rem]">
                Moments We&apos;ve
                <br />
                <span className="italic font-normal text-gold-light">Made Special</span>
              </h2>
              <p className="reveal reveal-delay-2 mt-4 max-w-md text-[14px] leading-relaxed text-white/70 sm:text-[15px]">
                Take a look at some of our favourite celebrations and the stories behind them.
              </p>
            </div>

            <div className="reveal reveal-delay-2 flex flex-wrap gap-2">
              {CATEGORIES.map((cat) => {
                const isSelected = activeCategory === cat;
                return (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => setActiveCategory(cat)}
                    aria-pressed={isSelected}
                    className={`cursor-pointer rounded-full border px-4 py-2 text-[13px] font-medium transition-all duration-200 ${
                      isSelected
                        ? 'border-burgundy-light bg-burgundy text-white shadow-[0_6px_16px_-6px_rgb(122_27_40/0.8)]'
                        : 'border-midnight-line bg-midnight-soft text-white/70 hover:bg-midnight-hover hover:text-white'
                    }`}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="mt-8">
            <ul className="grid grid-cols-2 gap-3">
              {items.slice(0, 8).map((item) => (
                <li key={item.id}>
                  <button
                    type="button"
                    onClick={() => onSelectEvent(item)}
                    aria-label={`${item.title} — view case study`}
                    className="relative block aspect-square w-full cursor-pointer overflow-hidden rounded-xl text-left"
                  >
                    <img src={item.image} alt="" loading="lazy" decoding="async" className="h-full w-full object-cover" />
                  </button>
                </li>
              ))}
            </ul>

            <button
              type="button"
              onClick={onOpenFullGallery}
              className="mt-6 flex h-12 w-full cursor-pointer items-center justify-center gap-2 rounded-full bg-burgundy text-[15px] font-semibold text-white shadow-[var(--shadow-cta)] transition-colors active:bg-burgundy-dark"
            >
              View Full Gallery
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* ───────── Desktop (matches PC reference: left copy + right 5-photo bento in one row) ───────── */}
        <div className="hidden items-center gap-8 md:grid md:grid-cols-12 lg:gap-10">
          <div className="md:col-span-4">
            <SectionOverline text="Our Work" dark trailingLine className="reveal" />
            <h2 className="reveal reveal-delay-1 mt-3 font-display text-[2.4rem] font-normal leading-[1.08] tracking-[-0.02em] text-canvas xl:text-[2.75rem]">
              Moments We&apos;ve
              <br />
              <span className="italic font-normal text-gold-light">Made Special</span>
            </h2>
            <p className="reveal reveal-delay-2 mt-4 max-w-[300px] text-[13px] leading-relaxed text-white/75">
              Take a look at some of our favourite celebrations and the stories behind them.
            </p>
            <button
              type="button"
              onClick={onOpenFullGallery}
              className="group reveal reveal-delay-3 mt-6 inline-flex cursor-pointer items-center gap-2 rounded-full bg-canvas px-6 py-3 text-[12.5px] font-semibold text-midnight shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-white hover:shadow-xl"
            >
              Explore Full Gallery
              <ArrowRight className="h-3.5 w-3.5 text-ink transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </div>

          <div className="reveal reveal-delay-1 grid grid-cols-12 gap-3.5 md:col-span-8 lg:gap-4">
            {/* Tall left feature: Royal Wedding Stage */}
            {(() => {
              const weddingItem = GALLERY_DATA.find((i) => i.id === 'royal-reception') ?? GALLERY_DATA[0];
              return weddingItem ? (
                <button
                  type="button"
                  onClick={() => onSelectEvent(weddingItem)}
                  aria-label={weddingItem.title}
                  className="group relative col-span-5 h-[300px] cursor-pointer overflow-hidden rounded-2xl shadow-xl lg:h-[330px]"
                >
                  <img
                    src={weddingItem.image}
                    alt={weddingItem.title}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover transition-transform duration-700 ease-[var(--ease-luxe)] group-hover:scale-105"
                  />
                </button>
              ) : null;
            })()}

            {/* Right 2x2 grid: Baby Shower + Haldi on top, Birthday + Car on bottom */}
            <div className="col-span-7 grid grid-cols-2 grid-rows-2 gap-3.5 lg:gap-4">
              {[
                GALLERY_DATA.find((i) => i.id === 'boho-baby-shower'),
                GALLERY_DATA.find((i) => i.id === 'haldi-marigold-canopy'),
                GALLERY_DATA.find((i) => i.id === 'jungle-safari-birthday'),
                GALLERY_DATA.find((i) => i.id === 'bridal-car-decor'),
              ].filter(Boolean).map((item, idx) =>
                item ? (
                  <div key={item.id} className="relative h-[143px] overflow-hidden rounded-2xl shadow-xl lg:h-[157px]">
                    <button
                      type="button"
                      onClick={() => onSelectEvent(item)}
                      aria-label={item.title}
                      className="group block h-full w-full cursor-pointer overflow-hidden"
                    >
                      <img
                        src={item.image}
                        alt={item.title}
                        loading="lazy"
                        decoding="async"
                        className="h-full w-full object-cover transition-transform duration-700 ease-[var(--ease-luxe)] group-hover:scale-105"
                      />
                    </button>

                    {idx === 3 && (
                      <button
                        type="button"
                        onClick={onOpenFullGallery}
                        aria-label="Explore full gallery"
                        className="group absolute bottom-3 right-3 z-10 grid h-9 w-9 cursor-pointer place-items-center rounded-full bg-white text-ink shadow-lg transition-all duration-300 hover:bg-burgundy hover:text-white"
                      >
                        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                      </button>
                    )}
                  </div>
                ) : null
              )}
            </div>
          </div>
        </div>

        {items.length === 0 && (
          <p className="mt-10 rounded-2xl border border-midnight-line bg-midnight-soft p-8 text-center text-sm text-white/60">
            No setups in this category yet — explore the full gallery instead.
          </p>
        )}
      </div>
    </section>
  );
};
