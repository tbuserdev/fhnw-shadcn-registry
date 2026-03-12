import * as React from "react";

import { cn } from "@/lib/utils";
import "./fhnw-components.css";

interface CollapseContextValue {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  contentId: string;
}

const CollapseContext = React.createContext<CollapseContextValue | null>(null);

function Collapse({
  children,
  open,
  defaultOpen = false,
  onOpenChange,
  ...props
}: React.ComponentProps<"div"> & {
  open?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
}) {
  const contentId = React.useId();
  const isControlled = open !== undefined;
  const [internalOpen, setInternalOpen] = React.useState(defaultOpen);
  const currentOpen = isControlled ? open : internalOpen;

  const setOpen: React.Dispatch<React.SetStateAction<boolean>> = (value) => {
    const next = typeof value === "function" ? value(currentOpen) : value;

    if (!isControlled) {
      setInternalOpen(next);
    }

    onOpenChange?.(next);
  };

  return (
    <CollapseContext.Provider value={{ open: currentOpen, setOpen, contentId }}>
      <div {...props}>{children}</div>
    </CollapseContext.Provider>
  );
}

function CollapseTrigger({
  className,
  onClick,
  children,
  ...props
}: React.ComponentProps<"button">) {
  const context = React.useContext(CollapseContext);

  if (!context) {
    throw new Error("CollapseTrigger must be used within Collapse");
  }

  return (
    <button
      type="button"
      className={cn(
        "inline-flex items-center justify-center gap-2 cursor-pointer font-medium transition-colors outline-none focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 bg-black text-white hover:bg-[#1a1a1a] px-5 py-2.5 text-sm",
        className,
      )}
      aria-expanded={context.open}
      aria-controls={context.contentId}
      onClick={(event) => {
        onClick?.(event);

        if (!event.defaultPrevented) {
          context.setOpen((value) => !value);
        }
      }}
      {...props}
    >
      {children}
    </button>
  );
}

function CollapseContent({ className, ...props }: React.ComponentProps<"div">) {
  const context = React.useContext(CollapseContext);

  if (!context) {
    throw new Error("CollapseContent must be used within Collapse");
  }

  return (
    <div
      id={context.contentId}
      className={cn(
        "max-h-0 overflow-hidden transition-all duration-300",
        context.open && "max-h-96",
        className,
      )}
      {...props}
    />
  );
}

export { Collapse, CollapseContent, CollapseTrigger };
