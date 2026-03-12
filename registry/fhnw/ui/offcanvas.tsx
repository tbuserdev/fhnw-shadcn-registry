import * as React from "react";
import { createPortal } from "react-dom";

import { cn } from "@/lib/utils";
import "./fhnw-components.css";

interface OffcanvasContextValue {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const OffcanvasContext = React.createContext<OffcanvasContextValue | null>(
  null,
);

function Offcanvas({
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

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [currentOpen, setOpen]);

  return (
    <OffcanvasContext.Provider value={{ open: currentOpen, setOpen }}>
      {children}
    </OffcanvasContext.Provider>
  );
}

function OffcanvasTrigger({
  className,
  children,
  onClick,
  ...props
}: React.ComponentProps<"button">) {
  const context = React.useContext(OffcanvasContext);

  if (!context) {
    throw new Error("OffcanvasTrigger must be used within Offcanvas");
  }

  return (
    <button
      type="button"
      className={cn(
        "inline-flex items-center justify-center gap-2 cursor-pointer font-medium transition-colors outline-none focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 bg-black text-white hover:bg-[#1a1a1a] px-5 py-2.5 text-sm",
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

function OffcanvasContent({
  className,
  placement = "end",
  children,
  ...props
}: React.ComponentProps<"div"> & {
  placement?: "start" | "end" | "top" | "bottom";
}) {
  const context = React.useContext(OffcanvasContext);

  if (!context) {
    throw new Error("OffcanvasContent must be used within Offcanvas");
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
        className={cn(
          "fixed z-50 bg-white transition-transform duration-300 h-full w-64 overflow-y-auto",
          placement === "start" && "left-0 top-0 -translate-x-full",
          placement === "end" && "right-0 top-0 translate-x-full",
          placement === "top" && "top-0 left-0 -translate-y-full w-full h-auto",
          placement === "bottom" &&
            "bottom-0 left-0 translate-y-full w-full h-auto",
          context.open && "translate-x-0 translate-y-0",
          className,
        )}
        tabIndex={-1}
        {...props}
      >
        {children}
      </div>
    </>,
    document.body,
  );
}

function OffcanvasHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "flex items-center justify-between border-b border-[#deded9] px-4 py-4",
        className,
      )}
      {...props}
    />
  );
}

function OffcanvasBody({ className, ...props }: React.ComponentProps<"div">) {
  return <div className={cn("px-4 py-4", className)} {...props} />;
}

function OffcanvasTitle({ className, ...props }: React.ComponentProps<"h5">) {
  return (
    <h5
      className={cn("text-lg font-semibold text-black", className)}
      {...props}
    />
  );
}

function OffcanvasClose({
  className,
  onClick,
  ...props
}: React.ComponentProps<"button">) {
  const context = React.useContext(OffcanvasContext);

  if (!context) {
    throw new Error("OffcanvasClose must be used within Offcanvas");
  }

  return (
    <button
      type="button"
      className={cn(
        "inline-flex items-center justify-center hover:bg-[#f1f1ee] focus-visible:outline-none p-2",
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
  Offcanvas,
  OffcanvasBody,
  OffcanvasClose,
  OffcanvasContent,
  OffcanvasHeader,
  OffcanvasTitle,
  OffcanvasTrigger,
};
