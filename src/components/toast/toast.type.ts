import { Toast, ToastOptions } from "react-hot-toast";

export type AvailableToastTypes = "success" | "error" | "blank";
export type ToastOptionsType = {
  type?: AvailableToastTypes;
};
export type ToastPropsType = {
  title: string;
  description?: string;
  options?: ToastOptionsType & ToastOptions;
};

export type CustomToastProps = {
  title: string;
  description?: string;
  toastInstance: Toast;
};
