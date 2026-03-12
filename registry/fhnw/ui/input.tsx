import * as React from "react";
import { Input as InputPrimitive } from "@base-ui/react/input";

import { cn } from "@/lib/utils";

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <InputPrimitive
      data-slot="input"
      type={type}
      className={cn(
        "min-h-[60px] w-full border-2 border-[#deded9] bg-[#f7f7f5] px-4 py-3 text-[0.95rem] text-black transition-colors outline-none placeholder:text-[#767573] focus-visible:border-black focus-visible:bg-white disabled:cursor-not-allowed disabled:bg-[#f1f1ee]",
        className,
      )}
      {...props}
    />
  );
}

export { Input };
