import * as React from "react"

import { cn } from "@/lib/utils"
import "./fhnw-bootstrap.css"

type IconName =
  | "youtube"
  | "facebook"
  | "flickr"
  | "bluesky"
  | "instagram"
  | "issuu"
  | "itunes"
  | "linkedin"
  | "vimeo"
  | "tiktok"
  | "snapchat"
  | "xing"
  | "switch"

type IconSize = "sm" | "md"

function Icon({
  className,
  name,
  size = "md",
  ...props
}: Omit<React.ComponentPropsWithoutRef<"span">, "children"> & {
  name: IconName
  size?: IconSize
}) {
  return (
    <span
      aria-hidden="true"
      className={cn(`icon__${name}--${size}`, className)}
      {...props}
    />
  )
}

function SocialIcons({
  className,
  children,
  ...props
}: React.ComponentProps<"ul">) {
  return (
    <ul className={cn("social__icons", className)} {...props}>
      {children}
    </ul>
  )
}

function SocialIconLink({
  className,
  name,
  size = "sm",
  ...props
}: React.ComponentProps<"a"> & {
  name: IconName
  size?: IconSize
}) {
  return (
    <li>
      <a className={cn(`icon__${name}--${size}`, className)} {...props} />
    </li>
  )
}

export { Icon, SocialIconLink, SocialIcons }
