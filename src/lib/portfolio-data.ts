import {
  Shield,
  Code2,
  Cloud,
  BrainCircuit,
  Boxes,
  Database,
  Terminal as TerminalIcon,
  Cpu,
  Lock,
  GitBranch,
  Network,
  Server,
  type LucideIcon,
} from "lucide-react";

export const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Security", href: "#security" },
  { label: "Domains", href: "#domains" },
  { label: "Roadmap", href: "#roadmap" },
  { label: "Contact", href: "#contact" },
];

export const TYPING_ROLES = [
  "Cybersecurity Enthusiast",
  "Machine Learning Explorer",
  "Cloud Computing Learner",
  "Blockchain Explorer",
  "Full-Stack Developer",
  "Future Software Engineer",
];

export const HERO_STATS = [
  { value: "7+", label: "Tech Domains" },
  { value: "15+", label: "Projects Built" },
  { value: "5+", label: "Certifications" },
  { value: "∞", label: "Always Learning" },
];

export const CODE_SNIPPETS = [
  "const secure = encrypt(data, key);",
  "model.fit(X_train, y_train)",
  "kubectl apply -f deploy.yaml",
  "contract Vault { mapping balances; }",
  "nmap -sV 10.0.0.1",
  "git push origin main",
];

export type TimelineItem = {
  year: string;
  title: string;
  description: string;
  tag: string;
};

export const TIMELINE: TimelineItem[] = [
  {
    year: "2022",
    title: "Began CS Degree",
    description:
      "Started a Computer Science undergraduate program with a focus on systems, algorithms, and software design.",
    tag: "Academic Journey",
  },
  {
    year: "2023",
    title: "Full-Stack Foundations",
    description:
      "Built first end-to-end web applications with React, REST APIs and relational databases.",
    tag: "Technical Milestone",
  },
  {
    year: "2024",
    title: "Security & Cloud Pivot",
    description:
      "Dove into network security, cryptography, and cloud fundamentals while shipping university projects.",
    tag: "Project Achievement",
  },
  {
    year: "2025",
    title: "AI, ML & Blockchain",
    description:
      "Explored predictive modeling, AI concepts, smart contracts and decentralized application design.",
    tag: "Certification Progress",
  },
  {
    year: "Future",
    title: "Security Engineering Leadership",
    description:
      "Targeting DevSecOps, penetration testing, and cloud security engineering roles.",
    tag: "Career Goal",
  },
];

export type SkillCategory = {
  name: string;
  icon: LucideIcon;
  accent: string;
  skills: { name: string; level: number }[];
};

export const SKILLS: SkillCategory[] = [
  {
    name: "Software Engineering",
    icon: Code2,
    accent: "var(--cyber-blue)",
    skills: [
      { name: "Object-Oriented Programming", level: 88 },
      { name: "Software Design Principles", level: 82 },
      { name: "Version Control", level: 90 },
    ],
  },
  {
    name: "Programming",
    icon: Cpu,
    accent: "var(--cyber-cyan)",
    skills: [
      { name: "Python", level: 90 },
      { name: "Java", level: 82 },
      { name: "JavaScript", level: 86 },
      { name: "C", level: 72 },
      { name: "SQL", level: 80 },
    ],
  },
  {
    name: "Web Development",
    icon: Boxes,
    accent: "var(--cyber-purple)",
    skills: [
      { name: "React", level: 88 },
      { name: "HTML & CSS", level: 90 },
      { name: "REST APIs", level: 84 },
      { name: "Modern Frontend", level: 85 },
    ],
  },
  {
    name: "Databases",
    icon: Database,
    accent: "var(--cyber-green)",
    skills: [
      { name: "MySQL", level: 82 },
      { name: "MongoDB", level: 78 },
    ],
  },
  {
    name: "Cloud Computing",
    icon: Cloud,
    accent: "var(--cyber-blue)",
    skills: [
      { name: "Cloud Fundamentals", level: 80 },
      { name: "Cloud Architecture", level: 70 },
      { name: "Cloud Security", level: 74 },
      { name: "Automation Concepts", level: 72 },
    ],
  },
  {
    name: "Cybersecurity",
    icon: Shield,
    accent: "var(--cyber-cyan)",
    skills: [
      { name: "Security Fundamentals", level: 85 },
      { name: "Network Security", level: 78 },
      { name: "Cryptography", level: 76 },
      { name: "Secure Development", level: 80 },
      { name: "Ethical Hacking Concepts", level: 70 },
    ],
  },
  {
    name: "Machine Learning & AI",
    icon: BrainCircuit,
    accent: "var(--cyber-purple)",
    skills: [
      { name: "Data Analysis", level: 82 },
      { name: "Predictive Models", level: 76 },
      { name: "ML Fundamentals", level: 78 },
      { name: "AI Concepts", level: 74 },
    ],
  },
  {
    name: "Blockchain",
    icon: Network,
    accent: "var(--cyber-green)",
    skills: [
      { name: "Blockchain Fundamentals", level: 75 },
      { name: "Smart Contract Concepts", level: 68 },
      { name: "Decentralized Tech", level: 70 },
    ],
  },
  {
    name: "Development Tools",
    icon: GitBranch,
    accent: "var(--cyber-blue)",
    skills: [
      { name: "Git & GitHub", level: 90 },
      { name: "Linux", level: 80 },
      { name: "VS Code", level: 92 },
    ],
  },
];

