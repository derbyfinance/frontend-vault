import React from 'react';
import {
  StyledArrowDown,
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
import totalValueSVG from '../../../../public/svgs/lock.svg';
import vaultsSVG from '../../../../public/svgs/vaults.svg';
import membersSVG from '../../../../public/svgs/members.svg';
import ethereumSVG from '../../../../public/svgs/ethereum.svg';
import arrowDownSVG from '../../../../public/svgs/arrowDown.svg';
import circleSVG from '../../../../public/svgs/circle.svg';
import ethereumBigSVG from '../../../../public/svgs/ethereumBig.png';
import Image from 'next/image';

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
      <StyledIcon>
        <Image src={icon} alt="" />
      </StyledIcon>
      <StyledValuePart>
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
        <Image src={circleSVG} />
      </StyledCircle>
      <StyledNetworkInfoSection>
        <StyledNetworkTitle>
          <Image src={ethereumSVG} />
          <StyledTitle>{title}</StyledTitle>
          <Image src={arrowDownSVG} />
        </StyledNetworkTitle>
        <StyledNetworkInfo>
          <NetworkInfoBlock
            icon={totalValueSVG}
            value={totalValue}
            description="TOTAL VALUE LOCKED"
          />
          <NetworkInfoBlock
            icon={vaultsSVG}
            value={vaults}
            description="VAULTS"
          />
          <NetworkInfoBlock
            icon={membersSVG}
            value={members}
            description="MEMBERS"
          />
        </StyledNetworkInfo>
      </StyledNetworkInfoSection>
      <StyledNetworkIcon>
        <Image alt="Ehereum Image" src={ethereumBigSVG} />
      </StyledNetworkIcon>
    </StyledHeroWrapper>
  );
};

export default VaultsPageHero;
