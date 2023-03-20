import React, { FC, useState } from 'react';
import { ConnectYourWallet } from '@components/Common/MainButton/MainButton.styled';
import ConnectWalletModal from '@components/Common/Modal/ConnectWalletModal/ConnectWalletModal';
import { WalletInfoLogo } from '@icons/index';
import {
  StyledNotConnectedText,
  StyledNotConnectedWrapper,
} from '../WalletInfo.styled';

const WalletInfoNotConnected: FC = ({}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const openModal = () => setIsOpen(true);

  const closeModal = () => setIsOpen(false);

  return (
    <StyledNotConnectedWrapper>
      <ConnectWalletModal isOpen={isOpen} onClose={closeModal} />
      <WalletInfoLogo />
      <StyledNotConnectedText>
        Go ahead, connect your wallet and try our super secure vault.
      </StyledNotConnectedText>
      <ConnectYourWallet onClick={openModal}>
        Connect Your Wallet
      </ConnectYourWallet>
    </StyledNotConnectedWrapper>
  );
};

export default WalletInfoNotConnected;
