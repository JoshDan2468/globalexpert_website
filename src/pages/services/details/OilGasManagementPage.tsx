import operationsImage from "@/assets/home_assets/image10.jpg";
import ServicePageTemplate, {
  type ServicePageData,
} from "@/pages/services/details/ServicePageTemplate";

const oilGasManagementService: ServicePageData = {
  title: "Oil and Gas Management",
  eyebrow: "Sector Operations",
  summary:
    "Management support for oil and gas operations, assets, and commercial delivery with a practical focus on safety, continuity, and performance.",
  intro:
    "We help clients manage the complexity of oil and gas programs through structured oversight, local insight, and disciplined operational coordination.",
  image: operationsImage,
  imageAlt: "Oil and gas operations management planning",
  capabilities: [
    "Operational coordination and asset support",
    "Contractor interface and performance oversight",
    "Risk, compliance, and readiness monitoring",
    "Support for production and delivery continuity",
  ],
  outcomes: [
    "Better operational visibility across moving parts",
    "Stronger control over delivery risks",
    "Improved coordination between technical and commercial teams",
  ],
  process: [
    "Establish operational priorities and control requirements",
    "Coordinate execution with the right technical and field inputs",
    "Track performance, risks, and delivery commitments closely",
  ],
};

const OilGasManagementPage = () => {
  return <ServicePageTemplate service={oilGasManagementService} />;
};

export default OilGasManagementPage;
