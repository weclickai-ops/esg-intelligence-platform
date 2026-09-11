import { useState } from "react";

import { systemNodes } from "../../data/site";

const R = 210;
const positions = systemNodes.map((_, i) => {
  const a = (i / systemNodes.length) * Math.PI * 2 - Math.PI / 2;
  return { x: 300 + Math.cos(a) * R, y: 300 + Math.sin(a) * R };
});

/**
 * The Fu-Tech intelligence architecture: eight capabilities orbiting a single
 * ESG intelligence core, wired together with live data paths. Hovering a node
 * highlights its connections and subdues the rest.
 */
export function FuTechSystem() {
  const [active, setActive] = useState<number | null>(null);
  const selected = active === null ? null : systemNodes[active]!;
  const linked = selected ? new Set([active!, ...selected.links]) : null;

  const dim = (i: number) => (linked && !linked.has(i) ? 0.25 : 1);

  return (
    <div className="architecture">
      <svg viewBox="0 0 600 600" className="architecture-svg" role="img" aria-label="Fu-Tech ESG intelligence architecture">
        <circle cx="300" cy="300" r={R} className="arch-ring" />
        <circle cx="300" cy="300" r={R * 0.62} className="arch-ring" />
        <circle cx="300" cy="300" r={R * 0.3} className="arch-ring" />

        {systemNodes.map((node, i) =>
          node.links
            .filter((j) => j > i)
            .map((j) => {
              const a = positions[i]!;
              const b = positions[j]!;
              const lit = linked ? linked.has(i) && linked.has(j) : false;
              return (
                <line
                  key={`${i}-${j}`}
                  x1={a.x}
                  y1={a.y}
                  x2={b.x}
                  y2={b.y}
                  className={`arch-link ${lit ? "is-lit" : ""}`}
                  style={{ opacity: linked && !lit ? 0.12 : undefined }}
                />
              );
            }),
        )}

        {positions.map((p, i) => (
          <g key={i} style={{ opacity: dim(i) }} className="arch-spoke-group">
            <line x1="300" y1="300" x2={p.x} y2={p.y} className="arch-spoke" />
            <circle cx={p.x} cy={p.y} r="6" className="arch-dot" />
            <circle cx="300" cy="300" r="3.5" className="arch-pulse" style={{ animationDelay: `${i * 0.55}s`, offsetPath: `path('M 300 300 L ${p.x} ${p.y}')` } as React.CSSProperties} />
          </g>
        ))}

        <circle cx="300" cy="300" r="62" className="arch-core" />
        <text x="300" y="294" textAnchor="middle" className="arch-core-label">
          ESG
        </text>
        <text x="300" y="312" textAnchor="middle" className="arch-core-sub">
          INTELLIGENCE
        </text>
      </svg>

      {systemNodes.map((node, i) => {
        const p = positions[i]!;
        return (
          <button
            key={node.label}
            type="button"
            className={`arch-node ${active === i ? "is-active" : ""}`}
            style={{ left: `${(p.x / 600) * 100}%`, top: `${(p.y / 600) * 100}%`, opacity: dim(i) }}
            onMouseEnter={() => setActive(i)}
            onFocus={() => setActive(i)}
            onMouseLeave={() => setActive(null)}
            onBlur={() => setActive(null)}
            aria-expanded={active === i}
          >
            <span>{String(i + 1).padStart(2, "0")}</span>
            <strong>{node.label}</strong>
            <small>{node.copy}</small>
          </button>
        );
      })}
    </div>
  );
}
