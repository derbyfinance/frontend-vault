import React, { FC } from 'react';
import {
  copyToClipboard,
  hideMiddleCharacters,
} from '@helpers/helperFunctions';
import Image from 'next/image';
import copy from 'public/icons/copyIcon.svg';
import etherscan from 'public/icons/etherscan.svg';
import { useAccount, useDisconnect, useNetwork } from 'wagmi';
import { StyledAddressWrapper } from '../WalletAddressButton/WalletAddressButton.styled';
import {
  StyledAddressAvatar,
  StyledButtonWalletMenu,
  StyledButtonWrapper,
  StyledConnectedWith,
  StyledRowIcon,
  StyledRowOnline,
  StyledRowText,
  StyledWalletAndButtons,
  StyledWalletMenuContent,
  StyledWalletMenuRows,
  StyledWalletRow,
} from './WalletDropdown.styled';

type WalletDropdownPropsType = {
  openModal: Function;
  address: string;
};

const WalletDropdown: FC<WalletDropdownPropsType> = ({
  address,
  openModal,
}) => {
  const { disconnect } = useDisconnect();

  const handleViewOnEtherscan = () => {
    window.open(`https://etherscan.io/address/${address}`, '_blank');
  };

  const handleCopyAddress = () => {
    copyToClipboard(address);
  };

  const { chain } = useNetwork();

  const { connector } = useAccount();

  const handlerSwitcher = () => {
    disconnect();
    openModal();
  };

  return (
    <StyledWalletMenuContent>
      <StyledWalletAndButtons>
        <StyledAddressAvatar>
          <Image
            src="/icons/MetamaskAvatar.svg"
            alt="Metamask Avatar"
            width={32}
            height={32}
          />
          <StyledAddressWrapper>
            {hideMiddleCharacters(address)}
          </StyledAddressWrapper>
        </StyledAddressAvatar>
        <StyledConnectedWith>
          Connected with: <br /> {connector.name}
        </StyledConnectedWith>
        <StyledButtonWrapper>
          <StyledButtonWalletMenu onClick={handlerSwitcher}>
            Switch
          </StyledButtonWalletMenu>
          <StyledButtonWalletMenu onClick={disconnect}>
            Disconnect
          </StyledButtonWalletMenu>
        </StyledButtonWrapper>
      </StyledWalletAndButtons>
      <StyledWalletMenuRows>
        <StyledWalletRow>
          <StyledRowOnline>
            <div></div>
          </StyledRowOnline>
          <StyledRowText>{chain.name}</StyledRowText>
        </StyledWalletRow>
        <StyledWalletRow onClick={handleCopyAddress}>
          <StyledRowIcon>
            <Image src={copy} layout="fill" alt={'copy text'} />
          </StyledRowIcon>
          <StyledRowText>Copy address</StyledRowText>
        </StyledWalletRow>
        <StyledWalletRow onClick={handleViewOnEtherscan}>
          <StyledRowIcon>
            <Image src={etherscan} layout="fill" alt={'etherscan'} />
          </StyledRowIcon>
          <StyledRowText>View on Etherscan</StyledRowText>
        </StyledWalletRow>
      </StyledWalletMenuRows>
    </StyledWalletMenuContent>
  );
};

export default WalletDropdown;
