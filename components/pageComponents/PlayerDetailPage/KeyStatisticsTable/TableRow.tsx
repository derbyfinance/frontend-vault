import React, { FC } from 'react';
import { formatter } from '@helpers/helperFunctions';
import { IRaceKeyStats } from 'types/race';
import { StyledRowCell, StyledRowItem } from './KeyStatisticsTable.styled';

type TableRowType = {
  rowData: IRaceKeyStats;
  index: number;
};

const TableRow: FC<TableRowType> = ({ rowData, index }) => {
  const { race, followers, invested, performance, rewards } = rowData;

  return (
    <StyledRowItem>
      <StyledRowCell>{race}</StyledRowCell>
      <StyledRowCell>{followers} DBR</StyledRowCell>
      <StyledRowCell>$ {formatter.format(invested)}</StyledRowCell>
      <StyledRowCell>{performance}%</StyledRowCell>
      {/* <StyledRowCell>$ {formatter.format(rewards)}</StyledRowCell> */}
      <StyledRowCell>{index + 1}</StyledRowCell>
      <StyledRowCell>{index + 3}</StyledRowCell>
    </StyledRowItem>
  );
};

export default TableRow;
