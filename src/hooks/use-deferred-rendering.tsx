/**
 * Hook to defer non-critical work until the browser is idle
 * Helps reduce main-thread blocking and improve Time to Interactive
 */

import { useEffect, useRef, useState } from "react";

interface IdleRequestOptions {
  timeout?: number;
}

type IdleRequestCallback = () => void;

type IdleWindow = Window & {
  requestIdleCallback?: (
    callback: IdleRequestCallback,
    options?: IdleRequestOptions,
  ) => number;
  cancelIdleCallback?: (id: number) => void;
};

export const useIdleCallbackTask = (callback: () => void) => {
  const idRef = useRef<number>();
  const callbackRef = useRef(callback);

  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  useEffect(() => {
    const win = window as IdleWindow;

    if (win.requestIdleCallback) {
      idRef.current = win.requestIdleCallback(callbackRef.current, {
        timeout: 2000,
      });
    } else {
      idRef.current = window.setTimeout(callbackRef.current, 0) as unknown as number;
    }

    return () => {
      if (typeof idRef.current === "number") {
        if (win.cancelIdleCallback) {
          win.cancelIdleCallback(idRef.current);
        } else {
          clearTimeout(idRef.current);
        }
      }
    };
  }, []);
};

/**
 * Hook for deferred rendering of non-critical content below the fold
 */
export const useLazyRender = (triggerOnceInView = true) => {
  const ref = useRef<HTMLDivElement>(null);
  const [shouldRender, setShouldRender] = useState(false);
  const hasRenderedRef = useRef(false);

  useEffect(() => {
    if (!ref.current || (triggerOnceInView && hasRenderedRef.current)) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldRender(true);
          if (triggerOnceInView) {
            hasRenderedRef.current = true;
            observer.unobserve(entry.target);
          }
        } else if (!triggerOnceInView) {
          setShouldRender(false);
        }
      },
      { rootMargin: "50px" },
    );

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [triggerOnceInView]);

  return [ref, shouldRender] as const;
};
