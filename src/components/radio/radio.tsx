import { RadioGroup, RadioGroupItem } from "@/uiElements/radio-group";
import React from "react";
import Label from "../label/label";
import { RadioButtonPropsType } from "./radio.type";

const RadioButton: React.FC<RadioButtonPropsType> = ({
  name,
  onChange,
  options,
  defaultValue,
  className,
}) => {
  return (
    <>
      <RadioGroup name={name} defaultValue={defaultValue} className={className}>
        {options?.map((option) => (
          <div key={option.value} className="flex items-center space-x-2">
            <RadioGroupItem value={option.value} id={option.value} />
            <Label
              htmlFor={option.label}
              label={option.label}
              onChange={(e) => onChange(e.target.value)}
            ></Label>
          </div>
        ))}
      </RadioGroup>
    </>
  );
};

export default RadioButton;
