import * as React from "react"

import { cn } from "@/lib/utils"
import "./fhnw-bootstrap.css"

function Testimonial({
  className,
  quote,
  author,
  imageSrc,
  imageAlt = "",
  ...props
}: React.ComponentProps<"div"> & {
  quote: React.ReactNode
  author: React.ReactNode
  imageSrc?: string
  imageAlt?: string
}) {
  return (
    <div className={cn("blockquote row mt-5", className)} {...props}>
      {imageSrc ? (
        <div className="col-6 col-md-4 mb-4 mb-md-0">
          <img src={imageSrc} className="img-fluid float-start w-100" alt={imageAlt} />
        </div>
      ) : null}
      <div className={cn(imageSrc ? "col-12 col-md-8" : "col-12")}>
        <p className="quote">{quote}</p>
        <p className="author">{author}</p>
      </div>
    </div>
  )
}

export { Testimonial }
