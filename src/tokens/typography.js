/**
 * GTA VI Design Tokens — Typography
 * Extracted from official Rockstar GTA VI website
 * Fonts: Long (display), Round (body), Round Bold (bold accents)
 */

export const typography = {
  // === Font Families ===
  fontFamily: {
    // Display/Headlines - Art Deco style, uppercase
    display: 'Long',
    // Body text - Rounded geometric
    body: 'Round',
    // Bold accents - Buttons, emphasis
    bold: 'Round Bold',
    // Fallback stacks
    displayStack: 'Long, system-ui, sans-serif',
    bodyStack: 'Round, system-ui, sans-serif',
    boldStack: 'Round Bold, system-ui, sans-serif',
  },

  // === Font Weights ===
  fontWeight: {
    regular: 400,
    medium: 500,
    bold: 700,
    extrabold: 800,
    black: 900,
    // Semantic aliases
    base: 500,
    heading: 800,
    button: 700,
  },

  // === Font Sizes (fluid with clamp) ===
  // Base: 18px = 1.125rem
  fontSize: {
    xs: 'clamp(0.75rem, 0.7rem + 0.25vw, 0.84375rem)',      // 12-13.5px
    sm: 'clamp(0.875rem, 0.82rem + 0.275vw, 0.984375rem)',   // 14-15.75px
    base: 'clamp(1rem, 0.95rem + 0.25vw, 1.125rem)',          // 16-18px
    md: 'clamp(1rem, 0.95rem + 0.25vw, 1.125rem)',            // 16-18px (alias)
    lg: 'clamp(1.125rem, 1.05rem + 0.375vw, 1.265625rem)',    // 18-20.25px
    xl: 'clamp(1.25rem, 1.15rem + 0.5vw, 1.51875rem)',         // 20-24.3px
    '2xl': 'clamp(1.5rem, 1.35rem + 0.75vw, 1.6875rem)',       // 24-27px
    '3xl': 'clamp(2.25rem, 1.8rem + 2.25vw, 2.8125rem)',       // 36-45px
    '4xl': 'clamp(3.5rem, 2.5rem + 5vw, 4.5rem)',              // 56-72px
    '5xl': 'clamp(5rem, 3.5rem + 7.5vw, 8rem)',               // 80-128px
    // Hero gradient title specific
    heroTitle: 'clamp(5rem, 6vw, 8rem)',                          // 80-128px
    // Nav item responsive
    navItem: 'clamp(3rem, 3.5vw, 3.5rem)',                       // 48-56px
  },

  // === Line Heights ===
  lineHeight: {
    none: 1,
    tight: 1.05,
    snug: 1.15,
    normal: 1.4,
    relaxed: 1.575,
    loose: 1.75,
    // Semantic
    heading: 1.05,        // Display text
    body: 1.5,            // Body copy
    button: 1.2,          // Buttons
    heroTitle: 0.875,     // 7rem / 8rem = 0.875
  },

  // === Letter Spacing ===
  letterSpacing: {
    tightest: '-0.03em',     // Large display
    tighter: '-0.02em',      // Headlines
    tight: '-0.01em',        // Nav items
    normal: '0',              // Body
    wide: '0.05em',           // Buttons
    wider: '0.1em',           // CTA uppercase
    widest: '0.15em',         // Small caps
  },

  // === Text Transform ===
  textTransform: {
    none: 'none',
    uppercase: 'uppercase',
    lowercase: 'lowercase',
    capitalize: 'capitalize',
    // Semantic
    heading: 'uppercase',
    nav: 'uppercase',
    button: 'uppercase',
    label: 'uppercase',
  },

  // === Font Feature Settings ===
  fontFeatureSettings: {
    default: '\"kern\" 1, \"liga\" 1, \"calt\" 1',
    tabularNums: '\"tnum\" 1',
    proportionalNums: '\"pnum\" 1',
  },

  // === Font Smoothing ===
  fontSmoothing: {
    antialiased: 'antialiased',
    grayscale: 'grayscale',
    auto: 'auto',
  },

  // === Component Typography Presets ===
  presets: {
    // Hero "Coming November 19 2026"
    heroTitle: {
      fontFamily: 'Round Bold',
      fontWeight: 800,
      fontSize: 'clamp(5rem, 6vw, 8rem)',
      lineHeight: 0.875,
      letterSpacing: 'normal',
      textTransform: 'uppercase',
      textAlign: 'center',
      background: 'linear-gradient(to right, #FFB0C4, #E84C22, #FCAF17)',
      backgroundClip: 'text',
      WebkitBackgroundClip: 'text',
      color: 'transparent',
    },

    // Navigation menu items
    navItem: {
      fontFamily: 'Long',
      fontWeight: 800,
      fontSize: 'clamp(3rem, 3.5vw, 3.5rem)',
      lineHeight: 1.05,
      letterSpacing: '-0.01em',
      textTransform: 'uppercase',
      color: '#E6E7EE',
      cursor: 'pointer',
      transition: 'color 200ms ease',
    },

    // Character names on Only in Leonida
    characterName: {
      fontFamily: 'Long',
      fontWeight: 800,
      fontSize: 'clamp(2.5rem, 3vw, 4rem)',
      lineHeight: 1.05,
      letterSpacing: '-0.02em',
      textTransform: 'uppercase',
      color: '#FFFFFF',
    },

    // Character quotes
    characterQuote: {
      fontFamily: 'Round',
      fontWeight: 500,
      fontSize: 'clamp(1.25rem, 1.5vw, 1.75rem)',
      lineHeight: 1.4,
      letterSpacing: 'normal',
      fontStyle: 'italic',
      color: '#FFF9CB',
    },

    // Body text
    body: {
      fontFamily: 'Round',
      fontWeight: 500,
      fontSize: 'clamp(1rem, 0.95rem + 0.25vw, 1.125rem)',
      lineHeight: 1.5,
      letterSpacing: 'normal',
      color: '#FFFFFF',
    },

    // Body small (meta, captions)
    bodySmall: {
      fontFamily: 'Round',
      fontWeight: 400,
      fontSize: 'clamp(0.875rem, 0.82rem + 0.275vw, 0.984375rem)',
      lineHeight: 1.5,
      letterSpacing: 'normal',
      color: '#E6E7EE',
    },

    // Button/CTA
    button: {
      fontFamily: 'Round Bold',
      fontWeight: 700,
      fontSize: 'clamp(0.875rem, 0.85rem + 0.125vw, 1rem)',
      lineHeight: 1.2,
      letterSpacing: '0.1em',
      textTransform: 'uppercase',
    },

    // Footer links
    footerLink: {
      fontFamily: 'Round',
      fontWeight: 400,
      fontSize: 'clamp(0.75rem, 0.7rem + 0.25vw, 0.875rem)',
      lineHeight: 1.5,
      letterSpacing: 'normal',
      color: '#E6E7EE',
      textTransform: 'none',
    },

    // Newsletter input
    input: {
      fontFamily: 'Round',
      fontWeight: 500,
      fontSize: 'clamp(1rem, 0.95rem + 0.25vw, 1.125rem)',
      lineHeight: 1.5,
      letterSpacing: 'normal',
      color: '#FFFFFF',
      background: 'transparent',
      borderColor: 'rgba(255,255,255,0.3)',
    },
  },
};

export default typography;
