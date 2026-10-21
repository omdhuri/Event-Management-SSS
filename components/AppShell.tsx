"use client";

import React, { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { ModalProvider } from '../context/ModalContext';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { FloatingActions } from './FloatingActions';
import { useScrollReveal } from '../hooks/useScrollReveal';

const InnerShell: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const pathname = usePathname();

  // Re-observe .reveal elements whenever route changes
  useScrollReveal([pathname]);

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [pathname]);

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#221F1D] flex flex-col font-sans-body selection:bg-[#7A1B28] selection:text-white">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[60] focus:bg-[#7A1B28] focus:text-white focus:px-4 focus:py-2 focus:rounded-full"
      >
        Skip to content
      </a>

      <Navbar />

      <main id="main-content" className="flex-1">
        {children}
      </main>

      <Footer />

      <FloatingActions />
    </div>
  );
};

export const AppShell: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <ModalProvider>
      <InnerShell>{children}</InnerShell>
    </ModalProvider>
  );
};
