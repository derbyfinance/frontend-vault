import React, { useEffect, useState } from 'react';
import { formatterStandard } from '@helpers/helperFunctions';
import ArrowDown from '@icons/ArrowDown';
import BronzeMedal from '@icons/BronzeMedal.svg';
import GoldMedal from '@icons/GoldMedal.svg';
import PortfolioIcon from '@icons/PortfolioIcon.svg';
import RewardsIcon from '@icons/RewardsIcon.svg';
import Rocket from '@icons/Rocket.svg';
import SilverMedal from '@icons/SilverMedal.svg';
import Stats from '@icons/Stats.svg';
import StatsGraph from '@icons/StatsGraph.svg';
import arrowUp from '@images/singleVaultIcons/arrowUp.svg';
import Image from 'next/image';
import Link from 'next/link';
import { ApiService } from 'services/api.service';
import { INFTWallet } from 'types/nft';
import {
  StyleRaceStatistics,
  StyleYourRace,
  StyleYourWallet,
  StyledButton,
  StyledChangeLabel,
  StyledMedalItem,
  StyledMedalsRow,
  StyledMedalsRowTextContainer,
  StyledRaceStatisticsHeader,
  StyledRaceStatisticsPerformanceText,
  StyledRaceStatisticsRow,
  StyledRaceStatisticsSub,
  StyledRaceStatisticsText,
  StyledRaceWalletHeader,
} from './RaceStatisticsComponent.styled';

const RaceStatisticsComponent = () => {
  const [nftData, setNftData] = useState<INFTWallet>();
  useEffect(() => {
    getNft();
  }, []);

  const getNft = async () => {
    try {
      const { data } = await ApiService.getNft();
      setNftData(data.data);
    } catch (error) {}
  };

  return (
    <StyleRaceStatistics>
      <StyleYourRace>
        <StyledRaceStatisticsHeader>Your Race</StyledRaceStatisticsHeader>
        <StyledRaceStatisticsSub>
          Your Race performance statistics
        </StyledRaceStatisticsSub>
        <StyledRaceStatisticRow
          icon={Stats}
          name={'Staked amount'}
          price={formatterStandard.format(nftData?.NFT.stakedAmount)}
          border={true}
        />
        <StyledRaceStatisticRowPerformance
          performance={nftData?.NFT.performance}
          performancePercentage={nftData?.NFT.performancePercentage}
        />
        <StyledRaceStatisticRow
          icon={Rocket}
          name={'Rewards'}
          price={nftData?.NFT.rewards}
          border={true}
        />
      </StyleYourRace>
      <StyledMedalsRow>
        <StyledRaceStatisticMedalItem
          quantity={nftData?.NFT.medals.gold}
          name={'Gold'}
          icon={GoldMedal}
        />
        <StyledRaceStatisticMedalItem
          quantity={nftData?.NFT.medals.silver}
          name={'Silver'}
          icon={SilverMedal}
        />
        <StyledRaceStatisticMedalItem
          quantity={nftData?.NFT.medals.bronze}
          name={'Bronze'}
          icon={BronzeMedal}
        />
      </StyledMedalsRow>
      <StyleYourWallet>
        <StyledRaceWalletHeader>Your Wallet</StyledRaceWalletHeader>
        <StyledRaceStatisticsSub>
          What you have and how its performed
        </StyledRaceStatisticsSub>
        <StyledRaceStatisticRow
          icon={PortfolioIcon}
          name={'Portfolio'}
          price={formatterStandard.format(nftData?.wallet.portfolio)}
          border={true}
        />
        <StyledRaceStatisticRowPerformance
          performance={nftData?.wallet.performance}
          performancePercentage={nftData?.wallet.performancePercentage}
        />
        <StyledRaceStatisticRow
          icon={RewardsIcon}
          name={'Rewards'}
          price={nftData?.wallet.rewards}
          border={false}
        />
        <Link href={`/game/player/1`}>
          <StyledButton>More info</StyledButton>
        </Link>
      </StyleYourWallet>
    </StyleRaceStatistics>
  );
};

export default RaceStatisticsComponent;

const StyledRaceStatisticRow = ({ icon, name, price, border }) => {
  return (
    <StyledRaceStatisticsRow border={border}>
      <StyledRaceStatisticsText>
        <Image src={icon} alt={'close'} />
        <span>{name}</span>
      </StyledRaceStatisticsText>
      <StyledRaceStatisticsText>
        {price} <div>DRB</div>{' '}
      </StyledRaceStatisticsText>
    </StyledRaceStatisticsRow>
  );
};

const StyledRaceStatisticRowPerformance = ({
  performance,
  performancePercentage,
}) => {
  return (
    <StyledRaceStatisticsRow border={true}>
      <StyledRaceStatisticsText>
        <Image src={StatsGraph} alt={'close'} />
        <span>Performance</span>
      </StyledRaceStatisticsText>
      <StyledRaceStatisticsPerformanceText>
        <span>+{performance}</span>
        <StyledChangeLabel positive={true}>
          <div>{performancePercentage}%</div>
          {true ? <Image src={arrowUp} alt={'arrow'} /> : <ArrowDown />}
        </StyledChangeLabel>
      </StyledRaceStatisticsPerformanceText>
    </StyledRaceStatisticsRow>
  );
};
const StyledRaceStatisticMedalItem = ({ icon, quantity, name }) => {
  return (
    <StyledMedalItem>
      <Image src={icon} alt={'arrow'} />
      <StyledMedalsRowTextContainer disable={quantity == 0}>
        <div>
          {quantity}
          <span>x</span>
        </div>
        <span>{name}</span>
      </StyledMedalsRowTextContainer>
    </StyledMedalItem>
  );
};
