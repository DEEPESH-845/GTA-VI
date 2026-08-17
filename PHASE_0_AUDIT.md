# PHASE 0 — COMPLETE PROJECT AUDIT

**Project:** GTA VI Website Recreation
**Reference:** https://www.rockstargames.com/VI
**Date:** 2025-07-11
**Mode:** Analysis Only (Plan Mode)

---

## 1. CURRENT PROJECT ARCHITECTURE ANALYSIS

### 1.1 Tech Stack
| Layer | Technology | Version | Notes |
|-------|------------|---------|-------|
| Framework | React | 19.1.0 | Modern React with hooks |
| Build Tool | Vite | 6.3.5 | Fast HMR, optimized builds |
| Styling | Tailwind CSS | 4.1.10 | v4 with @theme directive |
| Animation | GSAP | 3.13.0 | ScrollTrigger, @gsap/react |
| Smooth Scroll | Lenis | 1.3.17 | @lenis/react wrapper |
| Responsive | react-responsive | 10.0.1 | useMediaQuery hook |
| Routing | react-router-dom | (listed in PRODUCT.md) | Not yet installed/used |
| Language | TypeScript/JSX | Mixed | .tsx for LenisProvider only |

### 1.2 Project Structure
```
GTA VI/├── src/
│   ├── components/
│   │   ├── PreLoader.jsx          # Preloader with animated logo mask
│   │   └── LenisProvider.tsx      # Smooth scroll wrapper (lerp: 0.06)
│   ├── sections/
│   │   ├── NavBar.jsx             # Fixed nav + character mega-menu
│   │   ├── Hero.jsx               # Mask animation + video modal
│   │   ├── FirstVideo.jsx         # Pinned scroll-synced video
│   │   ├── Jason.jsx              # Character bio + parallax images
│   │   ├── SecondVideo.jsx        # Pinned scroll-synced video
│   │   ├── Lucia.jsx              # Character bio + parallax images
│   │   ├── PostCard.jsx           # Interactive card with video
│   │   ├── Final.jsx              # Pinned scroll-synced video
│   │   ├── Outro.jsx              # Final logo + date
│   │   └── ComingSoon.jsx         # Duplicate of Outro content
│   ├── constants/
│   │   └── index.js               # Responsive mask settings
│   ├── App.jsx                    # Main composition (single page)
│   ├── main.jsx                   # Entry point with LenisProvider
│   └── index.css                  # Tailwind v4 + design tokens + animations
├── public/
│   ├── images/                    # 47 assets (SVG, WebP, PNG)
│   ├── videos/                    # 11 MP4 files
│   ├── fonts/                     # 3 WOFF fonts (Long, Round, Round Bold)
│   ├── GTAVI_Screenshots/         # 55 JPGs (Places + People)
│   ├── GTAVI_Ultimate_Edition_Benefits/  # 48 JPGs
│   └── GTAVI_Vintage_Vice_City_Pack/     # 11 JPGs
├── index.html
├── package.json
├── vite.config.js
├── DESIGN.md
├── PRODUCT.md
└── README.md
```

### 1.3 Routing Architecture
**Current:** Single-page application (no routing)
**Required:** Multi-page with 3 routes:
- `/` — Homepage
- `/only-in-leonida` — Character & location deep-dive
- `/media` — Tabbed media library (with sub-routes: `/media/videos`, `/media/screenshots`, `/media/artwork-wallpapers`)

### 1.4 Component Architecture
**Current Components (12):**
1. `PreLoader` - Animated logo mask with shimmer/glow
2. `LenisProvider` - Smooth scroll wrapper
3. `NavBar` - Fixed nav + character mega-menu overlay
4. `Hero` - Complex mask animation, video modal
5. `FirstVideo` - Pinned scroll-scrub video
6. `Jason` - Character section with parallax images
7. `SecondVideo` - Pinned scroll-scrub video
8. `Lucia` - Character section with parallax images
9. `PostCard` - Hover-rotate card with auto-play video
10. `Final` - Pinned scroll-scrub video
11. `Outro` - Final logo + date
12. `ComingSoon` - Duplicate of Outro content

