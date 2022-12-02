import { ArrowDown } from '@icons/index';
import { hideMiddleCharacters } from '@helpers/helperFunctions';
import Image from 'next/image';
import React from 'react';
import {
  StyledAddressWrapper,
  StyledArrowContainer,
  StyledWalletAddressBtn,
} from './WalletAddressButton.styled';

const WalletAddressButton = ({ open, address }) => {
  return (
    <StyledWalletAddressBtn>
      <Image
        src="/icons/MetamaskAvatar.svg"
        alt="Metamask Avatar"
        width={32}
        height={32}
      />
      <StyledAddressWrapper>
        {hideMiddleCharacters(address)}
      </StyledAddressWrapper>
      <StyledArrowContainer open={open}>
        <ArrowDown />
      </StyledArrowContainer>
    </StyledWalletAddressBtn>
  );
};

export default WalletAddressButton;
