import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowDownRight, ArrowRight } from "lucide-react";

import { ConsultCta, Eyebrow } from "../components/site/SiteChrome";
import { CountUp, Reveal } from "../components/site/Reveal";
import { IntelligenceGlobe } from "../components/site/CanvasScenes";
import { FuTechSystem } from "../components/site/FuTechSystem";
import { SolutionOrbit } from "../components/site/SolutionOrbit";
import { IndustryUniverse } from "../components/site/IndustryUniverse";
import { IntelligenceStackView, JourneyRail, WordProgression } from "../components/site/Progression";
import { Button } from "../components/ui/button";
import { CONSULT_MAILTO, MISSION, VISION, insights } from "../data/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ESG Advocacy | AI-First ESG Intelligence Platform" },
      {
        name: "description",
        content:
          "AI-powered ESG intelligence, research and strategic advisory helping organizations turn sustainability ambitions into measurable outcomes.",
      },
      { property: "og:title", content: "ESG Advocacy | AI-First ESG Intelligence" },
      {
        property: "og:description",
        content: "An ESG intelligence platform: research, disclosure, advocacy and measurable impact.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <section className="hero-stage">
        <IntelligenceGlobe className="hero-globe" />
        <div className="site-container relative grid gap-10 py-16 lg:grid-cols-12 lg:py-28">
          <div className="lg:col-span-7">
            <Reveal>
              <Eyebrow>AI-First ESG Intelligence · India / Global</Eyebrow>
            </Reveal>
            <h1 className="mt-8 max-w-[13ch] font-display text-5xl font-medium leading-[1.02] sm:text-6xl lg:text-7xl">
              {["Transforming ESG", "Intelligence into", "Measurable Impact."].map((line, i) => (
                <span key={line} className="hero-line" style={{ animationDelay: `${120 + i * 130}ms` }}>
                  {line}
                </span>
              ))}
            </h1>
            <Reveal delay={520}>
              <p className="mt-7 max-w-[54ch] text-lg leading-relaxed text-muted-foreground">
                AI-powered ESG intelligence, research and strategic advisory helping organizations turn sustainability
                ambitions into measurable business and societal outcomes.
              </p>
            </Reveal>
            <Reveal delay={620}>
              <div className="mt-9 flex flex-wrap gap-3">
                <Button asChild className="cta-shine">
                  <a href={CONSULT_MAILTO}>
                    Book an ESG Consultation <ArrowRight className="ml-2 size-4" />
                  </a>
                </Button>
                <Button asChild variant="ghost">
                  <Link to="/solutions">
                    Explore Solutions <ArrowDownRight className="ml-2 size-4" />
                  </Link>
                </Button>
              </div>
            </Reveal>
            <div className="mt-16 grid max-w-xl grid-cols-3 border-t border-border pt-6">
              {[
                [12, "+", "Industries mapped"],
                [50, "+", "Research frameworks"],
                [100, "%", "Evidence-backed"],
              ].map(([value, suffix, label], i) => (
                <Reveal key={label as string} delay={700 + i * 90} className={i ? "border-l border-border pl-5" : ""}>
                  <div className="font-display text-2xl font-semibold">
                    <CountUp to={value as number} suffix={suffix as string} />
                  </div>
                  <div className="mt-1 text-xs text-muted-foreground">{label as string}</div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-secondary/60">
        <div className="site-container py-20 lg:py-24">
          <div className="grid gap-6 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-7">
              <Reveal>
                <Eyebrow>The future of ESG · 01</Eyebrow>
              </Reveal>
              <Reveal delay={80}>
                <h2 className="section-title mt-5 max-w-[15ch]">The Future of ESG is a Purpose-Driven Economy</h2>
              </Reveal>
            </div>
            <Reveal delay={160} className="max-w-md lg:col-span-5">
              <p className="leading-relaxed text-muted-foreground">
                Compliance is the floor. Advantage now belongs to organizations that operate ESG as an intelligence
                system.
              </p>
            </Reveal>
          </div>
          <div className="mt-14">
            <JourneyRail />
          </div>
        </div>
      </section>

      <section className="border-b border-border">
        <div className="site-container py-20 lg:py-28">
          <Reveal>
            <Eyebrow>Fu-Tech system · 02</Eyebrow>
          </Reveal>
          <div className="mt-5 grid gap-8 lg:grid-cols-12">
            <Reveal delay={80} className="lg:col-span-7">
              <h2 className="section-title">Fu-Tech. Research Driven. AI Powered. Impact Focused.</h2>
            </Reveal>
            <Reveal delay={160} className="max-w-md self-end lg:col-span-5">
              <p className="leading-relaxed text-muted-foreground">
                Hover any element to see how it connects. Nothing in this architecture works alone.
              </p>
            </Reveal>
          </div>
          <div className="mt-12">
            <FuTechSystem />
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-secondary/50">
        <div className="site-container py-20 lg:py-24">
          <div className="flex flex-col justify-between gap-6 pb-10 md:flex-row md:items-end">
            <div>
              <Reveal>
                <Eyebrow>Solution ecosystem · 03</Eyebrow>
              </Reveal>
              <Reveal delay={80}>
                <h2 className="section-title mt-5 max-w-[18ch]">Five systems. One integrated partner.</h2>
              </Reveal>
            </div>
            <Reveal delay={160}>
              <Button asChild variant="outline">
                <Link to="/solutions">
                  Open the ecosystem <ArrowRight className="ml-2 size-4" />
                </Link>
              </Button>
            </Reveal>
          </div>
          <SolutionOrbit />
        </div>
      </section>

      <section className="border-b border-border">
        <div className="site-container py-20 lg:py-24">
          <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-7">
              <Reveal>
                <Eyebrow>Why ESG Advocacy · 04</Eyebrow>
              </Reveal>
              <Reveal delay={80}>
                <h2 className="section-title mt-5 max-w-[16ch]">An intelligence stack, not a service list.</h2>
              </Reveal>
            </div>
            <Reveal delay={160} className="max-w-md lg:col-span-5">
              <p className="leading-relaxed text-muted-foreground">
                Each layer feeds the next — data becomes research, research becomes intelligence, intelligence becomes
                evidence of impact.
              </p>
            </Reveal>
          </div>
          <div className="mt-12">
            <IntelligenceStackView />
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-secondary/50">
        <div className="site-container py-20 lg:py-24">
          <div className="flex flex-col justify-between gap-6 pb-10 md:flex-row md:items-end">
            <div>
              <Reveal>
                <Eyebrow>Industries · 05</Eyebrow>
              </Reveal>
              <Reveal delay={80}>
                <h2 className="section-title mt-5 max-w-[14ch]">Sector context changes everything.</h2>
              </Reveal>
            </div>
            <Reveal delay={160}>
              <Button asChild variant="outline">
                <Link to="/industries">
                  All industries <ArrowRight className="ml-2 size-4" />
                </Link>
              </Button>
            </Reveal>
          </div>
          <IndustryUniverse />
        </div>
      </section>

      <section className="border-b border-border">
        <div className="site-container py-20 lg:py-24">
          <div className="grid gap-7 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-6">
              <Reveal>
                <Eyebrow>ESG Intelligence · 06</Eyebrow>
              </Reveal>
              <Reveal delay={80}>
                <h2 className="section-title mt-5 max-w-[12ch]">A knowledge hub for what comes next.</h2>
              </Reveal>
            </div>
            <Reveal delay={160} className="max-w-md self-end lg:col-span-6 lg:ml-auto">
              <Link to="/insights" className="footer-link text-sm">
                Enter the knowledge hub →
              </Link>
            </Reveal>
          </div>
          <div className="mt-12 grid gap-px overflow-hidden rounded-lg border border-border bg-border md:grid-cols-3">
            {insights.slice(0, 3).map((item, index) => (
              <Reveal key={item.title} as="article" delay={index * 90} variant="blur" className="research-card">
                <span className="text-xs uppercase tracking-[0.18em] text-forest">{item.category}</span>
                <div className="mini-chart" aria-hidden="true">
                  {[35, 62, 45, 78, 54, 88].map((h, i) => (
                    <i key={i} style={{ height: `${h}%`, transitionDelay: `${i * 40}ms` }} />
                  ))}
                </div>
                <h3 className="font-display text-xl font-medium">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.copy}</p>
                <span className="research-meta">
                  {item.type} · {item.read}
                </span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-primary text-primary-foreground">
        <div className="site-container py-20 lg:py-24">
          <Reveal>
            <Eyebrow inverse>Vision & mission · 07</Eyebrow>
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
