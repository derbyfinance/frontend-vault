import React from 'react';
import Layout from '../../components/Layout/Layout';
import VaultsPageHero from '../../components/VaultsPage/VaultsPageHero/VaultsPageHero';
import VaultsPageList from '../../components/VaultsPage/VaultsPageList/VaultsPageList';
import WalletInfo from '../../components/VaultsPage/WalletInformation/WalletInfo';
import {
  StyledAvailableVaults,
  StyledCoinsPart,
  StyledCoinsPartHero,
  StyledConnectWallet,
  StyledVaultsPageWrapper,
} from './styled';

const VaultsPage = () => {
  return (
    <Layout>
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
    </Layout>
  );
};

export default VaultsPage;
