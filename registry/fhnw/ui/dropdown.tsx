import * as React from "react"

import { cn } from "@/lib/utils"
import "./fhnw-bootstrap.css"

interface DropdownMenuContextValue {
  open: boolean
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
  align: "start" | "end"
}

const DropdownMenuContext =
  React.createContext<DropdownMenuContextValue | null>(null)

function DropdownMenu({
  className,
  open,
  defaultOpen = false,
  onOpenChange,
  align = "start",
  ...props
}: React.ComponentProps<"div"> & {
  open?: boolean
  defaultOpen?: boolean
  onOpenChange?: (open: boolean) => void
  align?: "start" | "end"
}) {
  const isControlled = open !== undefined
  const [internalOpen, setInternalOpen] = React.useState(defaultOpen)
  const currentOpen = isControlled ? open : internalOpen
  const ref = React.useRef<HTMLDivElement>(null)

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

    const handlePointerDown = (event: MouseEvent) => {
      if (!ref.current?.contains(event.target as Node)) {
        setOpen(false)
      }
    }

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false)
      }
    }

    document.addEventListener("mousedown", handlePointerDown)
    document.addEventListener("keydown", handleEscape)

    return () => {
      document.removeEventListener("mousedown", handlePointerDown)
      document.removeEventListener("keydown", handleEscape)
    }
  }, [currentOpen, setOpen])

  return (
    <DropdownMenuContext.Provider value={{ open: currentOpen, setOpen, align }}>
      <div ref={ref} className={cn("dropdown", className)} {...props} />
    </DropdownMenuContext.Provider>
  )
}

function DropdownMenuTrigger({
  className,
  children,
  onClick,
  ...props
}: React.ComponentProps<"button">) {
  const context = React.useContext(DropdownMenuContext)

  if (!context) {
    throw new Error("DropdownMenuTrigger must be used within DropdownMenu")
  }

  return (
    <button
      type="button"
      className={cn("btn btn-secondary dropdown-toggle", className)}
      aria-expanded={context.open}
      onClick={(event) => {
        onClick?.(event)

        if (!event.defaultPrevented) {
          context.setOpen((value) => !value)
        }
      }}
      {...props}
    >
      {children}
    </button>
  )
}

function DropdownMenuContent({
  className,
  ...props
}: React.ComponentProps<"ul">) {
  const context = React.useContext(DropdownMenuContext)

  if (!context) {
    throw new Error("DropdownMenuContent must be used within DropdownMenu")
  }

  return (
    <ul
      className={cn(
        "dropdown-menu",
        context.align === "end" && "dropdown-menu-end",
        context.open && "show",
        className
      )}
      {...props}
    />
  )
}

function DropdownMenuItem({
  className,
  children,
  ...props
}: React.ComponentProps<"button">) {
  return (
    <li>
      <button type="button" className={cn("dropdown-item", className)} {...props}>
        {children}
      </button>
    </li>
  )
}

function DropdownMenuLink({
  className,
  children,
  ...props
}: React.ComponentProps<"a">) {
  return (
    <li>
      <a className={cn("dropdown-item", className)} {...props}>
        {children}
      </a>
    </li>
  )
}

function DropdownMenuDivider(props: React.ComponentProps<"hr">) {
  return (
    <li>
      <hr className="dropdown-divider" {...props} />
    </li>
  )
}

function DropdownMenuHeader({
  className,
  ...props
}: React.ComponentProps<"h6">) {
  return <h6 className={cn("dropdown-header", className)} {...props} />
}

export {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuDivider,
  DropdownMenuHeader,
  DropdownMenuItem,
  DropdownMenuLink,
  DropdownMenuTrigger,
}
