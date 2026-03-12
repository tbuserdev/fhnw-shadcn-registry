import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"
import "./fhnw-bootstrap.css"

const alertVariants = cva("alert", {
  variants: {
    variant: {
      default: "alert-primary",
      primary: "alert-primary",
      secondary: "alert-secondary",
      success: "alert-success",
      destructive: "alert-danger",
      danger: "alert-danger",
      warning: "alert-warning",
      info: "alert-info",
      light: "alert-light",
      dark: "alert-dark",
    },
  },
  defaultVariants: {
    variant: "default",
  },
})

function Alert({
  className,
  variant,
  ...props
}: React.ComponentProps<"div"> & VariantProps<typeof alertVariants>) {
  return (
    <div
      data-slot="alert"
      role="alert"
      className={cn(alertVariants({ variant }), className)}
      {...props}
    />
  )
}

function AlertTitle({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="alert-title"
      className={cn("alert-heading", className)}
      {...props}
    />
  )
}

function AlertDescription({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="alert-description"
      className={cn(className)}
      {...props}
    />
  )
}

export { Alert, AlertDescription, AlertTitle }
