import React from 'react';
import ArrowDownComponent from '@components/UI/ArrowDownComponent';
import { hideMiddleCharacters } from '@helpers/helperFunctions';
import Image from 'next/image';
import {
  StyledAddressWrapper,
  StyledArrowContainer,
  StyledWalletAddressBtn,
} from './WalletAddressButton.styled';

const WalletAddressButton = ({
  open,
  address,
}: {
  open: boolean;
  address: string;
}) => {
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
        <ArrowDownComponent open={open} />
      </StyledArrowContainer>
    </StyledWalletAddressBtn>
  );
};

export default WalletAddressButton;
