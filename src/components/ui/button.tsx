import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

import { cn } from "../../lib/utils";

export const buttonVariants = cva(
  "inline-flex min-h-11 items-center justify-center whitespace-nowrap rounded-md font-body text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "border border-primary bg-primary text-primary-foreground hover:bg-forest hover:border-forest",
        solid: "border border-primary bg-primary text-primary-foreground hover:bg-forest hover:border-forest",
        destructive: "border border-destructive bg-destructive text-destructive-foreground",
        outline: "border border-primary bg-transparent text-primary hover:bg-primary hover:text-primary-foreground",
        secondary: "border border-secondary bg-secondary text-secondary-foreground hover:bg-mist",
        light: "border border-porcelain bg-porcelain text-primary hover:bg-background",
        ghost: "border border-transparent bg-transparent text-primary hover:border-border hover:bg-secondary",
        link: "min-h-0 text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "px-5 py-2.5",
        sm: "min-h-9 px-3 py-1.5 text-xs",
        lg: "min-h-12 px-7 py-3",
        icon: "size-11 p-0",
      },
    },
    defaultVariants: { variant: "default", size: "default" },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ asChild = false, className, variant, size, ...props }, ref) => {
    const Component = asChild ? Slot : "button";

    return <Component ref={ref} className={cn(buttonVariants({ variant, size }), className)} {...props} />;
  },
);
Button.displayName = "Button";