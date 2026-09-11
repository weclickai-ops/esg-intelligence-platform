import { useEffect, useRef, useState } from "react";

import { industries } from "../../data/site";
import { useIsMobile } from "../../hooks/use-mobile";
import { prefersReducedMotion } from "./canvas";

/**
 * Industries as a slowly rotating network sphere rather than a list. Nodes sit
 * on three latitude bands, scale and fade with depth, and reveal the sector's
 * ESG challenge and our response when selected.
 */
export function IndustryUniverse() {
  const [active, setActive] = useState(0);
  const [angle, setAngle] = useState(0);
  const paused = useRef(false);
  const isMobile = useIsMobile();
  const selected = industries[active]!;

  useEffect(() => {
    if (prefersReducedMotion()) return;
    let raf = 0;
    let last = performance.now();
    const loop = (now: number) => {
      const dt = Math.min((now - last) / 1000, 0.05);
      last = now;
      if (!paused.current) setAngle((a) => a + dt * 0.18);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
      <div className="lg:col-span-7">
        {isMobile ? (
          <div className="universe-chips">
            {industries.map((industry, i) => (
              <button
                key={industry.name}
                type="button"
                className={`universe-node is-static ${active === i ? "is-active" : ""}`}
                onClick={() => setActive(i)}
                aria-pressed={active === i}
              >
                {industry.name}
              </button>
            ))}
          </div>
        ) : (
        <div
          className="universe"
          onMouseEnter={() => (paused.current = true)}
          onMouseLeave={() => (paused.current = false)}
        >
          <div className="universe-shell" />
          <div className="universe-shell universe-shell-inner" />
          {industries.map((industry, i) => {
            const band = (i % 3) - 1; // -1, 0, 1
            const lon = angle + (i / industries.length) * Math.PI * 2;
            const y = 50 + band * 21 + Math.sin(lon) * 3;
            const depth = Math.cos(lon); // 1 = front
            const x = 50 + Math.sin(lon) * 38 * (1 - Math.abs(band) * 0.18);
            const scale = 0.82 + (depth + 1) * 0.12;
            const isActive = active === i;
            return (
              <button
                key={industry.name}
                type="button"
                className={`universe-node ${isActive ? "is-active" : ""}`}
                style={{
                  left: `${x}%`,
                  top: `${y}%`,
                  transform: `translate(-50%,-50%) scale(${isActive ? scale * 1.1 : scale})`,
                  opacity: isActive ? 1 : 0.35 + (depth + 1) * 0.3,
                  zIndex: Math.round((depth + 1) * 50),
                }}
                onMouseEnter={() => setActive(i)}
                onFocus={() => setActive(i)}
                onClick={() => setActive(i)}
                aria-pressed={isActive}
              >
                {industry.name}
              </button>
            );
          })}
        </div>
        )}
      </div>
      <div key={active} className="panel-swap lg:col-span-5">
        <div className="rounded-lg border border-border bg-background p-7">
          <span className="text-xs uppercase tracking-[0.18em] text-forest">
            Sector {String(active + 1).padStart(2, "0")}
          </span>
          <h3 className="mt-4 font-display text-2xl font-medium">{selected.name}</h3>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{selected.copy}</p>
          <dl className="mt-7 space-y-5 border-t border-border pt-6 text-sm">
            <div>
              <dt className="eyebrow text-forest">ESG challenge</dt>
              <dd className="mt-2 leading-relaxed">{selected.challenge}</dd>
            </div>
            <div>
              <dt className="eyebrow text-forest">Our response</dt>
              <dd className="mt-2 leading-relaxed">{selected.solution}</dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
}
