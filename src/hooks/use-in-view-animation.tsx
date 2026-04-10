/**
 * Hook for deferring animations until element is in view
 * Reduces main-thread work on initial page load
 */

import { useEffect, useRef, useState } from "react";

interface UseInViewAnimationOptions {
  threshold?: number;
  triggerOnce?: boolean;
  rootMargin?: string;
}

export const useInViewAnimation = (
  options: UseInViewAnimationOptions = {},
): [React.RefObject<HTMLDivElement>, boolean] => {
  const { threshold = 0.1, triggerOnce = true, rootMargin = "50px" } = options;

  const ref = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);
  const [hasTriggered, setHasTriggered] = useState(false);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          if (triggerOnce) {
            setHasTriggered(true);
            observer.unobserve(entry.target);
          }
        } else if (!triggerOnce) {
          setIsInView(false);
        }
      },
      {
        threshold,
        rootMargin,
      },
    );

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold, triggerOnce, rootMargin]);

  // Return true if we should show animation
  const shouldAnimate = triggerOnce ? hasTriggered : isInView;

  return [ref, shouldAnimate];
};
