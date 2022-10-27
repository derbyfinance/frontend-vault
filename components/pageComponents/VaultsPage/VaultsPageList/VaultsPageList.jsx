import Table from '@components/Table/Table';
import React from 'react';
import { StyledCoinsListHeader } from './VaultsPageList.styled';

const headers = ['NAME', 'BALANCE', 'APY', 'MEMBERS', 'TVL'];

const data = [
  {
    id: 1,
    icon: '/images/Usdc.png',
    coinName: 'USD Coin',
    coinShortName: 'USDC',
    balance: 32000,
    apy: '11.4 %',
    members: '18000',
    tvl: '$ 1.7 M',
  },
  {
    id: 2,
    icon: '/images/Usdt.png',
    coinName: 'USD Tether',
    coinShortName: 'USDT',
    balance: 45000,
    apy: '16.4 %',
    members: '1800',
    tvl: '$ 131.7 M',
  },
  {
    id: 3,
    icon: '/images/Dai.png',
    coinName: 'DAI',
    coinShortName: 'DAI',
    balance: 45000,
    apy: '1.4 %',
    members: '210',
    tvl: '$ 638 K',
  },
  {
    id: 4,
    icon: '/images/Eth.png',
    coinName: 'Ethereum',
    coinShortName: 'ETH',
    balance: 450000,
    apy: '0.4 %',
    members: '543',
    tvl: '$ 13.7 M',
  },
  {
    id: 5,
    icon: '/images/Wbtc.png',
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
    <>
      <StyledCoinsListHeader>Available Vaults</StyledCoinsListHeader>
      <Table tableData={data} headers={headers} />
    </>
  );
};

export default VaultsPageList;
