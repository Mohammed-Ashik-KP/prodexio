import React, { ComponentProps } from "react";
import { CheckboxProps } from "./checkbox.type";
import { Check } from "lucide-react";
import Label from "../label/label";

const Checkbox: React.FC<
  CheckboxProps & Partial<Omit<ComponentProps<"input">, "onChange">>
> = ({ id, name, label, onChange, checked }) => {
  return (
    <>
      <input
        type="checkbox"
        id={id}
        name={name}
        checked={checked}
        onChange={(e) => {
          if (onChange) {
            onChange(e.target.checked, id);
          }
        }}
        className="hidden"
      />

      <label
        htmlFor={id}
        className="flex gap-2 items-center text-sm text-gray-600 font-medium cursor-pointer w-max"
      >
        <div
          className={`flex items-center justify-center border rounded-sm w-4 h-4  transition-opacity duration-200 ease-in-out border-gray-600  ${
            checked ? "bg-black" : "bg-transparent"
          }`}
        >
          <div
            className={`${
              checked ? "opacity-1" : "opacity-0"
            } relative flex items-center justify-center transition-opacity duration-200 ease-in-out `}
          >
            <Check
              color="white"
              size={14}
              strokeWidth={1}
              absoluteStrokeWidth
            />
          </div>
        </div>
        {typeof label === "string" ? (
          <Label
            label={label}
            htmlFor={id}
            className="font-medium select-none cursor-pointer"
          ></Label>
        ) : (
          <div className="font-medium select-none cursor-pointer">{label}</div>
        )}
      </label>
    </>
  );
};

export default Checkbox;
