import * as React from "react"

import { cn } from "@/lib/utils"
import "./fhnw-bootstrap.css"

function Teaser({
  className,
  title,
  subtitle,
  description,
  href = "#",
  imageSrc,
  imageAlt = "",
  columns = 3,
  ...props
}: Omit<React.ComponentProps<"a">, "title"> & {
  title: React.ReactNode
  subtitle?: React.ReactNode
  description?: React.ReactNode
  imageSrc?: string
  imageAlt?: string
  columns?: 3 | 4
}) {
  return (
    <div
      className={cn(
        "teaser card mb-4 col-xs-12 col-sm-6 p-0",
        columns === 3 ? "col-lg-4" : "col-lg-3",
        className
      )}
    >
      <a href={href} title="" {...props}>
        <div className="card-body">
          {imageSrc ? (
            <div className="position-relative">
              <img
                src={imageSrc}
                alt={imageAlt}
                aria-hidden="true"
                className="img-fluid w-100"
              />
            </div>
          ) : null}
          {subtitle ? <small className="d-inline-block mb-2">{subtitle}</small> : null}
          <h2 className="card-title no-line">{title}</h2>
          {description ? <p>{description}</p> : null}
        </div>
      </a>
    </div>
  )
}

export { Teaser }
