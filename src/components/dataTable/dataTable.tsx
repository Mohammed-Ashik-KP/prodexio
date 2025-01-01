import React from "react";
import { DataTableProps } from "./dataTable.type";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/uiElements/table";

const DataTable: React.FC<DataTableProps> = ({
  id,
  className,
  columns,
  data,
}) => {
  return (
    <div className="data-table border rounded-md" id={id}>
      <Table className={className || ""}>
        <TableHeader>
          <TableRow className="bg-gray-200 font-medium text-base">
            {columns?.map((column) => {
              return (
                <TableHead key={column.id} className={` ${column.className}`}>
                  {column.header}
                </TableHead>
              );
            })}
          </TableRow>
        </TableHeader>
        <TableBody>
          {data?.map((datum,rowIndex) => (
            <TableRow key={`row_${id}_${datum.id}`}>
              {columns.map((column) => {
                return (
                  <>
                    <TableCell  key={`col_${column.id}_${rowIndex}`} className="font-medium">
                      {column.render ? <div>{column.render(datum[column.id])}</div>  :<div>{datum[column?.id]}</div>}
                    </TableCell>
                  </>
                );
              })}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default DataTable;
