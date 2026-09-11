import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";

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
  const [submitted, setSubmitted] = useState(false);

  function submitContact(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const subject = encodeURIComponent(`ESG consultation request from ${String(data.get("fullName") || "Website visitor")}`);
    const body = encodeURIComponent(
      `Full Name: ${String(data.get("fullName") || "")}\nCompany: ${String(data.get("company") || "")}\nEmail: ${String(data.get("email") || "")}\nPhone Number: ${String(data.get("phone") || "")}\n\nMessage:\n${String(data.get("message") || "")}`,
    );
    setSubmitted(true);
    window.location.href = `mailto:hello@esgadvocacy.in?subject=${subject}&body=${body}`;
  }

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Ready to Build a Future-Ready ESG Strategy?"
        copy="Whether you're beginning your ESG journey or looking to scale your sustainability impact, ESG Advocacy provides the intelligence, research, technology, and execution support needed to drive meaningful outcomes."
      />

      <section className="border-y border-border bg-secondary/60">
        <div className="site-container grid gap-12 py-16 lg:grid-cols-12 lg:py-24">
          <Reveal className="lg:col-span-4">
            <Eyebrow>Start a conversation</Eyebrow>
            <h2 className="mt-6 font-display text-3xl font-medium">Tell us where you are in your ESG journey.</h2>
            <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
              Share your priorities and our team will follow up to discuss the right next step.
            </p>
          </Reveal>
          <Reveal delay={100} className="lg:col-span-7 lg:col-start-6">
            <form className="contact-form" onSubmit={submitContact}>
              <div className="contact-form-grid">
                <label>Full Name<input name="fullName" autoComplete="name" required /></label>
                <label>Company<input name="company" autoComplete="organization" required /></label>
                <label>Email<input name="email" type="email" autoComplete="email" required /></label>
                <label>Phone Number<input name="phone" type="tel" autoComplete="tel" required /></label>
              </div>
              <label>Message<textarea name="message" rows={6} required /></label>
              <div className="mt-7 flex flex-wrap items-center gap-4">
                <Button type="submit" className="cta-shine">Book a Consultation</Button>
                {submitted && <span className="text-sm text-muted-foreground" role="status">Your email app is opening.</span>}
              </div>
            </form>
          </Reveal>
        </div>
      </section>

      <section>
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
