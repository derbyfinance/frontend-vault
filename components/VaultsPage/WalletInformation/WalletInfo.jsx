import Image from 'next/image';
import React from 'react';

import { ConnectYourWallet } from '../../MainButton/MainButton.styled';

import { StyledWalletInfoContainer } from './WalletInfo.styled';
const WalletInfo = () => {
  return (
    <StyledWalletInfoContainer>
      <Image
        alt="Logo Wallet"
        layout="intrinsic"
        src="/svgs/ConnectWalletLogo.svg"
        width="121"
        height="86"
      />
      <p>Go ahead, connect your wallet and try our super secure vault.</p>

      <ConnectYourWallet>Connect Your Wallet</ConnectYourWallet>
    </StyledWalletInfoContainer>
  );
};

export default WalletInfo;
