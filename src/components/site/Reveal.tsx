import { useEffect, useRef, useState, type ElementType, type ReactNode } from "react";

/** Shared scroll-driven visibility registry (one listener for the whole page). */
type Entry = { el: HTMLElement; ratio: number; cb: () => void };
const entries = new Set<Entry>();
let listening = false;
let queued = false;

function check() {
  queued = false;
  const vh = window.innerHeight || document.documentElement.clientHeight;
  for (const entry of [...entries]) {
    const rect = entry.el.getBoundingClientRect();
    const visible = Math.min(rect.bottom, vh) - Math.max(rect.top, 0);
    const needed = Math.min(rect.height * entry.ratio, vh * 0.35);
    if (rect.height === 0 || visible >= needed) {
      entries.delete(entry);
      entry.cb();
    }
  }
}

function schedule() {
  if (queued) return;
  queued = true;
  requestAnimationFrame(check);
}

function register(el: HTMLElement, ratio: number, cb: () => void) {
  entries.add({ el, ratio, cb });
  if (!listening) {
    listening = true;
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
  }
  schedule();
  return () => {
    for (const entry of entries) if (entry.el === el) entries.delete(entry);
  };
}

export function useInView<T extends HTMLElement>(ratio = 0.15) {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) {
      setInView(true);
      return;
    }
    return register(node, ratio, () => setInView(true));
  }, [ratio]);

  return { ref, inView };
}

type RevealProps = {
  children: ReactNode;
  as?: ElementType;
  delay?: number;
  variant?: "up" | "fade" | "left" | "right" | "blur";
  className?: string;
};

export function Reveal({ children, as, delay = 0, variant = "up", className = "" }: RevealProps) {
  const Tag = (as ?? "div") as ElementType;
  const { ref, inView } = useInView<HTMLDivElement>();

  return (
    <Tag
      ref={ref}
      className={`reveal reveal-${variant} ${inView ? "is-visible" : ""} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </Tag>
  );
}

/** Animates a number up from 0 the first time it scrolls into view. */
export function CountUp({ to, suffix = "", duration = 1400 }: { to: number; suffix?: string; duration?: number }) {
  const { ref, inView } = useInView<HTMLSpanElement>(0.4);
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;
    if (typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setValue(to);
      return;
    }
    let frame = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setValue(Math.round(to * eased));
      if (p < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, to, duration]);

  return (
    <span ref={ref}>
      {value}
      {suffix}
    </span>
  );
}
