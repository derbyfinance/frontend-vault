import Image from 'next/image';
import React from 'react';
import { WalletInfoLogo } from '@icons/index';

import { ConnectYourWallet } from '../../../MainButton/MainButton.styled';

import { StyledWalletInfoContainer } from './WalletInfo.styled';
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
