# ESG Advocacy Multi-Page Website

## Goal
Turn the existing premium one-page experience into a complete website with dedicated pages for About, Solutions, Industries, Insights, and Contact, while retaining the current Forest & Porcelain “Editorial instrument” direction.

## What will change
- Introduce a shared site header, responsive navigation, consultation action, and footer used across every page.
- Update homepage navigation and calls-to-action to use proper page links instead of section anchors.
- Keep the homepage as the high-level brand and conversion experience, with concise previews linking into the deeper pages.
- Add dedicated pages:
  - **About** — positioning, purpose-driven economy, Fu-Tech model, vision, mission, and differentiators.
  - **Solutions** — all five solution disciplines and the complete capability catalogue in an easy-to-scan system.
  - **Industries** — all twelve sectors, sector-specific priorities, and the shared engagement approach.
  - **Insights** — ESG Intelligence knowledge hub with research, reports, perspectives, case studies, and thought leadership.
  - **Contact** — consultation invitation, engagement areas, direct email action, and clear next-step process.
- Give every page a distinct page title, description, social metadata, single H1, and clear conversion path.
- Preserve the uploaded logo, typography, color tokens, data-inspired visuals, subtle motion, and responsive behavior.

## Technical details
- Use TanStack Router route files for `/about`, `/solutions`, `/industries`, `/insights`, and `/contact`.
- Extract shared navigation/footer and reusable visual elements into focused components to keep page behavior consistent.
- Use typed router links for internal navigation and keep email as the contact mechanism; no backend or form storage will be added.
- Verify page links, mobile navigation, layouts, metadata, and key interactions across desktop and mobile.
