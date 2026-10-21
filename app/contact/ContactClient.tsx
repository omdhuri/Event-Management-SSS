"use client";

import React from 'react';
import { PageHeader } from '../../components/PageHeader';
import { ContactSection } from '../../components/ContactSection';
import { useModals } from '../../context/ModalContext';

export const ContactClient: React.FC = () => {
  const { openPlanModal } = useModals();

  return (
    <>
      <PageHeader
        badge="Connect With Us"
        title="Let's Plan Your"
        italicWord="Celebration."
        description="Have an upcoming wedding, birthday, baby shower, or corporate event? Reach out to us today for personalized themes, pricing, and availability."
        breadcrumb="Contact"
      />

      <ContactSection onOpenPlanModal={openPlanModal} />
    </>
  );
};
