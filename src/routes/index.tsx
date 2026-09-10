import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowDownRight, ArrowRight } from "lucide-react";

import { ConsultCta, Eyebrow } from "../components/site/SiteChrome";
import { CountUp, Reveal } from "../components/site/Reveal";
import { SignalField, TrendBars } from "../components/site/Visuals";
import { Button } from "../components/ui/button";
import { CONSULT_MAILTO, futureSignals, industries, insights, reasons, solutions, MISSION, VISION } from "../data/site";

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
        content: "Research-driven ESG strategy, reporting, advocacy and impact intelligence.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <section className="page-hero">
        <div className="site-container grid gap-12 py-16 lg:grid-cols-12 lg:py-24">
          <div className="lg:col-span-7">
            <Reveal>
              <Eyebrow>AI-First ESG Intelligence · India / Global</Eyebrow>
            </Reveal>
            <h1 className="mt-8 max-w-[13ch] font-display text-5xl font-medium leading-[1.02] sm:text-6xl lg:text-7xl">
              {["Transforming ESG", "Intelligence into", "Measurable Impact."].map((line, i) => (
                <span key={line} className="hero-line" style={{ animationDelay: `${120 + i * 130}ms` }}>
                  {line}
                </span>
              ))}
            </h1>
            <Reveal delay={520}>
              <p className="mt-7 max-w-[58ch] text-lg leading-relaxed text-muted-foreground">
                AI-powered ESG intelligence, research and strategic advisory helping organizations turn sustainability
                ambitions into measurable business and societal outcomes.
              </p>
            </Reveal>
            <Reveal delay={620}>
              <div className="mt-9 flex flex-wrap gap-3">
                <Button asChild className="cta-shine">
                  <a href={CONSULT_MAILTO}>
                    Book an ESG Consultation <ArrowRight className="ml-2 size-4" />
                  </a>
                </Button>
                <Button asChild variant="ghost">
                  <Link to="/solutions">
                    Explore Solutions <ArrowDownRight className="ml-2 size-4" />
                  </Link>
                </Button>
              </div>
            </Reveal>
            <div className="mt-14 grid max-w-xl grid-cols-3 border-t border-border pt-6">
              {[
                [12, "+", "Industries served"],
                [50, "+", "Research frameworks"],
                [100, "%", "Evidence-backed"],
              ].map(([value, suffix, label], i) => (
                <Reveal key={label as string} delay={700 + i * 90} className={i ? "border-l border-border pl-5" : ""}>
                  <div className="font-display text-2xl font-semibold">
                    <CountUp to={value as number} suffix={suffix as string} />
                  </div>
                  <div className="mt-1 text-xs text-muted-foreground">{label as string}</div>
                </Reveal>
              ))}
            </div>
          </div>
          <div className="lg:col-span-5">
            <SignalField />
          </div>
        </div>
      </section>

      <section className="bg-primary text-primary-foreground">
        <div className="site-container grid gap-10 py-20 lg:grid-cols-12 lg:py-24">
          <div className="lg:col-span-5">
            <Reveal>
              <Eyebrow inverse>The future of ESG · 01</Eyebrow>
            </Reveal>
            <Reveal delay={90}>
              <h2 className="section-title mt-5 max-w-[15ch]">The Future of ESG is a Purpose-Driven Economy</h2>
            </Reveal>
            <Reveal delay={160}>
              <p className="mt-6 max-w-md leading-relaxed text-primary-foreground/70">
                Organizations are moving beyond compliance. The next advantage belongs to leaders who unite credible
                research, measurable impact, stakeholder trust and intelligent decision systems.
              </p>
            </Reveal>
            <Reveal delay={230}>
              <Button asChild variant="secondary" className="mt-8">
                <Link to="/about">Our approach <ArrowRight className="ml-2 size-4" /></Link>
              </Button>
            </Reveal>
          </div>
          <div className="lg:col-span-7">
            <div className="overflow-hidden rounded-lg border border-primary-foreground/20">
              {futureSignals.map(([no, title, sub], i) => (
                <Reveal key={no} delay={i * 80} variant="left" className="future-row group">
                  <span>{no}</span>
                  <strong>{title}</strong>
                  <span>{sub}</span>
                  <div className="h-px w-10 origin-left bg-primary-foreground/40 transition-transform duration-500 group-hover:scale-x-150" />
                </Reveal>
              ))}
            </div>
            <TrendBars inverse />
            <p className="mt-3 text-xs text-primary-foreground/50">
              Organizational maturity · compliance → measurable value
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-border">
        <div className="site-container py-20 lg:py-24">
          <div className="flex flex-col justify-between gap-6 border-b border-border pb-7 md:flex-row md:items-end">
            <div>
              <Reveal>
                <Eyebrow>Solution ecosystem · 02</Eyebrow>
              </Reveal>
              <Reveal delay={80}>
                <h2 className="section-title mt-5 max-w-[18ch]">Five disciplines. One integrated ESG partner.</h2>
              </Reveal>
            </div>
            <Reveal delay={160}>
              <Button asChild variant="outline">
                <Link to="/solutions">View all solutions <ArrowRight className="ml-2 size-4" /></Link>
              </Button>
            </Reveal>
          </div>
          <div className="mt-10 grid gap-px overflow-hidden rounded-lg border border-border bg-border md:grid-cols-2 lg:grid-cols-3">
            {solutions.map((solution, index) => (
              <Reveal key={solution.title} as="article" delay={index * 80} variant="blur" className="discipline-card">
                <span className="text-xs text-muted-foreground">0{index + 1}</span>
                <h3 className="mt-10 font-display text-xl font-medium leading-snug">{solution.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{solution.summary}</p>
                <Link to="/solutions" className="footer-link mt-6 inline-block text-sm">
                  Explore
                </Link>
              </Reveal>
            ))}
            <Reveal delay={440} className="discipline-card bg-secondary">
              <Eyebrow>Fu-Tech</Eyebrow>
              <p className="mt-10 font-display text-xl leading-snug">
                Research driven. AI powered. Impact focused.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-secondary">
        <div className="site-container py-20 lg:py-24">
          <Reveal>
            <Eyebrow>Why ESG Advocacy · 03</Eyebrow>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="section-title mt-5">Built for decisions that carry weight.</h2>
          </Reveal>
          <div className="mt-10 grid gap-px overflow-hidden rounded-lg border border-border bg-border md:grid-cols-6">
            {reasons.map(([no, title, copy], index) => (
              <Reveal
                key={no}
                as="article"
                delay={index * 90}
                variant="blur"
                className={`reason-card ${index < 2 ? "md:col-span-3" : "md:col-span-2"}`}
              >
                <div className="flex items-start justify-between">
                  <span className="text-xs text-muted-foreground">{no}</span>
                  <div className="reason-mark" />
                </div>
                <h3 className="mt-12 font-display text-xl font-semibold">{title}</h3>
                <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted-foreground">{copy}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-border">
        <div className="site-container grid gap-8 py-20 lg:grid-cols-12 lg:py-24">
          <div className="lg:col-span-4">
            <Reveal>
              <Eyebrow>Industries · 04</Eyebrow>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="section-title mt-5">Sector context changes everything.</h2>
            </Reveal>
            <Reveal delay={160}>
              <Button asChild variant="outline" className="mt-8">
                <Link to="/industries">All industries <ArrowRight className="ml-2 size-4" /></Link>
              </Button>
            </Reveal>
          </div>
          <div className="industry-grid lg:col-span-8">
            {industries.map(([industry], index) => (
              <Reveal key={industry} delay={index * 45} variant="blur" className="industry-cell">
                <span>{String(index + 1).padStart(2, "0")}</span>
                <strong>{industry}</strong>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="site-container py-20 lg:py-24">
          <div className="grid gap-7 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <Reveal>
                <Eyebrow>ESG Intelligence · 05</Eyebrow>
              </Reveal>
              <Reveal delay={80}>
                <h2 className="section-title mt-5 max-w-[12ch]">A knowledge hub for what comes next.</h2>
              </Reveal>
            </div>
            <Reveal delay={160} className="max-w-md self-end lg:col-span-7 lg:ml-auto">
              <p className="leading-relaxed text-muted-foreground">
                Original research, sector intelligence and informed perspectives designed for leaders who need to see
                around corners.
              </p>
              <Link to="/insights" className="footer-link mt-5 inline-block text-sm">
                Enter the knowledge hub
              </Link>
            </Reveal>
          </div>
          <div className="insight-grid mt-12">
            {insights.slice(0, 3).map(([category, title, copy], index) => (
              <Reveal
                key={title}
                as="article"
                delay={index * 90}
                variant="blur"
                className="insight-card insight-home"
              >
                <span className="text-xs uppercase tracking-[0.18em] text-forest">{category}</span>
                <div className="mini-chart" aria-hidden="true">
                  {[35, 62, 45, 78, 54, 88].map((h, i) => (
                    <i key={i} style={{ height: `${h}%`, transitionDelay: `${i * 40}ms` }} />
                  ))}
                </div>
                <h3 className="font-display text-2xl font-medium">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{copy}</p>
                <ArrowDownRight className="mt-8 size-5 text-forest" />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-primary text-primary-foreground">
        <div className="site-container grid lg:grid-cols-2">
          <Reveal as="article" variant="left" className="border-b border-primary-foreground/15 py-20 lg:border-b-0 lg:border-r lg:py-24 lg:pr-14">
            <Eyebrow inverse>Vision</Eyebrow>
            <blockquote className="mt-8 font-display text-3xl font-medium leading-tight lg:text-4xl">“{VISION}”</blockquote>
          </Reveal>
          <Reveal as="article" variant="right" delay={120} className="py-20 lg:py-24 lg:pl-14">
            <Eyebrow inverse>Mission</Eyebrow>
            <blockquote className="mt-8 font-display text-3xl font-medium leading-tight lg:text-4xl">“{MISSION}”</blockquote>
          </Reveal>
        </div>
      </section>

      <ConsultCta />
    </>
  );
}
