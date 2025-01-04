"use client";
import React from "react";
import { TextareaProps } from "./textarea.type";

const TextareaBox: React.FC<TextareaProps & Partial<HTMLTextAreaElement>> = ({
  name,
  id,
  label,
  onChange,
  pattern,
  placeholder,
  inputClassName,
  rows = 5,
}) => {
  //constants

  //hooks

  //states

  //fncs

  const handleOnChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;

    if (pattern) {
      if (pattern.test(value)) {
        onChange(value);
      } else {
        e.target.value = value;
      }
    } else {
      onChange(value);
    }
  };
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
        name={name}
        id={id}
        onChange={handleOnChange}
        placeholder={placeholder}
        className={`flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-base shadow-sm placeholder:text-muted-foreground focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm ${inputClassName}`}
        rows={rows}
      />
    </div>
  );
};

export default TextareaBox;
