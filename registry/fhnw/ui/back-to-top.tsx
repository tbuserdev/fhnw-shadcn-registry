import * as React from "react";
import { ArrowUpIcon } from "@phosphor-icons/react";

import { cn } from "@/lib/utils";
import "./fhnw-components.css";

function BackToTop({
  className,
  threshold = 100,
  onClick,
  style,
  ...props
}: React.ComponentProps<"a"> & {
  threshold?: number;
}) {
  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > threshold);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [threshold]);

  return (
    <a
      href="#top"
      aria-label="Back to top"
      className={cn(
        "fixed bottom-6 right-6 inline-flex items-center justify-center h-10 w-10 rounded-full bg-black text-white hover:bg-gray-900 transition-opacity focus-visible:outline-none",
        !visible && "pointer-events-none",
        className,
      )}
      style={{ opacity: visible ? 1 : 0, ...style }}
      onClick={(event) => {
        onClick?.(event);

        if (event.defaultPrevented) {
          return;
        }

        event.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
      }}
      {...props}
    >
      <ArrowUpIcon className="size-5" />
    </a>
  );
}

export { BackToTop };
