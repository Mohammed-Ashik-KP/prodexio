export type TextareaBoxProps = {
    name: string;
    id?: string;
    label?: string;
    pattern?: RegExp;
    placeholder?: string;
    onChange: (value: string) => void;
    inputClass?: string;
}
