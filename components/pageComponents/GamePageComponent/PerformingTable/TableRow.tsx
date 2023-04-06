import React, { FC } from 'react';
import { AddMoneyToVaultBtn } from '@components/Common/MainButton/MainButton.styled';
import { formatter } from '@helpers/helperFunctions';
import Image from 'next/image';
import { IRaceBestPerformingVaults, IRaceLeaderboard } from 'types/race';
import {
  StyleRowName,
  StyledCircleAvatar,
  StyledCircleBorder,
  StyledRowCell,
  StyledRowItem,
} from './PerformingTable.styled';

type TableRowType = {
  rowData: IRaceBestPerformingVaults;
  isVaultsPage: boolean;
  withShortName?: boolean;
};

const TableRow: FC<TableRowType> = ({ rowData, isVaultsPage }) => {
  const { name, performance, allocated } = rowData;

  return (
    <StyledRowItem>
      <StyledRowCell>
        <div>
          <StyledCircleBorder>
            <Image
              src={'/images/ProtocolIcons/yearn-finance.svg'}
              alt={'coin'}
              height="24"
              width="24"
            ></Image>
          </StyledCircleBorder>
          <StyleRowName>{name}</StyleRowName>
          <span>ETH</span>
        </div>
      </StyledRowCell>
      <StyledRowCell>$ {formatter.format(allocated)}</StyledRowCell>
      <StyledRowCell>{performance}%</StyledRowCell>
      <StyledRowCell>
        {isVaultsPage && (
          <>
            <AddMoneyToVaultBtn onClick={() => false}>
              + Invest
            </AddMoneyToVaultBtn>
          </>
        )}
      </StyledRowCell>
    </StyledRowItem>
  );
};

export default TableRow;