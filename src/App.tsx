import { useEffect } from "react";
import AppRouter from "./router/AppRouter";

const App = () => {
  useEffect(() => {
    const setImageDefaults = () => {
      document
        .querySelectorAll<HTMLImageElement>("img:not([decoding])")
        .forEach((img) => {
          img.decoding = "async";
        });
      document
        .querySelectorAll<HTMLImageElement>("img:not([loading])")
        .forEach((img) => {
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

    const observer = new MutationObserver((records) => {
      records.forEach((record) => {
        record.addedNodes.forEach((node) => {
          if (node instanceof HTMLImageElement) {
            if (!node.decoding) node.decoding = "async";
            if (!node.loading) node.loading = "lazy";
          }
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
    return () => observer.disconnect();
  }, []);

  return <AppRouter />;
};

export default App;
