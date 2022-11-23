import React from 'react';
import VaultsPageHero from './VaultsPageHero/VaultsPageHero';
import VaultsPageList from './VaultsPageList/VaultsPageList';
import WalletInfo from './WalletInformation/WalletInfo';
import { StyledCoinsPart, StyledVaultsPageWrapper } from './index.styled';

const VaultsPageComponent = () => {
  return (
    <StyledVaultsPageWrapper>
      <StyledCoinsPart>
        <VaultsPageHero />
        <VaultsPageList />
      </StyledCoinsPart>
      <WalletInfo />
    </StyledVaultsPageWrapper>
  );
};

export default VaultsPageComponent;
