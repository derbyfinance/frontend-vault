import React from 'react';
import {
  StyledCoinsListTable,
  StyledCoinsListTh,
} from '../VaultsPageList.styled';
import CoinListItem from './CoinListItem';

const CoinList = ({ coinsData }) => {
  return (
    <StyledCoinsListTable>
      <thead>
        <tr>
          <StyledCoinsListTh>NAME</StyledCoinsListTh>
          <StyledCoinsListTh>BALANCE</StyledCoinsListTh>
          <StyledCoinsListTh>APY</StyledCoinsListTh>
          <StyledCoinsListTh>MEMBERS</StyledCoinsListTh>
          <StyledCoinsListTh>TVL</StyledCoinsListTh>
        </tr>
      </thead>
      <tbody>
        {coinsData.map((el) => (
          <CoinListItem key={el.id} coinData={el} />
        ))}
      </tbody>
    </StyledCoinsListTable>
  );
};

export default CoinList;
