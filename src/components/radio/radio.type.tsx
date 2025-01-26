export type RadioButtonPropsType = {
  name: string;
  options: Array<{ label: string; value: string; default?: boolean }>;
  onChange: (value: string) => void;
  defaultValue?: string;
  className?: string;
};
