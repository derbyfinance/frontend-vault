import React, { FC } from 'react';
import VaultsPageHero from './VaultsPageHero/VaultsPageHero';
import VaultsPageList from './VaultsPageList/VaultsPageList';
import WalletInfo from './WalletInformation/WalletInfo';
import {
  StyledCoinsPart,
  StyledTableWrapper,
  StyledVaultsPageWrapper,
} from './index.styled';


const VaultsPageComponent:FC = () => {

  return (
    <StyledVaultsPageWrapper>
      <StyledTableWrapper>
      <StyledCoinsPart>
        <VaultsPageHero />
          <VaultsPageList />
      </StyledCoinsPart>
      <WalletInfo />
      </StyledTableWrapper>
    </StyledVaultsPageWrapper>
  );
};

export default VaultsPageComponent;
