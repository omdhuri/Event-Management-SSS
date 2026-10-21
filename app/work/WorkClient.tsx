"use client";

import React from 'react';
import { Calendar, Award, Heart, Sparkles } from 'lucide-react';
import { PageHeader } from '../../components/PageHeader';
import { OurWorkSection } from '../../components/OurWorkSection';
import { useModals } from '../../context/ModalContext';
import { WHATSAPP_URL } from '../../data/contact';

const STATS = [
  { icon: Calendar, value: '100+', label: 'Events Organized', desc: 'Flawlessly planned celebrations' },
  { icon: Award, value: '3+', label: 'Years of Experience', desc: 'Passion for perfection' },
  { icon: Heart, value: '100%', label: 'Happy Families', desc: 'Cherished memories created' },
];

export const WorkClient: React.FC = () => {
  const { openEventDetail, openFullGalleryModal, openPlanModal } = useModals();

  return (
    <>
      <PageHeader
        badge="Curated Portfolio"
        title="Moments We've Made"
        italicWord="Special."
        description="Step inside our gallery of real events across Kalyan, Dombivli, Thane, Mumbai, and Maharashtra. Discover bespoke stage backdrops, floral mandaps, fairy-tale lighting, and joyous family celebrations."
        breadcrumb="Our Work"
      />

      {/* Main Gallery Section with Category Tabs */}
      <OurWorkSection
        onSelectEvent={(event) => openEventDetail(event)}
        onOpenFullGallery={openFullGalleryModal}
      />

      {/* Proven Track Record / Numbers */}
      <section className="relative overflow-hidden bg-canvas py-16 sm:py-20 border-t border-line/60">
        <div className="container-luxe relative">
          <div className="grid gap-6 sm:grid-cols-3">
            {STATS.map(({ icon: Icon, value, label, desc }) => (
              <div
                key={label}
                className="text-center rounded-2xl border border-line/70 bg-white/60 p-8 shadow-sm backdrop-blur"
              >
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-burgundy/10 text-burgundy mb-4">
                  <Icon className="h-6 w-6" />
                </span>
                <span className="block font-display text-4xl font-bold text-ink">{value}</span>
                <span className="mt-1 block font-display text-base font-semibold text-burgundy">{label}</span>
                <span className="mt-1 block text-xs text-ink-soft">{desc}</span>
              </div>
            ))}
          </div>

          {/* CTA Box */}
          <div className="mt-14 rounded-3xl bg-[#081622] p-8 text-center text-canvas sm:p-12 relative overflow-hidden shadow-xl border border-[#1E3447]">
            <div className="relative z-10 mx-auto max-w-2xl">
              <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[#E2B856] mb-3">
                <Sparkles className="h-4 w-4" /> Enquire About A Setup
              </span>
              <h3 className="font-display text-2xl sm:text-3xl font-normal leading-tight">
                Loved One of Our Themes?
              </h3>
              <p className="mt-3 text-sm text-white/70">
                Share your favorite setup photo with us on WhatsApp, and we will tailor it to your venue, theme, and date.
              </p>
              <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-burgundy px-7 py-3 text-sm font-semibold text-white shadow-lg transition-transform duration-300 hover:scale-105 active:scale-95"
                >
                  Share Setup on WhatsApp
                </a>
                <button
                  type="button"
                  onClick={openPlanModal}
                  className="rounded-full border border-white/30 bg-transparent px-7 py-3 text-sm font-medium text-white transition-colors hover:bg-white/10"
                >
                  Book Consultation
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
