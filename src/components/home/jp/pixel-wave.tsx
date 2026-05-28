"use client";

import { useEffect, useRef } from "react";

type Dot = {
  baseX: number;
  baseY: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
};

type Props = {
  spacing?: number;
  radius?: number;
  pushStrength?: number;
  spring?: number;
  damping?: number;
  dotRadius?: number;
  baseAlpha?: number;
  color?: string;
};

export function PixelWave({
  spacing = 26,
  radius = 170,
  pushStrength = 14,
  spring = 0.06,
  damping = 0.86,
  dotRadius = 1.1,
  baseAlpha = 0.10,
  color = "255, 255, 255",
}: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const dotsRef = useRef<Dot[]>([]);
  const mouseRef = useRef({ x: -10000, y: -10000 });
  const rafRef = useRef<number>(0);
  const lastSizeRef = useRef({ w: 0, h: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const parent = canvas.parentElement;
    if (!parent) return;
    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    const setup = () => {
      const rect = parent.getBoundingClientRect();
      if (rect.width === lastSizeRef.current.w && rect.height === lastSizeRef.current.h) return;
      lastSizeRef.current = { w: rect.width, h: rect.height };

      canvas.width = Math.floor(rect.width * dpr);
      canvas.height = Math.floor(rect.height * dpr);
      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const cols = Math.ceil(rect.width / spacing) + 1;
      const rows = Math.ceil(rect.height / spacing) + 1;
      const offsetX = (rect.width - (cols - 1) * spacing) / 2;
      const offsetY = (rect.height - (rows - 1) * spacing) / 2;

      const next: Dot[] = [];
      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          const x = offsetX + i * spacing;
          const y = offsetY + j * spacing;
          next.push({ baseX: x, baseY: y, x, y, vx: 0, vy: 0 });
        }
      }
      dotsRef.current = next;
    };

    setup();

    const ro = new ResizeObserver(() => setup());
    ro.observe(parent);

    const draw = () => {
      const { width, height } = parent.getBoundingClientRect();
      ctx.clearRect(0, 0, width, height);

      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;
      const radiusSq = radius * radius;

      for (let k = 0; k < dotsRef.current.length; k++) {
        const d = dotsRef.current[k];

        if (!reduced) {
          const dx = d.x - mx;
          const dy = d.y - my;
          const distSq = dx * dx + dy * dy;
          if (distSq < radiusSq && distSq > 0.01) {
            const dist = Math.sqrt(distSq);
            const falloff = 1 - dist / radius;
            const f = pushStrength * falloff * falloff;
            d.vx += (dx / dist) * f * 0.18;
            d.vy += (dy / dist) * f * 0.18;
          }

          d.vx += (d.baseX - d.x) * spring;
          d.vy += (d.baseY - d.y) * spring;
          d.vx *= damping;
          d.vy *= damping;
          d.x += d.vx;
          d.y += d.vy;
        }

        const dispX = d.x - d.baseX;
        const dispY = d.y - d.baseY;
        const disp = Math.sqrt(dispX * dispX + dispY * dispY);
        const alpha = Math.min(0.55, baseAlpha + disp * 0.022);

        ctx.fillStyle = `rgba(${color}, ${alpha})`;
        ctx.beginPath();
        ctx.arc(d.x, d.y, dotRadius, 0, Math.PI * 2);
        ctx.fill();
      }

      rafRef.current = requestAnimationFrame(draw);
    };

    rafRef.current = requestAnimationFrame(draw);

    const onMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current.x = e.clientX - rect.left;
      mouseRef.current.y = e.clientY - rect.top;
    };
    const onLeave = () => {
      mouseRef.current.x = -10000;
      mouseRef.current.y = -10000;
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mouseout", onLeave);

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseout", onLeave);
      ro.disconnect();
    };
  }, [spacing, radius, pushStrength, spring, damping, dotRadius, baseAlpha, color]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      className="absolute inset-0 h-full w-full pointer-events-none mix-blend-screen"
    />
  );
}
