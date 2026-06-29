export const PERSONAL = {
  name: "Hashini Gayathri Suraweera",
  title: "Final Year CS Undergraduate @ UCSC",
  tagline: "Exploring technology, securing the future, building digital solutions.",
  bio: "A Computer Science undergraduate passionate about cybersecurity, cloud infrastructure, and machine learning. I enjoy building thoughtful systems and sharing my knowledge. Through continuous learning and hands-on projects, I strive to create secure, scalable, and impactful digital solutions.",
  email: "hashinigayathrisuraweera@gmail.com",
  github: "https://github.com/2023cs200-sys",
  linkedin: "https://www.linkedin.com/in/hashini-gayathri-suraweera-880baa3a9/",
  roles: ["Software Engineer Intern", "Security Engineer Intern", "Cloud Engineer Intern", "ML Engineer Intern"],
};

export const CV_SUMMARY =
  "Computer Science undergraduate with a strong foundation in software engineering, cybersecurity, cloud computing, and machine learning. Experienced in building full-stack web applications, security analysis tools, and predictive ML models. Passionate about creating secure, scalable digital solutions through continuous learning and hands-on project development.";

export type ExperienceEntry = {
  title: string;
  company: string;
  dates: string;
  location: string;
  bullets: string[];
};

export const EXPERIENCE: ExperienceEntry[] = [
  {
    title: "UniPulse – University Event Marketing System",
    company: "HTML · CSS · JavaScript · PHP · MySQL",
    dates: "2024",
    location: "",
    bullets: [
      "Built a centralized event marketing platform for Sri Lankan universities enabling students to discover, manage, and engage with campus events",
      "Streamlined event promotion, registration, and communication through a single unified system",
    ],
  },
  {
    title: "Password Strength Analyzer",
    company: "Python-Flask · HTML · CSS · JavaScript",
    dates: "2024",
    location: "",
    bullets: [
      "Developed a real-time password strength checker evaluating length, character diversity, and complexity",
      "Delivered clear visual feedback to help users understand and improve password security habits",
      "Deployed on Vercel with a Python-Flask backend",
    ],
  },
  {
    title: "Cafe Brew - AI-Powered Coffee Shop Assistant",
    company: "Python-Flask · HTML · CSS · JavaScript",
    dates: "2024",
    location: "",
    bullets: [
      "Developed an AI-powered chatbot with NLP capabilities for intelligent real-time customer interactions",
      "Built a seamless conversational experience using modern web technologies",
    ],
  },
  {
    title: "ZenCrypt – Encrypted Messaging Tool",
    company: "Python-Flask · CSS · HTML · JavaScript",
    dates: "2024",
    location: "",
    bullets: [
      "Built a secure messaging tool with Base64 encryption/decryption and a modern dark-themed UI",
      "Implemented real-time encryption, clipboard copying, and password-protected access",
    ],
  },
  {
    title: "LUDO Board Game",
    company: "C Language · Algorithm Design",
    dates: "2024",
    location: "",
    bullets: [
      "Developed a fully playable console-based LUDO game with 4 AI players and 52-position board logic",
      "Implemented dice rolling, piece movement, opponent capture mechanics, and random mystery cells",
      "Built with modular C programming using custom data structures",
    ],
  },
  {
    title: "IPL Cricket Score Predictor with Machine Learning",
    company: "Python · FastAPI · React · Docker · GitHub Actions",
    dates: "2025",
    location: "",
    bullets: [
      "Built a full-stack ML web app predicting IPL first innings scores using Random Forest Regressor",
      "Developed a FastAPI REST API backend with a React + Vite frontend",
      "Containerized with Docker, automated CI/CD via GitHub Actions, deployed on Render and Vercel",
    ],
  },
];

export type LanguageEntry = {
  language: string;
  level: string;
};

export const LANGUAGES: LanguageEntry[] = [
  { language: "Sinhala", level: "Native" },
  { language: "English", level: "Fluent (IELTS 7.0)" },
];

