import { ChipVariants } from "@/types";

export type ChipProps = {
  id: string;
  label: string;
  selectable?: boolean;
  showCloseButton?: boolean;
  className?: string;
  onRemove?: (id: string) => void;
  onClick?: (id: string) => void;
  variant?: ChipVariants;
  theme?: "DEFAULT" | "SELECTED" | undefined;
  selected?: boolean;
};
