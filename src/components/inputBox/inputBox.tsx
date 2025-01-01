"use client";
import React from "react";
import { InputBoxProps } from "./inputBox.type";
import { Input } from "@/uiElements/input";

const InputBox: React.FC<InputBoxProps & Partial<HTMLInputElement>> = ({
  name,
  id,
  label,
  onChange,
  pattern,
  placeholder,
  inputClass,
}) => {
  //constants

  //hooks

  //states

  //fncs

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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
      <Input
        name={name}
        id={id}
        onChange={handleOnChange}
        placeholder={placeholder}
        className={inputClass}
      />
    </div>
  );
};

export default InputBox;
