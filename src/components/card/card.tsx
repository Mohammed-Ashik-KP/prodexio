import React from "react";
import { CardProps } from "./card.type";
import {
  CardWrapper,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/uiElements/card";

const Card: React.FC<CardProps> = ({
  title,
  description,
  children,
  primaryBtn,
  secondaryBtn,
  wrapperClassName,
}) => {
  return (
    <CardWrapper className={wrapperClassName || ""}>
      <CardHeader>
        <CardTitle> {title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>{children}</CardContent>
      {secondaryBtn || primaryBtn ? (
        <CardFooter className="flex items-center justify-end gap-3">
          {secondaryBtn}
          {primaryBtn}
        </CardFooter>
      ) : (
        <></>
      )}
    </CardWrapper>
  );
};

export default Card;
