"use client";
import React from "react";
import { TextareaBoxProps } from "./textareaBox.type";
import { Textarea } from "@/uiElements/textarea";

const TextareaBox: React.FC<TextareaBoxProps & Partial<HTMLTextAreaElement>> = ({
  name,
  id,
  label,
  onChange,
  pattern,
  placeholder,
  inputClass,
  rows = 5
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
      <div className={`${label ? "" : ""} text-gray-500 text-sm mb-1 px-1 capitalize`}>
        {label}
      </div>
      <Textarea
        name={name}
        id={id}
        onChange={handleOnChange}
        placeholder={placeholder}
        className={inputClass}
        rows={rows}
      />
    </div>
  );
};

export default TextareaBox;
