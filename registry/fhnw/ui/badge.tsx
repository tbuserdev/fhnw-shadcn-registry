import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"
import "./fhnw-bootstrap.css"

const badgeVariants = cva("badge", {
  variants: {
    variant: {
      default: "bg-primary",
      secondary: "bg-secondary text-black",
      success: "bg-success",
      danger: "bg-danger",
      warning: "bg-warning text-black",
      info: "bg-info text-black",
      light: "bg-light text-black",
      dark: "bg-dark text-black",
      outline: "bg-light text-black border border-black",
    },
  },
  defaultVariants: {
    variant: "default",
  },
})

function Badge({
  className,
  variant,
  ...props
}: React.ComponentProps<"span"> & VariantProps<typeof badgeVariants>) {
  return (
    <span
      data-slot="badge"
      className={cn(badgeVariants({ variant }), className)}
      {...props}
    />
  )
}

export { Badge, badgeVariants }
