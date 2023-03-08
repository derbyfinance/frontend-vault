import React, { FC } from 'react';
import { useAccount } from 'wagmi';
import VaultsPageHero from './VaultsPageHero/VaultsPageHero';
import VaultsPageList from './VaultsPageList/VaultsPageList';
import WalletInfo from './WalletInformation/WalletInfo';
import {
  StyledCoinsPart,
  StyledTableWrapper,
  StyledVaultsPageWrapper,
} from './index.styled';

const VaultsPageComponent: FC = () => {
  const { isConnected } = useAccount();
  return (
    <StyledVaultsPageWrapper>
      <StyledTableWrapper isConnected={isConnected}>
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
