import * as React from "react"

import { cn } from "@/lib/utils"

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "min-h-32 w-full border-2 border-input bg-muted px-4 py-3 text-[0.95rem] text-black transition-colors outline-none placeholder:text-muted-foreground focus-visible:border-black focus-visible:bg-background focus-visible:ring-4 focus-visible:ring-ring/25 disabled:cursor-not-allowed disabled:bg-accent",
        className
      )}
      {...props}
    />
  )
}

export { Textarea }
