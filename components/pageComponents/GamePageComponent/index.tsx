import React, { FC, useEffect, useState } from 'react';
import seeMoreIcon from '@icons/seeMore.svg';
import Image from 'next/image';
import { ApiService } from 'services/api.service';
import { IRace, IRaceBestPerformingVaults, IRaceLeaderboard } from 'types/race';
import SingleVaultDescription from '../SingleVaultPage/SingleVaultDescription/SingleVaultDescription';
import Counter from './Counter/Counter';
import HeaderAndDesc from './HeaderAndDesc/HeaderAndDesc';
import LeaderBoard from './Leaderboard/Leaderboard';
import PerformingTable from './PerformingTable/PerformingTable';
import RaceStatisticsComponent from './RaceStatistics/RaceStatisticsComponent';
import {
  GameDescriptionContainer,
  GamePageBodyContainer,
  GamePageContainer,
  GamePageWrapper,
  StyledImageMargin,
  StyledSeeMore,
  StyledWiderBox,
} from './index.styled';

const description: string =
  "Oh no, don't touch that. That's some new specialized weather sensing equipment. Hey, hey, I've seen this one, I've seen this one. This is a classic, this is where Ralph dresses up as the man from space. Something wrong with the starter, so I hid it. Just turn around, McFly, and walk away. Are you deaf, McFly? Close the door and beat it. Well, aren't you going up to the lake tonight, you've been planning it for two weeks.";

const headersLeaderBoard: string[] = [
  'NAME',
  'MEDALS',
  'STAKED',
  'PERFORMANCE',
];

const headersPerforming: string[] = ['NAME', 'ALLOCATED', 'PERFORMANCE'];

const GamePageComponent: FC = () => {
  const [raceData, setRaceData] = useState<IRace>();
  const [sliceIndexLeaderBoard, setSliceIndexLeaderBoard] = useState<number>(5);
  const [sliceIndexPerformingVaults, setSliceIndexPerformingVaults] =
    useState<number>(5);
  const [leaderBoardData, setLeaderBoardData] = useState<IRaceLeaderboard[]>();
  const [leaderBoardSliceData, setLeaderBoardSliceData] =
    useState<IRaceLeaderboard[]>();

  const [performingVaultsData, setPerformingVaultsData] =
    useState<IRaceBestPerformingVaults[]>();

  const [performingVaultsSliceData, setPerformingVaultsSliceData] =
    useState<IRaceBestPerformingVaults[]>();

  useEffect(() => {
    getRaceData();
  }, []);

  const getRaceData = async () => {
    try {
      const { data } = await ApiService.getRaceData();
      setRaceData(data.data);
      setLeaderBoardData(data.data.leaderBoard);
      setPerformingVaultsData(data.data.bestPerformingVaults);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    setLeaderBoardSliceData(leaderBoardData?.slice(0, sliceIndexLeaderBoard));
  }, [leaderBoardData, sliceIndexLeaderBoard]);

  useEffect(() => {
    setPerformingVaultsSliceData(
      performingVaultsData?.slice(0, sliceIndexPerformingVaults),
    );
  }, [performingVaultsData, sliceIndexPerformingVaults]);

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
          ) : null}
          <HeaderAndDesc
            header={'Leaderboard '}
            description={
              'Who are the best of the best. The 5 best are shown here as inspiration to follow. '
            }
          />
          <LeaderBoard
            tableData={leaderBoardSliceData}
            headers={headersLeaderBoard}
          />
          {leaderBoardData?.length > 5 ? (
            <StyledSeeMore
              onClick={() => {
                leaderBoardSliceData?.length > 5
                  ? setSliceIndexLeaderBoard((prev) => prev - 5)
                  : setSliceIndexLeaderBoard((prev) => prev + 5);
              }}
            >
              {leaderBoardSliceData?.length > 5 ? 'Hide' : 'See more'}
              <StyledImageMargin>
                <Image src={seeMoreIcon} alt={'see more'} />
              </StyledImageMargin>
            </StyledSeeMore>
          ) : (
            <StyledWiderBox />
          )}
          <HeaderAndDesc
            header={'Best Performing Vaults '}
            description={
              'Who are the best of the best. The 5 best are shown here as inspiration to follow.'
            }
          />
          <PerformingTable
            tableData={performingVaultsSliceData}
            headers={headersPerforming}
          />
          {performingVaultsData?.length > 5 ? (
            <StyledSeeMore
              onClick={() => {
                performingVaultsSliceData?.length > 5
                  ? setSliceIndexPerformingVaults((prev) => prev - 5)
                  : setSliceIndexPerformingVaults((prev) => prev + 5);
              }}
            >
              {performingVaultsSliceData?.length > 5 ? 'Hide' : 'See more'}
              <StyledImageMargin>
                <Image src={seeMoreIcon} alt={'see more'} />
              </StyledImageMargin>
            </StyledSeeMore>
          ) : (
            <StyledWiderBox />
          )}
        </GamePageBodyContainer>
        <RaceStatisticsComponent />
      </GamePageContainer>
    </GamePageWrapper>
  );
};
export default GamePageComponent;