export type AcademicEntry = {
  topic: string;
  badge: string;
  institution: string;
  description: string;
};

export const ACADEMIC: AcademicEntry[] = [
  {
    topic: "BSc in Computer Science",
    badge: "Currently Final Year",
    institution: "University of Colombo School of Computing (UCSC)",
    description: "Final-year Computer Science undergraduate at UCSC, passionate about software engineering, cybersecurity, AI, and full-stack web development. Experienced in building practical software solutions and working on team-based projects.",
  },
  {
    topic: "GCE Advanced Level – Physical Science",
    badge: "2020 – 2023",
    institution: "Anula Vidyalaya, Nugegoda",
    description: "Achieved A in Chemistry and B grades in Physics and Combined Mathematics with a Z-Score of 1.71, developing strong analytical and problem-solving skills that led to admission to the University of Colombo School of Computing.",
  },
];

export type ProjectEntry = {
  n: string;
  title: string;
  desc: string;
  tags: string[];
  link1: string;
  link2: string;
  link3?: string;
  cta1: string;
  cta2: string;
  cta3?: string;
};

export const PROJECTS: ProjectEntry[] = [
  {
    n: "01",
    title: "UniPulse – University Event Marketing System",
    desc: "A centralized event marketing platform designed for Sri Lankan universities, enabling students to discover, manage, and engage with university events through a single, user-friendly system. UniPulse streamlines event promotion, registration, and communication, improving event visibility and student participation across campuses.",
    tags: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    link1: "https://github.com/Manush-hub/UniPulse.git",
    link2: "#",
    cta1: "→ VIEW_REPO",
    cta2: "→ VIEW_DEMO",
  },
  {
    n: "02",
    title: "Password Strength Analyzer",
    desc: "Password Strength Analyzer is a simple web project that checks how strong a user's password is in real time. It evaluates factors like length, uppercase and lowercase letters, numbers, and special characters to give clear feedback. The project helps users understand what makes a secure password and encourages better password habits.",
    tags: ["Python-Flask", "HTML", "CSS", "JavaScript", "Vercel"],
    link1: "https://github.com/2023cs200-sys/passwordStrengthAnalyzer.git",
    link2: "https://password-strength-analyzer-three.vercel.app/",
    cta1: "→ VIEW_REPO",
    cta2: "→ VIEW_DEMO",
  },
  {
    n: "03",
    title: "Predicting Gold Prices with Machine Learning",
    desc: "Created a machine learning application that predicts gold prices using historical market data. Implemented the Random Forest Regressor algorithm in Python to train the model and generate accurate price predictions.",
    tags: ["PYTHON", "Pandas", "NumPy", "Scikit-learn"],
    link1: "https://github.com/2023cs200-sys/gold_pricePridictionWith_ML.git",
    link2: "https://gold-price-predictor.netlify.app/",
    cta1: "→ VIEW_REPO",
    cta2: "→ VIEW_DOCUMENTATION",
  },
  {
    n: "04",
    title: "Cafe` Brew - AI-Powered Coffee Shop Assistant",
    desc: "Developed an AI-powered chatbot application that provides intelligent and real-time responses to user queries. Integrated natural language processing capabilities to enhance user interactions and built the system using modern web technologies to deliver a seamless conversational experience.",
    tags: ["Python-Flask", "HTML", "CSS", "JavaScript", "Vercel"],
    link1: "https://github.com/2023cs200-sys/AI-ChatBot.git",
    link2: "https://cafeai-nu.vercel.app/",
    cta1: "→ VIEW_REPO",
    cta2: "→ VIEW_DEMO",
  },
  {
    n: "05",
    title: "SkySecure – Cloud-Based Website Security Scanner",
    desc: "CloudSentinel is a cloud-based web application that helps users evaluate the security and trustworthiness of websites through automated scanning and risk analysis. By examining factors such as SSL certificates, phishing indicators, and suspicious patterns, the platform provides a clear security score and easy-to-understand insights. Built with React, Flask, and MongoDB Atlas, the project showcases full-stack development, cloud integration, and practical cybersecurity concepts.",
    tags: ["Python-Flask", "ReactJs", "CSS", "HTML", "JavaScript", "Vercel"],
    link1: "https://github.com/samithna25/security-scanner.git",
    link2: "https://security-scanner-pearl.vercel.app/",
    link3: "https://skysecure.netlify.app/",
    cta1: "→ VIEW_REPO",
    cta2: "→ VIEW_DEMO",
    cta3: "→ VIEW_DOCUMENTATION",
  },
  {
    n: "06",
    title: "ZenCrypt – Peace of mind, encrypted",
    desc: "ZenCrypt is a secure messaging tool that enables users to encrypt and decrypt text using Base64 encoding. Built with a modern dark-themed UI, it features real-time encryption, clipboard copying, and password-protected access. The application demonstrates my ability to build full-stack web applications with seamless frontend-backend integration.",
    tags: ["Python-Flask", "CSS", "HTML", "JavaScript", "Vercel"],
    link1: "https://github.com/2023cs200-sys/msg_encrypt_decrypt.git",
    link2: "https://zencrypt.vercel.app/",
    link3: "https://zencrypt.netlify.app/",
    cta1: "→ VIEW_REPO",
    cta2: "→ VIEW_DEMO",
    cta3: "→ VIEW_DOCUMENTATION",
  },
  {
    n: "07",
    title: "LUDO Board Game using C language",
    desc: "A fully playable console-based LUDO game written in C featuring 4 AI players (Red, Green, Yellow, Blue), each controlling 4 pieces around a 52-position board. Implements core game mechanics including dice rolling, piece movement, capturing opponent pieces, and special mystery cells that randomly teleport pieces to predefined locations. Built with modular C programming using custom data structures.",
    tags: ["C Language", "Algorithm Design"],
    link1: "https://github.com/2023cs200-sys/LUDOgame.git",
    link2: "https://ludogamedocumentation.netlify.app/",
    cta1: "→ VIEW_REPO",
    cta2: "→ VIEW_DOCUMENTATION",
  },
  {
    n: "08",
    title: "IPL Cricket Score Predictor | End-to-End Machine Learning Application",
    desc: "Built a full-stack machine learning web application that predicts the final score of an IPL first innings using a Random Forest Regressor. Developed a FastAPI backend to serve predictions through a REST API and a React + Vite frontend with a modern, responsive interface. Containerized using Docker and Docker Compose, implemented GitHub Actions for CI/CD automation.",
    tags: ["Python", "FastAPI", "React", "Vite", "Docker", "GitHub Actions", "Render", "Vercel"],
    link1: "https://github.com/2023cs200-sys/IPL_Cricket_Score_Predictor_ML.git",
    link2: "https://ipl-cricket-score-predictor-ml.vercel.app/",
    cta1: "→ VIEW_REPO",
    cta2: "→ VIEW_DEMO",
  },
];

