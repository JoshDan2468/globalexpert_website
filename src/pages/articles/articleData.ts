import articleImage1 from "@/assets/home_assets/image11.jpg";
import articleImage2 from "@/assets/home_assets/image12.jpg";
import articleImage3 from "@/assets/home_assets/image13.jpg";

export type ArticleItem = {
  slug: string;
  image: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  category: string;
  body: string[];
};

export const articles: ArticleItem[] = [
  {
    slug: "closing-the-digital-divide-with-practical-infrastructure-strategy",
    image: articleImage1,
    title: "Closing the digital divide with practical infrastructure strategy",
    excerpt:
      "Learn how better planning, delivery alignment, and field-ready systems can improve access and long-term service reliability.",
    date: "20 Nov, 2023",
    author: "Admin",
    category: "Infrastructure",
    body: [
      "Digital inclusion improves when infrastructure decisions are grounded in operational reality. That means planning networks, systems, and support models around actual user conditions instead of ideal assumptions.",
      "Teams that deliver well usually align technology choices with maintenance capacity, local operating constraints, and long-term ownership from the beginning. This reduces downtime and makes adoption easier.",
      "A practical strategy is not only about building faster. It is about designing services that can be sustained, measured, and improved over time.",
    ],
  },
  {
    slug: "how-project-teams-improve-stakeholder-coordination-in-complex-sectors",
    image: articleImage2,
    title: "How project teams improve stakeholder coordination in complex sectors",
    excerpt:
      "A closer look at communication rhythms, governance structures, and execution habits that reduce friction during delivery.",
    date: "22 Dec, 2023",
    author: "Admin",
    category: "Project Delivery",
    body: [
      "Complex projects often fail from coordination fatigue rather than technical weakness. Strong teams create visible decision pathways, clear ownership, and meeting rhythms that prevent ambiguity from growing.",
      "Stakeholder confidence increases when updates are concise, risks are surfaced early, and expectations are managed consistently across technical and commercial groups.",
      "Coordination becomes a competitive advantage when it is treated as a delivery discipline instead of an afterthought.",
    ],
  },
  {
    slug: "why-operational-clarity-matters-more-than-speed-in-high-risk-environments",
    image: articleImage3,
    title: "Why operational clarity matters more than speed in high-risk environments",
    excerpt:
      "Discover how disciplined processes help technical teams improve performance, safety, and confidence across operations.",
    date: "27 Dec, 2023",
    author: "Admin",
    category: "Operations",
    body: [
      "Speed creates value only when teams can still make sound decisions. In high-risk environments, clarity around process, escalation, and field execution protects both outcomes and people.",
      "Organizations that perform well usually define what good execution looks like before work begins. They remove uncertainty by documenting responsibilities, controls, and acceptable thresholds.",
      "When clarity improves, teams move with more confidence and fewer costly corrections.",
    ],
  },
  {
    slug: "building-resilient-systems-for-modern-energy-and-industrial-programs",
    image: articleImage1,
    title: "Building resilient systems for modern energy and industrial programs",
    excerpt:
      "From engineering reviews to field execution, resilient systems come from structured decisions made early and refined often.",
    date: "02 Jan, 2024",
    author: "Admin",
    category: "Energy",
    body: [
      "Resilience is built into programs through design reviews, risk-informed planning, and execution models that account for change. It is rarely an output of improvisation.",
      "Technical programs become more reliable when teams define fallback options, maintenance priorities, and system dependencies at the outset.",
      "The strongest delivery models combine engineering rigor with operational feedback loops that keep plans relevant after deployment begins.",
    ],
  },
  {
    slug: "what-better-delivery-governance-looks-like-across-multidisciplinary-teams",
    image: articleImage2,
    title: "What better delivery governance looks like across multidisciplinary teams",
    excerpt:
      "Strong governance keeps delivery measurable, roles clear, and risk visible even in fast-moving or highly technical projects.",
    date: "10 Jan, 2024",
    author: "Admin",
    category: "Governance",
    body: [
      "Governance works best when it helps teams act faster with more confidence. That means creating structure without burying delivery under unnecessary process.",
      "Multidisciplinary projects especially benefit from shared checkpoints, clear approval paths, and reporting formats that different functions can quickly understand.",
      "The result is stronger visibility, faster intervention when needed, and healthier execution over the full project lifecycle.",
    ],
  },
  {
    slug: "using-insight-led-planning-to-strengthen-technical-decision-making",
    image: articleImage3,
    title: "Using insight-led planning to strengthen technical decision-making",
    excerpt:
      "Planning improves when teams combine operational insight, market awareness, and engineering judgment into one clear process.",
    date: "18 Jan, 2024",
    author: "Admin",
    category: "Strategy",
    body: [
      "Technical decisions improve when planners connect field realities, commercial context, and engineering requirements early. Insight-led planning reduces blind spots before they become execution problems.",
      "The most effective teams gather usable intelligence continuously and turn it into decisions that shape scope, sequencing, and resourcing.",
      "Over time, this creates stronger project starts, sharper prioritization, and more credible delivery commitments.",
    ],
  },
];

export const articlesBySlug = Object.fromEntries(
  articles.map((article) => [article.slug, article]),
);
