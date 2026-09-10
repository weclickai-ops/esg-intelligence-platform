import { createFileRoute } from "@tanstack/react-router";

import { ConsultCta, Eyebrow, PageHero } from "../components/site/SiteChrome";
import { Reveal } from "../components/site/Reveal";
import { industries } from "../data/site";

export const Route = createFileRoute("/industries")({
  head: () => ({
    meta: [
      { title: "Industries We Serve | ESG Advocacy" },
      {
        name: "description",
        content:
          "ESG intelligence tailored to corporates, listed companies, SMEs, startups, financial institutions, real estate, manufacturing, technology and the public sector.",
      },
      { property: "og:title", content: "Industries — ESG Advocacy" },
      { property: "og:description", content: "Sector-specific ESG strategy, research and disclosure intelligence." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: IndustriesPage,
});

function IndustriesPage() {
  return (
    <>
      <PageHero
        eyebrow="Industries"
        title="Sector context changes everything."
        copy="Materiality, regulation and stakeholder expectations differ sharply by sector. Our research models are calibrated to the realities of each one."
      />

      <section className="border-y border-border">
        <div className="site-container py-16 lg:py-20">
          <div className="industry-grid">
            {industries.map(([name, copy], index) => (
              <Reveal key={name} delay={index * 45} variant="blur" className="industry-cell group">
                <span>{String(index + 1).padStart(2, "0")}</span>
                <strong>{name}</strong>
                <p className="industry-copy">{copy}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="site-container grid gap-10 py-20 lg:grid-cols-12 lg:py-24">
          <div className="lg:col-span-5">
            <Reveal>
              <Eyebrow>Engagement model</Eyebrow>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="section-title mt-5 max-w-[14ch]">How a sector engagement runs.</h2>
            </Reveal>
          </div>
          <div className="lg:col-span-7">
            {[
              ["Diagnose", "Sector benchmarking, materiality and readiness assessment."],
              ["Design", "Roadmap, frameworks, governance and measurement architecture."],
              ["Deliver", "Reporting, disclosure, campaigns and stakeholder engagement."],
              ["Demonstrate", "Impact evidence, intelligence dashboards and narrative proof."],
            ].map(([title, copy], index) => (
              <Reveal key={title} delay={index * 100} variant="left" className="process-row">
                <span>{String(index + 1).padStart(2, "0")}</span>
                <div>
                  <strong>{title}</strong>
                  <p>{copy}</p>
                </div>
                <i className="process-line" aria-hidden="true" />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <ConsultCta />
    </>
  );
}
