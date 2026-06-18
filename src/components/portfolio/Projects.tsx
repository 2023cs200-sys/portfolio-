import { useState } from "react";
import { motion } from "motion/react";
import { Reveal, SectionHeading } from "./Section";
import { PROJECTS, PROJECT_CATEGORIES } from "@/lib/portfolio-data";
import { Github, ExternalLink, Check, Star } from "lucide-react";
import featuredImg from "@/assets/project-featured.jpg";
import { cn } from "@/lib/utils";

export function Projects() {
  const [filter, setFilter] = useState("All");
  const featured = PROJECTS.find((p) => p.featured)!;
  const rest = PROJECTS.filter((p) => !p.featured);
  const filtered =
    filter === "All" ? rest : rest.filter((p) => p.category === filter || (filter === "University" && p.category === "University"));

  return (
    <section id="projects" className="relative py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Featured Projects"
          title="Things I've built & broken"
          subtitle="A selection of projects spanning security, ML, cloud, web and blockchain."
        />

        <Reveal>
          <div className="group grid overflow-hidden rounded-3xl glass lg:grid-cols-2">
            <div className="relative min-h-64 overflow-hidden">
              <img
                src={featuredImg}
                alt={featured.title}
                loading="lazy"
                width={1280}
                height={800}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent lg:bg-gradient-to-r" />
              <span className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-cyber-cyan px-3 py-1 font-mono text-xs font-semibold text-background">
                <Star className="h-3 w-3" /> Spotlight
              </span>
            </div>
            <div className="flex flex-col justify-center p-7 sm:p-9">
              <span className="font-mono text-xs text-cyber-cyan">{featured.category}</span>
              <h3 className="mt-2 font-display text-2xl font-bold sm:text-3xl">{featured.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground">{featured.overview}</p>
              <ul className="mt-4 space-y-1.5">
                {featured.achievements.map((a) => (
                  <li key={a} className="flex items-center gap-2 text-sm">
                    <Check className="h-4 w-4 shrink-0 text-cyber-green" /> {a}
                  </li>
                ))}
              </ul>
              <div className="mt-5 flex flex-wrap gap-2">
                {featured.stack.map((t) => (
                  <span key={t} className="rounded-md bg-secondary px-2.5 py-1 font-mono text-xs text-muted-foreground">
                    {t}
                  </span>
                ))}
              </div>
              <div className="mt-6 flex gap-3">
                <a href="#" className="inline-flex items-center gap-2 rounded-lg bg-cyber-cyan px-4 py-2 text-sm font-semibold text-background transition-all hover:shadow-[0_0_24px_-6px_var(--cyber-cyan)]">
                  <Github className="h-4 w-4" /> GitHub
                </a>
                <a href="#" className="inline-flex items-center gap-2 rounded-lg border border-border px-4 py-2 text-sm font-semibold transition-colors hover:border-cyber-cyan/50">
                  <ExternalLink className="h-4 w-4" /> Live Demo
                </a>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal className="mt-10 flex flex-wrap justify-center gap-2">
          {PROJECT_CATEGORIES.map((c) => (
            <button
              key={c}
              onClick={() => setFilter(c)}
              className={cn(
                "rounded-full border px-4 py-1.5 text-sm font-medium transition-all",
                filter === c
                  ? "border-cyber-cyan bg-cyber-cyan/10 text-cyber-cyan"
                  : "border-border text-muted-foreground hover:border-cyber-cyan/40 hover:text-foreground",
              )}
            >
              {c}
            </button>
          ))}
        </Reveal>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((p, i) => (
            <motion.div
              key={p.title}
              layout
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (i % 3) * 0.05 }}
              className="group glass flex h-full flex-col rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-cyber-purple/40"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs text-cyber-purple">{p.category}</span>
                <div className="flex gap-2 text-muted-foreground">
                  <a href="#" aria-label="GitHub" className="transition-colors hover:text-cyber-cyan"><Github className="h-4 w-4" /></a>
                  <a href="#" aria-label="Live demo" className="transition-colors hover:text-cyber-cyan"><ExternalLink className="h-4 w-4" /></a>
                </div>
              </div>
              <h3 className="mt-3 font-display text-lg font-semibold leading-snug">{p.title}</h3>
              <p className="mt-2 flex-1 text-sm text-muted-foreground">{p.overview}</p>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {p.stack.map((t) => (
                  <span key={t} className="rounded-md bg-secondary px-2 py-0.5 font-mono text-[10px] text-muted-foreground">
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