**Missing Components (from PRODUCT.md + Official Site):**
- `Footer` - Site-wide footer with social, legal, ESRB
- `PreOrderModal` - Edition/platform selector
- `PromoCard` - Reusable promo card (Ultimate Edition, Trailer 2, etc.)
- `StorySection` - Narrative description with parallax
- `VintageViceCitySection` - Image carousel for pre-order pack
- `CharacterProfile` - 8 character cards (Only in Leonida)
- `CharacterHero` - Parallax hero per character
- `LocationCTA` - "Explore [Location]" buttons
- `MediaTabs` - Tab navigation (Featured/Videos/Screenshots/Artwork)
- `MediaGrid` - Responsive media grid with lazy loading
- `MediaCard` - Individual media item with download
- `DownloadAllButton` - ZIP download trigger
- `NewsletterSignup` - Email capture

### 1.5 Animation System
| System | Configuration | Status |
|--------|--------------|--------|
| GSAP ScrollTrigger | Registered in App.jsx | ✅ Active |
| Lenis Smooth Scroll | lerp: 0.06, duration: 2.4 | ✅ Active |
| Preloader Animation | CSS keyframes (2.15s cubic-bezier) | ✅ Custom |
| Hero Mask Animation | GSAP timeline + ScrollTrigger (scrub: 2.5) | ✅ Custom |
| Video Scrubbing | currentTime tied to scroll progress | ✅ 3 sections |
| Parallax Images | GSAP y-translation on scroll | ✅ 2 sections |
| Nav Menu | GSAP timeline (stagger: 0.08) | ✅ Custom |
| Card Hover | CSS transition (rotate/scale) | ✅ PostCard only |

### 1.6 CSS / Tailwind Strategy
- **Tailwind v4** with `@theme` directive for design tokens
- **Custom @layer components** for section-level utilities
- **CSS keyframes** for preloader (not GSAP)
- **CSS mask-image** for hero logo reveal
- **Custom properties** for colors, fonts, breakpoints
- **No design token file** — tokens embedded in index.css

### 1.7 Asset Organization
| Folder | Count | Formats | Usage in Current Code |
|--------|-------|---------|----------------------|
| `/public/images` | 47 | SVG, WebP, PNG | ✅ Core UI (logos, hero, nav, characters) |
| `/public/videos` | 11 | MP4 | ✅ 5 used (output1,2,3, postcard) |
| `/public/fonts` | 3 | WOFF | ✅ All registered |
| `/public/GTAVI_Screenshots/Places` | 35 | JPG | ❌ **Unused** (6 locations × 5-9 images) |
| `/public/GTAVI_Screenshots/People` | 40 | JPG | ❌ **Unused** (8 characters × 4-6 images) |
| `/public/GTAVI_Ultimate_Edition_Benefits` | 48 | JPG | ❌ **Unused** (Ultimate Edition section missing) |
| `/public/GTAVI_Vintage_Vice_City_Pack` | 11 | JPG | ❌ **Unused** (Vintage pack section missing) |

**Critical Finding:** ~134 high-quality official assets exist in `public/` but **only ~25 are actually used**. The rest map directly to missing website sections.

### 1.8 State Management
- **None** — purely React useState/useRef
- No global store (Redux, Zustand, Context)
- No URL state synchronization
- No scroll restoration logic

### 1.9 Responsive Strategy
- **Tailwind breakpoints:** xs (20rem), sm (40rem), md, lg, xl, 2xl, 3xl (120rem)
- **react-responsive** `useMediaQuery` for JS logic (Hero mask settings)
- **CSS clamp()** for fluid typography in NavBar
- **No container queries**
- **No orientation-specific handling**

