import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-md border px-2.5 py-1 text-base font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 cursor-pointer",
  {
    variants: {
      variant: {
        none: "",
        default:"",
        red: "border-[#D9534F] text-[#D9534F] bg-transparent hover:bg-transparent",
        green:
          "border-[#5CB85C] text-[#5CB85C] bg-transparent hover:bg-transparent",
        orange:
          "border-[#F39E60] text-[#F39E60] bg-transparent hover:bg-transparent",
        yellow:
          "border-[#FCC737] text-[#FCC737] bg-transparent  hover:bg-transparent",
        blue: "border-[#5BC0DE] text-[#5BC0DE] bg-transparent hover:bg-transparent ",
      },
      selected: {
        none:'',
        default:
          "border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        outline: "text-foreground",
        red: "border-transparent bg-[#D9534F] text-white shadow hover:bg-[#D9534FCC]",
        green:
          "border-transparent bg-[#5CB85C] text-white shadow hover:bg-[#5CB85CCC]",
        orange:
          "border-transparent bg-[#F39E60] text-white shadow hover:bg-[#F39E60CC]",
        yellow:
          "border-transparent bg-[#FCC737] text-white shadow hover:bg-[#FCC737CC]",
        blue: "border-transparent bg-[#5BC0DE] text-white shadow hover:bg-[#5BC0DECC]",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, selected, ...props }: BadgeProps) {
  return (
    <div
      className={cn(badgeVariants({ variant, selected }), className)}
      {...props}
    />
  );
}

export { Badge, badgeVariants };
