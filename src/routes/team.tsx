import { createFileRoute } from "@tanstack/react-router";

import { ConsultCta, Eyebrow, PageHero } from "../components/site/SiteChrome";
import { Reveal } from "../components/site/Reveal";
import { teamSections } from "../data/site";

export const Route = createFileRoute("/team")({
  head: () => ({
    meta: [
      { title: "Team & Advisors | ESG Advocacy" },
      {
        name: "description",
        content:
          "The leadership, core team, advisors and research group behind ESG Advocacy's AI-first ESG intelligence platform.",
      },
      { property: "og:title", content: "Team — ESG Advocacy" },
      { property: "og:description", content: "Leadership, advisors and the research and intelligence group." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: TeamPage,
});

function TeamPage() {
  return (
    <>
      <PageHero
        eyebrow="Team"
        title="Judgement is the product."
        copy="ESG intelligence is only as credible as the people behind it. Profiles for our leadership, advisors and research group are being prepared."
      />

      <section className="border-t border-border">
        {teamSections.map(([title, copy, count], s) => (
          <div key={title} className="border-b border-border">
            <div className="site-container py-16 lg:py-20">
              <div className="grid gap-6 lg:grid-cols-12 lg:items-end">
                <div className="lg:col-span-6">
                  <Reveal>
                    <Eyebrow>{String(s + 1).padStart(2, "0")}</Eyebrow>
                  </Reveal>
                  <Reveal delay={70}>
                    <h2 className="section-title mt-4 text-4xl lg:text-5xl">{title}</h2>
                  </Reveal>
                </div>
                <Reveal delay={140} className="max-w-md lg:col-span-6 lg:ml-auto">
                  <p className="leading-relaxed text-muted-foreground">{copy}</p>
                </Reveal>
              </div>
              <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {Array.from({ length: count }).map((_, i) => (
                  <Reveal key={i} as="article" delay={i * 90} variant="blur" className="person-card">
                    <div className="person-portrait" aria-hidden="true">
                      <i />
                    </div>
                    <strong>Name to be added</strong>
                    <span>Role to be added</span>
                    <p>Short biography to be added.</p>
                    <div className="person-tags">
                      <em>Expertise</em>
                      <em>Expertise</em>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        ))}
      </section>

      <section>
        <div className="site-container py-20 lg:py-24">
          <Reveal>
            <Eyebrow>Leadership philosophy</Eyebrow>
          </Reveal>
          <Reveal delay={90}>
            <p className="mt-6 max-w-3xl font-display text-2xl leading-snug lg:text-3xl">
              Evidence before opinion. Measurement before messaging. Long-term credibility before short-term
              recognition.
            </p>
          </Reveal>
        </div>
      </section>

      <ConsultCta />
    </>
  );
}
