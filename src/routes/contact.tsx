import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

import { Eyebrow, PageHero } from "../components/site/SiteChrome";
import { Reveal } from "../components/site/Reveal";
import { Button } from "../components/ui/button";
import { CONSULT_MAILTO } from "../data/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Book an ESG Consultation | ESG Advocacy" },
      {
        name: "description",
        content:
          "Speak with the ESG Advocacy team about strategy, research, reporting, advocacy and AI-powered ESG intelligence.",
      },
      { property: "og:title", content: "Contact ESG Advocacy" },
      { property: "og:description", content: "Book an ESG consultation with our research and advisory team." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Ready to Build a Future-Ready ESG Strategy?"
        copy="Whether you're beginning your ESG journey or looking to scale your sustainability impact, ESG Advocacy provides the intelligence, research, technology, and execution support needed to drive meaningful outcomes."
      >
        <Reveal delay={240}>
          <Button asChild className="mt-9 cta-shine">
            <a href={CONSULT_MAILTO}>
              Book Your ESG Consultation <ArrowRight className="ml-2 size-4" />
            </a>
          </Button>
        </Reveal>
      </PageHero>

      <section className="border-y border-border bg-secondary">
        <div className="site-container grid gap-px overflow-hidden py-16 md:grid-cols-3 lg:py-20">
          {[
            ["Consultations", "Strategy, readiness and roadmap conversations for leadership teams."],
            ["Research & Reporting", "BRSR, sustainability, integrated and impact reporting engagements."],
            ["Media & Advocacy", "Campaigns, thought leadership and stakeholder communications."],
          ].map(([title, copy], index) => (
            <Reveal key={title} delay={index * 110} className="contact-card">
              <Eyebrow>0{index + 1}</Eyebrow>
              <h2 className="mt-6 font-display text-2xl font-medium">{title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{copy}</p>
              <a href={CONSULT_MAILTO} className="footer-link mt-6 inline-block text-sm">
                Start here
              </a>
            </Reveal>
          ))}
        </div>
      </section>

      <section>
        <div className="site-container py-20 lg:py-24">
          <Reveal>
            <Eyebrow>Direct line</Eyebrow>
          </Reveal>
          <Reveal delay={90}>
            <a href={CONSULT_MAILTO} className="mt-6 block font-display text-4xl font-medium underline-offset-8 hover:underline lg:text-5xl">
              hello@esgadvocacy.in
            </a>
          </Reveal>
          <Reveal delay={170}>
            <p className="mt-8 max-w-2xl font-display text-2xl">
              Let's transform research into action, purpose into progress, and impact into legacy.
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
