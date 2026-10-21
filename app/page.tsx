"use client";

import { useState, useEffect, useCallback } from 'react';
import { Navbar } from '../components/Navbar';
import { MobileDrawer } from '../components/MobileDrawer';
import { HeroSection } from '../components/HeroSection';
import { ServicesSection } from '../components/ServicesSection';
import { OurWorkSection } from '../components/OurWorkSection';
import { AboutSection } from '../components/AboutSection';
import { TestimonialsSection } from '../components/TestimonialsSection';
import { ContactSection } from '../components/ContactSection';
import { Footer } from '../components/Footer';
import { EventDetailModal } from '../components/EventDetailModal';
import { ServiceDetailModal } from '../components/ServiceDetailModal';
import { OurStoryModal } from '../components/OurStoryModal';
import { PlanEventModal } from '../components/PlanEventModal';
import { FullGalleryModal } from '../components/FullGalleryModal';
import { FloatingActions } from '../components/FloatingActions';
import { useScrollReveal, useBodyScrollLock } from '../hooks/useScrollReveal';
import { SERVICES_DATA, GalleryItem, ServiceItem } from '../data/eventsData';
import { whatsappHref } from '../data/contact';

const openWhatsApp = (message: string) =>
  window.open(whatsappHref(message), '_blank', 'noopener,noreferrer');

export default function HomePage() {
  const [activeSection, setActiveSection] = useState('home');
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isPlanModalOpen, setIsPlanModalOpen] = useState(false);
  const [isOurStoryModalOpen, setIsOurStoryModalOpen] = useState(false);
  const [isFullGalleryModalOpen, setIsFullGalleryModalOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState<GalleryItem | null>(null);
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  const anyOverlayOpen =
    isDrawerOpen || isPlanModalOpen || isOurStoryModalOpen || isFullGalleryModalOpen || !!selectedEvent || !!selectedService;

  useScrollReveal();
  useBodyScrollLock(anyOverlayOpen);

  // Scroll-spy for nav highlighting
  useEffect(() => {
    const sections = ['home', 'services', 'work', 'about', 'testimonials', 'contact'];
    let ticking = false;

    const update = () => {
      const probe = window.scrollY + window.innerHeight * 0.35;
      let current = sections[0];
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= probe) current = id;
      }
      setActiveSection(current);
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(update);
        ticking = true;
      }
    };

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Escape closes the top-most overlay
  useEffect(() => {
    if (!anyOverlayOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== 'Escape') return;
      if (selectedEvent) setSelectedEvent(null);
      else if (selectedService) setSelectedService(null);
      else if (isPlanModalOpen) setIsPlanModalOpen(false);
      else if (isFullGalleryModalOpen) setIsFullGalleryModalOpen(false);
      else if (isOurStoryModalOpen) setIsOurStoryModalOpen(false);
      else if (isDrawerOpen) setIsDrawerOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [anyOverlayOpen, selectedEvent, selectedService, isPlanModalOpen, isFullGalleryModalOpen, isOurStoryModalOpen, isDrawerOpen]);

  const handleNavigate = useCallback((sectionId: string) => {
    setActiveSection(sectionId);
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, []);

  const handleSelectServiceById = (serviceId: string) => {
    const srv = SERVICES_DATA.find((s) => s.id === serviceId);
    if (srv) setSelectedService(srv);
    else handleNavigate('services');
  };

  const handleEnquireFromCaseStudy = (event: GalleryItem) =>
    openWhatsApp(`Hello Shree Swami Samarth Events, I loved your "${event.title}" (${event.category}) setup and would like to enquire about a similar event.`);

  const handlePlanFromService = (serviceTitle: string) =>
    openWhatsApp(`Hello Shree Swami Samarth Events, I'm interested in your "${serviceTitle}" package. Please share details and availability.`);

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#221F1D] flex flex-col font-sans-body selection:bg-[#7A1B28] selection:text-white">
      <a
        href="#home"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[60] focus:bg-[#7A1B28] focus:text-white focus:px-4 focus:py-2 focus:rounded-full"
      >
        Skip to content
      </a>

      <Navbar
        activeSection={activeSection}
        onNavigate={handleNavigate}
        onOpenDrawer={() => setIsDrawerOpen(true)}
        onOpenPlanModal={() => setIsPlanModalOpen(true)}
      />

      <main className="flex-1">
        <HeroSection
          onOpenPlanModal={() => setIsPlanModalOpen(true)}
          onExploreWork={() => handleNavigate('work')}
          onScrollToServices={() => handleNavigate('services')}
        />
        <ServicesSection
          onSelectService={setSelectedService}
          onOpenPlanModal={() => setIsPlanModalOpen(true)}
        />
        <OurWorkSection
          onSelectEvent={setSelectedEvent}
          onOpenFullGallery={() => setIsFullGalleryModalOpen(true)}
        />
        <AboutSection onOpenOurStory={() => setIsOurStoryModalOpen(true)} />
        <TestimonialsSection />
        <ContactSection />
      </main>

      <Footer onNavigate={handleNavigate} onSelectService={handleSelectServiceById} />

      <FloatingActions />

      <MobileDrawer
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        activeSection={activeSection}
        onNavigate={handleNavigate}
        onOpenPlanModal={() => setIsPlanModalOpen(true)}
        onSelectService={handleSelectServiceById}
      />
      <EventDetailModal event={selectedEvent} onClose={() => setSelectedEvent(null)} onEnquire={handleEnquireFromCaseStudy} />
      <ServiceDetailModal service={selectedService} onClose={() => setSelectedService(null)} onPlanEvent={handlePlanFromService} />
      <OurStoryModal isOpen={isOurStoryModalOpen} onClose={() => setIsOurStoryModalOpen(false)} onPlanEvent={() => setIsPlanModalOpen(true)} />
      <FullGalleryModal isOpen={isFullGalleryModalOpen} onClose={() => setIsFullGalleryModalOpen(false)} onSelectEvent={setSelectedEvent} />
      <PlanEventModal isOpen={isPlanModalOpen} onClose={() => setIsPlanModalOpen(false)} />
    </div>
  );
}

