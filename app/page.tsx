"use client";

import { useRouter } from 'next/navigation';
import { HeroSection } from '../components/HeroSection';
import { ServicesSection } from '../components/ServicesSection';
import { OurWorkSection } from '../components/OurWorkSection';
import { AboutSection } from '../components/AboutSection';
import { TestimonialsSection } from '../components/TestimonialsSection';
import { ContactSection } from '../components/ContactSection';
import { useModals } from '../context/ModalContext';

export default function HomePage() {
  const router = useRouter();
  const {
    openPlanModal,
    openOurStoryModal,
    openEventDetail,
    openServiceDetail,
  } = useModals();

  const handleScrollDown = () => {
    const servicesEl = document.getElementById('services');
    if (servicesEl) {
      servicesEl.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollBy({ top: window.innerHeight * 0.85, behavior: 'smooth' });
    }
  };

  return (
    <>
      <HeroSection
        onOpenPlanModal={openPlanModal}
        onExploreWork={() => router.push('/work')}
        onScrollToServices={handleScrollDown}
      />
      <ServicesSection
        onSelectService={(service) => openServiceDetail(service)}
        onOpenPlanModal={() => router.push('/services')}
      />
      <OurWorkSection
        onSelectEvent={(event) => openEventDetail(event)}
        onOpenFullGallery={() => router.push('/work')}
      />
      <AboutSection onOpenOurStory={openOurStoryModal} />
      <TestimonialsSection />
      <ContactSection onOpenPlanModal={openPlanModal} />
    </>
  );
}
