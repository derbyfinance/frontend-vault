import React from 'react';
import { StyledChain, StyledChainsList } from './VaultsPageHero.styled';

const ChainsList = () => {
  const chainsList = [
    { id: 1, title: 'Ethereum' },
    { id: 2, title: 'Optimism' },
    { id: 3, title: 'Arbitrum' },
    { id: 4, title: 'Binance Smart Chain' },
    { id: 5, title: 'Avalanche' },
    { id: 6, title: 'Polygon' },
    { id: 7, title: 'Fantom' },
  ];
  return (
    <StyledChainsList>
      <h6>Switch to:</h6>
      {chainsList.map((chain) => (
        <StyledChain key={chain.id}>{chain.title}</StyledChain>
      ))}
    </StyledChainsList>
  );
};

export default ChainsList;
