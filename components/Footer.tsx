"use client";

import React from 'react';
import { Phone, MapPin } from 'lucide-react';
import { WhatsAppIcon, InstagramIcon, FacebookIcon } from './icons';
import { BrandLogo, FloralCornerMotif } from './FloralMotif';
import { SERVICES_DATA } from '../data/eventsData';
import { PHONE_E164, PHONE_DISPLAY, WHATSAPP_URL, ADDRESS_FULL } from '../data/contact';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
  onSelectService: (serviceId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onSelectService }) => {
  return (
    <footer className="relative bg-[#081622] text-[#FAF7F2] overflow-hidden pt-16 pb-28 sm:pb-16 border-t border-[#1E3447]">
      {/* Background Floral Watermark */}
      <FloralCornerMotif position="bottom-right" opacity={0.15} className="bottom-0 right-0 text-[#C59B27]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-[#1E3447]/80">
          
          {/* Col 1: Brand & Tagline & Socials (4 Cols) */}
          <div className="lg:col-span-4 space-y-4">
            <BrandLogo darkTheme onClick={() => onNavigate('home')} />

            <p className="font-sans text-xs sm:text-sm text-gray-400 max-w-sm leading-relaxed">
              Creating beautiful celebrations with creativity, passion and a personal touch.
            </p>

            <div className="flex items-center gap-4 text-gray-300 pt-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-[#122536] hover:bg-[#7A1B28] hover:text-[#E2B856] flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-[#122536] hover:bg-[#7A1B28] hover:text-[#E2B856] flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <FacebookIcon className="w-4 h-4" />
              </a>
              <a
                href={`tel:${PHONE_E164}`}
                className="w-9 h-9 rounded-full bg-[#122536] hover:bg-[#7A1B28] hover:text-[#E2B856] flex items-center justify-center transition-colors"
                aria-label="Call us"
              >
                <Phone className="w-4 h-4" />
              </a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-[#122536] hover:bg-[#7A1B28] hover:text-[#E2B856] flex items-center justify-center transition-colors"
                aria-label="Chat on WhatsApp"
              >
                <WhatsAppIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links (2 Cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-display text-base font-bold text-[#E2B856] uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm font-sans text-gray-300">
              {[
                { id: 'home', label: 'Home' },
                { id: 'about', label: 'About' },
                { id: 'services', label: 'Services' },
                { id: 'work', label: 'Our Work' },
                { id: 'contact', label: 'Contact' }
              ].map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => onNavigate(link.id)}
                    className="hover:text-[#E2B856] transition-colors cursor-pointer"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Our Services (3 Cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-display text-base font-bold text-[#E2B856] uppercase tracking-wider">
              Our Services
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm font-sans text-gray-300">
              {SERVICES_DATA.map((srv) => (
                <li key={srv.id}>
                  <button
                    onClick={() => onSelectService(srv.id)}
                    className="hover:text-[#E2B856] transition-colors cursor-pointer text-left"
                  >
                    {srv.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact Us (3 Cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-display text-base font-bold text-[#E2B856] uppercase tracking-wider">
              Contact Us
            </h4>
            <ul className="space-y-3 text-xs sm:text-sm font-sans text-gray-300">
              <li>
                <a href={`tel:${PHONE_E164}`} className="flex items-center gap-2.5 hover:text-[#E2B856] transition-colors">
                  <Phone className="w-4 h-4 text-[#E2B856] shrink-0" />
                  <span>{PHONE_DISPLAY}</span>
                </a>
              </li>
              <li>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 hover:text-[#E2B856] transition-colors"
                >
                  <WhatsAppIcon className="w-4 h-4 text-[#E2B856] shrink-0" />
                  <span>Chat on WhatsApp</span>
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#E2B856] shrink-0 mt-0.5" />
                <span>{ADDRESS_FULL}</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Copyright Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-sans text-gray-400 sm:pr-24 lg:pr-28">
          <p className="text-center sm:text-left">
            © {new Date().getFullYear()} Shree Swami Samarth Events. All rights reserved.
          </p>
          <p className="flex items-center gap-1.5 text-center sm:text-right">
            <span>Designed by</span>
            <a
              href="https://omdhuri.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-[#E2B856] hover:text-white transition-colors underline-offset-4 hover:underline"
            >
              OM DHURI
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};
