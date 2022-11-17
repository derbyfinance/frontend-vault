import React from 'react';
import { StyledColumnHeader, StyledTable } from './Table.styled';
import TableRow from './TableRow';

const Table = ({ headers, tableData }) => {
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
