import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { ArrowRight, Download, FolderGit2, Mail, Sparkles } from "lucide-react";
import avatar from "@/assets/avatar.jpg";
import { TYPING_ROLES, HERO_STATS, CODE_SNIPPETS } from "@/lib/portfolio-data";

function useTyping(words: string[]) {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[index % words.length];
    const speed = deleting ? 45 : 90;
    const t = setTimeout(() => {
      if (!deleting) {
        const next = current.slice(0, text.length + 1);
        setText(next);
        if (next === current) setTimeout(() => setDeleting(true), 1400);
      } else {
        const next = current.slice(0, text.length - 1);
        setText(next);
        if (next === "") {
          setDeleting(false);
          setIndex((i) => i + 1);
        }
      }
    }, speed);
    return () => clearTimeout(t);
  }, [text, deleting, index, words]);

  return text;
}

const CTA = [
  { label: "View Projects", href: "#projects", icon: FolderGit2, primary: true },
  { label: "Explore Skills", href: "#skills", icon: Sparkles },
  { label: "Contact Me", href: "#contact", icon: Mail },
  { label: "Download Resume", href: "#contact", icon: Download },
];

export function Hero() {
  const typed = useTyping(TYPING_ROLES);

  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden pt-28 pb-16">
      <div className="aurora-bg pointer-events-none absolute inset-0 opacity-70" />
      <div className="cyber-grid pointer-events-none absolute inset-0 opacity-[0.18]" />

      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-[1.15fr_0.85fr]">
        <div>
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 rounded-full border border-cyber-green/30 bg-cyber-green/5 px-4 py-1.5 font-mono text-xs text-cyber-green"
          >
            <span className="h-1.5 w-1.5 animate-pulse-glow rounded-full bg-cyber-green" />
            Available for internships & collaboration
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 }}
            className="mt-6 font-display text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl md:text-6xl"
          >
            Exploring Technology,{" "}
            <span className="text-gradient">Securing the Future,</span> Building Digital Solutions.
          </motion.h1>

          <div className="mt-6 flex items-center gap-3 font-mono text-lg sm:text-xl">
            <span className="text-muted-foreground">&gt;</span>
            <span className="text-cyber-cyan">{typed}</span>
            <span className="cursor-blink text-cyber-cyan">▮</span>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground"
          >
            A Computer Science undergraduate passionate about cybersecurity, software engineering,
            cloud technologies, machine learning, blockchain innovation, and building impactful
            digital solutions.
          </motion.p>

          <div className="mt-8 flex flex-wrap gap-3">
            {CTA.map((c) => (
              <a
                key={c.label}
                href={c.href}
                className={
                  c.primary
                    ? "group inline-flex items-center gap-2 rounded-xl bg-cyber-cyan px-5 py-3 text-sm font-semibold text-background transition-all hover:shadow-[0_0_30px_-6px_var(--cyber-cyan)]"
                    : "group inline-flex items-center gap-2 rounded-xl border border-border bg-secondary/40 px-5 py-3 text-sm font-semibold text-foreground transition-all hover:border-cyber-cyan/50 hover:bg-secondary"
                }
              >
                <c.icon className="h-4 w-4" />
                {c.label}
                {c.primary && <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />}
              </a>
            ))}
          </div>

          <div className="mt-12 grid max-w-lg grid-cols-2 gap-4 sm:grid-cols-4">
            {HERO_STATS.map((s) => (
              <div key={s.label}>
                <div className="text-gradient font-display text-2xl font-bold sm:text-3xl">{s.value}</div>
                <div className="mt-1 text-xs text-muted-foreground">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.15, duration: 0.7 }}
          className="relative mx-auto w-full max-w-sm"
        >
          <div className="absolute -inset-4 rounded-[2rem] bg-cyber-purple/20 blur-3xl" />
          <div className="relative overflow-hidden rounded-[1.75rem] border border-cyber-cyan/30 glass glow-cyan">
            <img
              src={avatar}
              alt="Futuristic developer avatar"
              width={768}
              height={768}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-background/60 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 flex items-center justify-between border-t border-cyber-cyan/20 bg-background/70 px-4 py-3 font-mono text-xs backdrop-blur">
              <span className="text-cyber-green">● online</span>
              <span className="text-muted-foreground">uptime 99.9%</span>
            </div>
          </div>

          {CODE_SNIPPETS.slice(0, 3).map((code, i) => (
            <motion.div
              key={code}
              className="absolute hidden rounded-lg border border-border bg-card/80 px-3 py-1.5 font-mono text-[10px] text-cyber-cyan shadow-elegant backdrop-blur md:block animate-float-slow"
              style={{
                top: `${15 + i * 30}%`,
                left: i % 2 === 0 ? "-22%" : "auto",
                right: i % 2 === 1 ? "-18%" : "auto",
                animationDelay: `${i * 1.2}s`,
              }}
            >
              {code}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
