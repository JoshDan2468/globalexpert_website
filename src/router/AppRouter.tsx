import { Suspense, useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { routes } from "./routeConfig";

/**
 * ScrollToTop Component
 *
 * Automatically scrolls to the top of the page when navigating to a new route
 * This improves user experience and ensures users see the page beginning
 */
function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    // Disable automatic scroll restoration for manual control
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
    // Scroll to top immediately (no animation)
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [location.pathname]); // Re-run when page changes

  return null;
}

/**
 * AppRouter Component
 *
 * Main routing configuration for the entire application
 * - Renders all routes from routeConfig.ts
 * - Ensures page scrolls to top on navigation
 * - Suspense fallback handles lazy-loaded components
 */
const AppRouter = () => {
  return (
    <BrowserRouter
      future={{
        v7_startTransition: true,
        v7_relativeSplatPath: true,
      }}
    >
      <ScrollToTop />
      {/* Suspense provides loading state for lazy-loaded components */}
      <Suspense fallback={null}>
        <Routes>
          {routes.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              index={route.index}
              element={<route.component />}
            />
          ))}
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default AppRouter;
