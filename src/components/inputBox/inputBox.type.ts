export type InputBoxProps = {
    name: string;
    id?: string;
    label?: string;
    pattern?: RegExp;
    placeholder?: string;
    onChange: (value: string) => void;
    inputClass?: string;
    capitalizeFirstLetter?: boolean;

}
