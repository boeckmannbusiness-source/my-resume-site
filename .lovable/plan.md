# Freelance Services — Section + Page

Showcase Julian's freelance offering with a teaser on the homepage and a dedicated page for details. Fully bilingual (EN/DE), matching the existing minimal-clean aesthetic.

## What gets built

### 1. Homepage teaser section (`src/components/Services.tsx`)
- Placed between **Skills** and **Education**
- Section label "Freelance" + headline + short intro
- Compact grid of the 5 service cards (icon, title, 1-line description)
- "Explore all services →" link to `/services`
- Anchor: `#services` — added to header nav

### 2. Dedicated page (`src/pages/Services.tsx`)
- Route `/services` (added in `App.tsx`)
- Header + Footer reused
- Hero block with headline & intro
- 5 detailed service cards, each with:
  1. **Google Ads Management** — hands-on campaign management for SMEs/e-commerce
  2. **Performance Audits** — deep-dive account & tracking audits
  3. **Agency Challenger / Second Opinion** — independent review of current agency setup
  4. **Fractional Head of Performance** — part-time strategic leadership
  5. **Google Ad Grants for NGOs** — pro-bono / discounted support for non-profits
- Each card: icon, title, longer description, bullet list of deliverables
- "Back to Home" link + CTA buttons anchoring to `/#contact` (reuses existing email/LinkedIn/Xing contact)

### 3. Navigation
- Add "Services" / "Leistungen" item to Header nav (desktop + mobile)
- Footer gets a link to `/services`

### 4. Translations
- Extend `LanguageContext.tsx` with all new strings under `services.*` keys (EN + DE)
- Includes nav label, section copy, 5 service titles, descriptions, bullets, CTAs

## Technical notes

- Icons via `lucide-react` (e.g., `Target`, `Search`, `Shield`, `Briefcase`, `Heart`)
- Cards use existing `Card` component + semantic tokens (`bg-card`, `text-foreground`, `border-border`, `text-accent`)
- No new dependencies, no backend (CTA reuses existing Contact section)
- Page uses same `min-h-screen bg-background` shell as `Impressum.tsx`
- Smooth scroll handled by existing anchor behavior; cross-page anchors use `/#contact`

## Files

Created:
- `src/components/Services.tsx`
- `src/pages/Services.tsx`

Edited:
- `src/App.tsx` (add `/services` route)
- `src/pages/Index.tsx` (mount `<Services />`)
- `src/components/Header.tsx` (nav item)
- `src/components/Footer.tsx` (footer link)
- `src/contexts/LanguageContext.tsx` (EN + DE strings)
