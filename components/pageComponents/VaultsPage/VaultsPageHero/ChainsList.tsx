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

const ChainsList = ({
  onClose,
  changeChainHandler,
}: {
  onClose: Function;
  changeChainHandler: Function;
}) => {
  const { chains, switchNetwork } = useSwitchNetwork();

  const handleSwitchNetwork = (id: number) => {
    changeChainHandler(id);
    onClose();
  };

  console.log(chains);

  return (
    <StyledChainsList>
      <StyledSwitchTo>SWITCH TO:</StyledSwitchTo>
      {chains.map((chain) => (
        <StyledChainWrapper
          key={chain.id}
          onClick={() => handleSwitchNetwork(chain.id)}
        >
          <StyledChain>
            <Image
              src={chainIcons[chain.id] ? chainIcons[chain.id] : chainIcons[1]}
              alt={chain.name}
            />
            <StyledChainTitle>{chain.name}</StyledChainTitle>
          </StyledChain>
        </StyledChainWrapper>
      ))}
    </StyledChainsList>
  );
};
ChainsList.displayName = 'ChainsList';
export default ChainsList;
