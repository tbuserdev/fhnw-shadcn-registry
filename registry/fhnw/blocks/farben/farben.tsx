import { Badge } from "@/registry/fhnw/ui/badge"

const primaryPalette = [
  { label: "Primary", value: "#000000", textClassName: "text-white" },
  { label: "Secondary", value: "#fde703", textClassName: "text-black" },
  { label: "White", value: "#ffffff", textClassName: "text-black" },
]

const secondaryPalette = [
  { label: "Danger", value: "#df305b", textClassName: "text-white" },
  { label: "Success", value: "#198754", textClassName: "text-white" },
  { label: "Warning", value: "#ffc107", textClassName: "text-black" },
  { label: "Info", value: "#dee2e6", textClassName: "text-black" },
  { label: "Light", value: "#f1f1ee", textClassName: "text-black" },
]

function PaletteRow({
  title,
  items,
}: {
  title: string
  items: Array<{ label: string; value: string; textClassName: string }>
}) {
  return (
    <div className="space-y-4">
      <h3 className="text-xl font-semibold text-black">{title}</h3>
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {items.map((item) => (
          <article key={item.label} className="border border-border bg-white">
            <div
              className={`flex min-h-32 items-end justify-between p-4 ${item.textClassName}`}
              style={{ backgroundColor: item.value }}
            >
              <span className="text-lg font-semibold">{item.label}</span>
              <span className="text-sm">{item.value}</span>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}

function Farben() {
  return (
    <section className="border border-border bg-white">
      <div className="border-b border-border bg-[#f7f7f5] p-6">
        <Badge variant="secondary">Farben</Badge>
        <h2 className="mt-4 text-3xl font-semibold text-black">Primär- und Sekundärfarben</h2>
        <p className="mt-3 max-w-3xl text-sm leading-7 text-foreground/75">
          Nachfolgend finden Sie die nutzbaren Primär- und Sekundärfarben aus
          dem FHNW-Styleguide. Sie bilden die Grundlage für Buttons,
          Hervorhebungen, Statusanzeigen und Flächen.
        </p>
      </div>

      <div className="space-y-8 p-6">
        <PaletteRow title="Primäre Farbpalette" items={primaryPalette} />
        <PaletteRow title="Sekundäre Farbpalette" items={secondaryPalette} />
      </div>
    </section>
  )
}

export { Farben }
