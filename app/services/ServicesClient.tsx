"use client";

import React from 'react';
import { Sparkles, CalendarCheck2, Palette, ShieldCheck } from 'lucide-react';
import { PageHeader } from '../../components/PageHeader';
import { ServicesSection } from '../../components/ServicesSection';
import { useModals } from '../../context/ModalContext';
import { WHATSAPP_URL } from '../../data/contact';

const PROCESS_STEPS = [
  {
    step: '01',
    title: 'Initial Consultation',
    desc: 'We discuss your date, venue, guest count, and the overall aesthetic you envision.',
    icon: CalendarCheck2,
  },
  {
    step: '02',
    title: 'Custom Concept & Moodboard',
    desc: 'Our design team prepares personalized color schemes, floral selections, and lighting concepts.',
    icon: Palette,
  },
  {
    step: '03',
    title: 'Flawless Execution',
    desc: 'On your special day, our team manages installation, coordination, and styling right on schedule.',
    icon: ShieldCheck,
  },
];

export const ServicesClient: React.FC = () => {
  const { openServiceDetail, openPlanModal } = useModals();

  return (
    <>
      <PageHeader
        badge="Our Offerings"
        title="Celebrations Tailored for"
        italicWord="Every Occasion."
        description="Explore our full spectrum of luxury event management and decor services in Kalyan, Dombivli, Thane, Mumbai, Virar, Vasai, and surrounding areas. Handcrafted with passion, attention to detail, and timeless elegance."
        breadcrumb="Services"
      />

      {/* Main Services Grid */}
      <ServicesSection
        onSelectService={(service) => openServiceDetail(service)}
        onOpenPlanModal={openPlanModal}
      />

      {/* How We Work Process Section */}
      <section className="relative overflow-hidden bg-canvas-soft/70 py-16 sm:py-20 lg:py-24 border-t border-line/60">
        <div className="container-luxe relative">
          <div className="mx-auto max-w-3xl text-center mb-14">
            <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-burgundy">
              Our 3-Step Process
            </span>
            <h2 className="mt-3 font-display text-[2rem] sm:text-[2.6rem] text-ink font-medium leading-tight">
              From Dream to Reality
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-ink-soft">
              Planning a celebration should be as joyful as the event itself. We handle every logistical and creative detail so you can enjoy every second.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-3">
            {PROCESS_STEPS.map(({ step, title, desc, icon: Icon }) => (
              <div
                key={step}
                className="relative rounded-2xl border border-white/80 bg-white/90 p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
              >
                <span className="text-3xl font-display font-bold text-burgundy/25 absolute top-6 right-6">
                  {step}
                </span>
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-burgundy/10 text-burgundy mb-5">
                  <Icon className="h-6 w-6" />
                </span>
                <h3 className="font-display text-lg font-bold text-ink">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">{desc}</p>
              </div>
            ))}
          </div>

          {/* CTA Banner */}
          <div className="mt-16 rounded-3xl bg-midnight p-8 text-center text-canvas sm:p-12 lg:p-14 relative overflow-hidden shadow-2xl">
            <div className="relative z-10 mx-auto max-w-2xl">
              <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[#E2B856] mb-3">
                <Sparkles className="h-4 w-4" /> Customized Packages
              </span>
              <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl font-normal leading-tight">
                Looking for a Custom Package or Multi-Day Setup?
              </h3>
              <p className="mt-3 text-sm sm:text-base text-white/70">
                Whether you need decor for Haldi, Sangeet, Wedding, or an intimate birthday dinner, we customize packages to match your specific taste and budget.
              </p>
              <div className="mt-7 flex flex-wrap items-center justify-center gap-4">
                <button
                  type="button"
                  onClick={openPlanModal}
                  className="rounded-full bg-burgundy px-7 py-3 text-sm font-semibold text-white shadow-lg transition-transform duration-300 hover:scale-105 active:scale-95"
                >
                  Request a Free Quote
                </button>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-[#D4AF37]/50 bg-[#122536] px-7 py-3 text-sm font-medium text-white transition-colors hover:bg-[#1A334A]"
                >
                  Direct WhatsApp Chat
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
