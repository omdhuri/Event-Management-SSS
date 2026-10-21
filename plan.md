# Production Launch Plan: Client Image Integration, SEO & QA

## Objective
Seamlessly transition from placeholder assets to original client event imagery, optimize image delivery for 95+ Lighthouse performance (WebP, zero CLS, sub-second LCP), personalize client data, implement local SEO for Pune, and perform full QA for launch readiness.

---

## Phase 1: Image Ingestion & Automated WebP Pipeline
- [x] **Folder Structure Ingestion**: Ingested all 76 client raw event photos from `raw images/` (`hero/`, `birthday/`, `baby shower/`, `welcome baby/`, `haldi & ring ceremony/`).
- [x] **Automated Conversion Pipeline**:
  - Ran automated pipeline (`scripts/process-images.mjs`) using `sharp`.
  - Batch-resized and converted all 76 images + 3 core branding photos to high-performance `.webp` (~40KB–140KB each).
  - Saved image manifest in `data/imagesManifest.json`.
  - Stored optimized assets in `public/images/`.

---

## Phase 2: Data & Component Integration
- [x] **Update Data Layer (`data/eventsData.ts`)**:
  - Mapped real client WebP photos to `HERO_SLIDES` (all 4 carousel slides).
  - Enriched `SERVICES_DATA` with client photos for Birthdays, Baby Showers, Weddings & Engagements, Haldi & Festive, and Welcome Baby & Naming Ceremonies.
  - Expanded `GALLERY_DATA` with rich authentic client projects containing multi-photo portfolios.
- [x] **Component Performance & CLS Hardening**:
  - **Hero Carousel (`HeroSection.tsx`)**: First slide marked eager with `fetchPriority="high"`, subsequent slides lazy-loaded with async decoding.
  - **Gallery & Modals (`OurWorkSection.tsx`, `FullGalleryModal.tsx`, `EventDetailModal.tsx`, `ServiceDetailModal.tsx`)**: All cards and thumbnails have explicit aspect ratios and `loading="lazy"`.
  - **About & Contact Sections**: Converted all background and centerpiece assets to WebP.

---

## Phase 3: SEO, Social Cards & Personalization
- [x] **Local SEO & Meta Tags (`app/layout.tsx`)**:
  - Targeted Kalyan & Pune event management keywords.
  - Added `metadataBase`, OpenGraph tags, and Twitter Cards with large image preview.
- [x] **Structured Data (JSON-LD)**:
  - Injected Schema.org `LocalBusiness` structured data (business hours, geo coordinates, contact number, Instagram profile).
- [x] **Search Engine Discovery**:
  - Created dynamic XML sitemap (`app/sitemap.ts`).
  - Created search robot directives (`app/robots.ts`).

---

## Phase 4: Quality Assurance & Performance Audit
- [x] **Static Code Verification**:
  - TypeScript type check (`npx tsc --noEmit`): **Passed (0 errors)**.
  - Production build (`npm run build`): **Compiled successfully (0 errors, 0 warnings)**.
- [ ] **Cross-Device UX Check**:
  - Mobile drawer, modals, touch carousel on live browser.
- [ ] **Lighthouse Performance Audit**:
  - Final audit check.

---

## Status Tracker
| Milestone | Status | Notes |
| :--- | :--- | :--- |
| Plan & Architecture | **Done** | Documented in `plan.md` & `AGENTS.md` |
| Image Collection | **Done** | Received 76 client photos across 5 folders |
| WebP Batch Conversion | **Done** | 100% converted to WebP via `sharp` pipeline |
| Data & Component Wiring | **Done** | Centralized in `eventsData.ts`, modals & carousel updated |
| SEO & Schema Markup | **Done** | JSON-LD, OpenGraph, sitemap.xml, robots.txt active |
| Build & Verification | **Done** | `tsc --noEmit` & `npm run build` passed with zero errors |
| Browser Visual QA | Next | Verify UI rendering & modal navigation |

