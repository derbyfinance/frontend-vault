import React from 'react';
import {
  StyledAvailableVaults,
  StyledCoinsPart,
  StyledCoinsPartHero,
  StyledConnectWallet,
  StyledVaultsPageWrapper,
} from './index.styled';
import VaultsPageHero from './VaultsPageHero/VaultsPageHero';
import VaultsPageList from './VaultsPageList/VaultsPageList';
import WalletInfo from './WalletInformation/WalletInfo';

const VaultsPageComponent = () => {
  return (
    <StyledVaultsPageWrapper>
      <StyledCoinsPart>
        <StyledCoinsPartHero>
          <VaultsPageHero />
        </StyledCoinsPartHero>
        <StyledAvailableVaults>
          <VaultsPageList />
        </StyledAvailableVaults>
      </StyledCoinsPart>
      <StyledConnectWallet>
        <WalletInfo />
      </StyledConnectWallet>
    </StyledVaultsPageWrapper>
  );
};

export default VaultsPageComponent;
