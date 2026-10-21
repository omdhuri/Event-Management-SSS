"use client";

import React, { createContext, useContext, useState, useCallback, useMemo } from 'react';
import type { GalleryItem, ServiceItem } from '../data/eventsData';
import { SERVICES_DATA } from '../data/eventsData';
import { PlanEventModal } from '../components/PlanEventModal';
import { OurStoryModal } from '../components/OurStoryModal';
import { FullGalleryModal } from '../components/FullGalleryModal';
import { EventDetailModal } from '../components/EventDetailModal';
import { ServiceDetailModal } from '../components/ServiceDetailModal';
import { MobileDrawer } from '../components/MobileDrawer';
import { useBodyScrollLock } from '../hooks/useScrollReveal';
import { whatsappHref } from '../data/contact';

interface ModalContextType {
  openPlanModal: () => void;
  closePlanModal: () => void;
  openOurStoryModal: () => void;
  closeOurStoryModal: () => void;
  openFullGalleryModal: () => void;
  closeFullGalleryModal: () => void;
  openEventDetail: (event: GalleryItem) => void;
  closeEventDetail: () => void;
  openServiceDetail: (serviceOrId: ServiceItem | string) => void;
  closeServiceDetail: () => void;
  openDrawer: () => void;
  closeDrawer: () => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

const openWhatsApp = (message: string) =>
  window.open(whatsappHref(message), '_blank', 'noopener,noreferrer');

export const ModalProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isPlanModalOpen, setIsPlanModalOpen] = useState(false);
  const [isOurStoryModalOpen, setIsOurStoryModalOpen] = useState(false);
  const [isFullGalleryModalOpen, setIsFullGalleryModalOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState<GalleryItem | null>(null);
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  const anyOverlayOpen =
    isDrawerOpen ||
    isPlanModalOpen ||
    isOurStoryModalOpen ||
    isFullGalleryModalOpen ||
    !!selectedEvent ||
    !!selectedService;

  useBodyScrollLock(anyOverlayOpen);

  const openPlanModal = useCallback(() => setIsPlanModalOpen(true), []);
  const closePlanModal = useCallback(() => setIsPlanModalOpen(false), []);

  const openOurStoryModal = useCallback(() => setIsOurStoryModalOpen(true), []);
  const closeOurStoryModal = useCallback(() => setIsOurStoryModalOpen(false), []);

  const openFullGalleryModal = useCallback(() => setIsFullGalleryModalOpen(true), []);
  const closeFullGalleryModal = useCallback(() => setIsFullGalleryModalOpen(false), []);

  const openEventDetail = useCallback((event: GalleryItem) => setSelectedEvent(event), []);
  const closeEventDetail = useCallback(() => setSelectedEvent(null), []);

  const openServiceDetail = useCallback((serviceOrId: ServiceItem | string) => {
    if (typeof serviceOrId === 'string') {
      const found = SERVICES_DATA.find((s) => s.id === serviceOrId);
      if (found) setSelectedService(found);
    } else {
      setSelectedService(serviceOrId);
    }
  }, []);
  const closeServiceDetail = useCallback(() => setSelectedService(null), []);

  const openDrawer = useCallback(() => setIsDrawerOpen(true), []);
  const closeDrawer = useCallback(() => setIsDrawerOpen(false), []);

  const handleEnquireFromCaseStudy = (event: GalleryItem) =>
    openWhatsApp(
      `Hello Shree Swami Samarth Events, I loved your "${event.title}" (${event.category}) setup and would like to enquire about a similar event.`
    );

  const handlePlanFromService = (serviceTitle: string) =>
    openWhatsApp(
      `Hello Shree Swami Samarth Events, I'm interested in your "${serviceTitle}" package. Please share details and availability.`
    );

  const value = useMemo(
    () => ({
      openPlanModal,
      closePlanModal,
      openOurStoryModal,
      closeOurStoryModal,
      openFullGalleryModal,
      closeFullGalleryModal,
      openEventDetail,
      closeEventDetail,
      openServiceDetail,
      closeServiceDetail,
      openDrawer,
      closeDrawer,
    }),
    [
      openPlanModal,
      closePlanModal,
      openOurStoryModal,
      closeOurStoryModal,
      openFullGalleryModal,
      closeFullGalleryModal,
      openEventDetail,
      closeEventDetail,
      openServiceDetail,
      closeServiceDetail,
      openDrawer,
      closeDrawer,
    ]
  );

  return (
    <ModalContext.Provider value={value}>
      {children}

      {/* Global Modals Mounted on Shell */}
      <MobileDrawer
        isOpen={isDrawerOpen}
        onClose={closeDrawer}
        onOpenPlanModal={openPlanModal}
        onSelectService={(id) => openServiceDetail(id)}
      />

      <PlanEventModal isOpen={isPlanModalOpen} onClose={closePlanModal} />
      <OurStoryModal
        isOpen={isOurStoryModalOpen}
        onClose={closeOurStoryModal}
        onPlanEvent={openPlanModal}
      />
      <FullGalleryModal
        isOpen={isFullGalleryModalOpen}
        onClose={closeFullGalleryModal}
        onSelectEvent={openEventDetail}
      />
      <EventDetailModal
        event={selectedEvent}
        onClose={closeEventDetail}
        onEnquire={handleEnquireFromCaseStudy}
      />
      <ServiceDetailModal
        service={selectedService}
        onClose={closeServiceDetail}
        onPlanEvent={handlePlanFromService}
      />
    </ModalContext.Provider>
  );
};

export const useModals = () => {
  const ctx = useContext(ModalContext);
  if (!ctx) throw new Error('useModals must be used within a ModalProvider');
  return ctx;
};
