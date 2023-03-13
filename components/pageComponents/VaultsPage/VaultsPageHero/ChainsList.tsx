import React, { forwardRef } from 'react';
import Image from 'next/image';
import { useAccount, useSwitchNetwork } from 'wagmi';
import {
  StyledChain,
  StyledChainTitle,
  StyledChainWrapper,
  StyledChainsList,
  StyledSwitchTo,
} from './VaultsPageHero.styled';
import { chainIcons } from './chainIcons';

const ChainsList = ({ onClose }: { onClose: Function }) => {
  const { chains, switchNetwork } = useSwitchNetwork();
  const { isConnected } = useAccount();

  const handleSwitchNetwork = (id: number) => {
    if (isConnected) {
      switchNetwork(id);
      onClose();
    }
  };

  return (
    <StyledChainsList>
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
};
ChainsList.displayName = 'ChainsList';
export default ChainsList;
