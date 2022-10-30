import React from 'react';
import { WalletInfoLogo } from '@icons/index';
import { StyledWalletInfoContainer } from './WalletInfo.styled';
import { ConnectYourWallet } from '@components/MainButton/MainButton.styled';
const WalletInfo = () => {
  return (
    <StyledWalletInfoContainer>
      <WalletInfoLogo />
      <p>Go ahead, connect your wallet and try our super secure vault.</p>
      <ConnectYourWallet>Connect Your Wallet</ConnectYourWallet>
    </StyledWalletInfoContainer>
  );
};

export default WalletInfo;
