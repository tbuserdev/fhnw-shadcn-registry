import { Link } from "@tanstack/react-router";
import { ArrowUpRightIcon } from "@phosphor-icons/react";

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
    <div className="min-h-screen bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-yellow-50 via-white to-white text-foreground font-sans">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 px-4 py-6 sm:px-6 lg:px-8">
        <SiteHeader registryBasePath={baseUrl} />

        <div className="flex flex-col sm:flex-row gap-4 mb-2 justify-center sm:justify-end">
          <Link
            to="/docs"
            className="inline-flex items-center justify-center gap-2 rounded-md bg-secondary px-6 py-3 text-sm font-semibold text-black shadow-sm transition hover:bg-secondary/90 hover:-translate-y-0.5"
          >
            Dokumentation ansehen <ArrowUpRightIcon className="size-4" />
          </Link>
        </div>

        <section className="grid gap-8 overflow-hidden rounded-2xl border border-black/10 bg-white/60 p-8 shadow-xl backdrop-blur-md lg:grid-cols-[1.4fr_0.9fr] lg:p-12">
          <div className="space-y-6">
            <p className="w-fit rounded-full bg-secondary/20 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-secondary-foreground">
              FHNW Base UI Registry
            </p>
            <h1 className="max-w-4xl text-balance text-[clamp(2.5rem,6vw,5rem)] font-extrabold leading-[1.1] tracking-tight text-slate-900">
              Scharfe FHNW Komponenten für shadcn Projekte.
            </h1>
            <p className="max-w-2xl text-lg text-slate-600 leading-relaxed">
              Diese Registry ersetzt Standard-Templates durch eine moderne
              Vite-App. Wir liefern FHNW-konforme UI-Elemente und Blöcke –
              komplett frei von Radix und Next.js Abhängigkeiten.
            </p>
          </div>

          <div className="flex flex-col justify-center gap-4 rounded-xl bg-slate-50 p-6 text-sm text-slate-700 shadow-inner">
            <div className="flex items-center justify-between border-b border-slate-200 pb-4">
              <span className="font-semibold text-slate-900">Deployment</span>
              <span className="font-medium">GitHub Pages / statisch</span>
            </div>
            <div className="flex items-center justify-between border-b border-slate-200 pb-4">
              <span className="font-semibold text-slate-900">Basis</span>
              <span className="font-medium">shadcn Base UI / base-lyra</span>
            </div>
            <div className="flex items-center justify-between border-b border-slate-200 pb-4">
              <span className="font-semibold text-slate-900">Theme</span>
              <span className="font-medium">FHNW Design System</span>
            </div>
            <div className="flex items-center justify-between pt-2">
              <span className="font-semibold text-slate-900">
                Static Registry
              </span>
              <a
                className="inline-flex items-center gap-1 font-semibold text-secondary-foreground transition hover:text-secondary hover:underline"
                href={withBase("r/registry.json")}
              >
                Index öffnen
                <ArrowUpRightIcon className="size-4" />
              </a>
            </div>
          </div>
        </section>

        <section id="install" className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <article className="rounded-2xl border border-black/10 bg-white p-8 shadow-lg">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900">
              Installation
            </h2>
            <p className="mt-4 text-slate-600 leading-relaxed">
              Richte dein shadcn-Projekt auf diese gehostete Registry ein,
              installiere das FHNW-Theme und füge anschließend die benötigten
              Primitives oder Blöcke hinzu.
            </p>
            <div className="mt-8 space-y-6">
              <div className="space-y-2">
                <p className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  1. Namespace hinzufügen
                </p>
                <pre className="overflow-x-auto rounded-lg bg-slate-900 p-5 text-sm leading-6 text-slate-50 shadow-inner">
                  <code>{registryConfig}</code>
                </pre>
              </div>
              <div className="space-y-2">
                <p className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  2. FHNW Foundation installieren
                </p>
                <pre className="overflow-x-auto rounded-lg bg-slate-900 p-5 text-sm leading-6 text-slate-50 shadow-inner">
                  <code>pnpm dlx shadcn@latest add @fhnw/style-fhnw</code>
                </pre>
              </div>
              <div className="space-y-2">
                <p className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  3. Primitives oder Blöcke hinzufügen
                </p>
                <pre className="overflow-x-auto rounded-lg bg-slate-900 p-5 text-sm leading-6 text-slate-50 shadow-inner">
                  <code>{`pnpm dlx shadcn@latest add @fhnw/button
pnpm dlx shadcn@latest add @fhnw/webdienst-header
pnpm dlx shadcn@latest add @fhnw/farben`}</code>
                </pre>
              </div>
            </div>
          </article>

          <article className="rounded-2xl bg-slate-900 p-8 text-white shadow-xl">
            <h2 className="text-3xl font-bold tracking-tight text-white">
              Registry Dateien
            </h2>
            <p className="mt-4 max-w-2xl text-slate-300 leading-relaxed">
              Jedes der folgenden Elemente wird als statische JSON-Datei unter{" "}
              <code>/r</code> bereitgestellt.
            </p>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {registryItems.map((name) => (
                <a
                  key={name}
                  href={withBase(`r/${name}.json`)}
                  className="group flex items-center justify-between rounded-lg border border-white/10 bg-white/5 px-4 py-3 transition hover:border-secondary hover:bg-white/10"
                >
                  <span className="font-medium">{name}</span>
                  <ArrowUpRightIcon className="size-4 text-secondary transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
                </a>
              ))}
            </div>
          </article>
        </section>

        <section id="previews" className="mt-8 space-y-8">
          <div className="flex flex-col gap-3 text-center sm:text-left">
            <h2 className="text-4xl font-bold tracking-tight text-slate-900">
              Live Vorschau
            </h2>
            <p className="max-w-3xl text-lg text-slate-600">
              Elf installierbare Basiselement-Blöcke, gerendert direkt aus
              denselben Registry-Quelldateien, die auch das statische JSON
              erzeugen.
            </p>
          </div>

          <div className="grid gap-8 xl:grid-cols-2">
            {blockPreviews.map((preview) => (
              <article
                key={preview.jsonName}
                className="overflow-hidden rounded-2xl border border-black/10 bg-white shadow-md"
              >
              <div className="border-b border-black/5 bg-slate-50/50 px-6 py-4">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">
                      {preview.title}
                    </h3>
                    <p className="text-sm font-mono text-slate-500">
                      {preview.packageName}
                    </p>
                  </div>
                  <a
                    href={withBase(`r/${preview.jsonName}.json`)}
                    className="inline-flex items-center gap-1 text-sm font-semibold text-slate-600 transition hover:text-secondary"
                  >
                    JSON <ArrowUpRightIcon className="size-4" />
                  </a>
                </div>
              </div>
              <div className={preview.bodyClassName ?? "p-6"}>{preview.component}</div>
            </article>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
