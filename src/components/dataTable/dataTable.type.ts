import React from "react";

export type genericType = string | number | boolean;

export type DataTableProps = {
    data: Record<string,genericType>[],
    columns: {
        id: string | number;
        header: string;
        render?: (value: genericType) => React.ReactNode; 
        className?: string;
    }[]
    name?: string;
    id: string;
    showOptions?: boolean;
    options?: Array<Record<string, unknown>>
    className? : string;

}