### 1.10 Performance Considerations
| Aspect | Current State |
|--------|---------------|
| Video Preloading | `preload="auto"` on all 5 used videos |
| Image Optimization | Raw WebP/JPG/PNG — no srcset, no WebP fallback |
| Lazy Loading | None (all videos load immediately) |
| Code Splitting | None (single bundle) |
| Font Loading | `@font-face` in CSS — no `font-display` |
| Bundle Analysis | Not configured |
| Lighthouse CI | Not configured |

---

## 2. OFFICIAL ROCKSTAR GTA VI WEBSITE — REVERSE ENGINEERING

### 2.1 Site Map & Navigation
```
/ (Homepage)
├── Navigation: Logo | Menu (hamburger) | Pre-Order Now (CTA)
├── Hero: "Coming November 19, 2026" + PS5/Xbox logos
├── Ultimate Edition: Promo card → /pre-order?edition=ultimate
├── Pre-order Bonuses: Vintage Vice City Pack → /pre-order
├── Story: Narrative description
├── Videos: Trailer 2 → YouTube embed modal
├── People & Places: "Only in Leonida" → /only-in-leonida
├── Downloads: Media & Artwork → /media
├── Newsletter: "Get Rockstar Propaganda" email capture
└── Footer: Social (7) | Legal (6) | ESRB | PlayStation note

/only-in-leonida
├── Navigation: Same as homepage
├── Hero: "When the sun fades..." tagline
├── Characters (8):
│   ├── Jason Duval
│   ├── Lucia Caminos
│   ├── Cal Hampton
│   ├── Boobie Ike
│   ├── Dre'Quan Priest
│   ├── Real Dimez
│   ├── Raul Bautista
│   └── Brian Heder
│   Each: Hero image, name, quote, bio, "Rewatch Video", "Explore [Location]"
├── Location CTAs (5): Vice City, Grassrivers, Port Gellhorn, Ambrosia, Mount Kalaga
└── Footer: Same as homepage

/media
├── Navigation: Same
├── Hero: "Explore Vice City and Beyond"
├── Tabs: Featured | Videos | Screenshots | Artwork
├── Videos (11): Grid with "Download All" ZIP
├── Screenshots (70): Sub-tabs All | Ultimate Edition | Vintage Vice City
├── Artwork (20): Grid with "Download All" ZIP
└── Footer: Same as homepage
```

### 2.2 Visual Design System (Extracted from Official Site)

#### Color Palette
| Token | Hex | Usage |
|-------|-----|-------|
| Background Primary | `#0B0C14` / `#17172A` | Page background, gradients |
| Background Gradient | `linear-gradient(223deg, #1C1829 → #111117)` | Main content area |
| Text Primary | `#FFFFFF` | Headings, body |
| Text Secondary | `#E6E7EE` | Navigation items |
| Accent Yellow | `#FFF9CB` | Gradient titles, highlights |
| Accent Pink | `#FFB0C4` | Subheadings, hover states |
| Accent Orange | `#FCAF17` | Gradient end |
| Accent Red | `#E84C22` | Gradient middle |
| Platform Blue | `#003791` | PlayStation branding |
| Overlay Dark | `rgba(23, 23, 42, 0.9)` | Video modal backdrop |
| Border Subtle | `rgba(255,255,255,0.1)` | Nav menu divider, cards |

#### Typography
| Role | Font | Weight | Case | Letter-Spacing |
|------|------|--------|------|----------------|
| Display/Headline | **Long** | Extrabold | Uppercase | Tight (-0.02em) |
| Body Large | **Round** | Medium | Normal | Normal |
| Body Small | **Round** | Regular | Normal | Normal |
| Button/CTA | **Round Bold** | Bold | Uppercase | Wide (0.1em) |
| Nav Items | **Long** | Extrabold | Uppercase | Tight |
| Gradient Title | **Round Bold** | Extrabold | Uppercase | Normal |

**Font Files Confirmed:** `/fonts/long.woff`, `/fonts/round.woff`, `/fonts/round-bold.woff`

