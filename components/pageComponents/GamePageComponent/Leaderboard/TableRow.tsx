import React, { FC } from 'react';
import { AddMoneyToVaultBtn } from '@components/Common/MainButton/MainButton.styled';
import { formatter } from '@helpers/helperFunctions';
import { IRaceLeaderboard } from 'types/race';
import {
  StyledCircleBorder,
  StyledRowCell,
  StyledRowItem,
  StyleRowName,
  StyledCircleAvatar
} from './Table.styled';

type TableRowType = {
  rowData: IRaceLeaderboard;
  isVaultsPage: boolean;
  withShortName?: boolean;
};

const TableRow: FC<TableRowType> = ({ rowData, isVaultsPage }) => {
  const { name, followers, invested, performance } = rowData;

  return (
    <StyledRowItem>
      <StyledRowCell>
        <div>
          <StyledCircleBorder>
            <StyledCircleAvatar></StyledCircleAvatar>
            {/* <Image
                src={icon}
                height="24"
                width="24"
              ></Image> */}
          </StyledCircleBorder>
          <StyleRowName>{name}</StyleRowName>
        </div>
      </StyledRowCell>
      <StyledRowCell>{followers}</StyledRowCell>
      <StyledRowCell>{formatter.format(invested)}</StyledRowCell>
      <StyledRowCell>{performance}%</StyledRowCell>
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
