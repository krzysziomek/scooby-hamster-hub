import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/data/projects";

const accentMap: Record<Project["accent"], { bg: string; ring: string; glow: string }> = {
  pink:     { bg: "bg-[var(--pink)]",     ring: "ring-[var(--pink)]",     glow: "glow-pink" },
  mint:     { bg: "bg-[var(--mint)]",     ring: "ring-[var(--mint)]",     glow: "glow-mint" },
  sky:      { bg: "bg-[var(--sky)]",      ring: "ring-[var(--sky)]",      glow: "glow-sky"  },
  lemon:    { bg: "bg-[var(--lemon)]",    ring: "ring-[var(--lemon)]",    glow: "glow-pink" },
  peach:    { bg: "bg-[var(--peach)]",    ring: "ring-[var(--peach)]",    glow: "glow-pink" },
  lavender: { bg: "bg-[var(--lavender)]", ring: "ring-[var(--lavender)]", glow: "glow-sky"  },
};

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  const a = accentMap[project.accent];
  return (
    <motion.a
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ delay: 0.15 + index * 0.1, type: "spring", stiffness: 200, damping: 18 }}
      whileHover={{ y: -8, rotate: index % 2 === 0 ? -1 : 1 }}
      whileTap={{ scale: 0.97 }}
      className={`group relative block rounded-3xl border-2 border-foreground/10 bg-card p-6 ${a.glow} transition-shadow hover:shadow-2xl`}
    >
      <div className={`absolute -top-4 -left-4 flex h-14 w-14 items-center justify-center rounded-2xl ${a.bg} text-3xl shadow-lg ring-4 ring-background transition-transform group-hover:rotate-12`}>
        {project.emoji}
      </div>
      <div className="absolute top-5 right-5 rounded-full bg-foreground/5 p-2 transition-all group-hover:bg-foreground group-hover:text-background">
        <ArrowUpRight className="h-4 w-4" />
      </div>

      <h3 className="mt-6 font-display text-xl font-bold break-all">{project.name}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{project.description}</p>

      <div className={`mt-5 h-1.5 w-12 rounded-full ${a.bg} transition-all group-hover:w-full`} />
    </motion.a>
  );
}
