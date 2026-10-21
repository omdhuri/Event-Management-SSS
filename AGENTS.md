<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# Project Conventions & Agent Guidelines

## Shree Swami Samarth Events — Luxury Event Management & Decor (Pune)

### Architecture & Tech Stack
- **Framework**: Next.js 15 (App Router, React 19, TypeScript).
- **Styling**: Tailwind CSS v4, custom luxe design tokens (Burgundy `#6B1D2F`, Gold/Copper `#C29B38`, Canvas `#FAF7F2`, Midnight `#1A1A1A`).
- **Typography**: Google Fonts loaded via `next/font/google` (`Cormorant_Garamond`, `Playfair_Display`, `Plus_Jakarta_Sans`, `Alex_Brush`).
- **Icons**: `lucide-react`.

### Image & Media Guidelines (Critical for Lighthouse 95+)
1. **Never commit raw camera/phone photos (5MB+) into `public/images/`**:
   - Always batch-convert raw assets to `.webp` with smart dimensions:
     - Hero carousel: max 1920px width, 82% quality (~90–130KB).
     - Gallery & Service cards: max 1000px width, 80% quality (~50–80KB).
     - Thumbnails & Avatars: max 400px width, 80% quality (~20–40KB).
2. **Hero LCP Rules**:
   - The first slide of the Hero section must have `loading="eager"` and `fetchpriority="high"`.
   - Never apply `loading="lazy"` to the above-the-fold Hero image.
3. **CLS Prevention**:
   - All image wrappers must have explicit aspect ratios (`aspect-[16/10]`, `aspect-[4/3]`, `aspect-square`) with a placeholder background color (`bg-canvas-soft`) so layout does not shift during loading.
4. **SEO & File Naming**:
   - Use descriptive, Pune-local keyword filenames (e.g., `wedding-mandap-decor-pune.webp`, `haldi-flower-canopy-baner.webp`).
   - Every `img` element must include descriptive `alt` text.

### Component & Data Architecture
- Data is centralized in `data/eventsData.ts` and `data/contact.ts`.
- Changes to services, gallery items, or testimonials must update `data/eventsData.ts`.
- Modals are managed centrally via state and rendered with clean overlay transitions.

### Verification Routine
Before declaring a milestone complete:
1. `npx tsc --noEmit` must pass with zero errors.
2. `npm run build` must succeed without warnings.
3. Maintain and update `plan.md` status table as progress is made.