export type Project = {
  title: string;
  category: string;
  overview: string;
  stack: string[];
  achievements: string[];
  featured?: boolean;
};

export const PROJECT_CATEGORIES = [
  "All",
  "Cybersecurity",
  "Machine Learning",
  "Cloud",
  "Web App",
  "Blockchain",
  "University",
];

export const PROJECTS: Project[] = [
  {
    title: "SentinelGrid — Threat Monitoring Dashboard",
    category: "Cybersecurity",
    overview:
      "A real-time security operations dashboard visualizing network events, anomaly scores and intrusion alerts with a hacker-style terminal feed.",
    stack: ["React", "Python", "REST API", "MongoDB", "Crypto"],
    achievements: [
      "Detects and classifies simulated intrusion patterns",
      "Live event stream with severity scoring",
      "Encrypted log storage & access control",
    ],
    featured: true,
  },
  {
    title: "EventSphere — Event Management System",
    category: "University",
    overview:
      "Full-stack platform for creating, registering and managing university events with role-based access.",
    stack: ["React", "Java", "MySQL", "REST API"],
    achievements: ["Role-based access", "Automated QR ticketing", "Admin analytics"],
  },
  {
    title: "PredictML — Predictive Analytics Engine",
    category: "Machine Learning",
    overview:
      "Machine learning pipeline for predictive modeling on tabular datasets with feature engineering and evaluation.",
    stack: ["Python", "Pandas", "scikit-learn"],
    achievements: ["Automated EDA reports", "Model comparison suite", "85%+ accuracy on test set"],
  },
  {
    title: "CloudDeploy — Serverless Pipeline",
    category: "Cloud",
    overview:
      "Cloud-native deployment workflow demonstrating infrastructure automation and secure environments.",
    stack: ["Cloud", "Docker", "CI/CD", "Linux"],
    achievements: ["Automated deployments", "Least-privilege IAM", "Cost-aware architecture"],
  },
  {
    title: "ChainVault — Smart Contract Wallet",
    category: "Blockchain",
    overview:
      "Experimental decentralized vault exploring smart contract security and Web3 fundamentals.",
    stack: ["Solidity", "Web3", "JavaScript"],
    achievements: ["Multi-sig concept", "Re-entrancy guards", "On-chain event logging"],
  },
  {
    title: "DevHub — Full-Stack Portfolio CMS",
    category: "Web App",
    overview:
      "Modern, responsive content platform with authentication and a clean component-driven UI.",
    stack: ["React", "Node", "MongoDB", "REST API"],
    achievements: ["Responsive design system", "Secure auth flow", "Reusable UI library"],
  },
];

export type DomainTab = {
  id: string;
  label: string;
  icon: LucideIcon;
  accent: string;
  tagline: string;
  items: { heading: string; points: string[] }[];
};

export const DOMAINS: DomainTab[] = [
  {
    id: "ml",
    label: "Machine Learning & AI",
    icon: BrainCircuit,
    accent: "var(--cyber-purple)",
    tagline: "Turning data into intelligent decisions.",
    items: [
      {
        heading: "ML Projects",
        points: ["Predictive modeling", "Data analysis pipelines", "Model evaluation suites"],
      },
      {
        heading: "AI Learning Journey",
        points: ["ML fundamentals", "AI concepts & ethics", "Neural network basics"],
      },
      {
        heading: "Future AI Goals",
        points: ["AI engineering", "MLOps workflows", "Applied deep learning"],
      },
    ],
  },
  {
    id: "cloud",
    label: "Cloud Computing",
    icon: Cloud,
    accent: "var(--cyber-blue)",
    tagline: "Scalable, secure, and automated infrastructure.",
    items: [
      {
        heading: "Cloud Roadmap",
        points: ["Cloud fundamentals", "Architecture patterns", "Automation concepts"],
      },
      {
        heading: "Cloud Projects",
        points: ["Serverless deployment", "Infrastructure as code", "CI/CD pipelines"],
      },
      {
        heading: "Cloud Security",
        points: ["IAM least-privilege", "Network isolation", "Secrets management"],
      },
    ],
  },
  {
    id: "blockchain",
    label: "Blockchain",
    icon: Network,
    accent: "var(--cyber-green)",
    tagline: "Exploring trustless, decentralized systems.",
    items: [
      {
        heading: "Learning Journey",
        points: ["Blockchain fundamentals", "Consensus mechanisms", "Web3 basics"],
      },
      {
        heading: "Smart Contracts",
        points: ["Contract concepts", "Security patterns", "dApp design"],
      },
      {
        heading: "Blockchain Security",
        points: ["Re-entrancy defense", "Audit mindset", "Key management"],
      },
    ],
  },
];

