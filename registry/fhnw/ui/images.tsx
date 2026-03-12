import * as React from "react";

import { cn } from "@/lib/utils";
import "./fhnw-components.css";

function Image({
  className,
  responsive = true,
  ...props
}: React.ComponentProps<"img"> & {
  responsive?: boolean;
}) {
  return (
    <img
      className={cn(responsive && "max-w-full h-auto", className)}
      {...props}
    />
  );
}

const Figure = React.forwardRef<
  HTMLElement,
  React.ComponentPropsWithoutRef<"figure">
>(({ className, ...props }, ref) => (
  <figure ref={ref} className={cn("flex flex-col", className)} {...props} />
));

Figure.displayName = "Figure";

const FigureImage = React.forwardRef<
  HTMLImageElement,
  React.ComponentPropsWithoutRef<"img">
>(({ className, ...props }, ref) => (
  <img
    ref={ref}
    className={cn("max-w-full h-auto mb-3", className)}
    {...props}
  />
));

FigureImage.displayName = "FigureImage";

const FigureCaption = React.forwardRef<
  HTMLElement,
  React.ComponentPropsWithoutRef<"figcaption">
>(({ className, ...props }, ref) => (
  <figcaption
    ref={ref}
    className={cn("text-sm text-[#767573]", className)}
    {...props}
  />
));

FigureCaption.displayName = "FigureCaption";

export { Figure, FigureCaption, FigureImage, Image };
