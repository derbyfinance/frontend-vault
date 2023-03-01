import React, { useEffect, useState } from 'react';
import VaultsPageHero from './VaultsPageHero/VaultsPageHero';
import VaultsPageList from './VaultsPageList/VaultsPageList';
import WalletInfo from './WalletInformation/WalletInfo';
import {
  StyledCoinsPart,
  StyledTableWrapper,
  StyledVaultsPageWrapper,
} from './index.styled';


const VaultsPageComponent = () => {

  return (
    <StyledVaultsPageWrapper>
      <StyledCoinsPart>
        <VaultsPageHero />
        <StyledTableWrapper>
          <VaultsPageList />
          <WalletInfo />
        </StyledTableWrapper>
      </StyledCoinsPart>
    </StyledVaultsPageWrapper>
  );
};

export default VaultsPageComponent;
