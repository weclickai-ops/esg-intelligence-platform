import { useState } from "react";

import { industries } from "../../data/site";

const R = 42; // % radius inside the sphere

/**
 * Industries as a network rather than a list: twelve sector nodes distributed
 * across a slowly rotating sphere. Selecting a node reveals its ESG challenge
 * and the response we bring to it.
 */
export function IndustryUniverse() {
  const [active, setActive] = useState(0);
  const selected = industries[active]!;

  return (
    <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
      <div className="lg:col-span-7">
        <div className="universe">
          <div className="universe-shell" />
          <div className="universe-shell universe-shell-inner" />
          <div className="universe-spin">
            {industries.map((industry, i) => {
              const lat = ((i % 3) - 1) * 26; // three bands
              const lon = (i / industries.length) * 360;
              return (
                <div
                  key={industry.name}
                  className="universe-slot"
                  style={{ transform: `rotateX(${lat}deg) rotateY(${lon}deg) translateZ(${R * 4}px)` }}
                >
                  <button
                    type="button"
                    className={`universe-node ${active === i ? "is-active" : ""}`}
                    onMouseEnter={() => setActive(i)}
                    onFocus={() => setActive(i)}
                    onClick={() => setActive(i)}
                    aria-pressed={active === i}
                  >
                    {industry.name}
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div key={active} className="panel-swap lg:col-span-5">
        <div className="rounded-lg border border-border bg-background p-7">
          <span className="text-xs uppercase tracking-[0.18em] text-forest">Sector {String(active + 1).padStart(2, "0")}</span>
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
