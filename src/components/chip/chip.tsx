import React from "react";
import { ChipProps } from "./chip.type";
import { Badge } from "@/uiElements/badge";
import { X } from "lucide-react";

const Chip: React.FC<ChipProps> = ({
  id,
  label,
  variant = "default",
  showCloseButton,
  onClick,
  onRemove,
  selected,
  compact = false,
}) => {
  return (
    <>
      <Badge
        variant={variant}
        selected={selected ? variant : "none"}
        onClick={(e) => {
          e.stopPropagation();
          if (onClick) {
            onClick(id);
          }
        }}
      >
        <div className="flex items-center gap-2">
          <span className={`${compact ? "text-xs" : "text-base"}`}>
            {label}
          </span>{" "}
          {showCloseButton ? (
            <span>
              <X
                className="border border-transparent hover:border-white rounded-full transition-all duration-100 ease-in-out"
                size={"20px"}
                onClick={(e) => {
                  e.preventDefault();
                  if (onRemove) {
                    onRemove(id);
                  }
                }}
              />
            </span>
          ) : (
            <></>
          )}
        </div>
      </Badge>
    </>
  );
};

export default Chip;
