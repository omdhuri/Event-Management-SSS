"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { X, ChevronRight, Phone, Sparkles } from 'lucide-react';
import { WhatsAppIcon, InstagramIcon, FacebookIcon } from './icons';
import { BrandLogo, FloralCornerMotif } from './FloralMotif';
import { SERVICES_DATA } from '../data/eventsData';
import { PHONE_E164, PHONE_DISPLAY, INSTAGRAM_URL, whatsappHref } from '../data/contact';

interface MobileDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  activeSection?: string;
  onNavigate?: (sectionId: string) => void;
  onOpenPlanModal: () => void;
  onSelectService: (serviceId: string) => void;
}

const NAV_ITEMS = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services', hasChildren: true },
  { href: '/work', label: 'Our Work' },
  { href: '/contact', label: 'Contact' },
];

export const MobileDrawer: React.FC<MobileDrawerProps> = ({
  isOpen,
  onClose,
  onOpenPlanModal,
  onSelectService,
}) => {
  const [servicesExpanded, setServicesExpanded] = useState(false);
  const pathname = usePathname();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300"
        onClick={onClose}
      />

      {/* Drawer Container */}
      <div className="relative w-full max-w-sm sm:max-w-md bg-[#0B1B28] text-[#FAF7F2] h-full shadow-2xl flex flex-col justify-between overflow-y-auto z-10 border-l border-[#1E3447]/60">
        {/* Subtle floral watermark in bottom right */}
        <FloralCornerMotif
          position="bottom-right"
          opacity={0.15}
          className="bottom-0 right-0"
        />

        {/* Header */}
        <div>
          <div className="flex items-center justify-between px-6 pt-6 pb-4 border-b border-[#1E3447]/50">
            <Link href="/" onClick={onClose} aria-label="Shree Swami Samarth Events Home">
              <BrandLogo darkTheme />
            </Link>
            <button
              onClick={onClose}
              className="w-10 h-10 rounded-full flex items-center justify-center text-[#E2B856] hover:text-white hover:bg-[#1E3447] transition-colors"
              aria-label="Close menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="px-6 py-6 space-y-2">
            {NAV_ITEMS.map((link) => {
              const isActive =
                link.href === '/'
                  ? pathname === '/'
                  : pathname.startsWith(link.href);

              if (link.hasChildren) {
                return (
                  <div key={link.href} className="space-y-1">
                    <div
                      className={`flex items-center justify-between py-3 px-3 rounded-lg cursor-pointer transition-all ${
                        isActive
                          ? 'text-[#E2B856] font-semibold bg-[#122536]'
                          : 'text-gray-200 hover:text-[#E2B856] hover:bg-[#122536]/50'
                      }`}
                    >
                      <Link
                        href={link.href}
                        onClick={onClose}
                        className="flex-1 flex items-center gap-3"
                      >
                        {isActive && <span className="w-1 h-5 bg-[#C59B27] rounded-full" />}
                        <span className="text-lg font-display tracking-wide">{link.label}</span>
                      </Link>
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          setServicesExpanded(!servicesExpanded);
                        }}
                        aria-label="Toggle services list"
                        className="p-1 hover:text-[#E2B856]"
                      >
                        <ChevronRight
                          className={`w-5 h-5 transition-transform duration-300 ${
                            servicesExpanded ? 'rotate-90 text-[#E2B856]' : 'text-gray-400'
                          }`}
                        />
                      </button>
                    </div>

                    {/* Expandable Services */}
                    {servicesExpanded && (
                      <div className="pl-6 pr-2 py-2 space-y-1.5 border-l border-[#C59B27]/30 ml-4">
                        {SERVICES_DATA.map((srv) => (
                          <button
                            key={srv.id}
                            type="button"
                            onClick={() => {
                              onSelectService(srv.id);
                              onClose();
                            }}
                            className="block w-full text-left py-1.5 px-2 text-sm text-gray-300 hover:text-[#E2B856] transition-colors rounded hover:bg-[#122536]/40"
                          >
                            • {srv.title}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={onClose}
                  className={`flex items-center justify-between py-3 px-3 rounded-lg cursor-pointer transition-all ${
                    isActive
                      ? 'text-[#E2B856] font-semibold bg-[#122536]'
                      : 'text-gray-200 hover:text-[#E2B856] hover:bg-[#122536]/50'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    {isActive && <span className="w-1 h-5 bg-[#C59B27] rounded-full" />}
                    <span className="text-lg font-display tracking-wide">{link.label}</span>
                  </div>
                </Link>
              );
            })}
          </nav>

          {/* Quick Contact & Action Buttons */}
          <div className="px-6 py-4 space-y-3">
            <button
              onClick={() => {
                onOpenPlanModal();
                onClose();
              }}
              className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-full bg-[#7A1B28] hover:bg-[#922131] text-white font-medium text-sm transition-all shadow-md active:scale-[0.98]"
            >
              <Sparkles className="w-4 h-4 text-[#E2B856]" />
              <span>Plan Your Event</span>
            </button>

            <a
              href={whatsappHref('Hello Shree Swami Samarth Events, I would like to enquire about event planning and decor.')}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-4 py-2.5 rounded-lg bg-[#122536]/80 hover:bg-[#122536] text-sm text-gray-200 hover:text-[#E2B856] transition-colors border border-[#1E3447]"
            >
              <WhatsAppIcon className="w-4 h-4 text-[#E2B856]" />
              <span>Chat on WhatsApp</span>
            </a>

            <a
              href={`tel:${PHONE_E164}`}
              className="flex items-center gap-3 px-4 py-2.5 rounded-lg bg-[#122536]/80 hover:bg-[#122536] text-sm text-gray-200 hover:text-[#E2B856] transition-colors border border-[#1E3447]"
            >
              <Phone className="w-4 h-4 text-[#E2B856]" />
              <span>Call Now: {PHONE_DISPLAY}</span>
            </a>

            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-4 py-2.5 rounded-lg bg-[#122536]/80 hover:bg-[#122536] text-sm text-gray-200 hover:text-[#E2B856] transition-colors border border-[#1E3447]"
            >
              <InstagramIcon className="w-4 h-4 text-[#E2B856]" />
              <span>Follow on Instagram</span>
            </a>
          </div>
        </div>

        {/* Footer info in Drawer */}
        <div className="px-6 py-6 border-t border-[#1E3447]/60 bg-[#081622]/80">
          <p className="text-xs text-gray-400 font-sans mb-4 text-center leading-relaxed">
            Creating beautiful celebrations with creativity, passion and a personal touch.
          </p>

          <div className="flex items-center justify-center gap-5 mb-4 text-gray-300">
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full hover:bg-[#122536] hover:text-[#E2B856] transition-colors"
              aria-label="Instagram"
            >
              <InstagramIcon className="w-5 h-5" />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full hover:bg-[#122536] hover:text-[#E2B856] transition-colors"
              aria-label="Facebook"
            >
              <FacebookIcon className="w-5 h-5" />
            </a>
            <a
              href={`tel:${PHONE_E164}`}
              className="p-2 rounded-full hover:bg-[#122536] hover:text-[#E2B856] transition-colors"
              aria-label="Call us"
            >
              <Phone className="w-5 h-5" />
            </a>
            <a
              href={whatsappHref('Hello Shree Swami Samarth Events, I would like to enquire about event planning and decor.')}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full hover:bg-[#122536] hover:text-[#E2B856] transition-colors"
              aria-label="Chat on WhatsApp"
            >
              <WhatsAppIcon className="w-5 h-5" />
            </a>
          </div>

          <p className="text-[11px] text-gray-500 text-center font-sans">
            © {new Date().getFullYear()} Shree Swami Samarth Events.<br />All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};
