import type { ComponentType } from "react";
import Home from "@/pages/Home";
import About from "@/pages/about/About";
import Services from "@/pages/services/Services";
import Industries from "@/pages/industries/Industries";
import Products from "@/pages/products/Products";
import ProductDetail from "@/pages/product-detail/ProductDetail";
import GuidingPolicies from "@/pages/guiding-policies/GuidingPolicies";
import Articles from "@/pages/articles/Articles";
import Contact from "@/pages/contact/Contact";
import NotFound from "@/pages/NotFound";

export interface AppRoute {
  path: string;
  component: ComponentType;
  index?: boolean;
}

export const routes: AppRoute[] = [
  { path: "/", component: Home, index: true },
  { path: "/about", component: About },
  { path: "/services", component: Services },
  { path: "/industries", component: Industries },
  { path: "/products", component: Products },
  { path: "/products/:productId", component: ProductDetail },
  { path: "/guiding-policies", component: GuidingPolicies },
  { path: "/articles", component: Articles },
  { path: "/contact", component: Contact },
  { path: "*", component: NotFound },
];
