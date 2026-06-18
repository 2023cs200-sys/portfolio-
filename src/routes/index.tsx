import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { motion, useScroll } from "motion/react";
import { Toaster } from "@/components/ui/sonner";

import { LoadingScreen } from "@/components/portfolio/LoadingScreen";
import { CursorGlow } from "@/components/portfolio/CursorGlow";
import { ParticleBackground } from "@/components/portfolio/ParticleBackground";
import { Navbar } from "@/components/portfolio/Navbar";
import { CommandPalette } from "@/components/portfolio/CommandPalette";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Skills } from "@/components/portfolio/Skills";
import { Projects } from "@/components/portfolio/Projects";
import { CyberHub } from "@/components/portfolio/CyberHub";
import { Domains } from "@/components/portfolio/Domains";
import { Roadmap } from "@/components/portfolio/Roadmap";
import { GitHubDashboard } from "@/components/portfolio/GitHubDashboard";
import { TechNetwork } from "@/components/portfolio/TechNetwork";
import { Achievements } from "@/components/portfolio/Achievements";
import { Contact } from "@/components/portfolio/Contact";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Cyber Portfolio — CS Undergrad | Security, AI, Cloud & Full-Stack" },
      {
        name: "description",
        content:
          "Portfolio of a Computer Science undergraduate specializing in cybersecurity, software engineering, cloud computing, AI/ML, and blockchain. Building secure, intelligent digital solutions.",
      },
      { property: "og:title", content: "Cyber Portfolio — Security · AI · Cloud · Full-Stack" },
      {
        property: "og:description",
        content:
          "Futuristic portfolio of a security-minded CS undergraduate exploring AI, cloud, blockchain and full-stack development.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  const [paletteOpen, setPaletteOpen] = useState(false);
  const { scrollYProgress } = useScroll();

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <LoadingScreen />
      <ParticleBackground />
      <CursorGlow />

      <motion.div
        style={{ scaleX: scrollYProgress }}
        className="fixed inset-x-0 top-0 z-50 h-0.5 origin-left"
        aria-hidden
      >
        <div className="h-full w-full" style={{ background: "var(--gradient-primary)" }} />
      </motion.div>

      <Navbar onOpenPalette={() => setPaletteOpen(true)} />
      <CommandPalette open={paletteOpen} onOpenChange={setPaletteOpen} />

      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <CyberHub />
        <Domains />
        <Roadmap />
        <GitHubDashboard />
        <TechNetwork />
        <Achievements />
        <Contact />
      </main>

      <Toaster />
    </div>
  );
}
