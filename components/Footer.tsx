"use client";

import React from 'react';
import Link from 'next/link';
import { Phone, MapPin } from 'lucide-react';
import { WhatsAppIcon, InstagramIcon, FacebookIcon } from './icons';
import { BrandLogo, FloralCornerMotif } from './FloralMotif';
import { SERVICES_DATA } from '../data/eventsData';
import { PHONE_E164, PHONE_DISPLAY, WHATSAPP_URL, ADDRESS_FULL, INSTAGRAM_URL } from '../data/contact';
import { useModals } from '../context/ModalContext';

interface FooterProps {
  onNavigate?: (sectionId: string) => void;
  onSelectService?: (serviceId: string) => void;
}

const QUICK_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/work', label: 'Our Work' },
  { href: '/contact', label: 'Contact' },
];

export const Footer: React.FC<FooterProps> = ({ onSelectService }) => {
  const modals = useModals();
  const handleSelectService = onSelectService ?? modals.openServiceDetail;

  return (
    <footer className="relative bg-[#081622] text-[#FAF7F2] overflow-hidden pt-16 pb-28 sm:pb-16 border-t border-[#1E3447]">
      {/* Background Floral Watermark */}
      <FloralCornerMotif position="bottom-right" opacity={0.15} className="bottom-0 right-0 text-[#C59B27]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-[#1E3447]/80">
          
          {/* Col 1: Brand & Tagline & Socials (4 Cols) */}
          <div className="lg:col-span-4 space-y-4 flex flex-col items-center text-center md:items-start md:text-left">
            <Link href="/" aria-label="Shree Swami Samarth Events Home">
              <BrandLogo darkTheme size="md" />
            </Link>

            <p className="font-sans text-[13.5px] sm:text-xs lg:text-sm text-gray-300 max-w-sm leading-relaxed mx-auto md:mx-0">
              Creating beautiful celebrations with creativity, passion and a personal touch.
            </p>

            <div className="flex items-center justify-center md:justify-start gap-4 text-gray-300 pt-2">
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 md:w-9 md:h-9 rounded-full bg-[#122536] hover:bg-[#7A1B28] hover:text-[#E2B856] flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-4.5 h-4.5 md:w-4 md:h-4" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 md:w-9 md:h-9 rounded-full bg-[#122536] hover:bg-[#7A1B28] hover:text-[#E2B856] flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <FacebookIcon className="w-4.5 h-4.5 md:w-4 md:h-4" />
              </a>
              <a
                href={`tel:${PHONE_E164}`}
                className="w-10 h-10 md:w-9 md:h-9 rounded-full bg-[#122536] hover:bg-[#7A1B28] hover:text-[#E2B856] flex items-center justify-center transition-colors"
                aria-label="Call us"
              >
                <Phone className="w-4.5 h-4.5 md:w-4 md:h-4" />
              </a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 md:w-9 md:h-9 rounded-full bg-[#122536] hover:bg-[#7A1B28] hover:text-[#E2B856] flex items-center justify-center transition-colors"
                aria-label="Chat on WhatsApp"
              >
                <WhatsAppIcon className="w-4.5 h-4.5 md:w-4 md:h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links (2 Cols) */}
          <div className="lg:col-span-2 space-y-3 flex flex-col items-center text-center md:items-start md:text-left">
            <h4 className="font-display text-[17px] md:text-base font-bold text-[#E2B856] uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-3 md:space-y-2 text-[14.5px] sm:text-xs lg:text-sm font-sans text-gray-300 flex flex-col items-center md:items-start">
              {QUICK_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="hover:text-[#E2B856] transition-colors py-1 inline-block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Our Services (3 Cols) */}
          <div className="lg:col-span-3 space-y-3 flex flex-col items-center text-center md:items-start md:text-left">
            <h4 className="font-display text-[17px] md:text-base font-bold text-[#E2B856] uppercase tracking-wider">
              Our Services
            </h4>
            <ul className="space-y-3 md:space-y-2 text-[14.5px] sm:text-xs lg:text-sm font-sans text-gray-300 flex flex-col items-center md:items-start">
              {SERVICES_DATA.map((srv) => (
                <li key={srv.id}>
                  <button
                    type="button"
                    onClick={() => handleSelectService(srv.id)}
                    className="hover:text-[#E2B856] transition-colors cursor-pointer text-center md:text-left py-0.5"
                  >
                    {srv.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact Us (3 Cols) */}
          <div className="lg:col-span-3 space-y-3 flex flex-col items-center text-center md:items-start md:text-left">
            <h4 className="font-display text-[17px] md:text-base font-bold text-[#E2B856] uppercase tracking-wider">
              Contact Us
            </h4>
            <ul className="space-y-3.5 md:space-y-3 text-[14.5px] sm:text-xs lg:text-sm font-sans text-gray-300 flex flex-col items-center md:items-start">
              <li>
                <a
                  href={`tel:${PHONE_E164}`}
                  className="hover:text-[#E2B856] transition-colors flex items-center justify-center md:justify-start gap-2 text-center md:text-left py-0.5"
                >
                  <Phone className="w-4.5 h-4.5 md:w-3.5 md:h-3.5 text-[#E2B856] shrink-0" />
                  <span>{PHONE_DISPLAY}</span>
                </a>
              </li>
              <li>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#E2B856] transition-colors flex items-center justify-center md:justify-start gap-2 text-center md:text-left py-0.5"
                >
                  <WhatsAppIcon className="w-4.5 h-4.5 md:w-3.5 md:h-3.5 text-[#E2B856] shrink-0" />
                  <span>WhatsApp Enquiry</span>
                </a>
              </li>
              <li>
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#E2B856] transition-colors flex items-center justify-center md:justify-start gap-2 text-center md:text-left py-0.5"
                >
                  <InstagramIcon className="w-4.5 h-4.5 md:w-3.5 md:h-3.5 text-[#E2B856] shrink-0" />
                  <span>@shreeswamisamarthevent_07</span>
                </a>
              </li>
              <li className="flex items-start justify-center md:justify-start gap-2 pt-1 text-center md:text-left">
                <MapPin className="w-4.5 h-4.5 md:w-3.5 md:h-3.5 text-[#E2B856] shrink-0 mt-0.5" />
                <span className="leading-snug text-gray-300 max-w-xs md:max-w-none">{ADDRESS_FULL}</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar: Dynamic Copyright & Designer Portfolio Link */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-sans text-gray-300 text-center sm:text-left sm:pr-24 lg:pr-28">
          <p className="order-2 sm:order-1">
            © {new Date().getFullYear()} Shree Swami Samarth Events. All rights reserved.
          </p>

          <p className="order-1 sm:order-2 flex items-center justify-center gap-1.5 flex-wrap">
            <span>Designed with love by</span>
            <a
              href="https://omdhuri.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#FAF7F2] font-semibold tracking-wide hover:text-[#E2B856] underline underline-offset-4 decoration-[#E2B856]/60 hover:decoration-[#E2B856] transition-colors inline-flex items-center gap-1"
            >
              OM DHURI
              <span className="text-[10px] text-[#E2B856] opacity-80" aria-hidden="true">↗</span>
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};
