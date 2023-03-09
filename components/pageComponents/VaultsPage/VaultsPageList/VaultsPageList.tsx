import React, { FC, useEffect, useState } from 'react';
import Table from '@components/Common/Table/Table';
import { TableDataType } from 'types/table/tableDataTypes';
import {
  StyledCoinsListHeader,
} from './VaultsPageList.styled';
import { ApiService } from 'services/api.service';
import { IVaultData } from 'types/stats';

const headers: string[] = ['Assets', 'Wallet balance', 'APY', 'Members', 'TVL'];

// TODO: remove mock data this comes from backend

export const data: TableDataType[] = [
  {
    id: 1,
    icon: '/images/usdc.svg',
    coinName: 'USD Coin',
    coinShortName: 'USDC',
    balance: 32000,
    apy: '11.4 %',
    members: '180',
    tvl: '$ 1.7 M',
  },
  {
    id: 2,
    icon: '/images/usdt.svg',
    coinName: 'USD Tether',
    coinShortName: 'USDT',
    balance: 45000,
    apy: '16.4 %',
    members: '800',
    tvl: '$ 131.7 M',
  },
  {
    id: 3,
    icon: '/images/dai.svg',
    coinName: 'DAI',
    coinShortName: 'DAI',
    balance: 45000,
    apy: '1.4 %',
    members: '210',
    tvl: '$ 638 K',
  },
  {
    id: 4,
    icon: '/images/ETH.svg',
    coinName: 'Ethereum',
    coinShortName: 'ETH',
    balance: 450000,
    apy: '0.4 %',
    members: '543',
    tvl: '$ 13.7 M',
  },
  {
    id: 5,
    icon: '/images/BTC.svg',
    coinName: 'Wrapped Bitcoin',
    coinShortName: 'WBTC',
    balance: 450000,
    apy: '8.1 %',
    members: '12',
    tvl: '$ 1.7 M',
  },
];

const VaultsPageList:FC = () => {

  const [tableData, setTableData] = useState<IVaultData[]>();

  useEffect(() => {
    getData();
  });
  const getData = async () => {
    const data = await ApiService.getData();
    const { vaults } = data.data.data;
    setTableData(vaults);
  };

  return (
    <>
        <StyledCoinsListHeader>Explore available vaults.</StyledCoinsListHeader>
        <Table tableData={tableData} headers={headers} />
    </>
  );
};

export default VaultsPageList;
