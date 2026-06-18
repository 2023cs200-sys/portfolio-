import { motion } from "motion/react";
import type { ReactNode } from "react";

export function Reveal({
  children,
  delay = 0,
  className,
  ...props
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  [key: string]: any;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <Reveal className="mx-auto mb-14 max-w-2xl text-center">
      <span className="inline-flex items-center gap-2 rounded-full border border-cyber-cyan/30 bg-cyber-cyan/5 px-4 py-1.5 font-mono text-xs uppercase tracking-[0.2em] text-cyber-cyan">
        <span className="h-1.5 w-1.5 rounded-full bg-cyber-cyan animate-pulse-glow" />
        {eyebrow}
      </span>
      <h2 className="mt-5 font-display text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
        {title}
      </h2>
      {subtitle && <p className="mt-4 text-base text-muted-foreground">{subtitle}</p>}
    </Reveal>
  );
}
