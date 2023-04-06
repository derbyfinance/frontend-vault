import React, { FC } from 'react';
import { AddMoneyToVaultBtn } from '@components/Common/MainButton/MainButton.styled';
import { formatter } from '@helpers/helperFunctions';
import { IRaceKeyStats } from 'types/race';
import {
  StyledRowCell,
  StyledRowItem,
} from './RaceTable.styled';

type TableRowType = {
  rowData: IRaceKeyStats;
  isVaultsPage: boolean;
  withShortName?: boolean;
};

const TableRow: FC<TableRowType> = ({ rowData, isVaultsPage }) => {
  const { race, followers, invested, performance, rewards } = rowData;

  return (
    <StyledRowItem>
      <StyledRowCell>
          {race}
      </StyledRowCell>
      <StyledRowCell>{followers}</StyledRowCell>
      <StyledRowCell>$ {formatter.format(invested)}</StyledRowCell>
      <StyledRowCell>{performance}%</StyledRowCell>
      <StyledRowCell>$ {formatter.format(rewards)}</StyledRowCell>
      <StyledRowCell>
        {isVaultsPage && (
          <>
            <AddMoneyToVaultBtn onClick={() => false}>
              + Follow
            </AddMoneyToVaultBtn>
          </>
        )}
      </StyledRowCell>
    </StyledRowItem>
  );
};

export default TableRow;
