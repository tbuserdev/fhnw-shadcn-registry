import * as React from "react";

import { cn } from "@/lib/utils";
import "./fhnw-components.css";

function Testimonial({
  className,
  quote,
  author,
  imageSrc,
  imageAlt = "",
  ...props
}: React.ComponentProps<"div"> & {
  quote: React.ReactNode;
  author: React.ReactNode;
  imageSrc?: string;
  imageAlt?: string;
}) {
  return (
    <div
      className={cn("flex flex-col lg:flex-row gap-6 lg:gap-8 mt-5", className)}
      {...props}
    >
      {imageSrc ? (
        <div className="flex-shrink-0 lg:w-1/4">
          <img
            src={imageSrc}
            className="max-w-full h-auto w-full rounded-lg"
            alt={imageAlt}
          />
        </div>
      ) : null}
      <div className={cn(imageSrc ? "lg:w-3/4" : "w-full")}>
        <p className="text-lg italic text-gray-700 mb-4 border-l-4 border-black pl-4">
          "{quote}"
        </p>
        <p className="font-semibold text-black">{author}</p>
      </div>
    </div>
  );
}

export { Testimonial };
