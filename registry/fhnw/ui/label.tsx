import * as React from "react"

import { cn } from "@/lib/utils"

function Label({ className, ...props }: React.ComponentProps<"label">) {
  return (
    <label
      data-slot="label"
      className={cn(
        "text-sm font-semibold tracking-[0.01em] text-black",
        className
      )}
      {...props}
    />
  )
}

export { Label }
