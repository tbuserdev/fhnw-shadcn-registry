import { Link } from "@tanstack/react-router";
import { ArrowLeftIcon } from "@phosphor-icons/react";
import { BootstrapPreview } from "../components/BootstrapPreview";

import { SiteHeader } from "@/registry/fhnw/ui/site-header";

// Components
import { Button } from "@/registry/fhnw/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/registry/fhnw/ui/accordion";
import { Alert, AlertTitle, AlertDescription } from "@/registry/fhnw/ui/alert";
import { Badge } from "@/registry/fhnw/ui/badge";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/registry/fhnw/ui/card";
import { Input } from "@/registry/fhnw/ui/input";
import { Textarea } from "@/registry/fhnw/ui/textarea";
import { Checkbox } from "@/registry/fhnw/ui/checkbox";
import { Label } from "@/registry/fhnw/ui/label";
import { RadioGroup, RadioGroupItem } from "@/registry/fhnw/ui/radio-group";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/registry/fhnw/ui/select";
import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from "@/registry/fhnw/ui/tabs";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
} from "@/registry/fhnw/ui/breadcrumb";
import { BackToTop } from "@/registry/fhnw/ui/back-to-top";
import {
  Carousel,
  CarouselCaption,
  CarouselItem,
} from "@/registry/fhnw/ui/carousel";
import {
  Collapse,
  CollapseContent,
  CollapseTrigger,
} from "@/registry/fhnw/ui/collapse";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuDivider,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/registry/fhnw/ui/dropdown";
import { Icon, SocialIconLink, SocialIcons } from "@/registry/fhnw/ui/icons";
import {
  Figure,
  FigureCaption,
  FigureImage,
  Image,
} from "@/registry/fhnw/ui/images";
import { LoadingSpinner } from "@/registry/fhnw/ui/loading-spinner";
import {
  Modal,
  ModalBody,
  ModalClose,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalTitle,
  ModalTrigger,
} from "@/registry/fhnw/ui/modal";
import {
  Offcanvas,
  OffcanvasBody,
  OffcanvasClose,
  OffcanvasContent,
  OffcanvasHeader,
  OffcanvasTitle,
  OffcanvasTrigger,
} from "@/registry/fhnw/ui/offcanvas";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/registry/fhnw/ui/pagination";
import {
  Popover,
  PopoverBody,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
} from "@/registry/fhnw/ui/popover";
import { Progress, ProgressBar } from "@/registry/fhnw/ui/progressbar";
import { Table, TableResponsive } from "@/registry/fhnw/ui/tables";
import { Teaser } from "@/registry/fhnw/ui/teaser";
import { Testimonial } from "@/registry/fhnw/ui/testimonial";
import { Tooltip } from "@/registry/fhnw/ui/tooltip";
import { VideoEmbed } from "@/registry/fhnw/ui/videos";

