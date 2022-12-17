import React, { useEffect, useState } from 'react';
import KeyStatisticsItem from '@components/Common/KeyStatisticItem/KeyStatisticsItem';
import Table from '@components/Common/Table/Table';
import ReusableTable from '@components/ReusableTable/ReusableTable';
import {
  currencyFormatter,
  percentageFormatter,
} from '@helpers/helperFunctions';
import { data } from '../VaultsPage/VaultsPageList/VaultsPageList';
import WalletInfo from '../VaultsPage/WalletInformation/WalletInfo';
import PerformanceGraph from './PerformanceGraph/PerformanceGraph';
import SingleVaultDescription from './SingleVaultDescription/SingleVaultDescription';
import SingleVaultInfo from './SingleVaultInfo/SingleVaultInfo';
import {
  StyledChartOption,
  StyledChartOptions,
  StyledChartTitle,
  StyledChartTitleOptions,
  StyledHeaderText,
  StyledKeyStatistics,
  StyledPerformanceChart,
  StyledSingleVaultPageWrapper,
  StyledSingleVaultPart,
  StyledVaultInformation,
} from './index.styled';
import TreeMapGraph from './TreeMapGraph/TreeMapGraph';

const description = `Oh no, don't touch that. That's some new specialized weather sensing equipment. 
                    Hey, hey, I've seen this one, I've seen this one. This is a classic, this is 
                    where Ralph dresses up as the man from space. Something wrong with the starter, 
                    so I hid it. Just turn around, McFly, and walk away. Are you deaf, McFly? 
                    Close the door and beat it. Well, aren't you going up to the lake tonight, you've been 
                    planning it for two weeks.`;

const SingleVaultPageComponent = ({ vaultInfo }) => {
  const options = ['D', 'W', 'M', 'Y', 'All'];

  const [view, setView] = useState('D');

  const setChartView = (value) => {
    if (typeof window !== 'undefined') {
      setView(value);
      localStorage.setItem('chartView', value);
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setView(localStorage.getItem('chartView'));
    }
  }, []);

  const dataSingleVault = [
    {
      id: 1,
      icon: '/images/ProtocolIcons/yearn-finance.svg',
      name: 'USDC yVault',
      network: 'ETH',
      protocol: 'Yearn Finance',
      value: 1150000,
      weight: 11.64,
    },
    {
      id: 2,
      icon: '/images/ProtocolIcons/aave.svg',
      name: 'USD Coin',
      network: 'ETH',
      protocol: 'Aave',
      value: 925000,
      weight: 9.35,
    },
    {
      id: 3,
      icon: '/images/ProtocolIcons/gearbox.svg',
      name: 'dUSDC',
      network: 'ETH',
      protocol: 'Gearbox',
      value: 743000,
      weight: 7.51,
    },
    {
      id: 4,
      icon: '/images/ProtocolIcons/harvest-finance-farm.svg',
      name: 'fUSDC',
      network: 'ETH',
      protocol: 'Harvest Finance',
      value: 287000,
      weight: 2.9,
    },
  ];

  const headersSingleVault = ['NAME', 'PROTOCOL', 'WEIGHT', 'VALUE'];

  return (
    <StyledSingleVaultPageWrapper>
      <StyledSingleVaultPart>
        <StyledVaultInformation>
          Vault information {vaultInfo?.toUpperCase()}
        </StyledVaultInformation>
        <StyledHeaderText>
          Technical information regarding the performance of your selected
          vault.
        </StyledHeaderText>
        <SingleVaultDescription description={description} vault={vaultInfo} />
        <SingleVaultInfo />
        <StyledPerformanceChart>
          <StyledChartTitleOptions>
            <StyledChartTitle>
              Historical Performance USDC Vault
            </StyledChartTitle>
            <StyledChartOptions>
              {options.map((option) => (
                <StyledChartOption
                  onClick={() => setChartView(option)}
                  active={view === option}
                >
                  {option}
                </StyledChartOption>
              ))}
            </StyledChartOptions>
          </StyledChartTitleOptions>
          <PerformanceGraph chartView={view} />
        </StyledPerformanceChart>
        <StyledVaultInformation>
          Key statistics USDC Vault
        </StyledVaultInformation>
        <StyledHeaderText>
          The most important data of this vault, use it to compare
        </StyledHeaderText>
        <StyledKeyStatistics>
          <KeyStatisticsItem
            value={currencyFormatter(9900000)}
            description="Total Value Locked"
          />
          <KeyStatisticsItem value={'$157.74'} description="Price LP Token" />
          <KeyStatisticsItem
            value={percentageFormatter(6.32)}
            description="Annual Percentage Yield"
          />
          <KeyStatisticsItem value="USD Stablecoin" description="Type" />
          <KeyStatisticsItem value={593} description="Depositors" />
          <KeyStatisticsItem value="6 Days" description="Time To Rebalance" />
        </StyledKeyStatistics>
        <StyledVaultInformation>USDC Vault allocation</StyledVaultInformation>
        <StyledHeaderText>
          How is this specific vault split into different protocols, what are
          you investing in specifically.
        </StyledHeaderText>
        <TreeMapGraph />
        <ReusableTable data={dataSingleVault} headers={headersSingleVault} />
      </StyledSingleVaultPart>
      <WalletInfo />
    </StyledSingleVaultPageWrapper>
  );
};

export default SingleVaultPageComponent;
