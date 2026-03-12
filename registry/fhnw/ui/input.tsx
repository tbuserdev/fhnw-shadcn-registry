import * as React from "react"
import { Input as InputPrimitive } from "@base-ui/react/input"

import { cn } from "@/lib/utils"

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <InputPrimitive
      data-slot="input"
      type={type}
      className={cn(
        "min-h-12 w-full border-2 border-input bg-muted px-4 py-3 text-[0.95rem] text-black transition-colors outline-none placeholder:text-muted-foreground focus-visible:border-black focus-visible:bg-background focus-visible:ring-4 focus-visible:ring-ring/25 disabled:cursor-not-allowed disabled:bg-accent",
        className
      )}
      {...props}
    />
  )
}

export { Input }
