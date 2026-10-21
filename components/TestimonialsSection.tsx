"use client";

import React, { useState } from 'react';
import { Star, MessageSquarePlus, Check } from 'lucide-react';
import { FloralCornerMotif } from './FloralMotif';
import { TESTIMONIALS_DATA, TestimonialItem } from '../data/eventsData';

export const TestimonialsSection: React.FC = () => {
  const [testimonials, setTestimonials] = useState<TestimonialItem[]>(TESTIMONIALS_DATA);
  const [isReviewModalOpen, setIsReviewModalOpen] = useState(false);
  const [newReview, setNewReview] = useState({ name: '', event: '', quote: '', rating: 5 });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newReview.name || !newReview.quote) return;

    const addedItem: TestimonialItem = {
      id: `test-${Date.now()}`,
      name: newReview.name,
      event: newReview.event || 'Celebration Event',
      quote: newReview.quote,
      avatar: 'https://images.pexels.com/photos/15116520/pexels-photo-15116520.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=200',
      rating: newReview.rating
    };

    setTestimonials([addedItem, ...testimonials]);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setIsReviewModalOpen(false);
      setNewReview({ name: '', event: '', quote: '', rating: 5 });
    }, 2000);
  };

  return (
    <section id="testimonials" className="relative py-16 md:py-24 bg-[#FAF7F2] overflow-hidden border-t border-[#EAE3D6]/70">
      {/* Background Floral Watermark */}
      <FloralCornerMotif position="top-right" opacity={0.2} className="-top-12 -right-12" />

      <div className="container-luxe relative z-10">
        <div className="lg:grid lg:grid-cols-12 lg:items-center lg:gap-8">
          {/* Header — full row on mobile/tablet, left 3 cols on desktop (matches PC reference) */}
          <div className="reveal mb-10 flex flex-col justify-between gap-4 sm:flex-row sm:items-end lg:col-span-3 lg:mb-0 lg:flex-col lg:items-start">
            <div>
              <span className="block text-[10.5px] font-bold uppercase tracking-[0.2em] text-copper">
                Testimonials
              </span>
              <h2 className="mt-2 font-display text-[2.1rem] font-medium leading-[1.1] tracking-[-0.02em] text-ink sm:text-[2.5rem] lg:text-[2.15rem] lg:font-normal xl:text-[2.35rem]">
                What Our Clients Say
              </h2>
              <p className="mt-2 font-sans text-sm text-[#6E6259] lg:text-[12.5px]">
                Real stories. Happy moments. Lasting memories.
              </p>
            </div>

            <button
              onClick={() => setIsReviewModalOpen(true)}
              className="inline-flex cursor-pointer items-center gap-2 self-start rounded-full border border-[#7A1B28]/20 bg-white px-4 py-2 font-sans text-xs font-bold text-[#7A1B28] transition-all hover:bg-[#FAF2E8] hover:text-[#9A2234] sm:self-auto lg:hidden"
            >
              <MessageSquarePlus className="h-4 w-4" />
              <span>Share Your Experience</span>
            </button>
          </div>

          {/* 3 Testimonials Cards Grid — right 9 cols on desktop */}
          <div className="grid grid-cols-1 gap-5 md:grid-cols-3 lg:col-span-9">
            {testimonials.slice(0, 3).map((item, idx) => (
              <figure
                key={item.id}
                className={`reveal reveal-delay-${idx + 1} group relative flex flex-col justify-between rounded-2xl border border-[#EAE3D6] bg-white p-6 shadow-[0_8px_30px_rgba(122,27,40,0.04)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(122,27,40,0.08)] lg:p-5`}
              >
                <div>
                  <span aria-hidden="true" className="mb-3 block select-none font-display text-4xl leading-[0.6] text-[#C59B27]">
                    &ldquo;
                  </span>

                  <blockquote className="mb-5 font-sans text-sm leading-relaxed text-[#423932] lg:text-[12.5px]">
                    &ldquo;{item.quote}&rdquo;
                  </blockquote>
                </div>

                <figcaption className="flex items-center gap-3 border-t border-[#F2ECE4] pt-3.5">
                  <img
                    src={item.avatar}
                    alt={item.name}
                    width={44}
                    height={44}
                    loading="lazy"
                    decoding="async"
                    className="h-11 w-11 shrink-0 rounded-full border-2 border-[#E8DEC8] object-cover shadow-sm"
                  />

                  <div className="min-w-0 flex-1">
                    <h3 className="truncate font-display text-[15px] font-bold text-[#221F1D]">
                      {item.name}
                    </h3>
                    <p className="mb-1 truncate font-sans text-[11px] text-[#7A6E65]">
                      {item.event}
                    </p>

                    <div className="flex items-center gap-0.5 text-[#C59B27]">
                      {[...Array(item.rating)].map((_, i) => (
                        <Star key={i} className="h-3 w-3 fill-current" />
                      ))}
                    </div>
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile pagination dots (decorative, mirrors the stacked review cards) */}
      <div className="container-luxe mt-8 flex justify-center gap-2 md:hidden" aria-hidden="true">
        <span className="h-1.5 w-5 rounded-full bg-burgundy" />
        <span className="h-1.5 w-1.5 rounded-full bg-line" />
        <span className="h-1.5 w-1.5 rounded-full bg-line" />
      </div>

      {/* Write a Review Modal */}
      {isReviewModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm modal-backdrop">
          <div className="bg-[#FAF7F2] rounded-2xl max-w-md w-full p-6 sm:p-7 shadow-2xl border border-[#E8DEC8] relative">
            <h3 className="font-display text-2xl font-bold text-[#221F1D] mb-1">
              Share Your Celebration Review
            </h3>
            <p className="text-xs text-[#7A6E65] mb-5">
              We'd love to hear how we helped make your special day memorable!
            </p>

            {submitted ? (
              <div className="py-8 text-center space-y-2">
                <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Check className="w-6 h-6" />
                </div>
                <h4 className="font-display text-xl font-bold text-[#221F1D]">Thank You!</h4>
                <p className="text-sm text-[#7A6E65]">Your review has been added to our celebrations wall.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmitReview} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-[#423932] uppercase tracking-wider mb-1">
                    Your Name(s) *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Pooja & Nikhil"
                    value={newReview.name}
                    onChange={(e) => setNewReview({ ...newReview, name: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-[#D8CCBD] text-sm text-[#221F1D] focus:outline-none focus:ring-2 focus:ring-[#7A1B28]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#423932] uppercase tracking-wider mb-1">
                    Event Type / Occasion
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. 1st Birthday Party / Wedding"
                    value={newReview.event}
                    onChange={(e) => setNewReview({ ...newReview, event: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-[#D8CCBD] text-sm text-[#221F1D] focus:outline-none focus:ring-2 focus:ring-[#7A1B28]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#423932] uppercase tracking-wider mb-1">
                    Your Feedback / Words *
                  </label>
                  <textarea
                    required
                    rows={3}
                    placeholder="Describe your experience with our decor and event management..."
                    value={newReview.quote}
                    onChange={(e) => setNewReview({ ...newReview, quote: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-[#D8CCBD] text-sm text-[#221F1D] focus:outline-none focus:ring-2 focus:ring-[#7A1B28]"
                  />
                </div>

                <div className="flex items-center justify-end gap-3 pt-2">
                  <button
                    type="button"
                    onClick={() => setIsReviewModalOpen(false)}
                    className="px-4 py-2 rounded-full text-xs font-semibold text-[#7A6E65] hover:bg-[#EAE1D5]"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-5 py-2 rounded-full bg-[#7A1B28] hover:bg-[#922131] text-white text-xs font-bold shadow-md"
                  >
                    Submit Review
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </section>
  );
};
