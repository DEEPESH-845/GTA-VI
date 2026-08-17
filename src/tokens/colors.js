/**
 * GTA VI Design Tokens — Colors
 * Extracted from official Rockstar GTA VI website
 * https://www.rockstargames.com/VI
 *
 * All values are semantically named. No raw hex values in components.
 */

export const colors = {
  // === Background System ===
  background: {
    primary: '#0B0C14',           // Deepest dark - page base
    secondary: '#17172A',         // Main content background
    gradient: [
      'rgb(28, 24, 41)',   // 0%   - #1C1829
      'rgb(27, 24, 40)',   // 8.61%
      'rgb(25, 23, 36)',   // 17.21%
      'rgb(22, 21, 32)',   // 25.82%
      'rgb(20, 19, 28)',   // 34.42%
      'rgb(18, 18, 24)',   // 43.03%
      'rgb(17, 17, 23)',   // 51.63% - #111117
    ],
    gradientAngle: '223.17deg',
    overlay: 'rgba(23, 23, 42, 0.9)',      // Video modal backdrop
    radialHighlight: 'radial-gradient(ellipse, #111117 20%, transparent 70%)',
    animatedGradient: 'linear-gradient(135deg, #1E2A52 0%, #6E4B91 100%)',
    entranceMask: 'radial-gradient(circle at 50% 100vh, black 0%, transparent 0%)',
  },

  // === Text System ===
  text: {
    primary: '#FFFFFF',              // Headings, body
    secondary: '#E6E7EE',            // Navigation items, meta text
    muted: '#CCC2F5',                // Secondary descriptions
    accent: '#FFF9CB',               // Yellow highlights, gradient titles
    inverse: '#070810',              // On-yellow text
    gradient: {
      from: '#FFB0C4',               // Pink-400
      via: '#E84C22',                // Red-400 (Rockstar red)
      to: '#FCAF17',                 // Orange-400 (Rockstar orange)
    },
  },

  // === Accent / Brand Colors ===
  accent: {
    yellow: '#FFF9CB',               // Primary accent - CTAs, borders, highlights
    pink: '#FFB0C4',                 // Subheadings, hover glows
    orange: '#FCAF17',               // Rockstar orange
    red: '#E84C22',                  // Rockstar red
    blue: '#003791',                 // PlayStation platform blue
  },

  // === Border System ===
  border: {
    subtle: 'rgba(255, 255, 255, 0.1)',   // Nav divider, card borders
    accent: '#FFF9CB',                     // Focus rings, active states
    glow: 'rgba(255, 179, 199, 0.404)',    // Pink glow shadow
  },

  // === UI State Colors ===
  state: {
    hover: 'rgba(255, 255, 255, 0.08)',   // Card hover backgrounds
    active: 'rgba(255, 255, 255, 0.15)',  // Pressed states
    focus: '#FFF9CB',                      // Focus visible outline
    disabled: 'rgba(255, 255, 255, 0.3)', // Disabled text/opacity
    selection: 'rgba(255, 249, 203, 0.3)', // ::selection background
  },

  // === Preloader Specific ===
  preloader: {
    bgDark: '#3A3A3A',               // Logo mask background (dark phase)
    bgLight: '#B0B0B0',              // Logo mask background (light pulse)
    glowBase: 'rgba(176, 176, 176, 0.5)', // Glow drop-shadow
    shimmerStart: 'rgba(255, 255, 255, 0.9)',
    shimmerEnd: 'rgba(255, 255, 255, 0.3)',
    overlay: '#17172A',              // Full-screen overlay
  },

  // === Semantic Aliases (for component usage) ===
  semantic: {
    // Backgrounds
    'bg-page': '#0B0C14',
    'bg-content': '#17172A',
    'bg-overlay': 'rgba(23, 23, 42, 0.9)',
    'bg-card': 'rgba(255, 255, 255, 0.02)',
    'bg-card-hover': 'rgba(255, 255, 255, 0.08)',

    // Text
    'text-primary': '#FFFFFF',
    'text-secondary': '#E6E7EE',
    'text-muted': '#CCC2F5',
    'text-accent': '#FFF9CB',
    'text-inverse': '#070810',

    // Borders
    'border-subtle': 'rgba(255, 255, 255, 0.1)',
    'border-accent': '#FFF9CB',
    'border-focus': '#FFF9CB',

    // Interactive
    'btn-primary-bg': '#FFF9CB',
    'btn-primary-text': '#070810',
    'btn-primary-hover': '#FFE8A0',
    'btn-secondary-bg': 'transparent',
    'btn-secondary-text': '#FFFFFF',
    'btn-secondary-border': 'rgba(255, 255, 255, 0.3)',
    'link-hover': '#FFF9CB',

    // Gradients
    'gradient-title': 'linear-gradient(to right, #FFB0C4, #E84C22, #FCAF17)',
    'gradient-bg': 'linear-gradient(223.17deg, rgb(28,24,41) 0%, rgb(17,17,23) 51.63%)',
    'gradient-radial': 'radial-gradient(ellipse, #111117 20%, transparent 70%)',
    'gradient-animated': 'linear-gradient(135deg, #1E2A52 0%, #6E4B91 100%)',

    // Shadows
    'shadow-glow': '0 2px 71.16px rgba(255, 179, 199, 0.404)',
    'shadow-modal': '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
    'shadow-card': '0 4px 20px rgba(0, 0, 0, 0.3)',
  },
};

export default colors;