export type SkillCard = {
  head: string;
  items: { name: string; level: number }[];
};

export const SKILL_CARDS: SkillCard[] = [
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
      { name: "Docker", level: 85 },
    ],
  },
];

export type JourneyEntry = {
  tag: string;
  title: string;
  state: string;
  color: string;
  items: string[];
};

export const JOURNEY: JourneyEntry[] = [
  {
    tag: "[NOW]",
    title: "Current Skills",
    state: "MASTERED",
    color: "accent",
    items: ["Full-Stack Dev", "Security Fundamentals", "Programming", "Databases", "Git / Linux"],
  },
  {
    tag: "[NEXT]",
    title: "Learning Now",
    state: "IN_PROGRESS",
    color: "warn",
    items: ["Network Security", "Cloud Security", "Machine Learning", "Cryptography", "Blockchain"],
  },
  {
    tag: "[SOON]",
    title: "Future Goals",
    state: "PLANNED",
    color: "danger",
    items: ["Ethical Hacking", "Penetration Testing", "Malware Analysis", "AI Engineering", "DevSecOps", "Blockchain Security"],
  },
];

export type PostEntry = {
  code: string;
  title: string;
  platform: string;
  href: string;
};

export const POSTS: PostEntry[] = [
  { code: "POST_01", title: "APK Security: How to Stay Safe on Android", platform: "LINKEDIN_ARTICLE", href: "https://www.linkedin.com/posts/hashini-gayathri-suraweera-880baa3a9_cybersecurity-cyberawareness-androidsecurity-activity-7470178338146275329-d0no?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAGQFxmABFK7OQjpfJOe4yq-Ff0I6J1QkHz8" },
  { code: "POST_02", title: "Responding to a Trojan Malware Incident", platform: "LINKEDIN_ARTICLE", href: "https://www.linkedin.com/posts/hashini-gayathri-suraweera-880baa3a9_recently-i-experienced-a-real-cybersecurity-activity-7465736593664835584-KbJS?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAGQFxmABFK7OQjpfJOe4yq-Ff0I6J1QkHz8" },
];

