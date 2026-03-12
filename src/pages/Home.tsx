import { Link } from "@tanstack/react-router";
import { ArrowUpRightIcon } from "@phosphor-icons/react";

import { cn } from "@/lib/utils";
import { Basiselemente } from "@/registry/fhnw/blocks/basiselemente/basiselemente";
import { CookieHinweis } from "@/registry/fhnw/blocks/cookie-hinweis/cookie-hinweis";
import { Farben } from "@/registry/fhnw/blocks/farben/farben";
import { Formulare } from "@/registry/fhnw/blocks/formulare/formulare";
import { FormularValidierung } from "@/registry/fhnw/blocks/formular-validierung/formular-validierung";
import { ToolsFooter } from "@/registry/fhnw/blocks/tools-footer/tools-footer";
import { ToolsHeader } from "@/registry/fhnw/blocks/tools-header/tools-header";
import { Typografie } from "@/registry/fhnw/blocks/typografie/typografie";
import { WebdienstFooter } from "@/registry/fhnw/blocks/webdienst-footer/webdienst-footer";
import { WebdienstHeader } from "@/registry/fhnw/blocks/webdienst-header/webdienst-header";
import { WortBildmarken } from "@/registry/fhnw/blocks/wort-bildmarken/wort-bildmarken";
import { buttonVariants } from "@/registry/fhnw/ui/button";
import { SiteHeader } from "@/registry/fhnw/ui/site-header";

const registryItems = [
  "style-fhnw",
  "button",
  "input",
  "textarea",
  "select",
  "checkbox",
  "radio-group",
  "card",
  "alert",
  "badge",
  "tabs",
  "accordion",
  "breadcrumb",
  "back-to-top",
  "carousel",
  "collapse",
  "dropdown",
  "icons",
  "images",
  "loading-spinner",
  "modal",
  "nav-tabs",
  "offcanvas",
  "pagination",
  "popover",
  "progressbar",
  "tables",
  "teaser",
  "testimonial",
  "tooltip",
  "videos",
  "site-header",
  "basiselemente",
  "cookie-hinweis",
  "farben",
  "formulare",
  "formular-validierung",
  "wort-bildmarken",
  "tools-footer",
  "tools-header",
  "typografie",
  "webdienst-footer",
  "webdienst-header",
];

const blockPreviews = [
  {
    title: "Basiselemente",
    packageName: "@fhnw/basiselemente",
    jsonName: "basiselemente",
    component: <Basiselemente />,
  },
  {
    title: "Cookie-Hinweis",
    packageName: "@fhnw/cookie-hinweis",
    jsonName: "cookie-hinweis",
    component: <CookieHinweis />,
  },
  {
    title: "Farben",
    packageName: "@fhnw/farben",
    jsonName: "farben",
    component: <Farben />,
  },
  {
    title: "Formulare",
    packageName: "@fhnw/formulare",
    jsonName: "formulare",
    component: <Formulare />,
  },
  {
    title: "Formular-Validierung",
    packageName: "@fhnw/formular-validierung",
    jsonName: "formular-validierung",
    component: <FormularValidierung />,
  },
  {
    title: "Wort-/Bildmarken",
    packageName: "@fhnw/wort-bildmarken",
    jsonName: "wort-bildmarken",
    component: <WortBildmarken />,
  },
  {
    title: "Tools-Header",
    packageName: "@fhnw/tools-header",
    jsonName: "tools-header",
    component: <ToolsHeader />,
    bodyClassName: "p-0",
  },
  {
    title: "Tools-Footer",
    packageName: "@fhnw/tools-footer",
    jsonName: "tools-footer",
    component: <ToolsFooter />,
    bodyClassName: "p-0",
  },
  {
    title: "Typografie",
    packageName: "@fhnw/typografie",
    jsonName: "typografie",
    component: <Typografie />,
  },
  {
    title: "Webdienst-Header",
    packageName: "@fhnw/webdienst-header",
    jsonName: "webdienst-header",
    component: <WebdienstHeader />,
    bodyClassName: "p-0",
  },
  {
    title: "Webdienst-Footer",
    packageName: "@fhnw/webdienst-footer",
    jsonName: "webdienst-footer",
    component: <WebdienstFooter />,
    bodyClassName: "p-0",
  },
];

const summaryFacts = [
  { label: "Quelle", value: "FHNW Styleguide V5" },
  { label: "Fokus", value: "Basiselemente und Registry-Blöcke" },
  { label: "Geometrie", value: "Quadratisch, flach, kontrastreich" },
  { label: "Bereitstellung", value: "Statisches JSON unter /r" },
];

