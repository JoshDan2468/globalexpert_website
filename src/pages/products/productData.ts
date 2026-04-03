import image1 from "@/assets/home_assets/image11.jpg";
import image2 from "@/assets/home_assets/image12.jpg";
import image3 from "@/assets/home_assets/image13.jpg";
import image4 from "@/assets/home_assets/image14.jpg";
import image5 from "@/assets/home_assets/image16.jpg";
import image6 from "@/assets/about/image2.jpg";
import image7 from "@/assets/home_assets/image10.jpg";

export type ProductDetailItem = {
  slug: string;
  title: string;
  short: string;
  summary: string;
  image: string;
  imageAlt: string;
  intro: string;
  applications: string[];
  valuePoints: string[];
  support: string[];
};

export const productDetails: ProductDetailItem[] = [
  {
    slug: "digitalization-edge",
    title: "Digitalization and Edge Computing",
    short: "Smart connected systems",
    summary:
      "Edge-enabled digital solutions that improve visibility, local processing, automation, and decision support across operations.",
    image: image1,
    imageAlt: "Digitalization and edge computing systems",
    intro:
      "We provide digitalization and edge computing solutions that help clients collect, process, and act on operational data closer to the source.",
    applications: [
      "Remote operations and monitoring environments",
      "Real-time operational dashboards and local analytics",
      "Connected industrial systems with low-latency demands",
    ],
    valuePoints: [
      "Faster operational insight and response",
      "Improved control over distributed assets",
      "Better resilience for data-driven field operations",
    ],
    support: [
      "Solution selection and technical sizing",
      "Integration guidance with existing systems",
      "Deployment support and operational handover",
    ],
  },
  {
    slug: "digital-twin",
    title: "Digital Twin Services",
    short: "Live asset simulation",
    summary:
      "Simulation-backed digital twin services that help teams visualize performance, test scenarios, and support better decisions.",
    image: image2,
    imageAlt: "Digital twin monitoring and simulation",
    intro:
      "Our digital twin services help clients model assets and processes so they can monitor current conditions, anticipate issues, and optimize performance.",
    applications: [
      "Asset performance visualization",
      "Scenario testing and predictive planning",
      "Support for maintenance and optimization decisions",
    ],
    valuePoints: [
      "Deeper operational visibility",
      "Better-informed maintenance and planning",
      "Reduced uncertainty around asset behavior",
    ],
    support: [
      "Twin strategy and scope definition",
      "Data mapping and model configuration support",
      "Operational interpretation and decision support",
    ],
  },
  {
    slug: "electrical-safety",
    title: "Electrical Equipment & Safety",
    short: "Certified protection systems",
    summary:
      "Electrical protection, monitoring, and safety equipment designed for demanding industrial and hazardous environments.",
    image: image3,
    imageAlt: "Electrical safety equipment and monitoring",
    intro:
      "We deliver electrical and safety-focused equipment that supports compliance, operational protection, and safer working conditions in critical environments.",
    applications: [
      "Hazardous-area and industrial installations",
      "Protection and monitoring of electrical assets",
      "Operational environments requiring safety assurance",
    ],
    valuePoints: [
      "Stronger electrical safety performance",
      "Better compliance readiness",
      "Improved protection for people and assets",
    ],
    support: [
      "Product selection aligned to operating conditions",
      "Application guidance and documentation support",
      "Technical assistance through deployment stages",
    ],
  },
  {
    slug: "flexible-tank",
    title: "Flexible Tank",
    short: "Rapid storage deployment",
    summary:
      "Portable and high-capacity flexible tank solutions for fuel, water, and fluid storage in dynamic operating environments.",
    image: image4,
    imageAlt: "Flexible tank and fluid storage system",
    intro:
      "Our flexible tank solutions support temporary or mobile storage needs where speed, durability, and practical deployment matter.",
    applications: [
      "Temporary site storage needs",
      "Fuel, water, and process fluid containment",
      "Rapid deployment in remote or changing locations",
    ],
    valuePoints: [
      "Fast setup and operational readiness",
      "Adaptability to changing site requirements",
      "Reduced dependence on rigid storage infrastructure",
    ],
    support: [
      "Capacity selection and deployment planning",
      "Handling and usage guidance",
      "Operational support for field deployment",
    ],
  },
  {
    slug: "flowmeters-sensors",
    title: "Flowmeters and Sensors",
    short: "Precision measurement tools",
    summary:
      "Reliable metering and sensing equipment for process monitoring, instrumentation visibility, and data-led control.",
    image: image4,
    imageAlt: "Flowmeters and industrial sensors",
    intro:
      "We supply flowmeters and sensors that help clients monitor process conditions accurately and maintain confidence in field measurements.",
    applications: [
      "Process control and monitoring",
      "Instrumentation and field measurement programs",
      "Operational environments needing real-time data feedback",
    ],
    valuePoints: [
      "Improved measurement confidence",
      "Better process visibility and control",
      "Support for safer and more efficient operations",
    ],
    support: [
      "Instrument selection for application fit",
      "Technical interpretation and specification support",
      "Deployment guidance and product assistance",
    ],
  },
  {
    slug: "ndt-laser",
    title: "NDT Products Innovation & Laser Scanning",
    short: "Inspection and 3D capture",
    summary:
      "Inspection and scanning solutions that support integrity assessment, dimensional verification, and technical insight.",
    image: image6,
    imageAlt: "NDT technology and laser scanning support",
    intro:
      "We provide NDT innovation and laser scanning solutions that help clients inspect assets, verify conditions, and build stronger technical understanding.",
    applications: [
      "Asset integrity and condition assessment",
      "Site capture and dimensional verification",
      "Technical inspection and documentation support",
    ],
    valuePoints: [
      "Better insight into asset condition",
      "More accurate field verification",
      "Improved decision-making for maintenance and planning",
    ],
    support: [
      "Technology selection and use-case alignment",
      "Inspection workflow support",
      "Application guidance for field and project teams",
    ],
  },
  {
    slug: "renewable-energy",
    title: "Renewable Energy",
    short: "Hybrid energy systems",
    summary:
      "Renewable energy solutions that support resilience, sustainability targets, and practical energy optimization.",
    image: image5,
    imageAlt: "Renewable energy technologies",
    intro:
      "Our renewable energy offerings help clients explore and implement practical energy alternatives that strengthen resilience and long-term efficiency.",
    applications: [
      "Hybrid power and decentralized energy systems",
      "Energy optimization and sustainability initiatives",
      "Sites seeking cleaner and more resilient energy options",
    ],
    valuePoints: [
      "Improved energy resilience",
      "Support for sustainability goals",
      "Potential long-term operational benefits",
    ],
    support: [
      "Solution fit assessment and planning",
      "Technical guidance for project development",
      "Implementation support and coordination input",
    ],
  },
  {
    slug: "safety-hse",
    title: "Safety/HSE",
    short: "Protection and compliance tools",
    summary:
      "Safety and HSE-focused products that support risk control, workforce protection, and stronger operational compliance.",
    image: image7,
    imageAlt: "Safety and HSE operational equipment",
    intro:
      "We provide safety and HSE products selected to help clients maintain safer worksites, stronger compliance practices, and more confident field operations.",
    applications: [
      "Worksite safety and risk reduction programs",
      "Compliance-oriented operating environments",
      "Field operations requiring protective systems and tools",
    ],
    valuePoints: [
      "Stronger safety culture support",
      "Improved operational risk awareness",
      "Better alignment with HSE expectations",
    ],
    support: [
      "Requirement-based product selection",
      "Deployment planning and usage guidance",
      "Ongoing technical support around implementation",
    ],
  },
  {
    slug: "forecourt-automation",
    title: "Software and Hardware Forecourt Automation",
    short: "Automated forecourt control",
    summary:
      "Integrated software and hardware solutions that improve visibility, control, and reliability across forecourt operations.",
    image: image1,
    imageAlt: "Forecourt automation software and hardware",
    intro:
      "Our forecourt automation solutions help clients modernize monitoring, transaction visibility, and operational control for service environments.",
    applications: [
      "Fuel station and forecourt automation",
      "Transaction and inventory visibility",
      "Operational control across distributed forecourt assets",
    ],
    valuePoints: [
      "Better operational accuracy and visibility",
      "Stronger control across service points",
      "Improved efficiency in routine workflows",
    ],
    support: [
      "System fit assessment and planning",
      "Hardware and software integration guidance",
      "Support during rollout and early operations",
    ],
  },
  {
    slug: "test-equipment",
    title: "Test Equipment",
    short: "Calibration and verification tools",
    summary:
      "Professional test equipment for verification, troubleshooting, calibration, and technical confidence in the field.",
    image: image3,
    imageAlt: "Professional test equipment and tools",
    intro:
      "We supply test equipment that supports technicians and engineers in verifying performance, diagnosing issues, and maintaining confidence in system behavior.",
    applications: [
      "Calibration and field verification",
      "Troubleshooting and maintenance support",
      "Technical teams needing dependable test tools",
    ],
    valuePoints: [
      "Better technical confidence during diagnostics",
      "Improved maintenance effectiveness",
      "Stronger support for quality assurance activity",
    ],
    support: [
      "Equipment selection for intended use",
      "Technical advice and application guidance",
      "Support for adoption into maintenance workflows",
    ],
  },
  {
    slug: "thermal-monitoring",
    title: "Thermal Monitoring",
    short: "Condition visibility solutions",
    summary:
      "Thermal monitoring solutions that help identify anomalies early and improve condition awareness across critical assets.",
    image: image2,
    imageAlt: "Thermal monitoring and condition assessment",
    intro:
      "Our thermal monitoring solutions help clients see temperature-related issues sooner, support preventive action, and improve equipment oversight.",
    applications: [
      "Condition monitoring for critical equipment",
      "Early anomaly detection programs",
      "Maintenance support and operational diagnostics",
    ],
    valuePoints: [
      "Earlier visibility of developing issues",
      "Better-informed maintenance planning",
      "Improved awareness of equipment condition",
    ],
    support: [
      "Solution selection and deployment guidance",
      "Thermal monitoring workflow support",
      "Operational interpretation assistance",
    ],
  },
  {
    slug: "valves-flanges-pumps",
    title: "Valves, Flanges and Pumps",
    short: "Industrial flow control",
    summary:
      "Industrial flow control and pumping solutions built for reliability, compatibility, and robust field performance.",
    image: image6,
    imageAlt: "Valves, flanges, and pumps for industrial systems",
    intro:
      "We provide valves, flanges, and pumps that support fluid handling systems where durability, fit, and dependable operation are essential.",
    applications: [
      "Process and utility fluid handling systems",
      "Industrial transfer and pumping applications",
      "Operational environments requiring durable flow components",
    ],
    valuePoints: [
      "Stronger reliability in fluid systems",
      "Better component fit for project needs",
      "Support for continuity in demanding operations",
    ],
    support: [
      "Component selection and specification support",
      "Technical guidance for application fit",
      "Support through procurement and deployment stages",
    ],
  },
];

export const productDetailMap = Object.fromEntries(
  productDetails.map((product) => [product.slug, product]),
) as Record<string, ProductDetailItem>;
