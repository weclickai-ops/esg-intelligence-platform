export const navItems = [
  { label: "Home", to: "/" as const },
  { label: "About", to: "/about" as const },
  { label: "Solutions", to: "/solutions" as const },
  { label: "Industries", to: "/industries" as const },
  { label: "Portfolio", to: "/portfolio" as const },
  { label: "Insights", to: "/insights" as const },
  { label: "Team", to: "/team" as const },
  { label: "Contact", to: "/contact" as const },
];

/** Labels that surface inside the hero intelligence network. */
export const heroLabels = [
  "Research",
  "AI",
  "Policy",
  "Capital",
  "Stakeholders",
  "Impact",
  "Governance",
  "Innovation",
];

/** The scroll journey: compliance → impact. */
export const journeyStages: Array<[string, string]> = [
  ["Compliance", "Meeting the minimum disclosure obligation."],
  ["Data", "Collecting fragmented sustainability signals."],
  ["Intelligence", "Turning signals into patterns and meaning."],
  ["Strategy", "Deciding where value and risk actually sit."],
  ["Impact", "Outcomes that stakeholders can verify."],
];

export const futureSignals: Array<[string, string, string]> = [
  ["01", "Credible research", "Evidence over assertion"],
  ["02", "Measurable impact", "Outcomes over activity"],
  ["03", "Stakeholder trust", "Transparency over theatre"],
  ["04", "Future-ready strategy", "Foresight over reaction"],
  ["05", "Intelligent systems", "Decisions over data noise"],
];

export const systemNodes: Array<{ label: string; copy: string; links: number[] }> = [
  { label: "Future Technology", copy: "Emerging tools applied to real sustainability problems.", links: [1, 7] },
  { label: "Artificial Intelligence", copy: "Pattern detection across fragmented ESG signals.", links: [0, 2, 3] },
  { label: "ESG Intelligence", copy: "Decision-grade insight, not raw dashboards.", links: [1, 3, 6] },
  { label: "Sustainability Research", copy: "Primary and secondary evidence behind every claim.", links: [1, 2, 6] },
  { label: "Responsible Governance", copy: "Board-level accountability and oversight design.", links: [2, 5] },
  { label: "Stakeholder Trust", copy: "Transparency that survives scrutiny.", links: [4, 6] },
  { label: "Impact Measurement", copy: "Outcome frameworks with defensible baselines.", links: [2, 3, 5] },
  { label: "Sustainable Innovation", copy: "New value models built on responsible foundations.", links: [0, 2] },
];

export type Solution = {
  title: string;
  short: string;
  summary: string;
  solve: string;
  deliver: string;
  impact: string;
  items: string[];
};

export const solutions: Solution[] = [
  {
    title: "ESG Strategy, Research & Consulting",
    short: "Strategy",
    summary: "Build the operating model for credible, measurable transformation.",
    solve: "Ambition exists, but there is no defensible roadmap, baseline or ownership model.",
    deliver: "Materiality, benchmarking, roadmap, governance design and measurement frameworks.",
    impact: "A sequenced ESG agenda leadership can fund, defend and track.",
    items: ["ESG Roadmap Development", "Sustainability Strategy", "ESG Research & Benchmarking", "Materiality Assessment", "Stakeholder Engagement", "Impact Measurement Frameworks", "ESG Readiness Assessment", "CSR Strategy Advisory", "SDG Alignment", "Sustainability Transformation Programs"],
  },
  {
    title: "ESG Research, Reporting & Disclosure",
    short: "Disclosure",
    summary: "Convert complex data into defensible, decision-grade disclosure.",
    solve: "Disclosure is manual, inconsistent and difficult to assure.",
    deliver: "BRSR, sustainability, integrated and impact reporting with structured data pipelines.",
    impact: "Reporting that stands up to regulators, investors and auditors.",
    items: ["ESG Reports", "Sustainability Reports", "BRSR Reports", "Integrated Reports", "Impact Reports", "Annual Sustainability Disclosures", "ESG Data Collection & Analysis", "Industry Research Reports", "ESG Benchmarking Studies", "Global Reporting Framework Support"],
  },
  {
    title: "ESG Campaigns, Advocacy & Strategic Communications",
    short: "Advocacy",
    summary: "Build trust through informed narratives and meaningful engagement.",
    solve: "Real progress is invisible, or communicated in ways stakeholders discount.",
    deliver: "Campaigns, executive thought leadership, investor and employee communications.",
    impact: "Recognition and trust proportionate to actual performance.",
    items: ["ESG Awareness Campaigns", "Sustainability Branding", "Fu-Tech Corporate Communications", "Executive Thought Leadership", "Employee Engagement", "Investor Communications", "Social Impact Storytelling", "PR & Advocacy Campaigns", "Stakeholder Outreach", "Reputation Building"],
  },
  {
    title: "AI-Powered ESG Research & Content Studio",
    short: "AI Studio",
    summary: "Accelerate authoritative research and high-value communication.",
    solve: "Research and content cycles are too slow for the pace of ESG change.",
    deliver: "AI-assisted research, whitepapers, reports, films, design and content programs.",
    impact: "Publication velocity without loss of rigour or voice.",
    items: ["AI-generated sustainability content", "ESG whitepapers", "Research publications", "Industry reports", "Impact videos", "Annual report design", "ESG infographics", "Executive thought leadership", "LinkedIn content programs", "Corporate films & documentaries"],
  },
  {
    title: "ESG Media, Intelligence & Knowledge Platform",
    short: "Platform",
    summary: "Shape the conversation through a connected knowledge ecosystem.",
    solve: "Intelligence stays trapped inside organizations instead of building authority.",
    deliver: "Publications, expert interviews, recognition programs and knowledge platforms.",
    impact: "A durable position as a reference voice in your sector.",
    items: ["Industry Insights", "ESG Research Publications", "Expert Interviews", "Sustainability Features", "ESG Leadership Recognition", "Impact Storytelling", "Brand Advocacy", "Community Building", "Knowledge Platforms", "Future of ESG Research Series"],
  },
];

