import * as React from "react"

import { cn } from "@/lib/utils"
import "./fhnw-bootstrap.css"

const Progress = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<"div">
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("progress", className)} {...props} />
))

Progress.displayName = "Progress"

const ProgressBar = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<"div"> & {
    value: number
    striped?: boolean
    animated?: boolean
  }
>(({ className, value, striped, animated, children, style, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "progress-bar",
      striped && "progress-bar-striped",
      animated && "progress-bar-animated",
      className
    )}
    role="progressbar"
    aria-valuenow={value}
    aria-valuemin={0}
    aria-valuemax={100}
    style={{ width: `${value}%`, ...style }}
    {...props}
  >
    {children ?? `${value}%`}
  </div>
))

ProgressBar.displayName = "ProgressBar"

export { Progress, ProgressBar }
