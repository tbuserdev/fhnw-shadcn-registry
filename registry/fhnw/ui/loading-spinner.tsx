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
        "flex items-center justify-center p-7",
        variant === "white" && "bg-black bg-opacity-100",
        className,
      )}
      {...props}
    >
      <div
        className={cn(
          "inline-block h-8 w-8 animate-spin rounded-full border-4 border-gray-300 border-t-black",
          variant === "white" && "border-gray-700 border-t-white",
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
