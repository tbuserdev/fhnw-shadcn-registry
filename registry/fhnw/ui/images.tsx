import * as React from "react"

import { cn } from "@/lib/utils"
import "./fhnw-bootstrap.css"

function Image({
  className,
  responsive = true,
  ...props
}: React.ComponentProps<"img"> & {
  responsive?: boolean
}) {
  return (
    <img
      className={cn(responsive && "img-fluid", className)}
      {...props}
    />
  )
}

const Figure = React.forwardRef<
  HTMLElement,
  React.ComponentPropsWithoutRef<"figure">
>(({ className, ...props }, ref) => (
  <figure ref={ref} className={cn("figure", className)} {...props} />
))

Figure.displayName = "Figure"

const FigureImage = React.forwardRef<
  HTMLImageElement,
  React.ComponentPropsWithoutRef<"img">
>(({ className, ...props }, ref) => (
  <img ref={ref} className={cn("figure-img img-fluid", className)} {...props} />
))

FigureImage.displayName = "FigureImage"

const FigureCaption = React.forwardRef<
  HTMLElement,
  React.ComponentPropsWithoutRef<"figcaption">
>(({ className, ...props }, ref) => (
  <figcaption ref={ref} className={cn("figure-caption", className)} {...props} />
))

FigureCaption.displayName = "FigureCaption"

export { Figure, FigureCaption, FigureImage, Image }
