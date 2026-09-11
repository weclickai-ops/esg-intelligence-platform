import { createFileRoute } from "@tanstack/react-router";

import { ConsultCta, Eyebrow, PageHero } from "../components/site/SiteChrome";
import { SolutionOrbit } from "../components/site/SolutionOrbit";
import { IntelligenceStackView } from "../components/site/Progression";
import { Reveal } from "../components/site/Reveal";

export const Route = createFileRoute("/solutions")({
  head: () => ({
    meta: [
      { title: "ESG Solutions | Strategy, Reporting, Advocacy & AI Studio" },
      {
        name: "description",
        content:
          "Five integrated ESG systems: strategy and research, reporting and disclosure, advocacy campaigns, an AI content studio and a knowledge platform.",
      },
      { property: "og:title", content: "ESG Solutions — ESG Advocacy" },
      {
        property: "og:description",
        content: "An interactive ESG solution ecosystem spanning research, disclosure, advocacy and AI-powered content.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: SolutionsPage,
});

function SolutionsPage() {
  return (
    <>
      <PageHero
        eyebrow="Solution ecosystem"
        title="Five systems orbiting one ESG core."
        copy="Select a system to see the problem it solves, what we deliver and the business impact. Full capability detail stays one click away."
      />

      <section className="border-y border-border bg-secondary/50">
        <div className="site-container py-16 lg:py-20">
          <SolutionOrbit />
        </div>
      </section>

      <section>
        <div className="site-container py-20 lg:py-24">
          <Reveal>
            <Eyebrow>How the work compounds</Eyebrow>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="section-title mt-5 max-w-[16ch]">Every layer feeds the next.</h2>
          </Reveal>
          <div className="mt-12">
            <IntelligenceStackView />
          </div>
        </div>
      </section>

      <ConsultCta />
    </>
  );
}
