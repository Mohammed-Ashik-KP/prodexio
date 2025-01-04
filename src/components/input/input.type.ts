import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";

export type InputProps = {
  name: string;
  id?: string;
  label?: string;
  pattern?: {
    value: RegExp;
    message: string;
  };
  placeholder?: string;
  onChange?: (value: string) => void;
  inputClassName?: string;
  capitalizeFirstLetter?: boolean;
  register: UseFormRegister<FieldValues>;
  required?: boolean;
  errors?: FieldErrors<FieldValues>;
};