export type RoadmapStage = {
  stage: string;
  status: "done" | "active" | "future";
  topics: string[];
};

export const ROADMAP: RoadmapStage[] = [
  {
    stage: "Current Skills",
    status: "done",
    topics: ["Full-Stack Dev", "Security Fundamentals", "Programming", "Databases", "Git/Linux"],
  },
  {
    stage: "Learning Now",
    status: "active",
    topics: ["Network Security", "Cloud Security", "Machine Learning", "Cryptography", "Blockchain"],
  },
  {
    stage: "Future Goals",
    status: "future",
    topics: [
      "Ethical Hacking",
      "Penetration Testing",
      "Malware Analysis",
      "AI Engineering",
      "DevSecOps",
      "Blockchain Security",
    ],
  },
];

export const SECURITY_NOTES = [
  {
    cmd: "cat ./principles.md",
    title: "Defense in Depth",
    body: "Layered controls — network, app, and data — so no single failure compromises the system.",
  },
  {
    cmd: "cat ./zero-trust.md",
    title: "Zero Trust Mindset",
    body: "Never trust, always verify. Authenticate and authorize every request, internal or external.",
  },
  {
    cmd: "cat ./crypto.md",
    title: "Applied Cryptography",
    body: "Hashing, symmetric & asymmetric encryption, and secure key exchange for data protection.",
  },
  {
    cmd: "cat ./awareness.md",
    title: "Human Firewall",
    body: "Phishing awareness, secure habits and education are the first line of digital defense.",
  },
];

export const CERTIFICATIONS = [
  { title: "Cybersecurity Fundamentals", issuer: "Online Academy", year: "2024", verified: true },
  { title: "Cloud Practitioner Track", issuer: "Cloud Provider", year: "2024", verified: true },
  { title: "Python for Data Science", issuer: "MOOC", year: "2023", verified: true },
  { title: "Network Security Essentials", issuer: "Security Institute", year: "2025", verified: false },
  { title: "Blockchain & Web3 Basics", issuer: "Dev Platform", year: "2025", verified: false },
];

export const GITHUB_STATS = [
  { label: "Repositories", value: 32, icon: GitBranch },
  { label: "Contributions", value: 540, icon: Code2 },
  { label: "Stars Earned", value: 48, icon: Server },
  { label: "Open Source PRs", value: 16, icon: TerminalIcon },
];

export const TECH_NODES: { id: string; label: string; icon: LucideIcon; x: number; y: number; accent: string }[] = [
  { id: "prog", label: "Programming", icon: Cpu, x: 50, y: 50, accent: "var(--cyber-cyan)" },
  { id: "sec", label: "Security", icon: Lock, x: 20, y: 22, accent: "var(--cyber-cyan)" },
  { id: "ai", label: "AI / ML", icon: BrainCircuit, x: 80, y: 22, accent: "var(--cyber-purple)" },
  { id: "cloud", label: "Cloud", icon: Cloud, x: 85, y: 72, accent: "var(--cyber-blue)" },
  { id: "chain", label: "Blockchain", icon: Network, x: 50, y: 88, accent: "var(--cyber-green)" },
  { id: "db", label: "Databases", icon: Database, x: 15, y: 72, accent: "var(--cyber-green)" },
  { id: "tools", label: "Dev Tools", icon: GitBranch, x: 50, y: 14, accent: "var(--cyber-blue)" },
];

export const TECH_EDGES: [string, string][] = [
  ["prog", "sec"],
  ["prog", "ai"],
  ["prog", "cloud"],
  ["prog", "chain"],
  ["prog", "db"],
  ["prog", "tools"],
  ["sec", "cloud"],
  ["ai", "cloud"],
  ["chain", "db"],
  ["sec", "tools"],
];

export const ARTICLES = [
  {
    title: "Why Zero Trust Matters for Students",
    category: "Cybersecurity",
    excerpt: "A beginner-friendly breakdown of the zero-trust model and how to apply it in everyday apps.",
    read: "5 min read",
  },
  {
    title: "My Journey Into Machine Learning",
    category: "AI / ML",
    excerpt: "Reflections on learning ML fundamentals, the math that mattered, and resources that helped.",
    read: "7 min read",
  },
  {
    title: "Cloud Security: First Principles",
    category: "Cloud",
    excerpt: "Notes on least-privilege IAM, secrets management and building secure cloud foundations.",
    read: "6 min read",
  },
  {
    title: "Understanding Smart Contract Risks",
    category: "Blockchain",
    excerpt: "An intro to common smart contract vulnerabilities and the audit mindset that prevents them.",
    read: "8 min read",
  },
];

export const CONTACTS = [
  { label: "GitHub", value: "github.com/yourname", icon: GitBranch, href: "#" },
  { label: "LinkedIn", value: "linkedin.com/in/yourname", icon: Network, href: "#" },
  { label: "Email", value: "you@example.com", icon: Server, href: "mailto:you@example.com" },
  { label: "Resume", value: "Download PDF", icon: TerminalIcon, href: "#" },
];
