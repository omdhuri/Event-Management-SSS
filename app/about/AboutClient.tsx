"use client";

import React from 'react';
import Link from 'next/link';
import { Sparkles, Heart, Award, Users, CheckCircle2, ArrowRight } from 'lucide-react';
import { PageHeader } from '../../components/PageHeader';
import { AboutSection } from '../../components/AboutSection';
import { TestimonialsSection } from '../../components/TestimonialsSection';
import { useModals } from '../../context/ModalContext';
import { WHATSAPP_URL } from '../../data/contact';

export const AboutClient: React.FC = () => {
  const { openOurStoryModal, openPlanModal } = useModals();

  return (
    <>
      <PageHeader
        badge="About Shree Swami Samarth Events"
        title="More Than Just Events, We Create"
        italicWord="Experiences."
        description="Crafting unforgettable moments in Kalyan, Dombivli, Thane, Mumbai, and beyond since 2023. Every flower, candle, and fabric is curated to turn your celebration into a living masterpiece."
        breadcrumb="About Us"
      />

      {/* Main About Section with the Arched Centerpiece and 4 Pillars */}
      <AboutSection onOpenOurStory={openOurStoryModal} />

      {/* Deep Story & Values Section */}
      <section className="relative overflow-hidden bg-canvas-soft/60 py-16 sm:py-20 lg:py-24 border-t border-line/60">
        <div className="container-luxe relative">
          <div className="mx-auto max-w-3xl text-center mb-14">
            <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-burgundy">
              Our Core Philosophy
            </span>
            <h2 className="mt-3 font-display text-[2rem] sm:text-[2.6rem] text-ink font-medium leading-tight">
              Why Celebrations Matter To Us
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-ink-soft">
              We know that behind every wedding, baby shower, and birthday is a lifetime of memories. That is why our team approaches every occasion with warmth, dedication, and meticulous attention to detail.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-3">
            <div className="rounded-2xl border border-white/80 bg-white/90 p-8 shadow-sm backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-burgundy/10 text-burgundy mb-5">
                <Heart className="h-6 w-6" />
              </span>
              <h3 className="font-display text-lg font-bold text-ink">Personalized to You</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                No templates or cookie-cutter decor. We listen to your vision and tailor color palettes, florals, and stage themes around your family’s unique story.
              </p>
            </div>

            <div className="rounded-2xl border border-white/80 bg-white/90 p-8 shadow-sm backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gold/15 text-gold-light mb-5">
                <Sparkles className="h-6 w-6 text-[#B2741E]" />
              </span>
              <h3 className="font-display text-lg font-bold text-ink">Artistry in Every Detail</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                From luxury mandaps and floral arches to candlelit tables and ambient lighting, our craftsmen ensure every corner looks photo-ready.
              </p>
            </div>

            <div className="rounded-2xl border border-white/80 bg-white/90 p-8 shadow-sm backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-burgundy/10 text-burgundy mb-5">
                <Award className="h-6 w-6" />
              </span>
              <h3 className="font-display text-lg font-bold text-ink">Hassle-Free Execution</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                On the day of your event, you should celebrate, not stress. We manage setup, coordination, and pack-down seamlessly on time.
              </p>
            </div>
          </div>

          {/* CTA Box */}
          <div className="mt-16 rounded-3xl bg-midnight p-8 text-center text-canvas sm:p-12 lg:p-14 relative overflow-hidden shadow-2xl">
            <div className="relative z-10 mx-auto max-w-2xl">
              <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl font-normal leading-tight">
                Ready to Create Memories That Last a Lifetime?
              </h3>
              <p className="mt-3 text-sm sm:text-base text-white/70">
                Connect with our team today. We will help you select the ideal theme and bring your dream celebration to life.
              </p>
              <div className="mt-7 flex flex-wrap items-center justify-center gap-4">
                <button
                  type="button"
                  onClick={openPlanModal}
                  className="rounded-full bg-burgundy px-7 py-3 text-sm font-semibold text-white shadow-lg transition-transform duration-300 hover:scale-105 active:scale-95"
                >
                  Plan Your Event
                </button>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-[#D4AF37]/50 bg-[#122536] px-7 py-3 text-sm font-medium text-white transition-colors hover:bg-[#1A334A]"
                >
                  Chat on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <TestimonialsSection />
    </>
  );
};
