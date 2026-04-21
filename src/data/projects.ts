export type Project = {
  name: string;
  url: string;
  description: string;
  emoji: string;
  accent: "pink" | "mint" | "sky" | "lemon" | "peach" | "lavender";
};

// Add new projects here — the homepage updates automatically.
export const projects: Project[] = [
  {
    name: "cytaty.scooby.boo",
    url: "https://cytaty.scooby.boo",
    description: "Generator polskich cytatów politycznych. Bez złych intencji — czysta zabawa.",
    emoji: "🎙️",
    accent: "pink",
  },
  {
    name: "dowcipy.scooby.boo",
    url: "https://dowcipy.scooby.boo",
    description: "Baza polskich dowcipów uratowana z wygaszonej apki Android „DowcipyXXL”.",
    emoji: "😂",
    accent: "lemon",
  },
  {
    name: "polskieaudio.scooby.boo",
    url: "https://polskieaudio.scooby.boo",
    description: "Wyszukiwarka filmów i seriali z polskim dubbingiem lub lektorem.",
    emoji: "🎬",
    accent: "sky",
  },
];
