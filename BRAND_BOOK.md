# Brand Book

> Visual identity guide adapted from the shorerlaw.co.il design system — an elegant, law-firm aesthetic combining deep navy, warm gold, and soft neutrals.

---

## 1. Brand Personality

| Trait | Expression |
|---|---|
| **Trustworthy** | Deep navy as the dominant brand color |
| **Premium** | Warm gold accents, generous whitespace |
| **Clean** | Light grey backgrounds, minimal shadows |
| **Editorial** | Large serif-like Hebrew headings with thin gold underline accents |
| **Calm** | Subtle transitions (0.4s), no harsh gradients |

---

## 2. Color System

### 2.1 Primary palette

| Token | Hex | Usage |
|---|---|---|
| `--dark-blue` | `#2A3850` | Primary brand color. Headings, nav, CTA borders, dark sections |
| `--gold` | `#DFC07C` | Accent. Subtitles, underline dividers, circular button dots, slider arrows |
| `--bg-primary` | `#F2F3F5` | Default section background, footer, mobile menu |

### 2.2 Neutrals

| Token | Hex | Usage |
|---|---|---|
| `--ink` | `#121212` | Large heading text |
| `--ink-soft` | `#131313` | Inner-page heading text |
| `--text` | `#000000` | Body copy |
| `--white` | `#FFFFFF` | Text on dark, input backgrounds, header |
| `--border-form` | `#483B34` | Form input borders (warm dark brown) |

### 2.3 Extended greys

| Hex | Usage |
|---|---|
| `#F7F8FA` | Alt section bg |
| `#FAFAFB` | Lightest bg tint |
| `#F0F0F1` | Light divider |
| `#F1F1F1` | Subtle background |

### 2.4 Gold variants (use sparingly)

| Hex | Usage |
|---|---|
| `#DFC07C` | Default gold |
| `#DEBF7C` | Hover state |
| `#C6AC78` / `#C6AC79` | Darker gold for depth |

### 2.5 Functional / overlay colors

| Value | Usage |
|---|---|
| `rgba(42, 56, 80, 1)` | Solid navy overlay |
| `rgba(42, 56, 80, 0.8)` | Navy image overlay |
| `rgba(0, 0, 0, 0.7)` | Image darkening |
| `rgba(214, 214, 214, 0.3)` | Subtle dividers |
| `rgb(0 0 0 / 4%)` | Header drop shadow |

### 2.6 Color usage ratio (60-30-10)

- **60%** `#F2F3F5` / `#FFFFFF` — backgrounds
- **30%** `#2A3850` / `#121212` — text & structural
- **10%** `#DFC07C` — accent only

---

## 3. Typography

### 3.1 Type families

| Role | Primary font | Free alternative (Google Fonts) |
|---|---|---|
| Hebrew body | `ploni-regular-new` | `Heebo` / `Assistant` |
| Hebrew bold/headings | `ploni-bold-new` (700) | `Heebo 700` / `Assistant 700` |
| Latin/numeric accent | `Poppins-Regular` | `Poppins` |
| Form labels (fallback) | Noto Sans Hebrew | `Noto Sans Hebrew` |

> Ploni is a commercial typeface by HaifaFont. For unlicensed use, swap with **Heebo** or **Assistant**.

### 3.2 Type scale

