import { Button } from "@/registry/fhnw/ui/button"
import { Checkbox } from "@/registry/fhnw/ui/checkbox"
import { Input } from "@/registry/fhnw/ui/input"
import { RadioGroup, RadioGroupItem } from "@/registry/fhnw/ui/radio-group"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/registry/fhnw/ui/select"
import { Textarea } from "@/registry/fhnw/ui/textarea"

function Formulare() {
  return (
    <section className="border border-border bg-white">
      <div className="border-b border-border p-6">
        <h2 className="text-3xl font-semibold text-black">Formulare</h2>
        <p className="mt-3 max-w-3xl text-sm leading-7 text-foreground/75">
          Standardformular mit Eingabefeldern, Hilfetexten, Checkboxen,
          Auswahlfeldern und einer klaren Abschlussaktion.
        </p>
      </div>

      <div className="grid gap-6 p-6 lg:grid-cols-[1.1fr_0.9fr]">
        <form className="space-y-5 border border-border p-5">
          <div className="space-y-2">
            <label className="text-sm font-medium text-black" htmlFor="forms-email">
              Email address
            </label>
            <Input id="forms-email" type="email" placeholder="E-Mail" />
            <p className="text-sm text-foreground/65">
              We&apos;ll never share your email with anyone else.
            </p>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-black" htmlFor="forms-text">
              Text
            </label>
            <Input id="forms-text" type="text" autoComplete="on" />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-black" htmlFor="forms-password">
              Password
            </label>
            <Input id="forms-password" type="password" autoComplete="on" />
            <p className="text-sm text-foreground/65">
              Your password must be 8-20 characters long, contain letters and
              numbers, and must not contain spaces.
            </p>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-black" htmlFor="forms-select">
              Select
            </label>
            <Select defaultValue="option-a">
              <SelectTrigger id="forms-select">
                <SelectValue placeholder="Choose an option" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="option-a">Option A</SelectItem>
                <SelectItem value="option-b">Option B</SelectItem>
                <SelectItem value="option-c">Option C</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-black" htmlFor="forms-message">
              Message
            </label>
            <Textarea
              id="forms-message"
              placeholder="Tell us what this request is about."
            />
          </div>

          <div className="space-y-3">
            <p className="text-sm font-medium text-black">Checkboxes and radios</p>
            <label className="flex items-start gap-3 text-sm text-black">
              <Checkbox defaultChecked />
              <span>Accept terms &amp; conditions</span>
            </label>
            <RadioGroup defaultValue="standard">
              <label className="flex items-center gap-3 text-sm text-black">
                <RadioGroupItem id="forms-standard" value="standard" />
                <span>Standard form</span>
              </label>
              <label className="flex items-center gap-3 text-sm text-black">
                <RadioGroupItem id="forms-floating" value="floating" />
                <span>Floating form</span>
              </label>
            </RadioGroup>
          </div>

          <div className="flex flex-col gap-3 pt-2 sm:flex-row">
            <Button variant="secondary">Submit</Button>
            <Button variant="outline">Reset form</Button>
          </div>
        </form>

        <aside className="space-y-4 border border-border bg-[#f7f7f5] p-5">
          <h3 className="text-xl font-semibold text-black">Styleguide Fokus</h3>
          <ul className="space-y-3 text-sm leading-6 text-foreground/75">
            <li>Standard Form mit Label, Input und Hilfetext</li>
            <li>Checkboxes und Radios für einfache Entscheidungen</li>
            <li>Select-Komponente mit FHNW-stylter Trigger-Fläche</li>
            <li>Klare Primär- und Sekundäraktionen am Formularende</li>
          </ul>
        </aside>
      </div>
    </section>
  )
}

export { Formulare }
