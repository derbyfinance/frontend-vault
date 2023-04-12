import React, { useEffect, useState } from 'react';
import { ApiService } from 'services/api.service';
import { IRace } from 'types/race';
import RaceInfo from '../GamePageComponent/RaceStatistics/RaceInfo';
import SingleVaultDescription from '../SingleVaultPage/SingleVaultDescription/SingleVaultDescription';
import AllocationComponent from './AllocationComponent/AllocationComponent';
import SinglePageCounter from './SingleGameCounter/SingleGameCounter';
import {
  GameDescriptionContainer,
  GameSinglePageBodyContainer,
  GameSinglePageContainer,
  GameSinglePageWrapper,
} from './SingleGamePage.styled';

const description: string =
  "Oh no, don't touch that. That's some new specialized weather sensing equipment. Hey, hey, I've seen this one, I've seen this one. This is a classic, this is where Ralph dresses up as the man from space. Something wrong with the starter, so I hid it. Just turn around, McFly, and walk away. Are you deaf, McFly? Close the door and beat it. Well, aren't you going up to the lake tonight, you've been planning it for two weeks.";

const SingleGamePage = () => {
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
    <GameSinglePageWrapper>
      <GameSinglePageContainer>
        <GameSinglePageBodyContainer>
          <GameDescriptionContainer>
            <SingleVaultDescription
              description={description}
              vault={'Welcome to The Game'}
              imagePath={undefined}
            />
            <AllocationComponent/>
            {raceData ? (
              <SinglePageCounter
                raceHeader={raceData?.header}
                nextRace={raceData?.header.nextRace}
              />
            ) : null}
          </GameDescriptionContainer>
        </GameSinglePageBodyContainer>
        <RaceInfo/>
      </GameSinglePageContainer>
    </GameSinglePageWrapper>
  );
};

export default SingleGamePage;
