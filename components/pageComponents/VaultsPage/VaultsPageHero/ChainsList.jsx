import Image from 'next/image';
import React from 'react';
import {
  StyledChain,
  StyledChainsList,
  StyledChainTitle,
  StyledChainWrapper,
  StyledSwitchTo,
} from './VaultsPageHero.styled';
import { chainsIcons } from './chainsIcons';
import { useNetwork, useSwitchNetwork } from 'wagmi';

const ChainsList = React.forwardRef((props, ref) => {
  const { chain } = useNetwork();
  const { chains, error, isLoading, pendingChainId, switchNetwork } =
    useSwitchNetwork();
  //make sure that the chain has switched
  console.log(chain);
  return (
    <StyledChainsList ref={ref} isOpen={props.chainsOpen}>
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
