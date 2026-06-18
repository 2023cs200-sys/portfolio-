import { motion } from "motion/react";
import { Reveal, SectionHeading } from "./Section";
import { SKILLS } from "@/lib/portfolio-data";

export function Skills() {
  return (
    <section id="skills" className="relative py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Skills & Expertise"
          title="A full-spectrum technical toolkit"
          subtitle="From secure code to cloud architecture and machine learning — here's what I work with."
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SKILLS.map((cat, i) => (
            <Reveal key={cat.name} delay={(i % 3) * 0.06}>
              <div
                className="group glass h-full rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1.5"
                style={{ ["--c" as string]: cat.accent }}
              >
                <div className="mb-5 flex items-center gap-3">
                  <span
                    className="grid h-11 w-11 place-items-center rounded-xl transition-transform group-hover:scale-110"
                    style={{
                      background: "color-mix(in oklab, var(--c) 14%, transparent)",
                      color: "var(--c)",
                      boxShadow: "0 0 24px -8px var(--c)",
                    }}
                  >
                    <cat.icon className="h-5 w-5" />
                  </span>
                  <h3 className="font-display text-lg font-semibold">{cat.name}</h3>
                </div>

                <div className="space-y-3.5">
                  {cat.skills.map((s) => (
                    <div key={s.name}>
                      <div className="mb-1 flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">{s.name}</span>
                        <span className="font-mono text-xs" style={{ color: "var(--c)" }}>
                          {s.level}%
                        </span>
                      </div>
                      <div className="h-1.5 overflow-hidden rounded-full bg-secondary">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${s.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, ease: "easeOut" }}
                          className="h-full rounded-full"
                          style={{ background: "var(--c)", boxShadow: "0 0 12px var(--c)" }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
