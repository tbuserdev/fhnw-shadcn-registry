import { Button } from "@/registry/fhnw/ui/button"
import { Checkbox } from "@/registry/fhnw/ui/checkbox"
import { Input } from "@/registry/fhnw/ui/input"

function FormularValidierung() {
  return (
    <section className="border border-border bg-white">
      <div className="border-b border-border p-6">
        <h2 className="text-3xl font-semibold text-black">Formular-Validierung</h2>
        <p className="mt-3 max-w-3xl text-sm leading-7 text-foreground/75">
          Validierungszustände mit Pflichtfeldern, Erfolgsmeldungen und klaren
          Fehlerhinweisen für unvollständige Eingaben.
        </p>
      </div>

      <form className="grid gap-4 p-6 md:grid-cols-2 xl:grid-cols-12">
        <div className="space-y-2 xl:col-span-4">
          <label className="text-sm font-medium text-black" htmlFor="validation-first-name">
            First name
          </label>
          <Input
            id="validation-first-name"
            required
            defaultValue="Mia"
            className="border-[#198754] bg-white"
          />
          <p className="text-sm text-[#198754]">Looks good!</p>
        </div>

        <div className="space-y-2 xl:col-span-4">
          <label className="text-sm font-medium text-black" htmlFor="validation-last-name">
            Last name
          </label>
          <Input id="validation-last-name" required className="border-[#df305b] bg-white" />
          <p className="text-sm text-[#df305b]">Please add your last name.</p>
        </div>

        <div className="space-y-2 xl:col-span-4">
          <label className="text-sm font-medium text-black" htmlFor="validation-username">
            Username
          </label>
          <div className="flex items-stretch border-2 border-[#df305b] bg-white">
            <span className="flex items-center border-r border-border px-4 text-sm text-black">@</span>
            <input
              id="validation-username"
              className="min-h-[56px] flex-1 bg-transparent px-4 text-sm text-black outline-none"
              required
            />
          </div>
          <p className="text-sm text-[#df305b]">Please choose a username.</p>
        </div>

        <div className="space-y-2 xl:col-span-6">
          <label className="text-sm font-medium text-black" htmlFor="validation-city">
            City
          </label>
          <Input id="validation-city" required className="border-[#df305b] bg-white" />
          <p className="text-sm text-[#df305b]">Please provide a valid city.</p>
        </div>

        <div className="space-y-2 xl:col-span-3">
          <label className="text-sm font-medium text-black" htmlFor="validation-state">
            State
          </label>
          <Input id="validation-state" required defaultValue="A" className="border-[#198754] bg-white" />
          <p className="text-sm text-[#198754]">Looks good!</p>
        </div>

        <div className="space-y-2 xl:col-span-3">
          <label className="text-sm font-medium text-black" htmlFor="validation-zip">
            Zip
          </label>
          <Input id="validation-zip" required className="border-[#df305b] bg-white" />
          <p className="text-sm text-[#df305b]">Please provide a valid zip.</p>
        </div>

        <label className="flex items-start gap-3 xl:col-span-12">
          <Checkbox />
          <span className="text-sm text-black">Agree to terms and conditions</span>
        </label>

        <div className="xl:col-span-12">
          <Button variant="secondary">Submit form</Button>
        </div>
      </form>
    </section>
  )
}

export { FormularValidierung }
