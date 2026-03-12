import * as React from "react";

import { cn } from "@/lib/utils";
import "./fhnw-components.css";

function LoadingSpinner({
  className,
  variant = "default",
  ...props
}: React.ComponentProps<"div"> & {
  variant?: "default" | "white";
}) {
  return (
    <div
      className={cn(
        "inline-flex items-center justify-center",
        variant === "white" && "bg-black p-8",
        className,
      )}
      {...props}
    >
      <div
        className={cn(
          "inline-block size-8 rounded-full border-[0.25em] border-current border-r-transparent animate-spin align-[-0.125em]",
          variant === "white" && "text-white",
          variant === "default" && "text-foreground",
        )}
        role="status"
      >
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
}

const Spinner = LoadingSpinner;

export { LoadingSpinner, Spinner };
