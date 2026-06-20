import { useEffect, useState } from "react";

const ROLES = [
  "dev_security_cloud",
  "cybersecurity_enthusiast",
  "machine_learning_explorer",
  "blockchain_curious",
  "full_stack_developer",
];

export function TypingRoles() {
  const [roleIdx, setRoleIdx] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = ROLES[roleIdx];
    const speed = deleting ? 35 : 70;

    if (!deleting && text === current) {
      const t = setTimeout(() => setDeleting(true), 1600);
      return () => clearTimeout(t);
    }
    if (deleting && text === "") {
      setDeleting(false);
      setRoleIdx((i) => (i + 1) % ROLES.length);
      return;
    }
    const t = setTimeout(() => {
      setText(
        deleting
          ? current.slice(0, text.length - 1)
          : current.slice(0, text.length + 1),
      );
    }, speed);
    return () => clearTimeout(t);
  }, [text, deleting, roleIdx]);

  return (
    <span className="terminal-cursor text-foreground">{text}</span>
  );
}
