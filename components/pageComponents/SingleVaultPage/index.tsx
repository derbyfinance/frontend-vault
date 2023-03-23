import React, { useEffect, useState } from 'react';
import KeyStatisticsItem from '@components/Common/KeyStatisticItem/KeyStatisticsItem';
import { StyledContainerWrapper } from '@components/Layout/Layout.styled';
import ReusableTable from '@components/ReusableTable/ReusableTable';
import {
  currencyFormatter,
  percentageFormatter,
} from '@helpers/helperFunctions';
import { ApiService } from 'services/api.service';
import { IVaultData } from 'types/stats';
import WalletInfo from '../VaultsPage/WalletInformation/WalletInfo';
import PerformanceGraph from './PerformanceGraph/PerformanceGraph';
import SingleVaultDescription from './SingleVaultDescription/SingleVaultDescription';
import SingleVaultInfo from './SingleVaultInfo/SingleVaultInfo';
import TreeMapGraph from './TreeMapGraph/TreeMapGraph';
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

const SingleVaultPageComponent = ({ vaultInfo }) => {
  const [description, setDescription] = useState('second');
  const [dataSingleVault, setDataSingleVault] = useState([]);
  const [vaultStats, setVaultStats] = useState<any>({});
  const [optionIndex, setOptionIndex] = useState<string>('price');

  const options = ['D', 'W', 'M', 'Y', 'All'];

  const [view, setView] = useState('D');

  const [iconPath, setIconPath] = useState<string>();

  useEffect(() => {
    getData();
    getVaultDataById();
  }, []);

  const getData = async () => {
    const data = await ApiService.getData();
    const { vaults } = data.data.data;
    const vault: IVaultData = vaults.filter((item: IVaultData) => {
      return item.coinShortName === vaultInfo;
    });
    if (vault[0] !== undefined) {
      setIconPath(vault[0].icon);
    }
  };

  const getVaultDataById = async () => {
    try {
      const { data } = await ApiService.getUserVaultById(vaultInfo);
      setDescription(data.data.description);
      setDataSingleVault(data.data.vaultAllocations);
      setVaultStats(data.data.vaultStats.data);
    } catch (error) {
      console.log(error);
    }
  };
  const setDataForGraphHandler = (i: string) => {
    setOptionIndex(i)
  };

  const headersSingleVault = ['NAME', 'PROTOCOL', 'WEIGHT', 'VALUE'];

  return (
    <StyledSingleVaultPageWrapper>
      <StyledContainerWrapper>
        <StyledSingleVaultPart>
          <StyledVaultInformation>
            Vault information {vaultInfo?.toUpperCase()}
          </StyledVaultInformation>
          <StyledHeaderText>
            Technical information regarding the performance of your selected
            vault.
          </StyledHeaderText>
          <SingleVaultDescription
            imagePath={iconPath}
            description={description}
            vault={vaultInfo}
          />
          <SingleVaultInfo vaultStats={vaultStats} />
          <StyledPerformanceChart>
            <StyledChartTitleOptions>
              <StyledChartTitle>
                Historical Performance USDC Vault
              </StyledChartTitle>
              <StyledChartOptions>
                {options.map((option) => (
                  <StyledChartOption
                    onClick={() => setView(option)}
                    active={view === option}
                    key={option}
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
      </StyledContainerWrapper>
    </StyledSingleVaultPageWrapper>
  );
};

export default SingleVaultPageComponent;
