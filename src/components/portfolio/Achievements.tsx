import { Reveal, SectionHeading } from "./Section";
import { CERTIFICATIONS, ARTICLES } from "@/lib/portfolio-data";
import { BadgeCheck, Clock, Award, ArrowUpRight } from "lucide-react";

export function Achievements() {
  return (
    <section id="achievements" className="relative py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Achievements & Knowledge"
          title="Certifications & community sharing"
          subtitle="Verified milestones plus articles where I share what I learn."
        />

        <div className="grid gap-8 lg:grid-cols-2">
          <Reveal>
            <h3 className="mb-5 flex items-center gap-2 font-display text-lg font-semibold">
              <Award className="h-5 w-5 text-cyber-cyan" /> Certifications & Milestones
            </h3>
            <div className="space-y-3">
              {CERTIFICATIONS.map((c) => (
                <div
                  key={c.title}
                  className="glass flex items-center justify-between gap-4 rounded-xl p-4 transition-all hover:border-cyber-cyan/40"
                >
                  <div className="min-w-0">
                    <div className="flex items-center gap-2">
                      <h4 className="truncate font-medium">{c.title}</h4>
                      {c.verified ? (
                        <BadgeCheck className="h-4 w-4 shrink-0 text-cyber-green" />
                      ) : (
                        <Clock className="h-4 w-4 shrink-0 text-cyber-cyan" />
                      )}
                    </div>
                    <p className="truncate text-sm text-muted-foreground">{c.issuer}</p>
                  </div>
                  <span className="shrink-0 font-mono text-xs text-muted-foreground">{c.year}</span>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <h3 className="mb-5 flex items-center gap-2 font-display text-lg font-semibold">
              <ArrowUpRight className="h-5 w-5 text-cyber-purple" /> Articles & Insights
            </h3>
            <div className="space-y-3">
              {ARTICLES.map((a) => (
                <a
                  key={a.title}
                  href="#"
                  className="group glass block rounded-xl p-4 transition-all hover:-translate-y-0.5 hover:border-cyber-purple/40"
                >
                  <div className="flex items-center justify-between">
                    <span className="rounded-full bg-secondary px-2.5 py-0.5 font-mono text-[10px] text-cyber-purple">
                      {a.category}
                    </span>
                    <span className="font-mono text-xs text-muted-foreground">{a.read}</span>
                  </div>
                  <h4 className="mt-2 font-medium transition-colors group-hover:text-cyber-purple">{a.title}</h4>
                  <p className="mt-1 text-sm text-muted-foreground">{a.excerpt}</p>
                </a>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
