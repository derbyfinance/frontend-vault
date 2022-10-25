import React from 'react';
import Table from '../../../Table/Table';
import {
  StyledCoinsListContainer,
  StyledCoinsListHeader,
} from './VaultsPageList.styled';

const headers = ['NAME', 'BALANCE', 'APY', 'MEMBERS', 'TVL'];

const data = [
  {
    id: 1,
    icon: '/svgs/coins/USDC.svg',
    coinName: 'USD Coin',
    coinShortName: 'USDC',
    balance: 32000,
    apy: '11.4 %',
    members: '18000',
    tvl: '$ 1.7 M',
  },
  {
    id: 2,
    icon: '/svgs/coins/USDT.svg',
    coinName: 'USD Tether',
    coinShortName: 'USDT',
    balance: 45000,
    apy: '16.4 %',
    members: '1800',
    tvl: '$ 131.7 M',
  },
  {
    id: 3,
    icon: '/svgs/coins/DAI.svg',
    coinName: 'DAI',
    coinShortName: 'DAI',
    balance: 45000,
    apy: '1.4 %',
    members: '210',
    tvl: '$ 638 K',
  },
  {
    id: 4,
    icon: '/svgs/coins/ETH.svg',
    coinName: 'Ethereum',
    coinShortName: 'ETH',
    balance: 450000,
    apy: '0.4 %',
    members: '543',
    tvl: '$ 13.7 M',
  },
  {
    id: 5,
    icon: '/svgs/coins/WBTC.svg',
    coinName: 'Wrapped Bitcoin',
    coinShortName: 'WBTC',
    balance: 1800,
    apy: '8.1 %',
    members: '12',
    tvl: '$ 1.7 M',
  },
];

const VaultsPageList = () => {
  return (
    <StyledCoinsListContainer>
      <StyledCoinsListHeader>Available Vaults</StyledCoinsListHeader>
      <Table tableData={data} headers={headers} />
    </StyledCoinsListContainer>
  );
};

export default VaultsPageList;