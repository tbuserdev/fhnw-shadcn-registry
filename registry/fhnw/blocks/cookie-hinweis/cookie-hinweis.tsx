import { Button } from "@/registry/fhnw/ui/button"

function CookieHinweis() {
  return (
    <section className="border border-border bg-white">
      <div className="border-b border-border p-6">
        <h2 className="text-3xl font-semibold text-black">Cookie-Hinweis</h2>
        <p className="mt-3 max-w-3xl text-sm leading-7 text-foreground/75">
          Mustertext und Consent-Banner gemäss FHNW-Styleguide mit Verweis auf
          Datenschutz und einem klaren Bestätigungs-CTA.
        </p>
      </div>

      <div className="grid gap-6 p-6 lg:grid-cols-[1.3fr_0.7fr]">
        <div className="flex min-h-56 flex-col justify-end border border-border bg-[#f7f7f5] p-5">
          <div
            className="border border-black bg-[#fde703] p-4 shadow-[8px_8px_0_0_rgba(0,0,0,0.08)]"
            role="alert"
            aria-label="Datenschutz und Cookies"
          >
            <p className="text-sm leading-6 text-black">
              Indem Sie diesen Hinweis schliessen oder mit dem Besuch der Seite
              fortfahren, akzeptieren Sie die Verwendung von Cookies. Weitere
              Informationen dazu finden Sie unter Datenschutz.
            </p>
            <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:justify-end">
              <Button variant="outline">Datenschutz</Button>
              <Button variant="secondary">Ok</Button>
            </div>
          </div>
        </div>

        <aside className="space-y-4 border border-border p-5">
          <h3 className="text-lg font-semibold text-black">Datenschutz FHNW</h3>
          <p className="text-sm leading-6 text-foreground/75">
            Der Banner bleibt bewusst knapp: Er erklärt die Cookie-Nutzung,
            verlinkt auf die Datenschutzseite und bietet eine eindeutige
            Bestätigung zum Schliessen des Hinweises.
          </p>
          <ul className="space-y-2 text-sm text-black">
            <li>Positionierung als auffälliges, aber kompaktes Banner</li>
            <li>Schwarzer Text auf sekundärem FHNW-Gelb</li>
            <li>CTA mit kurzer Beschriftung: “Ok”</li>
          </ul>
        </aside>
      </div>
    </section>
  )
}

export { CookieHinweis }
