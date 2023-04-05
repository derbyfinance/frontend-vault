import React, { FC } from 'react';
import { IRaceBestPerformingVaults } from 'types/race';
import { StyledColumnHeader, StyledTable } from './PerformingTable.styled';
import TableRow from './TableRow';

type TableProps = {
  tableData: IRaceBestPerformingVaults[];
  headers: string[];
};

const PerformingTable: FC<TableProps> = ({ headers, tableData }) => {
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
        {tableData &&
          tableData.map((rowData) => (
            <TableRow key={rowData.name} rowData={rowData} isVaultsPage />
          ))}
      </tbody>
    </StyledTable>
  );
};

export default PerformingTable;
