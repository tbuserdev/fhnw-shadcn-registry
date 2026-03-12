import { ArrowUpRightIcon } from "@phosphor-icons/react"

import { CampusFaq } from "@/registry/fhnw/blocks/campus-faq/campus-faq"
import { ProgrammeShowcase } from "@/registry/fhnw/blocks/programme-showcase/programme-showcase"
import { StudyForm } from "@/registry/fhnw/blocks/study-form/study-form"
import { SiteHeader } from "@/registry/fhnw/ui/site-header"

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
  "site-header",
  "study-form",
  "programme-showcase",
  "campus-faq",
]

function App() {
  const baseUrl = import.meta.env.BASE_URL
  const withBase = (path: string) => `${baseUrl}${path.replace(/^\/+/, "")}`

  const origin =
    typeof window !== "undefined"
      ? window.location.origin
      : "https://registry.example.com"

  const registryBaseUrl = new URL(withBase("r/{name}.json"), origin).toString()

  const registryConfig = `{
  "registries": {
    "@fhnw": "${registryBaseUrl}"
  }
}`

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top_left,_rgba(253,231,3,0.28),_transparent_32%),linear-gradient(180deg,_#f7f7f5_0%,_#ffffff_40%,_#f7f7f5_100%)]">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-4 py-4 sm:px-6 lg:px-8">
        <SiteHeader registryBasePath={baseUrl} />

        <section className="grid gap-6 border-2 border-black bg-white p-6 shadow-[0_22px_60px_rgba(0,0,0,0.08)] lg:grid-cols-[1.4fr_0.9fr] lg:p-10">
          <div className="space-y-5">
            <p className="w-fit bg-secondary px-3 py-1 text-xs font-semibold uppercase tracking-[0.28em] text-black">
              FHNW Base UI Registry
            </p>
            <h1 className="max-w-4xl text-balance text-[clamp(2.8rem,7vw,5.8rem)] font-semibold leading-none tracking-[-0.06em] text-black">
              Sharp FHNW components for shadcn Base UI projects.
            </h1>
            <p className="max-w-2xl text-lg text-foreground/85">
              This registry replaces the stock Next template with a Vite app,
              ships light-theme FHNW primitives, and keeps every installable item
              free of Radix and Next-only dependencies.
            </p>
          </div>

          <div className="grid gap-3 bg-muted p-5 text-sm text-foreground/80">
            <div className="flex items-center justify-between border-b border-border pb-3">
              <span className="font-semibold text-black">Deployment</span>
              <span>GitHub Pages / static hosting</span>
            </div>
            <div className="flex items-center justify-between border-b border-border pb-3">
              <span className="font-semibold text-black">Baseline</span>
              <span>shadcn Base UI / base-lyra</span>
            </div>
            <div className="flex items-center justify-between border-b border-border pb-3">
              <span className="font-semibold text-black">Theme</span>
              <span>FHNW light</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="font-semibold text-black">Static registry</span>
              <a
                className="inline-flex items-center gap-1 font-semibold text-black hover:underline"
                href={withBase("r/registry.json")}
              >
                Open index
                <ArrowUpRightIcon className="size-4" />
              </a>
            </div>
          </div>
        </section>

        <section
          id="install"
          className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]"
        >
          <article className="border-2 border-black bg-white p-6">
            <h2 className="text-3xl text-black">Install</h2>
            <p className="mt-3 text-sm text-foreground/80">
              Point your shadcn project at this hosted registry, install the
              FHNW theme, then add only the primitives or blocks you need.
            </p>
            <div className="mt-5 space-y-4">
              <div>
                <p className="mb-2 text-xs font-semibold uppercase tracking-[0.24em] text-foreground/60">
                  1. Add the namespace
                </p>
                <pre className="overflow-x-auto bg-black p-4 text-xs leading-6 text-white">
                  <code>{registryConfig}</code>
                </pre>
              </div>
              <div>
                <p className="mb-2 text-xs font-semibold uppercase tracking-[0.24em] text-foreground/60">
                  2. Install the FHNW foundation
                </p>
                <pre className="overflow-x-auto bg-black p-4 text-xs leading-6 text-white">
                  <code>pnpm dlx shadcn@latest add @fhnw/style-fhnw</code>
                </pre>
              </div>
              <div>
                <p className="mb-2 text-xs font-semibold uppercase tracking-[0.24em] text-foreground/60">
                  3. Add primitives or blocks
                </p>
                <pre className="overflow-x-auto bg-black p-4 text-xs leading-6 text-white">
                  <code>{`pnpm dlx shadcn@latest add @fhnw/button
pnpm dlx shadcn@latest add @fhnw/study-form`}</code>
                </pre>
              </div>
            </div>
          </article>

          <article className="border-2 border-black bg-[linear-gradient(135deg,#000_0%,#121212_58%,#232323_100%)] p-6 text-white">
            <h2 className="text-3xl text-white">Registry Files</h2>
            <p className="mt-3 max-w-2xl text-sm text-white/72">
              Every item below is emitted as static JSON under <code>/r</code>.
            </p>
            <div className="mt-5 grid gap-2 sm:grid-cols-2">
              {registryItems.map((name) => (
                <a
                  key={name}
                  href={withBase(`r/${name}.json`)}
                  className="inline-flex items-center justify-between border border-white/18 bg-white/6 px-3 py-3 text-sm transition hover:border-secondary hover:bg-white/10"
                >
                  <span>{name}</span>
                  <ArrowUpRightIcon className="size-4 text-secondary" />
                </a>
              ))}
            </div>
          </article>
        </section>

        <section id="previews" className="space-y-6">
          <div className="flex flex-col gap-2">
            <h2 className="text-3xl text-black">Live Previews</h2>
            <p className="max-w-2xl text-sm text-foreground/80">
              Three installable blocks plus the shared header component rendered
              from the same registry source files that power the JSON output.
            </p>
          </div>

          <div className="grid gap-6">
            <article className="border-2 border-black bg-white p-4 md:p-6">
              <div className="mb-4 flex items-center justify-between gap-3">
                <div>
                  <h3 className="text-2xl text-black">Site Header</h3>
                  <p className="text-sm text-foreground/70">
                    `@fhnw/site-header`
                  </p>
                </div>
                <a
                  href={withBase("r/site-header.json")}
                  className="inline-flex items-center gap-1 text-sm font-semibold text-black hover:underline"
                >
                  JSON
                  <ArrowUpRightIcon className="size-4" />
                </a>
              </div>
              <div className="overflow-hidden border border-border">
                <SiteHeader registryBasePath={baseUrl} />
              </div>
            </article>

            <div className="grid gap-6 xl:grid-cols-2">
              <article className="border-2 border-black bg-white p-4 md:p-6">
                <div className="mb-4 flex items-center justify-between gap-3">
                  <div>
                    <h3 className="text-2xl text-black">Study Form</h3>
                    <p className="text-sm text-foreground/70">
                      `@fhnw/study-form`
                    </p>
                  </div>
                  <a
                    href={withBase("r/study-form.json")}
                    className="inline-flex items-center gap-1 text-sm font-semibold text-black hover:underline"
                  >
                    JSON
                    <ArrowUpRightIcon className="size-4" />
                  </a>
                </div>
                <StudyForm />
              </article>

              <article className="border-2 border-black bg-white p-4 md:p-6">
                <div className="mb-4 flex items-center justify-between gap-3">
                  <div>
                    <h3 className="text-2xl text-black">Programme Showcase</h3>
                    <p className="text-sm text-foreground/70">
                      `@fhnw/programme-showcase`
                    </p>
                  </div>
                  <a
                    href={withBase("r/programme-showcase.json")}
                    className="inline-flex items-center gap-1 text-sm font-semibold text-black hover:underline"
                  >
                    JSON
                    <ArrowUpRightIcon className="size-4" />
                  </a>
                </div>
                <ProgrammeShowcase />
              </article>
            </div>

            <article className="border-2 border-black bg-white p-4 md:p-6">
              <div className="mb-4 flex items-center justify-between gap-3">
                <div>
                  <h3 className="text-2xl text-black">Campus FAQ</h3>
                  <p className="text-sm text-foreground/70">
                    `@fhnw/campus-faq`
                  </p>
                </div>
                <a
                  href={withBase("r/campus-faq.json")}
                  className="inline-flex items-center gap-1 text-sm font-semibold text-black hover:underline"
                >
                  JSON
                  <ArrowUpRightIcon className="size-4" />
                </a>
              </div>
              <CampusFaq />
            </article>
          </div>
        </section>
      </div>
    </div>
  )
}

export default App
