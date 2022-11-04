import React, { useState } from 'react';
import {
  StyledCircle,
  StyledDescription,
  StyledIcon,
  StyledInfoBlockWrapper,
  StyledNetworkIcon,
  StyledNetworkInfo,
  StyledNetworkInfoSection,
  StyledNetworkTitle,
  StyledValue,
  StyledValuePart,
  StyledHeroWrapper,
  StyledHeroContainer,
  StyledArrowIcon,
} from './VaultsPageHero.styled';
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
import ChainsList from './ChainsList';
import { useRef, useEffect } from 'react';

const networkData = {
  title: 'Ethereum Network',
  totalValue: '$ 31.17M',
  vaults: 5,
  members: 2177,
};

const { title, totalValue, vaults, members } = networkData;

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
  const [chainsOpen, setChainsOpen] = useState(false);
  const arrowRef = useRef();
  const dropdownRef = useRef();

  useEffect(() => {
    const handler = (e) => {
      if (
        !dropdownRef.current?.contains(e.target) &&
        !arrowRef.current?.contains(e.target)
      ) {
        setChainsOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  return (
    <StyledHeroContainer>
      {chainsOpen && <ChainsList ref={dropdownRef} />}
      <StyledHeroWrapper>
        <StyledCircle>
          <Image src={HeroCircle} alt="Decorative Circle" />
        </StyledCircle>
        <StyledNetworkInfoSection>
          <StyledNetworkTitle>
            <EthereumNetwork />
            <h2>{title}</h2>
            <StyledArrowIcon
              onClick={() => {
                setChainsOpen((chainsOpen) => !chainsOpen);
              }}
              isOpen={chainsOpen}
              ref={arrowRef}
            >
              <ArrowDown isOpen={chainsOpen} />
            </StyledArrowIcon>
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
    </StyledHeroContainer>
  );
};

export default VaultsPageHero;