| Token | Size | Weight | Family | Color | Used for |
|---|---|---|---|---|---|
| `--fs-hero` | `71px` | 700 | bold | `#121212` | Page hero H1 |
| `--fs-h2` | `61px` | 700 | bold | `#121212` | Section H2 (desktop) |
| `--fs-h2-mobile` | `35px` | 700 | bold | `#121212` | Section H2 (mobile) |
| `--fs-form-title` | `41px` | 700 | bold | `#FFFFFF` | Form heading |
| `--fs-subtitle` | `30px` | 400 | Poppins | `#DFC07C` | Section subtitle (gold) |
| `--fs-subtitle-mobile` | `20px` | 400 | Poppins | `#DFC07C` | Subtitle (mobile) |
| `--fs-h3` | `24px` | 700 | bold | `#000` / `#131313` | Inner H3 |
| `--fs-nav` | `21px` | 400 | regular | `#000` | Navigation links |
| `--fs-h4` | `19px` | 700 | bold | — | Card titles |
| `--fs-body` | `17px` | 400 | regular | `#000` | Body copy |
| `--fs-meta` | `16px` | 700 | regular | `#2A3850` | Language switcher |
| `--fs-small` | `15px` | 400 | regular | `#121212` | Footer, captions |
| `--fs-xs` | `12px` | 400 | regular | `#000` | Checkbox labels |

### 3.3 Rules

- **Line-height body:** `1.37`
- **Letter-spacing for gold subtitle:** `3px` (always)
- **Heading underline accent:** 87px or 110px gold line, 2px height, 10px below heading
- Headings are never italic.
- Avoid mixing more than two font families in a single view.

---

## 4. Layout & Spacing

| Property | Value |
|---|---|
| Section vertical padding | `130px` top / `269px` bottom (hero), `70-90px` (standard) |
| Header padding | `22px 50px 14px 50px` |
| Form padding | `70px 90px` |
| Default container max-width | Bootstrap default (`1140px`) |
| Mobile section padding | `40–60px` vertical |

**Grid:** Bootstrap 12-column. RTL-aware (`padding-inline-start/end`).

---

## 5. Components

### 5.1 Buttons

**Ghost button (default CTA on light background)**
```css
.btn-ghost {
  border: 1px solid #2A3850;
  background: transparent;
  border-radius: 25px;
  font-size: 17px;
  padding: 10px 13.4px;
  min-width: 180px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
}
.btn-ghost::before {
  content: "";
  width: 28px; height: 28px;
  background: #DFC07C;
  border-radius: 50%;
}
.btn-ghost:hover { font-weight: 700; }
```

**Primary filled button (form submit)**
```css
.btn-primary {
  background: #DFC07C;
  border: 1px solid #2A3850;
  border-radius: 25px;
  color: #121212;
  min-width: 180px;
  height: 45px;
  font-size: 17px;
}
```

**Slider arrow button**
```css
.btn-arrow {
  width: 63px; height: 63px;
  background: #DFC07C;
  border-radius: 50%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}
```

### 5.2 Section title (signature pattern)

```css
.section-title h2 {
  font-family: var(--font-heading);
  font-size: 61px;
  color: #121212;
  text-align: center;
}
.section-title h2::after {
  content: "";
  display: block;
  width: 87px;
  height: 2px;
  background: #DFC07C;
  margin: 10px auto 0;
}
.section-title h3 {
  font-family: 'Poppins', sans-serif;
  font-size: 30px;
  color: #DFC07C;
  letter-spacing: 3px;
  margin: 0;
}
```

### 5.3 Header / Navigation

```css
.site-header {
  background: #FFFFFF;
  padding: 22px 50px 14px 50px;
  box-shadow: 0 10px 20px 0 rgb(0 0 0 / 4%);
  display: flex;
  align-items: center;
}
.submenu {
  background: #F2F3F5;
  min-width: 300px;
}
.submenu a::before {
  content: '';
  position: absolute;
  right: 0; bottom: 0;
  width: 0; height: 1.5px;
  background: #DFC07C;
  transition: 0.5s all;
}
.submenu a:hover::before { width: 100%; }
```

### 5.4 Forms

```css
.form-section { background: #2A3850; padding: 70px 90px; }
.form-section h2 { color: #FFFFFF; font-size: 41px; }

input, textarea {
  height: 50px;
  border: 1px solid #483B34;
  border-radius: 0;
  background: #FFFFFF;
  color: #000;
  font-size: 17px;
  padding: 0 16px;
}
textarea { height: 124px; padding-top: 10px; }
```