/** The intelligence stack — DATA → IMPACT. */
export const intelligenceStack: Array<[string, string, string]> = [
  ["Data", "AI-First Intelligence Platform", "Fragmented signals connected into one structured view."],
  ["Research", "Research-Driven Decision Making", "Every recommendation grounded in credible evidence."],
  ["Intelligence", "Fu-Tech Enabled Solutions", "Future-facing technology applied to real ESG systems."],
  ["Strategy", "End-to-End ESG Partner", "Assessment through execution, without handoffs."],
  ["Storytelling", "Data + Research + Storytelling", "Rigour translated into narratives stakeholders trust."],
  ["Impact", "Measurable Outcomes", "Evidence of change that survives scrutiny."],
];

export const reasons: Array<[string, string, string]> = [
  ["01", "AI-First Intelligence Platform", "Connect fragmented signals and reveal patterns traditional analysis misses."],
  ["02", "Research-Driven Decision Making", "Ground every recommendation in credible evidence and sector intelligence."],
  ["03", "Fu-Tech Enabled Solutions", "Pair future-facing technology with practical sustainability transformation."],
  ["04", "End-to-End ESG Partner", "Move from assessment and strategy to reporting, campaigns and execution."],
  ["05", "Data + Research + Storytelling", "Turn rigorous intelligence into narratives that earn confidence."],
];

export type Industry = { name: string; challenge: string; solution: string; copy: string };

export const industries: Industry[] = [
  { name: "Corporates", challenge: "Fragmented ESG ownership across business units.", solution: "Enterprise ESG operating model and governance design.", copy: "Enterprise-wide ESG transformation programs." },
  { name: "Listed Companies", challenge: "Investor-grade disclosure under tightening regulation.", solution: "BRSR, integrated and assurance-ready reporting.", copy: "Disclosure built for regulators and markets." },
  { name: "SMEs", challenge: "ESG expectations without a dedicated function.", solution: "Proportionate readiness and lightweight frameworks.", copy: "Practical ESG readiness without heavy overhead." },
  { name: "Startups", challenge: "Impact claims that must survive diligence.", solution: "Evidence-backed impact frameworks that scale.", copy: "Impact frameworks that stand up to diligence." },
  { name: "Financial Institutions", challenge: "Portfolio-level ESG exposure and stewardship.", solution: "Screening intelligence and stewardship narratives.", copy: "Portfolio ESG intelligence and stewardship." },
  { name: "Real Estate", challenge: "Asset-level performance and transition risk.", solution: "Certification pathways and transition planning.", copy: "Asset performance and green transition planning." },
  { name: "Manufacturing", challenge: "Emissions and supply chain data at plant level.", solution: "Resource intelligence and supplier engagement.", copy: "Emissions, supply chain and resource intelligence." },
  { name: "Technology", challenge: "Responsible AI, data ethics and climate accounting.", solution: "AI governance frameworks and carbon accounting.", copy: "Responsible AI governance and climate accounting." },
  { name: "Education", challenge: "Campus impact and research credibility.", solution: "Sustainability programs and knowledge partnerships.", copy: "Campus sustainability and research programs." },
  { name: "Government & Public Sector", challenge: "Public accountability for outcomes, not spend.", solution: "Policy research and independent impact evaluation.", copy: "Policy research and impact evaluation." },
  { name: "Non-Profits & Foundations", challenge: "Proving outcomes to funders and communities.", solution: "Outcome measurement and credible storytelling.", copy: "Outcome measurement and impact storytelling." },
  { name: "Family Offices & Investment Funds", challenge: "Aligning capital with values, defensibly.", solution: "Values-aligned strategy with impact evidence.", copy: "Values-aligned strategy and impact evidence." },
];

