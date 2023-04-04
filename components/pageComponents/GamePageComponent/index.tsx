import React, { FC } from 'react';
import SingleVaultDescription from '../SingleVaultPage/SingleVaultDescription/SingleVaultDescription';
import RaceStatisticsComponent from './RaceStatistics/RaceStatisticsComponent';
import {
  GameDescriptionContainer,
  GamePageContainer,
  GamePageWrapper,
} from './index.styled';

const description: string =
  "Oh no, don't touch that. That's some new specialized weather sensing equipment. Hey, hey, I've seen this one, I've seen this one. This is a classic, this is where Ralph dresses up as the man from space. Something wrong with the starter, so I hid it. Just turn around, McFly, and walk away. Are you deaf, McFly? Close the door and beat it. Well, aren't you going up to the lake tonight, you've been planning it for two weeks.";

const GamePageComponent: FC = () => {
  return (
    <GamePageWrapper>
      <GamePageContainer>
        <GameDescriptionContainer>
          <SingleVaultDescription
            description={description}
            vault={'Welcome to The Race'}
            imagePath={undefined}
          />
        </GameDescriptionContainer>
        <RaceStatisticsComponent />
      </GamePageContainer>
    </GamePageWrapper>
  );
};
export default GamePageComponent;
