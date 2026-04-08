import executionImage from "@/assets/home_assets/image14.jpg";
import ServicePageTemplate, {
  type ServicePageData,
} from "@/pages/services/details/ServicePageTemplate";

const projectManagementExecutionService: ServicePageData = {
  title: "Project Management and Execution",
  eyebrow: "End-to-End Delivery",
  summary:
    "Structured project planning, coordination, and execution services that keep complex work aligned to scope, schedule, and results.",
  intro:
    "From kickoff to closeout, we help clients manage the moving parts of delivery with disciplined coordination, visibility, and execution support.",
  image: executionImage,
  imageAlt: "Project management and execution planning",
  capabilities: [
    "Project planning and execution coordination",
    "Schedule, scope, and milestone tracking",
    "Stakeholder communication and reporting support",
    "Delivery monitoring across vendors and workstreams",
  ],
  outcomes: [
    "More predictable project execution",
    "Better schedule and scope control",
    "Stronger accountability throughout delivery",
  ],
  process: [
    "Align scope, milestones, and workstream ownership",
    "Drive execution through coordinated monitoring and reporting",
    "Close out with lessons, handover clarity, and next-step readiness",
  ],
};

const ProjectManagementExecutionPage = () => {
  return <ServicePageTemplate service={projectManagementExecutionService} />;
};

export default ProjectManagementExecutionPage;
