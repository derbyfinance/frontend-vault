import Image from 'next/image';
import React from 'react';
import { AddMoneyToVaultBtn } from '../../../MainButton/MainButton.styled';
import {
  StyledCoinsListItemTr,
  StyledCoinsListTD,
} from '../VaultsPageList.styled';

const CoinListItem = ({ coinData }) => {
  const { id, icon, coinName, coinShortName, balance, apy, members, tvl } =
    coinData;
  return (
    <StyledCoinsListItemTr>
      <StyledCoinsListTD>
        <div>
          <Image src={icon} alt="Coin Image" height="64" width="64"></Image>
          <div>{coinName}</div> <span>{coinShortName}</span>
        </div>
      </StyledCoinsListTD>
      <StyledCoinsListTD>{balance}</StyledCoinsListTD>
      <StyledCoinsListTD>{apy}</StyledCoinsListTD>
      <StyledCoinsListTD>{members}</StyledCoinsListTD>
      <StyledCoinsListTD>{tvl}</StyledCoinsListTD>
      <StyledCoinsListTD>
        {<AddMoneyToVaultBtn>+ Add</AddMoneyToVaultBtn>}
      </StyledCoinsListTD>
    </StyledCoinsListItemTr>
  );
};

export default CoinListItem;
