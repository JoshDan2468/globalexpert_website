import heroImage from "@/assets/home_assets/build.jpg";
import ServicePageTemplate, {
  type ServicePageData,
} from "@/pages/services/details/ServicePageTemplate";

const researchDevelopmentService: ServicePageData = {
  title: "Research & Development",
  eyebrow: "Innovation Support",
  summary:
    "Applied research and development services for new ideas, technical validation, and solution improvement.",
  intro:
    "Our R&D support helps clients move from opportunity to tested concept with stronger evidence, technical direction, and practical implementation pathways.",
  image: heroImage,
  imageAlt: "Research and development workshop planning",
  capabilities: [
    "Problem framing and innovation opportunity studies",
    "Technical feasibility and prototype support",
    "Research coordination for strategic initiatives",
    "Improvement pathways for existing products and services",
  ],
  outcomes: [
    "Better confidence before investing in new initiatives",
    "More structured experimentation and validation",
    "Sharper pathways from idea to deployable solution",
  ],
  process: [
    "Clarify the challenge, hypothesis, and success criteria",
    "Investigate options through research and validation activities",
    "Translate findings into actionable development direction",
  ],
};

const ResearchDevelopmentPage = () => {
  return <ServicePageTemplate service={researchDevelopmentService} />;
};

export default ResearchDevelopmentPage;
