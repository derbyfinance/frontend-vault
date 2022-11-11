import { ConnectYourWallet } from '@components/MainButton/MainButton.styled';
import ConnectWalletModal from '@components/Modal/ConnectWalletModal/ConnectWalletModal';
import { WalletInfoLogo } from '@icons/index';
import React, { useState } from 'react';
import { StyledNotConnectedWrapper } from '../WalletInfo.styled';

const WalletInfoNotConnected = ({}) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);

  const closeModal = () => setIsOpen(false);

  return (
    <StyledNotConnectedWrapper>
      <ConnectWalletModal
        isOpen={isOpen}
        openModal={openModal}
        onClose={closeModal}
      />

      <WalletInfoLogo />
      <div>Go ahead, connect your wallet and try our super secure vault.</div>
      <ConnectYourWallet onClick={openModal}>
        Connect Your Wallet
      </ConnectYourWallet>
    </StyledNotConnectedWrapper>
  );
};

export default WalletInfoNotConnected;