#### Spacing Scale (from DESIGN.md + observation)
| Token | Value | Usage |
|-------|-------|-------|
| space.1 | 15.75px (0.9875rem) | Base unit |
| space.2 | 27px (1.6875rem) | Section padding |
| space.3 | 31.5px (1.96875rem) | Component gaps |
| space.4 | 45px (2.8125rem) | Section margins |
| space.5 | 54px (3.375rem) | Large gaps |
| space.6 | 58.5px (3.65625rem) | Hero spacing |

#### Border Radius
| Token | Value |
|-------|-------|
| radius.xs | 31.5px (pill buttons) |
| radius.sm | 1000px (fully round) |
| radius.md | 9999px (fully round) |

#### Shadows
| Token | Value |
|-------|-------|
| shadow.1 | `rgba(255, 179, 199, 0.404) 0px 2px 71.16px` (pink glow) |

#### Motion Tokens
| Token | Value | Usage |
|-------|-------|-------|
| duration.instant | 150ms | Micro-interactions |
| duration.fast | 200ms | Hover transitions |
| duration.normal | 500ms | Standard transitions |
| duration.slow | 800ms | Section reveals |
| ease.standard | `cubic-bezier(0.4, 0, 0.2, 1)` | Default |
| ease.emphasized | `cubic-bezier(0.4, 0, 0.6, 1)` | Hero animations |
| ease.spring | `cubic-bezier(0.455, 0.03, 0.515, 0.955)` | Preloader |

#### Z-Index Hierarchy
| Layer | Z-Index | Elements |
|-------|---------|----------|
| Base Content | 1-10 | Sections, text |
| Pinned Sections | 50-100 | ScrollTrigger pin-spacer |
| Fixed Nav | 100 | NavBar |
| Nav Overlay | 90 | Mega-menu background |
| Video Modal | 9999 | YouTube iframe overlay |
| Preloader | 99999 | Loading overlay |

### 2.3 Section-by-Section Visual & Behavioral Specification

#### A. Navigation Bar
- **Position:** Fixed top, full width
- **Background:** Transparent (blends over hero)
- **Left:** Rockstar logo (SVG)
- **Right:** Hamburger menu + "Pre-Order Now" CTA button
- **Hamburger Menu:** Opens full-screen overlay (z-90)
  - **Left Column:** Character portrait grid (8) with hover-swap images
  - **Right Column:** Vertical nav list (8 items), stagger reveal (0.08s)
  - **Background:** Radial gradient `#1b1c2a` → `#0b0c14`
  - **Close:** Click outside or hamburger again
- **Pre-Order CTA:** Yellow background, Round Bold, uppercase, pill radius

#### B. Homepage Hero
- **Height:** 100dvh
- **Content:** Centered stack
  - "Coming November 19, 2026" — Gradient title (Round Bold, clamp 5-8rem)
  - "Plays Best on PlayStation 5" badge
  - PS5 logo + Xbox Series X|S logo
  - Small "Scroll for more content" indicator
- **Background:** Dark gradient (same as main)
- **Animation:** Fade-in on load (no scroll trigger)
- **No mask animation** — current project's hero is **incorrect**

#### C. Ultimate Edition Section
- **Layout:** Side-by-side card (desktop) / stacked (mobile)
- **Left:** Promo image/video with parallax
- **Right:** Title, description, "Learn More" → Pre-order modal
- **Background:** Radial gradient highlight behind content

#### D. Pre-order Bonuses / Vintage Vice City Pack
- **Layout:** Mirror of Ultimate Edition (alternating sides)
- **Content:** Vintage pack imagery carousel
- **CTA:** "Learn More" → Pre-order modal

#### E. Story Section
- **Layout:** Full-width text block with parallax background image
- **Text:** Narrative description (white, Round, max-width ~40ch)
- **Background:** Vice City hero image, slow parallax (y: -100 to 100)

