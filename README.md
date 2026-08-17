<div align="center">

<img src="public/readme/banner.jpg" alt="Grand Theft Auto VI — scroll-driven landing page" width="100%" />

<br />
<br />

# GRAND THEFT AUTO VI

### The scrollbar is the playhead.

A cinematic landing page where nothing autoplays and nothing fades in on a timer.
You scroll, the trailer plays. You scroll back, it rewinds — frame for frame.

<br />

**[▶ Live demo](#)** · [Report a bug](https://github.com/DEEPESH-845/GTA-VI/issues)

<br />

<img src="https://img.shields.io/badge/React-19-000?style=flat-square&logo=react&logoColor=61DAFB" />
<img src="https://img.shields.io/badge/GSAP-3.13-000?style=flat-square&logo=greensock&logoColor=88CE02" />
<img src="https://img.shields.io/badge/Tailwind-4.1-000?style=flat-square&logo=tailwindcss&logoColor=38BDF8" />
<img src="https://img.shields.io/badge/Vite-6-000?style=flat-square&logo=vite&logoColor=FFD62E" />
<img src="https://img.shields.io/badge/Lenis-1.3-000?style=flat-square&logo=javascript&logoColor=F7DF1E" />

</div>

<br />

---

## The idea

Rockstar dropped the trailer. I wanted to know whether a browser could hold the same weight — so I
rebuilt the reveal as a nine-act sequence you *drive* instead of watch.

Two trailers are scrubbed by scroll position. The logo doesn't fade in, it gets carved out of black.
Jason and Lucia arrive on their own parallax rails. Scroll to the end and Vice City signs off with a
date. Every beat is reversible, because the timeline is bound to the scrollbar, not the clock.

Roughly 60 assets, one preloader that hides all of them, and zero white flash on first paint.

<br />

## Run it

```bash
git clone https://github.com/DEEPESH-845/GTA-VI.git
cd GTA-VI && npm install && npm run dev
```

Open **localhost:5173** and scroll slowly on the first pass. Pacing is the whole point.

<br />

## Under the hood

**React 19** for structure, **GSAP + ScrollTrigger** for the choreography, **Lenis** for the smooth
scroll, **Tailwind 4** for styling, **Vite 6** for the build.

The rules I held to:

- **One section, one file, one timeline.** A broken scroll is always traceable to a single file.
- **No magic numbers in components.** Colour, spacing, and motion resolve from a token layer.
- **Breakpoints live in hooks**, not scattered across media queries.

| # | Act | What happens |
| :-: | :--- | :--- |
| 00 | Preload | Shimmering logo mask holds the door until the assets land |
| 01 | Hero | Logo mask scales down, carving the trailer out of black |
| 02 | Trailer I | Pinned. Scroll speed *is* playback speed |
| 03 | Jason Duval | Bio panel, imagery drifting on a parallax rail |
| 04 | Trailer II | Second scrubbed cut, cross-faded from the bio |
| 05 | Lucia Caminos | Mirrored bio, trailer II fades out behind her |
| 06 | Postcard | Leonida Keys clip under an animated gradient, tilt on hover |
| 07 | Final cut | Pinned close-out, eased into a clean lock |
| 08 | Outro | Logo lockup — **November 19, 2026** |

<br />

## What it cost me

| The problem | The fix |
| :--- | :--- |
| Scroll felt twitchy | Retuned Lenis interpolation, lighter values on touch |
| Pinned sections jumped on resize | `anticipatePin` + recalculating on refresh |
| White flash before React booted | Background painted in the HTML, app held at zero opacity |
| Ghost tweens after remount | `useGSAP()` reverts every tween on unmount |
| Desktop timings felt wrong on phones | Per-breakpoint values, resolved in hooks |

Still on the list: `prefers-reduced-motion` wiring, full `alt` coverage, and the Leonida / Media routes.

<br />

## Credit where it's due

A non-commercial fan project, built for the love of the craft. All footage, logos, and artwork are
the property of **Rockstar Games**.

<div align="center">

<br />

**COMING NOVEMBER 19, 2026**

<sub>Built by <a href="https://github.com/DEEPESH-845">@DEEPESH-845</a> · Not affiliated with Rockstar Games</sub>

</div>
