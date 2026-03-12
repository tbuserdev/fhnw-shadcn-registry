import * as React from "react";
import { Button as ButtonPrimitive } from "@base-ui/react/button";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";
import "./fhnw-components.css";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 cursor-pointer font-medium transition-colors outline-none disabled:cursor-not-allowed disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-black text-white hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-400",
        secondary:
          "bg-[#fde703] text-black hover:bg-[#fcdd00] focus:outline-none focus:ring-2 focus:ring-blue-400",
        outline:
          "border-2 border-black text-black hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400",
        ghost:
          "text-black hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400",
        link: "text-black underline hover:no-underline focus:outline-none focus:ring-2 focus:ring-blue-400",
      },
      size: {
        default: "px-5 py-2.5 text-sm",
        sm: "px-3 py-1.5 text-xs",
        lg: "px-7 py-3.5 text-base",
        icon: "inline-flex items-center justify-center p-2",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

function Button({
  className,
  variant,
  size,
  ...props
}: ButtonPrimitive.Props & VariantProps<typeof buttonVariants>) {
  return (
    <ButtonPrimitive
      data-slot="button"
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    />
  );
}

const ButtonGroup = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<"div">
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("inline-flex gap-0", className)}
    role="group"
    {...props}
  />
));

ButtonGroup.displayName = "ButtonGroup";

export { Button, ButtonGroup, buttonVariants };
