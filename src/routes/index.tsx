import { createFileRoute } from "@tanstack/react-router";
import { ArrowDownRight, ArrowRight, Menu, Plus, X } from "lucide-react";
import { useState } from "react";

import logoAsset from "../assets/esg-advocacy-logo.jpg.asset.json";
import { Button } from "../components/ui/button";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ESG Advocacy | AI-First ESG Intelligence" },
      {
        name: "description",
        content:
          "AI-powered ESG intelligence, research and strategic advisory for measurable business and societal impact.",
      },
      { property: "og:title", content: "ESG Advocacy | AI-First ESG Intelligence" },
      {
        property: "og:description",
        content:
          "Research-driven ESG strategy, reporting, advocacy and impact intelligence.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const navItems = ["About", "Solutions", "Industries", "Insights", "Contact"];

const futureSignals = [
  ["01", "Credible research", "Evidence over assertion"],
  ["02", "Measurable impact", "Outcomes over activity"],
  ["03", "Stakeholder trust", "Transparency over theatre"],
  ["04", "Future-ready strategy", "Foresight over reaction"],
  ["05", "Intelligent systems", "Decisions over data noise"],
];

const systemNodes = [
  "Future Technology",
  "Artificial Intelligence",
  "ESG Intelligence",
  "Sustainability Research",
  "Responsible Governance",
  "Stakeholder Trust",
  "Impact Measurement",
  "Sustainable Innovation",
];

const solutions = [
  {
    title: "ESG Strategy, Research & Consulting",
    summary: "Build the operating model for credible, measurable transformation.",
    items: ["ESG Roadmap Development", "Sustainability Strategy", "ESG Research & Benchmarking", "Materiality Assessment", "Stakeholder Engagement", "Impact Measurement Frameworks", "ESG Readiness Assessment", "CSR Strategy Advisory", "SDG Alignment", "Sustainability Transformation Programs"],
  },
  {
    title: "ESG Research, Reporting & Disclosure",
    summary: "Convert complex data into defensible, decision-grade disclosure.",
    items: ["ESG Reports", "Sustainability Reports", "BRSR Reports", "Integrated Reports", "Impact Reports", "Annual Sustainability Disclosures", "ESG Data Collection & Analysis", "Industry Research Reports", "ESG Benchmarking Studies", "Global Reporting Framework Support"],
  },
  {
    title: "ESG Campaigns, Advocacy & Strategic Communications",
    summary: "Build trust through informed narratives and meaningful engagement.",
    items: ["ESG Awareness Campaigns", "Sustainability Branding", "Fu-Tech Corporate Communications", "Executive Thought Leadership", "Employee Engagement", "Investor Communications", "Social Impact Storytelling", "PR & Advocacy Campaigns", "Stakeholder Outreach", "Reputation Building"],
  },
  {
    title: "AI-Powered ESG Research & Content Studio",
    summary: "Accelerate authoritative research and high-value communication.",
    items: ["AI-generated sustainability content", "ESG whitepapers", "Research publications", "Industry reports", "Impact videos", "Annual report design", "ESG infographics", "Executive thought leadership", "LinkedIn content programs", "Corporate films & documentaries"],
  },
  {
    title: "ESG Media, Intelligence & Knowledge Platform",
    summary: "Shape the conversation through a connected knowledge ecosystem.",
    items: ["Industry Insights", "ESG Research Publications", "Expert Interviews", "Sustainability Features", "ESG Leadership Recognition", "Impact Storytelling", "Brand Advocacy", "Community Building", "Knowledge Platforms", "Future of ESG Research Series"],
  },
];

const reasons = [
  ["01", "AI-First Intelligence Platform", "Connect fragmented signals and reveal patterns that traditional analysis misses."],
  ["02", "Research-Driven Decision Making", "Ground every recommendation in credible evidence, context and sector intelligence."],
  ["03", "Fu-Tech Enabled Solutions", "Pair future-facing technology with practical sustainability transformation."],
  ["04", "End-to-End ESG Partner", "Move seamlessly from assessment and strategy to reporting, campaigns and execution."],
  ["05", "Data + Research + Storytelling", "Turn rigorous intelligence into narratives that earn stakeholder confidence."],
];

const industries = ["Corporates", "Listed Companies", "SMEs", "Startups", "Financial Institutions", "Real Estate", "Manufacturing", "Technology", "Education", "Government & Public Sector", "Non-Profits & Foundations", "Family Offices & Investment Funds"];

const insights = [
  ["Research", "The Purpose-Driven Economy", "Mapping the systems reshaping business value, accountability and public trust."],
  ["Reports", "India ESG Readiness Index", "A practical view of disclosure maturity across emerging and established sectors."],
  ["ESG Intelligence", "Signals That Matter", "The policy, capital and stakeholder shifts leaders should monitor now."],
  ["Future of ESG", "From Reporting to Intelligence", "How AI is changing the quality, speed and utility of sustainability decisions."],
  ["Expert Perspectives", "Governance in the Age of AI", "A board-level framework for responsible technology and durable trust."],
  ["Case Studies", "Making Impact Measurable", "How an integrated evidence model turns ambition into accountable outcomes."],
  ["Thought Leadership", "The New Language of Value", "Why tomorrow’s category leaders will connect purpose, performance and proof."],
];

function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSolution, setActiveSolution] = useState(0);

  return (
    <main className="min-h-screen overflow-hidden bg-background text-foreground">
      <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur-xl">
        <div className="site-container flex h-20 items-center justify-between gap-6">
          <a href="#home" aria-label="ESG Advocacy home" className="shrink-0">
            <img src={logoAsset.url} alt="ESG Advocacy — Purpose. Progress. Impact." className="h-14 w-auto object-contain object-left mix-blend-multiply" />
          </a>
          <nav aria-label="Primary navigation" className="hidden items-center gap-7 lg:flex">
            {navItems.map((item) => <a key={item} href={`#${item.toLowerCase()}`} className="nav-link">{item}</a>)}
          </nav>
          <div className="hidden lg:block"><Button asChild variant="outline"><a href="#contact">Book a consultation</a></Button></div>
          <button type="button" aria-label={menuOpen ? "Close menu" : "Open menu"} className="icon-button lg:hidden" onClick={() => setMenuOpen((value) => !value)}>{menuOpen ? <X /> : <Menu />}</button>
        </div>
        {menuOpen && <nav aria-label="Mobile navigation" className="border-t border-border bg-background px-6 py-5 lg:hidden">{navItems.map((item) => <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setMenuOpen(false)} className="block border-b border-border py-3 font-display text-lg">{item}</a>)}</nav>}
      </header>

      <section id="home" className="scroll-mt-20">
        <div className="site-container grid gap-12 py-16 lg:grid-cols-12 lg:py-24">
          <div className="lg:col-span-7">
            <Eyebrow>AI-First ESG Intelligence · India / Global</Eyebrow>
            <h1 className="mt-8 max-w-[13ch] font-display text-5xl font-medium leading-[1.02] sm:text-6xl lg:text-7xl">Transforming ESG Intelligence into Measurable Impact.</h1>
            <p className="mt-7 max-w-[58ch] text-lg leading-relaxed text-muted-foreground">AI-powered ESG intelligence, research and strategic advisory helping organizations turn sustainability ambitions into measurable business and societal outcomes.</p>
            <div className="mt-9 flex flex-wrap gap-3"><Button asChild><a href="#contact">Book an ESG Consultation <ArrowRight className="ml-2 size-4" /></a></Button><Button asChild variant="ghost"><a href="#solutions">Explore Solutions <ArrowDownRight className="ml-2 size-4" /></a></Button></div>
            <div className="mt-14 grid max-w-xl grid-cols-3 border-t border-border pt-6">
              {["Research-led", "AI-enabled", "Impact-focused"].map((item, i) => <div key={item} className={i ? "border-l border-border pl-5" : ""}><div className="font-display text-2xl font-semibold">0{i + 1}</div><div className="mt-1 text-xs text-muted-foreground">{item}</div></div>)}
            </div>
          </div>
          <div className="lg:col-span-5">
            <SignalField />
          </div>
        </div>
      </section>

      <section id="about" className="scroll-mt-20 bg-primary text-primary-foreground">
        <div className="site-container py-20 lg:py-24">
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <Eyebrow inverse>Transition model · 01</Eyebrow>
              <h2 className="section-title mt-5 max-w-[15ch]">The Future of ESG is a Purpose-Driven Economy</h2>
              <p className="mt-6 max-w-md leading-relaxed text-primary-foreground/70">Organizations are moving beyond compliance. The next advantage belongs to leaders who unite credible research, measurable impact, stakeholder trust and intelligent decision systems.</p>
            </div>
            <div className="lg:col-span-7">
              <div className="overflow-hidden rounded-lg border border-primary-foreground/20">
                {futureSignals.map(([no, title, sub]) => <div key={no} className="future-row group"><span>{no}</span><strong>{title}</strong><span>{sub}</span><div className="h-px w-10 origin-left bg-primary-foreground/40 transition-transform duration-500 group-hover:scale-x-150" /></div>)}
              </div>
              <div className="mt-8 flex h-20 items-end gap-2" aria-label="Purpose-driven value trend visualization">{[28,38,46,54,62,76,88,100].map((height, i) => <div key={height} className="signal-bar flex-1 bg-primary-foreground" style={{ "--bar-height": `${height}%`, animationDelay: `${i * 90}ms` } as React.CSSProperties} />)}</div>
              <p className="mt-3 text-xs text-primary-foreground/50">Organizational maturity · compliance → measurable value</p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-border">
        <div className="site-container py-20 lg:py-28">
          <Eyebrow>Fu-Tech system · 02</Eyebrow>
          <div className="mt-5 grid gap-8 lg:grid-cols-12">
            <h2 className="section-title lg:col-span-7">Fu-Tech. Research Driven. AI Powered. Impact Focused.</h2>
            <p className="max-w-md self-end leading-relaxed text-muted-foreground lg:col-span-5">A connected intelligence architecture built to transform signals into insight, insight into strategy, and strategy into trusted outcomes.</p>
          </div>
          <div className="system-grid mt-12">
            <div className="system-core"><span>ESG</span><strong>INTELLIGENCE</strong><small>Signal orchestration layer</small></div>
            {systemNodes.map((node, index) => <div key={node} className={`system-node node-${index + 1}`}><span>{String(index + 1).padStart(2, "0")}</span><strong>{node}</strong></div>)}
          </div>
        </div>
      </section>

      <section id="solutions" className="scroll-mt-20">
        <div className="site-container py-20 lg:py-28">
          <div className="flex flex-col justify-between gap-6 border-b border-border pb-7 md:flex-row md:items-end"><div><Eyebrow>Solution ecosystem · 03</Eyebrow><h2 className="section-title mt-5 max-w-[18ch]">Five disciplines. One integrated ESG partner.</h2></div><p className="max-w-sm text-sm leading-relaxed text-muted-foreground">Select a discipline to explore the capabilities behind research-led transformation.</p></div>
          <div className="mt-10 grid gap-8 lg:grid-cols-12">
            <div className="lg:col-span-5">
              {solutions.map((solution, index) => <button key={solution.title} type="button" onClick={() => setActiveSolution(index)} className={`solution-tab ${activeSolution === index ? "is-active" : ""}`} aria-expanded={activeSolution === index}><span>0{index + 1}</span><span><strong>{solution.title}</strong><small>{solution.summary}</small></span><Plus className="size-4 shrink-0" /></button>)}
            </div>
            <div className="rounded-lg bg-secondary p-7 lg:col-span-7 lg:p-10" aria-live="polite">
              <div className="flex items-center justify-between border-b border-border pb-5"><Eyebrow>Capability index</Eyebrow><span className="font-display text-3xl text-muted-foreground/50">0{activeSolution + 1}</span></div>
              <h3 className="mt-8 max-w-[20ch] font-display text-3xl font-medium">{solutions[activeSolution].title}</h3>
              <p className="mt-3 text-muted-foreground">{solutions[activeSolution].summary}</p>
              <div className="mt-8 grid gap-px overflow-hidden rounded-md border border-border bg-border sm:grid-cols-2">{solutions[activeSolution].items.map((item, index) => <div key={item} className="flex min-h-16 items-center gap-4 bg-background p-4 text-sm"><span className="text-xs text-muted-foreground">{String(index + 1).padStart(2, "0")}</span><span>{item}</span></div>)}</div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-secondary">
        <div className="site-container py-20 lg:py-24">
          <Eyebrow>Why ESG Advocacy · 04</Eyebrow><h2 className="section-title mt-5">Built for decisions that carry weight.</h2>
          <div className="mt-10 grid gap-px overflow-hidden rounded-lg border border-border bg-border md:grid-cols-6">{reasons.map(([no,title,copy], index) => <article key={no} className={`reason-card ${index < 2 ? "md:col-span-3" : "md:col-span-2"}`}><div className="flex items-start justify-between"><span className="text-xs text-muted-foreground">{no}</span><div className="reason-mark" /></div><h3 className="mt-12 font-display text-xl font-semibold">{title}</h3><p className="mt-3 max-w-sm text-sm leading-relaxed text-muted-foreground">{copy}</p></article>)}</div>
        </div>
      </section>

      <section id="industries" className="scroll-mt-20 border-y border-border">
        <div className="site-container py-20 lg:py-24">
          <div className="grid gap-8 lg:grid-cols-12"><div className="lg:col-span-4"><Eyebrow>Industries · 05</Eyebrow><h2 className="section-title mt-5">Sector context changes everything.</h2></div><div className="industry-grid lg:col-span-8">{industries.map((industry,index) => <div key={industry} className="industry-cell"><span>{String(index + 1).padStart(2,"0")}</span><strong>{industry}</strong></div>)}</div></div>
        </div>
      </section>

      <section id="insights" className="scroll-mt-20">
        <div className="site-container py-20 lg:py-28">
          <div className="grid gap-7 lg:grid-cols-12"><div className="lg:col-span-5"><Eyebrow>ESG Intelligence · 06</Eyebrow><h2 className="section-title mt-5 max-w-[12ch]">A knowledge hub for what comes next.</h2></div><p className="max-w-md self-end leading-relaxed text-muted-foreground lg:col-span-7 lg:ml-auto">Original research, sector intelligence and informed perspectives designed for leaders who need to see around corners.</p></div>
          <div className="insight-grid mt-12">{insights.map(([category,title,copy], index) => <article key={title} className={`insight-card insight-${index + 1}`}><span className="text-xs uppercase text-forest">{category}</span><div className="mini-chart" aria-hidden="true">{[35,62,45,78,54,88].map((h,i)=><i key={i} style={{height:`${h}%`}} />)}</div><h3 className="font-display text-2xl font-medium">{title}</h3><p className="mt-3 text-sm leading-relaxed text-muted-foreground">{copy}</p><ArrowDownRight className="mt-8 size-5 text-forest" /></article>)}</div>
        </div>
      </section>

      <section className="bg-primary text-primary-foreground">
        <div className="site-container grid lg:grid-cols-2">
          <article className="border-b border-primary-foreground/15 py-20 lg:border-b-0 lg:border-r lg:py-24 lg:pr-14"><Eyebrow inverse>Vision</Eyebrow><blockquote className="mt-8 font-display text-3xl font-medium leading-tight lg:text-4xl">“To become India's leading AI-powered ESG intelligence, research, and advocacy platform—advancing sustainable innovation, responsible governance, and measurable positive impact through the power of Fu-Tech and research-driven transformation.”</blockquote></article>
          <article className="py-20 lg:py-24 lg:pl-14"><Eyebrow inverse>Mission</Eyebrow><blockquote className="mt-8 font-display text-3xl font-medium leading-tight lg:text-4xl">“To make ESG accessible, actionable, measurable, and future-ready through artificial intelligence, advanced research, strategic advisory, and meaningful storytelling.”</blockquote></article>
        </div>
      </section>

      <section id="contact" className="scroll-mt-20">
        <div className="site-container py-20 lg:py-28">
          <Eyebrow>Begin · 07</Eyebrow><h2 className="mt-6 max-w-[16ch] font-display text-5xl font-medium leading-tight lg:text-6xl">Ready to Build a Future-Ready ESG Strategy?</h2><p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">Whether you're beginning your ESG journey or looking to scale your sustainability impact, ESG Advocacy provides the intelligence, research, technology, and execution support needed to drive meaningful outcomes.</p><Button asChild className="mt-9"><a href="mailto:hello@esgadvocacy.in?subject=ESG%20Consultation">Book Your ESG Consultation <ArrowRight className="ml-2 size-4" /></a></Button><p className="mt-20 border-t border-border pt-8 font-display text-2xl">Let's transform research into action, purpose into progress, and impact into legacy.</p>
        </div>
      </section>

      <footer className="border-t border-border bg-secondary"><div className="site-container flex flex-col gap-8 py-10 md:flex-row md:items-end md:justify-between"><img src={logoAsset.url} alt="ESG Advocacy" className="h-16 w-auto object-contain object-left mix-blend-multiply" /><div className="text-sm text-muted-foreground md:text-right"><p>AI-First ESG Intelligence, Research & Impact Platform.</p><p className="mt-2">Purpose. Progress. Impact.</p></div></div></footer>
    </main>
  );
}

function Eyebrow({ children, inverse = false }: { children: React.ReactNode; inverse?: boolean }) {
  return <div className={`eyebrow ${inverse ? "text-primary-foreground/60" : "text-forest"}`}>{children}</div>;
}

function SignalField() {
  return <div className="signal-field"><div className="flex items-center justify-between"><Eyebrow>Live signal field</Eyebrow><span className="live-dot" /></div><div className="signal-plot" aria-label="Abstract ESG intelligence visualization"><span className="plot-line line-a" /><span className="plot-line line-b" /><span className="plot-line line-c" />{[[12,64],[32,42],[55,28],[74,54],[88,18]].map(([x,y],i)=><span key={x} className="plot-node" style={{left:`${x}%`,bottom:`${y}%`,animationDelay:`${i*280}ms`}} />)}<svg viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true"><path d="M 0 76 C 18 68, 20 48, 38 52 S 58 25, 73 39 S 88 18, 100 12" /></svg></div><div className="grid grid-cols-4 border-t border-border pt-4 text-[10px] uppercase text-muted-foreground"><span>Carbon</span><span>Social</span><span>Governance</span><span>Impact</span></div></div>;
}