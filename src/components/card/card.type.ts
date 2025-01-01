import React from "react"

export type CardProps = {
    title: string;
    description?: string;
    children: React.ReactNode
    primaryBtn?: React.ReactNode
    secondaryBtn?: React.ReactNode
    wrapperClassName?: string

}