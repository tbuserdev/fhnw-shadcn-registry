import * as React from "react"

import { cn } from "@/lib/utils"
import "./fhnw-bootstrap.css"

function LoadingSpinner({
  className,
  variant = "default",
  ...props
}: React.ComponentProps<"div"> & {
  variant?: "default" | "white"
}) {
  return (
    <div
      className={cn(
        "d-flex justify-content-center align-content-center p-7",
        variant === "white" && "bg-black bg-opacity-100",
        className
      )}
      {...props}
    >
      <div
        className={cn("spinner-border", variant === "white" && "text-white")}
        role="status"
      >
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  )
}

const Spinner = LoadingSpinner

export { LoadingSpinner, Spinner }
