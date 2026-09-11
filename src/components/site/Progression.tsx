import { useState } from "react";

import { futureSignals, intelligenceStack, journeyStages, morphWords } from "../../data/site";
import { Reveal, useInView } from "./Reveal";

/**
 * Compliance → Data → Intelligence → Strategy → Impact.
 * The rail draws itself as the section enters the viewport; the five operating
 * principles sit beneath as interactive nodes.
 */
export function JourneyRail() {
  const { ref, inView } = useInView<HTMLDivElement>(0.2);
  const [active, setActive] = useState(0);
  const signal = futureSignals[active]!;

  return (
    <div ref={ref} className={`journey ${inView ? "is-in" : ""}`}>
      <div className="journey-rail">
        <i className="journey-progress" />
        {journeyStages.map(([stage, copy], i) => (
          <div key={stage} className="journey-stage" style={{ transitionDelay: `${i * 160}ms` }}>
            <span className="journey-dot" />
            <strong>{stage}</strong>
            <small>{copy}</small>
          </div>
        ))}
      </div>

      <div className="mt-14 grid gap-8 lg:grid-cols-12">
        <div className="lg:col-span-7">
          {futureSignals.map(([no, title, sub], i) => (
            <button
              key={no}
              type="button"
              className={`principle ${active === i ? "is-active" : ""}`}
              onMouseEnter={() => setActive(i)}
              onFocus={() => setActive(i)}
              aria-pressed={active === i}
            >
              <span>{no}</span>
              <strong>{title}</strong>
              <small>{sub}</small>
              <i className="principle-line" />
            </button>
          ))}
        </div>
        <div key={active} className="panel-swap self-center lg:col-span-5">
          <div className="principle-readout">
            <span className="eyebrow">Operating principle {signal[0]}</span>
            <p className="mt-5 font-display text-2xl leading-snug">{signal[1]}</p>
            <p className="mt-3 text-sm opacity-70">{signal[2]}</p>
            <div className="mt-7 flex gap-1" aria-hidden="true">
              {Array.from({ length: 24 }).map((_, i) => (
                <i key={i} className="readout-tick" style={{ opacity: i <= active * 5 + 4 ? 0.9 : 0.2, animationDelay: `${i * 24}ms` }} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/** DATA → RESEARCH → INTELLIGENCE → STRATEGY → STORYTELLING → IMPACT. */
export function IntelligenceStackView() {
  const { ref, inView } = useInView<HTMLDivElement>(0.15);
  return (
    <div ref={ref} className={`stack ${inView ? "is-in" : ""}`}>
      {intelligenceStack.map(([layer, title, copy], i) => (
        <div key={layer} className="stack-layer" style={{ transitionDelay: `${i * 120}ms` }}>
          <span className="stack-index">{String(i + 1).padStart(2, "0")}</span>
          <span className="stack-name">{layer}</span>
          <div className="stack-body">
            <strong>{title}</strong>
            <p>{copy}</p>
          </div>
          <i className="stack-bar" style={{ width: `${35 + i * 13}%` }} />
        </div>
      ))}
    </div>
  );
}

/** PURPOSE → INTELLIGENCE → ACTION → IMPACT → LEGACY. */
export function WordProgression({ inverse = false }: { inverse?: boolean }) {
  return (
    <div className={`word-progression ${inverse ? "is-inverse" : ""}`}>
      {morphWords.map((word, i) => (
        <Reveal key={word} delay={i * 130} variant="blur" className="word-step">
          <span>{word}</span>
          {i < morphWords.length - 1 && <i aria-hidden="true" />}
        </Reveal>
      ))}
    </div>
  );
}
