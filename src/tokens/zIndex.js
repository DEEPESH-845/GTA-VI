/**
 * GTA VI Design Tokens — Z-Index Hierarchy
 * Strict layering system matching official site behavior
 */

export const zIndex = {
  // === Base Layers ===
  base: 0,
  content: 1,
  raised: 10,

  // === Component Layers ===
  dropdown: 50,
  tooltip: 60,
  popover: 70,
  modal: 80,

  // === Navigation ===
  navBar: 100,              // Fixed header
  navOverlay: 90,           // Mega-menu background
  navContent: 95,           // Mega-menu content
  mobileNav: 200,

  // === Scroll/Pinned Sections ===
  pinnedSection: 50,        // ScrollTrigger pin-spacer
  pinnedContent: 55,        // Content inside pinned
  parallaxBg: 5,            // Parallax backgrounds
  parallaxFg: 15,           // Parallax foreground

  // === Video Modals ===
  videoBackdrop: 9990,
  videoModal: 9999,
  videoIframe: 9999,

  // === Preloader ===
  preloader: 99999,
  preloaderLogo: 99999,
  preloaderGlow: 99998,

  // === Special ===
  cursor: 100000,           // Custom cursor
  toast: 100001,
  debug: 100002,

  // === Semantic Aliases ===
  semantic: {
    // Layout
    background: 0,
    content: 1,
    overlay: 50,

    // Navigation
    header: 100,
    megaMenu: 90,
    megaMenuContent: 95,

    // Scroll
    pinned: 50,
    parallax: 5,

    // Modals
    videoBackdrop: 9990,
    video: 9999,

    // Loading
    preloader: 99999,

    // UI
    tooltip: 60,
    dropdown: 50,
    toast: 100001,
  },
};

export default zIndex;
