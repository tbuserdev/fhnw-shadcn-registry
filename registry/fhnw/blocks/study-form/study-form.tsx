import { Button } from "@/registry/fhnw/ui/button"
import { Badge } from "@/registry/fhnw/ui/badge"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/registry/fhnw/ui/card"
import { Checkbox } from "@/registry/fhnw/ui/checkbox"
import { Input } from "@/registry/fhnw/ui/input"
import { Label } from "@/registry/fhnw/ui/label"
import {
  RadioGroup,
  RadioGroupItem,
} from "@/registry/fhnw/ui/radio-group"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/registry/fhnw/ui/select"
import { Textarea } from "@/registry/fhnw/ui/textarea"

function StudyForm() {
  return (
    <Card className="overflow-hidden">
      <CardHeader className="bg-muted">
        <Badge variant="secondary">Apply</Badge>
        <CardTitle>Master Design application</CardTitle>
        <CardDescription>
          Capture the essential admission details with FHNW form controls and
          Base UI wrappers.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid gap-4 md:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="name">Full name</Label>
            <Input id="name" placeholder="Maya Rosen" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="mail">Email</Label>
            <Input id="mail" placeholder="maya.rosen@example.ch" type="email" />
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <div className="space-y-2">
            <Label>Programme</Label>
            <Select defaultValue="master-design">
              <SelectTrigger>
                <SelectValue placeholder="Choose a programme" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="master-design">Master Design</SelectItem>
                <SelectItem value="master-digital">
                  Master Digital Communication Environments
                </SelectItem>
                <SelectItem value="master-visual">
                  Master Visual Communication and Iconic Research
                </SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-3">
            <Label>Study model</Label>
            <RadioGroup defaultValue="full-time">
              <label className="flex items-center gap-3 text-sm text-black">
                <RadioGroupItem value="full-time" />
                Full-time
              </label>
              <label className="flex items-center gap-3 text-sm text-black">
                <RadioGroupItem value="part-time" />
                Part-time
              </label>
            </RadioGroup>
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="motivation">Motivation</Label>
          <Textarea
            id="motivation"
            placeholder="Tell us about your focus, portfolio and preferred campus."
          />
        </div>

        <label className="flex items-start gap-3 text-sm text-foreground">
          <Checkbox defaultChecked />
          <span>
            I confirm that my portfolio and transcripts are ready for review.
          </span>
        </label>
      </CardContent>
      <CardFooter className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-foreground/70">
          Deadline: 30 April, 18:00 CET
        </p>
        <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
          <Button variant="outline">Save draft</Button>
          <Button variant="secondary">Submit application</Button>
        </div>
      </CardFooter>
    </Card>
  )
}

export { StudyForm }
