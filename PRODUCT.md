# PRODUCT.md — GTA VI Website

## Overview

Fan recreation of Rockstar Games' official GTA VI website. A multi-page, scroll-driven cinematic experience showcasing characters, trailers, and story vignettes through GSAP-powered scroll animations, video scrubbing, and parallax effects.

## Tech Stack

- **React 19** — component framework
- **Vite 6** — dev server and build
- **Tailwind CSS 4** — utility-first styling
- **GSAP 3.13** — ScrollTrigger, timeline animations, mask effects
- **Lenis 1.3** — smooth scrolling
- **react-responsive** — media query hooks
- **react-router-dom** — multi-page routing

## Register

`brand` — this is an identity-driven cinematic landing page. Design serves the brand experience, not app utility.

## Audience

Gaming enthusiasts, web animation learners, portfolio reviewers.

## Surfaces

Multi-page site with 3 routes:

### Pages

| Page | Route | Description |
|------|-------|-------------|
| Home | `/` | Full scroll experience with hero, promo cards, character bios, videos |
| Only in Leonida | `/only-in-leonida` | 8 character profiles with hero images, quotes, biographies |
| Media | `/media` | Tabbed media downloads (Featured, Videos, Screenshots, Artwork) |
| Media (Videos) | `/media/videos` | Videos tab |
| Media (Screenshots) | `/media/screenshots` | Screenshots tab |
| Media (Artwork) | `/media/artwork-wallpapers` | Artwork & Wallpapers tab |

### Home Page Sections

| Section | Component | Description |
|---------|-----------|-------------|
| NavBar | `NavBar.jsx` | Fixed nav with character menu overlay + Pre-Order button |
| Hero | `Hero.jsx` | Full-screen hero with mask animation, 10 shard fragments, video modal |
| Ultimate Edition | `PromoCard.jsx` | Promo card for Ultimate Edition |
| Story | `StorySection.jsx` | Game synopsis with parallax background |
| Vintage Vice City | `VintageViceCitySection.jsx` | Image carousel for pre-order pack |
| Promo Cards | `PromoCard.jsx` | 3 cards: Trailer 2, Only in Leonida, Media |
| Scroll Sections | Various | FirstVideo, Jason, SecondVideo, Lucia, PostCard, Final |
| Outro | `Outro.jsx` | Closing logo and date |
| Footer | `Footer.jsx` | PS5 badge, newsletter, social links, legal, ESRB |

### Only in Leonida Sections

| Section | Component | Description |
|---------|-----------|-------------|
| Page Hero | Custom | Full-viewport hero with tagline |
| Character Profiles | `CharacterProfile.jsx` | 8 characters with hero, quotes, bio, images |
| Character Hero | `CharacterHero.jsx` | Parallax hero image per character |
| Location CTA | `LocationCTA.jsx` | "Explore [Location]" button |
| Footer | `Footer.jsx` | Shared footer |

### Media Page Sections

| Section | Component | Description |
|---------|-----------|-------------|
| Media Hero | Custom | Hero with title and subtitle |
| Media Tabs | `MediaTabs.jsx` | Tab navigation (Featured/Videos/Screenshots/Artwork) |
| Media Grid | `MediaGrid.jsx` | Responsive grid of media items |
| Media Card | `MediaCard.jsx` | Individual media item with thumbnail |
| Download All | `DownloadAllButton.jsx` | ZIP download button |
| Footer | `Footer.jsx` | Shared footer |

## Shared Components

| Component | File | Description |
|-----------|------|-------------|
| Footer | `Footer.jsx` | Site-wide footer with PS5 badge, newsletter, social links |
| PreOrderModal | `PreOrderModal.jsx` | Edition selector (Standard/Ultimate) + platform selector |
| PromoCard | `PromoCard.jsx` | Reusable promo card with parallax background |
| LenisProvider | `LenisProvider.tsx` | Smooth scroll wrapper |

## Brand Colors

Already committed in `src/index.css`:

- **Yellow:** `#fff9cb` — headings, image borders, highlights
- **Pink:** `#ffb0c4` — subheadings, secondary text accents
- **Gradient:** pink-400 → red-400 → orange-400 — "Coming November 19 2026" title
- **Background:** dark purple gradient (`rgb(28,24,41)` → `rgb(17,17,23)`)

## Fonts

- **Long** (`/fonts/long.woff`) — display/headings, uppercase
- **Round** (`/fonts/round.woff`) — body text
- **Round Bold** (`/fonts/round-bold.woff`) — bold accents

## Assets

- 12 videos in `/public/videos/`
- ~44 images (SVG, WebP, PNG) in `/public/images/`
- 3 font files in `/public/fonts/`
- 10 shard PNG images for hero animation

## Known Issues

- Several images missing alt text
- Lenis smooth scroll + GSAP scrub may conflict on mobile touch
- Character data uses placeholder images for some characters
- Media items use placeholder thumbnails
