import { ReactNode } from "react";

export type CheckboxProps = {
  id: string;
  label: string | ReactNode;
  onChange: (value: boolean, id?: string) => void;
  checked?: boolean;
  className?: string;
};
