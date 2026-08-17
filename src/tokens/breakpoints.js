/**
 * GTA VI Design Tokens — Breakpoints
 * Tailwind v4 @theme compatible + JS utilities
 */

export const breakpoints = {
  // === Raw Values (rem) ===
  xs: '20rem',       // 320px
  sm: '40rem',       // 640px
  md: '48rem',       // 768px
  lg: '64rem',       // 1024px
  xl: '80rem',       // 1280px
  '2xl': '96rem',      // 1536px
  '3xl': '120rem',     // 1920px
  '4xl': '144rem',     // 2304px

  // === Pixel Values ===
  px: {
    xs: 320,
    sm: 640,
    md: 768,
    lg: 1024,
    xl: 1280,
    '2xl': 1536,
    '3xl': 1920,
    '4xl': 2304,
  },

  // === Media Query Strings (for JS useMediaQuery) ===
  mediaQuery: {
    xs: '(min-width: 20rem)',
    sm: '(min-width: 40rem)',
    md: '(min-width: 48rem)',
    lg: '(min-width: 64rem)',
    xl: '(min-width: 80rem)',
    '2xl': '(min-width: 96rem)',
    '3xl': '(min-width: 120rem)',
    '4xl': '(min-width: 144rem)',

    // Max-width queries
    'max-xs': '(max-width: 19.9375rem)',
    'max-sm': '(max-width: 39.9375rem)',
    'max-md': '(max-width: 47.9375rem)',
    'max-lg': '(max-width: 63.9375rem)',
    'max-xl': '(max-width: 79.9375rem)',
    'max-2xl': '(max-width: 95.9375rem)',

    // Range queries
    'mobile-only': '(max-width: 47.9375rem)',
    'tablet-only': '(min-width: 48rem) and (max-width: 63.9375rem)',
    'desktop-only': '(min-width: 64rem)',
    'tablet-and-up': '(min-width: 48rem)',
    'desktop-and-up': '(min-width: 64rem)',

    // Orientation
    portrait: '(orientation: portrait)',
    landscape: '(orientation: landscape)',

    // High DPI
    retina: '(-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi)',
    highDPI: '(-webkit-min-device-pixel-ratio: 1.5), (min-resolution: 144dpi)',

    // Motion
    reduceMotion: '(prefers-reduced-motion: reduce)',
    noReduceMotion: '(prefers-reduced-motion: no-preference)',

    // Color scheme
    dark: '(prefers-color-scheme: dark)',
    light: '(prefers-color-scheme: light)',

    // Hover capability
    hover: '(hover: hover)',
    noHover: '(hover: none)',
    pointerFine: '(pointer: fine)',
    pointerCoarse: '(pointer: coarse)',
  },

  // === Container Queries (future-proof) ===
  container: {
    sm: '320px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
  },

  // === Semantic Breakpoint Names ===
  semantic: {
    mobile: 'xs',
    tablet: 'md',
    laptop: 'lg',
    desktop: 'xl',
    wide: '2xl',
    ultraWide: '3xl',
  },

  // === Hero Mask Responsive Settings (from constants/index.js) ===
  heroMask: {
    mobile: { maxWidth: 768, initialMaskPos: '50% -1500vh', initialMaskSize: '3100% 3100%', maskPos: '50% 7vh', maskSize: '50% 50%' },
    tablet: { minWidth: 769, maxWidth: 1024, initialMaskPos: '50% -1700vh', initialMaskSize: '3500% 3500%', maskPos: '50% 17vh', maskSize: '30% 30%' },
    desktop: { minWidth: 1025, initialMaskPos: '50% 22%', initialMaskSize: '3500% 3500%', maskPos: '50% 22%', maskSize: '20% 20%' },
  },
};

export default breakpoints;
