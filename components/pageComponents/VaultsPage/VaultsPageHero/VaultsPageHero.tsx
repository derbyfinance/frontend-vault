import React, { FC, useEffect, useRef, useState } from 'react';
import { Lock, Members, Vaults } from '@icons/index';
import HeroCircle from '@images/HeroCircle.png';
import Image from 'next/image';
import { useAccount, useNetwork } from 'wagmi';
import ChainsList from './ChainsList';
import {
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
  StyledNetworkIconContainer,
} from './VaultsPageHero.styled';
import { chainIcons } from './chainIcons';
import DropDownMenu from '@components/Common/DropDownMenu/DropDownMenu';
import BtnArrow from './BtnArrow';

//dummy data for hero section values
const selectedNetwork = {
  totalValue: '$11M',
  vaults: 5,
  members: 227,
};

type NetworkInfoBlockType = {
  icon:JSX.Element,
  value: string | number,
  description: string,
}

const NetworkInfoBlock: FC<NetworkInfoBlockType> = ({ icon, value, description }) => {
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

const VaultsPageHero: FC = () => {
  const [chainsOpen, setChainsOpen] = useState<boolean>(false);
  const [open, setOpen] = useState<boolean>(false);

  const arrowRef: React.MutableRefObject<any> = useRef();
  const dropdownRef: React.MutableRefObject<any> = useRef();

  const { isConnected } = useAccount();

  //some default value, until we figure out what to show when wallet is not connected
  const { chain = { id: 1, name: 'Ethereum' } } = useNetwork();

  useEffect(() => {
    const handler = (e: Event) => {
      if (
        !dropdownRef.current?.contains(e.target) &&
        !arrowRef.current?.contains(e.target)
      ) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  const onOpen = (): void => {
    setOpen(true);
  };
  const onClose = (): void => {
    setOpen(false);
  };

  return (
    <StyledHeroContainer>
      <StyledHeroWrapper>
        <StyledNetworkInfoSection>
          <StyledNetworkTitle>
            <Image src={chainIcons[chain?.id]} alt={`${chain?.name} image`} />
            <h2>{chain.name}</h2>
            {isConnected && (
              <DropDownMenu
                open={open}
                onOpen={onOpen}
                onClose={onClose}
                dropDownButton={<BtnArrow open={open} />}
              >
                <ChainsList ref={dropdownRef} />
              </DropDownMenu>
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
        <StyledNetworkIconContainer>
          <StyledCircle>
            <Image src={HeroCircle} alt="Decorative Circle" />
          </StyledCircle>
          <StyledNetworkIcon>
            <Image
              alt={`${chain.name} Image`}
              src={chainIcons[chain.id]}
              width={'80px'}
              height={'120px'}
            />
          </StyledNetworkIcon>
        </StyledNetworkIconContainer>
      </StyledHeroWrapper>
    </StyledHeroContainer>
  );
};

export default VaultsPageHero;
