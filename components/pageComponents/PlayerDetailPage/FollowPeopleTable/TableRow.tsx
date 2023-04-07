import React, { FC } from 'react';
import { AddMoneyToVaultBtn } from '@components/Common/MainButton/MainButton.styled';
import { formatter } from '@helpers/helperFunctions';
import { IRaceLeaderboard } from 'types/race';
import {
  StyleRowName,
  StyledCircleAvatar,
  StyledCircleBorder,
  StyledRowCell,
  StyledRowItem,
} from './FollowPeopleTable.styled';

type TableRowType = {
  rowData: IRaceLeaderboard;
};

const TableRow: FC<TableRowType> = ({ rowData }) => {
  const { name, followers, invested, performance } = rowData;

  return (
    <StyledRowItem>
      <StyledRowCell>
        <div>
          <StyledCircleBorder>
            <StyledCircleAvatar></StyledCircleAvatar>
          </StyledCircleBorder>
          <StyleRowName>{name}</StyleRowName>
        </div>
      </StyledRowCell>
      <StyledRowCell>{followers}</StyledRowCell>
      <StyledRowCell>$ {formatter.format(invested)}</StyledRowCell>
      <StyledRowCell>{performance}%</StyledRowCell>
      <StyledRowCell>
        <AddMoneyToVaultBtn onClick={() => false}>Unfollow</AddMoneyToVaultBtn>
      </StyledRowCell>
    </StyledRowItem>
  );
};

export default TableRow;
