import React, { forwardRef } from 'react';
import Image from 'next/image';
import { useSwitchNetwork } from 'wagmi';
import {
  StyledChain,
  StyledChainTitle,
  StyledChainWrapper,
  StyledChainsList,
  StyledSwitchTo,
} from './VaultsPageHero.styled';
import { chainIcons } from './chainIcons';

const ChainsList = React.forwardRef((props, ref) => {
  const { chains, switchNetwork } = useSwitchNetwork();

  const handleSwitchNetwork = (id) => {
    switchNetwork(id);
  };

  return (
    <StyledChainsList ref={ref}>
      <StyledSwitchTo>SWITCH TO:</StyledSwitchTo>
      {chains.map((chain) => (
        <StyledChainWrapper
          key={chain.id}
          onClick={() => handleSwitchNetwork(chain.id)}
        >
          <StyledChain>
            <Image src={chainIcons[chain.id]} alt={chain.name} />
            <StyledChainTitle>{chain.name}</StyledChainTitle>
          </StyledChain>
        </StyledChainWrapper>
      ))}
    </StyledChainsList>
  );
});

export default ChainsList;