### 5.5 Footer

```css
.site-footer {
  background: #F2F3F5;
  color: #121212;
  font-size: 15px;
}
.site-footer a:hover { font-weight: 700; color: #2A3850; }
.site-footer a::after {
  content: "";
  display: block;
  width: 100%;
  height: 2px;
  background: #DFC07C;
  opacity: 0;
  transition: 0.4s;
}
.site-footer a:hover::after { opacity: 1; }
```

---

## 6. Iconography & Imagery

- **Icons:** Font Awesome (line/solid mix), sized 20–28px
- **Decorative shapes:** Soft circular gold dots, thin horizontal gold dividers (2px × 87–110px)
- **Photography:** Warm, natural lighting; muted tones that complement navy + gold
- **Background overlays:** Use `rgba(42, 56, 80, 0.8)` over hero imagery
- **Image treatment:** `background-size: cover; background-position: center center;`

---

## 7. Motion

| Element | Transition |
|---|---|
| Default | `transition: 0.4s` |
| Underline reveal | `transition: 0.5s all` |
| Slider arrows | `transition: all ease-in-out 0.4s` |

Keep motion subtle. No bounce, no overshoot. Hover effects should feel calm and editorial.

---

## 8. Elevation & Borders

| Style | Value | Use |
|---|---|---|
| Header shadow | `0 10px 20px 0 rgb(0 0 0 / 4%)` | Top navigation only |
| Subtle card border | `1px solid rgb(112 112 112 / 20%)` | Optional card separation |
| Pill radius | `25px` | All buttons |
| Form input radius | `0` (sharp) | Inputs — intentional contrast with rounded buttons |
| Circle | `50%` | Accent dots, slider arrows |

---

## 9. Drop-in CSS Tokens

```css
:root {
  /* Color */
  --color-primary: #2A3850;
  --color-accent: #DFC07C;
  --color-accent-hover: #DEBF7C;
  --color-bg: #F2F3F5;
  --color-bg-alt: #F7F8FA;
  --color-surface: #FFFFFF;
  --color-ink: #121212;
  --color-ink-soft: #131313;
  --color-text: #000000;
  --color-border-input: #483B34;
  --color-overlay-dark: rgba(0, 0, 0, 0.7);
  --color-overlay-primary: rgba(42, 56, 80, 0.8);

  /* Typography */
  --font-body: 'Heebo', 'Assistant', sans-serif;
  --font-heading: 'Heebo', 'Assistant', sans-serif;
  --font-accent: 'Poppins', sans-serif;

  --fs-hero: 71px;
  --fs-h2: 61px;
  --fs-h2-m: 35px;
  --fs-h3: 24px;
  --fs-h4: 19px;
  --fs-subtitle: 30px;
  --fs-subtitle-m: 20px;
  --fs-body: 17px;
  --fs-small: 15px;
  --fs-xs: 12px;

  --lh-body: 1.37;
  --ls-subtitle: 3px;

  /* Layout */
  --radius-pill: 25px;
  --radius-circle: 50%;
  --shadow-header: 0 10px 20px 0 rgb(0 0 0 / 4%);

  /* Motion */
  --t-default: 0.4s;
  --t-slow: 0.5s;
}
```

---

## 10. Do's & Don'ts

### ✅ Do
- Use navy + gold + light grey as the dominant trio
- Keep gold as accent only (max ~10% of any view)
- Pair every large heading with a thin gold underline
- Use sharp-edged form inputs alongside 25px-radius pill buttons
- Maintain generous vertical whitespace between sections

### ❌ Don't
- Don't use gold for body copy or long-form text
- Don't add gradients — the brand is flat
- Don't use heavy shadows; only the soft header shadow is on-brand
- Don't mix more than two font families per view
- Don't use bright reds, greens, or pure black backgrounds