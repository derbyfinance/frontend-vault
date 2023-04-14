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
      <ItemRowWrapper name={name}>
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
      </ItemRowWrapper>
      <ItemRowWrapper name={name}>
        $ {formatter.format(allocated)}
      </ItemRowWrapper>
      <ItemRowWrapper name={name}>{performance}%</ItemRowWrapper>
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

const ItemRowWrapper = ({ name, children }) => {
  return (
    <Link href={`/game/detail/${name}`}>
      <StyledRowCell>{children}</StyledRowCell>
    </Link>
  );
};
