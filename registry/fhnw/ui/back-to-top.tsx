import * as React from "react"

import { cn } from "@/lib/utils"
import "./fhnw-bootstrap.css"

function BackToTop({
  className,
  threshold = 100,
  onClick,
  style,
  ...props
}: React.ComponentProps<"a"> & {
  threshold?: number
}) {
  const [visible, setVisible] = React.useState(false)

  React.useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > threshold)
    }

    handleScroll()
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [threshold])

  return (
    <a
      href="#top"
      aria-label="Back to top"
      className={cn("back-to-top", className)}
      style={{ opacity: visible ? 0.4 : 0, ...style }}
      onClick={(event) => {
        onClick?.(event)

        if (event.defaultPrevented) {
          return
        }

        event.preventDefault()
        window.scrollTo({ top: 0, behavior: "smooth" })
      }}
      {...props}
    />
  )
}

export { BackToTop }
