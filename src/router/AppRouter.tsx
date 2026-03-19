import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { routes } from "./routeConfig";
import { useEffect } from "react";

function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [location.pathname]);

  return null;
}

const AppRouter = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
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
    </BrowserRouter>
  );
};

export default AppRouter;
