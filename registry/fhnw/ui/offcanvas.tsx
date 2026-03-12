import * as React from "react"
import { createPortal } from "react-dom"

import { cn } from "@/lib/utils"
import "./fhnw-bootstrap.css"

interface OffcanvasContextValue {
  open: boolean
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const OffcanvasContext =
  React.createContext<OffcanvasContextValue | null>(null)

function Offcanvas({
  open,
  defaultOpen = false,
  onOpenChange,
  children,
}: {
  open?: boolean
  defaultOpen?: boolean
  onOpenChange?: (open: boolean) => void
  children: React.ReactNode
}) {
  const isControlled = open !== undefined
  const [internalOpen, setInternalOpen] = React.useState(defaultOpen)
  const currentOpen = isControlled ? open : internalOpen

  const setOpen = React.useCallback<React.Dispatch<React.SetStateAction<boolean>>>(
    (value) => {
      const next = typeof value === "function" ? value(currentOpen) : value

      if (!isControlled) {
        setInternalOpen(next)
      }

      onOpenChange?.(next)
    },
    [currentOpen, isControlled, onOpenChange]
  )

  React.useEffect(() => {
    if (!currentOpen) {
      return
    }

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false)
      }
    }

    document.addEventListener("keydown", handleEscape)
    return () => document.removeEventListener("keydown", handleEscape)
  }, [currentOpen, setOpen])

  return (
    <OffcanvasContext.Provider value={{ open: currentOpen, setOpen }}>
      {children}
    </OffcanvasContext.Provider>
  )
}

function OffcanvasTrigger({
  className,
  children,
  onClick,
  ...props
}: React.ComponentProps<"button">) {
  const context = React.useContext(OffcanvasContext)

  if (!context) {
    throw new Error("OffcanvasTrigger must be used within Offcanvas")
  }

  return (
    <button
      type="button"
      className={cn("btn btn-primary", className)}
      onClick={(event) => {
        onClick?.(event)

        if (!event.defaultPrevented) {
          context.setOpen(true)
        }
      }}
      {...props}
    >
      {children}
    </button>
  )
}

function OffcanvasContent({
  className,
  placement = "end",
  children,
  ...props
}: React.ComponentProps<"div"> & {
  placement?: "start" | "end" | "top" | "bottom"
}) {
  const context = React.useContext(OffcanvasContext)

  if (!context) {
    throw new Error("OffcanvasContent must be used within Offcanvas")
  }

  if (!context.open || typeof document === "undefined") {
    return null
  }

  return createPortal(
    <>
      <div
        className="offcanvas-backdrop fade show"
        onClick={() => context.setOpen(false)}
      />
      <div
        className={cn(
          "offcanvas show",
          `offcanvas-${placement}`,
          className
        )}
        tabIndex={-1}
        style={{ visibility: "visible" }}
        {...props}
      >
        {children}
      </div>
    </>,
    document.body
  )
}

function OffcanvasHeader({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return <div className={cn("offcanvas-header", className)} {...props} />
}

function OffcanvasBody({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return <div className={cn("offcanvas-body", className)} {...props} />
}

function OffcanvasTitle({
  className,
  ...props
}: React.ComponentProps<"h5">) {
  return <h5 className={cn("offcanvas-title", className)} {...props} />
}

function OffcanvasClose({
  className,
  onClick,
  ...props
}: React.ComponentProps<"button">) {
  const context = React.useContext(OffcanvasContext)

  if (!context) {
    throw new Error("OffcanvasClose must be used within Offcanvas")
  }

  return (
    <button
      type="button"
      className={cn("btn-close", className)}
      aria-label="Close"
      onClick={(event) => {
        onClick?.(event)

        if (!event.defaultPrevented) {
          context.setOpen(false)
        }
      }}
      {...props}
    />
  )
}

export {
  Offcanvas,
  OffcanvasBody,
  OffcanvasClose,
  OffcanvasContent,
  OffcanvasHeader,
  OffcanvasTitle,
  OffcanvasTrigger,
}
