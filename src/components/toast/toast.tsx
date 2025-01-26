// toastWrapper.js
import { toast as originalToast, Toast } from "react-hot-toast";
import { CustomToastProps, ToastPropsType } from "./toast.type";
import { X } from "lucide-react";

const CutsomToast: React.FC<CustomToastProps> = ({
  title,
  description,
  toastInstance,
}) => {
  return (
    <div
      className={`w-full rounded-lg pointer-events-auto flex items-center min-w-28 min-h-10`}
    >
      <div className="flex items-center w-full justify-between gap-2">
        <div className="">
          <p className="text-base text-gray-800 leading-normal">{title}</p>
          {description ? (
            <p className="mt-1 text-sm text-gray-500">{description}</p>
          ) : (
            <></>
          )}
        </div>
        <button
          onClick={() => originalToast.remove(toastInstance.id)}
          className="w-max border border-transparent rounded-none rounded-r-lg flex items-center justify-center font-medium text-slate-700 hover:text-indigo-600"
        >
          <X size={16} />
        </button>
      </div>
    </div>
  );
};
const toast = ({ title, description, options }: ToastPropsType) => {
  if (options?.type === "blank" || !options || !options?.type) {
    return originalToast.error(
      (t: Toast) => (
        <CutsomToast
          title={title}
          description={description}
          toastInstance={t}
        />
      ),
      options
    );
  }
  if (options.type === "success") {
    return originalToast.error(
      (t: Toast) => (
        <CutsomToast
          title={title}
          description={description}
          toastInstance={t}
        />
      ),
      options
    );
  }

  if (options.type === "error") {
    return originalToast.error(
      (t: Toast) => (
        <CutsomToast
          title={title}
          description={description}
          toastInstance={t}
        />
      ),
      options
    );
  }
};

export default toast;
