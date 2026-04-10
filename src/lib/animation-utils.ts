/**
 * Animation System
 * Handles performance-optimized animations based on user preferences and device type
 */

// ============================================================================
// CORE DETECTION FUNCTIONS
// ============================================================================

/**
 * Check if user has enabled "reduce motion" preference
 * Respects accessibility settings
 */
export const prefersReducedMotion = (): boolean => {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
};

/**
 * Check if device is mobile (viewport < 768px)
 */
export const isMobileDevice = (): boolean => {
  if (typeof window === "undefined") return false;
  return window.innerWidth < 768;
};

/**
 * Check if user is on slow network or data-saving mode
 */
const isSlowConnection = (): boolean => {
  if (typeof window === "undefined") return false;
  const connection = (navigator as NavigatorWithConnection).connection;
  return connection?.saveData === true;
};

// ============================================================================
// ANIMATION CONFIGURATION FUNCTIONS
// ============================================================================

/**
 * Get optimized animation duration based on device and user preferences
 * Mobile: 70% of desktop duration
 * Reduced motion: 0 (no animation)
 */
export const getAnimationDuration = (defaultDuration: number): number => {
  if (prefersReducedMotion()) return 0;
  if (isMobileDevice()) return Math.max(defaultDuration * 0.7, 200);
  return defaultDuration;
};

/**
 * Get optimized stagger delay for batch animations
 * Mobile: 60% of desktop delay
 * Reduced motion: 0
 */
export const getStaggerDelay = (defaultDelay: number): number => {
  if (prefersReducedMotion()) return 0;
  if (isMobileDevice()) return defaultDelay * 0.6;
  return defaultDelay;
};

/**
 * Check if animations should play on component mount
 * Returns false if:
 * - User prefers reduced motion
 * - User is on slow/data-saving connection
 */
export const shouldAnimateOnMount = (): boolean => {
  if (typeof window === "undefined") return false;
  if (prefersReducedMotion()) return false;
  if (isSlowConnection()) return false;
  return true;
};

/**
 * Get mobile-optimized animation configuration
 */
export const batchAnimationConfig = {
  staggerChildren: isMobileDevice() ? 0.08 : 0.12,
  delayChildren: isMobileDevice() ? 0.05 : 0.08,
};

/**
 * Get transition configuration optimized for device
 * 
 * @param baseEase - Easing function (default smoothEase)
 * @returns Object with duration and easing
 */
export const getMobileOptimizedTransition = (
  baseEase: number[] = [0.22, 1, 0.36, 1]
) => {
  const isMobile = isMobileDevice();
  const shouldAnimate = shouldAnimateOnMount();

  return {
    duration: shouldAnimate ? (isMobile ? 0.4 : 0.6) : 0,
    ease: baseEase,
  };
};

/**
 * Create animation variants for InView animations
 * Useful for deferring animations until element enters viewport
 */
export const createInViewVariants = (
  visibleVariant: unknown,
  hiddenVariant: unknown = { opacity: 0 }
) => ({
  hidden: hiddenVariant,
  visible: visibleVariant,
});

// ============================================================================
// TYPE DEFINITIONS
// ============================================================================

/**
 * Extended Navigator interface with connection info
 */
interface NavigatorWithConnection extends Navigator {
  connection?: {
    saveData: boolean;
    effectiveType: string;
    downlink: number;
  };
}
