import { hideMiddleCharacters } from 'Helpers/numberFormatters';
import Image from 'next/image';
import React from 'react';
import { chain, chainId, useDisconnect, useNetwork } from 'wagmi';
import { StyledAddressWrapper } from '../WalletAddressButton/WalletAddressButton.styled';
import {
  StyledAddressAvatar,
  StyledButtonWalletMenu,
  StyledButtonWrapper,
  StyledConnectedWith,
  StyledRowIcon,
  StyledRowOnline,
  StyledRowText,
  StyledWalletMenuContent,
  StyledWalletRow,
} from './WalletDropdown.styled';

const WalletDropdown = ({ address }) => {
  const { disconnect } = useDisconnect();

  const handleViewOnEtherscan = () => {
    window.open(`https://etherscan.io/address/${address}`, '_blank');
  };

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(address);
  };

  const { chain } = useNetwork();
  return (
    <StyledWalletMenuContent>
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
        Connected with: <br /> Metamask
      </StyledConnectedWith>
      <StyledButtonWrapper>
        <StyledButtonWalletMenu>Switch</StyledButtonWalletMenu>
        <StyledButtonWalletMenu onClick={disconnect}>
          Disconnect
        </StyledButtonWalletMenu>
      </StyledButtonWrapper>
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
        <StyledRowText>Copy Address</StyledRowText>
      </StyledWalletRow>
      <StyledWalletRow onClick={handleViewOnEtherscan}>
        <StyledRowIcon>
          <Image src="/icons/ViewOnEtherscan.svg" layout="fill" />
        </StyledRowIcon>
        <StyledRowText>View On Etherscan</StyledRowText>
      </StyledWalletRow>
    </StyledWalletMenuContent>
  );
};

export default WalletDropdown;
