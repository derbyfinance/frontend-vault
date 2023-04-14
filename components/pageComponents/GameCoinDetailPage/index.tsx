import React, { useEffect, useState } from 'react';
import KeyStatisticsItem from '@components/Common/KeyStatisticItem/KeyStatisticsItem';
import { StyledContainerWrapper } from '@components/Layout/Layout.styled';
import {
  currencyFormatter,
  percentageFormatter,
} from '@helpers/helperFunctions';
import { ApiService } from 'services/api.service';
import { IVaultData } from 'types/stats';
import RaceInfo from '../GamePageComponent/RaceStatistics/RaceInfo';
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

type IVaultStats = {
  price: number;
  apy: number;
  tvl: number;
  date: string;
};
// game/detail/USDC

const GameCoinDetailPage = ({ vaultInfo }) => {
  const [description, setDescription] = useState('second');
  const [vaultStats, setVaultStats] = useState<any>({});
  const [optionIndex, setOptionIndex] = useState<string>('price');
  const [keyStatisticsData, setKeyStatisticsData] = useState<IVaultStats>();

  const options = ['D', 'W', 'M', 'Y', 'All'];

  const [view, setView] = useState('D');
  const [iconPath, setIconPath] = useState<string>('/images/usdc.svg');

  useEffect(() => {
    getData();
    getVaultDataById();
  }, []);

  const getData = async () => {
    const data = await ApiService.getData(vaultInfo);
    const { vaults } = data.data.data;
    const vault: IVaultData = vaults.filter((item: IVaultData) => {
      return item.coinShortName === vaultInfo;
    });
    console.log(vault);
    if (vault[0] !== undefined) {
      setIconPath(vault[0].icon);
    }
  };

  const getVaultDataById = async () => {
    try {
      const { data } = await ApiService.getUserVaultById(vaultInfo);
      setDescription(data.data.description);
      setVaultStats(data.data.vaultStats);
      setKeyStatisticsData(
        data.data.vaultStats.data[data.data.vaultStats.data.length - 1],
      );
    } catch (error) {
      console.log(error);
    }
  };
  const setDataForGraphHandler = (i: string) => {
    setOptionIndex(i);
  };

  return (
    <StyledSingleVaultPageWrapper>
      <StyledContainerWrapper>
        <StyledSingleVaultPart>
          <StyledVaultInformation>
            Vault information
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
          <SingleVaultInfo
            vaultStats={vaultStats.data}
            setDataForGraphHandler={setDataForGraphHandler}
          />
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
            <PerformanceGraph
              chartView={view}
              optionIndex={optionIndex}
              vaultInfo={vaultInfo}
            />
          </StyledPerformanceChart>
          <StyledVaultInformation>
            Key statistics USDC Vault
          </StyledVaultInformation>
          <StyledHeaderText>
            The most important data of this vault, use it to compare
          </StyledHeaderText>
          <StyledKeyStatistics>
            <KeyStatisticsItem
              value={currencyFormatter(keyStatisticsData?.tvl)}
              description="Total Value Locked"
            />
            <KeyStatisticsItem
              value={percentageFormatter(keyStatisticsData?.apy)}
              description="Annual Percentage Yield"
            />
            <KeyStatisticsItem value="USD Stablecoin" description="Type" />
          </StyledKeyStatistics>
        </StyledSingleVaultPart>
        <RaceInfo />
      </StyledContainerWrapper>
    </StyledSingleVaultPageWrapper>
  );
};

export default GameCoinDetailPage;
