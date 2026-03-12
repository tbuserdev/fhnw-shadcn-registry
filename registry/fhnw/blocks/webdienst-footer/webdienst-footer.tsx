import { SocialIconLink, SocialIcons } from "@/registry/fhnw/ui/icons"

function WebdienstFooter() {
  return (
    <footer className="border border-border bg-white">
      <div className="grid gap-6 p-6 lg:grid-cols-3">
        <div>
          <h3 className="text-lg font-semibold text-black">Kontakt</h3>
          <p className="mt-3 text-sm leading-6 text-foreground/75">
            Fachhochschule Nordwestschweiz FHNW
            <br />
            Institute
            <br />
            Division
            <br />
            Street
            <br />
            Zip Location
          </p>
          <p className="mt-3 text-sm">
            E-Mail: <a className="underline" href="mailto:webmaster@fhnw.ch">webmaster@fhnw.ch</a>
          </p>
          <SocialIcons className="mt-4">
            <SocialIconLink href="#" name="linkedin" size="sm" aria-label="LinkedIn" />
            <SocialIconLink href="#" name="instagram" size="sm" aria-label="Instagram" />
            <SocialIconLink href="#" name="youtube" size="sm" aria-label="YouTube" />
          </SocialIcons>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-black">Über diese Website</h3>
          <p className="mt-3 text-sm leading-6 text-foreground/75">
            Der Web-Styleguide der FHNW bildet das verbindliche Standard-Design
            der FHNW-Webdienste ab und erlaubt, dieses in Eigenentwicklungen auf
            Basis eines konsistenten Frameworks zu nutzen.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-black">Quicklinks</h3>
          <div className="mt-3 flex flex-col gap-2 text-sm">
            <a className="underline" href="#">Webdienste</a>
            <a className="underline" href="#">Tools und Services</a>
            <a className="underline" href="#">Quicklinks</a>
          </div>
        </div>
      </div>

      <div className="border-t border-border px-6 py-4">
        <div className="flex flex-col items-center justify-center gap-2 text-sm text-black sm:flex-row">
          <a className="underline" href="https://www.fhnw.ch" target="_blank" rel="noreferrer">
            www.fhnw.ch
          </a>
          <span className="hidden sm:inline">|</span>
          <a className="underline" href="#">Impressum</a>
          <span className="hidden sm:inline">|</span>
          <a className="underline" href="#">Datenschutz</a>
        </div>
      </div>
    </footer>
  )
}

export { WebdienstFooter }
