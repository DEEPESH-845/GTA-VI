/**
 * GTA VI Design Tokens — Main Export
 * Single entry point for all design tokens
 */

export * from './colors';
export * from './typography';
export * from './spacing';
export * from './motion';
export * from './zIndex';
export * from './breakpoints';
export * from './shadows';
export * from './borderRadius';

// Default export for convenience
import colors from './colors';
import typography from './typography';
import spacing from './spacing';
import motion from './motion';
import zIndex from './zIndex';
import breakpoints from './breakpoints';
import shadows from './shadows';
import borderRadius from './borderRadius';

export default {
  colors,
  typography,
  spacing,
  motion,
  zIndex,
  breakpoints,
  shadows,
  borderRadius,
};
