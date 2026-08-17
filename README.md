<div align="center">

<img src="public/readme/banner.jpg" alt="Grand Theft Auto VI — scroll-driven landing page" width="100%" />

<br />
<br />

<h1>GRAND THEFT AUTO VI</h1>

### A scroll-driven cinematic landing page built with React 19, GSAP ScrollTrigger, and Tailwind CSS 4

Nine choreographed sections, two scroll-scrubbed trailers, and a tokenised design system —
engineered so that the scrollbar, not a timer, is the playhead.

<br />

<img src="https://img.shields.io/badge/React-19-000?style=flat-square&logo=react&logoColor=61DAFB" />
<img src="https://img.shields.io/badge/GSAP-3.13-000?style=flat-square&logo=greensock&logoColor=88CE02" />
<img src="https://img.shields.io/badge/Tailwind-4.1-000?style=flat-square&logo=tailwindcss&logoColor=38BDF8" />
<img src="https://img.shields.io/badge/Vite-6-000?style=flat-square&logo=vite&logoColor=FFD62E" />
<img src="https://img.shields.io/badge/Lenis-1.3-000?style=flat-square&logo=javascript&logoColor=F7DF1E" />

</div>

<br />

---

## Overview

A front-end engineering study in scroll choreography: a nine-stage cinematic sequence rebuilt from
scratch, where every animation is bound to scroll position rather than to elapsed time. Nothing
autoplays and nothing fades in on a timer — scrolling forward advances the sequence, scrolling back
rewinds it frame for frame.

