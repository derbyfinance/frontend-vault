import React from 'react';
import RaceStatisticsComponent from '../GamePageComponent/RaceStatistics/RaceStatisticsComponent';
import SingleVaultDescription from '../SingleVaultPage/SingleVaultDescription/SingleVaultDescription';
import {
  GameDescriptionContainer,
  GameSinglePageBodyContainer,
  GameSinglePageContainer,
  GameSinglePageWrapper,
} from './SingleGamePage.styled';

const description: string =
  "Oh no, don't touch that. That's some new specialized weather sensing equipment. Hey, hey, I've seen this one, I've seen this one. This is a classic, this is where Ralph dresses up as the man from space. Something wrong with the starter, so I hid it. Just turn around, McFly, and walk away. Are you deaf, McFly? Close the door and beat it. Well, aren't you going up to the lake tonight, you've been planning it for two weeks.";

const SingleGamePage = () => {
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
          </GameDescriptionContainer>
        </GameSinglePageBodyContainer>
        <RaceStatisticsComponent />
      </GameSinglePageContainer>
    </GameSinglePageWrapper>
  );
};

export default SingleGamePage;
