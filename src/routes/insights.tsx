import { createFileRoute } from "@tanstack/react-router";
import { ArrowDownRight } from "lucide-react";

import { ConsultCta, Eyebrow, PageHero } from "../components/site/SiteChrome";
import { Reveal } from "../components/site/Reveal";
import { insights } from "../data/site";

export const Route = createFileRoute("/insights")({
  head: () => ({
    meta: [
      { title: "ESG Intelligence & Knowledge Hub | ESG Advocacy" },
      {
        name: "description",
        content:
          "Original research, reports, expert perspectives and case studies on the future of ESG, AI-powered intelligence and measurable impact.",
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
      <PageHero
        eyebrow="ESG Intelligence"
        title="A knowledge hub for what comes next."
        copy="Original research, sector intelligence and informed perspectives designed for leaders who need to see around corners."
      />

      <section className="border-y border-border">
        <div className="site-container py-16 lg:py-20">
          <div className="insight-grid">
            {insights.map(([category, title, copy], index) => (
              <Reveal
                key={title}
                as="article"
                delay={index * 80}
                variant="blur"
                className={`insight-card insight-${index + 1}`}
              >
                <span className="text-xs uppercase tracking-[0.18em] text-forest">{category}</span>
                <div className="mini-chart" aria-hidden="true">
                  {[35, 62, 45, 78, 54, 88].map((h, i) => (
                    <i key={i} style={{ height: `${h}%`, transitionDelay: `${i * 40}ms` }} />
                  ))}
                </div>
                <h2 className="font-display text-2xl font-medium">{title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{copy}</p>
                <ArrowDownRight className="mt-8 size-5 text-forest transition-transform duration-300 group-hover:translate-x-1" />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="site-container py-20 lg:py-24">
          <Reveal>
            <Eyebrow>Research series</Eyebrow>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="section-title mt-5 max-w-[18ch]">The Future of ESG Research Series.</h2>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-6 max-w-2xl leading-relaxed text-muted-foreground">
              An ongoing program of publications tracking how artificial intelligence, disclosure regulation and
              stakeholder expectation are reshaping corporate value.
            </p>
          </Reveal>
        </div>
      </section>

      <ConsultCta />
    </>
  );
}
