"use client";
import React from "react";
import { InputProps } from "./input.type";

const InputBox: React.FC<InputProps & Partial<HTMLInputElement>> = ({
  name,
  id,
  label,
  pattern,
  placeholder,
  inputClassName,
  register,
  required,
  errors,
  value,
  type,
}) => {
  //constants

  //hooks

  //states

  //fncs

  //effects
  return (
    <div className="w-full">
      <div
        className={`${
          label ? "" : ""
        } text-gray-500 text-sm mb-1 px-1 capitalize`}
      >
        {label}
      </div>
      <input
        type={type}
        value={value}
        {...(register &&
          register(name, {
            required: required
              ? { message: "This Field Is Required", value: required }
              : undefined,
            pattern: pattern && {
              value: pattern.value,
              message: pattern.message,
            },
          }))}
        name={name}
        id={id}
        placeholder={placeholder}
        autoComplete={"hidden"}
        list="autocompleteOff"
        className={`flex px-2 py-1 h-9 w-full rounded-md border border-input bg-transparent text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50 md:text-sm focus:outline-none ${inputClassName}`}
      />
      <div className="text-red-500 text-sm">
        {errors ? errors[name]?.message?.toString() || "" : ""}
      </div>
    </div>
  );
};

export default InputBox;
