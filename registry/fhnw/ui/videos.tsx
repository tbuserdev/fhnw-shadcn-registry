import * as React from "react"

import { cn } from "@/lib/utils"
import "./fhnw-bootstrap.css"

function VideoEmbed({
  className,
  ratio = "16x9",
  ...props
}: React.ComponentProps<"iframe"> & {
  ratio?: "16x9" | "4x3" | "1x1" | "21x9"
}) {
  return (
    <div className={cn(`ratio ratio-${ratio}`, className)}>
      <iframe {...props} />
    </div>
  )
}

export { VideoEmbed }
