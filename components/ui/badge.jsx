import * as React from "react";
import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-hidden focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      color: {
        default: "border-transparent bg-primary text-primary-foreground ",
        destructive:
          "bg-destructive border-transparent text-destructive-foreground",
        success: "bg-success border-transparent  text-success-foreground ",
        info: "bg-info border-transparent text-info-foreground ",
        warning: "bg-warning  border-transparent text-warning-foreground",
        secondary: "bg-secondary border-transparent text-foreground ",
        dark: "bg-accent-foreground border-transparent text-accent ",
      },
      variant: {
        outline: "border border-current bg-background  ",
        soft: "text-current bg-current/10",
      },
    },
    compoundVariants: [
      {
        variant: "outline",
        color: "destructive",
        className: "text-destructive",
      },
      {
        variant: "outline",
        color: "success",
        className: "text-success",
      },
      {
        variant: "outline",
        color: "info",
        className: "text-info",
      },
      {
        variant: "outline",
        color: "warning",
        className: "text-warning",
      },
      {
        variant: "outline",
        color: "dark",
        className: "text-accent-foreground",
      },
      {
        variant: "outline",
        color: "secondary",
        className:
          "text-muted-foreground dark:bg-transparent border-default-500",
      },
      {
        variant: "outline",
        color: "default",
        className: "text-primary",
      },
      // soft button variant
      {
        variant: "soft",
        color: "",
        className: "text-primary bg-primary/30 hover:text-primary",
      },
      {
        variant: "soft",
        color: "info",
        className: "text-info bg-info/30 hover:text-info",
      },
      {
        variant: "soft",
        color: "warning",
        className: "text-warning bg-warning/30 hover:text-warning",
      },
      {
        variant: "soft",
        color: "destructive",
        className: "text-destructive bg-destructive/30 hover:text-destructive",
      },
      {
        variant: "soft",
        color: "success",
        className: "text-success bg-success/30 hover:text-success",
      },
      {
        variant: "soft",
        color: "secondary",
        className:
          "text-muted-foreground hover:text-muted-foreground bg-secondary/30! ",
      },
      {
        variant: "soft",
        color: "default",
        className: "text-primary bg-primary/30 hover:text-primary",
      },
    ],
    defaultVariants: {
      color: "default",
    },
  }
);

function Badge({ className, color, variant, ...props }) {
  return (
    <div
      className={cn(badgeVariants({ color, variant }), className)}
      {...props}
    />
  );
}

export { Badge, badgeVariants };
