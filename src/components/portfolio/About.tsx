import { Reveal, SectionHeading } from "./Section";
import { TIMELINE } from "@/lib/portfolio-data";
import { Brain, Lightbulb, ShieldCheck, Rocket, GraduationCap, Cloud } from "lucide-react";

const TRAITS = [
  { icon: Lightbulb, label: "Technology Enthusiast" },
  { icon: Brain, label: "Problem Solver" },
  { icon: GraduationCap, label: "Continuous Learner" },
  { icon: Rocket, label: "Future Software Engineer" },
  { icon: ShieldCheck, label: "Security-Aware Developer" },
  { icon: Cloud, label: "AI & Cloud Explorer" },
];

export function About() {
  return (
    <section id="about" className="relative py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="About Me"
          title="Curious by nature, security-minded by design"
          subtitle="I build, break, and secure software — turning curiosity into impactful digital solutions."
        />

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {TRAITS.map((t, i) => (
            <Reveal key={t.label} delay={i * 0.05}>
              <div className="group glass flex items-center gap-3 rounded-xl p-4 transition-all hover:-translate-y-1 hover:border-cyber-cyan/40">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-cyber-cyan/10 text-cyber-cyan transition-colors group-hover:bg-cyber-cyan group-hover:text-background">
                  <t.icon className="h-5 w-5" />
                </span>
                <span className="font-medium">{t.label}</span>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-16">
          <h3 className="mb-8 text-center font-display text-2xl font-bold">My Journey So Far</h3>
        </Reveal>

        <div className="relative mx-auto max-w-3xl">
          <div className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-cyber-cyan via-cyber-purple to-transparent sm:left-1/2" />
          <div className="space-y-8">
            {TIMELINE.map((item, i) => (
              <Reveal key={item.year} delay={i * 0.05}>
                <div
                  className={`relative flex flex-col gap-2 pl-12 sm:w-1/2 sm:pl-0 ${
                    i % 2 === 0 ? "sm:pr-10 sm:text-right" : "sm:ml-auto sm:pl-10"
                  }`}
                >
                  <span
                    className={`absolute top-1.5 left-2.5 grid h-4 w-4 place-items-center rounded-full bg-cyber-cyan glow-cyan sm:left-auto ${
                      i % 2 === 0 ? "sm:-right-2" : "sm:-left-2"
                    }`}
                  />
                  <div className="glass rounded-xl p-5 transition-all hover:border-cyber-purple/40">
                    <span className="font-mono text-xs text-cyber-cyan">{item.year}</span>
                    <span className="ml-2 rounded-full bg-secondary px-2 py-0.5 font-mono text-[10px] text-muted-foreground">
                      {item.tag}
                    </span>
                    <h4 className="mt-2 font-display text-lg font-semibold">{item.title}</h4>
                    <p className="mt-1 text-sm text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
