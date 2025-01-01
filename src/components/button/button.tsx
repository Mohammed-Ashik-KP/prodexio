import * as React from "react";
import { cn } from "@/lib/utils";
import { buttonVariants } from "./button.helper";
import { ButtonProps } from "./button.type";
import { LoaderCircle } from "lucide-react";

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, label, isLoading, disabled, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
        disabled={disabled || isLoading}
      >
        {isLoading ? <LoaderCircle className="animate-spin" /> : <></>}{" "}
        {label}
      </button>
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
