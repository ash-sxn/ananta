# Project Ananta – Next Steps Playbook

## 1. Decision Recommendations
| Topic | Recommendation | Notes |
|-------|----------------|-------|
| Entry mask for repeat visitors | Remember completion in localStorage and auto-skip on subsequent visits, while keeping a "Replay intro" control in nav/footer. | Keeps first-time wow factor without frustrating returning investors; respects reduced-motion preference by defaulting to skip. |
| Chatbot | Sunset for MVP; replace with prominent contact CTA and optional FAQ accordion. | Legacy content is outdated and encoding damaged. Reintroduce only if conversational AI is aligned with brand voice and compliance. |
| CRM integration | Export CSV from admin dashboard initially; plan Zapier/Make webhook to Zoho CRM in Phase 2. | Keeps scope focused while leaving hooks (webhooks, API tokens) ready. |
| Multilingual support | Phase 1 in English; prepare copy structure for future i18n (data files, lang attributes). | Identify priority languages (Hindi) during content rewrite to estimate localization work. |
| Deployment model | Host Vite build on Vercel (static) and Express API on Render/Heroku with MongoDB Atlas. | Separates concerns, allows independent scaling, keeps build pipeline simple. |

## 2. Sprint-Level Roadmap
| Sprint | Focus | Key Deliverables |
|--------|-------|------------------|
| Sprint 0 (Prep) | Asset audit & copy alignment | Finalize content inventory, confirm media licensing, gather brand guidelines. |
| Sprint 1 | Entry + Core Framework | Refined dual-brand mask, navigation, theme system cleanup, performance baselines. |
| Sprint 2 | Hero & Story Sections | Hero video integration, stats/about sections modernized, typography tokens locked. |
| Sprint 3 | Amenities, Location, Testimonials | Carousel rebuild, map integration, testimonials marquee, Our Group module. |
| Sprint 4 | Contact & Admin | Contact form revamp, schema update, admin dashboard/session hardening, download gating. |
| Sprint 5 | Polish & Launch | Accessibility/performance QA, analytics setup, deployment pipeline, handoff docs. |

## 3. Immediate Todo Breakdown (Sprint 0)
### 3.1 Research & Content
- [ ] Extract clean copy from legacy sources (index.html, PDFs) into shared document.
- [ ] Confirm final messaging pillars with stakeholders (luxury, investment, trust).
- [ ] Catalogue required assets: hero video, amenities imagery, iconography, logos (SVG).
- [ ] Identify any missing collateral (investment plan PDF, brochure updates).

### 3.2 Technical Setup
- [ ] Configure repo linting/formatting baseline (ESLint + Prettier + Stylelint pending).
- [ ] Plan build output: ensure Vite uild.outDir -> ../dist and Express serves same.
- [ ] Draft data migration for contact schema changes (script to transform existing entries).
- [ ] Define environment variable template (.env.example) for backend + frontend.

### 3.3 Design Prep
- [ ] Moodboard references for motion & typography (GSAP inspirations, luxury brands).
- [ ] Wireframe updated section layout (lo-fi Figma or paper sketch).
- [ ] Animation storyboard for entry mask and hero beats (frame timing, easing choices).

## 4. Backlog (Post Sprint 0)
- [ ] Implement Lenis/GSAP reduced-motion handling.
- [ ] Replace corrupted characters throughout repo (lint script/regex sweep).
- [ ] Build global download manager for gated assets.
- [ ] Implement analytics hooks (entry completion, form submission, video engagement).
- [ ] Add Playwright smoke tests for entry -> contact flow.

## 5. Dependencies & Follow-ups
- Await stakeholder approval on decision table above.
- Confirm hosting budget/accounts for Vercel, Render, MongoDB Atlas.
- Secure final brand assets (logo variants, color palette) from design team.

---
**Last updated:** 2025-09-20