#### F. Videos Section
- **Layout:** Single featured video card (Trailer 2)
- **Thumbnail:** Custom poster frame
- **Action:** "Watch Now" → YouTube modal (autoplay, mute)
- **Background:** Subtle gradient accent

#### G. People & Places / Only in Leonida
- **Layout:** Split card
- **Left:** "Only in Leonida" tagline + "Explore More" → /only-in-leonida
- **Right:** "Vice City, USA" tagline + location imagery
- **Hover:** Subtle scale/brightness transition

#### H. Downloads / Media & Artwork
- **Layout:** Two cards side-by-side
- **Card 1:** "Media & Artwork" → /media
- **Card 2:** "See All" → /media
- **Style:** Border, hover glow, icon

#### I. Newsletter Signup
- **Heading:** "Get Rockstar Propaganda"
- **Subtext:** Game announcements, events, offers
- **Form:** Email input + Submit (yellow button)
- **Background:** Radial gradient accent

#### J. Footer
- **Top Row:** Social icons (X, Instagram, YouTube, TikTok, Facebook, Twitch, Discord)
- **Middle:** Corporate links (Privacy, Cookie Settings, Cookie Policy, Legal, Do Not Sell)
- **Bottom:** ESRB rating badge + "May contain content inappropriate for children"
- **Background:** Darkest gradient stop (`#111117`)
- **PlayStation note:** "For more on PlayStation benefits, see playstation.com/GTAVIfeatures"

#### K. Only in Leonida Page — Character Profiles
- **Per Character:** Full-viewport hero image (parallax)
- **Content Panel:** Name (Long, uppercase), Quote (italic), Bio (Round)
- **Actions:** "Rewatch Video" (character-specific trailer clip), "Explore [Location]"
- **Layout:** Alternating left/right content alignment
- **Scroll:** Standard (not pinned), smooth Lenis

#### L. Only in Leonida Page — Location CTAs
- **Grid:** 5 location cards
- **Each:** Location hero image, name, "Explore" button
- **Hover:** Image zoom + overlay fade

#### M. Media Page — Tabbed Interface
- **Tabs:** Featured | Videos | Screenshots | Artwork
- **Active State:** Yellow underline, bold text
- **Content:** Masonry/responsive grid
- **Items:** Thumbnail + type badge + dimensions
- **"Download All":** ZIP button per category
- **Lazy Load:** IntersectionObserver for images

### 2.4 Interaction Behaviors

| Interaction | Trigger | Behavior | Timing |
|-------------|---------|----------|--------|
| Nav Hamburger | Click | Full-screen overlay, stagger items | 0.9s open, 0.7s close |
| Nav Item Hover | Pointer | Swap left-column image, scale 1.1 | 0.4s fade, 7s scale out |
| Pre-Order CTA | Click | Open modal (edition + platform select) | 300ms fade |
| Video Play | Click | YouTube iframe modal, autoplay+mute | 200ms backdrop |
| Video Close | Click backdrop/ESC | Fade out, stop video | 200ms |
| Hero Scroll Indicator | Auto | Fade out after 3s / on scroll | 1s |
| Character Image Parallax | Scroll | Slow vertical drift | Continuous |
| Tab Switch | Click | Cross-fade grid, scroll to top | 300ms |
| Media Card Hover | Pointer | Scale 1.02, border glow | 200ms |
| Location Card Hover | Pointer | Image zoom 1.05, overlay fade | 400ms |
| Newsletter Submit | Click | Loading state, success toast | - |
| Smooth Scroll | Wheel/Touch | Lenis lerp 0.06 | Continuous |
| ScrollTrigger Scrub | Scroll | Video currentTime sync | Scrub: 1-3 |

### 2.5 Loading Strategy
1. **Preloader:** Full-screen, animated logo mask (2.15s loop)
2. **Critical Assets:** Fonts, hero images, nav logos — preload
3. **Video Posters:** Load immediately, video on interaction
4. **Below-fold Images:** Lazy load (IntersectionObserver)
5. **Media Page:** Paginated/infinite scroll for grids

