import { useEffect, useRef } from "react";

export type Frame = {
  ctx: CanvasRenderingContext2D;
  w: number;
  h: number;
  t: number;
  /** pointer position in css px, or null when the pointer has never entered */
  px: number;
  py: number;
  pointer: boolean;
  /** 0 → 1 progress of the element through the viewport */
  scroll: number;
  ink: string;
};

export function prefersReducedMotion() {
  return typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

/**
 * Sets up a device-pixel-ratio aware canvas with a rAF loop, pointer tracking
 * and viewport progress. Pauses when offscreen and respects reduced motion.
 */
export function useScene(draw: (f: Frame) => void) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const drawRef = useRef(draw);
  drawRef.current = draw;

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const state = { w: 0, h: 0, px: 0, py: 0, pointer: false, scroll: 0.5, visible: true, t: 0 };
    const reduced = prefersReducedMotion();
    const ink = getComputedStyle(canvas).color || "rgb(20,80,60)";

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      state.w = rect.width;
      state.h = rect.height;
      canvas.width = Math.max(1, Math.round(rect.width * dpr));
      canvas.height = Math.max(1, Math.round(rect.height * dpr));
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const onScroll = () => {
      const rect = canvas.getBoundingClientRect();
      const vh = window.innerHeight || 1;
      state.scroll = Math.min(Math.max((vh - rect.top) / (vh + rect.height), 0), 1);
      state.visible = rect.bottom > -200 && rect.top < vh + 200;
    };

    const onPointer = (e: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      state.px = e.clientX - rect.left;
      state.py = e.clientY - rect.top;
      state.pointer = true;
    };
    const onLeave = () => {
      state.pointer = false;
    };

    resize();
    onScroll();

    const ro = new ResizeObserver(resize);
    ro.observe(canvas);
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    window.addEventListener("pointermove", onPointer, { passive: true });
    canvas.addEventListener("pointerleave", onLeave);

    let raf = 0;
    let last = performance.now();
    const loop = (now: number) => {
      const dt = Math.min((now - last) / 1000, 0.05);
      last = now;
      if (!reduced) state.t += dt;
      if (state.visible) {
        ctx.clearRect(0, 0, state.w, state.h);
        drawRef.current({
          ctx,
          w: state.w,
          h: state.h,
          t: state.t,
          px: state.px,
          py: state.py,
          pointer: state.pointer,
          scroll: state.scroll,
          ink,
        });
      }
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      window.removeEventListener("pointermove", onPointer);
      canvas.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  return canvasRef;
}

/** Deterministic pseudo-random so server and client agree on layouts. */
export function rand(seed: number) {
  const x = Math.sin(seed * 127.1) * 43758.5453;
  return x - Math.floor(x);
}

/** Evenly distributed points on a unit sphere. */
export function fibonacciSphere(count: number) {
  const pts: Array<[number, number, number]> = [];
  const golden = Math.PI * (3 - Math.sqrt(5));
  for (let i = 0; i < count; i++) {
    const y = 1 - (i / (count - 1)) * 2;
    const r = Math.sqrt(Math.max(0, 1 - y * y));
    const theta = golden * i;
    pts.push([Math.cos(theta) * r, y, Math.sin(theta) * r]);
  }
  return pts;
}
