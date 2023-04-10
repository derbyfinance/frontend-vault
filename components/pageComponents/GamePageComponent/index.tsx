import React, { FC, useEffect, useState } from 'react';
import { ApiService } from 'services/api.service';
import {
  IRace,
  IRaceBestPerformingVaults,
  IRaceKeyStats,
  IRaceLeaderboard,
} from 'types/race';
import SingleVaultDescription from '../SingleVaultPage/SingleVaultDescription/SingleVaultDescription';
import Counter from './Counter/Counter';
import HeaderAndDesc from './HeaderAndDesc/HeaderAndDesc';
import LeaderBoard from './Leaderboard/Leaderboard';
import PerformingTable from './PerformingTable/PerformingTable';
import RaceStatisticsComponent from './RaceStatistics/RaceStatisticsComponent';
import RaceTable from './RaceTable/RaceTable';
import {
  GameDescriptionContainer,
  GamePageBodyContainer,
  GamePageContainer,
  GamePageWrapper,
} from './index.styled';
import RaceInfo from './RaceStatistics/RaceInfo';

const description: string =
  "Oh no, don't touch that. That's some new specialized weather sensing equipment. Hey, hey, I've seen this one, I've seen this one. This is a classic, this is where Ralph dresses up as the man from space. Something wrong with the starter, so I hid it. Just turn around, McFly, and walk away. Are you deaf, McFly? Close the door and beat it. Well, aren't you going up to the lake tonight, you've been planning it for two weeks.";

const GamePageComponent: FC = () => {
  const [raceData, setRaceData] = useState<IRace>();
  const [leaderBoardData, setLeaderBoardData] = useState<IRaceLeaderboard[]>();
  const [performingVaultsData, setPerformingVaultsData] =
    useState<IRaceBestPerformingVaults[]>();
  const [raceKeyData, setRaceKeyData] = useState<IRaceKeyStats[]>();

  useEffect(() => {
    getRaceData();
  }, []);

  const getRaceData = async () => {
    try {
      const { data } = await ApiService.getRaceData();
      setRaceData(data.data);
      setLeaderBoardData(data.data.leaderBoard);
      setPerformingVaultsData(data.data.bestPerformingVaults);
      setRaceKeyData(data.data.keyStats);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <GamePageWrapper>
      <GamePageContainer>
        <GamePageBodyContainer>
          <HeaderAndDesc
            header={'The Game '}
            description={
              'Analyse, pick and follow your winners. Invest and allocate'
            }
          />
          <GameDescriptionContainer>
            <SingleVaultDescription
              description={description}
              vault={'Welcome to The Race'}
              imagePath={undefined}
            />
          </GameDescriptionContainer>
          {raceData ? (
            <Counter
              raceHeader={raceData?.header}
              nextRace={raceData?.header.nextRace}
            />
          ) : null}

          {leaderBoardData && <LeaderBoard tableData={leaderBoardData} />}

          {performingVaultsData && (
            <PerformingTable tableData={performingVaultsData} />
          )}

          {raceKeyData && <RaceTable tableData={raceKeyData} />}
        </GamePageBodyContainer>
        <RaceInfo/>
      </GamePageContainer>
    </GamePageWrapper>
  );
};
export default GamePageComponent;
