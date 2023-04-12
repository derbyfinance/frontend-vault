import React, { useEffect, useState } from 'react';
import { ApiService } from 'services/api.service';
import { IRaceKeyStats, IRaceLeaderboard } from 'types/race';
import RaceStatisticsComponent from '../GamePageComponent/RaceStatistics/RaceStatisticsComponent';
import PerformanceGraph from '../SingleVaultPage/PerformanceGraph/PerformanceGraph';
import {
  StyledChartOption,
  StyledChartOptions,
  StyledChartTitle,
  StyledChartTitleOptions,
} from '../SingleVaultPage/index.styled';
import FollowPeopleTable from './FollowPeopleTable/FollowPeopleTable';
import KeyStatisticsTable from './KeyStatisticsTable/KeyStatisticsTable';
import {
  GameSinglePageBodyContainer,
  GameSinglePageContainer,
  GameSinglePageWrapper,
} from './PlayerDetailPage.styled';

const PlayerDetailPage = () => {
  const [raceKeyData, setRaceKeyData] = useState<IRaceKeyStats[]>();
  const [leaderBoardData, setLeaderBoardData] = useState<IRaceLeaderboard[]>();
  const [optionIndex, setOptionIndex] = useState<string>('price');

  const options = ['D', 'W', 'M', 'Y', 'All'];

  const [view, setView] = useState('D');

  useEffect(() => {
    getRaceData();
  }, []);

  const getRaceData = async () => {
    try {
      const { data } = await ApiService.getRaceData();
      setRaceKeyData(data.data.keyStats);
      setLeaderBoardData(data.data.leaderBoard);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <GameSinglePageWrapper>
      <GameSinglePageContainer>
        <GameSinglePageBodyContainer>
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
            vaultInfo={'vaultInfo'}
          />
          {raceKeyData && <KeyStatisticsTable tableData={raceKeyData} />}
          {leaderBoardData && <FollowPeopleTable tableData={leaderBoardData} />}
        </GameSinglePageBodyContainer>
        <RaceStatisticsComponent />
      </GameSinglePageContainer>
    </GameSinglePageWrapper>
  );
};

export default PlayerDetailPage;
