# Production Launch Plan: Client Image Integration, SEO & QA

## Objective
Seamlessly transition from placeholder assets to original client event imagery, optimize image delivery for 95+ Lighthouse performance (WebP, zero CLS, sub-second LCP), personalize client data, implement local SEO for Pune, and perform full QA for launch readiness.

---

## Phase 1: Image Ingestion & Automated WebP Pipeline
- [ ] **Folder Structure Preparation**: User downloads and organizes raw event photos into structured subdirectories (`raw-images/hero/`, `raw-images/services/`, `raw-images/gallery/`, `raw-images/about/`, `raw-images/testimonials/`).
- [ ] **Automated Conversion Script**:
  - Run a Node.js processing script (using `sharp`) to ingest raw camera photos (5MB–15MB JPEGs/PNGs).
  - Batch resize images:
    - **Hero Slides**: Max 1920px width, WebP quality 82% (~90–130KB).
    - **Service & Gallery Cards**: Max 1000px width, WebP quality 80% (~50–80KB).
    - **Avatars & Thumbnails**: Max 400px width, WebP quality 80% (~20–40KB).
  - Apply clean, Pune SEO-friendly filenames (e.g., `wedding-mandap-decor-pune.webp`).
  - Output optimized files directly to `public/images/`.

---

## Phase 2: Data & Component Integration
- [ ] **Update Data Layer (`data/eventsData.ts`)**:
  - Map new optimized WebP image paths to `HERO_SLIDES`, `SERVICES_DATA`, `GALLERY_DATA`, and `TESTIMONIALS_DATA`.
  - Update event titles, tags, client names, deliverables, and package details with authentic client details.
- [ ] **Component Performance & CLS Hardening**:
  - **Hero Carousel (`HeroSection.tsx`)**:
    - First hero slide set to eager loading (`loading="eager"`, `fetchpriority="high"`), subsequent slides lazy-loaded on demand.
  - **Gallery & Services (`OurWorkSection.tsx`, `ServicesSection.tsx`)**:
    - Ensure all image containers have explicit aspect ratios (e.g., `aspect-[16/10]`, `aspect-square`) with skeleton background color (`bg-canvas-soft`) to eliminate Cumulative Layout Shift (CLS).
    - Ensure lazy-loading (`loading="lazy"`, `decoding="async"`).
  - **Modals (`EventDetailModal.tsx`, `FullGalleryModal.tsx`, `ServiceDetailModal.tsx`, `OurStoryModal.tsx`)**:
    - Smooth image loading states with blur placeholders or backdrop transitions.

---

## Phase 3: SEO, Social Cards & Personalization
- [ ] **Local SEO Meta Tags (`app/layout.tsx`)**:
  - Targeted title & meta descriptions for Pune event planning.
  - Social OpenGraph (`og:image`, `og:title`, `og:description`) and Twitter card tags using a hero showcase graphic.
- [ ] **Structured Data (JSON-LD)**:
  - Add Schema.org `LocalBusiness` / `EventPlanner` structured data snippet (phone, address, operating hours, Pune service areas, review ratings).
- [ ] **Search Engine Discovery**:
  - Add `app/sitemap.ts` and `app/robots.ts`.
- [ ] **Accessibility & Alt Text**:
  - Comprehensive descriptive alt text on all client event images for screen readers and Google Image search ranking.

---

## Phase 4: Quality Assurance & Performance Audit
- [ ] **Static Code Verification**:
  - Run TypeScript type checks (`npx tsc --noEmit`).
  - Validate production bundle (`npm run build`).
- [ ] **Cross-Device UX Check**:
  - Verify mobile drawer, modal scrolling, touch swipe carousel on mobile breakpoints (375px, 412px, 768px, 1024px, 1440px).
- [ ] **Lighthouse Performance Audit**:
  - Target metrics:
    - **LCP (Largest Contentful Paint)**: < 1.8s
    - **CLS (Cumulative Layout Shift)**: 0.00
    - **FCP (First Contentful Paint)**: < 1.0s
    - **Overall Score**: 95+ across Performance, Accessibility, Best Practices, and SEO.

---

## Status Tracker
| Milestone | Status | Notes |
| :--- | :--- | :--- |
| Plan & Architecture | **Done** | Documented in `plan.md` & `AGENTS.md` |
| Image Collection | **In Progress** | Awaiting user's structured `raw-images/` folder |
| WebP Batch Conversion | Pending | Automated script ready to run upon image receipt |
| Data & Component Wiring | Pending | After conversion |
| SEO & Schema Markup | Pending | LocalBusiness JSON-LD & OpenGraph |
| Build & Lighthouse QA | Pending | Final step before launch |
