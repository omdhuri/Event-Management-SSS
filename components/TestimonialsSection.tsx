"use client";

import React, { useState } from 'react';
import { Star, ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';
import { FloralCornerMotif } from './FloralMotif';
import { GoogleIcon } from './icons';
import { TESTIMONIALS_DATA, TestimonialItem } from '../data/eventsData';
import { GOOGLE_REVIEWS_URL, GOOGLE_SEARCH_URL } from '../data/contact';

export const TestimonialsSection: React.FC = () => {
  const testimonials: TestimonialItem[] = TESTIMONIALS_DATA;
  
  // Slider state: index of the first visible card in desktop mode (steps by 3)
  // or current index in mobile mode (steps by 1)
  const [activePage, setActivePage] = useState(0); // 0 = first 3 reviews (top 3)
  const [mobileIdx, setMobileIdx] = useState(0);

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
              What Our<br />Clients Say
            </h2>

            <p className="mt-3 font-sans text-sm sm:text-base leading-relaxed text-[#5A524C] max-w-xl">
              Real stories. Happy moments.<br className="hidden sm:inline" /> Lasting memories.
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
          <div className="grid grid-cols-3 gap-5">
            {currentDesktopReviews.map((item, idx) => (
              <figure
                key={item.id}
                className="group relative flex flex-col justify-between rounded-2xl border border-[#EAE3D6] bg-white p-6 shadow-[0_8px_30px_rgba(122,27,40,0.04)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(122,27,40,0.08)]"
              >
                <div>
                  {/* Top card pill with Google verified badge */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#F0F4F9] text-[#1A73E8] text-[11px] font-semibold border border-[#D3E3FD]">
                      <GoogleIcon className="h-3 w-3 shrink-0" />
                      <span>Verified Google Review</span>
                    </span>

                    <div className="flex items-center gap-0.5 text-[#FBBC05]">
                      {[...Array(item.rating)].map((_, i) => (
                        <Star key={i} className="h-3.5 w-3.5 fill-current" />
                      ))}
                    </div>
                  </div>

                  {/* Review Text */}
                  <blockquote className="mb-5 font-sans text-sm leading-relaxed text-[#423932]">
                    &ldquo;{item.quote}&rdquo;
                  </blockquote>
                </div>

                {/* Figcaption with Reviewer Info */}
                <figcaption className="flex items-center gap-3 border-t border-[#F2ECE4] pt-3.5">
                  <div
                    aria-hidden="true"
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#E8DEC8] bg-gradient-to-br from-[#FAF2E8] to-[#F3EDE3] font-display text-xs font-bold tracking-wider text-burgundy shadow-xs select-none"
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
                    <h3 className="truncate font-display text-[15px] font-bold text-[#221F1D]">
                      {item.name}
                    </h3>
                    <p className="truncate font-sans text-[11px] text-[#7A6E65]">
                      {item.date ? item.date : 'Verified Customer'} • {item.event}
                    </p>
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>

          {/* Slider Controls for Desktop (Top 3 primary, slider for additional reviews) */}
          {desktopPageCount > 1 && (
            <div className="mt-8 flex items-center justify-between border-t border-[#EAE3D6] pt-4">
              <span className="text-xs font-sans text-[#7A6E65]">
                Showing {activePage === 0 ? 'top 3 featured reviews' : `reviews 4 to ${testimonials.length}`} of {testimonials.length} total
              </span>

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
          {testimonials[mobileIdx] && (
            <figure className="group relative flex flex-col justify-between rounded-2xl border border-[#EAE3D6] bg-white p-6 shadow-sm">
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#F0F4F9] text-[#1A73E8] text-[11px] font-semibold border border-[#D3E3FD]">
                    <GoogleIcon className="h-3 w-3 shrink-0" />
                    <span>Verified Review</span>
                  </span>

                  <div className="flex items-center gap-0.5 text-[#FBBC05]">
                    {[...Array(testimonials[mobileIdx].rating)].map((_, i) => (
                      <Star key={i} className="h-3.5 w-3.5 fill-current" />
                    ))}
                  </div>
                </div>

                <blockquote className="mb-5 font-sans text-sm leading-relaxed text-[#423932]">
                  &ldquo;{testimonials[mobileIdx].quote}&rdquo;
                </blockquote>
              </div>

              <figcaption className="flex items-center gap-3 border-t border-[#F2ECE4] pt-3.5">
                <div
                  aria-hidden="true"
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#E8DEC8] bg-gradient-to-br from-[#FAF2E8] to-[#F3EDE3] font-display text-xs font-bold tracking-wider text-burgundy shadow-xs select-none"
                >
                  {testimonials[mobileIdx].name
                    .replace('&', '')
                    .split(' ')
                    .filter(Boolean)
                    .slice(0, 2)
                    .map((n) => n[0])
                    .join('')}
                </div>

                <div className="min-w-0 flex-1">
                  <h3 className="truncate font-display text-[15px] font-bold text-[#221F1D]">
                    {testimonials[mobileIdx].name}
                  </h3>
                  <p className="truncate font-sans text-[11px] text-[#7A6E65]">
                    {testimonials[mobileIdx].date || 'Verified Customer'}
                  </p>
                </div>
              </figcaption>
            </figure>
          )}

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
