import { createFileRoute } from "@tanstack/react-router";
import { TypingRoles } from "@/components/portfolio/TypingRoles";
import sentinelImg from "@/assets/project-unipulse.jpg";
import ledgerImg from "@/assets/Password-Strength-Analyzer.jpg";
import cloudImg from "@/assets/gold-priceML.jpg";
import portraitImg from "@/assets/portrait.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Portfolio — CS Undergraduate · Security, Cloud & ML" },
      {
        name: "description",
        content:
          "Computer Science undergraduate exploring cybersecurity, software engineering, cloud computing, machine learning and blockchain. Selected projects and current focus.",
      },
      { property: "og:title", content: "Portfolio — CS Undergraduate" },
      {
        property: "og:description",
        content:
          "Cybersecurity, cloud, ML and full-stack work from a CS undergraduate.",
      },
    ],
  }),
  component: Index,
});

const PROJECTS = [
  {
    n: "01",
    title: "UniPulse – University Event Marketing System",
    desc: "A centralized event marketing platform designed for Sri Lankan universities, enabling students to discover, manage, and engage with university events through a single, user-friendly system. UniPulse streamlines event promotion, registration, and communication, improving event visibility and student participation across campuses.",
    tags: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    img: sentinelImg,
    link: "#",
    cta: "VIEW_REPO",
  },
  {
    n: "02",
    title: "Password Strength Analyzer",
    desc: "Password Strength Analyzer is a simple web project that checks how strong a user’s password is in real time. It evaluates factors like length, uppercase and lowercase letters, numbers, and special characters to give clear feedback. The project helps users understand what makes a secure password and encourages better password habits. It is designed with a clean interface, making it easy and quick to use.",
    tags: ["Python-Flask", "HTML", "CSS", "JavaScript"],
    img: ledgerImg,
    link: "#",
    cta: "VIEW_DEMO",
  },
  {
    n: "03",
    title: "Predicting Gold Prices with Machine Learning",
    desc: "Created a machine learning application that predicts gold prices using historical market data. Implemented the Random Forest Regressor algorithm in Python to train the model and generate accurate price predictions.",
    tags: ["PYTHON", "Pandas", "NumPy", "Scikit-learn",],
    img: cloudImg,
    link: "#",
    cta: "VIEW_REPO",
  },
];

type SkillCard = {
  head: string;
  items: { name: string; level: number }[];
};

const SKILL_CARDS: SkillCard[] = [
  {
    head: "SOFTWARE_ENGINEERING",
    items: [
      { name: "Object-Oriented Programming", level: 88 },
      { name: "Software Design Principles", level: 82 },
      { name: "Version Control", level: 90 },
    ],
  },
  {
    head: "PROGRAMMING",
    items: [
      { name: "Python", level: 90 },
      { name: "JavaScript", level: 86 },
      { name: "C", level: 82 },
      { name: "C++", level: 72 },
      { name: "MySQL", level: 80 },
    ],
  },
  {
    head: "WEB_DEVELOPMENT",
    items: [
      { name: "React", level: 88 },
      { name: "HTML & CSS", level: 90 },
      { name: "REST APIs", level: 84 },
      { name: "Modern Frontend", level: 85 },
    ],
  },
  {
    head: "DATABASES",
    items: [
      { name: "MySQL", level: 82 },
      { name: "MongoDB", level: 78 },
    ],
  },
  {
    head: "CLOUD_COMPUTING",
    items: [
      { name: "Cloud Fundamentals", level: 80 },
      { name: "Cloud Architecture", level: 70 },
      { name: "Cloud Security", level: 74 },
      { name: "Automation Concepts", level: 72 },
    ],
  },
  {
    head: "CYBERSECURITY",
    items: [
      { name: "Security Fundamentals", level: 85 },
      { name: "Network Security", level: 78 },
      { name: "Cryptography", level: 76 },
      { name: "Secure Development", level: 80 },
      { name: "Ethical Hacking Concepts", level: 10 },
    ],
  },
  {
    head: "MACHINE_LEARNING_&_AI",
    items: [
      { name: "Data Analysis", level: 82 },
      { name: "Predictive Models", level: 76 },
      { name: "ML Fundamentals", level: 78 },
      { name: "AI Concepts", level: 74 },
    ],
  },
  {
    head: "BLOCKCHAIN",
    items: [
      { name: "Blockchain Fundamentals", level: 75 },
      { name: "Smart Contract Concepts", level: 68 },
      { name: "Decentralized Tech", level: 70 },
    ],
  },
  {
    head: "DEVELOPMENT_TOOLS",
    items: [
      { name: "Git & GitHub", level: 90 },
      { name: "Linux", level: 80 },
      { name: "VS Code", level: 92 },
    ],
  },
];

