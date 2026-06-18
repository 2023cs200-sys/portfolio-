import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { AnimatePresence } from "framer-motion";

const LINES = [
  "$ initializing secure environment...",
  "$ loading neural modules... ok",
  "$ establishing encrypted channel... ok",
  "$ mounting portfolio.sys... ok",
  "$ access granted ▮",
];

export function LoadingScreen() {
  const [done, setDone] = useState(false);
  const [visible, setVisible] = useState(0);

  useEffect(() => {
    const lineTimer = setInterval(() => {
      setVisible((v) => {
        if (v >= LINES.length) {
          clearInterval(lineTimer);
          return v;
        }
        return v + 1;
      });
    }, 320);
    const end = setTimeout(() => setDone(true), 2200);
    return () => {
      clearInterval(lineTimer);
      clearTimeout(end);
    };
  }, []);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-background cyber-grid"
        >
          <div className="aurora-bg absolute inset-0 opacity-40" />
          <div className="relative w-[min(90vw,420px)] font-mono text-sm">
            <div className="mb-6 flex items-center gap-3">
              <div className="h-3 w-3 animate-pulse-glow rounded-full bg-cyber-cyan" />
              <span className="text-gradient font-display text-lg font-bold">SYS://PORTFOLIO</span>
            </div>
            <div className="space-y-1.5">
              {LINES.slice(0, visible).map((l, i) => (
                <motion.p
                  key={i}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="text-cyber-cyan/90"
                >
                  {l}
                </motion.p>
              ))}
            </div>
            <div className="mt-6 h-1 w-full overflow-hidden rounded-full bg-secondary">
              <motion.div
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 2 }}
                className="h-full rounded-full"
                style={{ background: "var(--gradient-primary)" }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
