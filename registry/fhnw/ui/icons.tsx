import * as React from "react";

import { cn } from "@/lib/utils";
import "./fhnw-components.css";

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
  | "switch";

type IconSize = "sm" | "md";

function Icon({
  className,
  name,
  size = "md",
  ...props
}: Omit<React.ComponentPropsWithoutRef<"span">, "children"> & {
  name: IconName;
  size?: IconSize;
}) {
  const sizeClasses = {
    sm: "w-8 h-8",
    md: "w-16 h-16",
  };
  return (
    <span
      aria-hidden="true"
      className={cn(
        sizeClasses[size],
        `icon__${name}--${size}`,
        "inline-flex items-center justify-center transition-all duration-300",
        className,
      )}
      {...props}
    />
  );
}

function SocialIcons({
  className,
  children,
  ...props
}: React.ComponentProps<"ul">) {
  return (
    <ul
      className={cn("flex flex-wrap gap-4 list-none p-0 m-0", className)}
      {...props}
    >
      {children}
    </ul>
  );
}

function SocialIconLink({
  className,
  name,
  size = "sm",
  ...props
}: React.ComponentProps<"a"> & {
  name: IconName;
  size?: IconSize;
}) {
  const sizeClasses = {
    sm: "w-8 h-8",
    md: "w-16 h-16",
  };
  return (
    <li>
      <a
        className={cn(
          sizeClasses[size],
          `icon__${name}--${size}`,
          "inline-flex items-center justify-center rounded-full transition-all duration-300 hover:scale-95 hover:opacity-70",
          className,
        )}
        {...props}
      />
    </li>
  );
}

export { Icon, SocialIconLink, SocialIcons };
