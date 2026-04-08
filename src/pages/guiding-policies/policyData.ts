export type PolicyDetailItem = {
  slug: string;
  title: string;
  eyebrow: string;
  intro: string;
  commitments: string[];
  priorities: string[];
  subtitle?: string;
  visualAlt?: string;
  visualMode?: "image" | "badge";
  overviewLabel?: string;
  overviewTitle?: string;
  overviewParagraphs?: string[];
  assuranceLabel?: string;
  assuranceTitle?: string;
  assurancePoints?: string[];
  sectionGroups?: Array<{
    title: string;
    description?: string;
    items: string[];
  }>;
  policyNarrative?: {
    leadLabel: string;
    leadTitle: string;
    paragraphs: string[];
    checklistLabel: string;
    checklistItems: string[];
  };
};

export const policyDetails: PolicyDetailItem[] = [
  {
    slug: "quality-policy",
    title: "We Assure You",
    eyebrow: "Guiding Policy",
    subtitle: "Quality Assurance",
    visualAlt: "Quality control approved illustration",
    visualMode: "image",
    intro:
      "Global Experts Consultoria provides services in a manner, which conforms to contractual and regulatory requirements, using highly-qualified, well-trained and experienced personnel. It is the policy of Global Experts Consultoria to establish and maintain an effective and efficient quality system, planned and developed in conjunction with other management functions.",
    commitments: [],
    priorities: [],
    policyNarrative: {
      leadLabel: "We Assure You",
      leadTitle: "Quality Assurance",
      paragraphs: [
        "Global Experts Consultoria provides services in a manner, which conforms to contractual and regulatory requirements, using highly-qualified, well-trained and experienced personnel. It is the policy of Global Experts Consultoria to establish and maintain an effective and efficient quality system, planned and developed in conjunction with other management functions.",
        "The quality systems of the company complies with the requirements of the ISO9001:2015 Standard. The assessment of conformity of work to contract and regulatory requirements is made on the basis of objective evidence of quality.",
        "We are committed to effective Quality Management throughout all design and construction processes and believes that high quality service and workmanship are the key to sustainable business development.",
        "GEC Quality management system is developed in line with ISO 9001:2015 edition.",
      ],
      checklistLabel: "QC",
      checklistItems: [
        "GEC Quality management system is developed in line with ISO 9001:2015 edition. Efficient Quality Management processes supporting construction, procurement and material handling activities.",
        "High integrity inspection and testing procedures to ensure premium quality delivery of services.",
        "Good Document Control systems.",
        "Capability to engage third party QA/QC agencies for all overseas purchases.",
        "Welding Procedures can be developed for any special requirements.",
      ],
    },
  },
  {
    slug: "hse-policy",
    title: "We Protect People",
    eyebrow: "Guiding Policy",
    subtitle: "Health, Safety & Environment",
    visualAlt: "Health safety and environment assurance panel",
    visualMode: "badge",
    intro:
      "Global Experts Consultoria is committed to the integration of HSE objectives into its Management Systems at all levels. In this way, we aim to foster a HSE performance we can be proud of, to earn the confidence of our customers, stakeholders and society at large, and to enable us sustain growth and development.",
    commitments: [],
    priorities: [
      "Protect the health and wellbeing of employees, clients, and host communities.",
      "Prevent incidents through disciplined planning, supervision, and continuous risk awareness.",
      "Reduce environmental impact by promoting responsible operational practices.",
    ],
    sectionGroups: [
      {
        title: "Leadership Responsibility",
        description:
          "HSE performance is driven by visible leadership, clear accountability, and practical expectations at every level of the business.",
        items: [
          "Management sets direction, provides resources, and reviews HSE performance regularly.",
          "Supervisors are responsible for ensuring safe systems of work are followed consistently.",
          "Every employee is expected to take ownership of safe behavior and environmental care.",
        ],
      },
      {
        title: "Risk Management",
        description:
          "We identify hazards early and manage them proactively so work can be carried out without harm to people, assets, or the environment.",
        items: [
          "Hazards are assessed before work begins and controls are communicated clearly.",
          "Equipment, materials, and services are reviewed for their HSE implications.",
          "Lessons learned from incidents and observations are used to improve future performance.",
        ],
      },
    ],
    policyNarrative: {
      leadLabel: "HSE Policy",
      leadTitle: "Integrated Approach To Health Safety and Environment",
      paragraphs: [
        "Global Experts Consultoria is committed to the integration of HSE objectives into its Management Systems at all levels. In this way, we aim to foster a HSE performance we can be proud of, to earn the confidence of our customers, stakeholders and society at large, and to enable us sustain growth and development.",
        "At Global Experts Consultoria, We believe that it is possible to run all operations without injuries or damage to personnel, equipment or the environment.",
      ],
      checklistLabel: "HSE",
      checklistItems: [
        "We will comply with all applicable laws and relevant industry standards of practice.",
        "We will continuously evaluate the Health, Safety and Environmental aspects of our equipment and services.",
        "We believe that effective HSE Management is good business, and we are committed to the continuous improvement of our HSE Management practices.",
        "From Senior Management through to Entry Level, everyone is responsible and accountable for HSE.",
      ],
    },
  },
];

export const policyDetailMap = Object.fromEntries(
  policyDetails.map((policy) => [policy.slug, policy]),
) as Record<string, PolicyDetailItem>;
