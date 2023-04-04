import React from 'react';
import RaceStatisticsComponent from './RaceStatistics/RaceStatisticsComponent';
import { GamePageWrapper } from './index.styled';

const GamePageComponent = () => {
  return (
    <GamePageWrapper>
      <RaceStatisticsComponent />
    </GamePageWrapper>
  );
};
export default GamePageComponent;
