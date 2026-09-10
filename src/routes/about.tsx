import { createFileRoute } from "@tanstack/react-router";

import { ConsultCta, Eyebrow, PageHero } from "../components/site/SiteChrome";
import { CountUp, Reveal } from "../components/site/Reveal";
import { TrendBars } from "../components/site/Visuals";
import { MISSION, VISION, futureSignals, systemNodes } from "../data/site";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About ESG Advocacy | Purpose-Driven ESG Intelligence" },
      {
        name: "description",
        content:
          "ESG Advocacy is an AI-first ESG intelligence, research and advisory platform built for measurable impact and stakeholder trust.",
      },
      { property: "og:title", content: "About ESG Advocacy" },
      {
        property: "og:description",
        content: "Our vision, mission and the transition model behind purpose-driven ESG performance.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About · ESG Advocacy"
        title="The Future of ESG is a Purpose-Driven Economy"
        copy="Organizations are moving beyond compliance-driven sustainability. The next advantage belongs to leaders who unite credible research, measurable impact, stakeholder trust, future-ready strategy and intelligent decision-making systems."
      >
        <div className="mt-14 grid gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-3">
          {[
            [12, "+", "Industries served"],
            [50, "+", "Research frameworks applied"],
            [100, "%", "Evidence-backed recommendations"],
          ].map(([value, suffix, label], i) => (
            <Reveal key={label as string} delay={i * 110} className="bg-background p-7">
              <div className="font-display text-4xl font-semibold text-forest">
                <CountUp to={value as number} suffix={suffix as string} />
              </div>
              <div className="mt-2 text-sm text-muted-foreground">{label as string}</div>
            </Reveal>
          ))}
        </div>
      </PageHero>

      <section className="bg-primary text-primary-foreground">
        <div className="site-container grid gap-10 py-20 lg:grid-cols-12 lg:py-24">
          <div className="lg:col-span-5">
            <Reveal>
              <Eyebrow inverse>Transition model</Eyebrow>
            </Reveal>
            <Reveal delay={90}>
              <h2 className="section-title mt-5 max-w-[15ch]">From compliance obligation to measurable value.</h2>
            </Reveal>
            <Reveal delay={160}>
              <p className="mt-6 max-w-md leading-relaxed text-primary-foreground/70">
                We work at the intersection of research, technology and advocacy — turning fragmented sustainability
                signals into decisions leaders can defend.
              </p>
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
        <div className="site-container py-20 lg:py-28">
          <Reveal>
            <Eyebrow>Fu-Tech system</Eyebrow>
          </Reveal>
          <div className="mt-5 grid gap-8 lg:grid-cols-12">
            <Reveal delay={80} className="lg:col-span-7">
              <h2 className="section-title">Fu-Tech. Research Driven. AI Powered. Impact Focused.</h2>
            </Reveal>
            <Reveal delay={160} className="max-w-md self-end lg:col-span-5">
              <p className="leading-relaxed text-muted-foreground">
                A connected intelligence architecture built to transform signals into insight, insight into strategy,
                and strategy into trusted outcomes.
              </p>
            </Reveal>
          </div>
          <div className="system-grid mt-12">
            <div className="system-core">
              <span>ESG</span>
              <strong>INTELLIGENCE</strong>
              <small>Signal orchestration layer</small>
            </div>
            {systemNodes.map((node, index) => (
              <Reveal key={node} delay={index * 70} variant="blur" className={`system-node node-${index + 1}`}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <strong>{node}</strong>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="site-container grid lg:grid-cols-2">
          <Reveal as="article" variant="left" className="border-b border-border py-20 lg:border-b-0 lg:border-r lg:py-24 lg:pr-14">
            <Eyebrow>Vision</Eyebrow>
            <blockquote className="mt-8 font-display text-3xl font-medium leading-tight lg:text-4xl">“{VISION}”</blockquote>
          </Reveal>
          <Reveal as="article" variant="right" delay={120} className="py-20 lg:py-24 lg:pl-14">
            <Eyebrow>Mission</Eyebrow>
            <blockquote className="mt-8 font-display text-3xl font-medium leading-tight lg:text-4xl">“{MISSION}”</blockquote>
          </Reveal>
        </div>
      </section>

      <ConsultCta />
    </>
  );
}
