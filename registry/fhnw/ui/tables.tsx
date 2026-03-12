import * as React from "react"

import { cn } from "@/lib/utils"
import "./fhnw-bootstrap.css"

const Table = React.forwardRef<
  HTMLTableElement,
  React.ComponentPropsWithoutRef<"table">
>(({ className, ...props }, ref) => (
  <table ref={ref} className={cn("table", className)} {...props} />
))

Table.displayName = "Table"

const TableResponsive = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<"div">
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("table-responsive", className)} {...props} />
))

TableResponsive.displayName = "TableResponsive"

export { Table, TableResponsive }
