import { StyledConnectDisclaimer } from '@components/NavBar/NavBar.styled';
import SignIn from '@components/SignIn/SignIn';
import { DFConnectIcon } from '@icons/index';
import React, { useState } from 'react';
import Modal from '../Modal';
import {
  StyledModalConnectOptions,
  StyledModalLogoAndText,
} from '../Modal.styled';

const ConnectWalletModal = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <StyledModalLogoAndText>
        <DFConnectIcon />
        <h3>Connect Wallet</h3>
        <h4>to start using Derby Finance</h4>
      </StyledModalLogoAndText>
      <StyledModalConnectOptions>
        <SignIn />
      </StyledModalConnectOptions>
      <StyledConnectDisclaimer>
        By connecting, I accept Derby Finance’s
        <a href="#">terms of Service </a>
      </StyledConnectDisclaimer>
    </Modal>
  );
};

export default ConnectWalletModal;