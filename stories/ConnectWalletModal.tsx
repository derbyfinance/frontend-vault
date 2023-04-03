import React, { FC, useState } from 'react';
import ErrorMessage from '@components/Common/ErrorMessage/ErrorMessage';
import Modal from '@components/Common/Modal/Modal';
import { StyledConnectDisclaimer } from '@components/Layout/NavBar/NavBar.styled';
import ConnectVia from '@components/SignIn/ConnectVia/ConnectVia';
import { SignInContainer } from '@components/SignIn/SignIn.styled';
import { Coinbase, DFConnectIcon, MetaMask, WalletConnect } from '@icons/index';
import Image from 'next/image';
import {
  StyledCloseIcon,
  StyledErrorWrapper,
  StyledModalConnectOptions,
  StyledModalLogoAndText,
} from './Modal.styled';

type ConnectWalletModalProps = {
  isOpen: boolean;
  onClose: Function;
  walletDetected: boolean;
};

const ConnectWalletModal: FC<ConnectWalletModalProps> = ({
  isOpen,
  onClose,
  walletDetected,
}) => {
  //TODO
  // const [walletDetected, setWalletDetected] = useState<boolean>(false);

  const walletIcons = {
    MetaMask: <MetaMask />,
    'Coinbase Wallet': <Coinbase />,
    WalletConnect: <WalletConnect />,
  };
  const connectors = [
    {
      name: 'MetaMask',
      id: 'MetaMask',
    },
    {
      name: 'Coinbase Wallet',
      id: 'CoinbaseWallet',
    },
    {
      name: 'WalletConnect',
      id: 'WalletConnect',
    },
  ];

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <StyledCloseIcon>
        <Image
          onClick={() => onClose()}
          src="/stories/assets/close.svg"
          alt={'close'}
          width={20}
          height={20}
        />
      </StyledCloseIcon>
      <StyledModalLogoAndText>
        <DFConnectIcon />
        <h3>Connect Wallet</h3>
        <h4>to start using Derby Finance</h4>
      </StyledModalLogoAndText>
      {walletDetected && (
        <StyledErrorWrapper>
          {' '}
          <ErrorMessage message="wallet not detected. Connect or install wallet and retry" />
        </StyledErrorWrapper>
      )}
      <StyledModalConnectOptions>
        <SignInContainer>
          {connectors.map((connector) => (
            <ConnectVia
              key={connector.id}
              clickHandler={() => false}
              walletName={connector.name}
              svg={walletIcons[connector.name]}
            />
          ))}
        </SignInContainer>
      </StyledModalConnectOptions>
      <StyledConnectDisclaimer>
        By connecting, I accept Derby Finance’s
        <a href="#">terms of Service </a>
      </StyledConnectDisclaimer>
    </Modal>
  );
};

export default ConnectWalletModal;
