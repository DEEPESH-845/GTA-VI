/**
 * GTA VI Design Tokens — Border Radius
 */

export const borderRadius = {
  // === Core Values ===
  none: '0',
  xs: '0.125rem',    // 2px
  sm: '0.25rem',     // 4px
  md: '0.375rem',    // 6px
  lg: '0.5rem',      // 8px
  xl: '0.75rem',     // 12px
  '2xl': '1rem',       // 16px
  '3xl': '1.5rem',     // 24px
  full: '9999px',     // Fully rounded

  // === Design System Specific (from DESIGN.md) ===
  pill: '1.96875rem',  // 31.5px - DESIGN.md radius.xs
  round: '9999px',     // 1000px - DESIGN.md radius.sm
  full: '9999px',      // 9999px - DESIGN.md radius.md

  // === Component Specific ===
  button: '1.96875rem',    // Pill buttons
  card: '0.75rem',        // 12px - card corners
  modal: '1rem',          // 16px - modal corners
  input: '0.5rem',        // 8px - input fields
  avatar: '9999px',       // Circular avatars
  badge: '9999px',        // Badge/pill tags
  video: '0.75rem',       // 12px - video thumbnails
  image: '0.5rem',        // 8px - images

  // === Semantic Aliases ===
  semantic: {
    none: '0',
    tight: '0.125rem',
    base: '0.375rem',
    rounded: '0.5rem',
    loose: '0.75rem',
    pill: '1.96875rem',
    circle: '9999px',
  },
};

export default borderRadius;
