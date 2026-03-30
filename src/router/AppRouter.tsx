import { Suspense, useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { routes } from "./routeConfig";

function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [location.pathname]);

  return null;
}

const AppRouter = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Suspense
        fallback={
          <div className='min-h-screen bg-white'>
            <div className='mx-auto flex min-h-screen max-w-7xl items-center justify-center px-4'>
              <div className='flex items-center gap-3 rounded-full border border-[#012402]/10 bg-[#f7faf7] px-5 py-3 text-sm font-semibold text-[#012402] shadow-sm'>
                <span className='h-2.5 w-2.5 animate-pulse rounded-full bg-[#17a34a]' />
                Loading page
              </div>
            </div>
          </div>
        }
      >
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
