import React, { useEffect, useState } from 'react';
import { ApiService } from 'services/api.service';
import { IRaceKeyStats, IRaceLeaderboard } from 'types/race';
import RaceStatisticsComponent from '../GamePageComponent/RaceStatistics/RaceStatisticsComponent';
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
            <KeyStatisticsTable tableData={raceKeyData} />
            <FollowPeopleTable tableData={leaderBoardData} />
        </GameSinglePageBodyContainer>
        <RaceStatisticsComponent />
      </GameSinglePageContainer>
    </GameSinglePageWrapper>
  );
};

export default PlayerDetailPage;
