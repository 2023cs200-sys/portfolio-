import { useState } from "react";
import { motion } from "motion/react";
import { AnimatePresence } from "framer-motion";
import { Reveal, SectionHeading } from "./Section";
import { DOMAINS } from "@/lib/portfolio-data";
import { ArrowUpRight } from "lucide-react";

export function Domains() {
  const [active, setActive] = useState(DOMAINS[0].id);
  const domain = DOMAINS.find((d) => d.id === active)!;

  return (
    <section id="domains" className="relative py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Deep Dives"
          title="AI, Cloud & Blockchain exploration"
          subtitle="Three frontier domains I'm actively learning and building within."
        />

        <Reveal className="mb-8 flex flex-wrap justify-center gap-2">
          {DOMAINS.map((d) => (
            <button
              key={d.id}
              onClick={() => setActive(d.id)}
              className={`inline-flex items-center gap-2 rounded-xl border px-4 py-2.5 text-sm font-medium transition-all ${
                active === d.id
                  ? "border-transparent text-background"
                  : "border-border text-muted-foreground hover:text-foreground"
              }`}
              style={active === d.id ? { background: d.accent, boxShadow: `0 0 24px -8px ${d.accent}` } : undefined}
            >
              <d.icon className="h-4 w-4" />
              {d.label}
            </button>
          ))}
        </Reveal>

        <AnimatePresence mode="wait">
          <motion.div
            key={domain.id}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.35 }}
          >
            <p className="mb-6 text-center font-mono text-sm" style={{ color: domain.accent }}>
              {domain.tagline}
            </p>
            <div className="grid gap-5 md:grid-cols-3">
              {domain.items.map((item) => (
                <div
                  key={item.heading}
                  className="group glass rounded-2xl p-6 transition-all hover:-translate-y-1.5"
                  style={{ ["--c" as string]: domain.accent }}
                >
                  <div className="mb-4 flex items-center justify-between">
                    <h3 className="font-display text-lg font-semibold">{item.heading}</h3>
                    <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-colors group-hover:text-[var(--c)]" />
                  </div>
                  <ul className="space-y-2">
                    {item.points.map((p) => (
                      <li key={p} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <span className="h-1.5 w-1.5 rounded-full" style={{ background: "var(--c)" }} />
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
