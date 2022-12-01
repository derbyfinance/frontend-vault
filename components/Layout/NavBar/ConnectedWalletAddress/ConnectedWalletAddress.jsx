import DropDownMenu from '@components/Common/DropDownMenu/DropDownMenu';
import React, { useState } from 'react';
import { useAccount } from 'wagmi';
import { StyledWalletAddressContainer } from './ConnectedWalletAddress.styled';
import WalletAddressButton from './WalletAddressButton/WalletAddressButton';
import WalletDropdown from './WalletDropdown/WalletDropdown';

const ConnectedWalletAddress = () => {
  const [open, setOpen] = useState(false);

  const onOpen = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  const { address } = useAccount();

  return (
    <StyledWalletAddressContainer>
      <DropDownMenu
        dropDownButton={<WalletAddressButton address={address} open={open} />}
        open={open}
        onOpen={onOpen}
        onClose={onClose}
      >
        {open && <WalletDropdown address={address} />}
      </DropDownMenu>
    </StyledWalletAddressContainer>
  );
};

export default ConnectedWalletAddress;
