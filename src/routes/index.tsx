import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { motion } from "framer-motion";
import { Moon, Sun, Languages, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ProjectCard } from "@/components/ProjectCard";
import { EnglishDialog } from "@/components/EnglishDialog";
import { useTheme } from "@/hooks/use-theme";
import { projects } from "@/data/projects";
import hamster from "@/assets/hamster.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "scooby.boo — projekty Krzysia 🐹" },
      { name: "description", content: "Hub projektów Krzysia. Polish vibe-coding." },
      { property: "og:title", content: "scooby.boo — projekty Krzysia 🐹" },
      { property: "og:description", content: "Hub projektów Krzysia." },
    ],
  }),
  component: Home,
});

function Home() {
  const { theme, toggle } = useTheme();
  const [enOpen, setEnOpen] = useState(false);

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Animated blobs */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-32 -left-20 h-96 w-96 rounded-full bg-[var(--pink)] opacity-30 blur-3xl animate-blob" />
        <div
          className="absolute top-40 -right-24 h-96 w-96 rounded-full bg-[var(--sky)] opacity-30 blur-3xl animate-blob"
          style={{ animationDelay: "-4s" }}
        />
        <div
          className="absolute bottom-0 left-1/3 h-96 w-96 rounded-full bg-[var(--mint)] opacity-30 blur-3xl animate-blob"
          style={{ animationDelay: "-8s" }}
        />
      </div>

      {/* Top bar */}
      <header className="relative z-10 flex items-center justify-between px-6 py-5 md:px-10">
        <div className="flex items-center gap-2 font-display text-lg font-bold">
          <span className="text-2xl">🐹</span>
          <span>
            scooby<span className="text-[var(--pink)]">.boo</span>
          </span>
        </div>
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setEnOpen(true)}
            className="rounded-full border-2 font-semibold gap-1.5"
          >
            <Languages className="h-4 w-4" />
            <span className="hidden sm:inline">English</span>
            <span className="sm:hidden">EN</span>
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={toggle}
            aria-label="Toggle theme"
            className="rounded-full border-2"
          >
            {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </Button>
        </div>
      </header>

      {/* Hero */}
      <main className="relative z-10 mx-auto max-w-5xl px-6 pb-20 pt-6 md:pt-10">
        <section className="flex flex-col items-center text-center">
          <motion.div
            initial={{ scale: 0, rotate: -30 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: "spring", stiffness: 180, damping: 14, delay: 0.1 }}
            className="relative"
          >
            <div className="absolute inset-0 -z-10 rounded-full bg-[var(--pink)] opacity-40 blur-2xl" />
            <img
              src={hamster}
              alt="Hamster mascot Scooby"
              width={1024}
              height={1024}
              className="h-44 w-44 md:h-56 md:w-56 animate-float drop-shadow-2xl"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
            className="mt-2 inline-flex items-center gap-2 rounded-full border-2 bg-card/70 px-4 py-1.5 text-xs font-semibold backdrop-blur"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--mint)] opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--mint)]" />
            </span>
            cześć, jestem Krzyś
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45 }}
            className="mt-5 font-display text-5xl font-extrabold leading-[1.05] tracking-tight md:text-7xl"
          >
            <span className="text-gradient">scooby</span>
            <span className="text-foreground">.boo</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55 }}
            className="mt-4 max-w-xl text-base text-muted-foreground md:text-lg"
          >
            Mała norka pełna projektów! Wbijaj, klikaj, baw się dobrze. 🧀
          </motion.p>
        </section>

        {/* Projects */}
        <section className="mt-16 md:mt-20">
          <div className="mb-8 flex items-end justify-between">
            <h2 className="font-display text-2xl font-bold md:text-3xl">
              Projekty <span className="text-[var(--pink)]">·</span>{" "}
              <span className="text-muted-foreground">{projects.length}</span>
            </h2>
            <span className="hidden text-sm text-muted-foreground md:inline">kliknij, otwiera w nowej karcie ↗</span>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((p, i) => (
              <ProjectCard key={p.url} project={p} index={i} />
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-20 flex flex-col items-center gap-2 text-center text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <span className="animate-bounce-slow text-lg">🐹</span>
            <span>made with </span>
            <span className="animate-bounce-slow text-lg">🧀</span>
            <span> by Krzyś</span>
          </div>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 hover:bg-foreground/5"
          >
            <Github className="h-3.5 w-3.5" /> github
          </a>
        </footer>
      </main>

      <EnglishDialog open={enOpen} onOpenChange={setEnOpen} />
    </div>
  );
}