export function Docs() {
  const baseUrl = import.meta.env.BASE_URL;

  const components = [
    {
      id: "breadcrumb",
      name: "Breadcrumbs",
      installCommand: "pnpm dlx shadcn@latest add @fhnw/breadcrumb",
      bootstrapHtml: `
<nav aria-label="breadcrumb">
  <ol class="breadcrumb">
    <li class="breadcrumb-item"><a href="#">Home</a></li>
    <li class="breadcrumb-item"><a href="#">Library</a></li>
    <li class="breadcrumb-item active" aria-current="page">Data</li>
  </ol>
</nav>
      `,
      reactComponent: (
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="#">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <BreadcrumbLink href="#">Library</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <BreadcrumbPage>Data</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      ),
    },
    {
      id: "accordion",
      name: "Accordion",
      installCommand: "pnpm dlx shadcn@latest add @fhnw/accordion",
      bootstrapHtml: `
<div class="accordion" id="accordionExample">
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingOne">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        Accordion Item #1
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <strong>This is the first item's accordion body.</strong>
      </div>
    </div>
  </div>
</div>
      `,
      reactComponent: (
        <Accordion className="w-full" defaultValue="item-1">
          <AccordionItem value="item-1">
            <AccordionTrigger>Accordion Item #1</AccordionTrigger>
            <AccordionContent>
              <strong>This is the first item's accordion body.</strong>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      ),
    },
    {
      id: "alert",
      name: "Alerts",
      installCommand: "pnpm dlx shadcn@latest add @fhnw/alert",
      bootstrapHtml: `
<div class="alert alert-primary" role="alert">A simple primary alert!</div>
<div class="alert alert-danger" role="alert">A simple danger alert!</div>
      `,
      reactComponent: (
        <div className="flex flex-col gap-4 w-full">
          <Alert variant="default">
            <AlertTitle>Hinweis</AlertTitle>
            <AlertDescription>
              Dies ist ein standard Alert (Primary).
            </AlertDescription>
          </Alert>
          <Alert variant="destructive">
            <AlertTitle>Fehler</AlertTitle>
            <AlertDescription>
              Dies ist ein Fehler-Alert (Danger).
            </AlertDescription>
          </Alert>
        </div>
      ),
    },
    {
      id: "badge",
      name: "Badges",
      installCommand: "pnpm dlx shadcn@latest add @fhnw/badge",
      bootstrapHtml: `
<span class="badge bg-primary">Primary</span>
<span class="badge bg-secondary">Secondary</span>
      `,
      reactComponent: (
        <div className="flex flex-wrap gap-2">
          <Badge variant="default">Primary</Badge>
          <Badge variant="secondary">Secondary</Badge>
          <Badge variant="outline">Outline</Badge>
        </div>
      ),
    },
    {
      id: "button",
      name: "Buttons",
      installCommand: "pnpm dlx shadcn@latest add @fhnw/button",
      bootstrapHtml: `
<button type="button" class="btn btn-primary">Primary</button>
<button type="button" class="btn btn-secondary">Secondary</button>
<button type="button" class="btn btn-outline-primary">Outline</button>
<button type="button" class="btn btn-link">Link</button>
      `,
      reactComponent: (
        <div className="flex flex-wrap gap-2">
          <Button variant="default">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="link">Link</Button>
        </div>
      ),
    },
    {
      id: "card",
      name: "Card",
      installCommand: "pnpm dlx shadcn@latest add @fhnw/card",
      bootstrapHtml: `
<div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>
      `,
      reactComponent: (
        <Card className="w-[18rem]">
          <CardHeader>
            <CardTitle>Card title</CardTitle>
            <CardDescription>Card subtitle</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </CardContent>
        </Card>
      ),
    },
    {
      id: "form-controls",
      name: "Form Controls",
      installCommand:
        "pnpm dlx shadcn@latest add @fhnw/input @fhnw/textarea @fhnw/checkbox @fhnw/radio-group @fhnw/select",
      bootstrapHtml: `
<form>
  <div class="mb-3">
    <label class="form-label">Email address</label>
    <input type="email" class="form-control" placeholder="name@example.com">
  </div>
  <div class="mb-3">
    <label class="form-label">Textarea</label>
    <textarea class="form-control" rows="3"></textarea>
  </div>
  <div class="mb-3 form-check">
    <input type="checkbox" class="form-check-input" id="check1">
    <label class="form-check-label" for="check1">Check me out</label>
  </div>
  <div class="mb-3">
    <div class="form-check">
      <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
      <label class="form-check-label" for="flexRadioDefault1">
        Default radio
      </label>
    </div>
  </div>
</form>
      `,
      reactComponent: (
        <div className="flex flex-col gap-6 w-full max-w-sm">
          <div className="space-y-2">
            <Label htmlFor="email">Email address</Label>
            <Input id="email" type="email" placeholder="name@example.com" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="message">Textarea</Label>
            <Textarea id="message" rows={3} />
          </div>
          <div className="space-y-2">
            <Label>Select</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Option wählen" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1">Option 1</SelectItem>
                <SelectItem value="2">Option 2</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="terms" />
            <Label htmlFor="terms">Check me out</Label>
          </div>
          <RadioGroup defaultValue="1">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="1" id="r1" />
              <Label htmlFor="r1">Default radio</Label>
            </div>
          </RadioGroup>
        </div>
      ),
    },
    {
      id: "tabs",
      name: "Nav-Tabs",
      installCommand: "pnpm dlx shadcn@latest add @fhnw/nav-tabs",
      bootstrapHtml: `
<ul class="nav nav-tabs">
  <li class="nav-item">
    <a class="nav-link active" aria-current="page" href="#">Active</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Link</a>
  </li>
</ul>
      `,
      reactComponent: (
        <Tabs defaultValue="account" className="w-[400px]">
          <TabsList>
            <TabsTrigger value="account">Account</TabsTrigger>
            <TabsTrigger value="password">Password</TabsTrigger>
          </TabsList>
          <TabsContent value="account">
            <div className="p-4 bg-white border border-border mt-2">
              Account Content
            </div>
          </TabsContent>
          <TabsContent value="password">
            <div className="p-4 bg-white border border-border mt-2">
              Password Content
            </div>
          </TabsContent>
        </Tabs>
      ),
    },
    {
      id: "back-to-top",
      name: "Back-To-Top",
      installCommand: "pnpm dlx shadcn@latest add @fhnw/back-to-top",
      bootstrapHtml: `
<div style="position:relative;height:160px;background:#f7f7f5;">
  <a href="#top" class="back-to-top" style="opacity:0.4;"></a>
</div>
      `,
      reactComponent: (
        <div className="relative h-40 w-full bg-[#f7f7f5]">
          <BackToTop threshold={-1} />
        </div>
      ),
    },
    {
      id: "carousel",
      name: "Carousel",
      installCommand: "pnpm dlx shadcn@latest add @fhnw/carousel",
      bootstrapHtml: `
<div class="carousel slide carousel-fade">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://dummyimage.com/1076x420/000/fff" class="d-block w-100" alt="..." />
      <div class="carousel-caption">
        <a href="#">
          <small>Second slide label</small>
          <h5>Some representative placeholder content for the second slide.</h5>
        </a>
      </div>
    </div>
  </div>
</div>
      `,
      reactComponent: (
        <div className="w-full max-w-3xl">
          <Carousel>
            <CarouselItem active>
              <img
                src="https://dummyimage.com/1076x420/000/fff"
                className="block w-full"
                alt="Campus"
              />
              <CarouselCaption>
                <a href="#">
                  <small>Second slide label</small>
                  <h5>
                    Some representative placeholder content for the second
                    slide.
                  </h5>
                </a>
              </CarouselCaption>
            </CarouselItem>
            <CarouselItem>
              <img
                src="https://dummyimage.com/1076x420/fde703/000"
                className="block w-full"
                alt="Campus"
              />
              <CarouselCaption>
                <a href="#">
                  <small>Third slide label</small>
                  <h5>Another slide to verify controls and indicators.</h5>
                </a>
              </CarouselCaption>
            </CarouselItem>
          </Carousel>
        </div>
      ),
    },
    {
      id: "collapse",
      name: "Collapse",
      installCommand: "pnpm dlx shadcn@latest add @fhnw/collapse",
      bootstrapHtml: `
<div class="collapse show">
  <div class="card card-body">
    Some placeholder content for the collapse component.
  </div>
</div>
      `,
      reactComponent: (
        <div className="w-full max-w-xl">
          <Collapse defaultOpen>
            <CollapseTrigger>Toggle collapse</CollapseTrigger>
            <CollapseContent>
              <div className="card card-body mt-3">
                Some placeholder content for the collapse component.
              </div>
            </CollapseContent>
          </Collapse>
        </div>
      ),
    },
    {
      id: "dropdown",
      name: "Dropdown",
      installCommand: "pnpm dlx shadcn@latest add @fhnw/dropdown",
      bootstrapHtml: `
<div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" aria-expanded="true">
    Large Dropdown
  </button>
  <ul class="dropdown-menu show">
    <li><a class="dropdown-item" href="#">Action</a></li>
    <li><a class="dropdown-item" href="#">Another action</a></li>
    <li><hr class="dropdown-divider" /></li>
    <li><a class="dropdown-item" href="#">Separated link</a></li>
  </ul>
</div>
      `,
      reactComponent: (
        <DropdownMenu defaultOpen>
          <DropdownMenuTrigger>Large Dropdown</DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>Action</DropdownMenuItem>
            <DropdownMenuItem>Another action</DropdownMenuItem>
            <DropdownMenuDivider />
            <DropdownMenuItem>Separated link</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      ),
    },
    {
      id: "icons",
      name: "Icons",
      installCommand: "pnpm dlx shadcn@latest add @fhnw/icons",
      bootstrapHtml: `
<div class="d-flex gap-3">
  <span class="icon__linkedin--md d-flex justify-content-center"></span>
  <span class="icon__instagram--md d-flex justify-content-center"></span>
  <span class="icon__youtube--md d-flex justify-content-center"></span>
</div>
      `,
      reactComponent: (
        <div className="flex flex-col gap-6">
          <div className="flex gap-3">
            <Icon
              name="linkedin"
              size="md"
              className="d-flex justify-content-center"
            />
            <Icon
              name="instagram"
              size="md"
              className="d-flex justify-content-center"
            />
            <Icon
              name="youtube"
              size="md"
              className="d-flex justify-content-center"
            />
          </div>
          <SocialIcons>
            <SocialIconLink href="#" name="instagram" title="Instagram" />
            <SocialIconLink href="#" name="facebook" title="Facebook" />
            <SocialIconLink href="#" name="linkedin" title="LinkedIn" />
          </SocialIcons>
        </div>
      ),
    },
    {
      id: "images",
      name: "Images",
      installCommand: "pnpm dlx shadcn@latest add @fhnw/images",
      bootstrapHtml: `
<figure class="figure">
  <img src="https://dummyimage.com/1076x400/000/fff" class="figure-img img-fluid" alt="" />
  <figcaption class="figure-caption">A caption example for the image.</figcaption>
</figure>
      `,
      reactComponent: (
        <div className="w-full max-w-3xl">
          <Figure>
            <FigureImage src="https://dummyimage.com/1076x400/000/fff" alt="" />
            <FigureCaption>A caption example for the image.</FigureCaption>
          </Figure>
          <div className="mt-6">
            <Image
              src="https://dummyimage.com/400x200/000/fff"
              alt="Dummy"
              className="float-end"
            />
          </div>
        </div>
      ),
    },
    {
      id: "loading-spinner",
      name: "Loading spinner",
      installCommand: "pnpm dlx shadcn@latest add @fhnw/loading-spinner",
      bootstrapHtml: `
<div class="d-flex justify-content-center align-content-center p-7">
  <div class="spinner-border" role="status">
    <span class="visually-hidden">Loading...</span>
  </div>
</div>
      `,
      reactComponent: <LoadingSpinner />,
    },
    {
      id: "modal",
      name: "Modal",
      installCommand: "pnpm dlx shadcn@latest add @fhnw/modal",
      bootstrapHtml: `
<button class="btn btn-primary" type="button">Launch demo modal</button>
      `,
      reactComponent: (
        <Modal>
          <ModalTrigger>Launch demo modal</ModalTrigger>
          <ModalContent centered>
            <ModalHeader>
              <ModalTitle>Modal title</ModalTitle>
              <ModalClose />
            </ModalHeader>
            <ModalBody>Modal content ...</ModalBody>
            <ModalFooter>
              <Button variant="secondary">Close</Button>
              <Button>Save changes</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      ),
    },
    {
      id: "offcanvas",
      name: "Offcanvas",
      installCommand: "pnpm dlx shadcn@latest add @fhnw/offcanvas",
      bootstrapHtml: `
<button class="btn btn-primary" type="button">Open offcanvas</button>
      `,
      reactComponent: (
        <Offcanvas>
          <OffcanvasTrigger>Open offcanvas</OffcanvasTrigger>
          <OffcanvasContent>
            <OffcanvasHeader>
              <OffcanvasTitle>Offcanvas</OffcanvasTitle>
              <OffcanvasClose />
            </OffcanvasHeader>
            <OffcanvasBody>
              Some text as placeholder. In real life you can have the elements
              you have chosen.
            </OffcanvasBody>
          </OffcanvasContent>
        </Offcanvas>
      ),
    },
    {
      id: "pagination",
      name: "Pagination",
      installCommand: "pnpm dlx shadcn@latest add @fhnw/pagination",
      bootstrapHtml: `
<nav aria-label="Page navigation example">
  <ul class="pagination">
    <li class="page-item"><a class="page-link" href="#">Previous</a></li>
    <li class="page-item"><a class="page-link" href="#">1</a></li>
    <li class="page-item active"><a class="page-link" href="#">2</a></li>
    <li class="page-item"><a class="page-link" href="#">3</a></li>
    <li class="page-item"><a class="page-link" href="#">Next</a></li>
  </ul>
</nav>
      `,
      reactComponent: (
        <Pagination aria-label="Page navigation example">
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious href="#" />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">1</PaginationLink>
            </PaginationItem>
            <PaginationItem className="active">
              <PaginationLink href="#" isActive>
                2
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">3</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationNext href="#" />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      ),
    },
    {
      id: "popover",
      name: "Popover",
      installCommand: "pnpm dlx shadcn@latest add @fhnw/popover",
      bootstrapHtml: `
<button type="button" class="btn btn-primary">Popover content ...</button>
      `,
      reactComponent: (
        <Popover defaultOpen placement="right">
          <PopoverTrigger>Popover content ...</PopoverTrigger>
          <PopoverContent>
            <PopoverHeader>Popover title</PopoverHeader>
            <PopoverBody>Content goes here ...</PopoverBody>
          </PopoverContent>
        </Popover>
      ),
    },
    {
      id: "progressbar",
      name: "Progressbar",
      installCommand: "pnpm dlx shadcn@latest add @fhnw/progressbar",
      bootstrapHtml: `
<div class="progress mb-5">
  <div class="progress-bar progress-bar-striped progress-bar-animated" style="width:10%">10%</div>
</div>
      `,
      reactComponent: (
        <div className="w-full max-w-xl">
          <Progress className="mb-3">
            <ProgressBar value={10} striped animated />
          </Progress>
          <Progress>
            <ProgressBar value={65} className="bg-success" />
          </Progress>
        </div>
      ),
    },
    {
      id: "tables",
      name: "Tables",
      installCommand: "pnpm dlx shadcn@latest add @fhnw/tables",
      bootstrapHtml: `
<table class="table table-striped table-hover">
  <thead>
    <tr><th>#</th><th>First</th><th>Last</th><th>Handle</th></tr>
  </thead>
  <tbody>
    <tr><th>1</th><td>Mark</td><td>Otto</td><td>@mdo</td></tr>
    <tr><th>2</th><td>Jacob</td><td>Thornton</td><td>@fat</td></tr>
  </tbody>
</table>
      `,
      reactComponent: (
        <TableResponsive className="w-full">
          <Table className="table-striped table-hover">
            <thead>
              <tr>
                <th>#</th>
                <th>First</th>
                <th>Last</th>
                <th>Handle</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
              </tr>
            </tbody>
          </Table>
        </TableResponsive>
      ),
    },
    {
      id: "teasers",
      name: "Teasers",
      installCommand: "pnpm dlx shadcn@latest add @fhnw/teaser",
      bootstrapHtml: `
<div class="teaser card mb-4 col-xs-12 col-sm-6 col-lg-4 p-0">
  <a href="#" title="">
    <div class="card-body">
      <div class="position-relative">
        <img src="https://dummyimage.com/600x360/000/fff" alt="" aria-hidden="true" class="img-fluid w-100" />
      </div>
      <small class="d-inline-block mb-2">Teaser subtitle</small>
      <h2 class="card-title no-line">Teaser title</h2>
      <p>Teaser content</p>
    </div>
  </a>
</div>
      `,
      reactComponent: (
        <div className="w-full max-w-sm">
          <Teaser
            title="Teaser title"
            subtitle="Teaser subtitle"
            description="Teaser content"
            imageSrc="https://dummyimage.com/600x360/000/fff"
            columns={3}
          />
        </div>
      ),
    },
    {
      id: "testimonial",
      name: "Testimonial",
      installCommand: "pnpm dlx shadcn@latest add @fhnw/testimonial",
      bootstrapHtml: `
<div class="blockquote row mt-5">
  <div class="col-6 col-md-4 mb-4 mb-md-0">
    <img src="https://dummyimage.com/480x480/000/fff" class="img-fluid float-start w-100" alt="" />
  </div>
  <div class="col-12 col-md-8">
    <p class="quote">«Das ist ein Testimonial – ein hervorgehobenes Zitat zur Bewerbung eines Angebots.»</p>
    <p class="author">Barbara Muster</p>
  </div>
</div>
      `,
      reactComponent: (
        <Testimonial
          imageSrc="https://dummyimage.com/480x480/000/fff"
          quote="«Das ist ein Testimonial – ein hervorgehobenes Zitat zur Bewerbung eines Angebots.»"
          author="Barbara Muster"
        />
      ),
    },
    {
      id: "tooltip",
      name: "Tooltip",
      installCommand: "pnpm dlx shadcn@latest add @fhnw/tooltip",
      bootstrapHtml: `
<button type="button" class="btn btn-secondary">Tooltip on top</button>
      `,
      reactComponent: (
        <Tooltip content="Tooltip on top">
          <Button variant="secondary">Tooltip on top</Button>
        </Tooltip>
      ),
    },
    {
      id: "videos",
      name: "Videos",
      installCommand: "pnpm dlx shadcn@latest add @fhnw/videos",
      bootstrapHtml: `
<div class="ratio ratio-16x9">
  <iframe src="https://www.youtube.com/embed/HVpIwFu6lIc?si=fjSFfn8pQE_T8s38" title="YouTube video" allowfullscreen></iframe>
</div>
      `,
      reactComponent: (
        <div className="w-full max-w-3xl">
          <VideoEmbed
            src="https://www.youtube.com/embed/HVpIwFu6lIc?si=fjSFfn8pQE_T8s38"
            title="YouTube video"
            allowFullScreen
          />
        </div>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-foreground font-sans">
      <SiteHeader registryBasePath={baseUrl} />

      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-sm font-semibold text-slate-500 transition hover:text-slate-900 mb-4"
            >
              <ArrowLeftIcon className="size-4" /> Zurück zur Übersicht
            </Link>
            <h1 className="text-4xl font-extrabold tracking-tight text-slate-900">
              Komponenten
            </h1>
            <p className="mt-2 text-lg text-slate-600">
              Vergleich zwischen dem originalen Bootstrap 5 Design und den neuen
              React shadcn Komponenten.
            </p>
          </div>
        </div>

        <div className="space-y-16">
          {components.map((comp) => (
            <section key={comp.id} id={comp.id} className="scroll-mt-24">
              <div className="mb-4 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
                <h2 className="text-2xl font-bold text-slate-900">
                  {comp.name}
                </h2>
                <div className="flex items-center gap-2 rounded-md bg-slate-900 px-3 py-1.5 text-sm text-slate-50 shadow-sm">
                  <code className="font-mono text-xs">
                    {comp.installCommand}
                  </code>
                </div>
              </div>

              <div className="grid gap-6 lg:grid-cols-2">
                <div className="flex flex-col rounded-xl border border-slate-200 bg-white shadow-sm overflow-hidden">
                  <div className="border-b border-slate-100 bg-slate-50/80 px-4 py-3">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                      Original (Bootstrap v5)
                    </span>
                  </div>
                  <div className="p-0 flex-1">
                    <BootstrapPreview html={comp.bootstrapHtml} />
                  </div>
                </div>

                <div className="flex flex-col rounded-xl border border-slate-200 bg-white shadow-sm overflow-hidden">
                  <div className="border-b border-slate-100 bg-slate-50/80 px-4 py-3">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                      Neu (React + FHNW CSS)
                    </span>
                  </div>
                  <div className="p-6 flex-1 flex items-start">
                    {comp.reactComponent}
                  </div>
                </div>
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}
