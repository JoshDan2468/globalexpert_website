import heroImage from "@/assets/home_assets/image11.jpg";
import executionImage from "@/assets/home_assets/image14.jpg";
import marketImage from "@/assets/home_assets/image12.jpg";
import strategyImage from "@/assets/home_assets/image16.jpg";
import engineeringImage from "@/assets/about/image2.jpg";
import operationsImage from "@/assets/home_assets/image10.jpg";

export type ServiceDetail = {
  slug: string;
  title: string;
  eyebrow: string;
  summary: string;
  intro: string;
  image: string;
  imageAlt: string;
  capabilities: string[];
  outcomes: string[];
  process: string[];
};

export const serviceDetails: ServiceDetail[] = [
  {
    slug: "engineering-services",
    title: "Engineering Services",
    eyebrow: "Technical Delivery",
    summary:
      "Integrated engineering support for concept development, detailed design, technical assurance, and field-ready documentation.",
    intro:
      "We support clients with practical engineering input that connects design intent to operational reality across energy, infrastructure, and industrial projects.",
    image: engineeringImage,
    imageAlt: "Engineering planning and technical collaboration",
    capabilities: [
      "Concept and detailed engineering support",
      "Technical documentation and design reviews",
      "Discipline coordination across project stakeholders",
      "Constructability, operability, and maintainability input",
    ],
    outcomes: [
      "Better scope clarity before execution starts",
      "Stronger technical alignment across teams",
      "Reduced rework during fabrication and construction",
    ],
    process: [
      "Define the technical scope and delivery priorities",
      "Develop or review engineering packages with the right specialists",
      "Support execution teams with disciplined technical follow-through",
    ],
  },
  {
    slug: "business-processes",
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
  },
  {
    slug: "research-development",
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
  },
  {
    slug: "research-market-intelligence",
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
  },
  {
    slug: "oil-gas-management",
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
  },
  {
    slug: "project-management-execution",
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
  },
];

export const serviceDetailMap = Object.fromEntries(
  serviceDetails.map((service) => [service.slug, service]),
) as Record<string, ServiceDetail>;
