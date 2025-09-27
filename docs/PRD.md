# Project Ananta Website PRD

## 1. Product Summary
- **Vision:** Present Global One Consulting's Project Ananta as a modern, luxurious brand experience with cinematic storytelling, while capturing qualified leads through a streamlined contact flow.
- **Problem:** The legacy static site is visually dated, animation-heavy but inconsistent, and disconnected from the Express backend forms. Content is duplicated and contains encoding issues.
- **Solution:** Consolidate on the Vite + GSAP experience with a refined narrative, guided entrance sequence, performant motion system, and reliable contact data pipeline.

## 2. Target Audiences
- **Primary:** High net-worth individuals & institutional buyers evaluating premium service apartments.
- **Secondary:** Channel partners, brokers, and investors seeking project credentials and assets.
- **Tertiary:** Internal sales & marketing teams needing dashboards/exportable lead data.

## 3. Experience Principles
1. **Immersive Luxury:** Blend cinematic motion, gold-on-dark palette, and responsive typography.
2. **Purposeful Motion:** Every animation communicates state (entry reveal, thematic transitions, scroll cues).
3. **Clarity & Trust:** Highlight credentials, RERA approval, amenities, and investment benefits.
4. **Performance First:** Maintain 60fps across desktop/tablet; gracefully degrade for low-power devices.
5. **Accessible Interaction:** Custom cursor and animations must remain keyboard-friendly and respect reduced motion settings.

## 4. Scope & Feature Breakdown
### 4.1 Entry Experience
- Two-stage dual-logo mask (Global One -> Ananta) with click/scroll unlock.
- Custom cursor active during mask; fallback for touch/reduced motion.
- Smooth transition into main navigation and hero.

### 4.2 Landing Page Sections
1. **Hero:** Video background with day/dusk/night themes, parallax overlays, CTA.
2. **Stats:** Counters & infographic-style highlights tied to scroll.
3. **About:** Storytelling reveal with iconography and copy from legacy doc.
4. **Amenities:** Interactive horizontal/vertical carousel with GSAP transitions.
5. **Location:** Leaflet map, transport highlights, downloadable brochure.
6. **Testimonials / Investors:** Marquee or slider with quotes.
7. **Our Group:** Showcase dual-brand narrative; highlight key projects.
8. **Contact:** Form with validation, success/fail states, and lead magnet downloads.
9. **Footer:** Navigation shortcuts, social proof, compliance info.

### 4.3 Supporting Components
- Sticky navigation with theme-sensitive styling.
- Theme transition HUD (e.g., dawn/day/dusk/night indicator).
- Download center (catalog, investment plan, brochures) tied to contact captures.
- Optional chatbot: Evaluate integration vs. removal; if retained, modernize UI and messaging.

## 5. Content Strategy
- Migrate relevant copy from legacy `index.html`, PDF, and verification scripts.
- Standardize tone (luxury, confident, informative) and remove placeholder text.
- Replace corrupted characters; ensure assets use UTF-8 and SVGs compress cleanly.
- Prepare content matrix covering headline, subcopy, CTA, supporting media per section.

## 6. Technical Approach
### 6.1 Frontend
- Stack: Vite, ES Modules, Tailwind, GSAP (ScrollTrigger, custom timelines), Lenis smooth scroll.
- Remove legacy root static files (`index.html`, `script.js`, `chatbot.js`) after migration; serve built assets from `web/dist`.
- Modular architecture (`components/`, `sections/`, `animations/`, `utils/`) retained with improved documentation and tests.
- Ensure responsive breakpoints (mobile, tablet, desktop) and hydration-safe behavior.

### 6.2 Backend
- Express server continues handling `/api` routes; align static middleware to Vite build output.
- Update contact schema to allow freeform inquiry while capturing intent (add `interestType`, `messageBody`).
- Implement rate limiting + spam protection (Honey Pot, reCAPTCHA v3 optional).
- Add admin routes to Express with proper session middleware, secure cookies, and CSV export leveraging `json2csv`.

### 6.3 Infrastructure & Deployment
- Target deployment on Vercel/Netlify for frontend; Render/Heroku/Atlas for backend + MongoDB Atlas.
- Set up environment variables for admin credentials, Mongo URI, optional email integrations (SendGrid).
- CI pipeline (GitHub Actions) to run lint/test/build before deploy.

## 7. Integrations & Data Flow
1. **Contact submissions:** `POST /api/contact` -> Mongo collection -> optional email notification -> admin dashboard.
2. **Downloads:** Gate PDFs via API or signed URLs; log interaction events.
3. **Analytics:** Integrate GA4 or Plausible for entry mask completion, section dwell time, conversion funnel.
4. **Third-party embeds:** Leaflet map, possible video hosting (MP4 in CDN, fallback static).

