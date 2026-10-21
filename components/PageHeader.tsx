"use client";

import React from 'react';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { FloralCornerMotif, SectionOverline } from './FloralMotif';

interface PageHeaderProps {
  badge: string;
  title: string;
  italicWord?: string;
  description: string;
  breadcrumb: string;
}

export const PageHeader: React.FC<PageHeaderProps> = ({
  badge,
  title,
  italicWord,
  description,
  breadcrumb,
}) => {
  return (
    <section className="relative overflow-hidden border-b border-line/80 bg-canvas pt-28 pb-14 sm:pt-32 sm:pb-16 lg:pt-36 lg:pb-20">
      <FloralCornerMotif position="top-right" opacity={0.16} className="-right-8 -top-8" />
      <FloralCornerMotif position="bottom-left" opacity={0.12} className="-left-8 -bottom-8" />

      <div className="container-luxe relative z-10 text-center">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-4 flex items-center justify-center gap-1.5 text-xs text-ink-muted">
          <Link href="/" className="transition-colors hover:text-burgundy">
            Home
          </Link>
          <ChevronRight className="h-3 w-3 text-[#C59B27]" />
          <span className="font-medium text-ink">{breadcrumb}</span>
        </nav>

        {/* Overline Badge */}
        <SectionOverline text={badge} centered className="mb-3" />

        {/* Main Display Heading */}
        <h1 className="font-display text-[2.5rem] font-medium leading-[1.1] tracking-[-0.02em] text-ink sm:text-[3.25rem] lg:text-[3.6rem]">
          {title}{' '}
          {italicWord && (
            <span className="font-serif italic font-normal text-burgundy">
              {italicWord}
            </span>
          )}
        </h1>

        {/* Subtitle / Description */}
        <p className="mx-auto mt-4 max-w-2xl text-[14.5px] leading-relaxed text-ink-soft sm:text-[16px] lg:text-[15.5px]">
          {description}
        </p>
      </div>
    </section>
  );
};
