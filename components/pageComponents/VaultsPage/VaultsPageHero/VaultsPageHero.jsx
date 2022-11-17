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
import { ArrowDown, Lock, Members, Vaults } from '@icons/index';
import HeroCircle from '@images/HeroCircle.png';
import Ethereum from '@images/chainsIcons/Ethereum.svg';
import Optimism from '@images/chainsIcons/Optimism.svg';
import Arbitrum from '@images/chainsIcons/Arbitrum.svg';
import Binance from '@images/chainsIcons/Binance.svg';
import Avalanche from '@images/chainsIcons/Avalanche.svg';
import Polygon from '@images/chainsIcons/Polygon.svg';
import Fantom from '@images/chainsIcons/Fantom.svg';
import ChainsList from './ChainsList';
import { useRef, useEffect } from 'react';

const chainsList = [
  {
    id: 1,
    title: 'Ethereum',
    img: Ethereum,
    alt: 'eth',
    totalValue: '$ 11.27M',
    vaults: 2,
    members: 2456,
  },
  {
    id: 2,
    title: 'Optimism',
    img: Optimism,
    alt: 'opt',
    totalValue: '$ 36.17M',
    vaults: 8,
    members: 1216,
  },
  {
    id: 3,
    title: 'Arbitrum',
    img: Arbitrum,
    alt: 'arb',
    totalValue: '$ 28.17M',
    vaults: 4,
    members: 4577,
  },
  {
    id: 4,
    title: 'Binance Smart Chain',
    img: Binance,
    alt: 'bin',
    totalValue: '$ 571.17M',
    vaults: 14,
    members: 345677,
  },
  {
    id: 5,
    title: 'Avalanche',
    img: Avalanche,
    alt: 'ava',
    totalValue: '$ 51.0M',
    vaults: 7,
    members: 217567,
  },
  {
    id: 6,
    title: 'Polygon',
    img: Polygon,
    alt: 'pol',
    totalValue: '$ 52.12M',
    vaults: 5,
    members: 67177,
  },
  {
    id: 7,
    title: 'Fantom',
    img: Fantom,
    alt: 'fan',
    totalValue: '$ 39.17M',
    vaults: 32,
    members: 247,
  },
];
const networkData = {
  title: 'Ethereum Network',
  totalValue: '$ 31.17M',
  vaults: 5,
  members: '2,177',
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
  const [selectedNetworkId, setSelectedNetworkId] = useState(3);
  const [selectedNetwork, setSelectedNetwork] = useState(
    chainsList.find((chain) => chain.id === selectedNetworkId),
  );
  const [chainsOpen, setChainsOpen] = useState(false);
  const arrowRef = useRef();
  const dropdownRef = useRef();

  useEffect(() => {
    setSelectedNetwork(
      chainsList.find((chain) => chain.id === selectedNetworkId),
    );
  }, [selectedNetworkId]);

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
      {chainsOpen && (
        <ChainsList
          ref={dropdownRef}
          chainsList={chainsList}
          setSelectedNetworkId={setSelectedNetworkId}
        />
      )}
      <StyledHeroWrapper>
        <StyledCircle>
          <Image src={HeroCircle} alt="Decorative Circle" />
        </StyledCircle>
        <StyledNetworkInfoSection>
          <StyledNetworkTitle>
            <Image src={selectedNetwork.img} />
            <h2>{selectedNetwork.title}</h2>
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
              value={selectedNetwork.totalValue}
              description="TOTAL VALUE LOCKED"
            />
            <NetworkInfoBlock
              icon={<Vaults />}
              value={selectedNetwork.vaults}
              description="VAULTS"
            />
            <NetworkInfoBlock
              icon={<Members />}
              value={selectedNetwork.members}
              description="MEMBERS"
            />
          </StyledNetworkInfo>
        </StyledNetworkInfoSection>
        <StyledNetworkIcon>
          <Image
            alt={`${selectedNetwork.title} Image`}
            src={selectedNetwork.img}
            width={'80px'}
            height={'120px'}
          />
        </StyledNetworkIcon>
      </StyledHeroWrapper>
    </StyledHeroContainer>
  );
};

export default VaultsPageHero;