## 8. Accessibility & Compliance
- Conform to WCAG 2.1 AA: focus states, color contrast, alt text, aria labels, keyboard operability.
- Provide reduced motion mode (respect `prefers-reduced-motion` in GSAP timelines).
- Localize static copy for potential Hindi support (future phase); ensure fonts support glyphs.
- Cookie/privacy notice if analytics or tracking pixels are used.

## 9. Performance Requirements
- LCP < 2.5s on 4G mid-tier devices.
- Bundle splitting and lazy loading for heavy assets (videos, map).
- Use GSAP matchMedia for responsive timelines; pause animations off-screen.
- Preload critical fonts, compress SVG/video, leverage caching headers.

## 10. SEO Guidelines
- Semantic HTML structure with heading hierarchy.
- Meta tags per section, Open Graph, structured data (RealEstateProject schema if applicable).
- Friendly URLs (hash anchors for sections), sitemap, robots.
- Server-rendered fallback for primary content (consider SSR or pre-render for marketing pages).

## 11. Risks & Mitigations
| Risk | Impact | Mitigation |
|------|--------|-----------|
| Animation overload harms performance | High | Performance budget, profiling, fallback states |
| Contact schema change breaks admin tools | Medium | Versioned API, migration script, tests |
| Asset licensing for videos/fonts | Medium | Confirm usage rights, host internally |
| Dual-brand mask frustrates repeat visitors | Medium | Offer skip/remember choice via localStorage |
| Mongo availability in production | High | Use managed Atlas tier, add retry logic |

## 12. Roadmap & Milestones
1. **Week 1:** Discovery refresh, finalize PRD & brand narrative, asset audit.
2. **Week 2:** Design system updates, animation storyboard, content rewrite.
3. **Week 3:** Implement entry mask, navigation, hero, theme system refinements.
4. **Week 4:** Build remaining sections, contact form integration, admin dashboard.
5. **Week 5:** QA, accessibility & performance tuning, analytics wiring, deployment prep.

## 13. Detailed TODO Checklist
### General
- [ ] Remove legacy root static site files after migration confirmation.
- [ ] Normalize repository structure; root serves Express API + Vite build only.
- [ ] Audit and replace corrupted characters across assets and copy.

### UX & Content
- [ ] Draft updated copy deck per section with brand-approved tone.
- [ ] Select/produce hero and amenities media (video loops, imagery).
- [ ] Define downloadable assets (catalog, investment plan, brochures) and gating logic.
- [ ] Prepare style guide: typography scale, color tokens, component states.

### Frontend Implementation
- [ ] Refine dual-brand entry mask UX (skip logic, reduced motion fallback).
- [ ] Rebuild navigation component with clean SVG assets and accessible menus.
- [ ] Implement hero with video manager integration and theme transitions.
- [ ] Port stats/about/amenities sections with modern layouts and scroll presets.
- [ ] Build location section with Leaflet map and highlight cards.
- [ ] Implement testimonials/our group modules with data-driven configs.
- [ ] Rebuild contact form with inline validation and success animations.
- [ ] Decide on chatbot future; either redesign or sunset with graceful removal.

### Animations & Interaction
- [ ] Audit existing GSAP timelines; convert to preset-driven architecture where helpful.
- [ ] Add theme transition triggers connected to scroll progress and time of day.
- [ ] Validate Lenis + ScrollTrigger sync, add pause on reduced motion.
- [ ] Instrument performance profiling (GSAP devtools or custom timing logs).

### Backend & Data
- [ ] Update `ContactSubmission` schema to accept freeform message + interest type.
- [ ] Align frontend fetch to `/api/contact` and handle response codes properly.
- [ ] Implement server-side validation, rate limiting, and spam protection.
- [ ] Wire admin router with session store, login, dashboard, CSV export.
- [ ] Optional: integrate transactional email for new submissions.

### QA & Launch
- [ ] Write Vitest tests for critical utilities (theme transitions, animation controller config).
- [ ] Add end-to-end smoke tests (Playwright/Cypress) for entry mask and form.
- [ ] Create performance checklist (Lighthouse, WebPageTest) with thresholds.
- [ ] Verify accessibility via axe/lighthouse and manual keyboard testing.
- [ ] Prepare deployment pipeline and environment configuration documentation.

## 14. Open Questions
- Should repeat visitors bypass the full entry mask automatically?
- Is chatbot a requirement or should we channel users to human-assisted contact?
- Are there CRM integrations (HubSpot, Zoho) expected for leads?
- Any multilingual requirements beyond English in the current phase?
- Preferred deployment split (single full-stack deployment vs. separate frontend/backend)?

---
**Owner:** Manak Shankar (Global One Consulting)  
**Maintainers:** Web experience team & marketing stakeholders
