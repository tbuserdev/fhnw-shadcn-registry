import * as React from "react";

import { cn } from "@/lib/utils";
import "./fhnw-components.css";

const Pagination = React.forwardRef<
  HTMLElement,
  React.ComponentPropsWithoutRef<"nav">
>(({ className, ...props }, ref) => (
  <nav ref={ref} className={cn(className)} {...props} />
));

Pagination.displayName = "Pagination";

const PaginationContent = React.forwardRef<
  HTMLUListElement,
  React.ComponentPropsWithoutRef<"ul">
>(({ className, ...props }, ref) => (
  <ul ref={ref} className={cn("flex gap-1", className)} {...props} />
));

PaginationContent.displayName = "PaginationContent";

const PaginationItem = React.forwardRef<
  HTMLLIElement,
  React.ComponentPropsWithoutRef<"li">
>(({ className, ...props }, ref) => (
  <li ref={ref} className={cn("", className)} {...props} />
));

PaginationItem.displayName = "PaginationItem";

const PaginationLink = React.forwardRef<
  HTMLAnchorElement,
  React.ComponentPropsWithoutRef<"a"> & {
    isActive?: boolean;
  }
>(({ className, isActive, ...props }, ref) => (
  <a
    ref={ref}
    aria-current={isActive ? "page" : undefined}
    className={cn(
      "inline-flex items-center justify-center border-2 border-[#deded9] px-3 py-[0.375rem] text-base transition-colors hover:bg-gray-100 focus-visible:outline-none",
      isActive && "bg-[#fde703] border-[#fde703] text-black",
      className,
    )}
    {...props}
  />
));

PaginationLink.displayName = "PaginationLink";

function PaginationPrevious(
  props: React.ComponentProps<typeof PaginationLink>,
) {
  return (
    <PaginationLink aria-label="Previous page" {...props}>
      Previous
    </PaginationLink>
  );
}

function PaginationNext(props: React.ComponentProps<typeof PaginationLink>) {
  return (
    <PaginationLink aria-label="Next page" {...props}>
      Next
    </PaginationLink>
  );
}

export {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
};
