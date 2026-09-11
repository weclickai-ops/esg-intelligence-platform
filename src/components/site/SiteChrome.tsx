import { Link, useRouterState } from "@tanstack/react-router";
import { ArrowRight, Menu, X } from "lucide-react";
import { useEffect, useState, type ReactNode } from "react";

import logoHorizontal from "../../assets/esg-advocacy-logo-horizontal.png";
import { Button } from "../ui/button";
import { CONSULT_MAILTO, navItems } from "../../data/site";
import { Reveal } from "./Reveal";

export function Eyebrow({ children, inverse = false }: { children: ReactNode; inverse?: boolean }) {
  return <div className={`eyebrow ${inverse ? "text-primary-foreground/60" : "text-forest"}`}>{children}</div>;
}

export function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const update = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? (window.scrollY / max) * 100 : 0);
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return <div className="scroll-progress" style={{ transform: `scaleX(${progress / 100})` }} aria-hidden="true" />;
}

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => setMenuOpen(false), [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
      <ScrollProgress />
      <div className="site-container flex h-20 items-center justify-between gap-6">
        <Link to="/" aria-label="ESG Advocacy home" className="logo-link shrink-0">
          <img
            src={logoHorizontal}
            alt="ESG Advocacy — Purpose. Progress. Impact."
            width={1394}
            height={296}
            className="h-9 w-auto object-contain object-left sm:h-11"
          />
        </Link>
        <nav aria-label="Primary navigation" className="hidden items-center gap-7 lg:flex">
          {navItems.map((item) => (
            <Link key={item.to} to={item.to} className="nav-link" activeProps={{ className: "nav-link is-active" }} activeOptions={{ exact: item.to === "/" }}>
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="hidden lg:block">
          <Button asChild variant="outline" className="cta-shine">
            <Link to="/contact">Book a consultation</Link>
          </Button>
        </div>
        <button
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          className="icon-button lg:hidden"
          onClick={() => setMenuOpen((value) => !value)}
        >
          {menuOpen ? <X /> : <Menu />}
        </button>
      </div>
      {menuOpen && (
        <nav aria-label="Mobile navigation" className="mobile-menu lg:hidden">
          {navItems.map((item, index) => (
            <Link
              key={item.to}
              to={item.to}
              className="mobile-link"
              style={{ animationDelay: `${index * 55}ms` }}
            >
              {item.label}
            </Link>
          ))}
          <Button asChild className="mt-5 w-full">
            <a href={CONSULT_MAILTO}>Book an ESG Consultation</a>
          </Button>
        </nav>
      )}
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-secondary">
      <div className="site-container grid gap-10 py-14 md:grid-cols-12">
        <div className="md:col-span-5">
          <img
            src={logoHorizontal}
            alt="ESG Advocacy"
            width={1394}
            height={296}
            loading="lazy"
            className="h-12 w-auto object-contain object-left"
          />
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted-foreground">
            AI-First ESG Intelligence, Research &amp; Impact Platform. Purpose. Progress. Impact.
          </p>
        </div>
        <nav aria-label="Footer navigation" className="md:col-span-4">
          <Eyebrow>Navigate</Eyebrow>
          <ul className="mt-5 space-y-2 text-sm">
            {navItems.map((item) => (
              <li key={item.to}>
                <Link to={item.to} className="footer-link">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="md:col-span-3">
          <Eyebrow>Start a conversation</Eyebrow>
          <a href={CONSULT_MAILTO} className="footer-link mt-5 block text-sm">
            hello@esgadvocacy.in
          </a>
          <p className="mt-8 text-xs text-muted-foreground">
            © {new Date().getFullYear()} ESG Advocacy. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export function PageHero({
  eyebrow,
  title,
  copy,
  children,
}: {
  eyebrow: string;
  title: string;
  copy: string;
  children?: ReactNode;
}) {
  return (
    <section className="page-hero">
      <div className="site-container relative py-16 lg:py-24">
        <Reveal>
          <Eyebrow>{eyebrow}</Eyebrow>
        </Reveal>
        <Reveal delay={90}>
          <h1 className="mt-7 max-w-[16ch] font-display text-5xl font-medium leading-[1.04] lg:text-6xl">{title}</h1>
        </Reveal>
        <Reveal delay={180}>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">{copy}</p>
        </Reveal>
        {children}
      </div>
    </section>
  );
}

export function ConsultCta() {
  return (
    <section className="cta-stage bg-primary text-primary-foreground">
      <ConvergenceField className="cta-field text-primary-foreground" />
      <div className="site-container relative py-20 lg:py-24">
        <Reveal>
          <Eyebrow inverse>Begin</Eyebrow>
        </Reveal>
        <Reveal delay={90}>
          <h2 className="section-title mt-6 max-w-[16ch]">Ready to Build a Future-Ready ESG Strategy?</h2>
        </Reveal>
        <Reveal delay={160}>
          <p className="mt-6 max-w-2xl leading-relaxed text-primary-foreground/70">
            Whether you're beginning your ESG journey or looking to scale your sustainability impact, ESG Advocacy
            provides the intelligence, research, technology, and execution support needed to drive meaningful outcomes.
          </p>
        </Reveal>
        <Reveal delay={230}>
          <Button asChild variant="secondary" className="mt-9 cta-shine">
            <a href={CONSULT_MAILTO}>
              Book Your ESG Consultation <ArrowRight className="ml-2 size-4" />
            </a>
          </Button>
        </Reveal>
        <Reveal delay={300}>
          <p className="mt-16 border-t border-primary-foreground/20 pt-8 font-display text-2xl">
            Let's transform research into action, purpose into progress, and impact into legacy.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
