import { createFileRoute } from "@tanstack/react-router";

import { ConsultCta, Eyebrow, PageHero } from "../components/site/SiteChrome";
import { Reveal } from "../components/site/Reveal";
import { portfolioCategories } from "../data/site";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Portfolio | ESG Work, Research & Campaigns | ESG Advocacy" },
      {
        name: "description",
        content:
          "Selected ESG strategy, research, reporting, advocacy and Fu-Tech engagements delivered by ESG Advocacy.",
      },
      { property: "og:title", content: "Portfolio — ESG Advocacy" },
      { property: "og:description", content: "ESG strategy, research, disclosure, campaigns and impact work." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: PortfolioPage,
});

function PortfolioPage() {
  return (
    <>
      <PageHero
        eyebrow="Portfolio"
        title="Work, evidence and outcomes."
        copy="Strategy, research, disclosure, campaigns and Fu-Tech engagements. Project records are being prepared for publication."
      />

      <section className="border-y border-border bg-secondary/50">
        <div className="site-container py-16 lg:py-20">
          <Reveal>
            <Eyebrow>Featured projects</Eyebrow>
          </Reveal>
          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            {[0, 1].map((i) => (
              <Reveal key={i} as="article" delay={i * 120} variant="blur" className="project-card is-featured">
                <span className="placeholder-chip">Awaiting project details</span>
                <div className="project-visual" aria-hidden="true">
                  <i />
                  <i />
                  <i />
                </div>
                <h2 className="mt-8 font-display text-2xl font-medium">Featured project {i + 1}</h2>
                <dl className="project-meta">
                  <div>
                    <dt>Category</dt>
                    <dd>To be added</dd>
                  </div>
                  <div>
                    <dt>Challenge</dt>
                    <dd>To be added</dd>
                  </div>
                  <div>
                    <dt>Approach</dt>
                    <dd>To be added</dd>
                  </div>
                  <div>
                    <dt>Outcome</dt>
                    <dd>To be added</dd>
                  </div>
                </dl>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="site-container py-20 lg:py-24">
          <Reveal>
            <Eyebrow>Practice areas</Eyebrow>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="section-title mt-5 max-w-[16ch]">Where the work sits.</h2>
          </Reveal>
          <div className="mt-12 grid gap-px overflow-hidden rounded-lg border border-border bg-border md:grid-cols-2 lg:grid-cols-3">
            {portfolioCategories.map(([title, copy], index) => (
              <Reveal key={title} as="article" delay={index * 70} variant="blur" className="project-card">
                <span className="text-xs text-muted-foreground">{String(index + 1).padStart(2, "0")}</span>
                <h3 className="mt-10 font-display text-xl font-medium">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{copy}</p>
                <span className="placeholder-chip mt-6">Projects to be published</span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <ConsultCta />
    </>
  );
}
