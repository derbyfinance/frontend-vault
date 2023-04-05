import React, { FC } from 'react';
import { IRaceLeaderboard } from 'types/race';
import { StyledColumnHeader, StyledTable,  } from './Table.styled';
import TableRow from './TableRow';

type TableProps = {
  tableData: IRaceLeaderboard[];
  headers: string[];
};

const LeaderBoard: FC<TableProps> = ({ headers, tableData }) => {
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

export default LeaderBoard;
