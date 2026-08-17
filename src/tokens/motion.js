/**
 * GTA VI Design Tokens — Motion & Animation
 * Durations, easings, spring configs matching official site
 */

export const motion = {
  // === Duration Scale ===
  duration: {
    instant: 0,              // 0ms
    fastest: 75,             // 75ms - micro interactions
    fast: 150,               // 150ms - DESIGN.md instant
    normal: 200,             // 200ms - DESIGN.md fast
    standard: 300,           // 300ms - standard transition
    slow: 500,               // 500ms - DESIGN.md normal
    slower: 800,             // 800ms - section reveals
    slowest: 1200,           // 1.2s - complex sequences
    preloader: 2150,         // 2.15s - preloader loop
    navOpen: 900,            // 0.9s - nav menu open
    navClose: 700,           // 0.7s - nav menu close
    navStagger: 80,          // 0.08s - nav item stagger
    videoScrub: 3000,        // 3s - video scrub duration
    parallax: 2400,          // 2.4s - Lenis duration
  },

  // === Easing Curves ===
  easing: {
    // CSS cubic-bezier values
    linear: 'linear',
    easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
    easeOut: 'cubic-bezier(0, 0, 0.2, 1)',
    easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
    
    // Material-style
    standard: 'cubic-bezier(0.4, 0, 0.2, 1)',
    emphasized: 'cubic-bezier(0.4, 0, 0.6, 1)',
    decelerated: 'cubic-bezier(0, 0, 0.2, 1)',
    accelerated: 'cubic-bezier(0.4, 0, 1, 1)',

    // GSAP-specific (string names)
    gsap: {
      power1: 'power1',
      power2: 'power2',
      power3: 'power3',
      power4: 'power4',
      power1In: 'power1.in',
      power1Out: 'power1.out',
      power1InOut: 'power1.inOut',
      power2In: 'power2.in',
      power2Out: 'power2.out',
      power2InOut: 'power2.inOut',
      power3In: 'power3.in',
      power3Out: 'power3.out',
      power3InOut: 'power3.inOut',
      power4In: 'power4.in',
      power4Out: 'power4.out',
      power4InOut: 'power4.inOut',
      expo: 'expo',
      expoIn: 'expo.in',
      expoOut: 'expo.out',
      expoInOut: 'expo.inOut',
      circ: 'circ',
      circIn: 'circ.in',
      circOut: 'circ.out',
      circInOut: 'circ.inOut',
      back: 'back',
      elastic: 'elastic',
      bounce: 'bounce',
      rough: 'rough',
      slow: 'slow',
      none: 'none',
    },

    // Official site specific easings
    custom: {
      // Preloader background pulse
      preloaderBg: 'cubic-bezier(0.455, 0.03, 0.515, 0.955)',
      // Preloader shimmer sweep
      preloaderShimmer: 'cubic-bezier(0.77, 0, 0.175, 1)',
      // Hero mask reveal
      heroMask: 'power1.inOut',
      // Nav menu
      navOpen: 'power4.out',
      navClose: 'power4.inOut',
      navItemIn: 'power3.out',
      navItemOut: 'power2.in',
      // Video scrub
      videoScrub: 'power1.inOut',
      // Parallax
      parallax: 'power1.inOut',
      // Scroll smooth (Lenis)
      lenis: 'cubic-bezier(0.4, 0, 0.2, 1)',
    },

    // Semantic
    semantic: {
      instant: 'linear',
      micro: 'cubic-bezier(0.4, 0, 0.2, 1)',
      standard: 'cubic-bezier(0.4, 0, 0.2, 1)',
      emphasized: 'cubic-bezier(0.4, 0, 0.6, 1)',
      spring: 'cubic-bezier(0.455, 0.03, 0.515, 0.955)',
      shimmer: 'cubic-bezier(0.77, 0, 0.175, 1)',
      hero: 'power1.inOut',
      nav: 'power3.out',
      video: 'power1.inOut',
      scroll: 'cubic-bezier(0.4, 0, 0.2, 1)',
    },
  },

  // === Stagger Configurations ===
  stagger: {
    navItems: 0.08,           // Nav menu items
    gridItems: 0.1,           // Grid cards
    listItems: 0.05,          // List items
    characterCards: 0.12,     // Character profiles
    mediaCards: 0.08,         // Media grid
    sectionChildren: 0.15,    // Section elements
  },

  // === Spring Configurations (for Framer Motion / GSAP) ===
  spring: {
    gentle: { stiffness: 120, damping: 14, mass: 1 },
    smooth: { stiffness: 280, damping: 20, mass: 1 },
    snappy: { stiffness: 400, damping: 25, mass: 1 },
    stiff: { stiffness: 500, damping: 30, mass: 1 },
    bouncy: { stiffness: 600, damping: 20, mass: 1 },
    wobbly: { stiffness: 800, damping: 15, mass: 1 },
    // Official site feel
    hero: { stiffness: 300, damping: 22, mass: 1 },
    nav: { stiffness: 450, damping: 28, mass: 1 },
    card: { stiffness: 350, damping: 24, mass: 1 },
    modal: { stiffness: 400, damping: 26, mass: 1 },
    tooltip: { stiffness: 500, damping: 30, mass: 0.5 },
  },

  // === Lenis Smooth Scroll Config ===
  lenis: {
    lerp: 0.06,
    duration: 2.4,
    smoothWheel: true,
    syncTouch: true,
    syncTouchLerp: 0.06,
    touchInertiaExponent: 0.9,
    touchMultiplier: 0.8,
    wheelMultiplier: 0.6,
    gestureOrientation: 'vertical',
    autoRaf: true,
    // Responsive overrides
    mobile: {
      lerp: 0.08,
      duration: 1.8,
      wheelMultiplier: 0.5,
      touchMultiplier: 1,
    },
    tablet: {
      lerp: 0.07,
      duration: 2.1,
      wheelMultiplier: 0.55,
      touchMultiplier: 0.9,
    },
  },

  // === ScrollTrigger Defaults ===
  scrollTrigger: {
    scrub: 1,
    scrubTrue: true,
    pinType: 'fixed',
    anticipatePin: 1,
    invalidateOnRefresh: true,
    smoothChildTiming: true,
    // Default start/end
    start: 'top 80%',
    end: 'bottom 20%',
    // Pin configs
    pin: {
      spacer: true,
      pinSpacing: true,
    },
  },

  // === Intersection Observer Configs ===
  intersection: {
    fadeIn: {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px',
    },
    lazyLoad: {
      threshold: 0.01,
      rootMargin: '100px 0px',
    },
    parallax: {
      threshold: 0,
      rootMargin: '0px',
    },
  },

  // === Reduced Motion ===
  reducedMotion: {
    durationMultiplier: 0.01,
    disableParallax: true,
    disableScrollAnimations: true,
    disableHoverAnimations: false,
    disableVideoAutoplay: true,
  },
};

export default motion;
