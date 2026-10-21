"use client";

import { ArrowRight, Sparkles, CalendarCheck2, HeartHandshake, Users, type LucideIcon } from 'lucide-react';
import { SectionOverline, SinceSealBadge, FloralCornerMotif } from './FloralMotif';

interface AboutSectionProps {
  onOpenOurStory: () => void;
}

const PILLARS: { icon: LucideIcon; title: string; desc: string }[] = [
  { icon: Sparkles, title: 'Creative Designs', desc: 'Unique themes tailored to your vision.' },
  { icon: CalendarCheck2, title: 'End-to-End Planning', desc: 'Hassle-free execution from start to finish.' },
  { icon: HeartHandshake, title: 'Personalized Approach', desc: 'Every event is designed around you.' },
  { icon: Users, title: 'Passionate Team', desc: 'Dedicated professionals who care.' },
];

export const AboutSection = ({ onOpenOurStory }: AboutSectionProps) => (
  <section id="about" className="relative scroll-mt-20 overflow-hidden border-t border-line/70 bg-canvas py-14 sm:py-20 lg:py-24">
    <FloralCornerMotif position="bottom-left" opacity={0.14} className="-bottom-6 -left-10 lg:hidden" />
    <FloralCornerMotif position="bottom-right" opacity={0.28} className="hidden lg:block -right-6 bottom-6" />

    <div className="container-luxe relative">
      <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-10 xl:gap-12">
        <figure className="reveal relative mx-auto w-full max-w-[290px] sm:max-w-[340px] md:max-w-[360px] lg:col-span-4 lg:mx-0 lg:max-w-none">
          <div className="relative aspect-[4/4.8] w-full">
            {/* Arched Photo Frame with luxury white border, golden ring and deep burgundy shadow */}
            <div className="absolute inset-0 overflow-hidden rounded-t-[140px] sm:rounded-t-[160px] lg:rounded-t-[180px] rounded-b-2xl border-[3px] sm:border-4 border-white/95 shadow-[0_20px_48px_-15px_rgba(122,27,40,0.28)] ring-1 ring-[#E8DEC8]">
              <img
                src="/images/about-centerpiece.webp"
                alt="Candlelit floral centerpiece styled for a reception table"
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover object-center transition-transform duration-[900ms] ease-[var(--ease-luxe)] hover:scale-105"
              />
              <span className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/35 via-black/10 to-transparent" />
            </div>

            {/* "SINCE 2023" Seal Badge - floating gracefully at bottom-left corner with zero clipping */}
            <SinceSealBadge className="absolute -bottom-3 -left-2 sm:-bottom-4 sm:-left-3 lg:-bottom-3 lg:-left-3 z-10 shadow-xl" />
          </div>
        </figure>

        <div className="lg:col-span-5">
          <SectionOverline text="About Us" className="reveal" />
          <h2 className="reveal reveal-delay-1 mt-3 font-display text-[2.1rem] font-medium leading-[1.1] tracking-[-0.02em] text-ink sm:text-[2.75rem] lg:text-[2.35rem] lg:font-normal xl:text-[2.6rem]">
            More Than Just Events,
            <br />
            We Create <span className="italic font-normal text-burgundy">Experiences.</span>
          </h2>
          <p className="reveal reveal-delay-2 mt-4 max-w-[440px] text-[14px] leading-[1.7] text-ink-soft sm:text-[15px] lg:text-[13.5px]">
            At Shree Swami Samarth Events, we believe every celebration is a unique story. With creativity, attention to detail, and a passion for perfection, we turn your ideas into beautifully crafted moments.
          </p>
          <button
            type="button"
            onClick={onOpenOurStory}
            className="group reveal reveal-delay-3 mt-6 inline-flex w-full cursor-pointer items-center justify-center gap-2 rounded-full bg-burgundy px-6 py-3 text-[15px] font-semibold text-canvas shadow-[var(--shadow-cta)] transition-all duration-300 hover:bg-burgundy-light active:scale-[0.99] sm:w-auto lg:text-[13px]"
          >
            Know Our Story
            <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
          </button>
        </div>

        <ul className="grid grid-cols-2 gap-x-4 gap-y-8 text-center sm:gap-x-6 lg:col-span-3 lg:grid-cols-1 lg:gap-5 lg:text-left">
          {PILLARS.map(({ icon: Icon, title, desc }, i) => (
            <li
              key={title}
              className={`reveal reveal-delay-${i + 1} flex flex-col items-center gap-2.5 lg:flex-row lg:items-center lg:gap-3.5`}
            >
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-canvas-soft text-burgundy lg:h-10 lg:w-10 lg:border lg:border-[#EDE3D4] lg:bg-[#F5EFE6]">
                <Icon className="h-5 w-5 lg:h-4 lg:w-4" strokeWidth={1.6} />
              </span>
              <span>
                <span className="block font-display text-[15px] font-bold leading-tight text-ink lg:text-[15px]">{title}</span>
                <span className="mt-1 block text-[12px] leading-snug text-ink-soft lg:mt-0.5 lg:text-[11.5px]">{desc}</span>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </section>
);
