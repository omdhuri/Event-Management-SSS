"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Sparkles } from 'lucide-react';
import { BrandLogo } from './FloralMotif';
import { useModals } from '../context/ModalContext';

export const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/work', label: 'Our Work' },
  { href: '/contact', label: 'Contact' },
];

interface NavbarProps {
  activeSection?: string;
  onNavigate?: (sectionId: string) => void;
  onOpenDrawer?: () => void;
  onOpenPlanModal?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenDrawer,
  onOpenPlanModal,
}) => {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const modals = useModals();

  const handleOpenDrawer = onOpenDrawer ?? modals.openDrawer;
  const handleOpenPlanModal = onOpenPlanModal ?? modals.openPlanModal;

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
            <Link href="/" aria-label="Shree Swami Samarth Events">
              <BrandLogo size="sm" />
            </Link>
          </div>

          <button
            type="button"
            onClick={handleOpenDrawer}
            aria-label="Open navigation menu"
            className="flex h-10 w-10 cursor-pointer flex-col items-center justify-center justify-self-end gap-[6px] text-ink transition-colors hover:text-burgundy"
          >
            <span className="block h-[1.5px] w-[22px] rounded-full bg-current" />
            <span className="block h-[1.5px] w-[22px] rounded-full bg-current" />
            <span className="block h-[1.5px] w-[22px] rounded-full bg-current" />
          </button>
        </div>

        {/* ───────── Desktop: horizontal logo left, links centred, CTA right ───────── */}
        <div className="hidden w-full items-center justify-between gap-6 lg:flex">
          <div className="flex items-center gap-12 xl:gap-16">
            <Link href="/" aria-label="Shree Swami Samarth Events">
              <BrandLogo layout="horizontal" />
            </Link>

            <nav aria-label="Primary" className="flex items-center gap-7 xl:gap-8">
              {NAV_LINKS.map((link) => {
                const isActive =
                  link.href === '/'
                    ? pathname === '/'
                    : pathname.startsWith(link.href);
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    aria-current={isActive ? 'page' : undefined}
                    className={`relative py-1 text-[13.5px] font-medium transition-colors ${
                      isActive ? 'font-semibold text-burgundy' : 'text-ink hover:text-burgundy'
                    }`}
                  >
                    {link.label}
                    {isActive && (
                      <span className="absolute -bottom-0.5 left-0 right-0 h-[1.5px] rounded-full bg-burgundy" />
                    )}
                  </Link>
                );
              })}
            </nav>
          </div>

          <button
            type="button"
            onClick={handleOpenPlanModal}
            className="group inline-flex cursor-pointer items-center gap-2 rounded-full bg-burgundy px-5 py-2.5 text-[13.5px] font-semibold text-canvas shadow-[0_8px_20px_-6px_rgb(122_27_40/0.45)] transition-all duration-300 hover:bg-burgundy-light hover:shadow-[0_12px_28px_-6px_rgb(122_27_40/0.55)] active:scale-[0.98]"
          >
            <Sparkles className="h-3.5 w-3.5 text-gold-light transition-transform duration-300 group-hover:rotate-12" />
            <span>Plan Your Event</span>
          </button>
        </div>
      </div>
    </header>
  );
};