The project was scoped as a deliberate exercise in three areas that production marketing sites care
about: **timeline orchestration** (GSAP + ScrollTrigger across pinned sections), **perceived
performance** (12 video assets behind a load-aware preloader with no white flash), and
**maintainable styling at scale** (a nine-file design token layer feeding Tailwind 4's `@theme`).

> [!NOTE]
> A non-commercial fan project. All footage, logos, and artwork are the property of **Rockstar Games**.

<br />

## Quick start

```bash
git clone https://github.com/DEEPESH-845/GTA-VI.git
cd GTA-VI
npm install
npm run dev
```

The dev server runs at **http://localhost:5173**. Scroll slowly on first pass — pacing is the point.

| Script | Description |
| :--- | :--- |
| `npm run dev` | Vite dev server with HMR |
| `npm run build` | Production bundle → `dist/` |
| `npm run preview` | Serve the production build locally |
| `npm run lint` | ESLint across the project |

<br />

## Tech stack

| Layer | Choice | Rationale |
| :--- | :--- | :--- |
| UI | **React 19** | Component-per-section model keeps each timeline isolated |
| Animation | **GSAP 3.13 + ScrollTrigger** | Scrub-accurate timelines, pinning, and `invalidateOnRefresh` |
| Lifecycle | **@gsap/react (`useGSAP`)** | Automatic tween cleanup on unmount — no ghost animations |
| Smooth scroll | **Lenis 1.3** | Interpolated scroll that ScrollTrigger can still read accurately |
| Styling | **Tailwind CSS 4** | `@theme` layer fed directly by the token modules |
| Responsive logic | **react-responsive** | Breakpoint decisions live in hooks, not scattered media queries |
| Build | **Vite 6** | Fast HMR and a lean production bundle |

<br />

## Engineering highlights

### Scroll-scrubbed video playback

A `<video>` element's `currentTime` is a plain numeric property, so GSAP can tween it and
ScrollTrigger can drive that tween — delivering frame-accurate scrubbing without a canvas or a
pre-extracted image sequence.

```js
videoRef.current.onloadedmetadata = () => {
  tl.to(videoRef.current, {
    currentTime: videoRef.current.duration,
    duration: 3,
    ease: "power1.inOut",
  }, "<");
};
```

The `onloadedmetadata` guard is load-bearing: `duration` is `NaN` until the browser parses the file
header, and a tween registered earlier animates silently toward `NaN` with no thrown error.

### Single-property hero reveal

The hero is a CSS `mask-image` of the GTA VI logo layered over the trailer. Animating `mask-size`
from `3500%` to `20%` reads as the logo pulling back out of black — one property carrying the entire
reveal, which keeps it compositor-friendly.

Breakpoint-specific values are centralised in a hook rather than duplicated across the component:

```js
// constants/index.js
useMaskSettings() // → { initialMaskPos, initialMaskSize, maskPos, maskSize }
```

Mobile pulls from `-1500vh`, tablet from `-1700vh`, desktop holds at `50% 22%`.

### Perceived performance

Twelve trailer clips and roughly 45 stills make first load genuinely expensive. Three mitigations:
the page background is inlined in `index.html` so React never boots against a white screen; `main`
stays at `opacity-0` until the preloader resolves; and the preloader holds a ~4.3 s floor while
exiting on `window.load`, so the shimmer covers real work instead of faking it.

<br />

## Scroll timeline

Each stage claims the viewport, plays its part, and hands off to the next.

| # | Stage | Component | Behaviour |
| :-: | :--- | :--- | :--- |
| 00 | **Preload** | `PreLoader.jsx` | Shimmering logo mask, ~4.3 s floor, exits on `window.load` |
| 01 | **Mask reveal** | `Hero.jsx` | Logo scales `3500%` → `20%`, carving the trailer out of black |
| 02 | **Trailer I** | `FirstVideo.jsx` | Pinned 200 vh; `video.currentTime` tweened by scroll |
| 03 | **Jason Duval** | `Jason.jsx` | Character bio; imagery drifts `-300px` on a parallax rail |
| 04 | **Trailer II** | `SecondVideo.jsx` | Second scrubbed clip, cross-faded from the bio |
| 05 | **Lucia Caminos** | `Lucia.jsx` | Mirrored bio; imagery drifts `-200px`, trailer II fades out |
| 06 | **Postcard** | `PostCard.jsx` | Scrubbed Leonida Keys clip under an animated gradient, tilt on hover |
| 07 | **Final cut** | `Final.jsx` | Pinned close-out, `scrub: 0.65`, `anticipatePin` for a clean lock |
| 08 | **Outro** | `Outro.jsx` | Logo lockup + **November 19, 2026** |

<br />

## Architecture

```
GTA VI/
├── index.html                 # Paints #17172A before React boots (no white flash)
├── constants/index.js         # Video IDs + responsive mask settings
├── public/
│   ├── videos/                # 12 trailer clips
│   ├── images/                # ~45 stills, logos, shards
│   └── fonts/                 # Long · Round · Round Bold (.woff)
└── src/
    ├── App.jsx                # Preloader gate → section order
    ├── index.css              # Tailwind 4 @theme, fonts, gradients
    ├── components/
    │   ├── PreLoader.jsx      # Shimmer mask + load-aware exit
    │   └── LenisProvider.tsx  # Smooth-scroll RAF wrapper
    ├── sections/              # One file per timeline stage
    └── tokens/                # Design system as JS modules
```

**Three constraints held throughout:**

1. **One section, one file, one timeline.** Sections never reach into each other's animations, so a broken scroll is always traceable to a single file.
2. **No raw hex or magic numbers in components.** Colour, spacing, and motion values resolve from `src/tokens/`.
3. **Breakpoint logic lives in hooks**, never duplicated across media queries.

<br />

## Design system

The palette was sampled from the official reveal site and formalised into a typed token layer under
`src/tokens/` — colours, spacing, typography, radii, shadows, breakpoints, z-index, and motion, all
re-exported from a single index.

```js
import tokens, { colors, motion } from "./tokens";

colors.accent.yellow          // #FFF9CB
motion.duration.videoScrub    // 3000
motion.lenis                  // full smooth-scroll config
```

**Palette**

| | Token | Value | Usage |
| :-: | :--- | :--- | :--- |
| ![](https://img.shields.io/badge/-FFF9CB?style=flat-square&color=FFF9CB) | `accent.yellow` | `#FFF9CB` | Headings, borders, CTAs |
| ![](https://img.shields.io/badge/-FFB0C4?style=flat-square&color=FFB0C4) | `accent.pink` | `#FFB0C4` | Subheads, hover glow |
| ![](https://img.shields.io/badge/-FCAF17?style=flat-square&color=FCAF17) | `accent.orange` | `#FCAF17` | Gradient title stop |
| ![](https://img.shields.io/badge/-E84C22?style=flat-square&color=E84C22) | `accent.red` | `#E84C22` | Gradient title stop |
| ![](https://img.shields.io/badge/-17172A?style=flat-square&color=17172A) | `background.secondary` | `#17172A` | Page base |
| ![](https://img.shields.io/badge/-0B0C14?style=flat-square&color=0B0C14) | `background.primary` | `#0B0C14` | Deepest dark |

**Typography** — `Long` for display caps, `Round` / `Round Bold` for body copy. Self-hosted `.woff`,
so no third-party font request leaves the page.

**Motion** — durations, easings, stagger steps, spring configs, and Lenis / ScrollTrigger defaults
live in `tokens/motion.js`, so global pacing is tuned in one file rather than across nine sections.

<br />

## Problems solved

| Problem | Resolution |
| :--- | :--- |
| Scroll felt twitchy | Lenis at `lerp 0.06` / `duration 2.4`, with lighter values on mobile and tablet |
| Pinned sections jumped on resize | ScrollTrigger `anticipatePin: 1` plus `invalidateOnRefresh` |
| White flash before React mounted | Background inlined in `index.html`; `main` held at `opacity-0` until preload resolves |
| Ghost tweens after remount | `useGSAP()` from `@gsap/react` reverts every tween on unmount |
| Desktop timings wrong on phones | `react-responsive` hooks feed per-breakpoint mask and Lenis values |

<br />

## Roadmap

- [ ] Honour `prefers-reduced-motion` — defined in the tokens, not yet wired into the choreography.
- [ ] Resolve remaining Lenis inertia vs. GSAP `scrub` contention on touch devices.
- [ ] Complete `alt` text coverage across all imagery.
- [ ] Build the additional routes specified in `PRODUCT.md` (Leonida, Media).

Issues and pull requests are welcome.

<br />

## Built with

[GSAP](https://gsap.com) · [React](https://react.dev) · [Tailwind CSS](https://tailwindcss.com) · [Vite](https://vitejs.dev) · [Lenis](https://lenis.darkroom.engineering)

<div align="center">

<br />

**COMING NOVEMBER 19, 2026**

<sub>Built by <a href="https://github.com/DEEPESH-845">@DEEPESH-845</a> · Fan project, not affiliated with Rockstar Games · All assets © Rockstar Games</sub>

</div>
