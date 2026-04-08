import { lazy, type ComponentType } from "react";

const Home = lazy(() => import("@/pages/Home"));
const About = lazy(() => import("@/pages/about/About"));
const Services = lazy(() => import("@/pages/services/Services"));
const EngineeringServicesPage = lazy(
  () => import("@/pages/services/details/EngineeringServicesPage"),
);
const BusinessProcessesPage = lazy(
  () => import("@/pages/services/details/BusinessProcessesPage"),
);
const ResearchDevelopmentPage = lazy(
  () => import("@/pages/services/details/ResearchDevelopmentPage"),
);
const ResearchMarketIntelligencePage = lazy(
  () => import("@/pages/services/details/ResearchMarketIntelligencePage"),
);
const OilGasManagementPage = lazy(
  () => import("@/pages/services/details/OilGasManagementPage"),
);
const ProjectManagementExecutionPage = lazy(
  () => import("@/pages/services/details/ProjectManagementExecutionPage"),
);
const Industries = lazy(() => import("@/pages/industries/Industries"));
const Products = lazy(() => import("@/pages/products/Products"));
const ProductDetail = lazy(() => import("@/pages/products/ProductDetail"));
const PolicyDetail = lazy(
  () => import("@/pages/guiding-policies/PolicyDetail"),
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
  {
    path: "/services/engineering-services",
    component: EngineeringServicesPage,
  },
  {
    path: "/services/business-processes",
    component: BusinessProcessesPage,
  },
  {
    path: "/services/research-development",
    component: ResearchDevelopmentPage,
  },
  {
    path: "/services/research-market-intelligence",
    component: ResearchMarketIntelligencePage,
  },
  {
    path: "/services/oil-gas-management",
    component: OilGasManagementPage,
  },
  {
    path: "/services/project-management-execution",
    component: ProjectManagementExecutionPage,
  },
  { path: "/industries", component: Industries },
  { path: "/products", component: Products },
  { path: "/products/:productId", component: ProductDetail },
  { path: "/guiding-policies/:policySlug", component: PolicyDetail },
  { path: "/articles", component: Articles },
  { path: "/articles/:articleSlug", component: ArticleDetail },
  { path: "/partners", component: Partners },
  { path: "/contact", component: Contact },
  { path: "*", component: NotFound },
];
