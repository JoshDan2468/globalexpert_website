export type PolicyDetailItem = {
  slug: string;
  title: string;
  eyebrow: string;
  summary: string;
  intro: string;
  commitments: string[];
  priorities: string[];
};

export const policyDetails: PolicyDetailItem[] = [
  {
    slug: "quality-policy",
    title: "Quality Policy",
    eyebrow: "Guiding Policy",
    summary:
      "Our quality policy commits us to reliable delivery, continuous improvement, and disciplined standards across every engagement.",
    intro:
      "We aim to maintain quality in the way we plan, communicate, execute, and support our work so that clients receive consistent value and dependable outcomes.",
    commitments: [
      "Deliver services and solutions with consistency and accountability",
      "Promote continuous improvement in our systems and delivery practices",
      "Align execution with agreed scope, standards, and client expectations",
    ],
    priorities: [
      "Strong documentation and process discipline",
      "Ongoing performance review and improvement",
      "Client-focused delivery with measurable quality awareness",
    ],
  },
  {
    slug: "hse-policy",
    title: "HSE Policy",
    eyebrow: "Guiding Policy",
    summary:
      "Our HSE policy promotes safe, responsible, and environmentally conscious operations across all project and service activities.",
    intro:
      "We are committed to protecting people, assets, and the environment through proactive risk management, responsible behavior, and a culture of safety.",
    commitments: [
      "Prioritize health, safety, and environmental responsibility in operations",
      "Promote hazard awareness, prevention, and risk reduction",
      "Encourage compliance-minded behavior and continuous HSE improvement",
    ],
    priorities: [
      "Safer work planning and operational readiness",
      "Responsible conduct toward people and the environment",
      "Clear awareness of risks, controls, and safety expectations",
    ],
  },
];

export const policyDetailMap = Object.fromEntries(
  policyDetails.map((policy) => [policy.slug, policy]),
) as Record<string, PolicyDetailItem>;
