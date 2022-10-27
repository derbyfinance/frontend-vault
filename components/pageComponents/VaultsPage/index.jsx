import React from 'react';
import { StyledCoinsPart, StyledVaultsPageWrapper } from './index.styled';
import VaultsPageHero from './VaultsPageHero/VaultsPageHero';
import VaultsPageList from './VaultsPageList/VaultsPageList';
import WalletInfo from './WalletInformation/WalletInfo';
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
