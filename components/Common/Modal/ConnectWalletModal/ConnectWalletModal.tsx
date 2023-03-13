import React, { FC, useState } from 'react';
import ErrorMessage from '@components/Common/ErrorMessage/ErrorMessage';
import { StyledConnectDisclaimer } from '@components/Layout/NavBar/NavBar.styled';
import SignIn from '@components/SignIn/SignIn';
import close from '@icons/close.svg';
import { DFConnectIcon } from '@icons/index';
import Image from 'next/image';
import Modal from '../Modal';
import {
  StyledCloseIcon,
  StyledModalConnectOptions,
  StyledModalLogoAndText,
  StyledErrorWrapper,
} from '../Modal.styled';

type ConnectWalletModalProps = {
  isOpen: boolean;
  onClose: Function;
};

const ConnectWalletModal: FC<ConnectWalletModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [walletDetected, setWalletDetected] = useState<boolean>(false);

  const walletDetectionHandler = (detection: boolean) => {
    setWalletDetected(detection);
  }
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <StyledCloseIcon>
        <Image onClick={() => onClose()} src={close} alt={'close'} />
      </StyledCloseIcon>
      <StyledModalLogoAndText>
        <DFConnectIcon />
        <h3>Connect Wallet</h3>
        <h4>to start using Derby Finance</h4>
      </StyledModalLogoAndText>
      {walletDetected && (
       <StyledErrorWrapper> <ErrorMessage message="wallet not detected. Connect or install wallet and retry" /></StyledErrorWrapper>
      )}
      <StyledModalConnectOptions>
        <SignIn closeModal={onClose} walletDetectionHandler={walletDetectionHandler}/>
      </StyledModalConnectOptions>
      <StyledConnectDisclaimer>
        By connecting, I accept Derby Finance’s
        <a href="#">terms of Service </a>
      </StyledConnectDisclaimer>
    </Modal>
  );
};

export default ConnectWalletModal;
