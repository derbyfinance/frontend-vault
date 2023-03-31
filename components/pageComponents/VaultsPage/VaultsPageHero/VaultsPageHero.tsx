import React, { FC, useContext, useEffect, useRef, useState } from 'react';
import DropDownMenu from '@components/Common/DropDownMenu/DropDownMenu';
import { addSeparators } from '@helpers/helperFunctions';
import { Lock, Members, Vaults } from '@icons/index';
import vaultPageHeroBackground from '@icons/vaultPageHeroBackground.svg';
import HeroCircle from '@images/HeroCircle.png';
import { NetworkContext } from '@pages/context/NetworkContext';
import Image from 'next/image';
import { IHeaderStats } from 'types/stats';
import BtnArrow from './BtnArrow';
import ChainsList from './ChainsList';
import {
  StyledBoxBackground,
  StyledCircle,
  StyledDescription,
  StyledEmptyDiv,
  StyledHeroContainer,
  StyledHeroWrapper,
  StyledIcon,
  StyledInfoBlockWrapper,
  StyledNetworkIcon,
  StyledNetworkIconContainer,
  StyledNetworkInfo,
  StyledNetworkInfoSection,
  StyledNetworkTitle,
  StyledValue,
  StyledValuePart,
} from './VaultsPageHero.styled';
import { chainIcons } from './chainIcons';

type NetworkInfoBlockType = {
  icon: JSX.Element;
  value: string | number;
  description: string;
};

export type INetworkData = {
  id: number;
  name: string;
};

const NetworkInfoBlock: FC<NetworkInfoBlockType> = ({
  icon,
  value,
  description,
}) => {
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
type VaultsPageHeroPropType = {
  headerStats: IHeaderStats;
  setNetworkId: Function;
};

const VaultsPageHero: FC<VaultsPageHeroPropType> = ({
  headerStats,
  setNetworkId,
}) => {
  const [open, setOpen] = useState<boolean>(false);

  const arrowRef: React.MutableRefObject<any> = useRef();
  const dropdownRef: React.MutableRefObject<any> = useRef();
  const { setNetwork, network } = useContext(NetworkContext);

  const changeChainHandler = (id: number) => {
    let networkData: INetworkData[] = NetworksData.filter(
      (network: INetworkData) => network.id === id,
    );
    setNetwork(networkData[0]);
    setNetworkId(id);
  };

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
      <StyledBoxBackground>
        <Image
          src={vaultPageHeroBackground}
          alt={''}
          height="220"
          color="blue"
        ></Image>
      </StyledBoxBackground>
      <StyledHeroWrapper>
        <StyledNetworkInfoSection>
          <StyledNetworkTitle>
            <Image
              src={chainIcons[network?.id]}
              alt={`${network?.name} image`}
            />
            <h2>{network.name}</h2>

            <StyledEmptyDiv ref={dropdownRef}>
              <DropDownMenu
                open={open}
                onOpen={onOpen}
                onClose={onClose}
                dropDownButton={<BtnArrow open={open} />}
              >
                <ChainsList
                  onClose={onClose}
                  changeChainHandler={changeChainHandler}
                />
              </DropDownMenu>
            </StyledEmptyDiv>
          </StyledNetworkTitle>
          <StyledNetworkInfo>
            <NetworkInfoBlock
              icon={<Lock />}
              value={
                headerStats?.totalValue &&
                addSeparators(headerStats?.totalValue)
              }
              description="TOTAL VALUE LOCKED"
            />
            <NetworkInfoBlock
              icon={<Vaults />}
              value={headerStats?.vaults && addSeparators(headerStats?.vaults)}
              description="VAULTS"
            />
            <NetworkInfoBlock
              icon={<Members />}
              value={
                headerStats?.members && addSeparators(headerStats?.members)
              }
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
              alt={`${network.name} Image`}
              src={chainIcons[network.id]}
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

const NetworksData: INetworkData[] = [
  { id: 1, name: 'Ethereum' },
  { id: 137, name: 'Polygon' },
  { id: 42161, name: 'Arbitrum One' },
  { id: 421613, name: 'Arbitrum Goerli' },
  { id: 10, name: 'Optimism' },
  { id: 5, name: 'Goerli' },
];
