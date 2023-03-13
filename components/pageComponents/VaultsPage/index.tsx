import React, { FC, useEffect, useState } from 'react';
import { ApiService } from 'services/api.service';
import { IHeaderStats, IVaultData } from 'types/stats';
import { useAccount } from 'wagmi';
import VaultsPageHero from './VaultsPageHero/VaultsPageHero';
import VaultsPageList from './VaultsPageList/VaultsPageList';
import WalletInfo from './WalletInformation/WalletInfo';
import {
  StyledCoinsPart,
  StyledTableWrapper,
  StyledVaultsPageWrapper,
} from './index.styled';

const VaultsPageComponent: FC = () => {
  const { isConnected } = useAccount();

  const [tableData, setTableData] = useState<IVaultData[]>();
  const [headerStatsData, setheaderStatsData] = useState<IHeaderStats>();

  useEffect(() => {
    getData();
  },[]);

  const getData = async () => {
    const data = await ApiService.getData();
    const { vaults, headerStats } = data.data.data;
    setheaderStatsData(headerStats);
    setTableData(vaults);
  };
  return (
    <StyledVaultsPageWrapper>
      <StyledTableWrapper isConnected={isConnected}>
        <StyledCoinsPart>
          <VaultsPageHero headerStats={headerStatsData} />
          <VaultsPageList tableData={tableData} />
        </StyledCoinsPart>
        <WalletInfo />
      </StyledTableWrapper>
    </StyledVaultsPageWrapper>
  );
};

export default VaultsPageComponent;
