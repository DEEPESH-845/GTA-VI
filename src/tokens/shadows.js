/**
 * GTA VI Design Tokens — Shadows & Glows
 * Extracted from official site visual language
 */

export const shadows = {
  none: 'none',

  // Pink glow - primary brand shadow (official value)
  glow: {
    sm: '0 1px 20px rgba(255, 179, 199, 0.2)',
    base: '0 2px 71.16px rgba(255, 179, 199, 0.404)',
    lg: '0 4px 100px rgba(255, 179, 199, 0.5)',
    xl: '0 8px 150px rgba(255, 179, 199, 0.6)',
    inset: 'inset 0 2px 40px rgba(255, 179, 199, 0.15)',
  },

  // Standard elevation shadows
  elevation: {
    1: '0 1px 3px rgba(0, 0, 0, 0.3)',
    2: '0 4px 12px rgba(0, 0, 0, 0.35)',
    3: '0 8px 24px rgba(0, 0, 0, 0.4)',
    4: '0 16px 48px rgba(0, 0, 0, 0.45)',
    5: '0 24px 64px rgba(0, 0, 0, 0.5)',
  },

  // Modal / overlay shadows
  modal: {
    sm: '0 4px 20px rgba(0, 0, 0, 0.4)',
    base: '0 12px 40px rgba(0, 0, 0, 0.5)',
    lg: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
    xl: '0 35px 60px -15px rgba(0, 0, 0, 0.6)',
  },

  // Card shadows
  card: {
    base: '0 2px 16px rgba(0, 0, 0, 0.3)',
    hover: '0 8px 32px rgba(0, 0, 0, 0.4)',
    active: '0 1px 8px rgba(0, 0, 0, 0.4)',
    border: '0 0 0 1px rgba(255, 255, 255, 0.1)',
  },

  // Button shadows
  button: {
    primary: '0 2px 8px rgba(255, 249, 203, 0.3)',
    primaryHover: '0 4px 16px rgba(255, 249, 203, 0.4)',
    secondary: '0 2px 8px rgba(0, 0, 0, 0.3)',
  },

  // Input shadows
  input: {
    base: '0 0 0 1px rgba(255, 255, 255, 0.1)',
    focus: '0 0 0 2px #FFF9CB',
    error: '0 0 0 2px #E84C22',
  },

  // Focus ring
  focus: {
    base: '0 0 0 2px #FFF9CB',
    inset: 'inset 0 0 0 2px #FFF9CB',
  },

  // Semantic aliases
  semantic: {
    none: 'none',
    sm: '0 1px 3px rgba(0, 0, 0, 0.3)',
    base: '0 4px 12px rgba(0, 0, 0, 0.35)',
    md: '0 8px 24px rgba(0, 0, 0, 0.4)',
    lg: '0 16px 48px rgba(0, 0, 0, 0.45)',
    xl: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
    glow: '0 2px 71.16px rgba(255, 179, 199, 0.404)',
    card: '0 2px 16px rgba(0, 0, 0, 0.3)',
    cardHover: '0 8px 32px rgba(0, 0, 0, 0.4)',
    modal: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
    focus: '0 0 0 2px #FFF9CB',
  },
};

export default shadows;
