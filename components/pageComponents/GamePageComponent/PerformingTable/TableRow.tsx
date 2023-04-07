import React, { FC } from 'react';
import { AddMoneyToVaultBtn } from '@components/Common/MainButton/MainButton.styled';
import { formatter } from '@helpers/helperFunctions';
import Image from 'next/image';
import Link from 'next/link';
import { IRaceBestPerformingVaults } from 'types/race';
import {
  StyleRowName,
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
            <Link href={`/game/coin`}>
              <AddMoneyToVaultBtn onClick={() => false}>
                + Invest
              </AddMoneyToVaultBtn>
            </Link>
          </>
        )}
      </StyledRowCell>
    </StyledRowItem>
  );
};

export default TableRow;
