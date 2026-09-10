import { Eyebrow } from "./SiteChrome";
import { useInView } from "./Reveal";

/** Abstract animated ESG intelligence plot used on the home hero. */
export function SignalField() {
  const { ref, inView } = useInView<HTMLDivElement>(0.2);
  return (
    <div ref={ref} className={`signal-field ${inView ? "is-live" : ""}`}>
      <div className="flex items-center justify-between">
        <Eyebrow>Live signal field</Eyebrow>
        <span className="live-dot" />
      </div>
      <div className="signal-plot" aria-label="Abstract ESG intelligence visualization">
        <span className="plot-line line-a" />
        <span className="plot-line line-b" />
        <span className="plot-line line-c" />
        <span className="plot-sweep" aria-hidden="true" />
        {[
          [12, 64],
          [32, 42],
          [55, 28],
          [74, 54],
          [88, 18],
        ].map(([x, y], i) => (
          <span key={x} className="plot-node" style={{ left: `${x}%`, bottom: `${y}%`, animationDelay: `${i * 280}ms` }} />
        ))}
        <svg viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
          <path d="M 0 76 C 18 68, 20 48, 38 52 S 58 25, 73 39 S 88 18, 100 12" />
        </svg>
      </div>
      <div className="grid grid-cols-4 border-t border-border pt-4 text-[10px] uppercase text-muted-foreground">
        <span>Carbon</span>
        <span>Social</span>
        <span>Governance</span>
        <span>Impact</span>
      </div>
    </div>
  );
}

/** Animated bar trend that draws itself when scrolled into view. */
export function TrendBars({ inverse = false }: { inverse?: boolean }) {
  const { ref, inView } = useInView<HTMLDivElement>(0.3);
  return (
    <div
      ref={ref}
      className="mt-8 flex h-20 items-end gap-2"
      aria-label="Purpose-driven value trend visualization"
    >
      {[28, 38, 46, 54, 62, 76, 88, 100].map((height, i) => (
        <div
          key={height}
          className={`signal-bar flex-1 ${inverse ? "bg-primary-foreground" : "bg-forest"} ${inView ? "is-in" : ""}`}
          style={{ "--bar-height": `${height}%`, transitionDelay: `${i * 80}ms` } as React.CSSProperties}
        />
      ))}
    </div>
  );
}
