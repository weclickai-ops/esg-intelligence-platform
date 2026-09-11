import { useState } from "react";

import { solutions } from "../../data/site";

/**
 * Solutions as an ecosystem: five systems orbiting the ESG Advocacy core.
 * Selecting one expands the problem, the delivery and the business impact —
 * the full capability list stays available but never dominates the view.
 */
export function SolutionOrbit() {
  const [active, setActive] = useState(0);
  const [showAll, setShowAll] = useState(false);
  const selected = solutions[active]!;

  return (
    <div className="grid gap-10 lg:grid-cols-12">
      <div className="lg:col-span-5">
        <div className="orbit">
          <div className="orbit-ring orbit-ring-1" />
          <div className="orbit-ring orbit-ring-2" />
          <div className="orbit-core">
            <span>ESG</span>
            <strong>ADVOCACY</strong>
          </div>
          {solutions.map((solution, i) => {
            const angle = (i / solutions.length) * Math.PI * 2 - Math.PI / 2;
            return (
              <div
                key={solution.title}
                className="orbit-slot"
                style={{ left: `${50 + Math.cos(angle) * 42}%`, top: `${50 + Math.sin(angle) * 42}%` }}
              >
                <button
                  type="button"
                  className={`orbit-node ${active === i ? "is-active" : ""}`}
                  onClick={() => {
                    setActive(i);
                    setShowAll(false);
                  }}
                  aria-pressed={active === i}
                >
                  <span>0{i + 1}</span>
                  <strong>{solution.short}</strong>
                </button>
              </div>
            );
          })}
        </div>
      </div>

      <div key={active} className="panel-swap lg:col-span-7">
        <div className="rounded-lg border border-border bg-background p-7 lg:p-9">
          <span className="text-xs uppercase tracking-[0.18em] text-forest">System 0{active + 1}</span>
          <h3 className="mt-4 font-display text-3xl font-medium leading-tight">{selected.title}</h3>
          <p className="mt-3 max-w-xl text-muted-foreground">{selected.summary}</p>

          <div className="mt-8 grid gap-px overflow-hidden rounded-md border border-border bg-border sm:grid-cols-3">
            {[
              ["What we solve", selected.solve],
              ["What we deliver", selected.deliver],
              ["Business impact", selected.impact],
            ].map(([label, copy], i) => (
              <div key={label} className="outcome-cell" style={{ animationDelay: `${i * 90}ms` }}>
                <span>{label}</span>
                <p>{copy}</p>
              </div>
            ))}
          </div>

          <button type="button" className="disclosure" onClick={() => setShowAll((v) => !v)} aria-expanded={showAll}>
            {showAll ? "Hide capability index" : `View all ${selected.items.length} capabilities`}
          </button>

          {showAll && (
            <div className="mt-5 grid gap-x-8 gap-y-2 sm:grid-cols-2">
              {selected.items.map((item, i) => (
                <div key={item} className="capability-cell flex items-center gap-3 border-b border-border py-2 text-sm" style={{ animationDelay: `${i * 30}ms` }}>
                  <span className="text-xs text-muted-foreground">{String(i + 1).padStart(2, "0")}</span>
                  {item}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
