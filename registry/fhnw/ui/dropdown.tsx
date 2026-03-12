import * as React from "react";

import { cn } from "@/lib/utils";
import "./fhnw-components.css";

interface DropdownMenuContextValue {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  align: "start" | "end";
}

const DropdownMenuContext =
  React.createContext<DropdownMenuContextValue | null>(null);

function DropdownMenu({
  className,
  open,
  defaultOpen = false,
  onOpenChange,
  align = "start",
  ...props
}: React.ComponentProps<"div"> & {
  open?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
  align?: "start" | "end";
}) {
  const isControlled = open !== undefined;
  const [internalOpen, setInternalOpen] = React.useState(defaultOpen);
  const currentOpen = isControlled ? open : internalOpen;
  const ref = React.useRef<HTMLDivElement>(null);

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

    const handlePointerDown = (event: MouseEvent) => {
      if (!ref.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handlePointerDown);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [currentOpen, setOpen]);

  return (
    <DropdownMenuContext.Provider value={{ open: currentOpen, setOpen, align }}>
      <div
        ref={ref}
        className={cn("relative inline-block", className)}
        {...props}
      />
    </DropdownMenuContext.Provider>
  );
}

function DropdownMenuTrigger({
  className,
  children,
  onClick,
  ...props
}: React.ComponentProps<"button">) {
  const context = React.useContext(DropdownMenuContext);

  if (!context) {
    throw new Error("DropdownMenuTrigger must be used within DropdownMenu");
  }

  return (
    <button
      type="button"
      className={cn(
        "inline-flex items-center justify-center gap-2 cursor-pointer font-medium transition-colors outline-none bg-[#fde703] text-black hover:bg-[#fcdd00] focus:outline-none focus:ring-2 focus:ring-blue-400 px-5 py-2.5 text-sm",
        className,
      )}
      aria-expanded={context.open}
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

function DropdownMenuContent({
  className,
  ...props
}: React.ComponentProps<"ul">) {
  const context = React.useContext(DropdownMenuContext);

  if (!context) {
    throw new Error("DropdownMenuContent must be used within DropdownMenu");
  }

  return (
    <ul
      className={cn(
        "absolute mt-2 min-w-48 rounded border border-gray-300 bg-white shadow-lg",
        context.align === "end" ? "right-0" : "left-0",
        !context.open && "hidden",
        className,
      )}
      {...props}
    />
  );
}

function DropdownMenuItem({
  className,
  children,
  ...props
}: React.ComponentProps<"button">) {
  return (
    <li>
      <button
        type="button"
        className={cn(
          "w-full px-4 py-2 text-left hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400 text-black",
          className,
        )}
        {...props}
      >
        {children}
      </button>
    </li>
  );
}

function DropdownMenuLink({
  className,
  children,
  ...props
}: React.ComponentProps<"a">) {
  return (
    <li>
      <a
        className={cn(
          "block w-full px-4 py-2 text-left hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400 text-black",
          className,
        )}
        {...props}
      >
        {children}
      </a>
    </li>
  );
}

function DropdownMenuDivider(props: React.ComponentProps<"hr">) {
  return (
    <li>
      <hr className="border-t border-gray-300" {...props} />
    </li>
  );
}

function DropdownMenuHeader({
  className,
  ...props
}: React.ComponentProps<"h6">) {
  return (
    <h6
      className={cn("px-4 py-2 text-sm font-semibold text-black", className)}
      {...props}
    />
  );
}

export {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuDivider,
  DropdownMenuHeader,
  DropdownMenuItem,
  DropdownMenuLink,
  DropdownMenuTrigger,
};