const JOURNEY = [
  {
    tag: "[NOW]",
    title: "Current Skills",
    state: "MASTERED",
    color: "accent",
    items: [
      "Full-Stack Dev",
      "Security Fundamentals",
      "Programming",
      "Databases",
      "Git / Linux",
    ],
  },
  {
    tag: "[NEXT]",
    title: "Learning Now",
    state: "IN_PROGRESS",
    color: "warn",
    items: [
      "Network Security",
      "Cloud Security",
      "Machine Learning",
      "Cryptography",
      "Blockchain",
    ],
  },
  {
    tag: "[SOON]",
    title: "Future Goals",
    state: "PLANNED",
    color: "danger",
    items: [
      "Ethical Hacking",
      "Penetration Testing",
      "Malware Analysis",
      "AI Engineering",
      "DevSecOps",
      "Blockchain Security",
    ],
  },
];

const CERTS = [
  { code: "CERT_01", name: "CS50: Introduction to Computer Science", issuer: "HarvardX", status: "EARNED" },
  { code: "CERT_02", name: "Google Cybersecurity Professional Certificate", issuer: "Google / Coursera", status: "IN_PROGRESS" },
  { code: "CERT_03", name: "AWS Cloud Practitioner", issuer: "Amazon Web Services", status: "QUEUED" },
  { code: "CERT_04", name: "Network Security Fundamentals", issuer: "Cisco Networking Academy", status: "EARNED" },
];

const CONTACTS = [
  {
    label: "EMAIL",
    handle: "hello@portfolio.sys",
    href: "mailto:hello@portfolio.sys",
    cmd: "$ mail --compose",
  },
  {
    label: "GITHUB",
    handle: "github.com/username",
    href: "#",
    cmd: "$ git remote -v",
  },
  {
    label: "LINKEDIN",
    handle: "linkedin.com/in/username",
    href: "#",
    cmd: "$ curl --connect",
  },
];

