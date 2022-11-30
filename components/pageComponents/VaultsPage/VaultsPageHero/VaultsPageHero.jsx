import React, { useEffect, useRef, useState } from 'react';
import { ArrowDown, Lock, Members, Vaults } from '@icons/index';
import HeroCircle from '@images/HeroCircle.png';
import Image from 'next/image';
import { useAccount, useNetwork } from 'wagmi';
import ChainsList from './ChainsList';
import {
  StyledArrowIcon,
  StyledCircle,
  StyledDescription,
  StyledHeroContainer,
  StyledHeroWrapper,
  StyledIcon,
  StyledInfoBlockWrapper,
  StyledNetworkIcon,
  StyledNetworkInfo,
  StyledNetworkInfoSection,
  StyledNetworkTitle,
  StyledValue,
  StyledValuePart,
} from './VaultsPageHero.styled';
import { chainIcons } from './chainIcons';

//dummy data for hero section values
const selectedNetwork = {
  totalValue: '$11M',
  vaults: 5,
  members: 227,
};

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
  const { isConnected } = useAccount();
  const [chainsOpen, setChainsOpen] = useState(false);
  const arrowRef = useRef();
  const dropdownRef = useRef();
  //some default value, until we figure out what to show when wallet is not connected
  const { chain = { id: 1, name: 'Ethereum' } } = useNetwork();

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

  const handleChainsOpen = () => {
    setChainsOpen(!chainsOpen);
  };

  return (
    <StyledHeroContainer>
      {chainsOpen && (
        <ChainsList setChainsOpen={setChainsOpen} ref={dropdownRef} />
      )}
      <StyledHeroWrapper>
        <StyledCircle>
          <Image src={HeroCircle} alt="Decorative Circle" />
        </StyledCircle>
        <StyledNetworkInfoSection>
          <StyledNetworkTitle>
            <Image src={chainIcons[chain?.id]} alt={`${chain?.name} image`} />
            <h2>{chain.name}</h2>
            {isConnected && (
              <StyledArrowIcon
                onClick={() => {
                  setChainsOpen((chainsOpen) => !chainsOpen);
                }}
                isOpen={chainsOpen}
                ref={arrowRef}
              >
                <ArrowDown isOpen={chainsOpen} />
              </StyledArrowIcon>
            )}
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
            alt={`${chain.name} Image`}
            src={chainIcons[chain.id]}
            width={'80px'}
            height={'120px'}
          />
        </StyledNetworkIcon>
      </StyledHeroWrapper>
    </StyledHeroContainer>
  );
};

export default VaultsPageHero;
