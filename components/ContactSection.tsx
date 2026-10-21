"use client";

import React, { useState } from 'react';
import { Phone, MapPin, Clock, Mail, Send, Check, Sparkles } from 'lucide-react';
import { WhatsAppIcon, InstagramIcon } from './icons';
import { SectionOverline, FloralCornerMotif } from './FloralMotif';
import { WHATSAPP_URL, PHONE_E164, PHONE_DISPLAY, ADDRESS_FULL, ADDRESS_LINE, ADDRESS_PIN, MAP_EMBED, MAP_LINK, whatsappHref } from '../data/contact';

export const ContactSection: React.FC<{ onOpenPlanModal?: () => void }> = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    eventType: 'Wedding',
    date: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    // Pre-fill WhatsApp message and launch
    const text = `Hello Shree Swami Samarth Events!%0A%0AMy Name: ${encodeURIComponent(formData.name)}%0APhone: ${encodeURIComponent(formData.phone)}%0AEvent Type: ${encodeURIComponent(formData.eventType)}%0ADate: ${encodeURIComponent(formData.date)}%0AMessage: ${encodeURIComponent(formData.message)}`;
    setTimeout(() => {
      window.open(`${WHATSAPP_URL}?text=${text}`, '_blank');
      setSubmitted(false);
      setFormData({ name: '', phone: '', eventType: 'Wedding', date: '', message: '' });
    }, 1200);
  };

  return (
    <section id="contact" className="relative bg-[#FAF7F2] overflow-hidden">
      
      {/* 1. Top Candlelit Luxury Banner */}
      <div className="relative overflow-hidden border-b border-line bg-canvas py-14 text-ink lg:border-[#1E3447] lg:bg-[#231610] lg:py-12 lg:text-white">
        {/* Background Overlay of Candles & Florals (visible on desktop like the PC reference) */}
        <div className="pointer-events-none absolute inset-0 hidden lg:block">
          <img
            src="/images/about-centerpiece.jpg"
            alt=""
            aria-hidden="true"
            className="h-full w-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1A0F0A]/92 via-[#24140E]/65 to-[#1A0F0A]/55" />
        </div>

        <div className="container-luxe relative z-10">
          <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-center">
            <div className="max-w-xl text-left">
              <SectionOverline text="Get In Touch" className="mb-3 lg:hidden" />
              <h2 className="mb-2 font-display text-[2.1rem] font-medium leading-[1.1] tracking-[-0.02em] text-ink sm:text-[2.75rem] lg:text-[2.25rem] lg:font-normal lg:leading-[1.12] lg:text-white">
                Let&apos;s Plan Your
                <br className="hidden lg:inline" /> Next Celebration
              </h2>
              <p className="text-[14px] leading-relaxed text-ink-soft sm:text-[15px] lg:text-[13px] lg:text-white/80">
                Get in touch with us and let&apos;s create something beautiful together.
              </p>
            </div>

            <div className="flex shrink-0 flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:gap-3.5">
              <a
                href={whatsappHref('Hello Shree Swami Samarth Events, I would like to plan an event with you.')}
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-full cursor-pointer items-center justify-center gap-2.5 rounded-full border border-[#D4AF6A]/45 bg-burgundy px-6 py-3 text-[15px] font-semibold text-white shadow-[var(--shadow-cta)] transition-all hover:bg-burgundy-light sm:w-auto sm:text-[13px]"
              >
                <WhatsAppIcon className="h-4 w-4 text-[#E2B856]" />
                <span>Chat on WhatsApp</span>
              </a>

              <a
                href={`tel:${PHONE_E164}`}
                className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-full border border-burgundy/40 bg-transparent px-6 py-3 text-[15px] font-semibold text-burgundy transition-all hover:bg-canvas-soft sm:w-auto sm:text-[13px] lg:border-0 lg:bg-white lg:text-ink lg:shadow-md lg:hover:bg-gray-100"
              >
                <Phone className="h-4 w-4 text-[#7A1B28]" />
                <span>Call Now</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Detailed Contact Information, Live Map & Quick Booking Section */}
      <div className="relative py-16 md:py-20 lg:py-24">
        <FloralCornerMotif position="bottom-right" opacity={0.2} className="bottom-0 right-0" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            {/* Left Column: Contact Cards Grid (7 Cols) */}
            <div className="reveal lg:col-span-7 space-y-4">
              <SectionOverline text="DIRECT CONTACT & LOCATION" />
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#221F1D] mb-6">
                We're Here in Kalyan to Help You Celebrate
              </h3>

              <div className="grid grid-cols-1 gap-0 sm:grid-cols-2 sm:gap-4">
                
                {/* Location Card */}
                <div className="py-5 sm:p-5 rounded-none sm:rounded-2xl bg-transparent sm:bg-white border-b border-line sm:border sm:border-[#EAE3D6] shadow-none sm:shadow-sm flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-full bg-[#FAF2E8] text-[#7A1B28] flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-[#7A6E65] font-bold uppercase tracking-wider block">Our Location</span>
                    <span className="font-display text-base font-bold text-[#221F1D] block mt-0.5">{ADDRESS_LINE}</span>
                    <span className="text-xs text-[#6E6259]">PIN {ADDRESS_PIN} · Serving Kalyan & nearby</span>
                  </div>
                </div>

                {/* Working Hours Card */}
                <div className="py-5 sm:p-5 rounded-none sm:rounded-2xl bg-transparent sm:bg-white border-b border-line sm:border sm:border-[#EAE3D6] shadow-none sm:shadow-sm flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-full bg-[#FAF2E8] text-[#7A1B28] flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-[#7A6E65] font-bold uppercase tracking-wider block">Working Hours</span>
                    <span className="font-display text-base font-bold text-[#221F1D] block mt-0.5">Mon - Sun</span>
                    <span className="text-xs text-[#6E6259]">9:00 AM - 8:00 PM</span>
                  </div>
                </div>

                {/* Email Card */}
                <div className="py-5 sm:p-5 rounded-none sm:rounded-2xl bg-transparent sm:bg-white border-b border-line sm:border sm:border-[#EAE3D6] shadow-none sm:shadow-sm flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-full bg-[#FAF2E8] text-[#7A1B28] flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <span className="text-xs text-[#7A6E65] font-bold uppercase tracking-wider block">Email Us</span>
                    <a
                      href="mailto:shreeswamisamarthevents@gmail.com"
                      className="font-display text-sm sm:text-base font-bold text-[#7A1B28] hover:underline block mt-0.5 truncate"
                    >
                      shreeswamisamarthevents@gmail.com
                    </a>
                  </div>
                </div>

                {/* Social Card */}
                <div className="py-5 sm:p-5 rounded-none sm:rounded-2xl bg-transparent sm:bg-white border-b border-line sm:border sm:border-[#EAE3D6] shadow-none sm:shadow-sm flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-full bg-[#FAF2E8] text-[#7A1B28] flex items-center justify-center shrink-0">
                    <InstagramIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-[#7A6E65] font-bold uppercase tracking-wider block">Follow Us</span>
                    <a
                      href="https://instagram.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-display text-sm sm:text-base font-bold text-[#7A1B28] hover:underline block mt-0.5"
                    >
                      @shreeswamisamarthevents
                    </a>
                  </div>
                </div>

              </div>

              {/* Live Map — Kalyan, Maharashtra */}
              <div className="relative rounded-2xl overflow-hidden border border-[#E8DEC8] bg-[#F3EDE2] h-56 sm:h-64 lg:h-72 shadow-sm">
                <iframe
                  title={`Shree Swami Samarth Events — ${ADDRESS_FULL}`}
                  src={MAP_EMBED}
                  className="absolute inset-0 w-full h-full border-0 grayscale-[0.25] contrast-[1.05]"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
                <a
                  href={MAP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute top-3 left-3 z-10 bg-white/95 backdrop-blur px-3 sm:px-4 py-2 rounded-full shadow-md border border-[#EAE3D6] flex items-center gap-2 hover:bg-white transition-colors max-w-[calc(100%-1.5rem)]"
                >
                  <MapPin className="w-4 h-4 text-[#7A1B28] shrink-0" />
                  <span className="font-display font-bold text-sm text-[#221F1D] truncate">{ADDRESS_FULL}</span>
                </a>
              </div>
            </div>

            {/* Right Column: Quick Booking Form (5 Cols) */}
            <div className="reveal reveal-delay-1 lg:col-span-5 bg-white p-6 sm:p-8 rounded-3xl border border-[#EAE3D6] shadow-[0_12px_35px_rgba(122,27,40,0.06)] relative">
              <div className="flex items-center gap-2 text-[#C59B27] mb-2">
                <Sparkles className="w-4 h-4" />
                <span className="text-xs font-bold uppercase tracking-widest text-[#7A1B28]">Instant Inquiry</span>
              </div>
              <h3 className="font-display text-2xl font-bold text-[#221F1D] mb-1">
                Tell Us About Your Event
              </h3>
              <p className="text-xs text-[#7A6E65] font-sans mb-5">
                We'll get back with a customized package proposal within 2 hours.
              </p>

              {submitted ? (
                <div className="py-12 text-center space-y-3">
                  <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-sm">
                    <Check className="w-7 h-7" />
                  </div>
                  <h4 className="font-display text-2xl font-bold text-[#221F1D]">Inquiry Prepared!</h4>
                  <p className="text-xs text-[#7A6E65]">Opening WhatsApp to connect directly with our head event designer...</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3.5">
                  <div>
                    <label className="block text-[11px] font-bold text-[#423932] uppercase tracking-wider mb-1">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rahul Patil"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#FAF7F2] border border-[#E2D8CC] text-sm text-[#221F1D] focus:outline-none focus:ring-2 focus:ring-[#7A1B28]"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[11px] font-bold text-[#423932] uppercase tracking-wider mb-1">
                        Contact Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder={PHONE_DISPLAY}
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[#FAF7F2] border border-[#E2D8CC] text-sm text-[#221F1D] focus:outline-none focus:ring-2 focus:ring-[#7A1B28]"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold text-[#423932] uppercase tracking-wider mb-1">
                        Event Type
                      </label>
                      <select
                        value={formData.eventType}
                        onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[#FAF7F2] border border-[#E2D8CC] text-sm text-[#221F1D] focus:outline-none focus:ring-2 focus:ring-[#7A1B28]"
                      >
                        <option value="Wedding">Wedding & Reception</option>
                        <option value="Birthday Party">Birthday Party</option>
                        <option value="Baby Shower">Baby Shower / Dohale Jevan</option>
                        <option value="Festive & Traditional">Festive / Haldi / Pooja</option>
                        <option value="Corporate Event">Corporate Gala / Conference</option>
                        <option value="Other">Other Celebration</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-[#423932] uppercase tracking-wider mb-1">
                      Event Date (Expected)
                    </label>
                    <input
                      type="date"
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#FAF7F2] border border-[#E2D8CC] text-sm text-[#221F1D] focus:outline-none focus:ring-2 focus:ring-[#7A1B28]"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-[#423932] uppercase tracking-wider mb-1">
                      Message / Special Themes
                    </label>
                    <textarea
                      rows={2}
                      placeholder="Share estimated guest count, theme preferences, venue details..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#FAF7F2] border border-[#E2D8CC] text-sm text-[#221F1D] focus:outline-none focus:ring-2 focus:ring-[#7A1B28]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 px-6 rounded-full bg-[#7A1B28] hover:bg-[#8F2030] text-white text-xs sm:text-sm font-sans font-bold flex items-center justify-center gap-2 shadow-lg transition-all active:scale-[0.98] cursor-pointer mt-2"
                  >
                    <Send className="w-4 h-4 text-[#E2B856]" />
                    <span>Send Inquiry on WhatsApp</span>
                  </button>
                </form>
              )}
            </div>

          </div>
        </div>
      </div>

    </section>
  );
};
