// components/TendrilCursor.tsx
"use client";

import { useEffect, useRef } from "react";

const settings = {
  numTendrils: 30,
  tendrilLength: 30,
  friction: 0.5,
  dampening: 0.25,
  tension: 0.98,
};

class Node {
  x = 0; y = 0; vx = 0; vy = 0;
}

class Tendril {
  spring: number;
  friction: number;
  nodes: Node[];

  constructor(spring: number, mouseX: number, mouseY: number) {
    this.spring = spring + Math.random() * 0.1 - 0.05;
    this.friction = settings.friction + Math.random() * 0.01 - 0.005;
    this.nodes = Array.from({ length: settings.tendrilLength }, () => {
      const n = new Node();
      n.x = mouseX;
      n.y = mouseY;
      return n;
    });
  }

  update(mouseX: number, mouseY: number) {
    let spring = this.spring;
    const head = this.nodes[0];
    head.vx += (mouseX - head.x) * spring;
    head.vy += (mouseY - head.y) * spring;

    for (let i = 0; i < this.nodes.length; i++) {
      const cur = this.nodes[i];
      if (i > 0) {
        const prev = this.nodes[i - 1];
        cur.vx += (prev.x - cur.x) * spring;
        cur.vy += (prev.y - cur.y) * spring;
        cur.vx += prev.vx * settings.dampening;
        cur.vy += prev.vy * settings.dampening;
      }
      cur.vx *= this.friction;
      cur.vy *= this.friction;
      cur.x += cur.vx;
      cur.y += cur.vy;
      spring *= settings.tension;
    }
  }

  draw(ctx: CanvasRenderingContext2D) {
    let x = this.nodes[0].x;
    let y = this.nodes[0].y;
    ctx.beginPath();
    ctx.moveTo(x, y);

    let i = 1;
    for (; i < this.nodes.length - 2; i++) {
      const a = this.nodes[i];
      const b = this.nodes[i + 1];
      x = (a.x + b.x) * 0.5;
      y = (a.y + b.y) * 0.5;
      ctx.quadraticCurveTo(a.x, a.y, x, y);
    }

    const a = this.nodes[i];
    const b = this.nodes[i + 1];
    ctx.quadraticCurveTo(a.x, a.y, b.x, b.y);
    ctx.strokeStyle = "#eb5a00c6";
    ctx.stroke();
    ctx.closePath();
  }
}

export default function TendrilCursor({ children }: { children: React.ReactNode }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const boundsRef = useRef<DOMRect | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let mouseX = 0;
    let mouseY = 0;
    let rafId = 0;

    const tendrils: Tendril[] = Array.from(
      { length: settings.numTendrils },
      (_, i) => new Tendril(0.45 + 0.025 * (i / settings.numTendrils), mouseX, mouseY)
    );

    const updateBounds = () => {
      const bounds = container.getBoundingClientRect();
      boundsRef.current = bounds;
      canvas.width = Math.max(0, Math.floor(bounds.width));
      canvas.height = Math.max(0, Math.floor(bounds.height));
    };

    const onMouseMove = (e: MouseEvent | TouchEvent) => {
      const bounds = boundsRef.current;
      if (!bounds) return;
      const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
      const clientY = "touches" in e ? e.touches[0].clientY : e.clientY;
      mouseX = Math.max(0, Math.min(clientX - bounds.left, bounds.width));
      mouseY = Math.max(0, Math.min(clientY - bounds.top, bounds.height));
    };

    const loop = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.globalCompositeOperation = "lighter";
      ctx.lineWidth = 1;

      for (const t of tendrils) {
        t.update(mouseX, mouseY);
        t.draw(ctx);
      }
      rafId = requestAnimationFrame(loop);
    };

    window.addEventListener("resize", updateBounds);
    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("touchmove", onMouseMove);

    updateBounds();
    loop();

    return () => {
      window.removeEventListener("resize", updateBounds);
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("touchmove", onMouseMove);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div ref={containerRef} className="relative overflow-hidden rounded-3xl border border-black/10 bg-white/90 shadow-lg shadow-black/5 dark:border-white/10 dark:bg-white/5 dark:shadow-white/5">
      <canvas ref={canvasRef} className="pointer-events-none absolute inset-0 z-0" />
      <div className="relative z-10">{children}</div>
    </div>
  );
}