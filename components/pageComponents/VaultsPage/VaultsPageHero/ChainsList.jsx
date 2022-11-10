import Image from 'next/image';
import React from 'react';
import {
  StyledChain,
  StyledChainsList,
  StyledChainTitle,
  StyledChainWrapper,
  StyledSwitchTo,
} from './VaultsPageHero.styled';

const ChainsList = React.forwardRef((props, ref) => {
  const { setSelectedNetworkId, chainsList } = props;
  return (
    <StyledChainsList ref={ref} isOpen={props.chainsOpen}>
      <StyledSwitchTo>SWITCH TO:</StyledSwitchTo>
      {chainsList.map((chain) => (
        <StyledChainWrapper
          key={chain.id}
          onClick={() => setSelectedNetworkId(chain.id)}
        >
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
