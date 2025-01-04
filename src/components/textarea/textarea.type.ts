export type TextareaProps = {
  name: string;
  id?: string;
  label?: string;
  pattern?: RegExp;
  placeholder?: string;
  onChange: (value: string) => void;
  inputClassName?: string;
};
