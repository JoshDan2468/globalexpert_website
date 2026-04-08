import marketImage from "@/assets/home_assets/image12.jpg";
import ServicePageTemplate, {
  type ServicePageData,
} from "@/pages/services/details/ServicePageTemplate";

const researchMarketIntelligenceService: ServicePageData = {
  title: "Research and Market Intelligence",
  eyebrow: "Market Insight",
  summary:
    "Evidence-based research and market intelligence that support strategic decisions, expansion planning, and opportunity capture.",
  intro:
    "We gather and interpret industry, competitor, and customer signals so clients can act on clearer market intelligence instead of assumptions.",
  image: marketImage,
  imageAlt: "Market intelligence and business insight analysis",
  capabilities: [
    "Industry and competitor landscape research",
    "Market sizing and opportunity assessment",
    "Customer, stakeholder, and demand insight reviews",
    "Decision support for market entry and positioning",
  ],
  outcomes: [
    "Stronger commercial visibility",
    "More informed expansion and investment decisions",
    "Sharper targeting of high-value opportunities",
  ],
  process: [
    "Define the market question and intelligence priorities",
    "Collect, filter, and interpret relevant signals and data points",
    "Translate insights into strategic recommendations",
  ],
};

const ResearchMarketIntelligencePage = () => {
  return <ServicePageTemplate service={researchMarketIntelligenceService} />;
};

export default ResearchMarketIntelligencePage;
