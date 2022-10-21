import React from 'react';
import Layout from '../../components/Layout/Layout';
import VaultsPageHero from '../../components/VaultsPage/VaultsPageHero/VaultsPageHero';
import { StyledAvailableVaults, StyledCoinsPart, StyledCoinsPartHero, StyledConnectWallet, StyledVaultsPageWrapper } from './styled';

const VaultsPage = () => {
  return <Layout>
    <StyledVaultsPageWrapper>
      <StyledCoinsPart>
        <StyledCoinsPartHero>
          <VaultsPageHero />
        </StyledCoinsPartHero>
        <StyledAvailableVaults></StyledAvailableVaults>
      </StyledCoinsPart>
      <StyledConnectWallet></StyledConnectWallet>
    </StyledVaultsPageWrapper>
  </Layout>;
};

export default VaultsPage;
