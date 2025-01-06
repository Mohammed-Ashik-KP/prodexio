"use client";
import React from "react";
import { TextareaProps } from "./textarea.type";

const TextareaBox: React.FC<TextareaProps & Partial<HTMLTextAreaElement>> = ({
  name,
  id,
  label,
  placeholder,
  inputClassName,
  rows = 5,
  register,
  required,
  errors,
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
      <textarea
        id={id}
        {...(register &&
          register(name, {
            required: required
              ? { message: "This Field Is Required", value: required }
              : undefined,
          }))}
        name={name}
        placeholder={placeholder}
        className={`flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-base shadow-sm placeholder:text-muted-foreground focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm ${inputClassName}`}
        rows={rows}
      />
      <div className="text-red-500 text-sm">
        {errors ? errors[name]?.message?.toString() || "" : ""}
      </div>
    </div>
  );
};

export default TextareaBox;
