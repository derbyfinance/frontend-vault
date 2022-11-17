import { AddMoneyToVaultBtn } from '@components/Common/MainButton/MainButton.styled';
import Image from 'next/image';
import React from 'react';
import { StyledRowCell, StyledRowItem } from './Table.styled';

const TableRow = ({ rowData, isVaultsPage }) => {
  const { icon, coinName, coinShortName, balance, apy, members, tvl } = rowData;
  return (
    <StyledRowItem>
      <StyledRowCell>
        <div>
          <Image src={icon} alt={coinShortName} height="64" width="64"></Image>
          <div>{coinName}</div> <span>{coinShortName}</span>
        </div>
      </StyledRowCell>
      <StyledRowCell>{balance}</StyledRowCell>
      <StyledRowCell>{apy}</StyledRowCell>
      <StyledRowCell>{members}</StyledRowCell>
      <StyledRowCell>{tvl}</StyledRowCell>
      <StyledRowCell>
        {isVaultsPage && <AddMoneyToVaultBtn>+ Add</AddMoneyToVaultBtn>}
      </StyledRowCell>
    </StyledRowItem>
  );
};

export default TableRow;
