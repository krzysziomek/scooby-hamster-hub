import { Outlet, Link, createRootRoute, HeadContent, Scripts, ScriptOnce } from "@tanstack/react-router";

import appCss from "../styles.css?url";

const SITE_URL = "https://scooby.boo";
const SITE_TITLE = "scooby.boo — projekty Krzysia 🐹";
const SITE_DESC =
  "Hub projektów Krzysia: polskie webappki, skrypty i boty Discord. Cytaty polityczne, baza dowcipów i wyszukiwarka polskiego audio.";
const OG_IMAGE = `${SITE_URL}/og-image.png`;

const JSON_LD = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: "scooby.boo",
      description: SITE_DESC,
      inLanguage: "pl-PL",
    },
    {
      "@type": "Person",
      "@id": `${SITE_URL}/#krzys`,
      name: "Krzyś",
      url: SITE_URL,
      jobTitle: "Vibe-coder",
      knowsAbout: ["Web development", "Python", "Discord bots", "TypeScript", "React"],
    },
  ],
};

// Avoid flash-of-light on first paint: apply theme before React hydrates.
const THEME_BOOTSTRAP = `(function(){try{var t=localStorage.getItem("scooby-theme");if(t!=="light"){document.documentElement.classList.add("dark");}}catch(e){document.documentElement.classList.add("dark");}})();`;

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1, viewport-fit=cover" },
      { name: "theme-color", content: "#1a1326", media: "(prefers-color-scheme: dark)" },
      { name: "theme-color", content: "#fdf7f0", media: "(prefers-color-scheme: light)" },
      { name: "color-scheme", content: "dark light" },

      { title: SITE_TITLE },
      { name: "description", content: SITE_DESC },
      { name: "author", content: "Krzyś" },
      {
        name: "keywords",
        content:
          "scooby.boo, Krzyś, polskie projekty, vibe coding, cytaty polityczne, dowcipy, polskie audio, dubbing, lektor, Discord bot, Python, webapp",
      },
      { name: "robots", content: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" },
      { name: "googlebot", content: "index, follow" },

      // Open Graph
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "scooby.boo" },
      { property: "og:locale", content: "pl_PL" },
      { property: "og:locale:alternate", content: "en_US" },
      { property: "og:url", content: SITE_URL },
      { property: "og:title", content: SITE_TITLE },
      { property: "og:description", content: SITE_DESC },
      { property: "og:image", content: OG_IMAGE },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: "scooby.boo — fluffy white hamster mascot" },

      // Twitter
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: SITE_TITLE },
      { name: "twitter:description", content: SITE_DESC },
      { name: "twitter:image", content: OG_IMAGE },
      { name: "twitter:image:alt", content: "scooby.boo — fluffy white hamster mascot" },

      // PWA-ish
      { name: "application-name", content: "scooby.boo" },
      { name: "apple-mobile-web-app-title", content: "scooby.boo" },
      { name: "apple-mobile-web-app-capable", content: "yes" },
      { name: "format-detection", content: "telephone=no" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "canonical", href: SITE_URL },
      { rel: "icon", href: "/favicon.svg", type: "image/svg+xml" },
      { rel: "apple-touch-icon", href: "/apple-touch-icon.png" },
      { rel: "manifest", href: "/site.webmanifest" },
      { rel: "sitemap", type: "application/xml", href: "/sitemap.xml" },
      { rel: "alternate", hrefLang: "pl", href: SITE_URL },
      { rel: "alternate", hrefLang: "x-default", href: SITE_URL },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Fredoka:wght@500;600;700&family=Nunito:wght@400;600;700;800&display=swap",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(JSON_LD),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pl" suppressHydrationWarning>
      <head>
        <ScriptOnce children={THEME_BOOTSTRAP} />
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return <Outlet />;
}
