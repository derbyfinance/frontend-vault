import React from 'react';
import {
  copyToClipboard,
  hideMiddleCharacters,
} from '@helpers/helperFunctions';
import Image from 'next/image';
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

const WalletDropdown = ({ address }) => {
  const { disconnect } = useDisconnect();

  const handleViewOnEtherscan = () => {
    window.open(`https://etherscan.io/address/${address}`, '_blank');
  };

  const handleCopyAddress = () => {
    copyToClipboard(address);
  };

  const { chain } = useNetwork();

  const { connector } = useAccount();

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
          <StyledButtonWalletMenu>Switch</StyledButtonWalletMenu>
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
            <Image src="/icons/Copy.svg" layout="fill" />
          </StyledRowIcon>
          <StyledRowText>Copy address</StyledRowText>
        </StyledWalletRow>
        <StyledWalletRow onClick={handleViewOnEtherscan}>
          <StyledRowIcon>
            <Image src="/icons/ViewOnEtherscan.svg" layout="fill" />
          </StyledRowIcon>
          <StyledRowText>View on Etherscan</StyledRowText>
        </StyledWalletRow>
      </StyledWalletMenuRows>
    </StyledWalletMenuContent>
  );
};

export default WalletDropdown;
