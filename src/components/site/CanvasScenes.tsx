import { fibonacciSphere, useScene, type Frame } from "./canvas";
import { heroLabels, intelligenceSignals } from "../../data/site";

const SPHERE = fibonacciSphere(130);
const EDGES: Array<[number, number]> = [];
for (let i = 0; i < SPHERE.length; i++) {
  for (let j = i + 1; j < SPHERE.length; j++) {
    const a = SPHERE[i]!;
    const b = SPHERE[j]!;
    const d = Math.hypot(a[0] - b[0], a[1] - b[1], a[2] - b[2]);
    if (d < 0.36) EDGES.push([i, j]);
  }
}
const LABEL_POINTS = [4, 18, 33, 47, 62, 79, 96, 114];
const DIMENSIONS = ["Environment", "Social", "Governance"];

function rgba(ink: string, alpha: number) {
  // ink arrives as rgb(...) from getComputedStyle
  return ink.startsWith("rgb(") ? ink.replace("rgb(", "rgba(").replace(")", `, ${alpha})`) : ink;
}

/**
 * The hero visualization: a rotating global ESG network. Nodes are markets and
 * institutions, edges are relationships, travelling particles are data moving
 * through the system. Cursor position steers the globe; scroll tilts it.
 */
export function IntelligenceGlobe({ className = "" }: { className?: string }) {
  const ref = useScene((f: Frame) => {
    const { ctx, w, h, t, ink } = f;
    const cx = w / 2;
    const cy = h / 2;
    const R = Math.min(w, h) * 0.36;

    const mx = f.pointer ? (f.px - cx) / w : 0;
    const my = f.pointer ? (f.py - cy) / h : 0;
    const yaw = t * 0.14 + mx * 0.9;
    const pitch = -0.32 + my * 0.5 + (f.scroll - 0.5) * 0.5;

    const cosY = Math.cos(yaw);
    const sinY = Math.sin(yaw);
    const cosP = Math.cos(pitch);
    const sinP = Math.sin(pitch);

    const proj = SPHERE.map(([x, y, z]) => {
      const x1 = x * cosY - z * sinY;
      const z1 = x * sinY + z * cosY;
      const y2 = y * cosP - z1 * sinP;
      const z2 = y * sinP + z1 * cosP;
      return { sx: cx + x1 * R, sy: cy - y2 * R, depth: (z2 + 1) / 2 };
    });

    // orbital dimension rings
    ctx.lineWidth = 1;
    DIMENSIONS.forEach((label, i) => {
      const rr = R * (1.12 + i * 0.14);
      const squash = 0.26 + i * 0.06;
      ctx.save();
      ctx.translate(cx, cy);
      ctx.rotate(-0.32 + i * 0.28 + Math.sin(t * 0.1 + i) * 0.05);
      ctx.beginPath();
      ctx.ellipse(0, 0, rr, rr * squash, 0, 0, Math.PI * 2);
      ctx.strokeStyle = rgba(ink, 0.16);
      ctx.stroke();
      // travelling marker on the ring
      const p = (t * (0.06 + i * 0.02) + i * 0.33) % 1;
      const a = p * Math.PI * 2;
      const dx = Math.cos(a) * rr;
      const dy = Math.sin(a) * rr * squash;
      ctx.beginPath();
      ctx.arc(dx, dy, 3, 0, Math.PI * 2);
      ctx.fillStyle = rgba(ink, 0.75);
      ctx.fill();
      ctx.font = "600 9px 'DM Sans', sans-serif";
      ctx.fillStyle = rgba(ink, 0.6);
      ctx.save();
      ctx.translate(dx + 8, dy);
      ctx.rotate(0.32 - i * 0.28);
      ctx.fillText(label.toUpperCase(), 0, 3);
      ctx.restore();
      ctx.restore();
    });

    // network edges
    for (const [i, j] of EDGES) {
      const a = proj[i]!;
      const b = proj[j]!;
      const depth = (a.depth + b.depth) / 2;
      if (depth < 0.32) continue;
      ctx.beginPath();
      ctx.moveTo(a.sx, a.sy);
      ctx.lineTo(b.sx, b.sy);
      ctx.strokeStyle = rgba(ink, 0.05 + depth * 0.16);
      ctx.stroke();
    }

    // data particles travelling along a stable subset of edges
    for (let k = 0; k < 26; k++) {
      const e = EDGES[(k * 17) % EDGES.length]!;
      const a = proj[e[0]]!;
      const b = proj[e[1]]!;
      const depth = (a.depth + b.depth) / 2;
      if (depth < 0.4) continue;
      const p = (t * 0.35 + k * 0.137) % 1;
      const x = a.sx + (b.sx - a.sx) * p;
      const y = a.sy + (b.sy - a.sy) * p;
      ctx.beginPath();
      ctx.arc(x, y, 1.6, 0, Math.PI * 2);
      ctx.fillStyle = rgba(ink, 0.35 + depth * 0.55);
      ctx.fill();
    }

    // nodes
    proj.forEach((p, i) => {
      if (p.depth < 0.28) return;
      const isLabel = LABEL_POINTS.includes(i);
      const near = f.pointer && Math.hypot(p.sx - f.px, p.sy - f.py) < 70;
      const r = (isLabel ? 2.6 : 1.3) * (0.6 + p.depth) * (near ? 1.8 : 1);
      ctx.beginPath();
      ctx.arc(p.sx, p.sy, r, 0, Math.PI * 2);
      ctx.fillStyle = rgba(ink, 0.2 + p.depth * (isLabel ? 0.8 : 0.5));
      ctx.fill();
    });

    // dynamic labels anchored to front-facing nodes
    ctx.font = "500 10px 'DM Sans', sans-serif";
    LABEL_POINTS.forEach((idx, i) => {
      const p = proj[idx]!;
      if (p.depth < 0.62) return;
      const alpha = Math.min((p.depth - 0.62) / 0.2, 1);
      ctx.strokeStyle = rgba(ink, alpha * 0.4);
      ctx.beginPath();
      ctx.moveTo(p.sx, p.sy);
      ctx.lineTo(p.sx + 14, p.sy - 12);
      ctx.lineTo(p.sx + 40, p.sy - 12);
      ctx.stroke();
      ctx.fillStyle = rgba(ink, alpha * 0.85);
      ctx.fillText(heroLabels[i] ?? "", p.sx + 16, p.sy - 16);
    });
  });

  return (
    <canvas
      ref={ref}
      className={`text-forest ${className}`}
      role="img"
      aria-label="Rotating global ESG intelligence network with environment, social and governance dimensions"
    />
  );
}

