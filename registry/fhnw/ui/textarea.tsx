import * as React from "react";

import { cn } from "@/lib/utils";

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "min-h-32 w-full border-2 border-[#deded9] bg-[#f7f7f5] px-4 py-3 text-[0.95rem] text-black transition-colors outline-none placeholder:text-[#767573] focus-visible:border-black focus-visible:bg-white disabled:cursor-not-allowed disabled:bg-[#f1f1ee]",
        className,
      )}
      {...props}
    />
  );
}

export { Textarea };
