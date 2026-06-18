import { Reveal, SectionHeading } from "./Section";
import { ROADMAP } from "@/lib/portfolio-data";
import { CircleCheck, Loader, Target } from "lucide-react";

const STATUS = {
  done: { icon: CircleCheck, color: "var(--cyber-green)", label: "Mastered" },
  active: { icon: Loader, color: "var(--cyber-cyan)", label: "In Progress" },
  future: { icon: Target, color: "var(--cyber-purple)", label: "Planned" },
} as const;

export function Roadmap() {
  return (
    <section id="roadmap" className="relative py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Learning Roadmap"
          title="Where I am, and where I'm headed"
          subtitle="A transparent view of my continuous learning across the tech stack."
        />

        <div className="grid gap-6 md:grid-cols-3">
          {ROADMAP.map((stage, i) => {
            const meta = STATUS[stage.status];
            return (
              <Reveal key={stage.stage} delay={i * 0.08}>
                <div
                  className="glass h-full rounded-2xl p-6"
                  style={{ ["--c" as string]: meta.color }}
                >
                  <div className="mb-5 flex items-center gap-3">
                    <span
                      className="grid h-10 w-10 place-items-center rounded-xl"
                      style={{
                        background: "color-mix(in oklab, var(--c) 14%, transparent)",
                        color: "var(--c)",
                      }}
                    >
                      <meta.icon className="h-5 w-5" />
                    </span>
                    <div>
                      <h3 className="font-display text-lg font-semibold">{stage.stage}</h3>
                      <span className="font-mono text-xs" style={{ color: "var(--c)" }}>
                        {meta.label}
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {stage.topics.map((t) => (
                      <span
                        key={t}
                        className="rounded-lg border px-3 py-1.5 text-sm"
                        style={{
                          borderColor: "color-mix(in oklab, var(--c) 30%, transparent)",
                          background: "color-mix(in oklab, var(--c) 7%, transparent)",
                        }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
