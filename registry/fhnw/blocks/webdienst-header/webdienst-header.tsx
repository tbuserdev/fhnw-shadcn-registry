import { buttonVariants } from "@/registry/fhnw/ui/button"
import { cn } from "@/lib/utils"

const navLinks = ["Start", "Webdienste", "Corporate Design", "Download"]
const dropdownLinks = ["First level 1", "First level 2", "First level 3", "Second level 1"]

function WebdienstHeader() {
  return (
    <section className="border border-border bg-white">
      <header className="border-b border-border">
        <div className="flex flex-col gap-4 border-b border-border px-5 py-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex items-center gap-3">
            <span className="bg-black px-3 py-2 text-sm font-semibold tracking-[0.28em] text-white">
              FHNW
            </span>
            <p className="text-sm text-foreground/75">Webdienst-Header</p>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <a className={cn(buttonVariants({ variant: "secondary", size: "sm" }), "no-underline")} href="#">
              DE
            </a>
            <a className={cn(buttonVariants({ variant: "outline", size: "sm" }), "no-underline")} href="#">
              EN
            </a>
            <a className={cn(buttonVariants({ variant: "ghost", size: "sm" }), "no-underline")} href="#">
              Suchen
            </a>
          </div>
        </div>

        <div className="bg-[#fde703] px-5 py-3">
          <p className="text-base font-semibold text-black">FHNW Bootstrap V5 Styleguide</p>
        </div>

        <div className="grid gap-4 px-5 py-4 lg:grid-cols-[0.9fr_1.1fr]">
          <nav className="flex flex-wrap gap-2" aria-label="Primary">
            {navLinks.map((link, index) => (
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
            <p className="text-sm font-semibold text-black">Mehrstufige Navigation</p>
            <div className="mt-3 grid gap-3 sm:grid-cols-2">
              {dropdownLinks.map((link) => (
                <div key={link} className="border border-border bg-white px-3 py-2 text-sm text-black">
                  {link}
                </div>
              ))}
            </div>
          </div>
        </div>
      </header>
    </section>
  )
}

export { WebdienstHeader }
