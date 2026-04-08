import strategyImage from "@/assets/home_assets/image16.jpg";
import ServicePageTemplate, {
  type ServicePageData,
} from "@/pages/services/details/ServicePageTemplate";

const businessProcessesService: ServicePageData = {
  title: "Business Processes",
  eyebrow: "Operational Excellence",
  summary:
    "Process design and optimization services that improve how teams plan, approve, report, and deliver work.",
  intro:
    "We help organizations simplify critical workflows, improve accountability, and create repeatable operating models that support growth.",
  image: strategyImage,
  imageAlt: "Business process optimization and team workflow",
  capabilities: [
    "Workflow mapping and process redesign",
    "Governance, controls, and approval structures",
    "Operational reporting and KPI alignment",
    "Process improvement for multi-team environments",
  ],
  outcomes: [
    "Faster decision-making and reduced bottlenecks",
    "More consistent service delivery",
    "Clearer ownership across business functions",
  ],
  process: [
    "Assess current-state workflow and pain points",
    "Design improved operating flows and control points",
    "Embed reporting logic and implementation guidance",
  ],
};

const BusinessProcessesPage = () => {
  return <ServicePageTemplate service={businessProcessesService} />;
};

export default BusinessProcessesPage;
