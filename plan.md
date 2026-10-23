# Production Launch Plan: Client Image Integration, SEO & QA

## Objective
Seamlessly transition from placeholder assets to original client event imagery, optimize image delivery for 95+ Lighthouse performance (WebP, zero CLS, sub-second LCP), personalize client data, implement local SEO for Kalyan, Thane & Mumbai, and perform full QA for launch readiness.

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
  - Targeted Kalyan, Dombivli, Thane, Mumbai, Virar & Vasai event management keywords.
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
- [x] **Lighthouse Performance Hardening**:
  - **Google Maps Iframe Deferral**: Wrapped in `IntersectionObserver` with 300px threshold; saves ~450KB of external blocking JS and 15+ network requests on initial page load.
  - **Font Payload Reduction**: Trimmed unused weights from Cormorant Garamond, Playfair Display, and Plus Jakarta Sans; added `preload: false` to decorative Alex Brush script.
  - **Hero Thumbnail Payload**: Converted 3 rail thumbnails from full 1600px hero images (230KB) to 160x140 WebP thumbnails (15KB total).
  - **Avatars & Third-Party Cleanup**: Replaced external Pexels image requests with luxury local monograms; zero external DNS/TLS bottlenecks.
  - **Layout & Viewport**: Exported standard Next.js 15 `viewport` metadata with `themeColor`.
- [x] **Cross-Device UX Check**:
  - Mobile drawer, modals, touch carousel on live browser.

---

## Status Tracker
| Milestone | Status | Notes |
| :--- | :--- | :--- |
| Plan & Architecture | **Done** | Documented in `plan.md` & `AGENTS.md` |
| Image Collection | **Done** | Received 76 client photos across 5 folders |
| WebP Batch Conversion | **Done** | 100% converted to WebP via `sharp` pipeline |
| Data & Component Wiring | **Done** | Centralized in `eventsData.ts`, modals & carousel updated |
| SEO & Schema Markup | **Done** | JSON-LD, OpenGraph, sitemap.xml, robots.txt active |
| Performance & Lighthouse | **Done** | Maps deferred, fonts streamlined, thumbs optimized |
| Build & Verification | **Done** | `tsc --noEmit` & `npm run build` passed with zero errors |
| Complete Price & Quote Removal | **Done** | Stripped all startingPrice, currency symbols, and quote references across all pages & modals |
| Birthday Services Enhancement | **Done** | Added Magic Show, Panda & Mickey Mouse mascots, and Fog & Pyro entries to Birthday descriptions, deliverables & planning modal |
| Google Reviews Integration | **Done** | Connected official Google Business listing (5.0 stars, 18 reviews), genuine reviews from Shashwat Tiwari, 314 Vishal Kolekar, Jagathesvaran Thanabal, Alisha Nikalji, Yash Shukla & Koli Shivam; top 3 default view with carousel slider; action buttons: "Review Us on Google" & "View Us on Google" |
| Corporate Images Pipeline & Integration | **Done** | Processed 7 authentic raw corporate photos into public/images/corporate/, updated SERVICES_DATA & GALLERY_DATA corporate projects with zero errors |
| Image Orientation Adjustments | **Done** | Rotated `baby-shower-decor-07.webp`, `baby-shower-decor-06.webp`, and `birthday-decor-06.webp` anti-clockwise by 90 degrees to make them perfectly upright; integrated rotation override into pipeline |
| Hero Carousel Slide Expansion | **Done** | Upgraded Hero Carousel with authentic HD assets: replaced slides 2, 3, 4 from `New-Hero` and added Slide 5 from `baby-shower-decor-03` with dedicated thumbnails and full thumbnail rail navigation |
| Hero Slides Sequence Rearrangement | **Done** | Reordered hero carousel slides to exact requested sequence: 1. Hero 3 (Birthdays) → 2. Hero 4 (Baby Showers) → 3. Hero 1 (Weddings) → 4. Hero 5 (Jhoola Setup) → 5. Hero 2 (Divine Heritage) |


