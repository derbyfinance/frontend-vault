import Image from 'next/image';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  StyledChain,
  StyledChainsList,
  StyledChainTitle,
  StyledChainWrapper,
  StyledSwitchTo,
} from './VaultsPageHero.styled';
import { chainsIcons } from './chainsIcons';
import { selectChain } from 'redux/chains';
import { useNetwork } from 'wagmi';

const ChainsList = React.forwardRef((props, ref) => {
  const { chains } = useSelector((state) => state.chains);
  const dispatch = useDispatch();
  return (
    <StyledChainsList ref={ref} isOpen={props.chainsOpen}>
      <StyledSwitchTo>SWITCH TO:</StyledSwitchTo>
      {chains.map((chain) => (
        <StyledChainWrapper
          key={chain.id}
          onClick={() => dispatch(selectChain(chain.id))}
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
