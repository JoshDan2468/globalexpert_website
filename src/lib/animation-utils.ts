/**
 * Animation utility for performance optimization
 * Detects user preferences and defers animations
 */

// Check if user prefers reduced motion
export const prefersReducedMotion = (): boolean => {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
};

// Get animation duration based on user preferences
export const getAnimationDuration = (defaultDuration: number): number => {
  return prefersReducedMotion() ? 0 : defaultDuration;
};

// Variant for potentially enabling animations only on InView
export const createInViewVariants = (
  visibleVariant: unknown,
  hiddenVariant: unknown = { opacity: 0 }
) => ({
  hidden: hiddenVariant,
  visible: visibleVariant,
});

// Detect if component should render animations based on:
// 1. User preferences (prefers-reduced-motion)
// 2. Device capability (not-reduced-data)  
export const shouldAnimateOnMount = (): boolean => {
  if (typeof window === "undefined") return false;
  
  // Check prefers-reduced-motion
  if (prefersReducedMotion()) return false;
  
  // Check save-data preference (for users on slow connections)
  const connection = (navigator as NavigatorWithConnection).connection;
  if (connection?.saveData) return false;
  
  return true;
};

// Type for navigator with connection info
interface NavigatorWithConnection extends Navigator {
  connection?: {
    saveData: boolean;
    effectiveType: string;
    downlink: number;
  };
}

// Batch animation configuration that respects user preferences
export const batchAnimationConfig = (
  staggerChildren: number = 0.1,
  delayChildren: number = 0
) => {
  const shouldAnimate = shouldAnimateOnMount();
  
  return {
    transition: {
      staggerChildren: shouldAnimate ? staggerChildren : 0,
      delayChildren: shouldAnimate ? delayChildren : 0,
    },
  };
};
