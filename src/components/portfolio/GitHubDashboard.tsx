import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "motion/react";
import { Reveal, SectionHeading } from "./Section";
import { GITHUB_STATS } from "@/lib/portfolio-data";

function Counter({ value }: { value: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let raf = 0;
    const start = performance.now();
    const dur = 1400;
    const tick = (t: number) => {
      const p = Math.min((t - start) / dur, 1);
      setN(Math.floor((1 - Math.pow(1 - p, 3)) * value));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, value]);

  return <span ref={ref}>{n.toLocaleString()}</span>;
}

const WEEKS = 26;
const DAYS = 7;
const HEAT = Array.from({ length: WEEKS * DAYS }, () => Math.floor(Math.random() * 5));

function levelColor(l: number) {
  const map = [
    "color-mix(in oklab, var(--secondary) 80%, transparent)",
    "color-mix(in oklab, var(--cyber-green) 25%, transparent)",
    "color-mix(in oklab, var(--cyber-green) 45%, transparent)",
    "color-mix(in oklab, var(--cyber-green) 70%, transparent)",
    "var(--cyber-green)",
  ];
  return map[l];
}

export function GitHubDashboard() {
  return (
    <section id="github" className="relative py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Activity"
          title="GitHub Dashboard"
          subtitle="A snapshot of my coding consistency and open-source activity."
        />

        <div className="mb-6 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {GITHUB_STATS.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.05}>
              <div className="glass rounded-2xl p-5 text-center">
                <s.icon className="mx-auto mb-2 h-5 w-5 text-cyber-cyan" />
                <div className="text-gradient font-display text-3xl font-bold">
                  <Counter value={s.value} />+
                </div>
                <div className="mt-1 text-xs text-muted-foreground">{s.label}</div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="glass rounded-2xl p-6">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="font-display text-lg font-semibold">Contribution Activity</h3>
              <span className="font-mono text-xs text-muted-foreground">last 6 months</span>
            </div>
            <div className="flex justify-center overflow-x-auto pb-2">
              <div
                className="grid grid-flow-col gap-1"
                style={{ gridTemplateRows: `repeat(${DAYS}, minmax(0, 1fr))` }}
              >
                {HEAT.map((lvl, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, scale: 0.4 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: (i % WEEKS) * 0.01 }}
                    className="h-3 w-3 rounded-[3px]"
                    style={{ background: levelColor(lvl) }}
                  />
                ))}
              </div>
            </div>
            <div className="mt-4 flex items-center justify-end gap-2 font-mono text-xs text-muted-foreground">
              Less
              {[0, 1, 2, 3, 4].map((l) => (
                <span key={l} className="h-3 w-3 rounded-[3px]" style={{ background: levelColor(l) }} />
              ))}
              More
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
