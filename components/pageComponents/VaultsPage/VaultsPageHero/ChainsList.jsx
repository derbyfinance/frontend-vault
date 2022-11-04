import Image from 'next/image';
import React from 'react';
import {
  StyledChain,
  StyledChainsList,
  StyledChainTitle,
  StyledChainWrapper,
  StyledSwitchTo,
} from './VaultsPageHero.styled';

import Ethereum from '@images/chainsIcons/Ethereum.png';
import Optimism from '@images/chainsIcons/Optimism.png';
import Arbitrum from '@images/chainsIcons/Arbitrum.png';
import Binance from '@images/chainsIcons/Binance.png';
import Avalanche from '@images/chainsIcons/Avalanche.png';
import Polygon from '@images/chainsIcons/Polygon.png';
import Fantom from '@images/chainsIcons/Fantom.png';

const ChainsList = React.forwardRef((props, ref) => {
  const chainsList = [
    { id: 1, title: 'Ethereum', img: Ethereum, alt: 'eth' },
    { id: 2, title: 'Optimism', img: Optimism, alt: 'opt' },
    { id: 3, title: 'Arbitrum', img: Arbitrum, alt: 'arb' },
    { id: 4, title: 'Binance Smart Chain', img: Binance, alt: 'bin' },
    { id: 5, title: 'Avalanche', img: Avalanche, alt: 'ava' },
    { id: 6, title: 'Polygon', img: Polygon, alt: 'pol' },
    { id: 7, title: 'Fantom', img: Fantom, alt: 'fan' },
  ];
  return (
    <StyledChainsList ref={ref} isOpen={props.chainsOpen}>
      <StyledSwitchTo>SWITCH TO:</StyledSwitchTo>
      {chainsList.map((chain) => (
        <StyledChainWrapper key={chain.id}>
          <StyledChain>
            <Image src={chain.img} alt={chain.alt} />
            <StyledChainTitle>{chain.title}</StyledChainTitle>
          </StyledChain>
        </StyledChainWrapper>
      ))}
    </StyledChainsList>
  );
});

export default ChainsList;
