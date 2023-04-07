import React, { useEffect, useState } from 'react';
import { ApiService } from 'services/api.service';
import { IRaceKeyStats } from 'types/race';
import RaceStatisticsComponent from '../GamePageComponent/RaceStatistics/RaceStatisticsComponent';
import KeyStatisticsTable from './KeyStatisticsTable/KeyStatisticsTable';
import {
  GameDescriptionContainer,
  GameSinglePageBodyContainer,
  GameSinglePageContainer,
  GameSinglePageWrapper,
} from './PlayerDetailPage.styled';

const PlayerDetailPage = () => {
  const [raceKeyData, setRaceKeyData] = useState<IRaceKeyStats[]>();
  useEffect(() => {
    getRaceData();
  }, []);

  const getRaceData = async () => {
    try {
      const { data } = await ApiService.getRaceData();
      setRaceKeyData(data.data.keyStats);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <GameSinglePageWrapper>
      <GameSinglePageContainer>
        <GameSinglePageBodyContainer>
          <GameDescriptionContainer>
            <KeyStatisticsTable tableData={raceKeyData} />
          </GameDescriptionContainer>
        </GameSinglePageBodyContainer>
        <RaceStatisticsComponent />
      </GameSinglePageContainer>
    </GameSinglePageWrapper>
  );
};

export default PlayerDetailPage;
