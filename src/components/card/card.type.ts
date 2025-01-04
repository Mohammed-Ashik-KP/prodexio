import React, { ReactNode } from "react";

export type CardProps = {
  title: string | ReactNode;
  description?: string;
  children: React.ReactNode;
  primaryBtn?: React.ReactNode;
  secondaryBtn?: React.ReactNode;
  wrapperClassName?: string;
};
