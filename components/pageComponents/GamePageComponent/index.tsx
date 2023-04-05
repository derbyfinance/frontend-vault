import React, { FC, useEffect, useState } from 'react';
import seeMoreIcon from '@icons/seeMore.svg';
import Image from 'next/image';
import { ApiService } from 'services/api.service';
import { IRace, IRaceLeaderboard } from 'types/race';
import SingleVaultDescription from '../SingleVaultPage/SingleVaultDescription/SingleVaultDescription';
import Counter from './Counter/Counter';
import HeaderAndDesc from './HeaderAndDesc/HeaderAndDesc';
import LeaderBoard from './Leaderboard/Leaderboard';
import RaceStatisticsComponent from './RaceStatistics/RaceStatisticsComponent';
import {
  GameDescriptionContainer,
  GamePageBodyContainer,
  GamePageContainer,
  GamePageWrapper,
  StyledSeeMore,
} from './index.styled';

const description: string =
  "Oh no, don't touch that. That's some new specialized weather sensing equipment. Hey, hey, I've seen this one, I've seen this one. This is a classic, this is where Ralph dresses up as the man from space. Something wrong with the starter, so I hid it. Just turn around, McFly, and walk away. Are you deaf, McFly? Close the door and beat it. Well, aren't you going up to the lake tonight, you've been planning it for two weeks.";

const headers: string[] = ['NAME', 'MEDALS', 'STAKED', 'PErformance'];

const GamePageComponent: FC = () => {
  const [raceData, setRaceData] = useState<IRace>();
  const [sliceIndex, setSliceIndex] = useState<number>(5);
  const [leaderBoardData, setLeaderBoardData] = useState<IRaceLeaderboard[]>();
  const [leaderBoardSliceData, setLeaderBoardSliceData] =
    useState<IRaceLeaderboard[]>();

  useEffect(() => {
    getRaceData();
  }, []);

  const getRaceData = async () => {
    try {
      const { data } = await ApiService.getRaceData();
      setRaceData(data.data);
      setLeaderBoardData(data.data.leaderBoard);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    setLeaderBoardSliceData(leaderBoardData?.slice(0, sliceIndex));
  }, [leaderBoardData, sliceIndex]);


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
          <HeaderAndDesc
            header={'Leaderboard '}
            description={
              'Who are the best of the best. The 5 best are shown here as inspiration to follow. '
            }
          />
          <LeaderBoard tableData={leaderBoardSliceData} headers={headers} />
          <StyledSeeMore onClick={() => setSliceIndex((prev) => prev + 5)}>
            See more
            <Image src={seeMoreIcon} alt={'see more'} />{' '}
          </StyledSeeMore>
        </GamePageBodyContainer>
        <RaceStatisticsComponent />
      </GamePageContainer>
    </GamePageWrapper>
  );
};
export default GamePageComponent;
