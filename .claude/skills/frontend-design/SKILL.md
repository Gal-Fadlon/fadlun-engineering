---
name: frontend-design
description: Design taste and system rules for building premium-looking landing pages. Apply whenever generating, refactoring, or reviewing UI in this project — covers typography, spacing, color, motion, and component patterns.
---

# Frontend Design Skill

Apply these rules whenever building or editing UI. Defaults exist so we never ship generic AI-flavored layouts.

## Anti-patterns — never do these

- Random hex colors. Always use the tokens below (or CSS vars derived from them).
- Random font sizes. Use the type scale.
- Random spacing values. Use the 8px grid (Tailwind's default scale already aligns).
- Centered single-column hero with a giant emoji. Generic.
- Three feature cards with identical icons in primary color. Generic.
- Gradient text on the headline. Almost always reads cheap.
- "AI-shaped" purple/blue gradient backgrounds. Use restrained color.
- Inline animation that fires on every render. Animate on enter/scroll only.

## Typography

Use one display font (geometric sans or modern serif) + one body font. Default to the Geist family already wired up by Next.js.

Type scale (rem):

| Token       | Size      | Use                                          |
| ----------- | --------- | -------------------------------------------- |
| `text-xs`   | 0.75      | Captions, badges                             |
| `text-sm`   | 0.875     | Secondary copy, footer                       |
| `text-base` | 1         | Body                                         |
| `text-lg`   | 1.125     | Lead paragraph                               |
| `text-xl`   | 1.25      | Sub-section heading                          |
| `text-2xl`  | 1.5       | H3                                           |
| `text-3xl`  | 1.875     | H2 on mobile                                 |
| `text-4xl`  | 2.25      | H2 desktop                                   |
| `text-5xl`  | 3         | H1 mobile                                    |
| `text-6xl`  | 3.75      | H1 desktop                                   |
| `text-7xl`  | 4.5       | Hero display                                 |

Rules:

- Headings: `font-medium` or `font-semibold` — never `font-bold` for display (looks heavy).
- Body: `font-normal`, `text-base`, `leading-relaxed`.
- Line length: cap body at `max-w-prose` (~65ch). Never edge-to-edge body text.
- Tracking: tighten display headings with `tracking-tight`. Body stays default.

## Spacing — 8px grid

Use Tailwind's default spacing scale only. Section vertical rhythm:

- Section padding: `py-24 md:py-32` (small `py-16` only for compact sections).
- Container: `max-w-6xl mx-auto px-6 md:px-8`.
- Gap between stacked elements inside a section: `space-y-6` for prose, `gap-8` for grids.

## Color tokens

Define these as CSS variables in `globals.css` so components can reference them semantically:

```css
:root {
  --background: #fafaf9;       /* warm off-white */
  --foreground: #0a0a0a;       /* near-black */
  --muted: #71717a;            /* zinc-500 */
  --muted-foreground: #52525b; /* zinc-600 */
  --border: #e4e4e7;           /* zinc-200 */
  --accent: #18181b;           /* zinc-900 — primary CTA */
  --accent-foreground: #fafafa;
  --subtle: #f4f4f5;           /* zinc-100 — alt section bg */
}

.dark {
  --background: #0a0a0a;
  --foreground: #fafafa;
  --muted: #a1a1aa;
  --muted-foreground: #d4d4d8;
  --border: #27272a;
  --accent: #fafafa;
  --accent-foreground: #0a0a0a;
  --subtle: #18181b;
}
```

Rules:

- Backgrounds: use `--background` and `--subtle` for alternating sections.
- Text: `--foreground` for primary, `--muted-foreground` for secondary, `--muted` for tertiary.
- One accent color max. No rainbow palettes.
- Borders: `--border` always — never raw `border-gray-200` etc.

## Component patterns

### Buttons

- Primary: `bg-foreground text-background` with `rounded-full px-6 py-3 text-sm font-medium`.
- Secondary: `border border-border bg-transparent` same shape.
- Hover: subtle `hover:opacity-90` or `hover:bg-foreground/90`. No drop shadows on hover.
- Focus: `focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground`.

### Cards

- `rounded-2xl border border-border bg-background p-8`.
- No box-shadow by default. Optional `hover:border-foreground/20` for interactivity.
- Icons inside cards: 24px, stroke 1.5, in `--muted-foreground`.

### Navigation

- Sticky `sticky top-0 z-50 backdrop-blur bg-background/80 border-b border-border`.
- Height `h-16`. Logo left, links center or right, CTA far right.

### Section heading block

```tsx
<div className="max-w-2xl">
  <p className="text-sm font-medium text-muted-foreground uppercase tracking-wide">Eyebrow</p>
  <h2 className="mt-3 text-4xl font-medium tracking-tight">Headline that says one clear thing.</h2>
  <p className="mt-4 text-lg text-muted-foreground leading-relaxed">Supporting sentence with one concrete benefit.</p>
</div>
```

## Motion (Framer Motion)

Default to subtle, fast, intentional.

- Page/section entrance: fade + 12px y-translate, `duration: 0.5`, `ease: [0.22, 1, 0.36, 1]`.
- Stagger children: `staggerChildren: 0.06`.
- Hover micro-interactions: `whileHover={{ y: -2 }}` with `transition={{ duration: 0.2 }}`.
- Scroll reveals: `whileInView` with `viewport={{ once: true, amount: 0.3 }}`.
- Never animate opacity from 0 to 1 with `duration > 0.8`. Feels sluggish.
- Never animate on every state change. Reserve motion for enter, hover, tap.

Reusable variant:

```ts
export const fadeUp = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};
```

## Layout & responsiveness

- Mobile-first. Always design the `sm:` (≥640) view, then layer `md:` (≥768) and `lg:` (≥1024) breakpoints.
- Grids: `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8`.
- Never have content wider than `max-w-6xl` for marketing pages. Hero headline can cap at `max-w-4xl`.
- Images: always use `next/image` with explicit width/height. Decorative images `alt=""`.

## Accessibility checklist (non-negotiable)

- Color contrast ≥ 4.5:1 for body, ≥ 3:1 for large text.
- All interactive elements reachable via keyboard with visible focus ring.
- Headings in order: one `h1` per page, then `h2`, `h3` — never skip.
- Buttons are `<button>`, links are `<a>`. Don't put `onClick` on a div.
- Form inputs have associated `<label>`.

## Performance defaults

- Use `next/image` for all images.
- Use `next/font` (already configured for Geist) — never `<link>` Google Fonts in head.
- Lazy-load below-the-fold sections with dynamic imports if they pull heavy deps.
- Run a Lighthouse audit before declaring a page done — target 90+ on Performance, Accessibility, Best Practices, SEO.

## When integrating a 21st.dev component

1. Copy the component into `src/components/`.
2. Replace any hard-coded colors with the tokens above.
3. Replace any hard-coded type sizes with the scale.
4. Wrap entrance in `motion.div` with the `fadeUp` variant.
5. Verify keyboard navigation and focus states still work.