/**
 * Insights hero: a live-style field of connected intelligence signals drifting
 * and re-linking, labelled with the domains we monitor.
 */
export function SignalField({ className = "" }: { className?: string }) {
  const ref = useScene((f: Frame) => {
    const { ctx, w, h, t, ink } = f;
    const pts = intelligenceSignals.map((label, i) => {
      const bx = ((i % 4) + 0.5) / 4;
      const by = (Math.floor(i / 4) + 0.5) / 2;
      const x = bx * w + Math.sin(t * 0.35 + i * 1.7) * w * 0.05;
      const y = by * h + Math.cos(t * 0.29 + i * 2.3) * h * 0.09;
      return { x, y, label };
    });

    for (let i = 0; i < pts.length; i++) {
      for (let j = i + 1; j < pts.length; j++) {
        const a = pts[i]!;
        const b = pts[j]!;
        const d = Math.hypot(a.x - b.x, a.y - b.y);
        const max = Math.min(w, h) * 0.85;
        if (d > max) continue;
        ctx.beginPath();
        ctx.moveTo(a.x, a.y);
        ctx.lineTo(b.x, b.y);
        ctx.strokeStyle = rgba(ink, 0.05 + (1 - d / max) * 0.16);
        ctx.lineWidth = 1;
        ctx.stroke();
        const p = (t * 0.22 + (i + j) * 0.11) % 1;
        ctx.beginPath();
        ctx.arc(a.x + (b.x - a.x) * p, a.y + (b.y - a.y) * p, 1.5, 0, Math.PI * 2);
        ctx.fillStyle = rgba(ink, 0.5);
        ctx.fill();
      }
    }

    ctx.font = "500 10px 'DM Sans', sans-serif";
    for (const p of pts) {
      const near = f.pointer && Math.hypot(p.x - f.px, p.y - f.py) < 90;
      ctx.beginPath();
      ctx.arc(p.x, p.y, near ? 5 : 3, 0, Math.PI * 2);
      ctx.fillStyle = rgba(ink, near ? 0.95 : 0.7);
      ctx.fill();
      ctx.fillStyle = rgba(ink, near ? 0.9 : 0.45);
      ctx.fillText(p.label.toUpperCase(), p.x + 9, p.y + 3);
    }
  });

  return (
    <canvas
      ref={ref}
      className={`text-forest ${className}`}
      role="img"
      aria-label="Connected field of ESG intelligence signals"
    />
  );
}

/**
 * Final CTA: a dispersed network converging steadily into a single point —
 * many signals resolving into one decision.
 */
export function ConvergenceField({ className = "" }: { className?: string }) {
  const ref = useScene((f: Frame) => {
    const { ctx, w, h, t, ink } = f;
    const cx = w / 2;
    const cy = h / 2;
    for (let i = 0; i < 90; i++) {
      const a = (i / 90) * Math.PI * 2 + i * 0.013;
      const cycle = (t * 0.12 + i * 0.0111) % 1;
      const eased = 1 - Math.pow(cycle, 2.2);
      const radius = Math.max(w, h) * 0.62 * eased;
      const x = cx + Math.cos(a) * radius;
      const y = cy + Math.sin(a) * radius * 0.55;
      const alpha = Math.min(cycle * 2, 1) * 0.6;
      ctx.beginPath();
      ctx.moveTo(x, y);
      ctx.lineTo(cx + Math.cos(a) * radius * 0.86, cy + Math.sin(a) * radius * 0.55 * 0.86);
      ctx.strokeStyle = rgba(ink, alpha * 0.35);
      ctx.lineWidth = 1;
      ctx.stroke();
      ctx.beginPath();
      ctx.arc(x, y, 1.6, 0, Math.PI * 2);
      ctx.fillStyle = rgba(ink, alpha);
      ctx.fill();
    }
    const pulse = 0.5 + Math.sin(t * 1.6) * 0.15;
    ctx.beginPath();
    ctx.arc(cx, cy, 6 + pulse * 4, 0, Math.PI * 2);
    ctx.fillStyle = rgba(ink, 0.9);
    ctx.fill();
    ctx.beginPath();
    ctx.arc(cx, cy, 26 + pulse * 14, 0, Math.PI * 2);
    ctx.strokeStyle = rgba(ink, 0.25);
    ctx.stroke();
  });

  return <canvas ref={ref} className={className} aria-hidden="true" />;
}
