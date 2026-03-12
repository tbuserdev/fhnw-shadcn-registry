import * as React from "react";
import { createPortal } from "react-dom";

import { cn } from "@/lib/utils";
import "./fhnw-components.css";

interface ModalContextValue {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const ModalContext = React.createContext<ModalContextValue | null>(null);

function Modal({
  open,
  defaultOpen = false,
  onOpenChange,
  children,
}: {
  open?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
  children: React.ReactNode;
}) {
  const isControlled = open !== undefined;
  const [internalOpen, setInternalOpen] = React.useState(defaultOpen);
  const currentOpen = isControlled ? open : internalOpen;

  const setOpen = React.useCallback<
    React.Dispatch<React.SetStateAction<boolean>>
  >(
    (value) => {
      const next = typeof value === "function" ? value(currentOpen) : value;

      if (!isControlled) {
        setInternalOpen(next);
      }

      onOpenChange?.(next);
    },
    [currentOpen, isControlled, onOpenChange],
  );

  React.useEffect(() => {
    if (!currentOpen) {
      return;
    }

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.body.classList.add("modal-open");

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    document.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = originalOverflow;
      document.body.classList.remove("modal-open");
      document.removeEventListener("keydown", handleEscape);
    };
  }, [currentOpen, setOpen]);

  return (
    <ModalContext.Provider value={{ open: currentOpen, setOpen }}>
      {children}
    </ModalContext.Provider>
  );
}

function ModalTrigger({
  className,
  children,
  onClick,
  ...props
}: React.ComponentProps<"button">) {
  const context = React.useContext(ModalContext);

  if (!context) {
    throw new Error("ModalTrigger must be used within Modal");
  }

  return (
    <button
      type="button"
      className={cn(
        "inline-flex items-center justify-center gap-2 cursor-pointer font-medium transition-colors outline-none disabled:cursor-not-allowed disabled:opacity-50 bg-black text-white hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-400 px-5 py-2.5 text-sm",
        className,
      )}
      onClick={(event) => {
        onClick?.(event);

        if (!event.defaultPrevented) {
          context.setOpen(true);
        }
      }}
      {...props}
    >
      {children}
    </button>
  );
}

function ModalContent({
  className,
  dialogClassName,
  children,
  centered,
  onClick,
  ...props
}: React.ComponentProps<"div"> & {
  dialogClassName?: string;
  centered?: boolean;
}) {
  const context = React.useContext(ModalContext);

  if (!context) {
    throw new Error("ModalContent must be used within Modal");
  }

  if (!context.open || typeof document === "undefined") {
    return null;
  }

  return createPortal(
    <>
      <div
        className="fixed inset-0 z-40 bg-black bg-opacity-50 transition-opacity"
        onClick={() => context.setOpen(false)}
      />
      <div
        className={cn("fixed inset-0 z-50 flex overflow-y-auto", className)}
        role="dialog"
        aria-modal="true"
        onClick={(event) => {
          onClick?.(event);

          if (event.target === event.currentTarget) {
            context.setOpen(false);
          }
        }}
        {...props}
      >
        <div
          className={cn(
            "relative m-auto w-full max-w-lg rounded-lg bg-white p-0 shadow-xl",
            centered && "flex items-center justify-center",
            dialogClassName,
          )}
        >
          {children}
        </div>
      </div>
    </>,
    document.body,
  );
}

function ModalHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "flex items-center justify-between border-b border-border px-6 py-4",
        className,
      )}
      {...props}
    />
  );
}

function ModalBody({ className, ...props }: React.ComponentProps<"div">) {
  return <div className={cn("px-6 py-4", className)} {...props} />;
}

function ModalFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      className={cn("flex gap-3 border-t border-border px-6 py-4", className)}
      {...props}
    />
  );
}

function ModalTitle({ className, ...props }: React.ComponentProps<"h4">) {
  return (
    <h4
      className={cn("text-lg font-semibold text-black", className)}
      {...props}
    />
  );
}

function ModalClose({
  className,
  onClick,
  ...props
}: React.ComponentProps<"button">) {
  const context = React.useContext(ModalContext);

  if (!context) {
    throw new Error("ModalClose must be used within Modal");
  }

  return (
    <button
      type="button"
      className={cn(
        "inline-flex items-center justify-center rounded hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400 p-2",
        className,
      )}
      aria-label="Close"
      onClick={(event) => {
        onClick?.(event);

        if (!event.defaultPrevented) {
          context.setOpen(false);
        }
      }}
      {...props}
    />
  );
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
};
