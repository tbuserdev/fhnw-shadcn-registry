import { Button, buttonVariants } from "@/registry/fhnw/ui/button"
import { Alert, AlertDescription, AlertTitle } from "@/registry/fhnw/ui/alert"
import { Badge } from "@/registry/fhnw/ui/badge"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/registry/fhnw/ui/card"
import { cn } from "@/lib/utils"

function ProgrammeShowcase() {
  return (
    <Card className="flex h-full flex-col bg-[linear-gradient(180deg,#ffffff_0%,#f7f7f5_100%)]">
      <CardHeader>
        <Badge>Featured programme</Badge>
        <CardTitle>Digital Communication Environments</CardTitle>
        <CardDescription>
          A compact teaser that combines FHNW cards, alerts, badges and button
          variants without relying on Bootstrap markup.
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-1 flex-col gap-5">
        <Alert>
          <AlertTitle>Autumn intake open</AlertTitle>
          <AlertDescription>
            Portfolio review slots are released every Thursday and stay visible
            until they are booked.
          </AlertDescription>
        </Alert>

        <div className="grid gap-3 text-sm">
          <div className="flex items-center justify-between border-b border-border pb-3">
            <span>Location</span>
            <span className="font-semibold text-black">Basel</span>
          </div>
          <div className="flex items-center justify-between border-b border-border pb-3">
            <span>Language</span>
            <span className="font-semibold text-black">English / German</span>
          </div>
          <div className="flex items-center justify-between border-b border-border pb-3">
            <span>Duration</span>
            <span className="font-semibold text-black">4 semesters</span>
          </div>
          <div className="flex items-center justify-between">
            <span>Credits</span>
            <span className="font-semibold text-black">120 ECTS</span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex flex-wrap gap-3">
        <Button variant="secondary">Request brochure</Button>
        <a
          href="#"
          className={cn(buttonVariants({ variant: "outline" }), "no-underline")}
        >
          Open programme page
        </a>
      </CardFooter>
    </Card>
  )
}

export { ProgrammeShowcase }
