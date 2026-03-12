import { Badge } from "@/registry/fhnw/ui/badge"
import { buttonVariants } from "@/registry/fhnw/ui/button"
import { cn } from "@/lib/utils"

const mainLinks = ["Dashboard", "Studierende", "Lehre", "Services"]
const megaLinks = ["Topic I", "Topic II", "Topic III"]

function ToolsHeader() {
  return (
    <section className="border border-border bg-white">
      <header className="border-b border-border">
        <div className="flex flex-col gap-4 border-b border-border bg-[#f7f7f5] px-5 py-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-wrap items-center gap-3">
            <span className="bg-black px-3 py-2 text-sm font-semibold tracking-[0.28em] text-white">
              FHNW
            </span>
            <div>
              <p className="text-sm font-semibold text-black">Corporate IT Services</p>
              <p className="text-sm text-foreground/65">Tools &amp; Services</p>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <Badge variant="secondary">DE</Badge>
            <a className={cn(buttonVariants({ variant: "outline", size: "sm" }), "no-underline")} href="#">
              EN
            </a>
            <a className={cn(buttonVariants({ variant: "ghost", size: "sm" }), "no-underline")} href="#">
              Profil
            </a>
          </div>
        </div>

        <div className="px-5 py-4">
          <div className="mb-4 border-b border-black pb-3">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-foreground/60">Metatitle</p>
            <h2 className="mt-2 text-3xl font-semibold text-black">Tools-Header</h2>
          </div>

          <div className="grid gap-4 lg:grid-cols-[0.9fr_1.1fr]">
            <nav className="flex flex-wrap gap-2" aria-label="Main navigation">
              {mainLinks.map((link, index) => (
                <a
                  key={link}
                  href="#"
                  className={cn(
                    buttonVariants({ variant: index === 0 ? "secondary" : "ghost", size: "sm" }),
                    "no-underline",
                  )}
                >
                  {link}
                </a>
              ))}
            </nav>

            <div className="border border-border bg-[#f7f7f5] p-4">
              <p className="text-sm font-semibold text-black">Megamenu</p>
              <div className="mt-3 grid gap-3 sm:grid-cols-3">
                {megaLinks.map((link) => (
                  <div key={link} className="border border-border bg-white p-3 text-sm text-black">
                    {link}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </header>
    </section>
  )
}

export { ToolsHeader }
