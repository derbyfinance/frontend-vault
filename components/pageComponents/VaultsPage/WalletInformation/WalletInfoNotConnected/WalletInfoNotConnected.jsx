import { ConnectYourWallet } from '@components/MainButton/MainButton.styled';
import { WalletInfoLogo } from '@icons/index';
import React from 'react';
import { StyledNotConnectedWrapper } from '../WalletInfo.styled';

const WalletInfoNotConnected = () => {
  return (
    <StyledNotConnectedWrapper>
      <WalletInfoLogo />
      <div>Go ahead, connect your wallet and try our super secure vault.</div>
      <ConnectYourWallet>Connect Your Wallet</ConnectYourWallet>
    </StyledNotConnectedWrapper>
  );
};

export default WalletInfoNotConnected;
