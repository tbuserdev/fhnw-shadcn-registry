import { Button as ButtonPrimitive } from "@base-ui/react/button"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 border-2 border-transparent font-semibold whitespace-nowrap transition-colors outline-none disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 focus-visible:ring-4 focus-visible:ring-ring/25",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground hover:bg-primary/90 active:bg-primary",
        secondary:
          "border-primary bg-secondary text-secondary-foreground hover:bg-[#fdeb29] active:bg-[#fdec35]",
        outline:
          "border-border bg-muted text-black hover:border-primary hover:bg-background",
        ghost: "text-black hover:bg-muted",
        link: "border-transparent p-0 text-black underline-offset-4 hover:underline",
      },
      size: {
        default: "min-h-12 px-5 text-[0.95rem]",
        sm: "min-h-10 px-4 text-sm",
        lg: "min-h-14 px-6 text-base",
        icon: "size-12",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant,
  size,
  ...props
}: ButtonPrimitive.Props & VariantProps<typeof buttonVariants>) {
  return (
    <ButtonPrimitive
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
