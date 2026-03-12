import { Link } from "@tanstack/react-router";
import { ArrowUpRightIcon } from "@phosphor-icons/react";

import { CampusFaq } from "@/registry/fhnw/blocks/campus-faq/campus-faq";
import { ProgrammeShowcase } from "@/registry/fhnw/blocks/programme-showcase/programme-showcase";
import { StudyForm } from "@/registry/fhnw/blocks/study-form/study-form";
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
  "study-form",
  "programme-showcase",
  "campus-faq",
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
pnpm dlx shadcn@latest add @fhnw/study-form`}</code>
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
              Drei installierbare Blöcke sowie der geteilte Header-Component,
              gerendert aus denselben Registry-Quelldateien, die auch das JSON
              generieren.
            </p>
          </div>

          <div className="grid gap-8">
            <article className="overflow-hidden rounded-2xl border border-black/10 bg-white shadow-md">
              <div className="border-b border-black/5 bg-slate-50/50 px-6 py-4">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">
                      Site Header
                    </h3>
                    <p className="text-sm font-mono text-slate-500">
                      @fhnw/site-header
                    </p>
                  </div>
                  <a
                    href={withBase("r/site-header.json")}
                    className="inline-flex items-center gap-1 text-sm font-semibold text-slate-600 transition hover:text-secondary"
                  >
                    JSON <ArrowUpRightIcon className="size-4" />
                  </a>
                </div>
              </div>
              <div className="p-0 sm:p-6">
                <div className="overflow-hidden sm:rounded-xl sm:border border-border">
                  <SiteHeader registryBasePath={baseUrl} />
                </div>
              </div>
            </article>

            <div className="grid gap-8 xl:grid-cols-2">
              <article className="overflow-hidden rounded-2xl border border-black/10 bg-white shadow-md">
                <div className="border-b border-black/5 bg-slate-50/50 px-6 py-4">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <h3 className="text-xl font-bold text-slate-900">
                        Study Form
                      </h3>
                      <p className="text-sm font-mono text-slate-500">
                        @fhnw/study-form
                      </p>
                    </div>
                    <a
                      href={withBase("r/study-form.json")}
                      className="inline-flex items-center gap-1 text-sm font-semibold text-slate-600 transition hover:text-secondary"
                    >
                      JSON <ArrowUpRightIcon className="size-4" />
                    </a>
                  </div>
                </div>
                <div className="p-6">
                  <StudyForm />
                </div>
              </article>

              <article className="overflow-hidden rounded-2xl border border-black/10 bg-white shadow-md">
                <div className="border-b border-black/5 bg-slate-50/50 px-6 py-4">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <h3 className="text-xl font-bold text-slate-900">
                        Programme Showcase
                      </h3>
                      <p className="text-sm font-mono text-slate-500">
                        @fhnw/programme-showcase
                      </p>
                    </div>
                    <a
                      href={withBase("r/programme-showcase.json")}
                      className="inline-flex items-center gap-1 text-sm font-semibold text-slate-600 transition hover:text-secondary"
                    >
                      JSON <ArrowUpRightIcon className="size-4" />
                    </a>
                  </div>
                </div>
                <div className="p-6">
                  <ProgrammeShowcase />
                </div>
              </article>
            </div>

            <article className="overflow-hidden rounded-2xl border border-black/10 bg-white shadow-md">
              <div className="border-b border-black/5 bg-slate-50/50 px-6 py-4">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">
                      Campus FAQ
                    </h3>
                    <p className="text-sm font-mono text-slate-500">
                      @fhnw/campus-faq
                    </p>
                  </div>
                  <a
                    href={withBase("r/campus-faq.json")}
                    className="inline-flex items-center gap-1 text-sm font-semibold text-slate-600 transition hover:text-secondary"
                  >
                    JSON <ArrowUpRightIcon className="size-4" />
                  </a>
                </div>
              </div>
              <div className="p-6">
                <CampusFaq />
              </div>
            </article>
          </div>
        </section>
      </div>
    </div>
  );
}
