"use client";

import { ArrowRight, Cake, Baby, HeartHandshake, Flower2, Briefcase, type LucideIcon } from 'lucide-react';
import { SectionOverline, FloralCornerMotif } from './FloralMotif';
import { SERVICES_DATA, type ServiceItem } from '../data/eventsData';

interface ServicesSectionProps {
  onSelectService: (service: ServiceItem) => void;
  onOpenPlanModal: () => void;
}

const ICONS: Record<string, LucideIcon> = {
  Cake,
  Baby,
  HeartHandshake,
  Flower2,
  Briefcase,
};

export const ServicesSection = ({ onSelectService, onOpenPlanModal }: ServicesSectionProps) => (
  <section
    id="services"
    className="relative scroll-mt-20 overflow-hidden border-t border-line/70 bg-canvas py-14 sm:py-20 lg:py-24"
  >
    <FloralCornerMotif position="top-right" opacity={0.15} className="-right-10 -top-6 lg:hidden" />
    <FloralCornerMotif position="bottom-left" opacity={0.28} className="hidden lg:block -left-8 top-14" />
    <FloralCornerMotif position="bottom-right" opacity={0.28} className="hidden lg:block -right-6 bottom-0" />

    <div className="container-luxe relative">
      <div className="reveal flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between lg:gap-8">
        <div>
          <SectionOverline text="Our Services" trailingLine />
          <h2 className="mt-3 font-display text-[2.1rem] font-medium leading-[1.1] tracking-[-0.02em] text-ink sm:text-[2.75rem] lg:text-[2.5rem] lg:font-normal xl:text-[2.75rem]">
            Celebrations for <span className="italic font-normal text-burgundy">Every Occasion</span>
          </h2>
        </div>

        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:gap-10">
          <p className="text-[14px] leading-relaxed text-ink-soft sm:text-[15px] lg:max-w-[360px] lg:text-[12.5px]">
            Whether it&apos;s a birthday, baby shower, wedding, or a special gathering, we create beautifully designed experiences tailored to your needs.
          </p>
          <button
            type="button"
            onClick={onOpenPlanModal}
            className="group inline-flex w-fit shrink-0 cursor-pointer items-center gap-1.5 text-[13px] font-semibold text-burgundy transition-colors hover:text-burgundy-light"
          >
            View All Services
            <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
          </button>
        </div>
      </div>

      <ul className="mt-11 grid gap-12 sm:mt-12 sm:grid-cols-2 sm:gap-6 lg:mt-9 lg:grid-cols-5 lg:gap-4 xl:gap-5">
        {SERVICES_DATA.map((service, i) => {
          const Icon = ICONS[service.iconName] ?? Cake;
          return (
            <li key={service.id} className={`reveal reveal-delay-${Math.min(i + 1, 4)} flex`}>
              <button
                type="button"
                onClick={() => onSelectService(service)}
                className="group flex w-full cursor-pointer flex-col text-left md:overflow-hidden md:rounded-2xl md:border md:border-[#ECE3D5] md:bg-[#F5F0E8] md:p-0 md:pb-4 md:shadow-sm md:transition-all md:duration-300 md:hover:-translate-y-1 md:hover:border-burgundy/25 md:hover:shadow-[var(--shadow-card)]"
              >
                <div className="relative">
                  <div className="aspect-[21/10] w-full overflow-hidden rounded-2xl bg-canvas-soft md:aspect-[4/3] md:rounded-b-none md:rounded-t-2xl">
                    <img
                      src={service.image}
                      alt={service.title}
                      loading="lazy"
                      decoding="async"
                      className="h-full w-full object-cover transition-transform duration-700 ease-[var(--ease-luxe)] group-hover:scale-105"
                    />
                  </div>
                  <span className="absolute -bottom-5 left-4 grid h-11 w-11 place-items-center rounded-full bg-white text-burgundy shadow-[0_6px_16px_-6px_rgb(31_27_24/0.25)] ring-1 ring-line transition-transform duration-300 group-hover:scale-110 md:-bottom-4 md:left-3.5 md:h-9 md:w-9">
                    <Icon className="h-[18px] w-[18px] md:h-4 md:w-4" />
                  </span>
                </div>

                <div className="mt-8 flex items-start justify-between gap-4 md:mt-6 md:flex-1 md:flex-col md:gap-0 md:px-4">
                  <div className="min-w-0">
                    <h3 className="font-display text-[1.2rem] font-semibold leading-snug text-ink transition-colors duration-200 group-hover:text-burgundy md:text-[15.5px] md:font-bold">
                      {service.title}
                    </h3>
                    <p className="mt-1 text-[13px] leading-relaxed text-ink-soft md:mt-1 md:text-[11.5px] md:leading-[1.5]">
                      {service.shortDesc}
                    </p>
                  </div>
                  <span className="mt-1 grid h-9 w-9 shrink-0 place-items-center rounded-full border border-burgundy/35 text-burgundy transition-colors duration-300 group-hover:bg-burgundy group-hover:text-white md:hidden">
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </div>

                <span className="mt-3 hidden items-center gap-1.5 px-4 text-[11.5px] font-semibold text-burgundy md:inline-flex">
                  Know More
                  <ArrowRight className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  </section>
);
