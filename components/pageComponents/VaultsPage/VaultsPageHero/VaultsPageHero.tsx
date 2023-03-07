import React, { FC, useEffect, useRef, useState } from 'react';
import DropDownMenu from '@components/Common/DropDownMenu/DropDownMenu';
import { Lock, Members, Vaults } from '@icons/index';
import vaultPageHeroBackground from '@icons/vaultPageHeroBackground.svg';
import HeroCircle from '@images/HeroCircle.png';
import axios from 'axios';
import Image from 'next/image';
import { IHeaderStats } from 'types/stats';
import { useAccount, useNetwork } from 'wagmi';
import BtnArrow from './BtnArrow';
import ChainsList from './ChainsList';
import {
  StyledBoxBackground,
  StyledCircle,
  StyledDescription,
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

//dummy data for hero section values
const selectedNetwork = {
  totalValue: '$11M',
  vaults: 5,
  members: 227,
};

type NetworkInfoBlockType = {
  icon: JSX.Element;
  value: string | number;
  description: string;
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

const VaultsPageHero: FC = ({ data }: any) => {
  const [chainsOpen, setChainsOpen] = useState<boolean>(false);
  const [open, setOpen] = useState<boolean>(false);
  const [headerStatsData, setheaderStatsData] = useState<IHeaderStats>();

  const arrowRef: React.MutableRefObject<any> = useRef();
  const dropdownRef: React.MutableRefObject<any> = useRef();

  const { isConnected } = useAccount();

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const { data } = await axios.get('/api/stats', {
      headers: {
        'content-type': 'application/json',
      },
    });
    const { headerStats } = data.data;
    setheaderStatsData(headerStats);
  };
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
              value={headerStatsData?.totalValue}
              description="TOTAL VALUE LOCKED"
            />
            <NetworkInfoBlock
              icon={<Vaults />}
              value={headerStatsData?.vaults}
              description="VAULTS"
            />
            <NetworkInfoBlock
              icon={<Members />}
              value={headerStatsData?.members}
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

export async function getServerSideProps(context: any) {
  // const { data } = await axios.get('/api/stats',  {
  //   headers: {
  //     'content-type': 'application/json',
  //   },
  // });
  return {
    props: {
      // data:data,
    },
  };
}

export default VaultsPageHero;
