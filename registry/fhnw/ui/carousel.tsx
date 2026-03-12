import * as React from "react"

import { cn } from "@/lib/utils"
import "./fhnw-bootstrap.css"

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
  autoPlay?: boolean
  interval?: number
  fade?: boolean
  showIndicators?: boolean
  showControls?: boolean
}) {
  const items = React.Children.toArray(children)
  const [activeIndex, setActiveIndex] = React.useState(0)

  React.useEffect(() => {
    if (!autoPlay || items.length <= 1) {
      return
    }

    const id = window.setInterval(() => {
      setActiveIndex((index) => (index + 1) % items.length)
    }, interval)

    return () => window.clearInterval(id)
  }, [autoPlay, interval, items.length])

  return (
    <div
      className={cn("carousel slide", fade && "carousel-fade", className)}
      {...props}
    >
      {showIndicators && items.length > 1 ? (
        <div className="carousel-indicators">
          {items.map((_, index) => (
            <button
              key={index}
              type="button"
              className={cn(index === activeIndex && "active")}
              aria-current={index === activeIndex}
              aria-label={`Slide ${index + 1}`}
              onClick={() => setActiveIndex(index)}
            />
          ))}
        </div>
      ) : null}
      <div className="carousel-inner">
        {items.map((child, index) =>
          React.isValidElement(child)
            ? React.cloneElement(child, {
                active: index === activeIndex,
                key: child.key ?? index,
              } as { active: boolean; key: React.Key })
            : child
        )}
      </div>
      {showControls && items.length > 1 ? (
        <>
          <button
            className="carousel-control-prev"
            type="button"
            onClick={() =>
              setActiveIndex((index) => (index - 1 + items.length) % items.length)
            }
          >
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            onClick={() => setActiveIndex((index) => (index + 1) % items.length)}
          >
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="visually-hidden">Next</span>
          </button>
        </>
      ) : null}
    </div>
  )
}

function CarouselItem({
  className,
  active,
  ...props
}: React.ComponentProps<"div"> & {
  active?: boolean
}) {
  return <div className={cn("carousel-item", active && "active", className)} {...props} />
}

function CarouselCaption({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return <div className={cn("carousel-caption", className)} {...props} />
}

export { Carousel, CarouselCaption, CarouselItem }
