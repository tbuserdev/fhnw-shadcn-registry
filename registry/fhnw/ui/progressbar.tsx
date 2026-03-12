import * as React from "react";

import { cn } from "@/lib/utils";
import "./fhnw-components.css";

const Progress = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<"div">
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("w-full overflow-hidden bg-[#e9ecef] h-6", className)}
    {...props}
  />
));

Progress.displayName = "Progress";

const ProgressBar = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<"div"> & {
    value: number;
    striped?: boolean;
    animated?: boolean;
  }
>(({ className, value, striped, animated, children, style, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "h-full flex items-center justify-center text-white text-xs font-medium bg-[#767573] transition-[width] duration-300",
      striped && "fhnw-progress-striped",
      animated && "fhnw-progress-animated",
      className,
    )}
    role="progressbar"
    aria-valuenow={value}
    aria-valuemin={0}
    aria-valuemax={100}
    style={{ width: `${value}%`, ...style }}
    {...props}
  >
    {children ?? `${value}%`}
  </div>
));

ProgressBar.displayName = "ProgressBar";

export { Progress, ProgressBar };
