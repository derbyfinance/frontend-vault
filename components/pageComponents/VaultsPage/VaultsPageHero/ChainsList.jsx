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
  console.log(ref, 'ref');
  console.log(props, 'props');
  const { chain } = useNetwork();
  const { chains, error, isLoading, pendingChainId, switchNetwork } =
    useSwitchNetwork();
  //make sure that the chain has switched
  console.log(chain);

  const handleCloseChains = () => {
    props.setChainsOpen(false);
  };

  return (
    <StyledChainsList
      onClick={handleCloseChains}
      ref={ref}
      isOpen={props.chainIsOpen}
    >
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
