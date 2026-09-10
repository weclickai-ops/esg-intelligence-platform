import { Slot } from "@radix-ui/react-slot";
import type { ButtonHTMLAttributes } from "react";

import { cn } from "../../lib/utils";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  asChild?: boolean;
  variant?: "solid" | "outline" | "light" | "ghost";
};

const variants = {
  solid:
    "border border-primary bg-primary text-primary-foreground hover:bg-forest hover:border-forest",
  outline:
    "border border-primary bg-transparent text-primary hover:bg-primary hover:text-primary-foreground",
  light:
    "border border-porcelain bg-porcelain text-primary hover:bg-background",
  ghost:
    "border border-transparent bg-transparent text-primary hover:border-border hover:bg-secondary",
};

export function Button({
  asChild = false,
  className,
  variant = "solid",
  ...props
}: ButtonProps) {
  const Component = asChild ? Slot : "button";

  return (
    <Component
      className={cn(
        "inline-flex min-h-11 items-center justify-center rounded-md px-5 py-2.5 font-body text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
        variants[variant],
        className,
      )}
      {...props}
    />
  );
}