import { Badge } from "@/registry/fhnw/ui/badge"
import { Button } from "@/registry/fhnw/ui/button"

const groups = [
  {
    title: "Schriften & Farben",
    items: ["Farben", "Wort-/Bildmarken", "Typografie"],
    copy:
      "Die visuellen Grundlagen des Styleguides: Farbpaletten, Logos und die Typografie mit Inter als Standardschrift.",
  },
  {
    title: "Formulare",
    items: ["Formulare", "Formular-Validierung"],
    copy:
      "Eingabefelder, Auswahlsteuerelemente und Validierungszustände für standardisierte FHNW-Formulare.",
  },
  {
    title: "PAAS & SAAS-Elemente",
    items: ["Tools-Header", "Tools-Footer", "Webdienst-Header", "Webdienst-Footer"],
    copy:
      "Pflichtelemente für Webdienste und gemeinsame Strukturen für interne Tools und Services.",
  },
  {
    title: "Cookie-Hinweis & Datenschutz",
    items: ["Cookie-Hinweis"],
    copy:
      "Datenschutz-Hinweise und Consent-Banner für konforme FHNW-Webauftritte.",
  },
]

function Basiselemente() {
  return (
    <section className="border border-border bg-white">
      <div className="border-b border-border bg-[#f7f7f5] p-6">
        <Badge variant="secondary">Basiselemente des Styleguides</Badge>
        <h2 className="mt-4 text-3xl font-semibold text-black">Startpunkt für FHNW Webdienste</h2>
        <p className="mt-3 max-w-3xl text-sm leading-7 text-foreground/80">
          Der Styleguide Web FHNW leitet sich aus dem CD-Manual der FHNW ab und
          beschreibt die grundlegenden Bausteine für konforme Webdienste,
          Templates und interne Tools.
        </p>
      </div>

      <div className="grid gap-4 p-6 lg:grid-cols-2">
        {groups.map((group) => (
          <article key={group.title} className="border border-border bg-white p-5">
            <h3 className="text-xl font-semibold text-black">{group.title}</h3>
            <p className="mt-2 text-sm leading-6 text-foreground/75">{group.copy}</p>
            <ul className="mt-4 space-y-2 text-sm text-black">
              {group.items.map((item) => (
                <li key={item} className="flex items-center justify-between border-t border-border pt-2">
                  <span>{item}</span>
                  <span className="text-xs uppercase tracking-[0.18em] text-foreground/55">Block</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>

      <div className="border-t border-border bg-[#f7f7f5] p-6">
        <div className="grid gap-4 lg:grid-cols-[1.3fr_0.7fr] lg:items-center">
          <div>
            <h3 className="text-lg font-semibold text-black">Technische Grundlage</h3>
            <p className="mt-2 text-sm leading-6 text-foreground/75">
              Für die Darstellung werden im FHNW-Styleguide vor allem
              <code className="mx-1">fhnw.min.css</code> und
              <code className="mx-1">default.js</code> referenziert. Dieses
              Registry-Set übersetzt die Basiselemente in installierbare
              React-Blöcke.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
            <Button variant="secondary">FHNW Theme</Button>
            <Button variant="outline">Styleguide lesen</Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export { Basiselemente }
