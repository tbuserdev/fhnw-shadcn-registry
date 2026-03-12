import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";
import "./fhnw-components.css";

const badgeVariants = cva(
  "inline-flex items-center gap-1 px-2.5 py-0.5 text-xs font-semibold",
  {
    variants: {
      variant: {
        default: "bg-black text-white",
        secondary: "bg-[#fde703] text-black",
        success: "bg-[#28a745] text-white",
        danger: "bg-[#df305b] text-white",
        warning: "bg-[#fde703] text-black",
        info: "bg-[#dee2e6] text-black",
        light: "bg-[#f1f1ee] text-black",
        dark: "bg-black text-white",
        outline: "border-2 border-black bg-white text-black",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

function Badge({
  className,
  variant,
  ...props
}: React.ComponentProps<"span"> & VariantProps<typeof badgeVariants>) {
  return (
    <span
      data-slot="badge"
      className={cn(badgeVariants({ variant }), className)}
      {...props}
    />
  );
}

export { Badge, badgeVariants };
