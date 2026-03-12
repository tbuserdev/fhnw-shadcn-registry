import * as React from "react";

import { cn } from "@/lib/utils";
import "./fhnw-components.css";

function VideoEmbed({
  className,
  ratio = "16x9",
  ...props
}: React.ComponentProps<"iframe"> & {
  ratio?: "16x9" | "4x3" | "1x1" | "21x9";
}) {
  const ratioMap: Record<string, string> = {
    "16x9": "aspect-video",
    "4x3": "aspect-[4/3]",
    "1x1": "aspect-square",
    "21x9": "aspect-[7/3]",
  };
  return (
    <div className={cn("relative w-full bg-black", ratioMap[ratio], className)}>
      <iframe className="absolute inset-0 w-full h-full" {...props} />
    </div>
  );
}

export { VideoEmbed };
