import { useState } from "react";
import { motion } from "motion/react";
import { Reveal, SectionHeading } from "./Section";
import { TECH_NODES, TECH_EDGES } from "@/lib/portfolio-data";

export function TechNetwork() {
  const [hover, setHover] = useState<string | null>(null);
  const nodeMap = Object.fromEntries(TECH_NODES.map((n) => [n.id, n]));

  const connected = (id: string) =>
    hover == null ||
    hover === id ||
    TECH_EDGES.some(([a, b]) => (a === hover && b === id) || (b === hover && a === id));

  return (
    <section id="ecosystem" className="relative py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Tech Ecosystem"
          title="How my skills connect"
          subtitle="Hover a node to explore the relationships across my technical domains."
        />

        <Reveal>
          <div className="relative mx-auto aspect-square max-w-2xl glass rounded-3xl p-4">
            <div className="cyber-grid pointer-events-none absolute inset-0 rounded-3xl opacity-20" />
            <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full">
              {TECH_EDGES.map(([a, b], i) => {
                const na = nodeMap[a];
                const nb = nodeMap[b];
                const lit = hover != null && (hover === a || hover === b);
                return (
                  <motion.line
                    key={i}
                    x1={na.x}
                    y1={na.y}
                    x2={nb.x}
                    y2={nb.y}
                    stroke={lit ? "var(--cyber-cyan)" : "color-mix(in oklab, var(--cyber-blue) 30%, transparent)"}
                    strokeWidth={lit ? 0.6 : 0.3}
                    initial={{ pathLength: 0, opacity: 0 }}
                    whileInView={{ pathLength: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: i * 0.05 }}
                  />
                );
              })}
            </svg>

            {TECH_NODES.map((n) => (
              <button
                key={n.id}
                onMouseEnter={() => setHover(n.id)}
                onMouseLeave={() => setHover(null)}
                onFocus={() => setHover(n.id)}
                onBlur={() => setHover(null)}
                className="absolute flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-1.5 transition-opacity"
                style={{
                  left: `${n.x}%`,
                  top: `${n.y}%`,
                  opacity: connected(n.id) ? 1 : 0.25,
                }}
              >
                <span
                  className="grid h-12 w-12 place-items-center rounded-full border transition-transform hover:scale-110"
                  style={{
                    borderColor: n.accent,
                    background: "color-mix(in oklab, var(--card) 80%, transparent)",
                    color: n.accent,
                    boxShadow: hover === n.id ? `0 0 28px -4px ${n.accent}` : "none",
                  }}
                >
                  <n.icon className="h-5 w-5" />
                </span>
                <span className="whitespace-nowrap rounded-md bg-background/70 px-2 py-0.5 font-mono text-[10px] backdrop-blur">
                  {n.label}
                </span>
              </button>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
