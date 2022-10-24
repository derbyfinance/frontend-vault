import React from 'react';
import { StyledCoinsListItemTr } from '../VaultsPageList.styled';

const CoinListItem = ({ coinData }) => {
  const { id, icon, coinName, coinShortName, balance, apy, members, tvl } =
    coinData;
  return (
    <StyledCoinsListItemTr>
      <td>
        <p>
          {coinName} {coinShortName}
        </p>
      </td>
      <td>{balance}</td>
      <td>{apy}</td>
      <td>{members}</td>
      <td>{tvl}</td>
    </StyledCoinsListItemTr>
  );
};

export default CoinListItem;
