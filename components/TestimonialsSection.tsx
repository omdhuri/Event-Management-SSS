"use client";

import React, { useState } from 'react';
import { Star, ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';
import { FloralCornerMotif } from './FloralMotif';
import { GoogleIcon } from './icons';
import { TESTIMONIALS_DATA, TestimonialItem } from '../data/eventsData';
import { GOOGLE_REVIEWS_URL, GOOGLE_SEARCH_URL } from '../data/contact';

export const TestimonialsSection: React.FC = () => {
  const testimonials: TestimonialItem[] = TESTIMONIALS_DATA;
  const MAX_QUOTE_LENGTH = 150;
  
  // Slider state: index of the first visible card in desktop mode (steps by 3)
  // or current index in mobile mode (steps by 1)
  const [activePage, setActivePage] = useState(0); // 0 = first 3 reviews (top 3)
  const [mobileIdx, setMobileIdx] = useState(0);
  const [expandedIds, setExpandedIds] = useState<Record<string, boolean>>({});

  const toggleExpand = (id: string) => {
    setExpandedIds((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const desktopPageCount = Math.ceil(testimonials.length / 3);
  const currentDesktopReviews = testimonials.slice(activePage * 3, activePage * 3 + 3);

  const handlePrevDesktop = () => {
    setActivePage((prev) => (prev === 0 ? desktopPageCount - 1 : prev - 1));
  };

  const handleNextDesktop = () => {
    setActivePage((prev) => (prev === desktopPageCount - 1 ? 0 : prev + 1));
  };

  const handlePrevMobile = () => {
    setMobileIdx((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNextMobile = () => {
    setMobileIdx((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="testimonials" className="relative py-16 md:py-24 bg-[#FAF7F2] overflow-hidden border-t border-[#EAE3D6]/70">
      {/* Background Floral Watermark */}
      <FloralCornerMotif position="top-right" opacity={0.2} className="-top-12 -right-12" />

      <div className="container-luxe relative z-10">
        
        {/* Top Header Row with Editorial Testimonials Header & Action CTA */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10 md:mb-12">
          <div>
            <span className="block font-sans text-xs sm:text-[13px] font-semibold uppercase tracking-[0.22em] text-[#9E6928] mb-3">
              TESTIMONIALS
            </span>

            <h2 className="font-display text-[2.4rem] sm:text-[3.2rem] font-normal leading-[1.08] tracking-[-0.01em] text-ink">
              What Our Clients Say
            </h2>

            <p className="mt-2 font-sans text-sm sm:text-base leading-relaxed text-[#5A524C] max-w-2xl">
              Real stories. Happy moments. Lasting memories.
            </p>
          </div>

          {/* Action Buttons: Opens Google Review directly or Google Search */}
          <div className="flex flex-wrap items-center gap-3">
            <a
              href={GOOGLE_REVIEWS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-[#D4AF6A]/50 bg-burgundy px-5 py-2.5 font-sans text-xs font-bold text-white shadow-md transition-all hover:bg-burgundy-light hover:scale-105 active:scale-95 cursor-pointer"
            >
              <GoogleIcon className="h-4 w-4 shrink-0 bg-white rounded-full p-0.5" />
              <span>Review Us on Google</span>
              <ExternalLink className="h-3.5 w-3.5 opacity-80" />
            </a>

            <a
              href={GOOGLE_SEARCH_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full border border-[#D8CCBD] bg-white px-4 py-2.5 font-sans text-xs font-semibold text-[#423932] shadow-xs transition-all hover:bg-[#FAF2E8] hover:border-burgundy/30 cursor-pointer"
            >
              <span>View Us on Google</span>
              <ExternalLink className="h-3 w-3 text-[#7A6E65]" />
            </a>
          </div>
        </div>

        {/* ──────── DESKTOP VIEW: Top 3 Reviews Grid with Slider Controls ──────── */}
        <div className="hidden md:block">
          <div className="grid grid-cols-3 gap-5 items-start">
            {currentDesktopReviews.map((item) => {
              const isExpanded = !!expandedIds[item.id];
              const isLong = item.quote.length > MAX_QUOTE_LENGTH;
              const displayText = isLong && !isExpanded
                ? `${item.quote.slice(0, MAX_QUOTE_LENGTH).trim()}...`
                : item.quote;

              return (
                <figure
                  key={item.id}
                  className="group relative flex flex-col justify-between rounded-xl border border-[#EAE3D6] bg-white p-4.5 sm:p-5 shadow-[0_4px_20px_rgba(122,27,40,0.03)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_10px_28px_rgba(122,27,40,0.06)]"
                >
                  <div>
                    {/* Top card pill with Google verified badge */}
                    <div className="flex items-center justify-between gap-2 mb-2.5">
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-[#F0F4F9] text-[#1A73E8] text-[10.5px] font-semibold border border-[#D3E3FD]">
                        <GoogleIcon className="h-3 w-3 shrink-0" />
                        <span>Verified Google Review</span>
                      </span>

                      <div className="flex items-center gap-0.5 text-[#FBBC05]">
                        {[...Array(item.rating)].map((_, i) => (
                          <Star key={i} className="h-3 w-3 fill-current" />
                        ))}
                      </div>
                    </div>

                    {/* Review Text with Read More toggle */}
                    <blockquote className="mb-3 font-sans text-[13px] leading-relaxed text-[#423932] min-h-[52px]">
                      &ldquo;{displayText}&rdquo;
                      {isLong && (
                        <button
                          type="button"
                          onClick={() => toggleExpand(item.id)}
                          className="ml-1.5 inline font-semibold text-burgundy hover:underline cursor-pointer focus:outline-none"
                        >
                          {isExpanded ? 'Show less' : 'Read more'}
                        </button>
                      )}
                    </blockquote>
                  </div>

                  {/* Figcaption with Reviewer Info */}
                  <figcaption className="flex items-center gap-2.5 border-t border-[#F2ECE4] pt-2.5">
                    <div
                      aria-hidden="true"
                      className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#E8DEC8] bg-gradient-to-br from-[#FAF2E8] to-[#F3EDE3] font-display text-[11px] font-bold tracking-wider text-burgundy shadow-xs select-none"
                    >
                      {item.name
                        .replace('&', '')
                        .split(' ')
                        .filter(Boolean)
                        .slice(0, 2)
                        .map((n) => n[0])
                        .join('')}
                    </div>

                    <div className="min-w-0 flex-1">
                      <h3 className="truncate font-display text-[14px] font-bold text-[#221F1D]">
                        {item.name}
                      </h3>
                      <p className="truncate font-sans text-[10.5px] text-[#7A6E65]">
                        {item.date ? item.date : 'Verified Customer'} • {item.event}
                      </p>
                    </div>
                  </figcaption>
                </figure>
              );
            })}
          </div>

          {/* Slider Controls for Desktop (Top 3 primary, slider for additional reviews) */}
          {desktopPageCount > 1 && (
            <div className="mt-8 flex items-center justify-center border-t border-[#EAE3D6] pt-4">
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={handlePrevDesktop}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-[#D8CCBD] bg-white text-[#423932] transition-colors hover:bg-burgundy hover:text-white cursor-pointer"
                  aria-label="Previous reviews"
                >
                  <ChevronLeft className="h-4 w-4" />
                </button>

                <div className="flex items-center gap-1.5 px-2">
                  {[...Array(desktopPageCount)].map((_, i) => (
                    <button
                      key={i}
                      type="button"
                      onClick={() => setActivePage(i)}
                      className={`h-2 rounded-full transition-all cursor-pointer ${
                        activePage === i ? 'w-6 bg-burgundy' : 'w-2 bg-[#D8CCBD] hover:bg-[#A89885]'
                      }`}
                      aria-label={`Go to slide ${i + 1}`}
                    />
                  ))}
                </div>

                <button
                  type="button"
                  onClick={handleNextDesktop}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-[#D8CCBD] bg-white text-[#423932] transition-colors hover:bg-burgundy hover:text-white cursor-pointer"
                  aria-label="Next reviews"
                >
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          )}
        </div>

        {/* ──────── MOBILE VIEW: 1 Card at a time with touch arrows ──────── */}
        <div className="block md:hidden">
          {testimonials[mobileIdx] && (() => {
            const currentItem = testimonials[mobileIdx];
            const isExpanded = !!expandedIds[currentItem.id];
            const isLong = currentItem.quote.length > MAX_QUOTE_LENGTH;
            const displayText = isLong && !isExpanded
              ? `${currentItem.quote.slice(0, MAX_QUOTE_LENGTH).trim()}...`
              : currentItem.quote;

            return (
              <figure className="group relative flex flex-col justify-between rounded-xl border border-[#EAE3D6] bg-white p-4.5 shadow-sm">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2.5">
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-[#F0F4F9] text-[#1A73E8] text-[10.5px] font-semibold border border-[#D3E3FD]">
                      <GoogleIcon className="h-3 w-3 shrink-0" />
                      <span>Verified Review</span>
                    </span>

                    <div className="flex items-center gap-0.5 text-[#FBBC05]">
                      {[...Array(currentItem.rating)].map((_, i) => (
                        <Star key={i} className="h-3 w-3 fill-current" />
                      ))}
                    </div>
                  </div>

                  <blockquote className="mb-3 font-sans text-[13px] leading-relaxed text-[#423932]">
                    &ldquo;{displayText}&rdquo;
                    {isLong && (
                      <button
                        type="button"
                        onClick={() => toggleExpand(currentItem.id)}
                        className="ml-1.5 inline font-semibold text-burgundy hover:underline cursor-pointer focus:outline-none"
                      >
                        {isExpanded ? 'Show less' : 'Read more'}
                      </button>
                    )}
                  </blockquote>
                </div>

                <figcaption className="flex items-center gap-2.5 border-t border-[#F2ECE4] pt-2.5">
                  <div
                    aria-hidden="true"
                    className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#E8DEC8] bg-gradient-to-br from-[#FAF2E8] to-[#F3EDE3] font-display text-[11px] font-bold tracking-wider text-burgundy shadow-xs select-none"
                  >
                    {currentItem.name
                      .replace('&', '')
                      .split(' ')
                      .filter(Boolean)
                      .slice(0, 2)
                      .map((n) => n[0])
                      .join('')}
                  </div>

                  <div className="min-w-0 flex-1">
                    <h3 className="truncate font-display text-[14px] font-bold text-[#221F1D]">
                      {currentItem.name}
                    </h3>
                    <p className="truncate font-sans text-[10.5px] text-[#7A6E65]">
                      {currentItem.date || 'Verified Customer'}
                    </p>
                  </div>
                </figcaption>
              </figure>
            );
          })()}

          {/* Mobile Navigation Controls */}
          <div className="mt-5 flex items-center justify-between">
            <button
              type="button"
              onClick={handlePrevMobile}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-[#D8CCBD] bg-white text-[#423932] shadow-xs active:scale-95"
              aria-label="Previous review"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>

            {/* Dots */}
            <div className="flex items-center gap-1.5">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setMobileIdx(i)}
                  className={`h-2 rounded-full transition-all ${
                    mobileIdx === i ? 'w-5 bg-burgundy' : 'w-2 bg-[#D8CCBD]'
                  }`}
                  aria-label={`Review ${i + 1}`}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={handleNextMobile}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-[#D8CCBD] bg-white text-[#423932] shadow-xs active:scale-95"
              aria-label="Next review"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