function Index() {
  return (
    <div className="relative min-h-screen bg-background text-foreground">
      <div className="scanline-overlay" aria-hidden />

      {/* Nav */}
      <nav className="fixed top-0 z-40 w-full border-b border-border bg-background/80 backdrop-blur-md">
        <div className="mx-auto flex h-14 max-w-5xl items-center justify-between px-6">
          <a href="#top" className="flex items-center gap-2 text-sm">
            <span className="font-semibold text-accent">Hashini</span>
            <span className="tracking-tight">Gayathri</span>
          </a>
          <div className="hidden gap-6 text-xs sm:flex">
            <a href="#projects" className="text-dim transition-colors hover:text-accent">PROJECTS</a>
            <a href="#stack" className="text-dim transition-colors hover:text-accent">STACK</a>
            <a href="#journey" className="text-dim transition-colors hover:text-accent">JOURNEY</a>
            <a href="#certs" className="text-dim transition-colors hover:text-accent">CERTS</a>
            <a href="#contact" className="text-dim transition-colors hover:text-accent">CONTACT</a>
          </div>
        </div>
      </nav>

      <main id="top" className="relative z-10 pt-32 pb-24">
        {/* Hero */}
        <section className="relative mx-auto mb-32 max-w-5xl px-6">
          <div className="grid-bg pointer-events-none absolute inset-0 -z-10" aria-hidden />
          <div className="grid items-center gap-12 md:grid-cols-[1fr_280px]">
            <div className="animate-fade-up space-y-6">
              <div className="inline-flex items-center gap-2 rounded bg-accent/5 px-2 py-1 text-[10px] text-accent ring-1 ring-accent/20">
                <span
                  className="size-1.5 rounded-full bg-accent"
                  style={{ animation: "pulse-dot 1.6s ease-in-out infinite" }}
                />
                SYSTEM ACTIVE · ACCEPTING_OPPORTUNITIES
              </div>
              <h1 className="max-w-[28ch] text-balance text-4xl font-medium leading-tight tracking-tight md:text-5xl">
                Exploring technology, securing the future, building digital solutions.
              </h1>
              <p className="max-w-[58ch] text-pretty text-base text-dim">
                Hello! I'm Hashini Gayathri, <br /> <br /> A Computer Science undergraduate passionate about cybersecurity, cloud infrastructure, and machine learning. I enjoy building thoughtful systems and sharing my knowledge. Through continuous learning and hands-on projects, I strive to create secure, scalable, and impactful digital solutions.
              </p>
              <div className="flex flex-wrap items-center gap-2 text-sm text-dim">
                <span className="font-semibold text-accent">$</span>
                <span>locate --roles</span>
                <TypingRoles />
              </div>

              <div className="flex flex-wrap items-center gap-3 pt-4">
                <a
                  href="#contact"
                  className="inline-flex h-9 items-center gap-2 rounded bg-accent px-4 text-sm font-semibold text-accent-foreground ring-1 ring-accent transition-transform hover:bg-accent/90 active:scale-95"
                >
                  <span>$</span> GET_IN_TOUCH
                </a>
                <a
                  href="#"
                  className="inline-flex h-9 items-center gap-2 rounded border border-border px-3 py-2 text-sm font-medium text-foreground transition-colors hover:border-foreground/30"
                >
                  <svg className="size-4 shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                  </svg>
                  FETCH_CV.PDF
                </a>
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-[280px] animate-fade-up">
              <div className="absolute -inset-2 rounded-xl border border-accent/20" aria-hidden />
              <div className="absolute -top-3 left-3 z-10 rounded bg-background px-2 text-[10px] text-accent">
                ./user.img
              </div>
              <div className="relative overflow-hidden rounded-xl border border-border bg-surface">
                <img
                  src={portraitImg}
                  alt="Portrait"
                  width={1024}
                  height={1024}
                  className="aspect-square w-full object-cover opacity-90 mix-blend-luminosity"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
                <div className="absolute bottom-2 left-2 right-2 flex items-center justify-between text-[9px] text-accent/80">
                  <span>SIG: 0xA1F3</span>
                  <span className="flex items-center gap-1">
                    <span className="size-1.5 rounded-full bg-accent" style={{ animation: "pulse-dot 1.6s ease-in-out infinite" }} />
                    LIVE
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="mx-auto mb-32 max-w-5xl px-6">
          <SectionHeader label="01. Featured Projects" right="03 / 03" />
          <div className="grid gap-6">
            {PROJECTS.map((p) => (
              <article
                key={p.n}
                className="group relative rounded-xl border border-border bg-surface/40 p-6 transition-colors hover:bg-surface/70"
              >
                <div className="flex flex-col gap-8 md:flex-row">
                  <div className="order-2 flex-1 md:order-1">
                    <div className="mb-4 flex items-center gap-3">
                      <span className="text-[10px] text-dim">{p.n}/03</span>
                      <h3 className="text-lg font-medium">{p.title}</h3>
                    </div>
                    <p className="mb-6 max-w-[55ch] text-pretty text-sm leading-relaxed text-dim">
                      {p.desc}
                    </p>
                    <div className="flex flex-wrap items-center gap-2">
                      {p.tags.map((t) => (
                        <span key={t} className="rounded border border-border px-2 py-0.5 text-[10px]">
                          {t}
                        </span>
                      ))}
                      <a
                        href={p.link}
                        className="ml-auto text-[10px] font-semibold text-accent transition-colors hover:text-foreground"
                      >
                        → {p.cta}
                      </a>
                    </div>
                  </div>
                  <div className="order-1 w-full shrink-0 md:order-2 md:w-120">
                    <div className="overflow-hidden rounded-lg border border-border bg-surface">
                      <img
                        src={p.img}
                        alt={`${p.title} preview`}
                        width={1024}
                        height={640}
                        loading="lazy"
                        className="aspect-video w-full object-cover opacity-80 transition-opacity duration-500 group-hover:opacity-100"
                      />
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Stack — Skill Cards */}
        <section id="stack" className="mx-auto mb-32 max-w-5xl px-6">
          <SectionHeader label="02. Tech Status" right="UPTIME 100%" />
          <div className="mb-10 max-w-[58ch]">
            <h3 className="text-2xl font-medium leading-tight">
              A full-spectrum technical toolkit
            </h3>
            <p className="mt-2 text-sm text-dim">
              Skills calibrated across the stack — from low-level systems to cloud, security and AI.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {SKILL_CARDS.map((c) => (
              <div
                key={c.head}
                className="group rounded-xl border border-border bg-surface/40 p-5 transition-colors hover:border-accent/30 hover:bg-surface/70"
              >
                <div className="mb-4 flex items-center justify-between">
                  <h4 className="text-[11px] font-semibold tracking-widest text-accent">
                    {c.head}
                  </h4>
                  <span className="text-[9px] text-dim">{c.items.length} MOD</span>
                </div>
                <ul className="space-y-3">
                  {c.items.map((i) => (
                    <li key={i.name}>
                      <div className="mb-1 flex items-center justify-between text-xs">
                        <span className="text-foreground/90">{i.name}</span>
                        <span className="text-[10px] text-dim">{i.level}%</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Journey */}
        <section id="journey" className="mx-auto mb-32 max-w-5xl px-6">
          <SectionHeader label="03. Learning Journey" right="LOG_STREAM" />
          <div className="mb-10 max-w-[58ch]">
            <h3 className="text-2xl font-medium leading-tight">
              Where I am, and where I'm headed
            </h3>
            <p className="mt-2 text-sm text-dim">
              A transparent view of my continuous learning across the tech stack.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {JOURNEY.map((j) => {
              const colorClass =
                j.color === "accent"
                  ? "text-accent border-accent/30"
                  : j.color === "warn"
                    ? "text-warn border-warn/30"
                    : "text-danger border-danger/30";
              const dotClass =
                j.color === "accent"
                  ? "bg-accent"
                  : j.color === "warn"
                    ? "bg-warn"
                    : "bg-danger";
              return (
                <div
                  key={j.title}
                  className={`relative rounded-xl border bg-surface/40 p-6 transition-colors hover:bg-surface/70 ${colorClass}`}
                >
                  <div className="mb-4 flex items-center justify-between">
                    <span className="text-[10px] font-semibold tracking-widest">
                      {j.tag} {j.title.toUpperCase()}
                    </span>
                    <span className={`size-2 rounded-full ${dotClass}`} />
                  </div>
                  <h4 className="mb-1 text-lg font-medium text-foreground">
                    {j.title}
                  </h4>
                  <p className="mb-5 text-[10px] tracking-widest text-dim">
                    {j.state}
                  </p>
                  <ul className="space-y-2 text-sm">
                    {j.items.map((i) => (
                      <li key={i} className="flex items-center gap-2 text-foreground/90">
                        <span className={`size-1 ${dotClass}`} />
                        {i}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </section>

        {/* Certifications */}
        <section id="certs" className="mx-auto mb-32 max-w-5xl px-6">
          <SectionHeader label="04. Certifications & Badges" right="VERIFIED" />
          <div className="mb-10 max-w-[58ch]">
            <h3 className="text-2xl font-medium leading-tight">
              Certifications & Badges
            </h3>
            <p className="mt-2 text-sm text-dim">
              Continuous learning and professional development.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {CERTS.map((c) => {
              const isEarned = c.status === "EARNED";
              const isInProgress = c.status === "IN_PROGRESS";
              const statusColor = isEarned
                ? "text-accent bg-accent/10 ring-accent/20"
                : isInProgress
                  ? "text-warn bg-warn/10 ring-warn/20"
                  : "text-dim bg-foreground/5 ring-border";
              return (
                <div
                  key={c.code}
                  className="group rounded-xl border border-border bg-surface/40 p-5 transition-colors hover:border-accent/30 hover:bg-surface/70"
                >
                  <div className="mb-4 flex items-center justify-between">
                    <div className="flex items-center gap-2 text-[10px] tracking-widest text-dim">
                      <span className="font-semibold text-accent">[{c.code}]</span>
                    </div>
                    <span className={`rounded px-2 py-0.5 text-[9px] font-semibold tracking-widest ring-1 ${statusColor}`}>
                      {c.status}
                    </span>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="flex size-12 shrink-0 items-center justify-center rounded-lg border border-accent/30 bg-accent/5 text-accent">
                      <svg className="size-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
                      </svg>
                    </div>
                    <div className="min-w-0 flex-1">
                      <h4 className="text-base font-medium leading-snug">
                        {c.name}
                      </h4>
                      <p className="mt-1 text-xs text-dim">{c.issuer}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="mx-auto max-w-5xl px-6">
          <SectionHeader label="05. Open Connection" right="EOF" />
          <p className="mb-10 max-w-[58ch] text-sm text-dim">
            <span className="font-semibold text-accent">$</span> echo "Looking for internship & full-time opportunities in SWE, security and cloud."
          </p>
          <div className="grid gap-4 md:grid-cols-3">
            {CONTACTS.map((c) => (
              <a
                key={c.label}
                href={c.href}
                className="group relative overflow-hidden rounded-xl border border-border bg-surface/40 p-6 transition-all hover:-translate-y-0.5 hover:border-accent/40 hover:bg-surface/70"
              >
                <div className="mb-6 flex items-center justify-between">
                  <span className="text-[10px] font-semibold tracking-widest text-accent">
                    [{c.label}]
                  </span>
                  <span className="text-dim transition-colors group-hover:text-accent">
                    →
                  </span>
                </div>
                <p className="mb-2 text-[10px] text-dim">{c.cmd}</p>
                <p className="text-base font-medium tracking-tight text-foreground transition-colors group-hover:text-accent">
                  {c.handle}
                </p>
                <div className="mt-6 flex items-center gap-2 text-[10px] text-dim">
                  <span className="size-1.5 rounded-full bg-accent" style={{ animation: "pulse-dot 1.6s ease-in-out infinite" }} />
                  CHANNEL_OPEN
                </div>
              </a>
            ))}
          </div>
        </section>
      </main>

      <footer className="relative z-10 border-t border-border">
        <div className="mx-auto flex max-w-5xl flex-col items-start justify-between gap-4 px-6 py-10 md:flex-row md:items-center">
          <div className="text-xs font-semibold text-accent">EST_CONNECTION: OK</div>
          <p className="text-[10px] text-dim">
            BUILD_REV: 1.0.0 · LATENCY 14MS · © {new Date().getFullYear()}
          </p>
        </div>
      </footer>
    </div>
  );
}

function SectionHeader({ label, right }: { label: string; right: string }) {
  return (
    <div className="mb-10 flex items-center gap-4">
      <h2 className="text-xs font-semibold uppercase tracking-widest text-accent">
        {label}
      </h2>
      <div className="h-px flex-1 bg-border" />
      <span className="text-[10px] text-dim">{right}</span>
    </div>
  );
}
