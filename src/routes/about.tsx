import { createFileRoute } from "@tanstack/react-router";

import { ConsultCta, Eyebrow, PageHero } from "../components/site/SiteChrome";
import { CountUp, Reveal } from "../components/site/Reveal";
import { FuTechSystem } from "../components/site/FuTechSystem";
import { JourneyRail, WordProgression } from "../components/site/Progression";
import { MISSION, VISION } from "../data/site";

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
        content: "The intelligence architecture behind purpose-driven ESG performance.",
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

      <ConsultCta />
    </>
  );
}
