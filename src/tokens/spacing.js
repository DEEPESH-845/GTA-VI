/**
 * GTA VI Design Tokens — Spacing
 * Based on 15.75px (0.9875rem) base unit from DESIGN.md
 * All values in rem for scalability
 */

export const spacing = {
  // === Base Unit ===
  base: '0.9875rem', // 15.75px

  // === Scale (multiply base) ===
  // space.1 = 15.75px
  // space.2 = 27px  
  // space.3 = 31.5px
  // space.4 = 45px
  // space.5 = 54px
  // space.6 = 58.5px
  1: '0.9875rem',    // 15.75px
  2: '1.6875rem',   // 27px
  3: '1.96875rem',  // 31.5px
  4: '2.8125rem',   // 45px
  5: '3.375rem',    // 54px
  6: '3.65625rem',  // 58.5px

  // === Extended Scale ===
  7: '4.21875rem',  // 67.5px
  8: '4.95rem',     // 79.2px
  9: '5.625rem',     // 90px
  10: '6.75rem',     // 108px
  12: '8.1rem',      // 129.6px
  14: '9.45rem',     // 151.2px
  16: '10.8rem',     // 172.8px
  20: '13.5rem',     // 216px
  24: '16.2rem',     // 259.2px
  28: '18.9rem',     // 302.4px
  32: '21.6rem',     // 345.6px

  // === Semantic Aliases ===
  semantic: {
    // Component spacing
    xs: '0.5rem',      // 8px - tight gaps
    sm: '0.75rem',     // 12px - small gaps
    md: '1rem',        // 16px - default gap
    lg: '1.5rem',      // 24px - medium gaps
    xl: '2rem',        // 32px - large gaps
    '2xl': '3rem',       // 48px - section gaps
    '3xl': '4rem',       // 64px - major sections

    // Page layout
    pagePaddingX: 'clamp(1.25rem, 3vw, 4rem)',    // 20-64px responsive
    pagePaddingY: '6rem',                         // 96px vertical rhythm
    sectionGap: '6rem',                           // Between major sections
    containerMax: '120rem',                       // 1920px max width

    // Component specific
    cardPadding: '2rem',                          // 32px
    cardGap: '1.5rem',                            // 24px
    buttonPaddingX: '2rem',                       // 32px
    buttonPaddingY: '0.875rem',                   // 14px
    inputPaddingX: '1.25rem',                     // 20px
    inputPaddingY: '0.875rem',                    // 14px
    navItemGap: '1.5rem',                         // 24px between nav items
    heroContentGap: '2.5rem',                     // 40px in hero
    footerGap: '3rem',                            // 48px footer sections
  },

  // === Viewport Units ===
  viewport: {
    vw: '100vw',
    dvw: '100dvw',
    svw: '100svw',
    lvw: '100lvw',
    vh: '100vh',
    dvh: '100dvh',
    svh: '100svh',
    lvh: '100lvh',
  },
};

export default spacing;
