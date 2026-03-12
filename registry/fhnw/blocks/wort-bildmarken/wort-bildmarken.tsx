import { Badge } from "@/registry/fhnw/ui/badge"
import { Button } from "@/registry/fhnw/ui/button"

function LogoLockup({
  title,
  subtitle,
}: {
  title: string
  subtitle: string
}) {
  return (
    <div className="border border-border bg-white p-5">
      <div className="inline-flex items-stretch border border-black">
        <span className="bg-black px-4 py-3 text-lg font-bold tracking-[0.25em] text-white">
          FHNW
        </span>
        <div className="flex flex-col justify-center px-4 py-3">
          <span className="text-sm font-semibold text-black">{title}</span>
          <span className="text-sm text-foreground/70">{subtitle}</span>
        </div>
      </div>
    </div>
  )
}

function WortBildmarken() {
  return (
    <section className="border border-border bg-white">
      <div className="border-b border-border bg-[#f7f7f5] p-6">
        <Badge variant="secondary">Wort-/Bildmarken</Badge>
        <h2 className="mt-4 text-3xl font-semibold text-black">Logo-Einsatz im digitalen Auftritt</h2>
        <p className="mt-3 max-w-3xl text-sm leading-7 text-foreground/75">
          Die Wort-/Bildmarken der FHNW werden im Standard-Design über den
          vorgegebenen Header integriert. Im Custom-Design muss die vollständige
          Wort-/Bildmarke links oben platziert werden.
        </p>
      </div>

      <div className="grid gap-6 p-6 lg:grid-cols-[1fr_1fr]">
        <div className="space-y-4">
          <LogoLockup title="Fachhochschule Nordwestschweiz" subtitle="Standard-Design" />
          <LogoLockup title="Hochschule für Gestaltung und Kunst" subtitle="Custom-Design" />
        </div>

        <div className="space-y-4 border border-border p-5">
          <h3 className="text-xl font-semibold text-black">Hinweise aus dem Styleguide</h3>
          <ul className="space-y-3 text-sm leading-6 text-foreground/75">
            <li>Standard-Plattformen nutzen die Wort-/Bildmarke im Webdienst- oder Tools-Header.</li>
            <li>Custom-Designs integrieren die vollständige Marke links oben.</li>
            <li>Verfügbare Formate im Branding-Portal: PNG, SVG, JPG und EPS.</li>
            <li>Die Nutzung folgt den Vorgaben des CD-Manuals der FHNW.</li>
          </ul>
          <div className="pt-2">
            <Button variant="outline">Branding-Portal</Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export { WortBildmarken }
