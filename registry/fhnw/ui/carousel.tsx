import * as React from "react";

import { cn } from "@/lib/utils";
import "./fhnw-components.css";

function Carousel({
  className,
  children,
  autoPlay = false,
  interval = 10000,
  fade = true,
  showIndicators = true,
  showControls = true,
  ...props
}: React.ComponentProps<"div"> & {
  autoPlay?: boolean;
  interval?: number;
  fade?: boolean;
  showIndicators?: boolean;
  showControls?: boolean;
}) {
  const items = React.Children.toArray(children);
  const [activeIndex, setActiveIndex] = React.useState(0);

  React.useEffect(() => {
    if (!autoPlay || items.length <= 1) {
      return;
    }

    const id = window.setInterval(() => {
      setActiveIndex((index) => (index + 1) % items.length);
    }, interval);

    return () => window.clearInterval(id);
  }, [autoPlay, interval, items.length]);

  return (
    <div
      className={cn("relative w-full overflow-hidden rounded", className)}
      {...props}
    >
      {showIndicators && items.length > 1 ? (
        <div className="absolute bottom-5 left-0 right-0 z-20 flex justify-center gap-2 px-4">
          {items.map((_, index) => (
            <button
              key={index}
              type="button"
              className={cn(
                "h-3 w-3 rounded-full transition-all duration-300",
                index === activeIndex ? "bg-black" : "bg-gray-400",
              )}
              aria-current={index === activeIndex}
              aria-label={`Slide ${index + 1}`}
              onClick={() => setActiveIndex(index)}
            />
          ))}
        </div>
      ) : null}
      <div className="relative w-full h-full">
        {items.map((child, index) =>
          React.isValidElement(child)
            ? React.cloneElement(child, {
                active: index === activeIndex,
                key: child.key ?? index,
              } as { active: boolean; key: React.Key })
            : child,
        )}
      </div>
      {showControls && items.length > 1 ? (
        <>
          <button
            className="absolute left-4 top-1/2 z-10 -translate-y-1/2 inline-flex items-center justify-center h-10 w-10 rounded-full bg-black text-white hover:bg-gray-900 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400"
            type="button"
            aria-label="Previous slide"
            onClick={() =>
              setActiveIndex(
                (index) => (index - 1 + items.length) % items.length,
              )
            }
          >
            <svg
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button
            className="absolute right-4 top-1/2 z-10 -translate-y-1/2 inline-flex items-center justify-center h-10 w-10 rounded-full bg-black text-white hover:bg-gray-900 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400"
            type="button"
            aria-label="Next slide"
            onClick={() =>
              setActiveIndex((index) => (index + 1) % items.length)
            }
          >
            <svg
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </>
      ) : null}
    </div>
  );
}

function CarouselItem({
  className,
  active,
  ...props
}: React.ComponentProps<"div"> & {
  active?: boolean;
}) {
  return (
    <div
      className={cn(
        active
          ? "relative w-full"
          : "absolute inset-0 opacity-0 pointer-events-none",
        "transition-opacity duration-500",
        className,
      )}
      {...props}
    />
  );
}

function CarouselCaption({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4 text-white",
        className,
      )}
      {...props}
    />
  );
}

export { Carousel, CarouselCaption, CarouselItem };
