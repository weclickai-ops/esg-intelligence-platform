import { createFileRoute } from "@tanstack/react-router";

import { ConsultCta, Eyebrow, PageHero } from "../components/site/SiteChrome";
import { CountUp, Reveal } from "../components/site/Reveal";
import { FuTechSystem } from "../components/site/FuTechSystem";
import { JourneyRail, WordProgression } from "../components/site/Progression";
import { MISSION, teamSections, VISION } from "../data/site";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About & Team | ESG Advocacy" },
      {
        name: "description",
        content:
          "Meet ESG Advocacy, its purpose-driven intelligence model, leadership, advisors and research team.",
      },
      { property: "og:title", content: "About & Team — ESG Advocacy" },
      {
        property: "og:description",
        content: "The intelligence architecture and people behind purpose-driven ESG performance.",
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
        title="An ESG intelligence system, not a report factory."
        copy="We work at the intersection of research, technology and advocacy — turning fragmented sustainability signals into decisions leaders can defend."
      >
        <div className="mt-14 grid gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-3">
          {[
            [12, "+", "Industries mapped"],
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

      <section className="border-y border-border bg-secondary/60">
        <div className="site-container py-20 lg:py-24">
          <Reveal>
            <Eyebrow>Transition model</Eyebrow>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="section-title mt-5 max-w-[15ch]">From compliance obligation to measurable value.</h2>
          </Reveal>
          <div className="mt-14">
            <JourneyRail />
          </div>
        </div>
      </section>

      <section className="border-b border-border">
        <div className="site-container py-20 lg:py-28">
          <Reveal>
            <Eyebrow>Fu-Tech architecture</Eyebrow>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="section-title mt-5 max-w-[20ch]">Eight capabilities wired into one intelligence core.</h2>
          </Reveal>
          <div className="mt-12">
            <FuTechSystem />
          </div>
        </div>
      </section>

      <section className="bg-primary text-primary-foreground">
        <div className="site-container py-20 lg:py-24">
          <Reveal>
            <Eyebrow inverse>Vision & mission</Eyebrow>
          </Reveal>
          <div className="mt-10">
            <WordProgression inverse />
          </div>
          <div className="mt-14 grid gap-10 lg:grid-cols-2">
            <Reveal as="article" variant="left">
              <Eyebrow inverse>Vision</Eyebrow>
              <blockquote className="mt-6 font-display text-2xl font-medium leading-snug lg:text-3xl">{VISION}</blockquote>
            </Reveal>
            <Reveal as="article" variant="right" delay={120}>
              <Eyebrow inverse>Mission</Eyebrow>
              <blockquote className="mt-6 font-display text-2xl font-medium leading-snug lg:text-3xl">{MISSION}</blockquote>
            </Reveal>
          </div>
        </div>
      </section>

      <section id="team" className="border-t border-border scroll-mt-20">
        <div className="site-container py-20 lg:py-24">
          <Reveal>
            <Eyebrow>Team</Eyebrow>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="section-title mt-5 max-w-[18ch]">Judgement is the product.</h2>
          </Reveal>
          <Reveal delay={140}>
            <p className="mt-5 max-w-2xl leading-relaxed text-muted-foreground">
              ESG intelligence is only as credible as the people behind it. Profiles for our leadership, advisors and research group are being prepared.
            </p>
          </Reveal>
        </div>
        {teamSections.map(([title, copy, count], s) => (
          <div key={title} className="border-t border-border">
            <div className="site-container py-16 lg:py-20">
              <div className="grid gap-6 lg:grid-cols-12 lg:items-end">
                <div className="lg:col-span-6">
                  <Reveal><Eyebrow>{String(s + 1).padStart(2, "0")}</Eyebrow></Reveal>
                  <Reveal delay={70}><h3 className="section-title mt-4 text-4xl lg:text-5xl">{title}</h3></Reveal>
                </div>
                <Reveal delay={140} className="max-w-md lg:col-span-6 lg:ml-auto">
                  <p className="leading-relaxed text-muted-foreground">{copy}</p>
                </Reveal>
              </div>
              <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {Array.from({ length: count }).map((_, i) => (
                  <Reveal key={i} as="article" delay={i * 90} variant="blur" className="person-card">
                    <div className="person-portrait" aria-hidden="true"><i /></div>
                    <strong>Name to be added</strong>
                    <span>Role to be added</span>
                    <p>Short biography to be added.</p>
                    <div className="person-tags"><em>Expertise</em><em>Expertise</em></div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        ))}
        <div className="border-t border-border">
          <div className="site-container py-20 lg:py-24">
            <Reveal><Eyebrow>Leadership philosophy</Eyebrow></Reveal>
            <Reveal delay={90}>
              <p className="mt-6 max-w-3xl font-display text-2xl leading-snug lg:text-3xl">
                Evidence before opinion. Measurement before messaging. Long-term credibility before short-term recognition.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <ConsultCta />
    </>
  );
}