---

## 3. GAP ANALYSIS — CURRENT PROJECT vs OFFICIAL SITE

### 3.1 Structural Gaps (Critical — Blocking Phase 1+)
| # | Missing Element | Current State | Required Effort |
|---|-----------------|---------------|-----------------|
| 1 | **Multi-page Routing** | Single page (App.jsx) | React Router v7 + 3 routes |
| 2 | **Footer Component** | ❌ Missing | New component + all links |
| 3 | **PreOrderModal** | ❌ Missing | Modal with edition/platform select |
| 4 | **Ultimate Edition Section** | ❌ Missing | PromoCard component + assets |
| 5 | **Vintage Vice City Section** | ❌ Missing | Carousel + 11 images available |
| 6 | **Story Section** | ❌ Missing | Parallax background + text |
| 7 | **Videos Section (Trailer 2)** | ❌ Missing | YouTube modal (different from Hero) |
| 8 | **People & Places Section** | ❌ Missing | Link to /only-in-leonida |
| 9 | **Downloads/Media Section** | ❌ Missing | Link to /media |
| 10 | **Newsletter Signup** | ❌ Missing | Form + validation |
| 11 | **Only in Leonida Page** | ❌ Missing | 8 character profiles + locations |
| 12 | **Media Page** | ❌ Missing | 4 tabs, 152 media items, ZIP downloads |
| 13 | **Character Mega-Menu Images** | ⚠ Partial | NavBar uses square SVGs; official uses full portraits |

### 3.2 Visual/Behavioral Gaps (High — Phase 2-4)
| # | Discrepancy | Current | Official |
|---|-------------|---------|----------|
| 1 | **Hero Section** | Complex mask animation, video modal, fake logo | Simple centered text + logos, no mask |
| 2 | **NavBar Logo** | `nav-logo.svg` (small) | Rockstar Games logo (larger) |
| 3 | **NavBar CTA** | Missing "Pre-Order Now" button | Prominent yellow CTA |
| 4 | **Nav Menu Images** | Square SVG crops | Full character portraits |
| 5 | **Nav Menu Layout** | 2-col grid (images left, text right) | Same structure, different images |
| 6 | **Video Scrub Sections** | 3 videos (output1,2,3 + postcard) | Only 1 scrub video on homepage (Trailer 2 in Videos section) |
| 7 | **Character Sections** | Jason + Lucia only (custom layout) | 8 characters on separate page |
| 8 | **PostCard** | Custom rotating card with video | Doesn't exist on official homepage |
| 9 | **Final Section** | Pinned video (output3) | Doesn't exist on official homepage |
| 10 | **Outro/ComingSoon** | Duplicate content | Only in footer area |
| 11 | **Gradient Title** | Pink→Red→Orange (correct) | Same |
| 12 | **Background Gradient** | Correct stops | Same |
| 13 | **Fonts** | Correct 3 fonts loaded | Same |
| 14 | **Lenis Config** | lerp: 0.06, duration: 2.4 | Need to verify exact values |

### 3.3 Asset Utilization Gaps (Critical — 134 unused assets)
| Asset Folder | Count | Official Usage | Current Usage | Gap |
|--------------|-------|----------------|---------------|-----|
| GTAVI_Screenshots/Places | 35 | Only in Leonida (5 locations), Media page | 0 | **100% unused** |
| GTAVI_Screenshots/People | 40 | Only in Leonida (8 chars), Media page | 2 (jason-1, lucia-2 in NavBar) | **95% unused** |
| GTAVI_Ultimate_Edition_Benefits | 48 | Ultimate Edition section, Media page | 0 | **100% unused** |
| GTAVI_Vintage_Vice_City_Pack | 11 | Vintage section, Media page | 0 | **100% unused** |
| videos/output4-11.mp4 | 8 | Media page (11 videos total) | 0 | **73% unused** |

