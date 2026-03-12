import * as React from "react";
import { createPortal } from "react-dom";

import { cn } from "@/lib/utils";
import "./fhnw-components.css";

type TooltipPlacement = "top" | "right" | "bottom" | "left";

function getTooltipPosition(
  rect: DOMRect,
  placement: TooltipPlacement,
): React.CSSProperties {
  const gap = 8;

  switch (placement) {
    case "top":
      return {
        left: rect.left + rect.width / 2,
        top: rect.top - gap,
        transform: "translate(-50%, -100%)",
      };
    case "right":
      return {
        left: rect.right + gap,
        top: rect.top + rect.height / 2,
        transform: "translateY(-50%)",
      };
    case "left":
      return {
        left: rect.left - gap,
        top: rect.top + rect.height / 2,
        transform: "translate(-100%, -50%)",
      };
    default:
      return {
        left: rect.left + rect.width / 2,
        top: rect.bottom + gap,
        transform: "translateX(-50%)",
      };
  }
}

function Tooltip({
  className,
  content,
  placement = "top",
  children,
}: React.ComponentProps<"span"> & {
  content: React.ReactNode;
  placement?: TooltipPlacement;
}) {
  const triggerRef = React.useRef<HTMLSpanElement>(null);
  const [open, setOpen] = React.useState(false);
  const [style, setStyle] = React.useState<React.CSSProperties>();

  React.useEffect(() => {
    if (!open || !triggerRef.current) {
      return;
    }

    const update = () => {
      const rect = triggerRef.current?.getBoundingClientRect();

      if (rect) {
        setStyle({
          position: "fixed",
          zIndex: 1080,
          ...getTooltipPosition(rect, placement),
        });
      }
    };

    update();
    window.addEventListener("resize", update);
    window.addEventListener("scroll", update, true);

    return () => {
      window.removeEventListener("resize", update);
      window.removeEventListener("scroll", update, true);
    };
  }, [open, placement]);

  return (
    <>
      <span
        ref={triggerRef}
        className={cn("inline-flex", className)}
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
        onFocus={() => setOpen(true)}
        onBlur={() => setOpen(false)}
      >
        {children}
      </span>
      {open && typeof document !== "undefined"
        ? createPortal(
            <div
              className={cn(
                "bg-black text-white text-sm px-3 py-2 max-w-xs",
                className,
              )}
              role="tooltip"
              style={style}
            >
              <div className="fhnw-tooltip-arrow" />
              <div>{content}</div>
            </div>,
            document.body,
          )
        : null}
    </>
  );
}

export { Tooltip };
