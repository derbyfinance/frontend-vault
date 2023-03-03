import React, { FC } from 'react';
import { TableDataType } from 'types/table/tableDataTypes';
import { StyledColumnHeader, StyledTable } from './Table.styled';
import TableRow from './TableRow';

type TableProps = {
  tableData: TableDataType[];
  headers: string[];
};

const Table: FC<TableProps> = ({ headers, tableData }) => {
  return (
    <StyledTable>
      <thead>
        <tr>
          {headers.map((header) => (
            <StyledColumnHeader key={header}>{header}</StyledColumnHeader>
          ))}
        </tr>
      </thead>
      <tbody>
        {tableData.map((rowData) => (
          <TableRow key={rowData.id} rowData={rowData} isVaultsPage />
        ))}
      </tbody>
    </StyledTable>
  );
};

export default Table;
