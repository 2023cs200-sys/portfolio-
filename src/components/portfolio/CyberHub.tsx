import { useState } from "react";
import { Reveal, SectionHeading } from "./Section";
import { SECURITY_NOTES } from "@/lib/portfolio-data";
import { ShieldCheck, Lock, Bug, Network, Eye, KeyRound } from "lucide-react";

const SECURITY_ICONS = [ShieldCheck, Lock, KeyRound, Eye];

const FUTURE_GOALS = [
  { icon: Bug, label: "Ethical Hacking" },
  { icon: Network, label: "Penetration Testing" },
  { icon: ShieldCheck, label: "Malware Analysis" },
  { icon: Lock, label: "DevSecOps" },
];

export function CyberHub() {
  const [active, setActive] = useState(0);
  const note = SECURITY_NOTES[active];

  return (
    <section id="security" className="relative overflow-hidden py-24 sm:py-28">
      <div className="cyber-grid pointer-events-none absolute inset-0 opacity-[0.12]" />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Security Hub"
          title="Cybersecurity Awareness & Digital Safety"
          subtitle="Notes, concepts, and research from my ongoing security learning journey."
        />

        <div className="grid gap-6 lg:grid-cols-[1fr_1.3fr]">
          <Reveal>
            <div className="flex flex-col gap-2">
              {SECURITY_NOTES.map((n, i) => {
                const Icon = SECURITY_ICONS[i % SECURITY_ICONS.length];
                return (
                  <button
                    key={n.title}
                    onClick={() => setActive(i)}
                    className={`group flex items-center gap-3 rounded-xl border px-4 py-3 text-left transition-all ${
                      active === i
                        ? "border-cyber-green/50 bg-cyber-green/10"
                        : "border-border bg-secondary/30 hover:border-cyber-green/30"
                    }`}
                  >
                    <Icon className={`h-5 w-5 ${active === i ? "text-cyber-green" : "text-muted-foreground"}`} />
                    <span className="font-mono text-sm">{n.cmd}</span>
                  </button>
                );
              })}
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="overflow-hidden rounded-2xl border border-cyber-green/25 bg-[oklch(0.13_0.03_265)] glow-cyan">
              <div className="flex items-center gap-2 border-b border-border bg-secondary/40 px-4 py-3">
                <span className="h-3 w-3 rounded-full bg-destructive/70" />
                <span className="h-3 w-3 rounded-full bg-cyber-cyan/60" />
                <span className="h-3 w-3 rounded-full bg-cyber-green/70" />
                <span className="ml-3 font-mono text-xs text-muted-foreground">secops@portfolio: ~/notes</span>
              </div>
              <div className="space-y-3 p-6 font-mono text-sm">
                <p className="text-cyber-green">$ {note.cmd}</p>
                <p className="text-cyber-cyan">## {note.title}</p>
                <p className="leading-relaxed text-muted-foreground">{note.body}</p>
                <p className="text-cyber-green">
                  $ <span className="cursor-blink">▮</span>
                </p>
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal className="mt-10">
          <div className="glass rounded-2xl p-6">
            <h3 className="mb-4 font-display text-lg font-semibold">Future Security Goals</h3>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
              {FUTURE_GOALS.map((g) => (
                <div
                  key={g.label}
                  className="flex flex-col items-center gap-2 rounded-xl border border-border bg-secondary/30 p-4 text-center transition-all hover:border-cyber-green/40"
                >
                  <g.icon className="h-6 w-6 text-cyber-green" />
                  <span className="text-sm font-medium">{g.label}</span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
