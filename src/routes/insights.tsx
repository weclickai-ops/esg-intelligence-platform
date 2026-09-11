import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";

import { ConsultCta, Eyebrow } from "../components/site/SiteChrome";
import { SignalField } from "../components/site/CanvasScenes";
import { Reveal } from "../components/site/Reveal";
import { insights, researchSeries } from "../data/site";

export const Route = createFileRoute("/insights")({
  head: () => ({
    meta: [
      { title: "ESG Intelligence & Knowledge Hub | ESG Advocacy" },
      {
        name: "description",
        content:
          "An intelligence dashboard of research, reports, perspectives and case studies on the future of ESG and measurable impact.",
      },
      { property: "og:title", content: "ESG Intelligence — Knowledge Hub" },
      { property: "og:description", content: "Research, reports and perspectives for leaders who need to see around corners." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: InsightsPage,
});

function InsightsPage() {
  return (
    <>
      <section className="intel-hero">
        <SignalField className="intel-hero-field" />
        <div className="site-container relative py-20 lg:py-28">
          <Reveal>
            <Eyebrow>ESG Intelligence</Eyebrow>
          </Reveal>
          <Reveal delay={90}>
            <h1 className="mt-7 max-w-[14ch] font-display text-5xl font-medium leading-[1.04] lg:text-6xl">
              A knowledge hub for what comes next.
            </h1>
          </Reveal>
          <Reveal delay={180}>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              Live tracking of the policy, capital, climate, governance and AI signals reshaping corporate value.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="border-y border-border">
        <div className="site-container py-16 lg:py-20">
          <div className="grid gap-px overflow-hidden rounded-lg border border-border bg-border md:grid-cols-2 lg:grid-cols-3">
            {insights.map((item, index) => (
              <Reveal key={item.title} as="article" delay={index * 70} variant="blur" className="research-card group">
                <div className="flex items-center justify-between">
                  <span className="text-xs uppercase tracking-[0.18em] text-forest">{item.category}</span>
                  <ArrowUpRight className="size-4 text-forest transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
                </div>
                <div className="mini-chart" aria-hidden="true">
                  {[35, 62, 45, 78, 54, 88, 66].map((h, i) => (
                    <i key={i} style={{ height: `${h}%`, transitionDelay: `${i * 40}ms` }} />
                  ))}
                </div>
                <h2 className="font-display text-xl font-medium">{item.title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.copy}</p>
                <span className="research-meta">
                  {item.type} · {item.date} · {item.read} read
                </span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-secondary/60">
        <div className="site-container py-20 lg:py-24">
          <Reveal>
            <Eyebrow>Future of ESG Research Series</Eyebrow>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="section-title mt-5 max-w-[18ch]">A running programme, published in editions.</h2>
          </Reveal>
        </div>
        <div className="timeline-scroller">
          {researchSeries.map(([edition, title, copy], i) => (
            <Reveal key={edition} delay={i * 80} variant="right" className="timeline-card">
              <span className="eyebrow text-forest">{edition}</span>
              <strong>{title}</strong>
              <p>{copy}</p>
              <i className="timeline-marker" aria-hidden="true" />
            </Reveal>
          ))}
        </div>
        <div className="site-container pb-20 pt-8">
          <p className="text-xs text-muted-foreground">Scroll horizontally to move through the series.</p>
        </div>
      </section>

      <ConsultCta />
    </>
  );
}
