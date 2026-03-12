import * as React from "react";

import { cn } from "@/lib/utils";
import "./fhnw-components.css";

function Teaser({
  className,
  title,
  subtitle,
  description,
  href = "#",
  imageSrc,
  imageAlt = "",
  columns = 3,
  ...props
}: Omit<React.ComponentProps<"a">, "title"> & {
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  description?: React.ReactNode;
  imageSrc?: string;
  imageAlt?: string;
  columns?: 3 | 4;
}) {
  return (
    <div
      className={cn(
        "w-full border border-gray-300 rounded-lg overflow-hidden hover:shadow-lg transition-shadow",
        columns === 3 ? "lg:w-1/3" : "lg:w-1/4",
        "sm:w-1/2",
        "mb-4",
        className,
      )}
    >
      <a href={href} className="block h-full" title="" {...props}>
        <div className="p-0 h-full flex flex-col">
          {imageSrc ? (
            <div className="relative overflow-hidden bg-gray-100 flex-shrink-0">
              <img
                src={imageSrc}
                alt={imageAlt}
                aria-hidden="true"
                className="max-w-full h-auto w-full hover:scale-105 transition-transform duration-300"
              />
            </div>
          ) : null}
          <div className="p-4 flex-grow flex flex-col">
            {subtitle ? (
              <small className="inline-block mb-2 text-gray-600 text-xs">
                {subtitle}
              </small>
            ) : null}
            <h2 className="text-lg font-bold mb-2 text-black flex-grow">
              {title}
            </h2>
            {description ? (
              <p className="text-gray-700 text-sm">{description}</p>
            ) : null}
          </div>
        </div>
      </a>
    </div>
  );
}

export { Teaser };
