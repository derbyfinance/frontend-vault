import React from 'react';
import Image from 'next/image';
import { useNetwork, useSwitchNetwork } from 'wagmi';
import {
  StyledChain,
  StyledChainTitle,
  StyledChainWrapper,
  StyledChainsList,
  StyledSwitchTo,
} from './VaultsPageHero.styled';
import { chainsIcons } from './chainsIcons';

const ChainsList = React.forwardRef((props, ref) => {
  const { chain } = useNetwork();
  const { chains, error, isLoading, pendingChainId, switchNetwork } =
    useSwitchNetwork();

  const handleCloseChains = () => {
    props.setChainsOpen(false);
  };

  return (
    <StyledChainsList onClick={handleCloseChains} ref={ref}>
      <StyledSwitchTo>SWITCH TO:</StyledSwitchTo>
      {chains.map((chain) => (
        <StyledChainWrapper
          key={chain.id}
          onClick={() => switchNetwork(chain.id)}
        >
          <StyledChain>
            <Image src={chainsIcons[chain.id]} alt={chain.name} />
            <StyledChainTitle>{chain.name}</StyledChainTitle>
          </StyledChain>
        </StyledChainWrapper>
      ))}
    </StyledChainsList>
  );
});

export default ChainsList;