export type Insight = {
  category: string;
  title: string;
  copy: string;
  type: string;
  date: string;
  read: string;
};

export const insights: Insight[] = [
  { category: "Research", title: "The Purpose-Driven Economy", copy: "Mapping the systems reshaping business value, accountability and public trust.", type: "Research paper", date: "Ongoing", read: "12 min" },
  { category: "Reports", title: "India ESG Readiness Index", copy: "A practical view of disclosure maturity across emerging and established sectors.", type: "Report", date: "In development", read: "18 min" },
  { category: "ESG Intelligence", title: "Signals That Matter", copy: "The policy, capital and stakeholder shifts leaders should monitor now.", type: "Intelligence brief", date: "Updated periodically", read: "6 min" },
  { category: "Future of ESG", title: "From Reporting to Intelligence", copy: "How AI is changing the quality, speed and utility of sustainability decisions.", type: "Perspective", date: "Ongoing", read: "9 min" },
  { category: "Expert Perspectives", title: "Governance in the Age of AI", copy: "A board-level framework for responsible technology and durable trust.", type: "Perspective", date: "Ongoing", read: "8 min" },
  { category: "Case Studies", title: "Making Impact Measurable", copy: "How an integrated evidence model turns ambition into accountable outcomes.", type: "Case study", date: "Placeholder", read: "7 min" },
  { category: "Thought Leadership", title: "The New Language of Value", copy: "Why tomorrow's category leaders connect purpose, performance and proof.", type: "Essay", date: "Ongoing", read: "10 min" },
];

/** Future of ESG Research Series — horizontal timeline. */
export const researchSeries: Array<[string, string, string]> = [
  ["Edition 01", "The Purpose-Driven Economy", "Why value creation is being redefined around measurable contribution."],
  ["Edition 02", "Intelligence Over Reporting", "The shift from annual disclosure to continuous ESG intelligence."],
  ["Edition 03", "Responsible AI in Sustainability", "Governance models for AI used in ESG decision-making."],
  ["Edition 04", "Capital & Credibility", "How investors separate substantiated progress from narrative."],
  ["Edition 05", "The Trust Infrastructure", "Building verification into sustainability performance."],
];

/** Signals used in the Insights intelligence field. */
export const intelligenceSignals = [
  "Policy",
  "Capital",
  "Climate",
  "Governance",
  "AI",
  "Stakeholders",
  "Regulation",
  "Innovation",
];

export const portfolioCategories: Array<[string, string]> = [
  ["ESG Strategy", "Roadmaps, materiality and transformation programs."],
  ["Research & Intelligence", "Benchmarking studies and sector intelligence work."],
  ["Reporting & Disclosure", "BRSR, sustainability, integrated and impact reports."],
  ["Campaigns & Advocacy", "Awareness, engagement and stakeholder campaigns."],
  ["AI / Fu-Tech", "AI-assisted research systems and content platforms."],
  ["Impact & Communications", "Impact storytelling, films and executive communications."],
];

export const teamSections: Array<[string, string, number]> = [
  ["Leadership", "Founding and executive leadership of the platform.", 3],
  ["Core Team", "Strategy, research, reporting and communications practitioners.", 4],
  ["Advisors", "Independent advisory voices across governance and capital.", 3],
  ["Research & Intelligence", "Analysts and researchers behind the knowledge platform.", 3],
];

export const morphWords = ["Purpose", "Intelligence", "Action", "Impact", "Legacy"];

export const VISION =
  "To become India's leading AI-powered ESG intelligence, research, and advocacy platform—advancing sustainable innovation, responsible governance, and measurable positive impact through the power of Fu-Tech and research-driven transformation.";

export const MISSION =
  "To make ESG accessible, actionable, measurable, and future-ready through artificial intelligence, advanced research, strategic advisory, and meaningful storytelling.";

export const CONSULT_MAILTO = "mailto:hello@esgadvocacy.in?subject=ESG%20Consultation";
