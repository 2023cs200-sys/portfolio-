import { useState } from "react";
import { Reveal, SectionHeading } from "./Section";
import { CONTACTS } from "@/lib/portfolio-data";
import { Send, Terminal } from "lucide-react";
import { toast } from "sonner";

export function Contact() {
  const [sending, setSending] = useState(false);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setTimeout(() => {
      setSending(false);
      toast.success("Message queued — I'll get back to you soon!");
      (e.target as HTMLFormElement).reset();
    }, 900);
  };

  return (
    <section id="contact" className="relative overflow-hidden py-24 sm:py-28">
      <div className="aurora-bg pointer-events-none absolute inset-0 opacity-40" />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Get In Touch"
          title="Let's build something secure together"
          subtitle="Open to internships, collaborations and conversations about technology."
        />

        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <div className="grid gap-3 sm:grid-cols-2">
              {CONTACTS.map((c) => (
                <a
                  key={c.label}
                  href={c.href}
                  className="group glass flex flex-col gap-3 rounded-2xl p-5 transition-all hover:-translate-y-1 hover:border-cyber-cyan/40"
                >
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-cyber-cyan/10 text-cyber-cyan transition-colors group-hover:bg-cyber-cyan group-hover:text-background">
                    <c.icon className="h-5 w-5" />
                  </span>
                  <div>
                    <div className="font-medium">{c.label}</div>
                    <div className="truncate font-mono text-xs text-muted-foreground">{c.value}</div>
                  </div>
                </a>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <form onSubmit={onSubmit} className="glass rounded-2xl p-6 sm:p-7">
              <div className="mb-5 flex items-center gap-2 font-mono text-sm text-cyber-green">
                <Terminal className="h-4 w-4" /> ./send_message.sh
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <input
                  required
                  placeholder="Name"
                  className="rounded-xl border border-input bg-secondary/40 px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-cyber-cyan"
                />
                <input
                  required
                  type="email"
                  placeholder="Email"
                  className="rounded-xl border border-input bg-secondary/40 px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-cyber-cyan"
                />
              </div>
              <input
                placeholder="Subject"
                className="mt-4 w-full rounded-xl border border-input bg-secondary/40 px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-cyber-cyan"
              />
              <textarea
                required
                rows={5}
                placeholder="Your message..."
                className="mt-4 w-full resize-none rounded-xl border border-input bg-secondary/40 px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-cyber-cyan"
              />
              <button
                type="submit"
                disabled={sending}
                className="mt-5 inline-flex items-center gap-2 rounded-xl bg-cyber-cyan px-6 py-3 text-sm font-semibold text-background transition-all hover:shadow-[0_0_30px_-6px_var(--cyber-cyan)] disabled:opacity-60"
              >
                <Send className="h-4 w-4" />
                {sending ? "Sending..." : "Send Message"}
              </button>
            </form>
          </Reveal>
        </div>

        <Reveal className="mt-16 border-t border-border pt-8 text-center">
          <p className="font-mono text-sm text-muted-foreground">
            <span className="text-cyber-green">$</span> echo "Designed & built with curiosity, caffeine & code"
          </p>
          <p className="mt-2 text-xs text-muted-foreground">
            © {new Date().getFullYear()} — Cyber Portfolio. Always learning.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
