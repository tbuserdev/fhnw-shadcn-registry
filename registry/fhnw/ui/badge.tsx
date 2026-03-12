import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";
import "./fhnw-components.css";

const badgeVariants = cva(
  "inline-flex items-center gap-1 px-2.5 py-0.5 rounded text-xs font-semibold",
  {
    variants: {
      variant: {
        default: "bg-black text-white",
        secondary: "bg-[#fde703] text-black",
        success: "bg-green-100 text-green-800",
        danger: "bg-red-100 text-red-800",
        warning: "bg-yellow-100 text-yellow-800",
        info: "bg-blue-100 text-blue-800",
        light: "bg-gray-100 text-black",
        dark: "bg-gray-900 text-white",
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