export type CertEntry = {
  code: string;
  name: string;
  issuer: string;
  status: string;
  description: string;
};

export const CERTS: CertEntry[] = [
  {
    code: "CERT_01",
    name: "(ISC)²: Certified in Cybersecurity (CC)",
    issuer: "(ISC)²",
    status: "EARNED",
    description: "Completed the (ISC)² Certified in Cybersecurity (CC) program, covering security principles, network security, access control, incident response, business continuity, disaster recovery, and security operations.",
  },
  {
    code: "CERT_02",
    name: "Fundamentals of Blockchain and Bitcoin",
    issuer: "Alison",
    status: "COMPLETED",
    description: "Completed the Fundamentals of Blockchain and Bitcoin course, gaining knowledge of blockchain technology, cryptocurrencies, decentralized systems, cryptographic hashing, consensus mechanisms, mining, and blockchain security.",
  },
  {
    code: "CERT_03",
    name: "AI in Cybersecurity: Vulnerability, Intelligence, Security, and Ethics",
    issuer: "Alison",
    status: "COMPLETED",
    description: "Completed a course on AI in Cybersecurity, exploring the role of artificial intelligence in threat detection, security monitoring, and cyber defense.",
  },
  {
    code: "CERT_04",
    name: "Machine Learning Using Python",
    issuer: "Simplilearn",
    status: "COMPLETED",
    description: "Completed a course on Machine Learning using Python, learning data preprocessing, supervised and unsupervised learning, model building, and evaluation techniques.",
  },
  {
    code: "CERT_05",
    name: "Microsoft: Introduction to Cloud Infrastructure",
    issuer: "Microsoft Learn",
    status: "IN_PROGRESS",
    description: "Completed the Describe Cloud Concepts learning path, covering cloud computing fundamentals, cloud service types, and the benefits of cloud services.",
  },
  {
    code: "CERT_06",
    name: "Getting Started with Docker",
    issuer: "Simplilearn",
    status: "COMPLETED",
    description: "Completed a course on Docker, learning containerization concepts, image creation, container management, and deployment workflows.",
  },
];

export type ContactEntry = {
  label: string;
  handle: string;
  href: string;
  cmd: string;
};

export const CONTACTS: ContactEntry[] = [
  {
    label: "EMAIL",
    handle: "hashinigayathrisuraweera",
    href: "mailto:hashinigayathrisuraweera@gmail.com",
    cmd: "$ mail --compose",
  },
  {
    label: "GITHUB",
    handle: "github.com/H.G.Suraweera",
    href: "https://github.com/2023cs200-sys",
    cmd: "$ git remote -v",
  },
  {
    label: "LINKEDIN",
    handle: "linkedin/H.G.Suraweera",
    href: "https://www.linkedin.com/in/hashini-gayathri-suraweera-880baa3a9/",
    cmd: "$ curl --connect",
  },
];
