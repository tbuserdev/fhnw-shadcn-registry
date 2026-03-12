import { Badge } from "@/registry/fhnw/ui/badge"

function Typografie() {
  return (
    <section className="border border-border bg-white">
      <div className="border-b border-border bg-[#f7f7f5] p-6">
        <Badge variant="secondary">Typografie</Badge>
        <h2 className="mt-4 text-3xl font-semibold text-black">Inter als Standardschrift</h2>
        <p className="mt-3 max-w-3xl text-sm leading-7 text-foreground/75">
          Für Online-Kanäle der FHNW kommt durchgängig Inter zum Einsatz.
          Punktuell wird Spectral für akzentuierte Inhalte wie Testimonial-Elemente verwendet.
        </p>
      </div>

      <div className="grid gap-8 p-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-5">
          <div className="space-y-2">
            <h1>Pure H1 tag without class</h1>
            <h2>Heading H2</h2>
            <h3>Heading H3</h3>
            <h4>Heading H4</h4>
          </div>

          <div className="space-y-3 border-t border-border pt-5">
            <p className="text-3xl font-semibold text-black">h1. Bootstrap heading with paragraph tag</p>
            <p className="text-2xl font-semibold text-black">h2. Bootstrap heading with paragraph tag</p>
            <p className="lead text-black">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
              eos, commodi autem porro, ex quo odio illo quas nisi ratione.
            </p>
            <p className="text-sm leading-7 text-foreground/75">
              Standard Paragraph für den Fliesstext mit ruhiger Zeilenhöhe und
              deutlicher Hierarchie zu Titeln und Leadtext.
            </p>
          </div>
        </div>

        <aside className="space-y-5 border border-border p-5">
          <div>
            <h3 className="text-xl font-semibold text-black">Listen</h3>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-black">
              <li>Unordered list für Inhalte mit mittlerer Gewichtung</li>
              <li>Leadtext mit erhöhter Aufmerksamkeit</li>
              <li>Klare Abstufung von H1 bis H6</li>
            </ul>
          </div>

          <div className="border-t border-border pt-5">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-foreground/55">
              Spectral Akzent
            </p>
            <p className="mt-3 font-['Spectral'] text-2xl italic text-black">
              “Punktuell, etwa für das Testimonial-Element, kommt Spectral zum Einsatz.”
            </p>
          </div>
        </aside>
      </div>
    </section>
  )
}

export { Typografie }
