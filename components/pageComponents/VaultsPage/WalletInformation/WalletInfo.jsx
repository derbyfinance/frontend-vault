import React from 'react';
import { WalletInfoLogo } from '@icons/index';
import { StyledWalletInfoContainer } from './WalletInfo.styled';
import { ConnectYourWallet } from '@components/MainButton/MainButton.styled';
import WalletInfoConnected from './WalletInfoConnected/WalletInfoConnected';
import WalletInfoNotConnected from './WalletInfoNotConnected/WalletInfoNotConnected';
const WalletInfo = () => {
  const isConnected = false;
  return (
    <div>
      {isConnected ? <WalletInfoConnected /> : <WalletInfoNotConnected />}
    </div>
  );
};

export default WalletInfo;
