import React, { Children } from 'react';
import {
  StyledCircle,
  StyledDescription,
  StyledIcon,
  StyledInfoBlockWrapper,
  StyledNetworkIcon,
  StyledNetworkInfo,
  StyledNetworkInfoSection,
  StyledNetworkTitle,
  StyledTitle,
  StyledValue,
  StyledValuePart,
  StyledHeroWrapper,
} from './styled';
import Image from 'next/image';
import {
  ArrowDown,
  EthereumNetwork,
  Lock,
  Members,
  Vaults,
} from '@icons/index';
import ethereumBig from '@images/EthereumBig.png';
import HeroCircle from '@images/HeroCircle.png';

const networkData = {
  title: 'Ethereum Network',
  totalValue: '$ 31.17M',
  vaults: 5,
  members: 2177,
};

const { title, icon, totalValue, vaults, members } = networkData;

const NetworkInfoBlock = ({ icon, value, description }) => {
  return (
    <StyledInfoBlockWrapper>
      <StyledIcon>{icon}</StyledIcon>
      <StyledValuePart alt="">
        <StyledValue>{value}</StyledValue>
        <StyledDescription>{description}</StyledDescription>
      </StyledValuePart>
    </StyledInfoBlockWrapper>
  );
};

const VaultsPageHero = () => {
  return (
    <StyledHeroWrapper>
      <StyledCircle>
        <Image src={HeroCircle} alt="Decorative Circle" />
      </StyledCircle>
      <StyledNetworkInfoSection>
        <StyledNetworkTitle>
          <EthereumNetwork />
          <StyledTitle>{title}</StyledTitle>
          <ArrowDown />
        </StyledNetworkTitle>
        <StyledNetworkInfo>
          <NetworkInfoBlock
            icon={<Lock />}
            value={totalValue}
            description="TOTAL VALUE LOCKED"
          />
          <NetworkInfoBlock
            icon={<Vaults />}
            value={vaults}
            description="VAULTS"
          />
          <NetworkInfoBlock
            icon={<Members />}
            value={members}
            description="MEMBERS"
          />
        </StyledNetworkInfo>
      </StyledNetworkInfoSection>
      <StyledNetworkIcon>
        <Image alt="Ethereum Image" src={ethereumBig} />
      </StyledNetworkIcon>
    </StyledHeroWrapper>
  );
};

export default VaultsPageHero;