export function Home() {
  const baseUrl = import.meta.env.BASE_URL;
  const withBase = (path: string) => `${baseUrl}${path.replace(/^\/+/, "")}`;

  const origin =
    typeof window !== "undefined"
      ? window.location.origin
      : "https://registry.example.com";

  const registryBaseUrl = new URL(withBase("r/{name}.json"), origin).toString();

  const registryConfig = `{
  "registries": {
    "@fhnw": "${registryBaseUrl}"
  }
}`;

  return (
    <div className="min-h-screen bg-[#f7f7f5] text-foreground font-sans">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-4 py-6 sm:px-6 lg:px-8">
        <SiteHeader registryBasePath={baseUrl} />

        <section className="border border-black bg-white">
          <div className="grid lg:grid-cols-[1.25fr_0.75fr]">
            <div className="border-b border-border p-6 md:p-8 lg:border-b-0 lg:border-r">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-foreground/60">
                FHNW Registry / Styleguide V5
              </p>
              <h1 className="mt-4 max-w-4xl text-balance text-[clamp(2.4rem,5vw,4rem)] font-semibold leading-[1.02] text-black">
                Registry für FHNW Basiselemente und Komponenten
              </h1>
              <p className="mt-4 max-w-3xl text-base leading-7 text-foreground">
                Diese Registry übersetzt den live referenzierten FHNW
                Styleguide V5 in installierbare shadcn-kompatible Primitives
                und Blöcke. Die Landing Page folgt bewusst derselben visuellen
                Sprache: flach, quadratisch und kontraststark.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  to="/docs"
                  className={cn(
                    buttonVariants({ variant: "secondary" }),
                    "no-underline",
                  )}
                >
                  Dokumentation ansehen
                </Link>
                <a
                  href={withBase("r/registry.json")}
                  className={cn(
                    buttonVariants({ variant: "default" }),
                    "no-underline",
                  )}
                >
                  Registry JSON
                </a>
              </div>
            </div>

            <div className="bg-[#fde703] p-6 md:p-8">
              <div className="space-y-4 text-sm text-black">
                {summaryFacts.map((fact) => (
                  <div
                    key={fact.label}
                    className="border-b border-black/20 pb-4 last:border-b-0 last:pb-0"
                  >
                    <p className="text-xs font-semibold uppercase tracking-[0.18em]">
                      {fact.label}
                    </p>
                    <p className="mt-2 text-base font-medium">{fact.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="border-t border-black bg-black px-6 py-3 text-sm text-white">
            Referenz: live FHNW Styleguide V5, übersetzt in React-Blöcke und
            statische Registry-Items.
          </div>
        </section>

        <section id="install" className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <article className="border border-black bg-white">
            <div className="border-b border-border bg-[#f7f7f5] px-6 py-4">
              <h2 className="text-2xl font-semibold text-black">Installation</h2>
            </div>
            <div className="p-6">
              <p className="max-w-2xl text-base leading-7 text-foreground">
                Richte dein shadcn-Projekt auf diese gehostete Registry ein,
                installiere das FHNW-Theme und füge anschließend die benötigten
                Primitives oder Blöcke hinzu.
              </p>
              <div className="mt-6 space-y-6">
                <div className="space-y-2">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-foreground/60">
                    1. Namespace hinzufügen
                  </p>
                  <pre className="overflow-x-auto border border-black bg-black p-5 text-sm leading-6 text-white">
                    <code>{registryConfig}</code>
                  </pre>
                </div>
                <div className="space-y-2">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-foreground/60">
                    2. FHNW Foundation installieren
                  </p>
                  <pre className="overflow-x-auto border border-black bg-black p-5 text-sm leading-6 text-white">
                    <code>pnpm dlx shadcn@latest add @fhnw/style-fhnw</code>
                  </pre>
                </div>
                <div className="space-y-2">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-foreground/60">
                    3. Primitives oder Blöcke hinzufügen
                  </p>
                  <pre className="overflow-x-auto border border-black bg-black p-5 text-sm leading-6 text-white">
                    <code>{`pnpm dlx shadcn@latest add @fhnw/button
pnpm dlx shadcn@latest add @fhnw/webdienst-header
pnpm dlx shadcn@latest add @fhnw/farben`}</code>
                  </pre>
                </div>
              </div>
            </div>
          </article>

          <article className="border border-black bg-black text-white">
            <div className="border-b border-white/20 px-6 py-4">
              <h2 className="text-2xl font-semibold text-white">Registry Dateien</h2>
            </div>
            <div className="p-6">
              <p className="max-w-2xl text-base leading-7 text-white/75">
                Jedes Element wird als statische JSON-Datei unter <code>/r</code>
                bereitgestellt. Die Liste enthält Theme, Primitives und die
                installierbaren FHNW-Blöcke.
              </p>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {registryItems.map((name) => (
                  <a
                    key={name}
                    href={withBase(`r/${name}.json`)}
                    className="flex items-center justify-between border border-white/20 px-4 py-3 text-sm no-underline transition-colors hover:border-[#fde703] hover:bg-[#1a1a1a]"
                  >
                    <span>{name}</span>
                    <ArrowUpRightIcon className="size-4 text-[#fde703]" />
                  </a>
                ))}
              </div>
            </div>
          </article>
        </section>

        <section id="previews" className="space-y-6">
          <div className="border border-black bg-white">
            <div className="border-b border-black bg-[#fde703] px-6 py-4">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-black">
                Live Vorschau
              </p>
              <h2 className="mt-2 text-2xl font-semibold text-black">
                Basiselemente als installierbare Blöcke
              </h2>
            </div>
            <div className="p-6">
              <p className="max-w-3xl text-base leading-7 text-foreground">
                Elf installierbare Basiselement-Blöcke, gerendert direkt aus
                denselben Registry-Quelldateien, die auch das statische JSON
                erzeugen.
              </p>
            </div>
          </div>

          <div className="grid gap-8 xl:grid-cols-2">
            {blockPreviews.map((preview) => (
              <article
                key={preview.jsonName}
                className="overflow-hidden border border-black bg-white"
              >
                <div className="border-b border-border bg-[#f7f7f5] px-6 py-4">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <h3 className="text-xl font-semibold text-black">
                        {preview.title}
                      </h3>
                      <p className="text-sm text-foreground/60">
                        {preview.packageName}
                      </p>
                    </div>
                    <a
                      href={withBase(`r/${preview.jsonName}.json`)}
                      className={cn(
                        buttonVariants({ variant: "secondary", size: "sm" }),
                        "no-underline",
                      )}
                    >
                      JSON
                    </a>
                  </div>
                </div>
                <div className={preview.bodyClassName ?? "p-6"}>
                  {preview.component}
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
