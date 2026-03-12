import * as React from "react"
import { createPortal } from "react-dom"

import { cn } from "@/lib/utils"
import "./fhnw-bootstrap.css"

interface ModalContextValue {
  open: boolean
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const ModalContext = React.createContext<ModalContextValue | null>(null)

function Modal({
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

    const originalOverflow = document.body.style.overflow
    document.body.style.overflow = "hidden"
    document.body.classList.add("modal-open")

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false)
      }
    }

    document.addEventListener("keydown", handleEscape)

    return () => {
      document.body.style.overflow = originalOverflow
      document.body.classList.remove("modal-open")
      document.removeEventListener("keydown", handleEscape)
    }
  }, [currentOpen, setOpen])

  return (
    <ModalContext.Provider value={{ open: currentOpen, setOpen }}>
      {children}
    </ModalContext.Provider>
  )
}

function ModalTrigger({
  className,
  children,
  onClick,
  ...props
}: React.ComponentProps<"button">) {
  const context = React.useContext(ModalContext)

  if (!context) {
    throw new Error("ModalTrigger must be used within Modal")
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

function ModalContent({
  className,
  dialogClassName,
  children,
  centered,
  onClick,
  ...props
}: React.ComponentProps<"div"> & {
  dialogClassName?: string
  centered?: boolean
}) {
  const context = React.useContext(ModalContext)

  if (!context) {
    throw new Error("ModalContent must be used within Modal")
  }

  if (!context.open || typeof document === "undefined") {
    return null
  }

  return createPortal(
    <>
      <div
        className="modal-backdrop fade show"
        onClick={() => context.setOpen(false)}
      />
      <div
        className={cn("modal fade show", className)}
        style={{ display: "block" }}
        role="dialog"
        aria-modal="true"
        onClick={(event) => {
          onClick?.(event)

          if (event.target === event.currentTarget) {
            context.setOpen(false)
          }
        }}
        {...props}
      >
        <div
          className={cn(
            "modal-dialog",
            centered && "modal-dialog-centered",
            dialogClassName
          )}
        >
          <div className="modal-content">{children}</div>
        </div>
      </div>
    </>,
    document.body
  )
}

function ModalHeader({ className, ...props }: React.ComponentProps<"div">) {
  return <div className={cn("modal-header", className)} {...props} />
}

function ModalBody({ className, ...props }: React.ComponentProps<"div">) {
  return <div className={cn("modal-body", className)} {...props} />
}

function ModalFooter({ className, ...props }: React.ComponentProps<"div">) {
  return <div className={cn("modal-footer", className)} {...props} />
}

function ModalTitle({ className, ...props }: React.ComponentProps<"h4">) {
  return <h4 className={cn("modal-title fs-5", className)} {...props} />
}

function ModalClose({
  className,
  onClick,
  ...props
}: React.ComponentProps<"button">) {
  const context = React.useContext(ModalContext)

  if (!context) {
    throw new Error("ModalClose must be used within Modal")
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
  Modal,
  ModalBody,
  ModalClose,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalTitle,
  ModalTrigger,
}
