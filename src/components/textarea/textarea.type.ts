import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";

export type TextareaProps = {
  name: string;
  id?: string;
  label?: string;
  pattern?: RegExp;
  placeholder?: string;
  onChange?: (value: string) => void;
  inputClassName?: string;
  register: UseFormRegister<FieldValues>;
  errors?: FieldErrors<FieldValues>;
};
