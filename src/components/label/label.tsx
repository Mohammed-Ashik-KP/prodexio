import { cn } from "@/lib/utils";
import React, { ComponentProps } from "react";
import { LabelProps } from "./label.type";

const Label: React.FC<LabelProps & Partial<ComponentProps<"label">>> = ({
  label,
  className,
  ...rest
}) => {
  return (
    <label
      className={cn("text-sm text-gray-600 font-medium", className)}
      {...rest}
    >
      {label}
    </label>
  );
};

export default Label;
