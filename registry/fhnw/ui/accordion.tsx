import * as React from "react";

import { cn } from "@/lib/utils";
import "./fhnw-components.css";

type AccordionValue = string | string[];

interface AccordionContextValue {
  type: "single" | "multiple";
  collapsible: boolean;
  value: string[];
  setValue: (next: string[]) => void;
}

interface AccordionItemContextValue {
  isOpen: boolean;
  toggle: () => void;
  headingId: string;
  panelId: string;
}

const AccordionContext = React.createContext<AccordionContextValue | null>(
  null,
);
const AccordionItemContext =
  React.createContext<AccordionItemContextValue | null>(null);

function toArray(value?: AccordionValue) {
  if (!value) {
    return [];
  }

  return Array.isArray(value) ? value : [value];
}

function Accordion({
  className,
  type = "single",
  collapsible = true,
  value,
  defaultValue,
  onValueChange,
  ...props
}: React.ComponentProps<"div"> & {
  type?: "single" | "multiple";
  collapsible?: boolean;
  value?: AccordionValue;
  defaultValue?: AccordionValue;
  onValueChange?: (value: AccordionValue) => void;
}) {
  const isControlled = value !== undefined;
  const [internalValue, setInternalValue] = React.useState<string[]>(
    toArray(defaultValue),
  );
  const currentValue = isControlled ? toArray(value) : internalValue;

  const setValue = React.useCallback(
    (next: string[]) => {
      if (!isControlled) {
        setInternalValue(next);
      }

      onValueChange?.(type === "multiple" ? next : (next[0] ?? ""));
    },
    [isControlled, onValueChange, type],
  );

  return (
    <AccordionContext.Provider
      value={{ type, collapsible, value: currentValue, setValue }}
    >
      <div
        data-slot="accordion"
        className={cn("space-y-2", className)}
        {...props}
      />
    </AccordionContext.Provider>
  );
}

function AccordionItem({
  className,
  value,
  ...props
}: React.ComponentProps<"div"> & {
  value: string;
}) {
  const context = React.useContext(AccordionContext);
  const headingId = React.useId();
  const panelId = React.useId();

  if (!context) {
    throw new Error("AccordionItem must be used within Accordion");
  }

  const isOpen = context.value.includes(value);

  const toggle = () => {
    if (context.type === "multiple") {
      const next = isOpen
        ? context.value.filter((itemValue) => itemValue !== value)
        : [...context.value, value];

      context.setValue(next);
      return;
    }

    if (isOpen) {
      context.setValue(context.collapsible ? [] : [value]);
      return;
    }

    context.setValue([value]);
  };

  return (
    <AccordionItemContext.Provider
      value={{ isOpen, toggle, headingId, panelId }}
    >
      <div
        data-slot="accordion-item"
        className={cn("border border-border", className)}
        {...props}
      />
    </AccordionItemContext.Provider>
  );
}

function AccordionTrigger({
  className,
  children,
  ...props
}: React.ComponentProps<"button">) {
  const context = React.useContext(AccordionItemContext);

  if (!context) {
    throw new Error("AccordionTrigger must be used within AccordionItem");
  }

  return (
    <h2 className="flex" id={context.headingId}>
      <button
        data-slot="accordion-trigger"
        type="button"
        className={cn(
          "flex w-full items-center justify-between bg-gray-100 px-4 py-3 font-semibold text-black transition-colors hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400",
          className,
        )}
        aria-expanded={context.isOpen}
        aria-controls={context.panelId}
        onClick={context.toggle}
        {...props}
      >
        {children}
      </button>
    </h2>
  );
}

function AccordionContent({
  className,
  children,
  ...props
}: React.ComponentProps<"div">) {
  const context = React.useContext(AccordionItemContext);

  if (!context) {
    throw new Error("AccordionContent must be used within AccordionItem");
  }

  return (
    <div
      data-slot="accordion-content"
      id={context.panelId}
      className={cn(
        "max-h-0 overflow-hidden transition-all duration-300",
        context.isOpen && "max-h-96",
        className,
      )}
      aria-labelledby={context.headingId}
      {...props}
    >
      <div className="border-t border-border px-4 py-3">{children}</div>
    </div>
  );
}

export { Accordion, AccordionContent, AccordionItem, AccordionTrigger };
