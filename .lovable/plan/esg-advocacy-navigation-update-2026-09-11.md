# ESG Advocacy Navigation Update

## Goal
Preserve the approved website and make only the requested navigation, routing, About/Team, and Contact updates.

## What will change
- Remove the Home link; the existing clickable ESG Advocacy logo remains the home link.
- Replace About and Team navigation with one **About & Team** link to `/about`.
- Append the existing Team sections beneath the existing About content without redesigning either experience.
- Add a premium **Industries** dropdown containing separate links to the existing Industries and Insights pages.
- Keep Solutions and Portfolio as unchanged top-level pages.
- Rename Contact to **Contact Us** and add the requested simple contact form while preserving the page’s existing visual language.
- Keep the old `/team` URL working by redirecting it to `/about`.

## Technical details
- Reuse the existing shared header, footer, route components, data, button, and styling tokens.
- Use hover/focus behavior for the desktop dropdown and tap-to-expand behavior in the mobile menu.
- Keep form submission email-based so no database or backend is introduced.
- Verify desktop and mobile navigation, dropdown behavior, combined page content, form fields, route redirect, and current build health.
