import React, { FC } from 'react';
import { AddMoneyToVaultBtn } from '@components/Common/MainButton/MainButton.styled';
import { formatter } from '@helpers/helperFunctions';
import { IRaceLeaderboard } from 'types/race';
import LogoIcon from '@icons/LogoIcon.svg';
import {
  StyleRowName,
  StyledCircleAvatar,
  StyledCircleBorder,
  StyledRowCell,
  StyledRowItem,
} from './Table.styled';
import Image from 'next/image';

type TableRowType = {
  rowData: IRaceLeaderboard;
  isVaultsPage: boolean;
  withShortName?: boolean;
};

const TableRow: FC<TableRowType> = ({ rowData, isVaultsPage }) => {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  const { name, followers, invested, performance } = rowData;

  return (
    <StyledRowItem>
      <StyledRowCell>
        <div>
          <StyledCircleBorder>
            <StyledCircleAvatar
              backgroundColor={`#${randomColor}`}
            ><Image src={LogoIcon} width={15} alt={'logo'} /></StyledCircleAvatar>
          </StyledCircleBorder>
          <StyleRowName>{name}</StyleRowName>
        </div>
      </StyledRowCell>
      <StyledRowCell>{followers}</StyledRowCell>
      <StyledRowCell>$ {formatter.format(invested)}</StyledRowCell>
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
