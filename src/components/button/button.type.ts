import { VariantProps } from "class-variance-authority";
import { buttonVariants } from "./button.helper";


export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
    isLoading?: boolean;
    label: string;
}