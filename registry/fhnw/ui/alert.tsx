import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";
import "./fhnw-components.css";

const alertVariants = cva("relative w-full rounded border p-4", {
  variants: {
    variant: {
      default: "border-blue-300 bg-blue-50 text-blue-900",
      primary: "border-blue-300 bg-blue-50 text-blue-900",
      secondary: "border-gray-300 bg-gray-50 text-gray-900",
      success: "border-green-300 bg-green-50 text-green-900",
      destructive: "border-red-300 bg-red-50 text-red-900",
      danger: "border-red-300 bg-red-50 text-red-900",
      warning: "border-yellow-300 bg-yellow-50 text-yellow-900",
      info: "border-cyan-300 bg-cyan-50 text-cyan-900",
      light: "border-gray-200 bg-gray-100 text-gray-900",
      dark: "border-gray-700 bg-gray-900 text-gray-100",
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
      className={cn("mb-2 font-semibold", className)}
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
