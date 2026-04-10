import { useEffect } from "react";
import AppRouter from "./router/AppRouter";

/**
 * Global Image Optimization
 *
 * This component automatically optimizes ALL images on the page for better performance:
 * - Makes images load asynchronously (doesn't block page rendering)
 * - Sets hero images to load eagerly (high priority)
 * - Sets other images to load lazily (when needed)
 * - Works with both initial page load and dynamically added images
 */
const App = () => {
  useEffect(() => {
    /**
     * Set default optimization for all existing images
     */
    const setImageDefaults = () => {
      // Make all images load asynchronously
      document
        .querySelectorAll<HTMLImageElement>("img:not([decoding])")
        .forEach((img) => {
          img.decoding = "async";
        });

      // Set loading strategy based on image importance
      document
        .querySelectorAll<HTMLImageElement>("img:not([loading])")
        .forEach((img) => {
          // Images marked as "hero" or LCP (Largest Contentful Paint) load immediately
          const isLCP =
            img.alt?.toLowerCase().includes("hero") ||
            img.classList.contains("lcp-image") ||
            img.closest("[data-lcp]") ||
            img.parentElement?.classList.contains("hero-section") ||
            img.parentElement?.classList.contains("hero-image");

          img.loading = isLCP ? "eager" : "lazy";
        });
    };

    setImageDefaults();

    /**
     * Watch for new images added dynamically and optimize them too
     * This ensures any images added via JavaScript also get optimized
     */
    const observer = new MutationObserver((records) => {
      records.forEach((record) => {
        record.addedNodes.forEach((node) => {
          if (node instanceof HTMLImageElement) {
            if (!node.decoding) node.decoding = "async";
            if (!node.loading) node.loading = "lazy";
          }
          // Also check inside container elements for new images
          if (node instanceof HTMLElement) {
            node
              .querySelectorAll<HTMLImageElement>("img:not([decoding])")
              .forEach((img) => {
                img.decoding = "async";
              });
            node
              .querySelectorAll<HTMLImageElement>("img:not([loading])")
              .forEach((img) => {
                img.loading = "lazy";
              });
          }
        });
      });
    });

    observer.observe(document.body, { childList: true, subtree: true });

    // Clean up the observer when component unmounts
    return () => observer.disconnect();
  }, []);

  return <AppRouter />;
};

export default App;
