import React, { FC, useEffect, useState } from 'react';
import { StyledContainerWrapper } from '@components/Layout/Layout.styled';
import { ApiService } from 'services/api.service';
import { IHeaderStats, IVaultData } from 'types/stats';
import { useAccount } from 'wagmi';
import VaultsPageHero from './VaultsPageHero/VaultsPageHero';
import VaultsPageList from './VaultsPageList/VaultsPageList';
import WalletInfo from './WalletInformation/WalletInfo';
import { StyledCoinsPart, StyledVaultsPageWrapper } from './index.styled';

const VaultsPageComponent: FC = () => {
  const [tableData, setTableData] = useState<IVaultData[]>();
  const [headerStatsData, setheaderStatsData] = useState<IHeaderStats>();
  const [networkId, setNetworkId] = useState(1);

  useEffect(() => {
    getData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getData = async () => {
    const data = await ApiService.getData(networkId);
    const { vaults, headerStats } = data.data.data;
    setheaderStatsData(headerStats);
    setTableData(vaults);
  };
  return (
    <StyledVaultsPageWrapper>
      <StyledContainerWrapper>
        <StyledCoinsPart>
          <VaultsPageHero
            headerStats={headerStatsData}
            setNetworkId={setNetworkId}
          />
          <VaultsPageList tableData={tableData} />
        </StyledCoinsPart>
        <WalletInfo />
      </StyledContainerWrapper>
    </StyledVaultsPageWrapper>
  );
};

export default VaultsPageComponent;
