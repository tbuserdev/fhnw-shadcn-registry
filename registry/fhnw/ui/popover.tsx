import * as React from "react";
import { createPortal } from "react-dom";

import { cn } from "@/lib/utils";
import "./fhnw-components.css";

type PopoverPlacement = "top" | "right" | "bottom" | "left";

interface PopoverContextValue {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  placement: PopoverPlacement;
  triggerRef: React.RefObject<HTMLButtonElement | null>;
}

const PopoverContext = React.createContext<PopoverContextValue | null>(null);

function getPopoverPosition(
  rect: DOMRect,
  placement: PopoverPlacement,
): React.CSSProperties {
  const gap = 12;

  switch (placement) {
    case "top":
      return {
        left: rect.left + rect.width / 2,
        top: rect.top - gap,
        transform: "translate(-50%, -100%)",
      };
    case "right":
      return {
        left: rect.right + gap,
        top: rect.top + rect.height / 2,
        transform: "translateY(-50%)",
      };
    case "left":
      return {
        left: rect.left - gap,
        top: rect.top + rect.height / 2,
        transform: "translate(-100%, -50%)",
      };
    default:
      return {
        left: rect.left + rect.width / 2,
        top: rect.bottom + gap,
        transform: "translateX(-50%)",
      };
  }
}

function Popover({
  open,
  defaultOpen = false,
  onOpenChange,
  placement = "bottom",
  children,
}: {
  open?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
  placement?: PopoverPlacement;
  children: React.ReactNode;
}) {
  const isControlled = open !== undefined;
  const [internalOpen, setInternalOpen] = React.useState(defaultOpen);
  const currentOpen = isControlled ? open : internalOpen;
  const triggerRef = React.useRef<HTMLButtonElement>(null);

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

  return (
    <PopoverContext.Provider
      value={{ open: currentOpen, setOpen, placement, triggerRef }}
    >
      {children}
    </PopoverContext.Provider>
  );
}

function PopoverTrigger({
  className,
  children,
  onClick,
  ...props
}: React.ComponentProps<"button">) {
  const popover = React.useContext(PopoverContext);

  if (!popover) {
    throw new Error("PopoverTrigger must be used within Popover");
  }

  const { open, setOpen, triggerRef } = popover;
  const setTriggerRef = React.useCallback(
    (node: HTMLButtonElement | null) => {
      triggerRef.current = node;
    },
    [triggerRef],
  );

  return (
    <button
      ref={setTriggerRef}
      type="button"
      className={cn(
        "inline-flex items-center justify-center gap-2 cursor-pointer font-medium transition-colors outline-none disabled:cursor-not-allowed disabled:opacity-50 bg-black text-white hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-400 px-5 py-2.5 text-sm",
        className,
      )}
      aria-expanded={open}
      onClick={(event) => {
        onClick?.(event);

        if (!event.defaultPrevented) {
          setOpen((value) => !value);
        }
      }}
      {...props}
    >
      {children}
    </button>
  );
}

function PopoverContent({
  className,
  children,
  ...props
}: React.ComponentProps<"div">) {
  const popover = React.useContext(PopoverContext);
  const [style, setStyle] = React.useState<React.CSSProperties>();
  const contentRef = React.useRef<HTMLDivElement>(null);

  if (!popover) {
    throw new Error("PopoverContent must be used within Popover");
  }

  React.useEffect(() => {
    if (!popover.open || !popover.triggerRef.current) {
      return;
    }

    const update = () => {
      const rect = popover.triggerRef.current?.getBoundingClientRect();

      if (rect) {
        setStyle({
          position: "fixed",
          ...getPopoverPosition(rect, popover.placement),
          zIndex: 1080,
        });
      }
    };

    update();
    window.addEventListener("resize", update);
    window.addEventListener("scroll", update, true);

    const handlePointerDown = (event: MouseEvent) => {
      if (
        !contentRef.current?.contains(event.target as Node) &&
        !popover.triggerRef.current?.contains(event.target as Node)
      ) {
        popover.setOpen(false);
      }
    };

    document.addEventListener("mousedown", handlePointerDown);

    return () => {
      window.removeEventListener("resize", update);
      window.removeEventListener("scroll", update, true);
      document.removeEventListener("mousedown", handlePointerDown);
    };
  }, [popover]);

  if (!popover.open || typeof document === "undefined") {
    return null;
  }

  return createPortal(
    <div
      ref={contentRef}
      className={cn(
        "rounded-lg bg-white shadow-lg border border-gray-300 p-4 max-w-sm",
        className,
      )}
      style={style}
      {...props}
    >
      <div className="fhnw-popover-arrow" />
      {children}
    </div>,
    document.body,
  );
}

function PopoverHeader({ className, ...props }: React.ComponentProps<"h3">) {
  return (
    <h3
      className={cn(
        "text-lg font-semibold text-black border-b border-gray-300 pb-3 mb-3",
        className,
      )}
      {...props}
    />
  );
}

function PopoverBody({ className, ...props }: React.ComponentProps<"div">) {
  return <div className={cn("text-sm text-gray-700", className)} {...props} />;
}

export { Popover, PopoverBody, PopoverContent, PopoverHeader, PopoverTrigger };
