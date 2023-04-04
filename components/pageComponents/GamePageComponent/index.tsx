import React, { FC, useEffect, useState } from 'react';
import { ApiService } from 'services/api.service';
import { IRace, IRaceHeader } from 'types/race';
import SingleVaultDescription from '../SingleVaultPage/SingleVaultDescription/SingleVaultDescription';
import Counter from './Counter/Counter';
import RaceStatisticsComponent from './RaceStatistics/RaceStatisticsComponent';
import {
  GameDescriptionContainer,
  GamePageBodyContainer,
  GamePageContainer,
  GamePageWrapper,
} from './index.styled';

const description: string =
  "Oh no, don't touch that. That's some new specialized weather sensing equipment. Hey, hey, I've seen this one, I've seen this one. This is a classic, this is where Ralph dresses up as the man from space. Something wrong with the starter, so I hid it. Just turn around, McFly, and walk away. Are you deaf, McFly? Close the door and beat it. Well, aren't you going up to the lake tonight, you've been planning it for two weeks.";

const GamePageComponent: FC = () => {
  const [raceData, setRaceData] = useState<IRace>();

  useEffect(() => {
    getRaceData();
  }, []);

  const getRaceData = async () => {
    try {
      const { data } = await ApiService.getRaceData();
      setRaceData(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <GamePageWrapper>
      <GamePageContainer>
        <GamePageBodyContainer>
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
          ) : (
            ''
          )}
        </GamePageBodyContainer>
        <RaceStatisticsComponent />
      </GamePageContainer>
    </GamePageWrapper>
  );
};
export default GamePageComponent;
