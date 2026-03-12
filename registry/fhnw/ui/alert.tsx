import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";
import "./fhnw-components.css";

const alertVariants = cva("relative px-6 py-6 mb-4 text-base", {
  variants: {
    variant: {
      default: "bg-black/[0.08] text-black",
      primary: "bg-black/[0.08] text-black",
      secondary: "bg-[#fde703]/30 text-black",
      success: "bg-[#28a745]/15 text-[#0a3622]",
      destructive: "bg-[#df305b]/15 text-[#58151c]",
      danger: "bg-[#df305b]/15 text-[#58151c]",
      warning: "bg-[#fbd100]/20 text-black",
      info: "bg-[#dee2e6] text-black",
      light: "bg-[#f1f1ee] text-black",
      dark: "bg-[#dee2e6]/70 text-black",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

function Alert({
  className,
  variant,
  ...props
}: React.ComponentProps<"div"> & VariantProps<typeof alertVariants>) {
  return (
    <div
      data-slot="alert"
      role="alert"
      className={cn(alertVariants({ variant }), className)}
      {...props}
    />
  );
}

function AlertTitle({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="alert-title"
      className={cn("mb-1 font-semibold text-[1.1em]", className)}
      {...props}
    />
  );
}

function AlertDescription({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div data-slot="alert-description" className={cn(className)} {...props} />
  );
}

export { Alert, AlertDescription, AlertTitle };
