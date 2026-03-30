import { lazy, type ComponentType } from "react";

const Home = lazy(() => import("@/pages/Home"));
const About = lazy(() => import("@/pages/about/About"));
const Services = lazy(() => import("@/pages/services/Services"));
const Industries = lazy(() => import("@/pages/industries/Industries"));
const Products = lazy(() => import("@/pages/products/Products"));
const ProductDetail = lazy(() => import("@/pages/product-detail/ProductDetail"));
const GuidingPolicies = lazy(
  () => import("@/pages/guiding-policies/GuidingPolicies"),
);
const Articles = lazy(() => import("@/pages/articles/Articles"));
const ArticleDetail = lazy(() => import("@/pages/articles/ArticleDetail"));
const Partners = lazy(() => import("@/pages/partners/Partners"));
const Contact = lazy(() => import("@/pages/contact/Contact"));
const NotFound = lazy(() => import("@/pages/NotFound"));

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
  { path: "/articles/:articleSlug", component: ArticleDetail },
  { path: "/partners", component: Partners },
  { path: "/contact", component: Contact },
  { path: "*", component: NotFound },
];