### 3.4 Technical Debt & Architecture Gaps
| Area | Issue | Severity |
|------|-------|----------|
| **Routing** | No react-router-dom installed; App.jsx is monolithic | Critical |
| **State** | No global state for pre-order modal, nav, scroll position | High |
| **Performance** | All 5 videos `preload="auto"` — ~35MB on load | High |
| **Lazy Loading** | None for images/videos below fold | High |
| **Accessibility** | Missing alt text, ARIA labels, focus management | High |
| **Reduced Motion** | No `prefers-reduced-motion` handling | Medium |
| **Font Loading** | No `font-display: swap`, no preload hints | Medium |
| **Error Boundaries** | None — crash = white screen | Medium |
| **Testing** | No unit, integration, or e2e tests | Low |
| **Build Analysis** | No bundle analyzer, no Lighthouse CI | Low |
| **TypeScript** | Only 1 .tsx file; rest .jsx — inconsistent | Low |

---

## 4. PHASE 0 CONCLUSION & PHASE 1 PLAN

### 4.1 Current Phase Status: **PHASE 0 COMPLETE**

### 4.2 Immediate Next Phase: **PHASE 1 — DESIGN TOKEN EXTRACTION**

**Objective:** Extract all design tokens from official site and current CSS into a single authoritative `tokens.js` / `tokens.css` file.

**Deliverables:**
1. `src/tokens/colors.js` — Complete color palette with semantic names
2. `src/tokens/typography.js` — Font families, scales, weights, line-heights
3. `src/tokens/spacing.js` — Spacing scale (space.1-6)
4. `src/tokens/motion.js` — Durations, easings, spring configs
5. `src/tokens/zIndex.js` — Layer hierarchy
6. `src/tokens/breakpoints.js` — Responsive breakpoints
7. `src/tokens/shadows.js` — Shadow system
8. `src/tokens/borderRadius.js` — Radius tokens
9. `src/index.css` — Refactored to `@import` tokens, zero raw values

**Validation:** Every value in `index.css` must reference a token. No raw hex, px, or raw cubic-bezier values allowed.

### 4.3 Phase Dependencies
```
PHASE 0 (Audit) ✅
    ↓
PHASE 1 (Tokens) → Must complete before any component work
    ↓
PHASE 2 (Preloader) → Uses tokens, independent
    ↓
PHASE 3 (Global Framework) → Routing, Lenis config, Layout, Scroll system
    ↓
PHASE 4 (Hero) → Homepage hero only (simplified to match official)
    ↓
PHASE 5 (Global Scroll) → ScrollTrigger defaults, parallax utils
    ↓
PHASE 6 (Micro-interactions) → Buttons, links, nav, cards, forms
    ↓
PHASE 7 (Media Integration) → Asset manifest, lazy loading, preloading
    ↓
PHASE 8 (Section Replication) → Homepage sections in order
    ↓
PHASE 9 (Motion System) → GSAP timelines, scroll sequences
    ↓
PHASE 10 (Responsive Parity) → All breakpoints
    ↓
PHASE 11 (Typography Perfection) → Optical alignment, kerning
    ↓
PHASE 12 (Performance) → Lighthouse 90+, 60fps scroll
    ↓
PHASE 13 (Accessibility) → WCAG 2.2 AA
    ↓
PHASE 14 (Final Pixel Audit) → Zero visual diffs
```

---

## 5. APPROVAL REQUEST

**Phase 0 Audit Complete.** The gap analysis reveals:

- **3 routes** needed (currently 1)
- **15+ new components** required
- **134 unused official assets** ready for integration
- **Hero section** fundamentally different from official (must be simplified)
- **Video scrub sections** reduced from 3 to 1 on homepage
- **Character content** belongs on `/only-in-leonida`, not homepage
- **Design tokens** scattered in `index.css` — must be extracted first

**Requesting approval to proceed to Phase 1: Design Token Extraction.**

Once tokens are codified, all subsequent phases will reference them exclusively — ensuring pixel-perfect consistency with the official Rockstar design system.
