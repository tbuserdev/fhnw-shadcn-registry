import { Button } from "@/registry/fhnw/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/registry/fhnw/ui/accordion"
import { Alert, AlertDescription, AlertTitle } from "@/registry/fhnw/ui/alert"
import { Badge } from "@/registry/fhnw/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/registry/fhnw/ui/tabs"

function CampusFaq() {
  return (
    <div className="grid gap-5">
      <Alert>
        <AlertTitle>Visit the campus</AlertTitle>
        <AlertDescription>
          Open studio evenings happen twice per month and use the same FHNW
          theme tokens as the rest of the registry.
        </AlertDescription>
      </Alert>

      <Tabs defaultValue="faq">
        <TabsList>
          <TabsTrigger value="faq">FAQ</TabsTrigger>
          <TabsTrigger value="visit">Visit</TabsTrigger>
          <TabsTrigger value="timeline">Timeline</TabsTrigger>
        </TabsList>

        <TabsContent value="faq" className="grid gap-4">
          <Accordion defaultValue={["portfolio"]}>
            <AccordionItem value="portfolio">
              <AccordionTrigger>What should a portfolio include?</AccordionTrigger>
              <AccordionContent>
                Include 8-12 selected projects, a short rationale for each one,
                and enough process material to show how you work.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="language">
              <AccordionTrigger>Is German mandatory?</AccordionTrigger>
              <AccordionContent>
                Not for every programme. Several master courses accept
                applications in English, but campus life often benefits from
                basic German skills.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="funding">
              <AccordionTrigger>Are scholarships available?</AccordionTrigger>
              <AccordionContent>
                FHNW publishes funding options during each intake. Contact the
                admissions office early if you need supporting documents.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </TabsContent>

        <TabsContent value="visit" className="grid gap-4 text-sm/7">
          <Badge variant="secondary">Basel Dreispitz</Badge>
          <p>
            Guided visits combine workshops, studio walkthroughs and portfolio
            feedback. Sessions are intentionally small, so registration closes
            quickly once a slot is full.
          </p>
          <div className="flex flex-wrap gap-3">
            <Button variant="secondary">Reserve a visit</Button>
            <Button variant="outline">Download directions</Button>
          </div>
        </TabsContent>

        <TabsContent value="timeline" className="grid gap-3 text-sm">
          <div className="grid gap-3 border-l-[6px] border-secondary bg-muted px-5 py-4">
            <div className="flex items-center justify-between gap-3 border-b border-border pb-3">
              <span className="font-semibold text-black">Portfolio deadline</span>
              <span>30 April</span>
            </div>
            <div className="flex items-center justify-between gap-3 border-b border-border pb-3">
              <span className="font-semibold text-black">Interview window</span>
              <span>May</span>
            </div>
            <div className="flex items-center justify-between gap-3">
              <span className="font-semibold text-black">Semester start</span>
              <span>September</span>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

export { CampusFaq }
