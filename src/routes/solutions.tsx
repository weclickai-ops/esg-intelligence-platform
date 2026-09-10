import { createFileRoute } from "@tanstack/react-router";
import { Plus } from "lucide-react";
import { useState } from "react";

import { ConsultCta, Eyebrow, PageHero } from "../components/site/SiteChrome";
import { Reveal } from "../components/site/Reveal";
import { reasons, solutions } from "../data/site";

export const Route = createFileRoute("/solutions")({
  head: () => ({
    meta: [
      { title: "ESG Solutions | Strategy, Reporting, Advocacy & AI Studio" },
      {
        name: "description",
        content:
          "Five integrated ESG disciplines: strategy and research, reporting and disclosure, advocacy campaigns, an AI content studio and a knowledge platform.",
      },
      { property: "og:title", content: "ESG Solutions — ESG Advocacy" },
      {
        property: "og:description",
        content: "An integrated ESG solution ecosystem spanning research, disclosure, advocacy and AI-powered content.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: SolutionsPage,
});

function SolutionsPage() {
  const [activeSolution, setActiveSolution] = useState(0);
  const selected = solutions[activeSolution] ?? solutions[0];
  if (!selected) return null;

  return (
    <>
      <PageHero
        eyebrow="Solution ecosystem"
        title="Five disciplines. One integrated ESG partner."
        copy="A premium solution ecosystem built to move organizations from assessment and strategy through reporting, advocacy and measurable execution."
      />

      <section className="border-y border-border">
        <div className="site-container py-16 lg:py-20">
          <div className="grid gap-8 lg:grid-cols-12">
            <div className="lg:col-span-5">
              {solutions.map((solution, index) => (
                <Reveal key={solution.title} delay={index * 70}>
                  <button
                    type="button"
                    onClick={() => setActiveSolution(index)}
                    className={`solution-tab ${activeSolution === index ? "is-active" : ""}`}
                    aria-expanded={activeSolution === index}
                  >
                    <span>0{index + 1}</span>
                    <span>
                      <strong>{solution.title}</strong>
                      <small>{solution.summary}</small>
                    </span>
                    <Plus className="size-4 shrink-0" />
                  </button>
                </Reveal>
              ))}
            </div>
            <div key={activeSolution} className="panel-swap rounded-lg bg-secondary p-7 lg:col-span-7 lg:p-10" aria-live="polite">
              <div className="flex items-center justify-between border-b border-border pb-5">
                <Eyebrow>Capability index</Eyebrow>
                <span className="font-display text-3xl text-muted-foreground/50">0{activeSolution + 1}</span>
              </div>
              <h2 className="mt-8 max-w-[20ch] font-display text-3xl font-medium">{selected.title}</h2>
              <p className="mt-3 text-muted-foreground">{selected.summary}</p>
              <div className="mt-8 grid gap-px overflow-hidden rounded-md border border-border bg-border sm:grid-cols-2">
                {selected.items.map((item, index) => (
                  <div
                    key={item}
                    className="capability-cell flex min-h-16 items-center gap-4 bg-background p-4 text-sm"
                    style={{ animationDelay: `${index * 40}ms` }}
                  >
                    <span className="text-xs text-muted-foreground">{String(index + 1).padStart(2, "0")}</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-secondary">
        <div className="site-container py-20 lg:py-24">
          <Reveal>
            <Eyebrow>Why ESG Advocacy</Eyebrow>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="section-title mt-5">Built for decisions that carry weight.</h2>
          </Reveal>
          <div className="mt-10 grid gap-px overflow-hidden rounded-lg border border-border bg-border md:grid-cols-6">
            {reasons.map(([no, title, copy], index) => (
              <Reveal
                key={no}
                as="article"
                delay={index * 90}
                variant="blur"
                className={`reason-card ${index < 2 ? "md:col-span-3" : "md:col-span-2"}`}
              >
                <div className="flex items-start justify-between">
                  <span className="text-xs text-muted-foreground">{no}</span>
                  <div className="reason-mark" />
                </div>
                <h3 className="mt-12 font-display text-xl font-semibold">{title}</h3>
                <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted-foreground">{copy}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <ConsultCta />
    </>
  );
}
