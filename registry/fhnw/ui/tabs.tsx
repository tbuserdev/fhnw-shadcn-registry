import * as React from "react"

import { cn } from "@/lib/utils"
import "./fhnw-bootstrap.css"

function Tabs({
  className,
  value,
  defaultValue,
  onValueChange,
  ...props
}: React.ComponentProps<"div"> & {
  value?: string
  defaultValue?: string
  onValueChange?: (value: string) => void
}) {
  const isControlled = value !== undefined
  const [internalValue, setInternalValue] = React.useState(defaultValue ?? "")
  const currentValue = isControlled ? value ?? "" : internalValue

  const setValue = React.useCallback(
    (next: string) => {
      if (!isControlled) {
        setInternalValue(next)
      }

      onValueChange?.(next)
    },
    [isControlled, onValueChange]
  )

  return (
    <TabsContext.Provider value={{ value: currentValue, setValue }}>
      <div data-slot="tabs" className={cn(className)} {...props} />
    </TabsContext.Provider>
  )
}

interface TabsContextValue {
  value: string
  setValue: (value: string) => void
}

const TabsContext = React.createContext<TabsContextValue | null>(null)

function TabsList({ className, ...props }: React.ComponentProps<"ul">) {
  return (
    <ul
      data-slot="tabs-list"
      className={cn("nav nav-tabs", className)}
      role="tablist"
      {...props}
    />
  )
}

function TabsTrigger({
  className,
  value,
  children,
  ...props
}: React.ComponentProps<"button"> & {
  value: string
}) {
  const context = React.useContext(TabsContext)

  if (!context) {
    throw new Error("TabsTrigger must be used within Tabs")
  }

  const isActive = context.value === value

  return (
    <li className="nav-item" role="presentation">
      <button
        data-slot="tabs-trigger"
        className={cn("nav-link", isActive && "active", className)}
        type="button"
        role="tab"
        aria-selected={isActive}
        onClick={() => context.setValue(value)}
        {...props}
      >
        {children}
      </button>
    </li>
  )
}

function TabsContent({
  className,
  value,
  ...props
}: React.ComponentProps<"div"> & {
  value: string
}) {
  const context = React.useContext(TabsContext)

  if (!context) {
    throw new Error("TabsContent must be used within Tabs")
  }

  return (
    <div
      data-slot="tabs-content"
      className={cn(
        "tab-pane fade",
        context.value === value && "show active",
        className
      )}
      role="tabpanel"
      {...props}
    />
  )
}

export { Tabs, TabsContent, TabsList, TabsTrigger }
