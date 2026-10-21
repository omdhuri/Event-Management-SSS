"use client";

import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { BrandLogo } from './FloralMotif';

interface NavbarProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
  onOpenDrawer: () => void;
  onOpenPlanModal: () => void;
}

const NAV_LINKS = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'services', label: 'Services' },
  { id: 'work', label: 'Our Work' },
  { id: 'contact', label: 'Contact' },
];

export const Navbar: React.FC<NavbarProps> = ({
  activeSection,
  onNavigate,
  onOpenDrawer,
  onOpenPlanModal,
}) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 12);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-[background-color,box-shadow] duration-300 ${
        scrolled
          ? 'bg-canvas/95 shadow-[0_1px_0_0_rgb(232_222_200/0.8),0_10px_24px_-20px_rgb(122_27_40/0.35)] backdrop-blur-md'
          : 'bg-canvas/90 backdrop-blur-sm lg:bg-transparent lg:backdrop-blur-none'
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center px-5 sm:px-6 lg:h-[72px] lg:px-8">
        {/* ───────── Mobile & tablet: symmetric 3-column grid guarantees
            the logo stays dead-centre and the menu button stays flush right,
            regardless of which other elements are hidden. ───────── */}
        <div className="grid w-full grid-cols-[2.5rem_1fr_2.5rem] items-center lg:hidden">
          <span aria-hidden="true" />

          <div className="flex justify-center">
            <BrandLogo size="sm" onClick={() => onNavigate('home')} />
          </div>

          <button
            type="button"
            onClick={onOpenDrawer}
            aria-label="Open navigation menu"
            className="flex h-10 w-10 cursor-pointer flex-col items-center justify-center justify-self-end gap-[6px] text-ink transition-colors hover:text-burgundy"
          >
            <span className="block h-[1.5px] w-[22px] rounded-full bg-current" />
            <span className="block h-[1.5px] w-[22px] rounded-full bg-current" />
            <span className="block h-[1.5px] w-[22px] rounded-full bg-current" />
          </button>
        </div>

        {/* ───────── Desktop: horizontal logo left, links centred, CTA + round menu right ───────── */}
        <div className="hidden w-full items-center justify-between gap-6 lg:flex">
          <div className="flex items-center gap-12 xl:gap-16">
            <BrandLogo layout="horizontal" onClick={() => onNavigate('home')} />

            <nav aria-label="Primary" className="flex items-center gap-7 xl:gap-8">
              {NAV_LINKS.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <button
                    key={link.id}
                    type="button"
                    onClick={() => onNavigate(link.id)}
                    aria-current={isActive ? 'page' : undefined}
                    className={`relative cursor-pointer py-1 text-[13.5px] font-medium transition-colors ${
                      isActive ? 'font-semibold text-burgundy' : 'text-ink hover:text-burgundy'
                    }`}
                  >
                    {link.label}
                    {isActive && (
                      <span className="absolute -bottom-0.5 left-0 right-0 h-[1.5px] rounded-full bg-burgundy" />
                    )}
                  </button>
                );
              })}
            </nav>
          </div>

          {/* Desktop already shows the full link menu above, so no duplicate hamburger here —
              one menu control visible at a time. */}
          <button
            type="button"
            onClick={onOpenPlanModal}
            className="group inline-flex cursor-pointer items-center gap-2 rounded-full border border-[#D4AF6A]/70 bg-burgundy px-5 py-2 text-xs font-semibold tracking-wide text-canvas shadow-[0_4px_14px_rgb(122_27_40/0.35)] transition-all duration-300 hover:bg-burgundy-light active:scale-[0.98]"
          >
            Plan Your Event
            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
          </button>
        </div>
      </div>
    </header>
  );
};
